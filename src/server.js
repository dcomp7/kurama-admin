import dotenv from "dotenv";
import db from "./database/index.js";

import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";
import pt_BR from "./locale/index.js";
import express from "express";
import UsersResource from "./resources/UsersResource.js";

import Customer from "kurama-api/src/app/models/Customer.js";
import Cms from "kurama-api/src/app/models/Cms.js";
import Order from "kurama-api/src/app/models/Order.js";
import OrderItem from "kurama-api/src/app/models/OrderItem.js";
import OrderInvoice from "kurama-api/src/app/models/OrderInvoice.js";
import OrderHistory from "kurama-api/src/app/models/OrderHistory.js";
import Product from "kurama-api/src/app/models/Product.js";
import Media from "kurama-api/src/app/models/Media.js";
import CustomerReview from "kurama-api/src/app/models/CustomerReview.js";
import Category from "kurama-api/src/app/models/Category.js";
import Trip from "kurama-api/src/app/models/Trip.js";
import ProductItem from "kurama-api/src/app/models/ProductItem.js";
import PaymentTransaction from "kurama-api/src/app/models/PaymentTransaction.js";
import PaymentMethod from "kurama-api/src/app/models/PaymentMethod.js";
import PaymentEvent from "kurama-api/src/app/models/PaymentEvent.js";
import OrderTicket from "kurama-api/src/app/models/OrderTicket.js";

dotenv.config();
AdminJS.registerAdapter(AdminJSSequelize);

const app = express();

const admin = new AdminJS({
  databases: [],
  rootPath: "/admin",
  resources: [
    UsersResource,
    { resource: Cms },
    { resource: Trip },
    { resource: Product },
    { resource: Category },
    { resource: Customer },
  ],
  branding: {
    companyName: "Kurama Admin",
    logo: false,
    softwareBrothers: false,
    withMadeWithLove: false,
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
