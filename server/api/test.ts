import { defineHandler } from "nitro";

export default defineHandler(async (event) => {
    return { message: "Hello from Nitro!" };
});
