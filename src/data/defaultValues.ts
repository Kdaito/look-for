import { Auth, Requirement, UserData } from "./type";

export const authDefault: Auth = {
  email: "",
  password: "",
};

export const userDefault: UserData = {
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
