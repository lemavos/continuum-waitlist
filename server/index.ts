import express, { type Request, type Response } from "express";
import fs from "node:fs";
import path from "node:path";

const app = express();
const staticPath = path.resolve(process.cwd(), "dist/public");

app.use(express.static(staticPath));

app.get("*", (_req: Request, res: Response) => {
  const indexPath = path.resolve(staticPath, "index.html");

  if (fs.existsSync(indexPath)) {
    return res.sendFile(indexPath);
  }

  return res.status(404).send(`Frontend nao encontrado em: ${indexPath}`);
});

export default app;

if (process.env.NODE_ENV !== "production") {
  const port = Number(process.env.PORT) || 3000;
  app.listen(port, () => console.log(`Rodando em http://localhost:${port}`));
}