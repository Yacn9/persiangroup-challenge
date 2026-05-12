"use client";

import { Call, ProfileCircle, Sms } from "iconsax-reactjs";

import Button from "@/components/ui/button";
import Checkbox from "@/components/ui/checkbox";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";

import useConsultationForm from "./use-consultation-form";

const serviceOptions = [
  "خدمات سئو",
  "طراحی و توسعه سایت",
  "اتوماسیون بازاریابی",
  "کمپین‌های بازاریابی و تبلیغاتی",
  "خدمات تولید محتوا",
];

const ConsultationForm = () => {
  const {
    values,
    errors,
    selectedServices,
    isSubmitting,
    handleInputChange,
    handleServiceChange,
    handleSubmit,
  } = useConsultationForm();

  return (
    <form
      className="rounded-lg border border-black-100 bg-white px-6 py-8 shadow-[0_1px_8px_rgba(20,20,20,0.03)] md:px-9 md:py-8"
      noValidate
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="grid gap-5 md:grid-cols-3">
        <Input
          label="نام و نام خانوادگی خود را وارد کنید"
          placeholder="نام و نام خانوادگی"
          icon={ProfileCircle}
          value={values.fullName}
          error={errors.fullName}
          onChange={handleInputChange("fullName")}
        />

        <Input
          label="آدرس ایمیل خود را وارد کنید"
          placeholder="email address@mail.comمثلا "
          icon={Sms}
          value={values.email}
          error={errors.email}
          onChange={handleInputChange("email")}
        />

        <Input
          label="شماره تماس خود را وارد کنید"
          placeholder="021-123456789"
          icon={Call}
          value={values.phone}
          error={errors.phone}
          onChange={handleInputChange("phone")}
        />
      </div>

      <div className="mt-8">
        <p className="mb-4 text-right text-xs font-semibold text-black-700 md:text-sm">
          نوع سرویس(های) مورد نظر خود را انتخاب کنید.
        </p>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
          {serviceOptions.map((service, index) => {
            const isLastOddItem =
              serviceOptions.length % 2 !== 0 &&
              index === serviceOptions.length - 1;

            return (
              <Checkbox
                key={service}
                label={service}
                checked={selectedServices.includes(service)}
                onCheckedChange={(checked) =>
                  handleServiceChange(service, checked)
                }
                className={
                  isLastOddItem ? "col-span-2 lg:col-span-1" : undefined
                }
              />
            );
          })}
        </div>

        {errors.services ? (
          <p className="mt-2 text-right text-xs text-red-500">
            {errors.services}
          </p>
        ) : null}
      </div>

      <Textarea
        wrapperClassName="mt-8"
        label="در مورد درخواست خود برای ما بنویسید."
        value={values.description}
        onChange={handleInputChange("description")}
        placeholder="توضیحات (اختیاری)"
        error={errors.description}
      />

      <div className="mt-8 flex justify-center">
        <Button
          type="button"
          variant="secondary"
          size="md"
          disabled={isSubmitting}
          onClick={handleSubmit}
          className="min-w-72 rounded-xl"
        >
          {isSubmitting ? "در حال ثبت..." : "ثبت درخواست"}
        </Button>
      </div>
    </form>
  );
};

export default ConsultationForm;
