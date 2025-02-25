export const hasAdminPermission = (user) => {
  return user.role === "admin";
};

export const hasUserPermission = (user) => {
  return user.role === "user";
};

export const hasManagerPermission = (user) => {
  return user.role === "manager";
};
