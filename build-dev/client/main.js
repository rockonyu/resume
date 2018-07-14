/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate"];
/******/ 	window["webpackHotUpdate"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var head = document.getElementsByTagName("head")[0];
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "hot-update." + hotCurrentHash.substr(0, 6) + ".js";
/******/ 		;
/******/ 		head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "hot-update." + hotCurrentHash.substr(0, 6) + ".json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "2af3b2d66d93815f6f65";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (typeof dep === "undefined") hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (typeof dep === "undefined") hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			for(var chunkId in installedChunks)
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/client/style.css":
/*!********************************************************!*\
  !*** ./node_modules/css-loader!./src/client/style.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}[hidden]{display:none}\\r\\n\\r\\n* {\\r\\n    box-sizing: border-box;\\r\\n    font-family: 微軟正黑體;\\r\\n    position: relative;\\r\\n    vertical-align: top;\\r\\n    -webkit-print-color-adjust: exact;\\r\\n}\\r\\n\\r\\nhtml,body{\\r\\n  width: 100%; height: 100%;\\r\\n  padding: 0; margin: 0;\\r\\n}\\r\\n\\r\\nhr {\\r\\n  margin-bottom: 2em;\\r\\n}\\r\\n\\r\\nol, ul {\\r\\n  padding-left: 1.5em;\\r\\n  margin-top: 0;\\r\\n}\\r\\n\\r\\n ol > li, ul > li {\\r\\n    line-height: 1.8em;\\r\\n    padding-left: .5em;\\r\\n  }\\r\\n\\r\\n.wrapper {\\r\\n  width: 1024px;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n  overflow: hidden;\\r\\n  box-shadow: 0px 0px 15px rgba(0,0,0,.2);\\r\\n  min-height: 100vh;\\r\\n  background-color: #ececec;\\r\\n}\\r\\n\\r\\n.header {\\r\\n    text-align: center;\\r\\n    background-color: #2f393b;\\r\\n    color: white;\\r\\n    padding: 2em;\\r\\n    height: 280px;\\r\\n}\\r\\n\\r\\n.header > p {\\r\\n  font-size: 120%;\\r\\n  font-weight: 900;\\r\\n  padding: 1em; margin: 0;\\r\\n}\\r\\n\\r\\n.header > h1 {\\r\\n    font-size: 3em;\\r\\n    letter-spacing: 1em;\\r\\n    padding: 0 4em 1em 5em;\\r\\n    margin: 0;\\r\\n    display: inline-block;\\r\\n    border-bottom: solid 1px white;\\r\\n}\\r\\n\\r\\n.header > h3 {\\r\\n  margin: .5em;\\r\\n}\\r\\n\\r\\n.header > h3 > span {\\r\\n  padding: .5em;\\r\\n  padding-left: 1.5em;\\r\\n  border: solid 1px white;\\r\\n  letter-spacing: 1em;\\r\\n  top: -1.2em;\\r\\n  background-color: #2f393b;\\r\\n}\\r\\n\\r\\n.aside {\\r\\n  display: flex;\\r\\n  flex: 1;\\r\\n  box-sizing: border-box;\\r\\n  text-align: center;\\r\\n  background-color: #ececec;\\r\\n}\\r\\n\\r\\n.avatar {\\r\\n  border-radius: 100%;\\r\\n  display: inline-block;\\r\\n  overflow: hidden;\\r\\n  margin: 0 auto;\\r\\n  margin-top: 3em;\\r\\n}\\r\\n\\r\\n.avatar > img {\\r\\n  width: 180px;\\r\\n  height: 180px;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  border-bottom: solid 1px #2f393b;\\r\\n  padding-bottom: .5em;\\r\\n  padding-top: 1em;\\r\\n  letter-spacing: 5px;\\r\\n}\\r\\n\\r\\n.aside > .container {\\r\\n  text-align: left;\\r\\n  padding: 0 2em; \\r\\n  margin: 0;\\r\\n  margin-bottom: 4em;\\r\\n}\\r\\n\\r\\n.aside > .container > .title {\\r\\n  margin-bottom: 0;\\r\\n}\\r\\n\\r\\n.aside > .container > ul {\\r\\n  margin-top: 0;\\r\\n  list-style: none;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.aside > .container > ul > li {\\r\\n  border-bottom: solid 1px #2f393b;\\r\\n  padding: .5em 0;\\r\\n}\\r\\n\\r\\n.aside > .container span {\\r\\n  display: inline-block;\\r\\n  word-wrap: break-word;\\r\\n  width: 70%;\\r\\n}\\r\\n\\r\\n.aside > .container span.label {\\r\\n  width: 30%;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n.main {\\r\\n  display: flex;\\r\\n  flex: 2;\\r\\n  box-sizing: border-box;\\r\\n  background-color: white;\\r\\n}\\r\\n\\r\\n.main > .container {\\r\\n  padding: 0 2em;\\r\\n  margin: 0; \\r\\n  margin-bottom: 4em;\\r\\n  transition: all .5s;\\r\\n  -moz-transition:all .5s;\\r\\n  -webkit-transition: all .5s;\\r\\n  -o-transition: all .5s;\\r\\n  opacity: 1;\\r\\n}\\r\\n\\r\\n.main > .container p {\\r\\n  line-height: 2em;\\r\\n  white-space: pre-line;\\r\\n}\\r\\n\\r\\n.rollout {\\r\\n  opacity: 0!important;\\r\\n  position: absolute;\\r\\n}\\r\\n\\r\\n.work {\\r\\n  border-left: solid 3px #ececec;\\r\\n  padding: 0 0 1em 2em;\\r\\n  margin-left: 70px;\\r\\n  top: 10px;\\r\\n}\\r\\n\\r\\n.work > .label {\\r\\n  margin: 0;\\r\\n  padding-bottom: .5em;\\r\\n  letter-spacing: 2px;\\r\\n}\\r\\n\\r\\n.work > p {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.work > .time-flag, .work h3, .work h4, .work p {\\r\\n  top: -10px;\\r\\n}\\r\\n\\r\\n.time-flag {\\r\\n  position: absolute;\\r\\n  display: inline-block;\\r\\n  left: -5.65em;\\r\\n  font-size: 12px;\\r\\n}\\r\\n\\r\\n.time-flag span {\\r\\n  background-color: #2f393b;\\r\\n  color: white;\\r\\n  padding: 3px .5em 3px 1em;\\r\\n  display: inline-block;\\r\\n  height: 22px;\\r\\n  width: 48px;\\r\\n  line-height: 17px;\\r\\n}\\r\\n\\r\\n.time-flag span:after {\\r\\n  content: \\\"\\\";\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  right: -10px;\\r\\n  width: 0;\\r\\n  height: 0;\\r\\n  border-style: solid;\\r\\n  border-width: 11px 0 11px 10px;\\r\\n  border-color: transparent transparent transparent #2f393b;\\r\\n}\\r\\n\\r\\n.time-flag p {\\r\\n  padding-left: 1em;\\r\\n}\\r\\n\\r\\n.time-point {\\r\\n  display: inline-block;\\r\\n  width: .5em;\\r\\n  height: .5em;\\r\\n  border-radius: 100%;\\r\\n  background-color: #2f393b;\\r\\n  left: 1em;\\r\\n  top: .6em;\\r\\n}\\r\\n\\r\\n.w33{\\r\\n  width: 33.3%;\\r\\n  display: inline-block;\\r\\n}\\r\\n\\r\\n.w50 {\\r\\n  width: 50%;\\r\\n  display: inline-block;\\r\\n}\\r\\n\\r\\n.bar {\\r\\n  border: solid 1px #2f393b;\\r\\n}\\r\\n\\r\\n.bar-title{\\r\\n  margin: .3em 0;\\r\\n  margin-bottom: 1em;\\r\\n}\\r\\n.foo {\\r\\n  height: .8em;\\r\\n  background-color: #2f393b;\\r\\n}\\r\\n\\r\\n.foo-text {\\r\\n  margin-top: .3em;\\r\\n  text-align: right;\\r\\n}\\r\\n\\r\\n.pie {\\r\\n  width: 200px;\\r\\n  height: 200px;\\r\\n  background-color: #ececec;\\r\\n  border-radius: 100%;\\r\\n  overflow: hidden;\\r\\n  top: 1.5em;\\r\\n  left: 3.5em;\\r\\n}\\r\\n\\r\\n.pie-rect {\\r\\n  width: 200px;\\r\\n  height: 200px;\\r\\n  position: absolute;\\r\\n}\\r\\n\\r\\n.rect-1 {\\r\\n  background-color: #2f393b;\\r\\n  left: 50%;\\r\\n  z-index: 1;\\r\\n}\\r\\n\\r\\n.rect-2 {\\r\\n  background-color: #2f393b;\\r\\n  top: -85%;\\r\\n  left: -15%;\\r\\n  transform: rotate(-140deg);\\r\\n  transform-origin: 100% 100%;\\r\\n  z-index: 1;\\r\\n}\\r\\n\\r\\n.rect-3 {\\r\\n  background-color: #c3c3c3;\\r\\n  top: -40%;\\r\\n  left: -35%;\\r\\n  transform: rotate(-40deg);\\r\\n  transform-origin: 100% 100%;\\r\\n  z-index: 0;\\r\\n}\\r\\n\\r\\n.pie-text {\\r\\n  width: 82.5%;\\r\\n  height: 82.5%;\\r\\n  background-color: white;\\r\\n  left: 17px;\\r\\n  top: 17px;\\r\\n  text-align: center;\\r\\n  line-height: 165px;\\r\\n  font-weight: 600;\\r\\n  z-index: 2;\\r\\n}\\r\\n\\r\\n.pie-desc{\\r\\n  top: 3em;\\r\\n  list-style: none;\\r\\n  text-align: right;\\r\\n  padding-right: 2em;\\r\\n}\\r\\n\\r\\n.pie-desc > li {\\r\\n  line-height: 1.5em;\\r\\n}\\r\\n\\r\\n.pie-desc > li:after {\\r\\n  content: \\\"\\\";\\r\\n  top: .25em;\\r\\n  right: -1.25em;\\r\\n  width: 1em;\\r\\n  height: 1em;\\r\\n  position:absolute;\\r\\n}\\r\\n\\r\\n.pie-desc > li:first-child:after{\\r\\n  background-color: #2f393b;\\r\\n}\\r\\n\\r\\n.pie-desc > li:nth-child(2):after{\\r\\n  background-color: #c3c3c3;\\r\\n}\\r\\n\\r\\n.pie-desc > li:last-child:after{\\r\\n  background-color: #ececec;\\r\\n}\\r\\n\\r\\na {\\r\\n  color: #2f393b;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n    text-decoration: none;\\r\\n    display: inline-block;\\r\\n    background-color: #2f393b;\\r\\n    color: white;\\r\\n    padding: 5px 10px;\\r\\n    margin: .75em .5em 0 0;\\r\\n    transition: .25s;\\r\\n    border: solid 1px #2f393b;\\r\\n    line-height: 1em;\\r\\n}\\r\\n\\r\\n.btn:hover{\\r\\n    color: #2f393b;\\r\\n    background-color: #ececec;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  background-color: #2f393b;\\r\\n  padding: 2em;\\r\\n  color: white;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 480px) {\\r\\n    .header > h1 {\\r\\n      padding: 0px .1em 1em 1.1em;\\r\\n    }\\r\\n\\r\\n    .header > h3 > span {\\r\\n      letter-spacing: .5em;\\r\\n      padding-left: 1em;\\r\\n    }\\r\\n\\r\\n    .aside, .main {\\r\\n      width: 100vw;\\r\\n    }\\r\\n\\r\\n    .aside > .container, .main > .container {\\r\\n      margin: 0 0 4em 0;\\r\\n    }\\r\\n\\r\\n    .w33, .w50 {\\r\\n      width: 100%;\\r\\n    }\\r\\n\\r\\n    .work {\\r\\n      padding: 0 0 1em 1em;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 1024px){\\r\\n  .wrapper {\\r\\n    width: 100vw;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media only screen and (min-width: 480px) and (max-width: 1024px){\\r\\n  .aside {\\r\\n    width: 33vw;\\r\\n  }\\r\\n\\r\\n  .main {\\r\\n    width: 66vw;\\r\\n  }\\r\\n  .main.lock {\\r\\n    left: 33vw;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media only screen and (min-width: 1024px){\\r\\n  .main.lock {\\r\\n    left: 350px;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media only screen and (min-width: 480px){\\r\\n  .aside.lock {\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n  }\\r\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/client/style.css?./node_modules/css-loader");

/***/ }),

