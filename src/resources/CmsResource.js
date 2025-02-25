import Cms from "kurama-api/src/app/models/Cms.js";

const CmsResource = {
  resource: Cms,
  options: {
    parent: {
      icon: "Database",
    },
    properties: {
      cms_id: {
        isVisible: { list: true, filter: true, show: true, edit: false },
        position: 1,
      },
      title: {
        isVisible: { list: true, filter: true, show: true, edit: true },
        position: 2,
        isRequired: true,
      },
      key: {
        isVisible: { list: true, filter: true, show: true, edit: true },
        position: 3,
        isRequired: true,
      },
      content: {
        type: "richtext",
        isVisible: { list: false, filter: false, show: true, edit: true },
        position: 4,
        isRequired: true,
      },
      status: {
        isVisible: { list: true, filter: true, show: true, edit: true },
        position: 5,
        isRequired: true,
        availableValues: [
          { value: "pending", label: "Pendente" },
          { value: "archived", label: "Arquivado" },
          { value: "published", label: "Publicado" },
        ],
      },
      created_by: {
        isVisible: { list: true, filter: true, show: true, edit: false },
      },
      is_active: {
        isVisible: { list: true, filter: true, show: true, edit: true },
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
      new: {
        before: async (request) => {
          // ...existing code...
          return request;
        },
        label: "Novo",
      },
      edit: {
        before: async (request) => {
          // ...existing code...
          return request;
        },
        label: "Editar",
      },
    },
  },
};

export default CmsResource;
