import { i as defineHandler } from "../../_libs/h3+rou3+srvx.mjs";
//#region server/api/test.ts
var test_default = defineHandler(async (event) => {
	return { message: "Hello from Nitro!" };
});
//#endregion
export { test_default as default };