/***/ "./src/client/App.tsx":
/*!****************************!*\
  !*** ./src/client/App.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar react_hot_loader_1 = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\");\r\nvar result = __webpack_require__(/*! ../resume.json */ \"./src/resume.json\");\r\nvar resume = result;\r\nvar components_1 = __webpack_require__(/*! ./components */ \"./src/client/components/index.ts\");\r\nexports.App = function () { return (React.createElement(\"div\", null,\r\n    React.createElement(components_1.Header, { name: resume.basics.name, label: resume.basics.label }),\r\n    React.createElement(\"div\", { style: { display: \"flex\" } },\r\n        React.createElement(components_1.Aside, { name: resume.basics.name, enname: resume.basics.enname, mobile: resume.basics.phone, email: resume.basics.email, languages: resume.languages, profiles: resume.basics.profiles }),\r\n        React.createElement(components_1.Main, { summary: resume.basics.summary, techs: resume.techs, skills: resume.skills, daily: resume.daily, education: resume.education, work: resume.work, projects: resume.projects })))); };\r\nexports.default = react_hot_loader_1.hot(module)(exports.App);\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/client/App.tsx?");

/***/ }),

/***/ "./src/client/components/Aside.tsx":
/*!*****************************************!*\
  !*** ./src/client/components/Aside.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar Aside = function (_a) {\r\n    var name = _a.name, enname = _a.enname, mobile = _a.mobile, email = _a.email, languages = _a.languages, profiles = _a.profiles;\r\n    return (React.createElement(\"div\", { className: \"aside\" },\r\n        React.createElement(\"div\", { className: \"container\" },\r\n            React.createElement(\"h3\", { className: \"title\" }, \"CONTACT\"),\r\n            React.createElement(\"ul\", null,\r\n                React.createElement(\"li\", null,\r\n                    React.createElement(\"span\", { className: \"label\" }, \"Name\"),\r\n                    React.createElement(\"span\", null, name + ' ' + enname)),\r\n                React.createElement(\"li\", null,\r\n                    React.createElement(\"span\", { className: \"label\" }, \"Mobile\"),\r\n                    React.createElement(\"span\", null, mobile)),\r\n                React.createElement(\"li\", null,\r\n                    React.createElement(\"span\", { className: \"label\" }, \"Email\"),\r\n                    React.createElement(\"span\", null, email))),\r\n            React.createElement(\"h3\", { className: \"title\" }, \"LANGUAGES\"),\r\n            React.createElement(\"ul\", null, languages.map(function (item, index) {\r\n                return React.createElement(\"li\", { key: index },\r\n                    React.createElement(\"span\", { className: \"label\" }, item.name),\r\n                    React.createElement(\"span\", null, item.level));\r\n            })),\r\n            React.createElement(\"h3\", { className: \"title\" }, \"LINKS\"),\r\n            profiles.map(function (item, index) {\r\n                return React.createElement(\"a\", { className: \"btn\", href: \"${item.url}\", target: \"_blank\", key: index }, item.network);\r\n            }))));\r\n};\r\nexports.default = Aside;\r\n\n\n//# sourceURL=webpack:///./src/client/components/Aside.tsx?");

/***/ }),

