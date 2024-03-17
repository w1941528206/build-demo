import * as esbuild from "esbuild";

await esbuild
  .build({
    entryPoints: ["./src/index.jsx"],
    bundle: true,
    loader: {
      ".tsx": "tsx",
      ".less": "css",
    },
    outfile: "public/dist/out.js",
  })
  .then(() => console.log("build finished!"));
