import type { IFormValues, TFormErrors } from "./consultation.types";

interface IValidateConsultationFormArgs {
  values: IFormValues;
  selectedServices: Array<string>;
}

// I could use zod for this but though to task description i just needed to check if its empty or not anb use controlled forms so i didn't bother
const validateConsultationForm = ({
  values,
  selectedServices,
}: IValidateConsultationFormArgs): TFormErrors => {
  const errors: TFormErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "نام و نام خانوادگی را وارد کنید.";
  }

  if (!values.email.trim()) {
    errors.email = "آدرس ایمیل را وارد کنید.";
  }

  if (!values.phone.trim()) {
    errors.phone = "شماره تماس را وارد کنید.";
  }

  if (selectedServices.length === 0) {
    errors.services = "حداقل یک نوع سرویس را انتخاب کنید.";
  }

  return errors;
};

export default validateConsultationForm;