/***/ "./src/client/components/Header.tsx":
/*!******************************************!*\
  !*** ./src/client/components/Header.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar Header = function (_a) {\r\n    var name = _a.name, label = _a.label;\r\n    return (React.createElement(\"div\", { className: \"header\" },\r\n        React.createElement(\"p\", null, \"THE PROGRAMER\"),\r\n        React.createElement(\"h1\", null, name),\r\n        React.createElement(\"h3\", null,\r\n            React.createElement(\"span\", null, label))));\r\n};\r\nexports.default = Header;\r\n\n\n//# sourceURL=webpack:///./src/client/components/Header.tsx?");

/***/ }),

/***/ "./src/client/components/Layout.ts":
/*!*****************************************!*\
  !*** ./src/client/components/Layout.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Layout = function (_a) {\r\n    var title = _a.title, body = _a.body, styles = _a.styles;\r\n    return \"\\n  <!doctype html>\\n  <html \\u26A1>\\n    <head>\\n      <meta charset=\\\"utf-8\\\">\\n      <script async src=\\\"https://cdn.ampproject.org/v0.js\\\"></script>\\n      <title>\" + title + \"</title>\\n      <link rel=\\\"canonical\\\" href=\\\"http://rockonyu.github.io/resume\\\">\\n      <meta name=\\\"viewport\\\" content=\\\"width=device-width,minimum-scale=1,initial-scale=1\\\">\\n      <script type=\\\"application/ld+json\\\">\\n        {\\n          \\\"@context\\\": \\\"http://schema.org\\\",\\n          \\\"@type\\\": \\\"NewsArticle\\\",\\n          \\\"headline\\\": \\\"Open-source framework for publishing content\\\",\\n          \\\"datePublished\\\": \\\"2015-10-07T12:02:41Z\\\",\\n          \\\"image\\\": [\\n            \\\"logo.jpg\\\"\\n          ]\\n        }\\n      </script>\\n      <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>\\n      <style amp-custom>\\n        \" + styles + \"\\n      </style>\\n    </head>\\n    <body>\\n      <div id=\\\"app\\\">\" + body + \"</div>\\n    </body>\\n  </html>\\n\";\r\n};\r\nexports.default = Layout;\r\n\n\n//# sourceURL=webpack:///./src/client/components/Layout.ts?");

/***/ }),

