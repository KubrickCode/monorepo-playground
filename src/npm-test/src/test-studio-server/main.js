#!/usr/bin/env node

import express from "express";
import path from "path";
import open from "open";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 4321;

app.use(express.static(path.join(__dirname, "../../dist")));
app.use(express.json({ extended: true }));

const configPath = path.resolve(process.cwd(), "kubrick-config.json");
let config = {};

// Try reading the configuration file
try {
  config = JSON.parse(fs.readFileSync(configPath, "utf8"));
} catch (error) {
  console.error(
    "Failed to read configuration file at " + configPath + ":",
    error
  );
  process.exit(1); // Optionally exit if config is critical
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../dist/index.html"));
});

app.post("/create-json", (req, res) => {
  const filePath = path.resolve(
    process.cwd(),
    config.jsonFilePath || "./output.json"
  );
  const data = { test: "hello world" };

  const dir = path.dirname(filePath);
  fs.mkdir(dir, { recursive: true }, (err) => {
    if (err) {
      console.error("Directory creation failed:", err);
      return res.status(500).send({ message: "Failed to create directory" });
    }

    fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8", (err) => {
      if (err) {
        console.error("File writing failed:", err);
        return res.status(500).send({ message: "Failed to create file" });
      }
      res.send({ message: "File created successfully", path: filePath });
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  open(`http://localhost:${port}`);
});
