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
      const stream = await renderToReadableStream(<Index />);
      return new Response(stream, {
        headers: { "Content-Type": "text/html" },
      });
    } else {
      return new Response("Not found", { status: 404 });
    }
  },
});
