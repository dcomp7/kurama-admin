import User from "kurama-api/src/app/models/User.js";

const UsersResource = {
  resource: User,
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
      new: {
        before: async (request) => {
          if (request.payload.password) {
            request.payload = {
              ...request.payload,
              password_hash: await User.hashPassword(request.payload.password),
              password: undefined,
            };
          }
          return request;
        },
        label: "Novo",
      },
      edit: {
        before: async (request) => {
          if (request.payload.password) {
            request.payload = {
              ...request.payload,
              password_hash: await User.hashPassword(request.payload.password),
              password: undefined,
            };
          }
          return request;
        },
        label: "Editar",
      },
    },
  },
};

export default UsersResource;
