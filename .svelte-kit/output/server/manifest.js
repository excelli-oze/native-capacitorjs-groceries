export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.4bhcMXFV.js","app":"_app/immutable/entry/app.C4ve_OQn.js","imports":["_app/immutable/entry/start.4bhcMXFV.js","_app/immutable/chunks/entry.DPDAdYUY.js","_app/immutable/chunks/scheduler.2sQ1eBph.js","_app/immutable/chunks/index.Kxl9Blxd.js","_app/immutable/entry/app.C4ve_OQn.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.2sQ1eBph.js","_app/immutable/chunks/index.ur5PK8xl.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
