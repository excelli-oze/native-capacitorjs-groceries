import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.Uy4DSX6R.js","_app/immutable/chunks/scheduler.FLmlRqdj.js","_app/immutable/chunks/index.qEUg-WN-.js","_app/immutable/chunks/each.CuygwpM4.js","_app/immutable/chunks/utils.D7pUn0qA.js","_app/immutable/chunks/preload-helper.CN7R4D5X.js","_app/immutable/chunks/index.CpHgRmVI.js","_app/immutable/chunks/entry.C4lqNRiB.js","_app/immutable/chunks/stores.BaorquDV.js"];
export const stylesheets = ["_app/immutable/assets/0.BkJbz6Si.css"];
export const fonts = [];