/***/ "./src/client/components/Main.tsx":
/*!****************************************!*\
  !*** ./src/client/components/Main.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar Main = function (_a) {\r\n    var summary = _a.summary, techs = _a.techs, skills = _a.skills, daily = _a.daily, education = _a.education, work = _a.work, projects = _a.projects;\r\n    return (React.createElement(\"div\", { className: \"main\" },\r\n        React.createElement(\"div\", { className: \"container\" },\r\n            React.createElement(\"h3\", { className: \"title\" }, \"PROFILE\"),\r\n            React.createElement(\"p\", null, summary),\r\n            React.createElement(\"h3\", { className: \"title\" }, \"SKILL\"),\r\n            React.createElement(\"div\", { className: \"w33\" }, techs.map(function (item) { return (React.createElement(\"div\", { key: item.label },\r\n                React.createElement(\"h3\", { className: \"bar-title\" }, item.label),\r\n                React.createElement(\"ol\", null, item.names.map(function (skill, index) {\r\n                    return React.createElement(\"li\", { key: skill }, skill);\r\n                })))); })),\r\n            React.createElement(\"hr\", null),\r\n            React.createElement(\"div\", { className: \"w50\" }, skills.map(function (item, index) { return (React.createElement(\"div\", { key: item.name },\r\n                React.createElement(\"h4\", { className: \"bar-title\" }, item.name),\r\n                React.createElement(\"div\", { className: \"bar\" },\r\n                    React.createElement(\"div\", { className: \"foo\", style: { width: item.score + '%' } })),\r\n                React.createElement(\"div\", { className: \"foo-text\" }, item.level))); })),\r\n            React.createElement(\"div\", { className: \"w50\" },\r\n                React.createElement(\"div\", { className: \"pie\" },\r\n                    React.createElement(\"div\", { className: \"pie-rect rect-1\" }),\r\n                    React.createElement(\"div\", { className: \"pie-rect rect-2\" }),\r\n                    React.createElement(\"div\", { className: \"pie-rect rect-3\" }),\r\n                    React.createElement(\"div\", { className: \"pie pie-text\" }, \"Daily\")),\r\n                React.createElement(\"ul\", { className: \"pie-desc\" }, daily.map(function (item) { return (React.createElement(\"li\", { key: item },\r\n                    \"$\",\r\n                    item)); }))),\r\n            React.createElement(\"h3\", { className: \"title\" }, \"EDUCATION\"),\r\n            education.map(function (item, index) { return (React.createElement(\"div\", { className: \"work\", key: index },\r\n                React.createElement(\"div\", { className: \"time-flag\" },\r\n                    React.createElement(\"span\", null, item.endDate),\r\n                    React.createElement(\"div\", { className: \"time-point\" }),\r\n                    React.createElement(\"p\", null, item.startDate)),\r\n                React.createElement(\"h3\", { className: \"label\" }, item.institution + ' ' + item.studyType),\r\n                item.summary ? React.createElement(\"p\", null, item.summary) : '')); }),\r\n            React.createElement(\"h3\", { className: \"title\" }, \"WORK\"),\r\n            work.map(function (item, index) { return (React.createElement(\"div\", { className: \"work\", key: index },\r\n                React.createElement(\"div\", { className: \"time-flag\" },\r\n                    React.createElement(\"span\", null, item.endDate),\r\n                    React.createElement(\"div\", { className: \"time-point\" }),\r\n                    React.createElement(\"p\", null, item.startDate)),\r\n                React.createElement(\"h3\", { className: \"label\" }, item.position),\r\n                React.createElement(\"h4\", { className: \"label\" }, item.company),\r\n                item.summary ? React.createElement(\"p\", null,\r\n                    \"$\",\r\n                    item.summary) : '')); }),\r\n            React.createElement(\"h3\", { className: \"title\" }, \"PROJECTS\"),\r\n            projects.map(function (item, index) { return (React.createElement(\"div\", { className: \"work\", key: index },\r\n                React.createElement(\"div\", { className: \"time-flag\" },\r\n                    React.createElement(\"span\", null, item.releaseDate),\r\n                    React.createElement(\"div\", { className: \"time-point\" }),\r\n                    item.fromDate ? React.createElement(\"p\", null,\r\n                        \"$\",\r\n                        item.fromDate) : ''),\r\n                React.createElement(\"h3\", { className: \"label\" },\r\n                    React.createElement(\"a\", { href: item.website, target: \"_blank\" }, item.name)),\r\n                React.createElement(\"ul\", null, item.highlights.map(function (highlight) {\r\n                    return React.createElement(\"li\", { key: highlight },\r\n                        \"$\",\r\n                        highlight);\r\n                })))); }))));\r\n};\r\nexports.default = Main;\r\n\n\n//# sourceURL=webpack:///./src/client/components/Main.tsx?");

/***/ }),

