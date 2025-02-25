import UserModel from "kurama-api/src/app/models/User.js";
import { hasAdminPermission } from "../services/auth.js";

const UsersResource = {
  resource: UserModel,
  options: {
    properties: {
      user_id: {
        isVisible: { list: true, filter: true, show: true, edit: false },
        position: 1,
      },
      name: {
        isVisible: { list: true, filter: true, show: true, edit: true },
        position: 2,
      },
      email: {
        isVisible: { list: true, filter: true, show: true, edit: true },
        position: 3,
      },
      password: {
        type: "password",
        isVisible: { list: false, filter: false, show: false, edit: true },
      },
      password_hash: {
        isVisible: false,
      },
      is_active: {
        isVisible: { list: false, filter: true, show: true, edit: true },
      },
      created_at: {
        isVisible: { list: true, filter: true, show: true, edit: false },
      },
      modified_at: {
        isVisible: { list: true, filter: true, show: true, edit: false },
      },
    },
    actions: {
      list: {
        isAccessible: ({ currentAdmin }) => hasAdminPermission(currentAdmin),
      },
    },
  },
};

export default UsersResource;
