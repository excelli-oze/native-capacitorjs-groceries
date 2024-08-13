import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.BgKR2Txm.js","_app/immutable/chunks/scheduler.2sQ1eBph.js","_app/immutable/chunks/index.ur5PK8xl.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/utils.BTQTK8J1.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/index.Kxl9Blxd.js","_app/immutable/chunks/entry.DPDAdYUY.js","_app/immutable/chunks/stores.clFvmKhH.js"];
export const stylesheets = ["_app/immutable/assets/0.C9r2EFe3.css"];
export const fonts = [];
