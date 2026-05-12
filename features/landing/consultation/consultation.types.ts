interface IFormValues {
  fullName: string;
  email: string;
  phone: string;
  description: string;
}

type TFormErrors = Partial<Record<keyof IFormValues | "services", string>>;

export type { IFormValues, TFormErrors };
