import dotenv from "dotenv";
import db from "./database/index.js";

import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";
import pt_BR from "./locale/index.js";
import express from "express";
import UsersResource from "./resources/UsersResource.js";

dotenv.config();
AdminJS.registerAdapter(AdminJSSequelize);

const app = express();

const admin = new AdminJS({
  databases: [],
  rootPath: "/admin",
  resources: [UsersResource],
  branding: {
    companyName: "Painel Admin",
  },
  cache: false,
  locale: {
    language: "en",
    availableLanguages: ["en", "es", "pt-BR"],
    translations: {
      "pt-BR": pt_BR,
    },
  },
});

const adminRouter = AdminJSExpress.buildRouter(admin);
app.use(admin.options.rootPath, adminRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`AdminJS rodando em http://localhost:${PORT}/admin`);
});
