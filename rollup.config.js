import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { defineConfig } from "rollup";
import del from "rollup-plugin-delete";
import external from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-ts";

export default defineConfig(({ watch }) => ({
  input: "./src/index.ts",
  output: [
    {
      file: "./build/index.cjs",
      format: "cjs",
      interop: "auto",
    },
    {
      file: "./build/index.mjs",
      format: "esm",
    },
  ],
  plugins: [
    !watch && del({ targets: "build/*" }),
    external(),
    resolve(),
    commonjs(),
    typescript({
      hook: {
        outputPath: (path) => path.replace(/d\.(m|c)ts/, "d.ts"),
      },
    }),
  ],
}));
