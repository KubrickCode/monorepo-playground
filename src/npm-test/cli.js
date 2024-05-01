#!/usr/bin/env node

import express from "express";
import path from "path";
import open from "open";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 4321;

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  open(`http://localhost:${port}`);
});
