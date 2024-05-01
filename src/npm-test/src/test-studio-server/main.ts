#!/usr/bin/env node

import express, { Request, Response } from "express";
import path from "path";
import open from "open";
import { fileURLToPath } from "url";
import fs from "fs-extra";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 4321;

app.use(express.static(path.join(__dirname, "../../dist")));
app.use(express.json());

const configPath = path.resolve(process.cwd(), "kubrick-config.json");
let config: { jsonFilePath?: string } = {};

try {
  config = JSON.parse(fs.readFileSync(configPath, "utf8"));
} catch (error) {
  console.error(
    "Failed to read configuration file at " + configPath + ":",
    error
  );
  process.exit(1);
}

app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../dist/index.html"));
});

app.post("/create-json", (req: Request, res: Response) => {
  const filePath = path.resolve(
    process.cwd(),
    config.jsonFilePath || "./output.json"
  );
  const data = { test: "hello world" };

  const dir = path.dirname(filePath);
  fs.mkdir(dir, { recursive: true })
    .then(() => {
      return fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
    })
    .then(() => {
      res.send({ message: "File created successfully", path: filePath });
    })
    .catch((err: Error) => {
      console.error("File writing failed:", err);
      res.status(500).send({ message: "Failed to create file" });
    });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  open(`http://localhost:${port}`);
});
