// pathの名前はここで管理する
const mainPath = "/main";

export const pathNames = {
  signIn: "/auth/sign-in",
  signUp: "/auth/sign-up",
  home: "/",
  main: mainPath,
  register: `${mainPath}/register`,
  edit: `${mainPath}/:id/edit`,
  setting: `${mainPath}/setting`,
};
