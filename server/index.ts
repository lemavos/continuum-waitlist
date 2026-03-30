import express, { type RequestHandler } from "express";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Configuração para ES Modules (importante para resolver caminhos)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

/**
 * Na Vercel, o diretório de execução (process.cwd()) é a raiz do projeto.
 * O build do Vite geralmente gera a pasta 'dist'. 
 * Ajustamos para garantir que ele encontre os arquivos estáticos.
 */
const staticPath = path.resolve(process.cwd(), "dist");

// Serve os arquivos estáticos (JS, CSS, Imagens)
app.use(express.static(staticPath));

const renderApp: RequestHandler = (_req, res) => {
  const indexPath = path.join(staticPath, "index.html");

  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    // Log útil para debugar no painel da Vercel caso o build falhe
    console.error(`Caminho não encontrado: ${indexPath}`);
    res.status(404).send("Frontend não encontrado. Verifique se o build do Vite foi executado.");
  }
};

// Rota "catch-all" para o SPA (Single Page Application)
app.get("*", renderApp);

// Exportar o app é OBRIGATÓRIO para a Vercel Functions funcionar
export default app;

// Inicia o servidor apenas em desenvolvimento local
if (process.env.NODE_ENV !== "production") {
  const port = Number(process.env.PORT) || 3000;
  app.listen(port, () => {
    console.log(`🚀 Servidor local: http://localhost:${port}`);
    console.log(`📂 Servindo arquivos de: ${staticPath}`);
  });
}