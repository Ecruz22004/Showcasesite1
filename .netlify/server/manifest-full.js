export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["anni6.png","logos/ahflogos.png","logos/ahflogos5.png","logos/anni3.jpg","logos/facebook-16.png","logos/favicon.png","logos/insta.png","logos/linkedin-16.png","logos/twitter-16.png","logos/youtube.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.yJ-hqvJe.js","app":"_app/immutable/entry/app.LBmmis6o.js","imports":["_app/immutable/entry/start.yJ-hqvJe.js","_app/immutable/chunks/entry.bl8jDwDa.js","_app/immutable/chunks/scheduler.KzoUHsVk.js","_app/immutable/chunks/index.tUMvt6aE.js","_app/immutable/entry/app.LBmmis6o.js","_app/immutable/chunks/scheduler.KzoUHsVk.js","_app/immutable/chunks/index.looUxSgk.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
