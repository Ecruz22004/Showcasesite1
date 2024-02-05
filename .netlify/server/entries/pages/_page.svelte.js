import { c as create_ssr_component, j as each, a as add_attribute } from "../../chunks/ssr.js";
const css = {
  code: "figure.svelte-4bh3od.svelte-4bh3od{position:relative;display:flex;flex-direction:column}figure.svelte-4bh3od svg.svelte-4bh3od,.img-bg.svelte-4bh3od.svelte-4bh3od{height:16rem;width:16rem}@media(min-width: 768px){figure.svelte-4bh3od svg.svelte-4bh3od,.img-bg.svelte-4bh3od.svelte-4bh3od{height:20rem;width:20rem}}.img-bg.svelte-4bh3od.svelte-4bh3od{position:absolute;z-index:-1;border-radius:9999px;--tw-blur:blur(50px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;animation:svelte-4bh3od-pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,\n			svelte-4bh3od-glow 5s linear infinite}@keyframes svelte-4bh3od-glow{0%{background-color:rgb(var(--color-primary-400) / 0.5)}33%{background-color:rgb(var(--color-secondary-400) / 0.5)}66%{background-color:rgb(var(--color-tertiary-400) / 0.5)}100%{background-color:rgb(var(--color-primary-400) / 0.5)}}@keyframes svelte-4bh3od-pulse{50%{transform:scale(1.5)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const images = /* @__PURE__ */ Object.assign({});
  const imageUrls = Object.keys(images);
  $$result.css.add(css);
  return `  <div class="container h-full mx-auto flex justify-center items-center"><div class="space-y-10 text-center flex flex-col items-center" data-svelte-h="svelte-1waqcim"><h2 class="h2">TRANSFORM</h2>  <figure class="svelte-4bh3od"><section class="img-bg svelte-4bh3od"></section> <svg class="fill-token -scale-x-[100%] svelte-4bh3od" xmlns="http://www.w3.org/2000/svg"><image href="/anni6.png"></image></svg></figure>  <div class="justify-center space-x-2"><p>Cultural, educational, and humanitarian charity that
			transforms public perception of Asian and Indigenous
			legacy with $1.7 million in community and
			philanthropic impact since 2020.</p></div></div> <main class="relative min-h-screen flex flex-col justify-center overflow-hidden"><div class="w-full max-w-5xl mx-auto px-4 md:px-6 py-24"><div class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"><ul class="flex items-center justify-center md:justify-start animate-infinite-scroll" aria-hidden="true">${each(imageUrls, (img) => {
    return `<li class="mx-8"><img class="max-w-none"${add_attribute("src", img, 0)} alt="Airbnb"> </li>`;
  })}</ul></div></div></main> </div>`;
});
export {
  Page as default
};
