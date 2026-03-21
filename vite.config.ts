import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { nitro } from "nitro/vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), nitro()],
    base: "vite-starter",
    build: {
        outDir: "docs",
    },
});
