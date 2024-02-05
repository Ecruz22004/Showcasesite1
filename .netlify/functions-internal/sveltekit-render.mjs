import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["ahf1.jpg","anni6.png","favicon.png","logos/ahflogos.png","logos/ahflogos5.png","logos/anni3.jpg","logos/facebook-16.png","logos/insta.png","logos/linkedin-16.png","logos/twitter-16.png","logos/youtube.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.MKH9HoT_.js","app":"_app/immutable/entry/app.NhIkg-ha.js","imports":["_app/immutable/entry/start.MKH9HoT_.js","_app/immutable/chunks/entry.Uo-yUoin.js","_app/immutable/chunks/scheduler.KzoUHsVk.js","_app/immutable/chunks/index.tUMvt6aE.js","_app/immutable/entry/app.NhIkg-ha.js","_app/immutable/chunks/scheduler.KzoUHsVk.js","_app/immutable/chunks/index.looUxSgk.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
