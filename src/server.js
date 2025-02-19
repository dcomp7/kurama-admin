import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import express from "express";


const app = express();
const adminJs = new AdminJS({
    resources: [],
    rootPath: "/admin",
    databases: []
});

const router = AdminJSExpress.buildRouter(adminJs);
app.use(adminJs.options.rootPath, router);
app.listen(5000, () => console.log("AdminJS is under localhost:5000/admin"));
