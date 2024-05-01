import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function copyTestStudioDist() {
  const sourceDir = path.join(__dirname, "src/test-studio/dist");
  const targetDir = path.join(__dirname, "dist");

  try {
    await fs.ensureDir(targetDir);
    await fs.copy(sourceDir, targetDir, {
      overwrite: true,
    });
    console.log("Successfully copied test-studio/dist to dist/");
  } catch (error) {
    console.error("Failed to copy files:", error);
    process.exit(1);
  }
}

copyTestStudioDist();
