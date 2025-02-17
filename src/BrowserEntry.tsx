import { hydrateRoot } from "react-dom/client";
import App from "./App";

const root = document.getElementById("root")!;

hydrateRoot(root, <App />);
