
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://127.0.0.1:8000/odd-jobs-co/graphql/",
  documents: "src/**/*.graphql",
  generates: {
    "src/generated/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
