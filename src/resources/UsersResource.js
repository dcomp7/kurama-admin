import User from "kurama-api/src/app/models/User.js";

const UsersResource = {
  resource: User,
  options: {
    parent: {
      icon: "User",
    },
    properties: {
      user_id: {
        isVisible: { list: true, filter: true, show: true, edit: false },
        position: 1,
      },
      name: {
        isVisible: { list: true, filter: true, show: true, edit: true },
        position: 2,
        isRequired: true,
      },
      email: {
        isVisible: { list: true, filter: true, show: true, edit: true },
        position: 3,
        isRequired: true,
      },
      role: {
        isVisible: { list: true, filter: true, show: true, edit: true },
        position: 4,
        isRequired: true,
        availableValues: [
          { value: "admin", label: "Administrador" },
          { value: "manager", label: "Gerenciador" },
          { value: "user", label: "Usuário" },
        ],
      },
      password: {
        type: "password",
        isVisible: { list: false, filter: false, show: false, edit: true },
      },
      password_hash: {
        isVisible: false,
      },
      is_active: {
        isVisible: { list: false, filter: false, show: false, edit: false },
        availableValues: [
          { value: "yes", label: "Ativo" },
          { value: "no", label: "Inativo" },
        ],
      },
      created_at: {
        isVisible: { list: true, filter: true, show: true, edit: false },
      },
      modified_at: {
        isVisible: { list: true, filter: true, show: true, edit: false },
      },
    },
    actions: {
      resetPassword: {
        actionType: "record",
        icon: "Password",
        isVisible: true,
        handler: async (request, response, context) => {
          return {
            record: context.record.toJSON(),
          };
        },
      },
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
