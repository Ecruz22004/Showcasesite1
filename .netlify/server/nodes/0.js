import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.hhe-8QBL.js","_app/immutable/chunks/scheduler.KzoUHsVk.js","_app/immutable/chunks/index.looUxSgk.js","_app/immutable/chunks/index.tUMvt6aE.js"];
export const stylesheets = ["_app/immutable/assets/0.mXarUn8y.css"];
export const fonts = [];
