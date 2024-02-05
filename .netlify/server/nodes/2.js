

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.aw3lym1i.js","_app/immutable/chunks/scheduler.KzoUHsVk.js","_app/immutable/chunks/index.looUxSgk.js"];
export const stylesheets = ["_app/immutable/assets/2.5cE4SzAJ.css"];
export const fonts = [];
