import {
  Auth,
  RequirementData,
  RequirementDataForValidation,
  UserData,
  UserDataForValidation,
} from "./type";

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

export const userDefaultForValidation: UserDataForValidation = {
  ...userDefault,
  iconFile: null,
};

export const requirementDefault: RequirementData = {
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

export const requirementDataForValidation: RequirementDataForValidation = {
  ...requirementDefault,
  imageFile: null,
};
