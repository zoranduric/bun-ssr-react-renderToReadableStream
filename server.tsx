import { renderToReadableStream } from "react-dom/server";
import { Index } from "./src/Index";

const port = process.env.PORT || 3000;

console.log(
  `Launching Bun HTTP server on port: ${port}, url: http://0.0.0.0:${port} 🚀`
);

Bun.serve({
  async fetch(req) {
    const { pathname } = new URL(req.url);
    if (pathname === "/") {
      const App = require("./src/App").default;
      const stream = await renderToReadableStream(
        <Index children={<App />} />,
        {
          bootstrapScripts: ["/index.js"],
        }
      );
      return new Response(stream, {
        headers: { "Content-Type": "text/html" },
      });
    } else if (pathname === "/index.js") {
      const buildOutput = await Bun.build({
        entrypoints: ["./src/BrowserEntry.tsx"],
      });
      return new Response(await buildOutput.outputs[0].text(), {
        headers: { "Content-Type": "text/javascript" },
      });
    } else {
      return new Response("Not found", { status: 404 });
    }
  },
});
