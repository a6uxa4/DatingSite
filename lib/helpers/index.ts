import { IGetNews, TitleKeys } from "@/common/news.interface";

export const USER_KEY = "_@user";

const windowIsExists = () =>
  typeof window !== "undefined" && window.localStorage;

export const getUserFromStorage = () => {
  if (windowIsExists()) {
    const user = localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
  }
  return null;
};

export const removeUserFromStorage = () => {
  if (windowIsExists()) {
    localStorage.removeItem(USER_KEY);
  }
};

export const saveUserToStorage = (data: any) => {
  if (windowIsExists()) localStorage.setItem(USER_KEY, JSON.stringify(data));
};

export function getTitleKey(
  pathName: string,
  data: IGetNews,
  keyTitle: string
): TitleKeys {
  const key = `${keyTitle}${pathName.split("/")[1].toUpperCase()}`;
  if (key in data) {
    return key as TitleKeys;
  }
  throw new Error(`Invalid path name: ${pathName}`);
}
