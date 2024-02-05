export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["ahf1.jpg","ahf10.jpg","ahf11.jpg","ahf12.jpg","ahf13.jpg","ahf14.jpg","ahf15.jpg","ahf16.jpg","ahf17.jpg","ahf18.jpg","ahf19.jpg","ahf2.jpg","ahf20.jpg","ahf21.jpg","ahf22.jpg","ahf3.jpg","ahf4.jpg","ahf5.jpg","ahf6.jpg","ahf7.jpg","ahf8.jpg","ahf9.jpg","anni6.png","favicon.png","logos/ahflogos.png","logos/ahflogos5.png","logos/anni3.jpg","logos/facebook-16.png","logos/insta.png","logos/linkedin-16.png","logos/twitter-16.png","logos/youtube.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.215VoOq2.js","app":"_app/immutable/entry/app.korUD3d4.js","imports":["_app/immutable/entry/start.215VoOq2.js","_app/immutable/chunks/entry.01uJHHgx.js","_app/immutable/chunks/scheduler.52csaXAD.js","_app/immutable/chunks/index.djrGJN7p.js","_app/immutable/entry/app.korUD3d4.js","_app/immutable/chunks/scheduler.52csaXAD.js","_app/immutable/chunks/index.JDZc7ghi.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
