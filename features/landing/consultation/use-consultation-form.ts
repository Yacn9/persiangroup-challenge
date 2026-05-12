import { type ChangeEvent, useState } from "react";

import type { IFormValues, TFormErrors } from "./consultation.types";
import validateConsultationForm from "./consultation.validation";

const initialValues: IFormValues = {
  fullName: "",
  email: "",
  phone: "",
  description: "",
};

const useConsultationForm = () => {
  const [values, setValues] = useState<IFormValues>(initialValues);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [errors, setErrors] = useState<TFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange =
    (field: keyof IFormValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const nextValue = event.target.value;

      setValues((currentValues) => ({
        ...currentValues,
        [field]: nextValue,
      }));

      setErrors((currentErrors) => ({
        ...currentErrors,
        [field]: nextValue.trim() ? undefined : currentErrors[field],
      }));
    };

  const handleServiceChange = (service: string, checked: boolean) => {
    setSelectedServices((currentServices) =>
      checked
        ? [...currentServices, service]
        : currentServices.filter(
            (currentService) => currentService !== service,
          ),
    );

    setErrors((currentErrors) => ({
      ...currentErrors,
      services: undefined,
    }));
  };

  const handleSubmit = async () => {
    const nextErrors = validateConsultationForm({
      values,
      selectedServices,
    });

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });

    console.log("فرم ارسال شد");

    setValues(initialValues);
    setSelectedServices([]);

    setIsSubmitting(false);
  };

  return {
    values,
    errors,
    selectedServices,
    isSubmitting,
    handleInputChange,
    handleServiceChange,
    handleSubmit,
  };
};

export default useConsultationForm;