/***/ "./src/client/components/index.ts":
/*!****************************************!*\
  !*** ./src/client/components/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Header_1 = __webpack_require__(/*! ./Header */ \"./src/client/components/Header.tsx\");\r\nexports.Header = Header_1.default;\r\nvar Aside_1 = __webpack_require__(/*! ./Aside */ \"./src/client/components/Aside.tsx\");\r\nexports.Aside = Aside_1.default;\r\nvar Main_1 = __webpack_require__(/*! ./Main */ \"./src/client/components/Main.tsx\");\r\nexports.Main = Main_1.default;\r\nvar Layout_1 = __webpack_require__(/*! ./Layout */ \"./src/client/components/Layout.ts\");\r\nexports.Layout = Layout_1.default;\r\n\n\n//# sourceURL=webpack:///./src/client/components/index.ts?");

/***/ }),

/***/ "./src/client/index.tsx":
/*!******************************!*\
  !*** ./src/client/index.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar ReactDOM = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\r\nvar App_1 = __webpack_require__(/*! ./App */ \"./src/client/App.tsx\");\r\n__webpack_require__(/*! ./style.css */ \"./src/client/style.css\");\r\nReactDOM.render(React.createElement(App_1.default, null), document.getElementById('app'));\r\n\n\n//# sourceURL=webpack:///./src/client/index.tsx?");

