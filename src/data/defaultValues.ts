import { Auth, User, Requirement } from "./type";

export const authDefault: Auth = {
  email: "",
  password: "",
};

export const userDefault: User = {
  firstName: "",
  firstNameKana: "",
  lastName: "",
  lastNameKana: "",
  phoneNumber: "",
};

export const requirementDefault: Requirement = {
  title: "",
  text: "",
  status: null,
  period: {
    startDate: null,
    endDate: null,
  },
  email: "",
  phoneNumber: "",
  createdBy: "",
};
