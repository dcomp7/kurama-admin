const { Storage } = require("@google-cloud/storage");
const { GCPProvider } = require("@adminjs/upload");

const storage = new Storage({
  keyFilename: "../../gcp-storage.json", // Caminho completo para a chave da conta de serviço
});

const gcpProvider = new GCPProvider({
  bucket: "kurama-bucket", // Substitua pelo nome do seu bucket
  storage,
});

module.exports = gcpProvider;