/***/ }),

/***/ "./src/client/style.css":
/*!******************************!*\
  !*** ./src/client/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!./style.css */ \"./node_modules/css-loader/index.js!./src/client/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(true) {\n\tmodule.hot.accept(/*! !../../node_modules/css-loader!./style.css */ \"./node_modules/css-loader/index.js!./src/client/style.css\", function() {\n\t\tvar newContent = __webpack_require__(/*! !../../node_modules/css-loader!./style.css */ \"./node_modules/css-loader/index.js!./src/client/style.css\");\n\n\t\tif(typeof newContent === 'string') newContent = [[module.i, newContent, '']];\n\n\t\tvar locals = (function(a, b) {\n\t\t\tvar key, idx = 0;\n\n\t\t\tfor(key in a) {\n\t\t\t\tif(!b || a[key] !== b[key]) return false;\n\t\t\t\tidx++;\n\t\t\t}\n\n\t\t\tfor(key in b) idx--;\n\n\t\t\treturn idx === 0;\n\t\t}(content.locals, newContent.locals));\n\n\t\tif(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');\n\n\t\tupdate(newContent);\n\t});\n\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//# sourceURL=webpack:///./src/client/style.css?");

/***/ }),

/***/ "./src/resume.json":
/*!*************************!*\
  !*** ./src/resume.json ***!
  \*************************/
