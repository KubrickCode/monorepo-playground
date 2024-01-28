import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "../nest/schema.graphql",
  config: {
    namingConvention: {
      enumValues: "keep",
    },
  },
  documents: "src/**/*.graphql",
  generates: {
    "src/core/graphql/generated.tsx": {
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
    },
  },
};

export default config;
