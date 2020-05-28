/*!
 * Vue-Lazyload.js v1.1.4
 * (c) 2017 Awe <hilongjw@gmail.com>
 * Released under the MIT License.
 */
! function(e, t) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.VueLazyload = t()
}(this, function() {
	"use strict";

	function e(e, t) {
		if(e.length) {
			var n = e.indexOf(t);
			return n > -1 ? e.splice(n, 1) : void 0
		}
	}

	function t(e, t) {
		if(!e || !t) return e || {};
		if(e instanceof Object)
			for(var n in t) e[n] = t[n];
		return e
	}

	function n(e, t) {
		for(var n = !1, r = 0, i = e.length; r < i; r++)
			if(t(e[r])) {
				n = !0;
				break
			}
		return n
	}

	function r(e, t) {
		if("IMG" === e.tagName && e.getAttribute("data-srcset")) {
			var n = e.getAttribute("data-srcset"),
				r = [],
				i = e.parentNode,
				o = i.offsetWidth * t,
				s = void 0,
				a = void 0,
				u = void 0;
			n = n.trim().split(","), n.map(function(e) {
				e = e.trim(), s = e.lastIndexOf(" "), -1 === s ? (a = e, u = 999998) : (a = e.substr(0, s), u = parseInt(e.substr(s + 1, e.length - s - 2), 10)), r.push([u, a])
			}), r.sort(function(e, t) {
				if(e[0] < t[0]) return -1;
				if(e[0] > t[0]) return 1;
				if(e[0] === t[0]) {
					if(-1 !== t[1].indexOf(".webp", t[1].length - 5)) return 1;
					if(-1 !== e[1].indexOf(".webp", e[1].length - 5)) return -1
				}
				return 0
			});
			for(var l = "", d = void 0, c = r.length, h = 0; h < c; h++)
				if(d = r[h], d[0] >= o) {
					l = d[1];
					break
				}
			return l
		}
	}

	function i(e, t) {
		for(var n = void 0, r = 0, i = e.length; r < i; r++)
			if(t(e[r])) {
				n = e[r];
				break
			}
		return n
	}

	function o() {
		if(!h) return !1;
		var e = !0,
			t = document;
		try {
			var n = t.createElement("object");
			n.type = "image/webp", n.style.visibility = "hidden", n.innerHTML = "!", t.body.appendChild(n), e = !n.offsetWidth, t.body.removeChild(n)
		} catch(t) {
			e = !1
		}
		return e
	}

	function s(e, t) {
		var n = null,
			r = 0;
		return function() {
			if(!n) {
				var i = Date.now() - r,
					o = this,
					s = arguments,
					a = function() {
						r = Date.now(), n = !1, e.apply(o, s)
					};
				i >= t ? a() : n = setTimeout(a, t)
			}
		}
	}

	function a(e) {
		return null !== e && "object" === (void 0 === e ? "undefined" : c(e))
	}

	function u(e) {
		if(!(e instanceof Object)) return [];
		if(Object.keys) return Object.keys(e);
		var t = [];
		for(var n in e) e.hasOwnProperty(n) && t.push(n);
		return t
	}

	function l(e, t) {
		if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function d(e, t) {
		if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		},
		h = "undefined" != typeof window,
		f = h && "IntersectionObserver" in window,
		v = {
			event: "event",
			observer: "observer"
		},
		p = function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
			return h && window.devicePixelRatio || e
		},
		g = function() {
			if(h) {
				var e = !1;
				try {
					var t = Object.defineProperty({}, "passive", {
						get: function() {
							e = !0
						}
					});
					window.addEventListener("test", null, t)
				} catch(e) {}
				return e
			}
		}(),
		y = {
			on: function(e, t, n) {
				var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
				g ? e.addEventListener(t, n, {
					capture: r,
					passive: !0
				}) : e.addEventListener(t, n, r)
			},
			off: function(e, t, n) {
				var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
				e.removeEventListener(t, n, r)
			}
		},
		b = function(e, t, n) {
			var r = new Image;
			r.src = e.src, r.onload = function() {
				t({
					naturalHeight: r.naturalHeight,
					naturalWidth: r.naturalWidth,
					src: r.src
				})
			}, r.onerror = function(e) {
				n(e)
			}
		},
		m = function(e, t) {
			return "undefined" != typeof getComputedStyle ? getComputedStyle(e, null).getPropertyValue(t) : e.style[t]
		},
		L = function(e) {
			return m(e, "overflow") + m(e, "overflow-y") + m(e, "overflow-x")
		},
		w = function(e) {
			if(h) {
				if(!(e instanceof HTMLElement)) return window;
				for(var t = e; t && t !== document.body && t !== document.documentElement && t.parentNode;) {
					if(/(scroll|auto)/.test(L(t))) return t;
					t = t.parentNode
				}
				return window
			}
		},
		_ = function() {
			function e(e, t) {
				for(var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		k = {},
		E = function() {
			function e(t) {
				var n = t.el,
					r = t.src,
					i = t.error,
					o = t.loading,
					s = t.bindType,
					a = t.$parent,
					u = t.options,
					d = t.elRenderer;
				l(this, e), this.el = n, this.src = r, this.error = i, this.loading = o, this.bindType = s, this.attempt = 0, this.naturalHeight = 0, this.naturalWidth = 0, this.options = u, this.filter(), this.initState(), this.performanceData = {
					init: Date.now(),
					loadStart: null,
					loadEnd: null
				}, this.rect = n.getBoundingClientRect(), this.$parent = a, this.elRenderer = d, this.render("loading", !1)
			}
			return _(e, [{
				key: "initState",
				value: function() {
					this.state = {
						error: !1,
						loaded: !1,
						rendered: !1
					}
				}
			}, {
				key: "record",
				value: function(e) {
					this.performanceData[e] = Date.now()
				}
			}, {
				key: "update",
				value: function(e) {
					var t = e.src,
						n = e.loading,
						r = e.error,
						i = this.src;
					this.src = t, this.loading = n, this.error = r, this.filter(), i !== this.src && (this.attempt = 0, this.initState())
				}
			}, {
				key: "getRect",
				value: function() {
					this.rect = this.el.getBoundingClientRect()
				}
			}, {
				key: "checkInView",
				value: function() {
					return this.getRect(), this.rect.top < window.innerHeight * this.options.preLoad && this.rect.bottom > this.options.preLoadTop && this.rect.left < window.innerWidth * this.options.preLoad && this.rect.right > 0
				}
			}, {
				key: "filter",
				value: function() {
					var e = this;
					u(this.options.filter).map(function(t) {
						e.options.filter[t](e, e.options)
					})
				}
			}, {
				key: "renderLoading",
				value: function(e) {
					var t = this;
					b({
						src: this.loading
					}, function(n) {
						t.render("loading", !1), e()
					}, function(n) {
						e(), t.options.silent || console.warn("VueLazyload log: load failed with loading image(" + t.loading + ")")
					})
				}
			}, {
				key: "load",
				value: function() {
					var e = this;
					return this.attempt > this.options.attempt - 1 && this.state.error ? void(this.options.silent || console.log("VueLazyload log: " + this.src + " tried too more than " + this.options.attempt + " times")) : this.state.loaded || k[this.src] ? this.render("loaded", !0) : void this.renderLoading(function() {
						e.attempt++, e.record("loadStart"), b({
							src: e.src
						}, function(t) {
							e.naturalHeight = t.naturalHeight, e.naturalWidth = t.naturalWidth, e.state.loaded = !0, e.state.error = !1, e.record("loadEnd"), e.render("loaded", !1), k[e.src] = 1
						}, function(t) {
							e.state.error = !0, e.state.loaded = !1, e.render("error", !1)
						})
					})
				}
			}, {
				key: "render",
				value: function(e, t) {
					this.elRenderer(this, e, t)
				}
			}, {
				key: "performance",
				value: function() {
					var e = "loading",
						t = 0;
					return this.state.loaded && (e = "loaded", t = (this.performanceData.loadEnd - this.performanceData.loadStart) / 1e3), this.state.error && (e = "error"), {
						src: this.src,
						state: e,
						time: t
					}
				}
			}, {
				key: "destroy",
				value: function() {
					this.el = null, this.src = null, this.error = null, this.loading = null, this.bindType = null, this.attempt = 0
				}
			}]), e
		}(),
		T = function() {
			function e(e, t) {
				for(var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		A = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
		$ = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"],
		z = {
			rootMargin: "0px",
			threshold: 0
		},
		H = function(u) {
			return function() {
				function l(e) {
					var t = e.preLoad,
						n = e.error,
						r = e.throttleWait,
						i = e.preLoadTop,
						a = e.dispatchEvent,
						u = e.loading,
						c = e.attempt,
						h = e.silent,
						f = e.scale,
						g = e.listenEvents,
						y = (e.hasbind, e.filter),
						b = e.adapter,
						m = e.observer,
						L = e.observerOptions;
					d(this, l), this.version = "1.1.4", this.mode = v.event, this.ListenerQueue = [], this.TargetIndex = 0, this.TargetQueue = [], this.options = {
						silent: h || !0,
						dispatchEvent: !!a,
						throttleWait: r || 200,
						preLoad: t || 1.3,
						preLoadTop: i || 0,
						error: n || A,
						loading: u || A,
						attempt: c || 3,
						scale: f || p(f),
						ListenEvents: g || $,
						hasbind: !1,
						supportWebp: o(),
						filter: y || {},
						adapter: b || {},
						observer: !!m,
						observerOptions: L || z
					}, this._initEvent(), this.lazyLoadHandler = s(this._lazyLoadHandler.bind(this), this.options.throttleWait), this.setMode(this.options.observer ? v.observer : v.event)
				}
				return T(l, [{
					key: "config",
					value: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
						t(this.options, e)
					}
				}, {
					key: "performance",
					value: function() {
						var e = [];
						return this.ListenerQueue.map(function(t) {
							e.push(t.performance())
						}), e
					}
				}, {
					key: "addLazyBox",
					value: function(e) {
						this.ListenerQueue.push(e), h && (this._addListenerTarget(window), this._observer && this._observer.observe(e.el), e.$el && e.$el.parentNode && this._addListenerTarget(e.$el.parentNode))
					}
				}, {
					key: "add",
					value: function(e, t, i) {
						var o = this;
						if(n(this.ListenerQueue, function(t) {
								return t.el === e
							})) return this.update(e, t), u.nextTick(this.lazyLoadHandler);
						var s = this._valueFormatter(t.value),
							a = s.src,
							l = s.loading,
							d = s.error;
						u.nextTick(function() {
							a = r(e, o.options.scale) || a, o._observer && o._observer.observe(e);
							var n = Object.keys(t.modifiers)[0],
								s = void 0;
							n && (s = i.context.$refs[n], s = s ? s.$el || s : document.getElementById(n)), s || (s = w(e));
							var c = new E({
								bindType: t.arg,
								$parent: s,
								el: e,
								loading: l,
								error: d,
								src: a,
								elRenderer: o._elRenderer.bind(o),
								options: o.options
							});
							o.ListenerQueue.push(c), h && (o._addListenerTarget(window), o._addListenerTarget(s)), o.lazyLoadHandler(), u.nextTick(function() {
								return o.lazyLoadHandler()
							})
						})
					}
				}, {
					key: "update",
					value: function(e, t) {
						var n = this,
							o = this._valueFormatter(t.value),
							s = o.src,
							a = o.loading,
							l = o.error;
						s = r(e, this.options.scale) || s;
						var d = i(this.ListenerQueue, function(t) {
							return t.el === e
						});
						d && d.update({
							src: s,
							loading: a,
							error: l
						}), this._observer && this._observer.observe(e), this.lazyLoadHandler(), u.nextTick(function() {
							return n.lazyLoadHandler()
						})
					}
				}, {
					key: "remove",
					value: function(t) {
						if(t) {
							this._observer && this._observer.unobserve(t);
							var n = i(this.ListenerQueue, function(e) {
								return e.el === t
							});
							n && (this._removeListenerTarget(n.$parent), this._removeListenerTarget(window), e(this.ListenerQueue, n) && n.destroy())
						}
					}
				}, {
					key: "removeComponent",
					value: function(t) {
						t && (e(this.ListenerQueue, t), this._observer && this._observer.unobserve(t.el), t.$parent && t.$el.parentNode && this._removeListenerTarget(t.$el.parentNode), this._removeListenerTarget(window))
					}
				}, {
					key: "setMode",
					value: function(e) {
						var t = this;
						f || e !== v.observer || (e = v.event), this.mode = e, e === v.event ? (this._observer && (this.ListenerQueue.forEach(function(e) {
							t._observer.unobserve(e.el)
						}), this._observer = null), this.TargetQueue.forEach(function(e) {
							t._initListen(e.el, !0)
						})) : (this.TargetQueue.forEach(function(e) {
							t._initListen(e.el, !1)
						}), this._initIntersectionObserver())
					}
				}, {
					key: "_addListenerTarget",
					value: function(e) {
						if(e) {
							var t = i(this.TargetQueue, function(t) {
								return t.el === e
							});
							return t ? t.childrenCount++ : (t = {
								el: e,
								id: ++this.TargetIndex,
								childrenCount: 1,
								listened: !0
							}, this.mode === v.event && this._initListen(t.el, !0), this.TargetQueue.push(t)), this.TargetIndex
						}
					}
				}, {
					key: "_removeListenerTarget",
					value: function(e) {
						var t = this;
						this.TargetQueue.forEach(function(n, r) {
							n.el === e && (--n.childrenCount || (t._initListen(n.el, !1), t.TargetQueue.splice(r, 1), n = null))
						})
					}
				}, {
					key: "_initListen",
					value: function(e, t) {
						var n = this;
						this.options.ListenEvents.forEach(function(r) {
							return y[t ? "on" : "off"](e, r, n.lazyLoadHandler)
						})
					}
				}, {
					key: "_initEvent",
					value: function() {
						var t = this;
						this.Event = {
							listeners: {
								loading: [],
								loaded: [],
								error: []
							}
						}, this.$on = function(e, n) {
							t.Event.listeners[e].push(n)
						}, this.$once = function(e, n) {
							function r() {
								i.$off(e, r), n.apply(i, arguments)
							}
							var i = t;
							t.$on(e, r)
						}, this.$off = function(n, r) {
							if(!r) return void(t.Event.listeners[n] = []);
							e(t.Event.listeners[n], r)
						}, this.$emit = function(e, n, r) {
							t.Event.listeners[e].forEach(function(e) {
								return e(n, r)
							})
						}
					}
				}, {
					key: "_lazyLoadHandler",
					value: function() {
						var e = !1;
						this.ListenerQueue.forEach(function(t) {
							t.state.loaded || (e = t.checkInView()) && t.load()
						})
					}
				}, {
					key: "_initIntersectionObserver",
					value: function() {
						var e = this;
						f && (this._observer = new IntersectionObserver(this._observerHandler.bind(this), this.options.observerOptions), this.ListenerQueue.length && this.ListenerQueue.forEach(function(t) {
							e._observer.observe(t.el)
						}))
					}
				}, {
					key: "_observerHandler",
					value: function(e, t) {
						var n = this;
						e.forEach(function(e) {
							e.isIntersecting && n.ListenerQueue.forEach(function(t) {
								if(t.el === e.target) {
									if(t.state.loaded) return n._observer.unobserve(t.el);
									t.load()
								}
							})
						})
					}
				}, {
					key: "_elRenderer",
					value: function(e, t, n) {
						if(e.el) {
							var r = e.el,
								i = e.bindType,
								o = void 0;
							switch(t) {
								case "loading":
									o = e.loading;
									break;
								case "error":
									o = e.error;
									break;
								default:
									o = e.src
							}
							if(i ? r.style[i] = "url(" + o + ")" : r.getAttribute("src") !== o && r.setAttribute("src", o), r.setAttribute("lazy", t), this.$emit(t, e, n), this.options.adapter[t] && this.options.adapter[t](e, this.options), this.options.dispatchEvent) {
								var s = new CustomEvent(t, {
									detail: e
								});
								r.dispatchEvent(s)
							}
						}
					}
				}, {
					key: "_valueFormatter",
					value: function(e) {
						var t = e,
							n = this.options.loading,
							r = this.options.error;
						return a(e) && (e.src || this.options.silent || console.error("Vue Lazyload warning: miss src with " + e), t = e.src, n = e.loading || this.options.loading, r = e.error || this.options.error), {
							src: t,
							loading: n,
							error: r
						}
					}
				}]), l
			}()
		},
		O = function(e) {
			return {
				props: {
					tag: {
						type: String,
						default: "div"
					}
				},
				render: function(e) {
					return !1 === this.show ? e(this.tag) : e(this.tag, null, this.$slots.default)
				},
				data: function() {
					return {
						el: null,
						state: {
							loaded: !1
						},
						rect: {},
						show: !1
					}
				},
				mounted: function() {
					this.el = this.$el, e.addLazyBox(this), e.lazyLoadHandler()
				},
				beforeDestroy: function() {
					e.removeComponent(this)
				},
				methods: {
					getRect: function() {
						this.rect = this.$el.getBoundingClientRect()
					},
					checkInView: function() {
						return this.getRect(), h && this.rect.top < window.innerHeight * e.options.preLoad && this.rect.bottom > 0 && this.rect.left < window.innerWidth * e.options.preLoad && this.rect.right > 0
					},
					load: function() {
						this.show = !0, this.state.loaded = !0, this.$emit("show", this)
					}
				}
			}
		};
	return {
		install: function(e) {
			var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
				r = H(e),
				i = new r(n),
				o = "2" === e.version.split(".")[0];
			e.prototype.$Lazyload = i, n.lazyComponent && e.component("lazy-component", O(i)), o ? e.directive("lazy", {
				bind: i.add.bind(i),
				update: i.update.bind(i),
				componentUpdated: i.lazyLoadHandler.bind(i),
				unbind: i.remove.bind(i)
			}) : e.directive("lazy", {
				bind: i.lazyLoadHandler.bind(i),
				update: function(e, n) {
					t(this.vm.$refs, this.vm.$els), i.add(this.el, {
						modifiers: this.modifiers || {},
						arg: this.arg,
						value: e,
						oldValue: n
					}, {
						context: this.vm
					})
				},
				unbind: function() {
					i.remove(this.el)
				}
			})
		}
	}
});