/*! exports provided: basics, work, education, training, projects, techs, skills, daily, languages, interests, recommended, conslusion, default */
/***/ (function(module) {

eval("module.exports = {\"basics\":{\"name\":\"張瑀\",\"enname\":\"Austin\",\"label\":\"網頁程式設計師\",\"picture\":\"http://graph.facebook.com/1358756972/picture?type=large\",\"email\":\"drivers_high1937@hotmail.com\",\"skype\":\"austin@infbeyond.com\",\"phone\":\"0919-185854\",\"website\":\"https://rockonyu.github.io\",\"birthday\":\"1988-08-26\",\"summary\":\"Austin 從事網頁開發約五年，由資訊工程系踏入網頁開發，起初擔任後端工程師，近兩年轉向前後端分離的開發模式 (使用 ASP.Net Web API 與 Angular2)，由於很喜歡 Isomorphic JavaScript 的概念，正持續學習 JavaScript 語言特性並逐步加強透過 Node.js 做為後端的開發方式。\\n希望能加入有競爭力與企圖心、主要使用 JavaScript 開發的團隊，期望與優秀的工程師與設計師合作維護大型產品，並面對來自大量使用者或效能的考驗。\",\"location\":{\"address\":\"楠梓區中泰街119巷32號\",\"postalCode\":\"811\",\"city\":\"高雄市\",\"countryCode\":\"TW\",\"region\":\"左營\"},\"profiles\":[{\"network\":\"Facebook\",\"username\":\"張瑀\",\"url\":\"https://www.facebook.com/profile.php?id=1358756972\"},{\"network\":\"Linkedin\",\"username\":\"張瑀\",\"url\":\"https://www.linkedin.com/in/austin119/\"}]},\"work\":[{\"company\":\"大心數位 / 多奇數位股份有限公司\",\"position\":\"網頁程式設計師\",\"website\":\"http://www.infbeyond.com/\",\"year\":\"至今\",\"startDate\":\"2014\",\"endDate\":\"至今\",\"extraInfo\":true,\"summary\":\"負責需求訪談、系統規劃與專案主功能實作 (包跨資料庫設計、後端與前端 JavaScript)，使用 ASP.NET MVC 或 ASP.NET Web API & Angular 進行專案開發。\",\"highlights\":[]},{\"company\":\"日月光半導體資訊部\",\"position\":\"SAP 資訊工程師\",\"website\":\"http://www.aseglobal.com/ch/\",\"year\":\"2014\",\"startDate\":\"2012\",\"endDate\":\"2014\",\"summary\":\"負責維護 SAP 財務模組與協助財務部門進行資產盤點、折舊與結帳作業，使用 ABAP 與 C# 語言進行開發。\",\"highlights\":[]}],\"education\":[{\"institution\":\"逢甲大學\",\"area\":\"\",\"studyType\":\"資訊工程學系\",\"startDate\":\"2006\",\"endDate\":\"2010\",\"gpa\":\"\",\"summary\":\"副修網際網路學程，畢業專題是 JAVA 車牌辨識系統。\",\"courses\":[]}],\"training\":[{\"institution\":\"酷奇教育訓練 & SKILLTREE\",\"area\":\"\",\"studyType\":\"\",\"startDate\":\"\",\"endDate\":\"至今\",\"gpa\":\"\",\"summary\":\"\",\"courses\":[\"2014-08-16 前端工程訓練：JavaScript 與 TypeScript 開發實戰\",\"2014-08-17 AngularJS 開發實戰：新手入門篇\",\"2015-05-31 Entity Framework 6 開發實戰\",\"2015-08-30 AngularJS 開發實戰：模組開發篇\",\"2015-10-25 前端工程訓練：npm, bower, yo, gulp, webpack 應用實戰\",\"2015-12-26 JavaScript 開發實戰：核心概念篇\",\"2016-04-24 Visual Studio 2015 開發與偵錯技巧\",\"2016-05-29 JavaScript 開發實戰：核心概念篇\",\"2016-08-13 Angular2 開發實戰：新手入門\",\"2016-09-03 ASP.NET Web API 2 開發實戰\",\"2017-03-26 ASP.NET MVC 5 開發實戰：從入門到進階\",\"2017-06-10 物件導向實作課程 (使用 C#)\"]}],\"projects\":[{\"name\":\"電影蛋糕\",\"owner\":\"MOMA 摩瑪科技\",\"releaseDate\":\"2017\",\"fromDate\":\"2014\",\"website\":\"http://www.moviecaker.com/\",\"summary\":\"\",\"highlights\":[\"前端使用 Vue.js 與 Angular2 (子網站)\",\"使用快取增加頁面載入速度\",\"可以使用 Oauth2 的 Bear token 授權用戶\",\"使用無限滾動載入的資料，可以在頁面轉換之間保存\",\"支援微信與微信公眾號的第三方登入\",\"重構大量程式碼並加入單元測試以保持可用性\",\"電影海報可等比例縮放，支援多種不同尺寸的海報\"]},{\"name\":\"高雄市線上即時服務系統\",\"owner\":\"雙葉電子\",\"releaseDate\":\"2016\",\"website\":\"https://soweb.kcg.gov.tw/RWD/\",\"summary\":\"\",\"highlights\":[\"使用 Angular2 建立的 SPA 網站\",\"使用 Hash Location Strategy 進行前端路由\",\"透過 Http Service 取得後端 Web API 資源\"]},{\"name\":\"台灣愛惠浦\",\"owner\":\"3W Creative 三角創意\",\"releaseDate\":\"2017\",\"fromDate\":\"2015\",\"website\":\"http://www.everpure.tw/\",\"summary\":\"\",\"highlights\":[\"前台購物車介面使用 AngularJS\",\"購物車網站串接紅陽金流與日翊物流\",\"透過 T4 樣板產生客製的 CRUD 頁面\",\"後台報表可以匯出 CSV\",\"使用 Entity Framework Code-First 模式開發\",\"會員系統使用 identity 2.x\"]},{\"name\":\"好室配\",\"owner\":\"3W Creative 三角創意\",\"releaseDate\":\"2014\",\"website\":\"https://www.housepal.tw/\",\"summary\":\"\",\"highlights\":[\"使用 Entity Framework DB-First 模式開發\",\"使用 ASP.Net MVC4 與 SimpleMemberShip 會員系統\"]},{\"name\":\"PDA 資產盤點系統\",\"owner\":\"\",\"releaseDate\":\"2013\",\"website\":\"javascript:void(0)\",\"summary\":\"\",\"highlights\":[\"Win CE & WinForm\",\"使用 PDA 掃描資產條碼進行盤點作業\"]},{\"name\":\"固定資產查詢系統\",\"owner\":\"\",\"releaseDate\":\"2012\",\"website\":\"javascript:void(0)\",\"summary\":\"\",\"highlights\":[\"WebForm 與 Oracle DB 資料存取\",\"使用 ADO.Net 進行資料庫存取\"]}],\"techs\":[{\"label\":\"Backend\",\"names\":[\"ASP.Net MVC\",\"ASP.Net Web API\",\"Entity Framework\",\"LINQ\",\"C#\",\"SQL Server\",\"IIS 7.5\",\"ASP.Net WebForm\"]},{\"label\":\"Frontend\",\"names\":[\"Angular2\",\"Angular-CLI\",\"Vue.js\",\"JavaScript\",\"HTML\",\"CSS\",\"Browsersync\",\"Bootstrap\",\"Semantic-UI\",\"AngularJS\",\"jQuery\"]},{\"label\":\"Tools & Testing\",\"names\":[\"Git\",\"Visual Studio 2017\",\"Visual Studio Code\",\"NPM\",\"docker\",\"Postman\",\"Selenium\",\"xUnit\"]}],\"skills\":[{\"name\":\"Backend Develop\",\"score\":80,\"level\":\"熟悉\"},{\"name\":\"Frontend Develop\",\"score\":75,\"level\":\"熟悉\"},{\"name\":\"Communication & Teamwork\",\"score\":70,\"level\":\"熟悉\"},{\"name\":\"Performance Tuning\",\"score\":65,\"level\":\"中等到熟悉\"},{\"name\":\"System Analysis\",\"score\":50,\"level\":\"中等\"}],\"daily\":[\"Backend Develop\",\"Frontend Develop\",\"Others\"],\"languages\":[{\"name\":\"中文\",\"level\":\"精通\"},{\"name\":\"英文\",\"level\":\"可以閱讀長篇文件\"}],\"interests\":[{\"name\":\"\",\"keywords\":[\"ASP.NET Core\",\"TDD 測試導向開發\",\"Angular2\",\"同構 JavaScript 應用程式\"]}],\"recommended\":[{\"name\":\"ilandy\",\"position\":\"大心數位 - 前端工程師\",\"summary\":\"Austin 是我見過最重視使用者體驗的後端工程師\"}],\"conslusion\":\"我是張瑀，希望下一段故事能在您的公司延續。\"};\n\n//# sourceURL=webpack:///./src/resume.json?");

/***/ }),

/***/ 0:
/*!******************************************************************************!*\
  !*** multi webpack-hot-middleware/client?reload=true ./src/client/index.tsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! webpack-hot-middleware/client?reload=true */\"./node_modules/webpack-hot-middleware/client.js?reload=true\");\nmodule.exports = __webpack_require__(/*! ./src/client/index.tsx */\"./src/client/index.tsx\");\n\n\n//# sourceURL=webpack:///multi_webpack-hot-middleware/client?");

/***/ })

/******/ });