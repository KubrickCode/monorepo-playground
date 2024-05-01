#!/usr/bin/env node

import express, { Request, Response } from "express";
import path from "path";
import open from "open";
import { fileURLToPath } from "url";
import fs from "fs-extra";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 4321;

app.use(express.static(path.join(__dirname, "./")));
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
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.post("/create-json", async (req: Request, res: Response) => {
  const jsonFilePath = path.resolve(
    process.cwd(),
    config.jsonFilePath || "./output.json"
  );
  const tsFilePath = path.resolve(
    process.cwd(),
    config.jsonFilePath
      ? config.jsonFilePath.replace(".json", ".ts")
      : "./output.ts"
  );
  const data = { test: "hello world" };
  const tsContent = `type Data = { test: string };\n\nconst data: Data = { test: "hello world" };\n`;

  const dir = path.dirname(jsonFilePath);

  try {
    await fs.mkdir(dir, { recursive: true });
    await Promise.all([
      fs.writeFile(jsonFilePath, JSON.stringify(data, null, 2), "utf8"),
      fs.writeFile(tsFilePath, tsContent, "utf8"),
    ]);
    res.send({
      message: "Files created successfully",
      jsonPath: jsonFilePath,
      tsPath: tsFilePath,
    });
  } catch (err) {
    console.error("File writing failed:", err);
    res.status(500).send({ message: "Failed to create files" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  open(`http://localhost:${port}`);
});
