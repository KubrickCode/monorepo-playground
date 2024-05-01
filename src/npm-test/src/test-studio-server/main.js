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

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../dist/index.html"));
});

app.post("/create-json", (req, res) => {
  let filePath = req.body.path;
  console.log(filePath);
  const data = { test: "hello world" };

  if (!filePath || typeof filePath !== "string") {
    return res.status(400).send({ message: "Invalid file path provided." });
  }

  filePath = path.resolve(__dirname, filePath);

  if (!filePath.endsWith(".json")) {
    filePath += ".json";
  }

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
