

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/auth/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.gd4BBwiU.js","_app/immutable/chunks/scheduler.2sQ1eBph.js","_app/immutable/chunks/index.ur5PK8xl.js","_app/immutable/chunks/utils.BTQTK8J1.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/index.Kxl9Blxd.js"];
export const stylesheets = [];
export const fonts = [];
