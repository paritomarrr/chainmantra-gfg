(this["webpackJsonpgeeksforgeeks-org"] = this["webpackJsonpgeeksforgeeks-org"] || []).push([
    [0], {
        255: function(e, t, s) {},
        272: function(e, t) {},
        289: function(e, t, s) {},
        297: function(e, t, s) {},
        436: function(e, t, s) {
            "use strict";
            s.r(t);
            var a = s(0),
                c = s.n(a),
                i = s(39),
                n = s.n(i),
                r = (s(255), s(57)),
                o = s(23),
                l = s(2),
                d = s(4),
                g = s(25),
                j = s(41),
                u = s(227),
                m = window.location.protocol,
                h = ("".concat(window.location.origin, "/"), "".concat(m, "//udevtest3.geeksforgeeks.org/"), {
                    GFG_SITE_URL: "https://www.geeksforgeeks.org/",
                    VIDEO_API_URL: "https://apiscript.geeksforgeeks.org/",
                    AUTH_SITE_URL: "https://auth.geeksforgeeks.org/",
                    GFG_PREMIUM_URL: "https://premium.geeksforgeeks.org/",
                    GFG_UTIL_URL: "https://util.geeksforgeeks.org/",
                    GFG_DISCUSS_URL: "https://discuss.geeksforgeeks.org/discuss/",
                    GFG_PRACTICE_URL: "https://practice.geeksforgeeks.org/",
                    GFG_PRACTICE_API_URL: "https://practiceapi.geeksforgeeks.org/",
                    GFG_UTIL_DJANGO_CF_URL: "https://utilapi.geeksforgeeks.org/",
                    GFG_API_URL: "https://api.geeksforgeeks.org/"
                }),
                p = "csrftoken",
                b = "video",
                x = function(e) {
                    return 1 === e ? "category" : "tag"
                },
                f = "https://media.geeksforgeeks.org/",
                O = "https://media.geeksforgeeks.org/auth-dashboard-uploads/video_02082021.png",
                _ = "https://media.geeksforgeeks.org/auth-dashboard-uploads/empty_asset.png",
                v = !0,
                N = "Videos | GeeksforGeeks",
                w = "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png",
                k = "A Computer Science portal for geeks. It contains well written, well thought and well explained computer science and programming articles, quizzes and practice/competitive programming/company interview Questions.",
                y = "gfgThemeDark",
                S = function(e, t) {
                    false
                },
                L = s(228),
                C = s.n(L),
                G = s(42),
                T = s.n(G),
                R = function() {
                    return /http(s)?:\/\/(premium)\.geeksforgeeks\.org/.test(window.location.origin)
                },
                E = function(e) {
                    return e && !T.a.isEmpty(e) ? "?".concat(C.a.stringify(e)) : ""
                };

            function I(e) {
                for (var t = null, s = document.cookie.split(";"), a = 0; a < s.length; a++) {
                    var c = s[a].split("=");
                    c[0].trim() === e && (t = c[1].trim())
                }
                return t
            }
            var F = function() {
                    var e = Object(j.a)(Object(g.a)().mark((function e() {
                        return Object(g.a)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0, !A()) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    return e.next = 5, fetch("".concat(h.VIDEO_API_URL, "get-csrf-token/"), {
                                        credentials: "include"
                                    });
                                case 5:
                                    return e.abrupt("return", I(p));
                                case 8:
                                    return e.prev = 8, e.t0 = e.catch(0), S(e.t0), e.abrupt("return", {
                                        hasError: !0,
                                        message: "Some error occurred",
                                        error: e.t0
                                    });
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 8]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                A = function() {
                    var e = I(p);
                    return e ? (S("Csrf: ".concat(e)), e) : (S("CSRF Not present"), null)
                },
                P = function() {
                    document.cookie = "".concat(p, "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=.geeksforgeeks.org;")
                },
                U = function() {
                    var e = I("gfg_theme");
                    return S("Theme: ".concat(e)), e === y ? "dark" : "light"
                },
                D = s(1),
                B = c.a.createContext({
                    isLoggedIn: !1,
                    loginModalClass: "",
                    loginInformation: {
                        csrf_token: !1
                    },
                    logoutHandler: function() {},
                    loginHandler: function() {},
                    getToken: function() {
                        var e = Object(j.a)(Object(g.a)().mark((function e() {
                            return Object(g.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    theme: function() {}
                }),
                q = (B.Consumer, function(e) {
                    var t = Object(a.useState)(!1),
                        s = Object(d.a)(t, 2),
                        c = s[0],
                        i = s[1],
                        n = Object(a.useState)({
                            loading: !0
                        }),
                        r = Object(d.a)(n, 2),
                        o = r[0],
                        m = r[1];
                    return Object(a.useEffect)((function() {
                        new Promise(function() {
                            var e = Object(j.a)(Object(g.a)().mark((function e(t, s) {
                                var a, c, i;
                                return Object(g.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, fetch("".concat(h.GFG_UTIL_URL, "getToken.php"), {
                                                credentials: "include"
                                            });
                                        case 3:
                                            return a = e.sent, e.next = 6, a.json();
                                        case 6:
                                            c = e.sent, (i = Object(u.a)(c.token)).uuid ? t(Object(l.a)({}, i)) : s({
                                                hasError: !0,
                                                error: {
                                                    message: "Please login",
                                                    reason: "User not loggedIn"
                                                }
                                            }), S({
                                                token: i,
                                                type: "Extract user cookie"
                                            }), e.next = 16;
                                            break;
                                        case 12:
                                            e.prev = 12, e.t0 = e.catch(0), S({
                                                message: e.t0.message,
                                                type: "[Error] Extract user cookie"
                                            }), s({
                                                hasError: !0,
                                                error: {
                                                    message: e.t0.message,
                                                    reason: "Invalid token"
                                                }
                                            });
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 12]
                                ])
                            })));
                            return function(t, s) {
                                return e.apply(this, arguments)
                            }
                        }()).then((function(e) {
                            m(Object(l.a)(Object(l.a)({}, e), {}, {
                                loading: !1
                            })), i(!0)
                        })).catch((function(e) {
                            m(Object(l.a)(Object(l.a)({}, e), {}, {
                                loading: !1
                            })), i(!1)
                        }))
                    }), []), Object(D.jsx)(B.Provider, {
                        value: {
                            isLoggedIn: c,
                            loginModalClass: "login-modal-btn",
                            loginInformation: Object(l.a)({}, o),
                            getToken: F,
                            theme: U
                        },
                        children: e.children
                    })
                }),
                V = B,
                M = s(5),
                z = s(236),
                W = s(28),
                H = s(14),
                J = s(90),
                Q = s(91),
                X = s(54),
                K = Object(Q.a)({
                    reducerPath: "fetchVideoListApi",
                    tagTypes: ["videos", "watchlistTag"],
                    baseQuery: Object(X.d)({
                        baseUrl: h.VIDEO_API_URL
                    }),
                    endpoints: function(e) {
                        return {
                            getVideoList: e.query({
                                query: function(e) {
                                    var t = {};
                                    return e.taxonomy && (t.category = e.taxonomy), Number(e.page) > 1 && (t.page = Number(e.page)), e.search && (t.title = e.search), {
                                        url: "/gfg-video-list/".concat(E(t)),
                                        credentials: "include"
                                    }
                                },
                                keepUnusedDataFor: 600
                            }),
                            getCategoryList: e.query({
                                query: function() {
                                    return {
                                        url: "get-gfg-category-list/",
                                        credentials: "include"
                                    }
                                },
                                keepUnusedDataFor: 21600
                            }),
                            getUserWatchlist: e.query({
                                query: function() {
                                    return {
                                        url: "watch-later-video-list/",
                                        method: "GET",
                                        credentials: "include"
                                    }
                                },
                                keepUnusedDataFor: 600,
                                providesTags: ["watchlistTag"]
                            })
                        }
                    }
                }),
                Y = s(9),
                Z = ["slug"],
                $ = ["type", "csrfToken"],
                ee = Object(Q.a)({
                    reducerPath: "fetchVideoBySlugApi",
                    tagTypes: ["video"],
                    baseQuery: Object(X.d)({
                        baseUrl: h.VIDEO_API_URL
                    }),
                    endpoints: function(e) {
                        return {
                            getVideoDetails: e.query({
                                query: function(e) {
                                    return {
                                        url: "gfg-video-details/".concat(e, "/"),
                                        method: "GET",
                                        credentials: "include"
                                    }
                                },
                                transformResponse: function(e) {
                                    try {
                                        e.recommendations = e.recommendations.filter((function(e) {
                                            return e.slug
                                        }))
                                    } catch (t) {
                                        S({
                                            type: "[getVideoDetails] while transforming response",
                                            error: t
                                        })
                                    }
                                    return e
                                },
                                keepUnusedDataFor: 600
                            }),
                            updateVideoDetails: e.mutation({
                                query: function(e) {
                                    var t = e.slug,
                                        s = Object(Y.a)(e, Z);
                                    return {
                                        url: "/logged-in-video-details/".concat(t, "/"),
                                        method: "PUT",
                                        body: s,
                                        credentials: "include"
                                    }
                                },
                                invalidatesTags: function(e, t, s) {
                                    return [{
                                        type: "video",
                                        slug: s.slug
                                    }]
                                }
                            }),
                            updateViewCount: e.mutation({
                                query: function(e) {
                                    return {
                                        url: "update-user-views/",
                                        method: "POST",
                                        body: {
                                            slug: e.slug
                                        },
                                        credentials: "include",
                                        headers: {
                                            Accept: "application/json",
                                            "Content-Type": "application/json",
                                            "X-CSRFToken": e.csrfToken
                                        }
                                    }
                                }
                            })
                        }
                    }
                }),
                te = Object(Q.a)({
                    reducerPath: "userVideoActionsApi",
                    tagTypes: ["UserStats"],
                    baseQuery: Object(X.d)({
                        baseUrl: h.VIDEO_API_URL
                    }),
                    endpoints: function(e) {
                        return {
                            getUserVideoStats: e.query({
                                query: function(e) {
                                    return {
                                        url: "/logged-in-video-details/".concat(e, "/"),
                                        method: "GET",
                                        credentials: "include"
                                    }
                                },
                                keepUnusedDataFor: 600,
                                providesTags: function(e) {
                                    return [{
                                        type: "UserStats",
                                        slug: e
                                    }]
                                }
                            }),
                            updateUserVideoStats: e.mutation({
                                query: function(e) {
                                    var t = e.type,
                                        s = e.csrfToken,
                                        a = Object(Y.a)(e, $);
                                    return S({
                                        type: "User stats update API [".concat(t, "]"),
                                        payload: a,
                                        csrfToken: s
                                    }), {
                                        url: "like" !== t ? "/add-to-watchlist/" : "/update-user-likes/",
                                        method: "POST",
                                        body: a,
                                        credentials: "include",
                                        headers: {
                                            Accept: "application/json",
                                            "Content-Type": "application/json",
                                            "X-CSRFToken": s
                                        }
                                    }
                                }
                            })
                        }
                    }
                }),
                se = te.useUpdateUserVideoStatsMutation,
                ae = (ee.useUpdateVideoDetailsMutation, ee.useUpdateViewCountMutation),
                ce = s(33),
                ie = ["loading", "data", "handleWatchlist"],
                ne = function(e) {
                    var t, s = e.loading,
                        c = e.data,
                        i = e.handleWatchlist,
                        n = Object(Y.a)(e, ie),
                        r = Object(a.useContext)(V);
                    if (s) return Object(D.jsx)("div", {
                        className: "articles-list_item video-card skeleton",
                        children: Object(D.jsx)("div", {
                            className: "content",
                            children: Object(D.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    flexGrow: 1
                                },
                                className: "flex-column-sm",
                                children: [Object(D.jsx)("div", {
                                    className: "skeleton-box video-thumbnail"
                                }), Object(D.jsxs)("div", {
                                    className: "gfg-cw-100",
                                    children: [Object(D.jsx)("div", {
                                        className: "head skeleton-box gfg-cw-30",
                                        style: {
                                            height: "20px"
                                        }
                                    }), Object(D.jsxs)("div", {
                                        className: "text",
                                        children: [Object(D.jsx)("div", {
                                            className: "head skeleton-box gfg-cw-60"
                                        }), Object(D.jsx)("div", {
                                            className: "head skeleton-box gfg-cw-50"
                                        }), Object(D.jsx)("div", {
                                            className: "head skeleton-box gfg-cw-40"
                                        })]
                                    }), Object(D.jsxs)("div", {
                                        className: "tags",
                                        children: [Object(D.jsx)("i", {
                                            className: "gfg-icon gfg-icon_tag-primary"
                                        }), Object(D.jsxs)("div", {
                                            className: "tags-list gfg-cw-100",
                                            children: [Object(D.jsx)("div", {
                                                className: "tags-list_item gfg-cw-8 gfg-cw-sm-16",
                                                children: Object(D.jsx)("div", {
                                                    className: "item skeleton-box gfg-cw-80"
                                                })
                                            }), Object(D.jsx)("div", {
                                                className: "tags-list_item gfg-cw-8 gfg-cw-sm-16",
                                                children: Object(D.jsx)("div", {
                                                    className: "item skeleton-box gfg-cw-80"
                                                })
                                            }), Object(D.jsx)("div", {
                                                className: "tags-list_item gfg-cw-8 gfg-cw-sm-16",
                                                children: Object(D.jsx)("div", {
                                                    className: "item skeleton-box gfg-cw-80"
                                                })
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        })
                    });
                    var o = function(e) {
                            if (e > 59) {
                                var t = 0 !== (e / 3600 | 0) ? e / 3600 | 0 : "",
                                    s = e % 3600 / 60 | 0,
                                    a = e % 60;
                                return t = t < 10 ? "0".concat(t) : t, s = s < 10 ? "0".concat(s) : s, a = a < 10 ? "0".concat(a) : a, 0 == t ? "".concat(s, ":").concat(a) : "".concat(t, ":").concat(s, ":").concat(a)
                            }
                            return "0:".concat(e < 10 ? "0" + e : e)
                        },
                        l = function(e) {
                            var t = !!r.loginInformation.premiumUser,
                                s = c.title,
                                a = c.slug,
                                i = c.duration,
                                n = c.meta,
                                l = n.thumbnail,
                                d = n.largeThumbnail,
                                g = n.isPremium;
                            switch (e) {
                                case 0:
                                    return Object(D.jsx)(ce.b, {
                                        to: "/videos/".concat(a, "/"),
                                        title: s,
                                        className: "thumbnail ".concat(g && !t ? "premium-overlay" : ""),
                                        "data-duration": o(i),
                                        rel: "bookmark",
                                        children: Object(D.jsx)("img", {
                                            src: l || d || O,
                                            onError: function(e) {
                                                return function(e) {
                                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                                    e.target.src = t || O
                                                }(e, d)
                                            },
                                            alt: "Preview",
                                            style: {
                                                float: "left"
                                            },
                                            width: 200
                                        })
                                    });
                                case 1:
                                    return Object(D.jsx)(ce.b, {
                                        to: "/videos/".concat(a, "/"),
                                        title: s,
                                        rel: "bookmark",
                                        children: Object(D.jsx)("h1", {
                                            style: {
                                                fontSize: "14pt",
                                                fontWeight: "600"
                                            },
                                            children: s
                                        })
                                    });
                                case 2:
                                    return Object(D.jsx)(ce.b, {
                                        to: "/videos/".concat(a, "/"),
                                        children: Object(D.jsx)("span", {
                                            style: {
                                                color: "#308D46"
                                            },
                                            children: "Read More"
                                        })
                                    });
                                default:
                                    return {}
                            }
                        };
                    return Object(D.jsxs)("div", {
                        className: "articles-list_item video-card video-".concat(c.id, " ").concat(null !== c && void 0 !== c && null !== (t = c.meta) && void 0 !== t && t.isPremium ? "is-premium" : ""),
                        "data-video-id": c.id,
                        id: "video-".concat(c.id),
                        children: [Object(D.jsxs)("div", {
                            className: "content",
                            children: [l(0), Object(D.jsxs)("div", {
                                children: [Object(D.jsx)("div", {
                                    className: "head",
                                    children: l(1)
                                }), Object(D.jsxs)("div", {
                                    className: "text",
                                    children: [Object(D.jsx)("span", {
                                        dangerouslySetInnerHTML: {
                                            __html: c.description.substr(0, 200).replace(/<\/?[^>]+(>|$)/g, "")
                                        }
                                    }), Object(D.jsx)("span", {
                                        className: "read-more",
                                        children: l(2)
                                    })]
                                }), Object(D.jsxs)("div", {
                                    className: "tags",
                                    children: [Object(D.jsx)("i", {
                                        className: "gfg-icon gfg-icon_tag-primary"
                                    }), Object(D.jsx)("div", {
                                        className: "tags-list",
                                        children: c.category && !T.a.isEmpty(c.category) && c.category.map((function(e, t) {
                                            return Object(D.jsx)("div", {
                                                className: "tags-list_item",
                                                children: Object(D.jsx)("div", {
                                                    className: "item",
                                                    children: Object(D.jsx)(ce.b, {
                                                        to: "/videos/".concat(x(e.term_id__term_type), "/").concat(e.term_id__slug),
                                                        children: e.term_id__term_name
                                                    })
                                                })
                                            }, t)
                                        }))
                                    })]
                                })]
                            })]
                        }), n.watchlist && Object(D.jsx)("i", {
                            className: "gfg-icon gfg-icon_bookmark primary video-card__bmIcon cp filled",
                            onClick: function(e) {
                                return i(c.slug)
                            }
                        })]
                    })
                },
                re = function(e) {
                    if (void 0 !== e && null !== e) return (e = (e = e.charAt(0).toUpperCase() + e.slice(1)).replace(/_/g, " ")).toLowerCase().split(" ").map((function(e) {
                        return e.charAt(0).toUpperCase() + e.slice(1)
                    })).join(" ")
                },
                oe = ["page", "pagination"],
                le = function(e) {
                    var t = e.totalCount,
                        s = e.queryParams,
                        c = Object(o.j)(),
                        i = c.page,
                        n = (c.pagination, Object(Y.a)(c, oe)),
                        r = Object(o.k)().path,
                        g = Object(a.useState)(Math.ceil(t / 10) || void 0),
                        j = Object(d.a)(g, 1)[0],
                        u = s.search ? "?".concat(new URLSearchParams(s)) : "";
                    return 1 !== j && Object(D.jsx)("nav", {
                        id: "pagination",
                        className: "navigation",
                        role: "navigation",
                        children: Object(D.jsxs)("div", {
                            className: "gfg-pagination",
                            children: [i && 1 !== Number(i) ? 2 === Number(i) ? Object(D.jsx)(ce.b, {
                                className: "gfg-mr-2",
                                to: {
                                    pathname: "".concat(Object(o.f)(r, Object(l.a)({}, n)), "/"),
                                    search: u
                                },
                                children: "Prev"
                            }) : Object(D.jsx)(ce.b, {
                                className: "gfg-mr-2",
                                to: {
                                    pathname: "".concat(Object(o.f)(r, Object(l.a)(Object(l.a)({}, n), {}, {
                                        pagination: "page",
                                        page: (Number(i) || 1) - 1
                                    })), "/"),
                                    search: u
                                },
                                children: "Prev"
                            }) : Object(D.jsx)("button", {
                                className: "btn btn--bg-gray btn--disabled gfg-mr-2 font-sm-1",
                                children: "Prev"
                            }), i || 1, " of ", j, Number(i) === j ? Object(D.jsx)("button", {
                                className: "btn btn--bg-gray btn--disabled gfg-ml-2 font-sm-1",
                                children: "Next"
                            }) : Object(D.jsx)(ce.b, {
                                className: "gfg-ml-2",
                                to: {
                                    pathname: "/videos/".concat(n.type ? "".concat(n.type, "/").concat(n.taxonomy, "/") : "", "page/").concat((Number(i) || 1) + 1, "/"),
                                    search: u
                                },
                                children: "Next"
                            })]
                        })
                    })
                },
                de = function(e) {
                    var t = e.data;
                    return Object(D.jsx)("ul", {
                        className: "gfg-breadcrumb",
                        children: t && !T.a.isEmpty(t) && t.map((function(e, t) {
                            return Object(D.jsx)("li", {
                                className: "gfg-breadcrumb__item ".concat(e.active ? "gfg-breadcrumb__item--active" : ""),
                                children: Object(D.jsx)(ce.b, {
                                    to: e.path,
                                    children: e.name
                                })
                            }, t)
                        }))
                    })
                },
                ge = function e(t) {
                    var s = t.data,
                        a = t.level,
                        c = s.slug,
                        i = s.name;
                    return [Object(D.jsx)("option", {
                        value: c,
                        children: "\xa0\xa0".repeat(a + a) + i
                    }, c), s.children && s.children.length ? s.children.map((function(t) {
                        return Object(D.jsx)(e, {
                            data: t,
                            level: a + 1
                        }, t.id)
                    })) : ""]
                },
                je = function(e) {
                    var t = e.selectedchild,
                        s = e.name,
                        a = e.setSelectedParent,
                        c = e.isLoading,
                        i = e.isError,
                        n = e.data;
                    return Object(D.jsxs)("select", {
                        name: s,
                        value: t || void 0,
                        onChange: a,
                        children: [Object(D.jsx)("option", {
                            value: "",
                            children: c ? "Loading.." : "Select Category"
                        }), i && Object(D.jsx)("option", {
                            value: "",
                            children: "Some error occurred"
                        }), !c && n && n.map((function(e) {
                            return Object(D.jsx)(ge, {
                                data: e,
                                level: 0
                            }, e.id)
                        }))]
                    })
                },
                ue = function(e) {
                    var t = e.search,
                        s = e.category,
                        c = Object(o.h)(),
                        i = Object(a.useState)({
                            category: "",
                            search: ""
                        }),
                        n = Object(d.a)(i, 2),
                        r = n[0],
                        g = n[1],
                        j = Object(a.useState)(!(!t && !s)),
                        u = Object(d.a)(j, 2),
                        m = u[0],
                        h = u[1],
                        p = Object(W.d)(),
                        b = Object(W.e)((function(e) {
                            return K.endpoints.getCategoryList.select()(e)
                        })),
                        x = b.data,
                        f = b.isLoading,
                        O = b.isError;
                    Object(a.useEffect)((function() {
                        var e = p(K.endpoints.getCategoryList.initiate()).unsubscribe;
                        return function() {
                            e()
                        }
                    }), [p]), Object(a.useEffect)((function() {
                        g({
                            category: s || "",
                            search: t || ""
                        }), s || t || h(!1)
                    }), [s, t]);
                    var _ = function(e) {
                        g(Object(l.a)(Object(l.a)({}, r), {}, Object(M.a)({}, e.target.name, e.target.value)))
                    };
                    return Object(D.jsx)("div", {
                        className: "video-filters",
                        children: Object(D.jsxs)("form", {
                            autoComplete: "off",
                            onSubmit: function(e) {
                                e.preventDefault();
                                var t = "",
                                    s = "";
                                r.category && (t = "category/".concat(r.category)), r.search && (s = "?search=".concat(r.search)), (t || s) && (h(!0), c.push("/videos/".concat(t).concat(s)))
                            },
                            onReset: function() {
                                h(!1), g({
                                    category: "",
                                    search: ""
                                }), c.push("/videos/")
                            },
                            children: [Object(D.jsxs)("div", {
                                className: "video-filters__form",
                                children: [Object(D.jsxs)("div", {
                                    className: "video-filters__form-select",
                                    children: [Object(D.jsx)("label", {
                                        hidden: !0,
                                        children: "Select Category"
                                    }), Object(D.jsx)(je, {
                                        selectedchild: r.category,
                                        setSelectedParent: _,
                                        data: x,
                                        isLoading: f,
                                        isError: O,
                                        name: "category"
                                    })]
                                }), Object(D.jsxs)("div", {
                                    className: "custom-input--icon video-filters__form-input",
                                    children: [Object(D.jsx)("label", {
                                        hidden: !0,
                                        children: "Search"
                                    }), Object(D.jsx)("input", {
                                        type: "text",
                                        name: "search",
                                        placeholder: "Search",
                                        value: r.search,
                                        onChange: _
                                    })]
                                })]
                            }), Object(D.jsxs)("div", {
                                className: "action-buttons",
                                children: [Object(D.jsx)("button", {
                                    type: "submit",
                                    className: "btn icon-only",
                                    title: "Apply filters",
                                    children: Object(D.jsx)("i", {
                                        className: "gfg-icon gfg-icon_check white"
                                    })
                                }), m && Object(D.jsx)("button", {
                                    type: "reset",
                                    className: "btn icon-only gfg-ml-1 gfg-ml-sm-0",
                                    title: "Clear filters",
                                    children: Object(D.jsx)("i", {
                                        className: "gfg-icon gfg-icon_times"
                                    })
                                })]
                            })]
                        })
                    })
                };
            var me, he = function() {
                    return new URLSearchParams(Object(o.i)().search)
                },
                pe = s(43),
                be = "Please try again, some error occurred.",
                xe = {
                    notLoggedIn: "Please login to proceed",
                    premiumVideoLikeError: "Please Subscribe to Premium to Like this Video",
                    premiumVideoSaveError: "Please Subscribe to Premium to Save this Video"
                },
                fe = s(135),
                Oe = function(e) {
                    var t = e.title,
                        s = e.description,
                        a = e.thumbnail,
                        c = Object(o.k)().url;
                    return Object(D.jsxs)(fe.a, {
                        children: [t && Object(D.jsx)("title", {
                            children: t
                        }), s && Object(D.jsx)("meta", {
                            name: "description",
                            content: s,
                            "data-react-helmet": !0
                        }), s && Object(D.jsx)("meta", {
                            name: "og:description",
                            content: s
                        }), Object(D.jsx)("meta", {
                            property: "og:url",
                            content: "".concat(h.GFG_SITE_URL.slice(0, h.GFG_SITE_URL.length - 1)).concat(c)
                        }), a && Object(D.jsx)("meta", {
                            property: "og:image",
                            content: a
                        }), Object(D.jsx)("link", {
                            rel: "canonical",
                            href: "https://www.geeksforgeeks.org".concat("/" === c[c.length - 1] ? c : c + "/")
                        }), Object(D.jsx)("meta", {
                            property: "twitter:url",
                            content: "".concat(h.GFG_SITE_URL.slice(0, h.GFG_SITE_URL.length - 1)).concat(c)
                        }), t && Object(D.jsx)("meta", {
                            name: "twitter:title",
                            content: t
                        }), s && Object(D.jsx)("meta", {
                            name: "twitter:description",
                            content: s
                        }), a && Object(D.jsx)("meta", {
                            name: "twitter:image",
                            content: a
                        })]
                    })
                },
                _e = function(e) {
                    var t = e.isPremiumDomain,
                        s = Object(o.k)(),
                        c = s.params,
                        i = s.path,
                        n = he().get("search"),
                        r = Object(a.useState)(!1),
                        l = Object(d.a)(r, 2),
                        g = l[0],
                        j = l[1],
                        u = Object(a.useContext)(V),
                        m = Object(W.e)((function(e) {
                            return K.endpoints.getVideoList.select(c)(e)
                        })),
                        h = m.isLoading,
                        p = void 0 === h || h,
                        b = m.data,
                        x = m.isError,
                        f = Object(W.d)();
                    Object(a.useEffect)((function() {
                        var e = c;
                        n && (e.search = n);
                        var t = f(K.endpoints.getVideoList.initiate(e)).unsubscribe;
                        return function() {
                            window.scrollTo({
                                behavior: "smooth",
                                top: 0
                            }), t()
                        }
                    }), [c, n, f]), Object(a.useEffect)((function() {
                        x && pe.a.error(be)
                    }), [x]);
                    return Object(D.jsxs)("div", {
                        className: "article--container ".concat(t || u.loginInformation.premiumUser ? "is-premium" : ""),
                        style: {
                            marginTop: "0px",
                            paddingTop: "40px"
                        },
                        children: [Object(D.jsx)(Oe, {
                            title: n ? "Search Result for '".concat(n, "' - Videos | GeeksforGeeks") : "Videos | GeeksforGeeks",
                            thumbnail: w,
                            description: k
                        }), Object(D.jsxs)("div", {
                            className: "articles-list",
                            children: [Object(D.jsxs)("div", {
                                className: "heading",
                                children: [Object(D.jsxs)("div", {
                                    className: "def-title_wrap",
                                    style: {
                                        padding: 0
                                    },
                                    children: [Object(D.jsx)("div", {
                                        className: "title",
                                        children: Object(D.jsx)("h1", {
                                            style: {
                                                fontSize: "16pt",
                                                fontWeight: "300",
                                                color: "#308D46"
                                            },
                                            children: "GeeksforGeeks Videos"
                                        })
                                    }), Object(D.jsx)("button", {
                                        onClick: function() {
                                            j((function(e) {
                                                return !e
                                            }))
                                        },
                                        type: "button",
                                        "data-toggle": "collapse",
                                        className: "btn icon-only",
                                        children: Object(D.jsx)("i", {
                                            className: "gfg-icon gfg-icon_filter"
                                        })
                                    })]
                                }), c.taxonomy && Object(D.jsx)(de, {
                                    data: [{
                                        name: "Videos",
                                        path: "/videos/"
                                    }, {
                                        name: "".concat(re(c.taxonomy)),
                                        path: i,
                                        active: !0
                                    }]
                                }), g && Object(D.jsx)(ue, {
                                    search: n,
                                    category: "tag" !== c.type ? c.taxonomy : ""
                                })]
                            }), x || p ? Object(D.jsxs)(a.Fragment, {
                                children: [Object(D.jsx)(ne, {
                                    loading: !0
                                }), Object(D.jsx)(ne, {
                                    loading: !0
                                }), Object(D.jsx)(ne, {
                                    loading: !0
                                }), Object(D.jsx)(ne, {
                                    loading: !0
                                }), Object(D.jsx)(ne, {
                                    loading: !0
                                }), Object(D.jsx)(ne, {
                                    loading: !0
                                }), Object(D.jsx)(ne, {
                                    loading: !0
                                }), Object(D.jsx)(ne, {
                                    loading: !0
                                })]
                            }) : p || !b || T.a.isEmpty(b.results) ? !p && b && b.results ? Object(D.jsxs)("div", {
                                className: "d-flex flex-column--def align-items-center gfg-mt-4 gfg-pt-4 gfg-mb-4",
                                children: [Object(D.jsx)("img", {
                                    src: _,
                                    alt: "Empty List",
                                    width: 300,
                                    className: "img-fluid"
                                }), Object(D.jsxs)("div", {
                                    className: "gfg-mt-4 gfg-pt-4 text-center",
                                    children: [Object(D.jsx)("h2", {
                                        className: "gfg-mb-1 text-dark",
                                        children: "Oh Snap!"
                                    }), Object(D.jsx)("p", {
                                        className: "gfg-mb-3 text-dark",
                                        children: "No videos found"
                                    })]
                                })]
                            }) : "" : b.results.map((function(e, t) {
                                return Object(D.jsx)(ne, {
                                    data: e
                                }, t)
                            })), b && !T.a.isEmpty(b.results) && Object(D.jsx)(le, {
                                totalCount: b.count || 0,
                                queryParams: {
                                    search: n
                                }
                            })]
                        })]
                    })
                },
                ve = s(8),
                Ne = {
                    type: "watchlist"
                },
                we = function(e) {
                    var t = e.isPremiumDomain,
                        s = Object(W.e)((function(e) {
                            return K.endpoints.getUserWatchlist.select(Ne)(e)
                        })),
                        c = s.isLoading,
                        i = void 0 === c || c,
                        n = s.data,
                        r = s.isError,
                        o = Object(W.d)(),
                        u = Object(a.useContext)(V),
                        m = se(),
                        h = Object(d.a)(m, 1)[0],
                        p = Object(a.useState)(!1),
                        b = Object(d.a)(p, 2),
                        x = b[0],
                        f = b[1];
                    Object(a.useEffect)((function() {
                        var e = o(K.endpoints.getUserWatchlist.initiate(Ne)).unsubscribe;
                        return function() {
                            window.scrollTo({
                                behavior: "smooth",
                                top: 0
                            }), e()
                        }
                    }), [o]), Object(a.useEffect)((function() {
                        r && u.isLoggedIn && pe.a.error(be)
                    }), [r, u.isLoggedIn]);
                    var O = function(e) {
                            var t = n.results ? Object(ve.a)(n.results) : [];
                            t = T.a.map(T.a.omitBy(t, {
                                slug: e
                            })), o(K.util.updateQueryData("getUserWatchlist", Ne, (function() {
                                return Object(l.a)(Object(l.a)({}, n), {}, {
                                    count: n.count - 1,
                                    results: t
                                })
                            }))), o(te.util.invalidateTags(["UserStats"]), e)
                        },
                        v = function() {
                            var e = Object(j.a)(Object(g.a)().mark((function e(t) {
                                var s;
                                return Object(g.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, f(!0), e.next = 4, h({
                                                slug: t,
                                                watchlist: !1,
                                                csrfToken: A()
                                            }).unwrap();
                                        case 4:
                                            O(t), e.next = 13;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), s = be, e.t0.data && "Invalid CSRF Token" === e.t0.data.message && (P(), u.getToken(), s = "Token verification failed, please refresh & try again"), S(e.t0), pe.a.error(s);
                                        case 13:
                                            return e.prev = 13, f(!1), e.finish(13);
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 7, 13, 16]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return Object(D.jsxs)("div", {
                        className: "article--container ".concat(t || u.loginInformation.premiumUser ? "is-premium" : ""),
                        style: {
                            marginTop: "0px",
                            paddingTop: "40px"
                        },
                        children: [Object(D.jsx)(Oe, {
                            title: "Watchlist - Videos | GeeksforGeeks",
                            thumbnail: w,
                            description: k
                        }), Object(D.jsxs)("div", {
                            className: "articles-list",
                            children: [Object(D.jsx)("div", {
                                className: "heading",
                                children: Object(D.jsx)("div", {
                                    className: "def-title_wrap",
                                    style: {
                                        padding: 0
                                    },
                                    children: Object(D.jsx)("div", {
                                        className: "title",
                                        children: Object(D.jsx)("h1", {
                                            style: {
                                                fontSize: "16pt",
                                                fontWeight: "300",
                                                color: "#308D46"
                                            },
                                            children: "Saved Videos"
                                        })
                                    })
                                })
                            }), u.isLoggedIn || u.loginInformation.loading ? r || i ? Object(D.jsxs)(a.Fragment, {
                                children: [Object(D.jsx)(ne, {
                                    loading: !0
                                }), Object(D.jsx)(ne, {
                                    loading: !0
                                }), Object(D.jsx)(ne, {
                                    loading: !0
                                }), Object(D.jsx)(ne, {
                                    loading: !0
                                }), Object(D.jsx)(ne, {
                                    loading: !0
                                })]
                            }) : i || !n || T.a.isEmpty(n.results) ? Object(D.jsxs)("div", {
                                className: "d-flex flex-column--def align-items-center gfg-mt-4 gfg-pt-4 gfg-mb-4",
                                children: [Object(D.jsx)("img", {
                                    src: _,
                                    alt: "Empty List",
                                    width: 300,
                                    className: "img-fluid"
                                }), Object(D.jsxs)("div", {
                                    className: "gfg-mt-4 gfg-pt-4 text-center",
                                    children: [Object(D.jsx)("h2", {
                                        className: "gfg-mb-1 text-dark",
                                        children: "Oh Snap!"
                                    }), Object(D.jsx)("p", {
                                        className: "gfg-mb-3 text-dark",
                                        children: "No Saved videos found"
                                    }), Object(D.jsx)(ce.b, {
                                        to: "/videos/",
                                        className: "btn btn--bg-primary btn--medium td-none text-light",
                                        children: "Browse Videos"
                                    })]
                                })]
                            }) : n.results.map((function(e, t) {
                                return Object(D.jsx)(ne, {
                                    data: e,
                                    watchlist: !0,
                                    handleWatchlist: v
                                }, t)
                            })) : Object(D.jsxs)("div", {
                                className: "d-flex flex-column--def align-items-center gfg-mt-4 gfg-pt-4 gfg-mb-4",
                                children: [Object(D.jsx)("img", {
                                    src: _,
                                    alt: "Empty List",
                                    width: 300,
                                    className: "img-fluid"
                                }), Object(D.jsxs)("div", {
                                    className: "gfg-mt-4 gfg-pt-4 text-center",
                                    children: [Object(D.jsx)("p", {
                                        className: "gfg-mb-3",
                                        children: "Please login to see your saved videos"
                                    }), Object(D.jsx)("button", {
                                        className: "cp btn btn--bg-primary btn--medium td-none text-light ".concat(u.loginModalClass),
                                        children: "Login"
                                    })]
                                })]
                            }), n && !T.a.isEmpty(n.results) && Object(D.jsx)(le, {
                                queryParams: {},
                                totalCount: n.count || 0
                            })]
                        }), x && Object(D.jsx)("div", {
                            className: "gfg-loader",
                            children: Object(D.jsx)("div", {
                                className: "gfg-loader--overlay",
                                children: Object(D.jsxs)("div", {
                                    className: "loading-dots",
                                    children: [Object(D.jsx)("div", {
                                        className: "loading-dots--dot"
                                    }), Object(D.jsx)("div", {
                                        className: "loading-dots--dot"
                                    }), Object(D.jsx)("div", {
                                        className: "loading-dots--dot"
                                    })]
                                })
                            })
                        })]
                    })
                },
                ke = R(),
                ye = function(e) {
                    var t = e.match.params;
                    return t && "watchlist" === t.type ? Object(D.jsx)(we, {
                        isPremiumDomain: ke
                    }) : Object(D.jsx)(_e, {
                        isPremiumDomain: ke
                    })
                },
                Se = function(e) {
                    var t = e.loading,
                        s = e.data,
                        c = e.allowCollapse,
                        i = void 0 !== c && c,
                        n = Object(a.useState)(!1),
                        r = Object(d.a)(n, 2),
                        o = r[0],
                        l = r[1];
                    return Object(a.useEffect)((function() {
                        return function() {
                            i && l(!1)
                        }
                    }), [s.description, i]), Object(D.jsx)("div", {
                        className: "text p-relative",
                        style: i && !o ? {} : {
                            whiteSpace: "pre-wrap"
                        },
                        children: t ? Object(D.jsxs)(a.Fragment, {
                            children: [Object(D.jsx)("p", {
                                className: "skeleton-box gfg-cw-100"
                            }), Object(D.jsx)("p", {
                                className: "skeleton-box gfg-cw-80"
                            }), Object(D.jsx)("p", {
                                className: "skeleton-box gfg-cw-50"
                            })]
                        }) : s.description && s.description.length < 350 ? Object(D.jsx)("div", {
                            dangerouslySetInnerHTML: {
                                __html: s.description
                            }
                        }) : i && !o ? Object(D.jsxs)(a.Fragment, {
                            children: [Object(D.jsx)("div", {
                                style: {
                                    height: "100px",
                                    overflowY: "hidden"
                                },
                                children: Object(D.jsx)("div", {
                                    dangerouslySetInnerHTML: {
                                        __html: s.description
                                    }
                                })
                            }), Object(D.jsx)("button", {
                                className: "toggleDescriptionButton btn btn--bg-grey translucent gfg-cw-100 btn--large text-large cp",
                                onClick: function() {
                                    return l((function(e) {
                                        return !e
                                    }))
                                },
                                children: "Show more"
                            })]
                        }) : !i || i && o ? Object(D.jsxs)(a.Fragment, {
                            children: [Object(D.jsx)("div", {
                                dangerouslySetInnerHTML: {
                                    __html: s.description
                                }
                            }), i && Object(D.jsx)("button", {
                                className: "btn btn--bg-grey translucent gfg-cw-100 btn--large text-large cp",
                                onClick: function() {
                                    return l((function(e) {
                                        return !e
                                    }))
                                },
                                children: "Show less"
                            })]
                        }) : ""
                    })
                },
                Le = function(e) {
                    var t = e.loading,
                        s = e.data;
                    return Object(D.jsx)(D.Fragment, {
                        children: t ? Object(D.jsxs)(a.Fragment, {
                            children: [Object(D.jsx)("div", {
                                className: "title skeleton-box gfg-cw-25"
                            }), Object(D.jsx)("div", {
                                className: "media",
                                children: Object(D.jsx)("div", {
                                    className: "meta skeleton-box gfg-cw-20"
                                })
                            })]
                        }) : Object(D.jsx)(a.Fragment, {
                            children: Object(D.jsx)("div", {
                                className: "d-flex justify-content-between align-items-center",
                                children: Object(D.jsx)("div", {
                                    children: Object(D.jsx)("div", {
                                        className: "media gfg-mb-0 gfg-mt-0",
                                        children: Object(D.jsx)("div", {
                                            className: "meta d-row nowrap justify-content-between gfg-cw-100",
                                            children: s && s.meta ? Object(D.jsxs)("ul", {
                                                className: "gfg-pb-1",
                                                children: [s.meta.views > 1 && Object(D.jsxs)("li", {
                                                    className: "noPadding",
                                                    children: [s.meta.views, " Views"]
                                                }), s.time && Object(D.jsx)("li", {
                                                    className: "noMarker",
                                                    children: s.time
                                                })]
                                            }) : ""
                                        })
                                    })
                                })
                            })
                        })
                    })
                },
                Ce = function(e) {
                    var t = e.data,
                        s = e.type;
                    return Object(D.jsx)("div", {
                        className: "bottom-wrap ".concat(s === b ? "gfg-pti-0" : ""),
                        children: Object(D.jsx)("div", {
                            className: "improved",
                            children: t && !T.a.isEmpty(t) && Object(D.jsxs)(a.Fragment, {
                                children: [Object(D.jsx)("div", {
                                    className: "t-head",
                                    style: {
                                        minWidth: "auto"
                                    },
                                    children: "Related Tags:"
                                }), Object(D.jsx)("ul", {
                                    children: t.map((function(e, t) {
                                        return Object(D.jsx)("li", {
                                            children: Object(D.jsx)(ce.b, {
                                                to: "/videos/".concat(x(e.term_id__term_type), "/").concat(e.term_id__slug),
                                                children: e.term_id__term_name
                                            })
                                        }, t)
                                    }))
                                })]
                            })
                        })
                    })
                },
                Ge = function(e) {
                    var t = e.data,
                        s = e.isError,
                        c = Object(a.useContext)(V);
                    return Object(D.jsx)("div", {
                        className: "video-loginView skeleton-box ".concat(s ? "skeleton-box--error" : ""),
                        children: t && t.largeThumbnail ? Object(D.jsxs)(a.Fragment, {
                            children: [Object(D.jsx)("img", {
                                src: t.largeThumbnail,
                                alt: t.title,
                                className: "img-fluid"
                            }), !c.loginInformation.premiumUser && Object(D.jsx)("a", {
                                href: h.GFG_PREMIUM_URL,
                                className: "btn btn--bg-primary td-none btn--large ws-nowrap",
                                style: {
                                    color: "white"
                                },
                                children: "Subscribe to Premium"
                            })]
                        }) : ""
                    })
                },
                Te = s(97),
                Re = (s(283), s(284), s(285), s(286), s(287), Object(H.createSlice)({
                    name: "extraVideoSlice",
                    initialState: {
                        videoLoad: 1
                    },
                    reducers: {
                        toggleVideoOnLoad: function(e) {
                            e.videoLoad++
                        }
                    }
                })),
                Ee = Re.actions.toggleVideoOnLoad,
                Ie = Re.reducer,
                Fe = ["src", "controls", "autoplay", "type"],
                Ae = ["src", "controls", "autoplay", "type"],
                Pe = function(e) {
                    var t = e.src,
                        s = e.controls,
                        c = e.autoplay,
                        i = e.type,
                        n = Object(Y.a)(e, Ae),
                        r = function(e) {
                            var t = e.src,
                                s = e.controls,
                                c = void 0 === s || s,
                                i = e.autoplay,
                                n = void 0 !== i && i,
                                r = e.type,
                                o = void 0 === r ? "application/x-mpegURL" : r,
                                g = Object(Y.a)(e, Fe),
                                j = Object(a.useRef)(null),
                                u = Object(a.useState)(null),
                                m = Object(d.a)(u, 2),
                                h = m[0],
                                p = m[1];
                            return Object(a.useEffect)((function() {
                                var e = {
                                        fill: !0,
                                        fluid: !0,
                                        aspectRatio: g.isPremium ? "2:1" : "16:9",
                                        preload: "auto",
                                        nativeAudioTracks: !1,
                                        nativeVideoTracks: !1,
                                        html5: {
                                            hls: {
                                                debug: !0,
                                                overrideNative: !0,
                                                enableLowInitialPlaylist: !0,
                                                smoothQualityChange: !0
                                            }
                                        },
                                        playbackRates: [.5, 1, 1.5, 2],
                                        width: "100% !important",
                                        height: "450px",
                                        controlBar: {
                                            volumePanel: {
                                                inline: !1,
                                                vertical: !0
                                            },
                                            pictureInPictureToggle: !1
                                        }
                                    },
                                    s = ["html5"];
                                "video/youtube" === o && s.push("youtube");
                                var a = Object(Te.default)(j.current, Object(l.a)(Object(l.a)({}, e), {}, {
                                    controls: c,
                                    autoplay: n,
                                    preload: "none",
                                    poster: g.thumbnail || g.largeThumbnail,
                                    sources: [{
                                        src: t,
                                        type: o
                                    }],
                                    techOrder: s
                                }), (function() {
                                    if ("video/youtube" !== o) {
                                        a.qualityLevels();
                                        try {
                                            a.hlsQualitySelector({})
                                        } catch (e) {
                                            S("HLS not working - ", t)
                                        }
                                    }
                                    g.subtitle && a.addRemoteTextTrack({
                                        kind: "captions",
                                        label: "English",
                                        srcLang: "en",
                                        src: g.subtitle,
                                        default: !0
                                    });
                                    try {
                                        a.hotkeys({
                                            seekStep: 5,
                                            volumeStep: .1,
                                            enableModifiersForNumbers: !1
                                        })
                                    } catch (e) {
                                        S("Hotkeys not working - ", e)
                                    }
                                }));
                                return p(a),
                                    function() {
                                        null !== h && h.dispose()
                                    }
                            }), []), Object(a.useEffect)((function() {
                                null !== h && h.src({
                                    src: t
                                })
                            }), [t, h]), j
                        }(Object(l.a)({
                            src: t,
                            controls: s,
                            autoplay: c,
                            type: i
                        }, n)),
                        g = Object(a.useState)(!1),
                        j = Object(d.a)(g, 2),
                        u = j[0],
                        m = j[1],
                        h = Object(W.e)((function(e) {
                            return e.additionalDetails.videoLoad
                        })),
                        p = Object(W.d)(),
                        b = ae(),
                        x = Object(d.a)(b, 1)[0],
                        f = Object(o.j)(),
                        O = Object(o.h)();
                    Object(a.useEffect)((function() {
                        return "PUSH" === O.action && p(Ee()),
                            function() {
                                p(Ee()), m(!1)
                            }
                    }), [t]);
                    return Object(D.jsx)("div", {
                        "data-vjs-player": !0,
                        className: "video-gfgPlayer",
                        children: Object(D.jsx)("video", {
                            ref: r,
                            onTimeUpdate: function(e) {
                                var t = Number(e.target.currentTime),
                                    s = A();
                                !isNaN(t) && t > 0 && !u && s && (m(!0), x({
                                    slug: f.slug,
                                    csrfToken: s
                                }))
                            },
                            autoPlay: !0,
                            muted: h <= 1 && (window.chrome || !!window.safari),
                            id: "gfgVideoPlayer",
                            className: "video-js vjs-default-skin vjs-big-play-centered"
                        })
                    })
                },
                Ue = function(e) {
                    var t = e.title,
                        s = e.loading,
                        c = e.data,
                        i = Object(o.k)().path,
                        n = Object(a.useState)({
                            page: 1,
                            flex: 2,
                            listItems: 2
                        }),
                        r = Object(d.a)(n, 2),
                        g = r[0],
                        j = r[1],
                        u = Object(a.useState)([]),
                        m = Object(d.a)(u, 2),
                        h = m[0],
                        p = m[1];
                    Object(a.useEffect)((function() {
                        window.innerWidth <= 576 && j((function(e) {
                            return Object(l.a)(Object(l.a)({}, e), {}, {
                                flex: 1
                            })
                        }))
                    }), []), Object(a.useEffect)((function() {
                        if (c && c.length) {
                            var e = [],
                                t = [];
                            c.forEach((function(s, a) {
                                (a % g.listItems === 0 && a > 0 || a === c.length - 1) && t.length && e.push(t), a % g.listItems === 0 && (t = []), t.push(s)
                            })), c.length % 2 !== 0 && e.push(t), p([].concat(e))
                        }
                        return function() {
                            p([]), j({
                                page: 1,
                                flex: 2,
                                listItems: 2
                            })
                        }
                    }), [c, g.listItems]);
                    return !s && h.length <= 0 ? "" : Object(D.jsx)("div", {
                        className: "article--recommended",
                        children: Object(D.jsxs)("div", {
                            className: "article--recommended_wrapper",
                            children: [Object(D.jsxs)("div", {
                                className: "top-bar",
                                children: [Object(D.jsx)("div", {
                                    className: "def-title_wrap pl-0",
                                    children: Object(D.jsx)("div", {
                                        className: "title large",
                                        children: t
                                    })
                                }), c && c.length > g.flex * g.listItems && Object(D.jsxs)("div", {
                                    className: "page-list",
                                    children: [!s && Object(D.jsx)("div", {
                                        className: "page-h",
                                        children: "Page :"
                                    }), Object(D.jsx)("div", {
                                        className: "pages",
                                        children: c && c.length && T.a.times(Math.ceil(c.length / (g.flex * g.listItems)), (function(e) {
                                            return Object(D.jsx)("div", {
                                                className: "page p ".concat(g.page === e + 1 ? "active" : ""),
                                                onClick: function() {
                                                    return t = e + 1, void j(Object(l.a)(Object(l.a)({}, g), {}, {
                                                        page: t
                                                    }));
                                                    var t
                                                },
                                                "data-page": e,
                                                children: e + 1
                                            }, e)
                                        }))
                                    })]
                                })]
                            }), Object(D.jsx)("div", {
                                className: "gfg-carousel",
                                children: Object(D.jsxs)("div", {
                                    className: "gfg-carousel__wrap",
                                    "data-flex": "2",
                                    children: [h && h.map((function(e, t) {
                                        var s = (g.page - 1) * g.flex,
                                            a = g.page * g.flex,
                                            c = a > t && s <= t ? 1 === g.page ? "initial" : "active" : a <= t ? "next" : "prev";
                                        return Object(D.jsx)("div", {
                                            className: "gfg-carousel__wrap-slide ".concat(c),
                                            children: Object(D.jsx)("div", {
                                                className: "slide-item_list",
                                                children: e && e.map((function(e, t) {
                                                    return Object(D.jsxs)("div", {
                                                        className: "slide-item",
                                                        children: [Object(D.jsx)("img", {
                                                            src: null === e || void 0 === e ? void 0 : e.largeThumbnail,
                                                            className: "img-fluid slide-item_thumbnail",
                                                            alt: "".concat(e.title)
                                                        }), Object(D.jsxs)(ce.b, {
                                                            to: Object(o.f)(i, {
                                                                slug: e.slug
                                                            }),
                                                            title: e.title,
                                                            rel: "bookmark",
                                                            className: "c-wrap",
                                                            children: [Object(D.jsx)("div", {
                                                                className: "head",
                                                                children: e.title
                                                            }), Object(D.jsx)("div", {
                                                                className: "meta",
                                                                children: e.time
                                                            })]
                                                        })]
                                                    }, t)
                                                }))
                                            })
                                        }, t)
                                    })), s && Object(D.jsxs)(D.Fragment, {
                                        children: [Object(D.jsx)("div", {
                                            className: "gfg-carousel__wrap-slide initial",
                                            children: Object(D.jsxs)("div", {
                                                className: "slide-item_list",
                                                children: [Object(D.jsxs)("div", {
                                                    className: "slide-item gfg-cw-100",
                                                    children: [Object(D.jsx)("div", {
                                                        className: "skeleton-box slide-item_thumbnail"
                                                    }), Object(D.jsxs)("div", {
                                                        className: "c-wrap gfg-cw-40 gfg-cw-sm-100 skeleton",
                                                        children: [Object(D.jsx)("div", {
                                                            className: "head skeleton-box gfg-cw-50 gfg-cw-sm-80"
                                                        }), Object(D.jsx)("div", {
                                                            className: "meta skeleton-box gfg-cw-30 gfg-cw-sm-50 gfg-mt-2"
                                                        })]
                                                    })]
                                                }), Object(D.jsxs)("div", {
                                                    className: "slide-item gfg-cw-100",
                                                    children: [Object(D.jsx)("div", {
                                                        className: "skeleton-box slide-item_thumbnail"
                                                    }), Object(D.jsxs)("div", {
                                                        className: "c-wrap gfg-cw-40 gfg-cw-sm-100 skeleton",
                                                        children: [Object(D.jsx)("div", {
                                                            className: "head skeleton-box gfg-cw-50 gfg-cw-sm-80"
                                                        }), Object(D.jsx)("div", {
                                                            className: "meta skeleton-box gfg-cw-30 gfg-cw-sm-50 gfg-mt-2"
                                                        })]
                                                    })]
                                                })]
                                            })
                                        }), Object(D.jsx)("div", {
                                            className: "gfg-carousel__wrap-slide initial",
                                            children: Object(D.jsxs)("div", {
                                                className: "slide-item_list",
                                                children: [Object(D.jsxs)("div", {
                                                    className: "slide-item gfg-cw-100",
                                                    children: [Object(D.jsx)("div", {
                                                        className: "skeleton-box slide-item_thumbnail"
                                                    }), Object(D.jsxs)("div", {
                                                        className: "c-wrap gfg-cw-40 gfg-cw-sm-100 skeleton",
                                                        children: [Object(D.jsx)("div", {
                                                            className: "head skeleton-box gfg-cw-50 gfg-cw-sm-80"
                                                        }), Object(D.jsx)("div", {
                                                            className: "meta skeleton-box gfg-cw-30 gfg-cw-sm-50 gfg-mt-2"
                                                        })]
                                                    })]
                                                }), Object(D.jsxs)("div", {
                                                    className: "slide-item gfg-cw-100",
                                                    children: [Object(D.jsx)("div", {
                                                        className: "skeleton-box slide-item_thumbnail"
                                                    }), Object(D.jsxs)("div", {
                                                        className: "c-wrap gfg-cw-40 gfg-cw-sm-100 skeleton",
                                                        children: [Object(D.jsx)("div", {
                                                            className: "head skeleton-box gfg-cw-50 gfg-cw-sm-80"
                                                        }), Object(D.jsx)("div", {
                                                            className: "meta skeleton-box gfg-cw-30 gfg-cw-sm-50 gfg-mt-2"
                                                        })]
                                                    })]
                                                })]
                                            })
                                        })]
                                    })]
                                })
                            }), Object(D.jsx)("div", {
                                className: "gfg-carousel_dots",
                                children: Object(D.jsxs)("div", {
                                    className: "carousel--dots",
                                    children: [Object(D.jsx)("div", {
                                        className: "page p dots active",
                                        "data-page": "1"
                                    }), Object(D.jsx)("div", {
                                        className: "page p dots ",
                                        "data-page": "2"
                                    }), Object(D.jsx)("div", {
                                        className: "page p dots ",
                                        "data-page": "3"
                                    })]
                                })
                            })]
                        })
                    })
                },
                De = function(e) {
                    var t = e.handleVideoOperations,
                        s = e.userStats,
                        c = e.authCtx,
                        i = e.data,
                        n = e.disableButton,
                        r = e.handleLikeOperation,
                        o = Object(a.useState)(!1),
                        g = Object(d.a)(o, 2),
                        j = g[0],
                        u = g[1];
                    return Object(a.useEffect)((function() {
                        return function() {
                            u(!1)
                        }
                    }), [j]), Object(D.jsxs)("button", {
                        onClick: function(e) {
                            c.isLoggedIn ? !i.isPremium || c.loginInformation.premiumUser ? s ? t(Object(l.a)(Object(l.a)({}, s), {}, {
                                liked: !s.liked || !1
                            })).then((function(e) {
                                e.hasError ? pe.a.error(e.message || be) : (r(s.liked ? 0 : 1), S("Successfully done [Like operation]"))
                            })).catch((function(e) {
                                S(e), pe.a.error(e.message || be)
                            })).finally((function() {
                                u(!0)
                            })) : pe.a.error(be) : pe.a.error(xe.premiumVideoLikeError) : pe.a.error(xe.notLoggedIn)
                        },
                        disabled: !!n && "disabled",
                        "data-disabled": n && !j,
                        className: "btn btn--transparent btn--hoverable cp d-row ".concat(null !== s && void 0 !== s && s.liked && c.isLoggedIn ? "text-primary" : "inactive", " gfg-pb-1 gfg-pl-1 gfg-pr-1 ").concat(c.isLoggedIn ? "" : c.loginModalClass),
                        title: "Like",
                        children: [Object(D.jsx)("span", {
                            className: "gfg-icon gfg-icon_videoLike ".concat(null !== s && void 0 !== s && s.liked && c.isLoggedIn ? "active primary" : "")
                        }), Object(D.jsx)("span", {
                            className: "gfg-pl-1",
                            children: function() {
                                var e = null !== s && void 0 !== s && s.liked && c.isLoggedIn ? 1 : 0,
                                    t = e;
                                return Number(i.likes) > 0 && (t = Number(i.likes) > 1e3 ? (i.likes / 1e3).toFixed(1) + "k" : i.likes || e), t = t > 1 ? t + " Likes" : t + " Like"
                            }()
                        })]
                    })
                },
                Be = function(e) {
                    var t = e.handleVideoOperations,
                        s = e.userStats,
                        c = e.authCtx,
                        i = e.disableButton,
                        n = e.data,
                        r = Object(a.useState)(!1),
                        o = Object(d.a)(r, 2),
                        g = o[0],
                        j = o[1];
                    return Object(a.useEffect)((function() {
                        return function() {
                            j(!1)
                        }
                    }), [g]), Object(D.jsxs)("button", {
                        onClick: function() {
                            c.isLoggedIn ? !n.isPremium || c.loginInformation.premiumUser ? s ? t(Object(l.a)(Object(l.a)({}, s), {}, {
                                watchlist: !s.watchlist
                            })).then((function(e) {
                                e.hasError ? pe.a.error(e.message || be) : S("Successfully done [save operation]")
                            })).catch((function(e) {
                                S(e), pe.a.error(e.message || be)
                            })).finally((function() {
                                j(!0)
                            })) : pe.a.error(be) : pe.a.error(xe.premiumVideoSaveError) : pe.a.error(xe.notLoggedIn)
                        },
                        disabled: !!i && "disabled",
                        "data-disabled": i && !g,
                        className: "btn btn--transparent btn--hoverable cp d-row ".concat(null !== s && void 0 !== s && s.watchlist && c.isLoggedIn ? "text-primary" : "inactive", " gfg-pb-1 gfg-pl-1 gfg-pr-1 ").concat(c.isLoggedIn ? "" : c.loginModalClass),
                        title: "Add to watchlist",
                        children: [Object(D.jsx)("span", {
                            className: "gfg-icon gfg-icon_bookmark ".concat(null !== s && void 0 !== s && s.watchlist && c.isLoggedIn ? "active primary filled" : "black", " gfg-icon-20")
                        }), Object(D.jsx)("span", {
                            className: "gfg-pl-1",
                            children: null !== s && void 0 !== s && s.watchlist && c.isLoggedIn ? "Saved" : "Save"
                        })]
                    })
                },
                qe = function(e) {
                    var t = e.data,
                        s = e.handleLikeOperation,
                        c = e.isParentLoading,
                        i = e.loadCommentSection,
                        n = Object(a.useContext)(V),
                        r = Object(o.j)(),
                        u = Object(W.d)(),
                        m = Object(a.useState)(!1),
                        h = Object(d.a)(m, 2),
                        p = h[0],
                        b = h[1],
                        x = se(),
                        f = Object(d.a)(x, 1)[0],
                        O = Object(W.e)((function(e) {
                            return te.endpoints.getUserVideoStats.select(r.slug)(e)
                        })),
                        _ = O.data,
                        v = O.isLoading;
                    Object(a.useEffect)((function() {
                        var e;
                        return n.isLoggedIn && (e = u(te.endpoints.getUserVideoStats.initiate(r.slug))),
                            function() {
                                e && e.unsubscribe && e.unsubscribe()
                            }
                    }), [u, r.slug, n.isLoggedIn]), Object(a.useEffect)((function() {
                        return function() {
                            b(!1)
                        }
                    }), [_]);
                    var N = function() {
                        var e = Object(j.a)(Object(g.a)().mark((function e(t) {
                            var s;
                            return Object(g.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, b(!0), e.next = 4, f(Object(l.a)({
                                            type: t.watchlist !== _.watchlist ? "watchlist" : "like",
                                            slug: r.slug,
                                            csrfToken: A()
                                        }, t)).unwrap();
                                    case 4:
                                        return u(te.util.updateQueryData("getUserVideoStats", r.slug, (function() {
                                            return Object(l.a)(Object(l.a)({}, _), t)
                                        }))), t.watchlist !== _.watchlist && (S({
                                            message: "Invalidating Watchlist Tag: ",
                                            payload: t,
                                            userStats: _
                                        }), u(K.util.invalidateTags(["watchlistTag"]))), e.abrupt("return", {
                                            hasError: !1
                                        });
                                    case 9:
                                        return e.prev = 9, e.t0 = e.catch(0), S(e.t0), s = "", e.t0 && e.t0.data && "Invalid CSRF Token" === e.t0.data.message && (P(), n.getToken(), s = "Token verification failed, please refresh & try again"), e.abrupt("return", Object(l.a)({
                                            hasError: !0,
                                            message: s
                                        }, e.t0));
                                    case 15:
                                        return e.prev = 15, b(!1), e.finish(15);
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 9, 15, 18]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                    return v || c ? Object(D.jsxs)("ul", {
                        className: "d-row border-bottom noMarker justify-content-end action-buttons loading",
                        children: [Object(D.jsx)("li", {
                            className: "gfg-cw-10 gfg-pl-2",
                            children: Object(D.jsx)("div", {
                                className: "skeleton-box gfg-cw-100"
                            })
                        }), Object(D.jsx)("li", {
                            className: "gfg-cw-10 gfg-pl-2",
                            children: Object(D.jsx)("div", {
                                className: "skeleton-box gfg-cw-100"
                            })
                        }), Object(D.jsx)("li", {
                            className: "gfg-cw-10 gfg-pl-2",
                            children: Object(D.jsx)("div", {
                                className: "skeleton-box gfg-cw-100"
                            })
                        }), Object(D.jsx)("li", {
                            className: "gfg-cw-10 gfg-pl-2",
                            children: Object(D.jsx)("div", {
                                className: "skeleton-box gfg-cw-100"
                            })
                        })]
                    }) : Object(D.jsxs)("ul", {
                        className: "d-row border-bottom noMarker justify-content-end action-buttons",
                        children: [Object(D.jsx)("li", {
                            children: Object(D.jsx)(De, {
                                authCtx: n,
                                handleVideoOperations: N,
                                userStats: _,
                                data: t,
                                handleLikeOperation: s,
                                disableButton: p
                            })
                        }), Object(D.jsx)("li", {
                            children: Object(D.jsxs)("button", {
                                onClick: function() {
                                    try {
                                        document.getElementById("comments").scrollIntoView(), i()
                                    } catch (e) {}
                                },
                                className: "btn btn--transparent btn--hoverable cp d-row inactive gfg-pb-1 gfg-pl-1 gfg-pr-1",
                                title: "Comments",
                                children: [Object(D.jsx)("span", {
                                    className: "gfg-icon gfg-icon_comments black"
                                }), Object(D.jsx)("span", {
                                    className: "gfg-pl-1",
                                    children: "Comments"
                                })]
                            })
                        }), Object(D.jsx)("li", {
                            children: Object(D.jsxs)("button", {
                                onClick: function() {
                                    try {
                                        var e = document.createElement("textarea");
                                        e.innerHTML = window.location.href, document.body.appendChild(e), e.select(), document.execCommand("copy"), document.body.removeChild(e), pe.a.success("Copied the URL in Clipboard")
                                    } catch (t) {
                                        console.error("[VideoActions] Some error occurred while sharing")
                                    }
                                },
                                className: "btn btn--transparent btn--hoverable cp d-row inactive gfg-pb-1 gfg-pl-1 gfg-pr-1",
                                title: "Share Video",
                                children: [Object(D.jsx)("span", {
                                    className: "gfg-icon gfg-icon_share black"
                                }), Object(D.jsx)("span", {
                                    className: "gfg-pl-1",
                                    children: "Share"
                                })]
                            })
                        }), Object(D.jsx)("li", {
                            children: Object(D.jsx)(Be, {
                                authCtx: n,
                                handleVideoOperations: N,
                                userStats: _,
                                data: t,
                                handleLikeOperation: s,
                                disableButton: p
                            })
                        })]
                    })
                },
                Ve = s(235),
                Me = function(e) {
                    var t = Object(o.i)(),
                        s = Object(a.useState)(!1),
                        c = Object(d.a)(s, 2),
                        i = c[0],
                        n = c[1],
                        r = (h.GFG_SITE_URL.replace(/(^\w+:|^)\/\//, ""), h.GFG_SITE_URL.substr(0, [h.GFG_SITE_URL.length - 1]) + t.pathname),
                        l = Object(a.useContext)(V),
                        g = Object(a.useState)("light"),
                        j = Object(d.a)(g, 2),
                        u = j[0],
                        m = j[1],
                        p = "".concat(h.GFG_DISCUSS_URL).concat(e.id, "/").concat(encodeURIComponent(e.title), "/").concat("gfg", "?rel=").concat(encodeURIComponent(r), "&mode=").concat(u),
                        b = function() {
                            n(!0)
                        };
                    return Object(a.useEffect)((function() {
                        e.loadComments && b()
                    }), [e.loadComments]), Object(a.useEffect)((function() {
                        return m(l.theme()),
                            function() {
                                n(!1)
                            }
                    }), [t.pathname]), Object(D.jsxs)("section", {
                        className: "video-wrapper",
                        id: "comments",
                        children: [Object(D.jsx)("div", {
                            className: "disqus--viewer",
                            children: Object(D.jsx)("div", {
                                id: "ide_link",
                                style: {
                                    textAlign: "center",
                                    margin: "50px 0 20px",
                                    fontSize: "12px"
                                },
                                children: Object(D.jsxs)("p", {
                                    children: ["Writing code in comment? Please use ", Object(D.jsx)("a", {
                                        href: "https://ide.geeksforgeeks.org/",
                                        children: "ide.geeksforgeeks.org"
                                    }), ", generate link and share the link here."]
                                })
                            })
                        }), !i && Object(D.jsx)("div", {
                            id: "loadComment",
                            children: Object(D.jsx)("button", {
                                id: "comment",
                                onClick: b,
                                style: {
                                    width: "45%",
                                    marginRight: "0%",
                                    boxShadow: "0 2px 5px 0 rgba(0,0,0,0.4), 0 6px 20px 0 rgba(0,0,0,0)",
                                    borderColor: "#4cb96b",
                                    borderRadius: "4px",
                                    backgroundColor: "var(--gfg-grey-bg)",
                                    color: "var(--color-black)"
                                },
                                children: "Load Comments"
                            })
                        }), i && Object(D.jsx)(Ve.a, {
                            log: !1,
                            src: p,
                            style: {
                                width: "1px",
                                minWidth: "100%"
                            }
                        })]
                    })
                },
                ze = function(e) {
                    var t, s, c, i, n, r, g, j, u = e.isPremiumDomain,
                        m = Object(o.j)(),
                        h = Object(W.d)(),
                        p = Object(a.useContext)(V),
                        x = Object(a.useState)(!1),
                        f = Object(d.a)(x, 2),
                        O = f[0],
                        _ = f[1],
                        y = Object(W.e)((function(e) {
                            return ee.endpoints.getVideoDetails.select(m.slug)(e)
                        })),
                        S = y.data,
                        L = y.isLoading,
                        C = void 0 === L || L,
                        G = y.isError,
                        T = y.error;
                    Object(a.useEffect)((function() {
                        var e = h(ee.endpoints.getVideoDetails.initiate(m.slug)).unsubscribe;
                        return p.getToken(), window.scrollBy({
                                top: -5e3,
                                behavior: "smooth"
                            }),
                            function() {
                                window.scrollTo({
                                    behavior: "smooth",
                                    top: 0
                                }), _(!1), e()
                            }
                    }), [m.slug, h]);
                    var R, E, I = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                        h(ee.util.updateQueryData("getVideoDetails", m.slug, (function() {
                            var t, s;
                            return Object(l.a)(Object(l.a)({}, S), {}, {
                                meta: Object(l.a)(Object(l.a)({}, S.meta), {}, {
                                    likes: 1 === e ? (null === S || void 0 === S || null === (t = S.meta) || void 0 === t ? void 0 : t.likes) + 1 : (null === S || void 0 === S || null === (s = S.meta) || void 0 === s ? void 0 : s.likes) - 1
                                })
                            })
                        })))
                    };
                    return G || null === S ? Object(D.jsxs)("div", {
                        className: "article-viewer ".concat(u || p.loginInformation.premiumUser ? "is-premium" : ""),
                        children: [Object(D.jsx)(Oe, {
                            title: S ? "".concat(null === S || void 0 === S ? void 0 : S.title, " - Videos | GeeksforGeeks") : N,
                            description: (null === S || void 0 === S || null === (R = S.seo) || void 0 === R ? void 0 : R.description) || k,
                            thumbnail: (null === S || void 0 === S || null === (E = S.seo) || void 0 === E ? void 0 : E.thumbnail) || w
                        }), Object(D.jsx)("div", {
                            className: "article-viewer__content",
                            children: Object(D.jsx)("div", {
                                className: "a-wrapper video-wrapper",
                                children: Object(D.jsxs)("article", {
                                    className: "content",
                                    children: [Object(D.jsx)(Ge, {
                                        isError: !0
                                    }), Object(D.jsxs)("div", {
                                        className: "video-wrapper__content",
                                        children: [Object(D.jsx)(Le, {
                                            loading: C,
                                            data: {
                                                title: T && 401 === T.status ? "Please refresh and try again" : "Not found or the video you are looking for doesn't exist"
                                            },
                                            handleLikeOperation: I
                                        }), Object(D.jsx)("div", {
                                            className: "gfg-mt-2",
                                            children: Object(D.jsx)(ce.b, {
                                                to: "/videos/",
                                                className: "btn btn--bg-primary btn--medium td-none text-light",
                                                children: "Browse Videos"
                                            })
                                        })]
                                    })]
                                })
                            })
                        })]
                    }) : Object(D.jsxs)("div", {
                        className: "article-viewer ".concat(u || p.loginInformation.premiumUser ? "is-premium" : ""),
                        children: [S ? Object(D.jsx)(Oe, {
                            title: S ? "".concat(null === S || void 0 === S ? void 0 : S.title, " - Videos | GeeksforGeeks") : N,
                            description: (null === S || void 0 === S || null === (t = S.seo) || void 0 === t ? void 0 : t.description) || k,
                            thumbnail: (null === S || void 0 === S || null === (s = S.seo) || void 0 === s ? void 0 : s.thumbnail) || w
                        }) : "", Object(D.jsxs)("div", {
                            className: "article-viewer__content",
                            children: [Object(D.jsxs)("div", {
                                className: "a-wrapper video-wrapper",
                                children: [v ? S ? Object(D.jsx)("div", {
                                    className: "gfg-pl-1 gfg-pb-1",
                                    children: Object(D.jsx)(de, {
                                        data: [{
                                            name: "Videos",
                                            path: "/videos/"
                                        }, {
                                            name: re(null === S || void 0 === S ? void 0 : S.title),
                                            path: "",
                                            active: !0
                                        }]
                                    })
                                }) : Object(D.jsx)("div", {
                                    className: "skeleton-box gfg-cw-15 gfg-cw-sm-25"
                                }) : "", Object(D.jsxs)("article", {
                                    className: "content",
                                    id: "video-id",
                                    children: [!C && null !== S && void 0 !== S && S.title ? Object(D.jsx)("div", {
                                        className: "title",
                                        style: {
                                            padding: "0 0 12px 8px",
                                            fontSize: "1.25rem"
                                        },
                                        children: Object(D.jsx)("h1", {
                                            style: {
                                                fontSize: "1.25rem",
                                                fontWeight: "600"
                                            },
                                            children: S.title
                                        })
                                    }) : "", !C && (null === S || void 0 === S ? void 0 : S.source) && (p.loginInformation.premiumUser && (null === S || void 0 === S || null === (c = S.meta) || void 0 === c ? void 0 : c.isPremium) || !(null !== S && void 0 !== S && null !== (i = S.meta) && void 0 !== i && i.isPremium)) && Object(D.jsx)(Pe, Object(l.a)(Object(l.a)({
                                        src: null === S || void 0 === S ? void 0 : S.source,
                                        type: null === S || void 0 === S || null === (n = S.meta) || void 0 === n ? void 0 : n.format,
                                        subtitle: S.subtitle
                                    }, S.meta), {}, {
                                        isPremium: u || p.loginInformation.premiumUser
                                    })), C || null !== S && void 0 !== S && null !== (r = S.meta) && void 0 !== r && r.isPremium && !p.loginInformation.premiumUser ? Object(D.jsx)(Ge, {
                                        data: {
                                            largeThumbnail: (null === S || void 0 === S || null === (g = S.meta) || void 0 === g ? void 0 : g.largeThumbnail) || "",
                                            title: null === S || void 0 === S ? void 0 : S.title
                                        }
                                    }) : "", Object(D.jsxs)("div", {
                                        className: "video-wrapper__content",
                                        children: [S && "courses" === S.video_type && S.course_link && Object(D.jsx)("div", {
                                            style: {
                                                textAlign: "center"
                                            },
                                            children: Object(D.jsx)("a", {
                                                href: S.course_link,
                                                className: "btn btn--bg-contrast td-none ws-nowrap btn--medium font-sm",
                                                type: "button",
                                                children: "Visit Course Page"
                                            })
                                        }), Object(D.jsx)(Le, {
                                            loading: C,
                                            data: {
                                                title: null === S || void 0 === S ? void 0 : S.title,
                                                time: null === S || void 0 === S ? void 0 : S.time,
                                                meta: (null === S || void 0 === S ? void 0 : S.meta) || {},
                                                video_type: (null === S || void 0 === S ? void 0 : S.video_type) || "default",
                                                course_link: null === S || void 0 === S ? void 0 : S.course_link
                                            }
                                        }), Object(D.jsx)(qe, {
                                            data: Object(l.a)({
                                                isPremium: (null === S || void 0 === S || null === (j = S.meta) || void 0 === j ? void 0 : j.isPremium) || !1
                                            }, null === S || void 0 === S ? void 0 : S.meta),
                                            isParentLoading: C,
                                            handleLikeOperation: I,
                                            loadCommentSection: function() {
                                                return _(!0)
                                            }
                                        }), Object(D.jsx)(Se, {
                                            loading: C,
                                            data: {
                                                description: null === S || void 0 === S ? void 0 : S.description
                                            },
                                            allowCollapse: !0
                                        })]
                                    })]
                                }), Object(D.jsx)("div", {
                                    className: "article-meta gfg-pbi-4",
                                    children: Object(D.jsx)(Ce, {
                                        type: b,
                                        data: (null === S || void 0 === S ? void 0 : S.category) || []
                                    })
                                }), Object(D.jsx)(Ue, {
                                    title: "Explore more videos",
                                    loading: C,
                                    data: null === S || void 0 === S ? void 0 : S.recommendations
                                })]
                            }), (null === S || void 0 === S ? void 0 : S.id) && (null === S || void 0 === S ? void 0 : S.title) && Object(D.jsx)(Me, {
                                loadComments: O,
                                id: null === S || void 0 === S ? void 0 : S.id,
                                title: null === S || void 0 === S ? void 0 : S.title
                            })]
                        })]
                    })
                },
                We = R(),
                He = [{
                    path: "/videos/:type(watchlist)?",
                    component: ye,
                    name: "Videos - Watchlist | GeeksforGeeks",
                    exact: !0,
                    private: !1
                }, {
                    path: "/videos/:slug/",
                    component: function(e) {
                        return Object(D.jsx)(ze, {
                            isPremiumDomain: We
                        })
                    },
                    name: "Video Page | GeeksforGeeks",
                    exact: !0,
                    private: !1
                }, {
                    path: ["/videos/:pagination(page)?/:page?", "/videos/:type(category|tag)?/:taxonomy?/:pagination(page)?/:page?"],
                    component: ye,
                    name: "Videos | GeeksforGeeks",
                    exact: !0,
                    private: !1
                }],
                Je = function() {
                    var e = Object(o.i)().pathname;
                    return Object(a.useEffect)((function() {
                        try {
                            S("Logout Redirection URL: ".concat(h.AUTH_SITE_URL, "logout.php/?to=").concat(h.GFG_SITE_URL.substr(0, [h.GFG_SITE_URL.length - 1])).concat(e)), document.querySelector("#userProfileId ul.mega-dropdown li:last-child a").setAttribute("href", "".concat(h.AUTH_SITE_URL, "logout.php/?to=").concat(h.GFG_SITE_URL.substr(0, [h.GFG_SITE_URL.length - 1])).concat(e)), document.querySelector(".header-sidebar__list li:first-child table.userSidebar-table + a").setAttribute("href", "".concat(h.AUTH_SITE_URL, "logout.php/?to=").concat(h.GFG_SITE_URL.substr(0, [h.GFG_SITE_URL.length - 1])).concat(e))
                        } catch (t) {
                            S("Unable to set logout redirection URL")
                        }
                    }), [e]), []
                },
                Qe = Object(Q.a)({
                    reducerPath: "gfgHomePageList",
                    tagTypes: ["videos", "watchlistTag"],
                    baseQuery: Object(X.d)({
                        baseUrl: h.VIDEO_API_URL
                    }),
                    endpoints: function(e) {
                        return {
                            getPOTD: e.query({
                                query: function() {
                                    return {
                                        url: "".concat(h.GFG_PRACTICE_API_URL, "api/vr/problems-of-day/problem/today/")
                                    }
                                },
                                transformResponse: function(e, t) {
                                    return e.xdate = t.response.headers.get("x-date"), e
                                }
                            }),
                            getCourses: e.query({
                                query: function() {
                                    return {
                                        url: "".concat(h.GFG_PRACTICE_API_URL, "api/vr2/courses/home/")
                                    }
                                },
                                transformResponse: function(e) {
                                    return e
                                }
                            }),
                            getVideos: e.query({
                                query: function() {
                                    return {
                                        url: "".concat(h.VIDEO_API_URL, "gfg-video-list/")
                                    }
                                },
                                transformResponse: function(e) {
                                    return e
                                }
                            }),
                            getCarousel: e.query({
                                query: function() {
                                    return {
                                        url: "".concat(h.GFG_UTIL_DJANGO_CF_URL, "api/active-banner-posts/")
                                    }
                                }
                            }),
                            getArticles: e.query({
                                query: function() {
                                    return {
                                        url: "".concat(h.GFG_UTIL_DJANGO_CF_URL, "api/articles/?page=1&gblog=true")
                                    }
                                },
                                transformResponse: function(e) {
                                    return e
                                }
                            }),
                            getOpenSearchResults: e.query({
                                query: function(e) {
                                    return {
                                        url: "".concat(h.GFG_UTIL_DJANGO_CF_URL, "api/gfgsearch/").concat(E(e)),
                                        credentials: "include"
                                    }
                                }
                            }),
                            getArticleChips: e.query({
                                query: function() {
                                    return {
                                        url: "".concat(h.GFG_UTIL_DJANGO_CF_URL, "api/article/tags/trending/")
                                    }
                                }
                            }),
                            getArticleChipsUser: e.query({
                                query: function() {
                                    return {
                                        url: "".concat(h.GFG_UTIL_DJANGO_CF_URL, "api/vcu/getusersterms/12/"),
                                        credentials: "include"
                                    }
                                }
                            }),
                            getArticlesPerChip: e.query({
                                query: function(e) {
                                    var t = e.chip,
                                        s = e.page;
                                    return {
                                        url: "all" !== t && "" !== t ? "".concat(h.GFG_UTIL_DJANGO_CF_URL, "api/articles/").concat(t, "/?page=").concat(s, "&gblog=true") : "".concat(h.GFG_UTIL_DJANGO_CF_URL, "api/articles/?page=").concat(s, "&gblog=true")
                                    }
                                }
                            }),
                            getPopularPosts: e.query({
                                query: function() {
                                    return {
                                        url: "".concat(h.GFG_UTIL_DJANGO_CF_URL, "api/popularposts/daily/1/excerpt/")
                                    }
                                },
                                transformResponse: function(e) {
                                    return e
                                }
                            }),
                            sideBarDetails: e.query({
                                query: function() {
                                    return {
                                        url: "".concat(h.GFG_UTIL_URL, "api/rightbarads/")
                                    }
                                },
                                transformResponse: function(e) {
                                    return e.error ? [] : e
                                }
                            }),
                            getPostChains: e.query({
                                query: function(e) {
                                    return {
                                        url: "".concat(h.GFG_UTIL_DJANGO_CF_URL, "api/postchains/").concat(e, "/post/")
                                    }
                                },
                                transformResponse: function(e) {
                                    return e.error ? [] : e
                                }
                            }),
                            getPostDetail: e.query({
                                query: function(e) {
                                    return {
                                        url: "".concat(h.GFG_UTIL_DJANGO_CF_URL, "api/getpostdetails/").concat(e, "/excerpt/")
                                    }
                                },
                                transformResponse: function(e) {
                                    return e.error ? [] : e
                                }
                            }),
                            getHomePageChipsDetail: e.query({
                                query: function(e) {
                                    return {
                                        url: "".concat(h.GFG_UTIL_DJANGO_CF_URL, "api/rightbarads/")
                                    }
                                },
                                transformResponse: function(e) {
                                    return e.error ? [] : e
                                }
                            }),
                            getPopularOrNextPost: e.query({
                                query: function(e) {
                                    var t = e.prevPostId,
                                        s = e.prevPostTitle;
                                    return {
                                        url: null == t || "" == t ? "".concat(h.GFG_UTIL_DJANGO_CF_URL, "api/recommendforyou/") : null == s || "" == s ? "".concat(h.GFG_UTIL_DJANGO_CF_URL, "api/recommendforyou/").concat(t, "/") : "".concat(h.GFG_UTIL_DJANGO_CF_URL, "api/recommendforyou/").concat(t, "/").concat(s, "/")
                                    }
                                },
                                transformResponse: function(e) {
                                    return e.error ? [] : e
                                }
                            }),
                            getRecommendedCoursesUser: e.query({
                                query: function() {
                                    return {
                                        url: "".concat(h.GFG_PRACTICE_API_URL, "api/latest/courses/recommended/"),
                                        credentials: "include"
                                    }
                                },
                                transformResponse: function(e) {
                                    return e.error ? [] : e
                                }
                            })
                        }
                    }
                }),
                Xe = Qe.useGetPOTDQuery,
                Ke = Qe.useGetCoursesQuery,
                Ye = Qe.useGetVideosQuery,
                Ze = Qe.useGetCarouselQuery,
                $e = (Qe.useGetArticlesQuery, Qe.useLazyGetOpenSearchResultsQuery),
                et = (Qe.useGetArticleChipsQuery, Qe.useGetArticlesPerChipQuery),
                tt = (Qe.useGetPopularPostsQuery, Qe.useSideBarDetailsQuery),
                st = (Qe.useGetPostChainsQuery, Qe.useGetPostDetailQuery, Qe.useGetHomePageChipsDetailQuery),
                at = Qe.useGetArticleChipsUserQuery,
                ct = Qe.useGetPopularOrNextPostQuery,
                it = Qe.useGetRecommendedCoursesUserQuery,
                nt = function() {
                    var e = tt(),
                        t = e.data,
                        s = e.isLoading,
                        a = e.isError;
                    return s || a || T.a.isEmpty(t) ? "" : Object(D.jsxs)("div", {
                        style: {
                            marginBottom: "24px"
                        },
                        children: [Object(D.jsx)("div", {
                            className: "heading",
                            children: Object(D.jsx)("div", {
                                className: "def-title_wrap",
                                children: Object(D.jsx)("div", {
                                    className: "title",
                                    children: "What's New Here"
                                })
                            })
                        }), t && T.a.map(t, (function(e) {
                            return Object(D.jsx)("div", {
                                children: Object(D.jsx)("div", {
                                    className: "card-layout",
                                    children: Object(D.jsx)("div", {
                                        className: "content-wrapper",
                                        children: Object(D.jsx)("div", {
                                            className: "side--container_wscard",
                                            style: {
                                                padding: "0px 10px"
                                            },
                                            children: Object(D.jsx)("a", {
                                                href: e.url,
                                                children: Object(D.jsxs)("div", {
                                                    className: "card-content",
                                                    children: [Object(D.jsx)("div", {
                                                        className: "thumbnail",
                                                        children: Object(D.jsx)("img", {
                                                            src: e.thumbnail,
                                                            className: "img-fluid",
                                                            alt: "Write/Contribute"
                                                        })
                                                    }), Object(D.jsxs)("div", {
                                                        className: "content",
                                                        children: [Object(D.jsx)("div", {
                                                            className: "head",
                                                            children: e.title
                                                        }), Object(D.jsx)("div", {
                                                            className: "meta",
                                                            dangerouslySetInnerHTML: {
                                                                __html: e.html
                                                            }
                                                        }), Object(D.jsx)("div", {
                                                            className: "ref",
                                                            children: "View Details"
                                                        })]
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                })
                            }, e.id)
                        }))]
                    })
                },
                rt = function(e) {
                    return Object(D.jsx)("div", {
                        className: "container-fluid bg-light",
                        id: "home-page",
                        style: {
                            position: "relative",
                            maxWidth: "100%"
                        },
                        children: Object(D.jsxs)("div", {
                            className: "article-page_flex",
                            children: [Object(D.jsx)("div", {
                                className: "leftBar",
                                children: e.children
                            }), Object(D.jsxs)("div", {
                                className: "rightBar",
                                children: [Object(D.jsx)("div", {
                                    style: {
                                        minHeight: "600px",
                                        textAlign: "end",
                                        paddingRight: "10px"
                                    },
                                    id: "GFG_AD_Desktop_RightSideBar_ATF_300x600"
                                }), Object(D.jsx)(nt, {}), Object(D.jsx)("div", {
                                    id: "GFG_AD_Desktop_RightSideBar_MTF_300x600"
                                })]
                            })]
                        })
                    })
                },
                ot = Object(H.configureStore)({
                    reducer: (me = {}, Object(M.a)(me, K.reducerPath, K.reducer), Object(M.a)(me, te.reducerPath, te.reducer), Object(M.a)(me, ee.reducerPath, ee.reducer), Object(M.a)(me, Qe.reducerPath, Qe.reducer), Object(M.a)(me, "additionalDetails", Ie), me),
                    middleware: [J.a, K.middleware, te.middleware, ee.middleware]
                });
            Object(z.setupListeners)(ot.dispatch);
            var lt = function(e) {
                    e.match.params;
                    return Object(D.jsx)(W.a, {
                        store: ot,
                        children: Object(D.jsxs)(rt, {
                            children: [Object(D.jsx)(Je, {}), Object(D.jsxs)(o.d, {
                                children: [He.map((function(e, t) {
                                    return Object(D.jsx)(o.b, {
                                        exact: e.exact,
                                        path: e.path,
                                        children: e.component
                                    }, t)
                                })), Object(D.jsx)(o.a, {
                                    to: "/videos"
                                })]
                            })]
                        })
                    })
                },
                dt = (s(289), s(84)),
                gt = "https://media.geeksforgeeks.org/auth-dashboard-uploads/Vector.png",
                jt = function() {
                    return Object(D.jsxs)("div", {
                        id: "intro-div",
                        children: [Object(D.jsxs)("div", {
                            id: "intro-div-left-bar",
                            children: [Object(D.jsx)("p", {
                                id: "intro-main-heading",
                                children: "Optimize conversions with human insight "
                            }), Object(D.jsxs)("ul", {
                                id: "intro-list1",
                                children: [Object(D.jsxs)("li", {
                                    className: "list1-item",
                                    children: [Object(D.jsx)("span", {
                                        className: "intro-ul-tick",
                                        children: Object(D.jsx)("img", {
                                            src: gt,
                                            alt: "Tick"
                                        })
                                    }), "Reach out to 25 million+ unique users"]
                                }), Object(D.jsxs)("li", {
                                    className: "list1-item",
                                    children: [Object(D.jsx)("span", {
                                        className: "intro-ul-tick",
                                        children: Object(D.jsx)("img", {
                                            src: gt,
                                            alt: "Tick"
                                        })
                                    }), "Achieve higher conversions with better targeting"]
                                }), Object(D.jsxs)("li", {
                                    className: "list1-item",
                                    children: [Object(D.jsx)("span", {
                                        className: "intro-ul-tick",
                                        children: Object(D.jsx)("img", {
                                            src: gt,
                                            alt: "Tick"
                                        })
                                    }), "Discover audience globally"]
                                }), Object(D.jsxs)("li", {
                                    className: "list1-item",
                                    children: [Object(D.jsx)("span", {
                                        className: "intro-ul-tick",
                                        children: Object(D.jsx)("img", {
                                            src: gt,
                                            alt: "Tick"
                                        })
                                    }), "Publish your events on our wide Social media presence"]
                                })]
                            }), Object(D.jsxs)("div", {
                                id: "intro-link-div1",
                                children: [Object(D.jsx)(dt.Link, {
                                    to: "contact-us-div",
                                    smooth: !0,
                                    id: "intro-link1",
                                    children: "Get in Touch"
                                }), Object(D.jsx)(dt.Link, {
                                    to: "content-div",
                                    smooth: !0,
                                    id: "intro-link2",
                                    children: "Explore Solutions"
                                })]
                            })]
                        }), Object(D.jsx)("div", {
                            id: "intro-main-image1",
                            children: Object(D.jsx)("img", {
                                id: "intro-main-image1-Desktop",
                                src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Destop.png",
                                alt: "Desktop"
                            })
                        })]
                    })
                },
                ut = s(447),
                mt = function() {
                    return Object(D.jsx)(D.Fragment, {
                        children: Object(D.jsxs)("div", {
                            id: "why-us-div",
                            children: [Object(D.jsx)("img", {
                                src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Group-7006.png",
                                id: "why-us-bgImage1"
                            }), Object(D.jsx)("img", {
                                src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Ellipse-3.png",
                                id: "why-us-bgImage2"
                            }), Object(D.jsx)("img", {
                                src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Ellipse-1.png",
                                id: "why-us-bgImage3"
                            }), Object(D.jsxs)("div", {
                                id: "why-us-left-div",
                                children: [Object(D.jsx)("p", {
                                    id: "why-us-title",
                                    children: Object(D.jsx)("span", {
                                        id: "title-line",
                                        children: "Why Us \xa0\xa0\xa0 "
                                    })
                                }), Object(D.jsx)("p", {
                                    id: "why-us-heading",
                                    children: Object(D.jsx)("span", {
                                        id: "why-us-text-shadow",
                                        children: "Get the results that matter"
                                    })
                                }), Object(D.jsx)(dt.Link, {
                                    to: "contact-us-div",
                                    smooth: !0,
                                    id: "why-us-link1",
                                    children: Object(D.jsxs)("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between"
                                        },
                                        children: [Object(D.jsx)("p", {
                                            style: {
                                                margin: 0
                                            },
                                            children: "Know More"
                                        }), Object(D.jsx)(ut.a, {
                                            style: {
                                                fontsize: "50px",
                                                color: "#13253A",
                                                float: "right"
                                            }
                                        })]
                                    })
                                })]
                            }), Object(D.jsxs)("div", {
                                id: "why-us-right-div",
                                children: [Object(D.jsxs)("div", {
                                    className: "why-us-content",
                                    children: [Object(D.jsx)("img", {
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Icon1.png",
                                        className: "why-us-icons"
                                    }), Object(D.jsx)("p", {
                                        className: "why-us-content-top",
                                        children: "Build brand awareness"
                                    }), Object(D.jsx)("p", {
                                        className: "why-us-content-bottom",
                                        children: "with 25 million+ users"
                                    })]
                                }), Object(D.jsxs)("div", {
                                    className: "why-us-content",
                                    children: [Object(D.jsx)("img", {
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Icon2.png",
                                        className: "why-us-icons"
                                    }), Object(D.jsx)("p", {
                                        className: "why-us-content-top",
                                        children: "Higher Conversion"
                                    }), Object(D.jsx)("p", {
                                        className: "why-us-content-bottom",
                                        children: "Achieve higher conversion with 90% Ads Viewability"
                                    })]
                                }), Object(D.jsxs)("div", {
                                    className: "why-us-content",
                                    children: [Object(D.jsx)("img", {
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Icon3.png",
                                        className: "why-us-icons"
                                    }), Object(D.jsx)("p", {
                                        className: "why-us-content-top",
                                        children: "Long term results "
                                    }), Object(D.jsx)("p", {
                                        className: "why-us-content-bottom",
                                        children: "Achieve long term results with 90% Organic Traffic"
                                    })]
                                }), Object(D.jsxs)("div", {
                                    className: "why-us-content",
                                    children: [Object(D.jsx)("img", {
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Icon4.png",
                                        className: "why-us-icons"
                                    }), Object(D.jsx)("p", {
                                        className: "why-us-content-top",
                                        children: "Generate Leads"
                                    }), Object(D.jsx)("p", {
                                        className: "why-us-content-bottom",
                                        children: "Generate lead with 20 million+ Logged in users"
                                    })]
                                })]
                            })]
                        })
                    })
                },
                ht = f + "auth-dashboard-uploads/gfg_weekly_coding_contest.png",
                pt = f + "auth-dashboard-uploads/Job-A-Thon%21newcopy-1637640559.png",
                bt = function() {
                    return Object(D.jsxs)(D.Fragment, {
                        children: [Object(D.jsxs)("div", {
                            id: "about-us-div",
                            children: [Object(D.jsxs)("div", {
                                id: "about-us-left-div",
                                children: [Object(D.jsx)("p", {
                                    id: "about-us-title",
                                    children: Object(D.jsx)("span", {
                                        id: "title-line",
                                        children: "About Us \xa0\xa0\xa0"
                                    })
                                }), Object(D.jsx)("p", {
                                    id: "about-us-heading",
                                    children: Object(D.jsx)("span", {
                                        id: "about-us-text-shadow",
                                        children: "We spark action with our audience."
                                    })
                                })]
                            }), Object(D.jsxs)("div", {
                                id: "about-us-content",
                                children: [Object(D.jsx)("p", {
                                    id: "about-us-content-top",
                                    children: "Expertise that everybody counts on"
                                }), Object(D.jsx)("p", {
                                    id: "about-us-content-bottom",
                                    children: "GeeksforGeeks has made a difference in the lives of many students by providing free knowledge on how to obtain a dream career and by assisting authors all over the world to earn by generating and sharing content, which is why the Geeks community of users are so engaged and devoted. We have a unique opportunity to help brands connect with a highly-engaged audience of tech enthusiasts, programmers, and students."
                                })]
                            })]
                        }), Object(D.jsxs)("div", {
                            id: "about-us-events",
                            children: [Object(D.jsx)("h1", {
                                id: "about-us-event-heading",
                                children: "Recurring Events"
                            }), Object(D.jsxs)("div", {
                                id: "about-us-event-cards",
                                children: [Object(D.jsxs)("div", {
                                    className: "about-us-single-event",
                                    children: [Object(D.jsx)("a", {
                                        href: h.GFG_PRACTICE_URL + "events/rec/interview-series?utm_source=gfgpractice&utm_medium=events_page&utm_campaign=events_series_interview_series",
                                        target: "blank",
                                        children: Object(D.jsx)("img", {
                                            src: ht,
                                            height: "auto",
                                            width: "100%"
                                        })
                                    }), Object(D.jsx)("p", {
                                        className: "about-us-single-event-top",
                                        children: "GFG Weekly Coding Contest"
                                    }), Object(D.jsx)("p", {
                                        className: "about-us-single-event-bottom",
                                        children: "Win 2X GeekBits and Ace The Leaderboard! A weekly coding contest to help you practice"
                                    })]
                                }), Object(D.jsxs)("div", {
                                    className: "about-us-single-event",
                                    children: [Object(D.jsx)("a", {
                                        href: h.GFG_PRACTICE_URL + "events/rec/job-a-thon?utm_source=gfgpractice&utm_medium=events_page&utm_campaign=events_series_jobathon",
                                        target: "blank",
                                        children: Object(D.jsx)("img", {
                                            src: pt,
                                            height: "auto",
                                            width: "100%"
                                        })
                                    }), Object(D.jsx)("p", {
                                        className: "about-us-single-event-top",
                                        children: "Job-a-Thon"
                                    }), Object(D.jsx)("p", {
                                        className: "about-us-single-event-bottom",
                                        children: "Monthly hiring challenges conducted by GeeksforGeeks connecting suitable candidates to tech companies."
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                xt = function() {
                    return Object(D.jsxs)("div", {
                        id: "social-presence-div",
                        children: [Object(D.jsxs)("div", {
                            id: "social-presence-content-div",
                            children: [Object(D.jsx)("div", {
                                id: "social-presence-heading",
                                children: Object(D.jsx)("p", {
                                    children: "View our Presence!"
                                })
                            }), Object(D.jsxs)("div", {
                                id: "social-presence-socials",
                                children: [Object(D.jsxs)("div", {
                                    className: "social-presence-content",
                                    children: [Object(D.jsx)("a", {
                                        href: "https://www.facebook.com/geeksforgeeks.org/",
                                        target: "blank",
                                        children: Object(D.jsx)("img", {
                                            className: "social-presence-content-image",
                                            src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/facebook.png"
                                        })
                                    }), Object(D.jsxs)("div", {
                                        children: [Object(D.jsx)("p", {
                                            className: "social-presence-numbers",
                                            children: "215k+"
                                        }), Object(D.jsx)("p", {
                                            className: "social-presence-numbers-text",
                                            children: "followers"
                                        })]
                                    })]
                                }), Object(D.jsxs)("div", {
                                    className: "social-presence-content",
                                    children: [Object(D.jsx)("a", {
                                        href: "https://www.instagram.com/geeks_for_geeks/",
                                        target: "blank",
                                        children: Object(D.jsx)("img", {
                                            className: "social-presence-content-image",
                                            src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/instagram.png"
                                        })
                                    }), Object(D.jsxs)("div", {
                                        children: [Object(D.jsx)("p", {
                                            className: "social-presence-numbers",
                                            children: "255k+"
                                        }), Object(D.jsx)("p", {
                                            className: "social-presence-numbers-text",
                                            children: "followers"
                                        })]
                                    })]
                                }), Object(D.jsxs)("div", {
                                    className: "social-presence-content",
                                    children: [Object(D.jsx)("a", {
                                        href: "https://in.linkedin.com/company/geeksforgeeks",
                                        target: "blank",
                                        children: Object(D.jsx)("img", {
                                            className: "social-presence-content-image",
                                            src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/linkedin1.png"
                                        })
                                    }), Object(D.jsxs)("div", {
                                        children: [Object(D.jsx)("p", {
                                            className: "social-presence-numbers",
                                            children: "1M+"
                                        }), Object(D.jsx)("p", {
                                            className: "social-presence-numbers-text",
                                            children: "followers"
                                        })]
                                    })]
                                }), Object(D.jsxs)("div", {
                                    className: "social-presence-content",
                                    children: [Object(D.jsx)("a", {
                                        href: "https://twitter.com/geeksforgeeks",
                                        target: "blank",
                                        children: Object(D.jsx)("img", {
                                            className: "social-presence-content-image",
                                            src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/twitter.png"
                                        })
                                    }), Object(D.jsxs)("div", {
                                        children: [Object(D.jsx)("p", {
                                            className: "social-presence-numbers",
                                            children: "45k+"
                                        }), Object(D.jsx)("p", {
                                            className: "social-presence-numbers-text",
                                            children: "followers"
                                        })]
                                    })]
                                })]
                            })]
                        }), Object(D.jsx)("div", {
                            id: "social-presence-image",
                            children: Object(D.jsx)("img", {
                                src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/SocialLogo.png",
                                height: "250vw",
                                width: "300vw"
                            })
                        })]
                    })
                },
                ft = function() {
                    var e = Object(a.useRef)(),
                        t = Object(a.useState)(!1),
                        s = Object(d.a)(t, 2),
                        c = s[0],
                        i = s[1],
                        n = function(t) {
                            e.current.getBoundingClientRect().top - window.innerHeight < 0 && i(!0)
                        };
                    Object(a.useEffect)((function() {
                        (console.log("Start Animation", c), c) && document.querySelectorAll(".user-statistics-card-heading").forEach((function(e) {
                            r(e)
                        }))
                    }), [c]);
                    var r = function(e) {
                        var t = e.getAttribute("data-value"),
                            s = 0,
                            a = setInterval((function() {
                                s += 1, e.innerHTML = s + "%", s >= t && clearInterval(a)
                            }), 60)
                    };
                    return Object(a.useEffect)((function() {
                        return window.addEventListener("scroll", n),
                            function() {
                                window.removeEventListener("scroll", n)
                            }
                    }), []), Object(D.jsxs)("div", {
                        id: "user-statistics-div",
                        children: [Object(D.jsx)("img", {
                            src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Ellipse-3.png",
                            id: "user-statistics-bgImage2"
                        }), Object(D.jsx)("img", {
                            src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Ellipse-1-%281%29.png",
                            id: "user-statistics-bgImage3"
                        }), Object(D.jsx)("img", {
                            id: "user-statistics-bg-img",
                            src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/g10.png"
                        }), Object(D.jsx)("p", {
                            id: "user-statistics-heading",
                            children: Object(D.jsx)("span", {
                                id: "user-statistics-text-shadow",
                                children: "User Statistics"
                            })
                        }), Object(D.jsxs)("div", {
                            id: "user-statistics-cards",
                            children: [Object(D.jsxs)("div", {
                                className: "user-statistics-single-card",
                                ref: e,
                                children: [Object(D.jsx)("p", {
                                    className: "user-statistics-card-heading",
                                    "data-value": "45",
                                    children: "0"
                                }), Object(D.jsx)("p", {
                                    className: "user-statistics-card-data",
                                    children: "Tier 1 Cities"
                                })]
                            }), Object(D.jsxs)("div", {
                                className: "user-statistics-single-card",
                                children: [Object(D.jsx)("p", {
                                    className: "user-statistics-card-heading",
                                    "data-value": "35",
                                    children: "0"
                                }), Object(D.jsx)("p", {
                                    className: "user-statistics-card-data",
                                    children: "Tier 2 Cities"
                                })]
                            }), Object(D.jsxs)("div", {
                                className: "user-statistics-single-card",
                                children: [Object(D.jsx)("p", {
                                    className: "user-statistics-card-heading",
                                    "data-value": "20",
                                    children: "0"
                                }), Object(D.jsx)("p", {
                                    className: "user-statistics-card-data",
                                    children: "Tier 3 Cities"
                                })]
                            }), Object(D.jsxs)("div", {
                                className: "user-statistics-single-card",
                                children: [Object(D.jsx)("p", {
                                    className: "user-statistics-card-heading",
                                    "data-value": "70",
                                    children: "0"
                                }), Object(D.jsx)("p", {
                                    className: "user-statistics-card-data",
                                    children: "Male population"
                                })]
                            }), Object(D.jsxs)("div", {
                                className: "user-statistics-single-card",
                                children: [Object(D.jsx)("p", {
                                    className: "user-statistics-card-heading",
                                    "data-value": "30",
                                    children: "0"
                                }), Object(D.jsx)("p", {
                                    className: "user-statistics-card-data",
                                    children: "Female Population"
                                })]
                            }), Object(D.jsxs)("div", {
                                className: "user-statistics-single-card",
                                children: [Object(D.jsx)("p", {
                                    className: "user-statistics-card-heading",
                                    "data-value": "70",
                                    children: "0"
                                }), Object(D.jsx)("p", {
                                    className: "user-statistics-card-data",
                                    children: "18-35 yrs Geeks   "
                                })]
                            })]
                        })]
                    })
                },
                Ot = "https://media.geeksforgeeks.org/auth-dashboard-uploads/Vector.png",
                _t = function() {
                    return Object(D.jsxs)("div", {
                        id: "content-div",
                        children: [Object(D.jsx)("img", {
                            src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Ellipse-1.png",
                            id: "content-bgImage3"
                        }), Object(D.jsx)("p", {
                            id: "content-heading",
                            children: Object(D.jsx)("span", {
                                id: "content-text-shadow",
                                children: "Wide array of Advertisement"
                            })
                        }), Object(D.jsx)("p", {
                            id: "content-description",
                            children: "Take a look how your content will look like"
                        }), Object(D.jsxs)("div", {
                            id: "content-content",
                            children: [Object(D.jsxs)("div", {
                                className: "content-card",
                                children: [Object(D.jsx)("div", {
                                    className: "content-card-image",
                                    children: Object(D.jsx)("img", {
                                        id: "content-single-image",
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Ad1.png",
                                        width: "400vw",
                                        height: "300vw"
                                    })
                                }), Object(D.jsxs)("div", {
                                    className: "content-card-content",
                                    children: [Object(D.jsx)("p", {
                                        className: "content-p",
                                        children: "Support for Multiple desktop banner & operating system based on your choice"
                                    }), Object(D.jsxs)("div", {
                                        className: "content-card-content-data",
                                        children: [Object(D.jsx)("div", {
                                            className: "content-list-div",
                                            children: Object(D.jsxs)("ul", {
                                                className: "content-list",
                                                children: [Object(D.jsxs)("li", {
                                                    className: "content-list1-item",
                                                    children: [Object(D.jsx)("span", {
                                                        className: "content-ul-tick",
                                                        children: Object(D.jsx)("img", {
                                                            src: Ot,
                                                            alt: "Tick"
                                                        })
                                                    }), "300X600"]
                                                }), Object(D.jsxs)("li", {
                                                    className: "content-list1-item",
                                                    children: [Object(D.jsx)("span", {
                                                        className: "content-ul-tick",
                                                        children: Object(D.jsx)("img", {
                                                            src: Ot,
                                                            alt: "Tick"
                                                        })
                                                    }), "300X250"]
                                                }), Object(D.jsxs)("li", {
                                                    className: "content-list1-item",
                                                    children: [Object(D.jsx)("span", {
                                                        className: "content-ul-tick",
                                                        children: Object(D.jsx)("img", {
                                                            src: Ot,
                                                            alt: "Tick"
                                                        })
                                                    }), "336X280"]
                                                }), Object(D.jsxs)("li", {
                                                    className: "content-list1-item",
                                                    children: [Object(D.jsx)("span", {
                                                        className: "content-ul-tick",
                                                        children: Object(D.jsx)("img", {
                                                            src: Ot,
                                                            alt: "Tick"
                                                        })
                                                    }), "728X90"]
                                                }), Object(D.jsxs)("li", {
                                                    className: "content-list1-item",
                                                    children: [Object(D.jsx)("span", {
                                                        className: "content-ul-tick",
                                                        children: Object(D.jsx)("img", {
                                                            src: Ot,
                                                            alt: "Tick"
                                                        })
                                                    }), "160X600"]
                                                }), Object(D.jsxs)("li", {
                                                    className: "content-list1-item",
                                                    children: [Object(D.jsx)("span", {
                                                        className: "content-ul-tick",
                                                        children: Object(D.jsx)("img", {
                                                            src: Ot,
                                                            alt: "Tick"
                                                        })
                                                    }), "728X250"]
                                                })]
                                            })
                                        }), Object(D.jsxs)("div", {
                                            className: "content-icons-div",
                                            children: [Object(D.jsx)("img", {
                                                src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Windows.png",
                                                height: "50vw",
                                                width: "50vw",
                                                alt: "Test"
                                            }), Object(D.jsx)("img", {
                                                src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Apple.png",
                                                height: "50vw",
                                                width: "50vw",
                                                alt: "Test"
                                            }), Object(D.jsx)("img", {
                                                src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Linux.png",
                                                height: "50vw",
                                                width: "50vw",
                                                alt: "Test"
                                            })]
                                        }), Object(D.jsx)("div", {
                                            className: "content-link-div",
                                            children: Object(D.jsx)(dt.Link, {
                                                to: "contact-us-div",
                                                smooth: !0,
                                                className: "content-link",
                                                children: Object(D.jsxs)("div", {
                                                    style: {
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        width: "100%"
                                                    },
                                                    children: [Object(D.jsx)("p", {
                                                        style: {
                                                            margin: "auto 0"
                                                        },
                                                        children: "Know More"
                                                    }), Object(D.jsx)(ut.a, {
                                                        style: {
                                                            fontsize: "50px",
                                                            color: "#F8F8F8",
                                                            float: "right"
                                                        }
                                                    })]
                                                })
                                            })
                                        })]
                                    })]
                                })]
                            }), Object(D.jsxs)("div", {
                                className: "content-card",
                                children: [Object(D.jsxs)("div", {
                                    className: "content-card-image",
                                    children: [Object(D.jsx)("img", {
                                        className: "content-half-images",
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Ad2-1.png",
                                        width: "200vw",
                                        height: "300vw"
                                    }), Object(D.jsx)("img", {
                                        className: "content-half-images",
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Ad2-2.png",
                                        width: "200vw",
                                        height: "300vw"
                                    })]
                                }), Object(D.jsxs)("div", {
                                    className: "content-card-content",
                                    children: [Object(D.jsx)("p", {
                                        className: "content-p",
                                        children: "Support for Multiple mobile banner & operating system based on your choice"
                                    }), Object(D.jsxs)("div", {
                                        className: "content-card-content-data",
                                        children: [Object(D.jsx)("div", {
                                            className: "content-list-div",
                                            children: Object(D.jsxs)("ul", {
                                                className: "content-list",
                                                children: [Object(D.jsxs)("li", {
                                                    className: "content-list1-item content-list2-item",
                                                    children: [Object(D.jsx)("span", {
                                                        className: "content-ul-tick",
                                                        children: Object(D.jsx)("img", {
                                                            src: Ot,
                                                            alt: "Tick"
                                                        })
                                                    }), "320X50"]
                                                }), Object(D.jsxs)("li", {
                                                    className: "content-list1-item content-list2-item",
                                                    children: [Object(D.jsx)("span", {
                                                        className: "content-ul-tick",
                                                        children: Object(D.jsx)("img", {
                                                            src: Ot,
                                                            alt: "Tick"
                                                        })
                                                    }), "336X280"]
                                                }), Object(D.jsx)("li", {
                                                    className: "content-list1-item content-list2-item",
                                                    id: "content-list1-extra-item",
                                                    children: "\xa0"
                                                })]
                                            })
                                        }), Object(D.jsxs)("div", {
                                            className: "content-icons-div",
                                            children: [Object(D.jsx)("img", {
                                                src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Android.png",
                                                height: "50vw",
                                                width: "50vw",
                                                alt: "Test"
                                            }), Object(D.jsx)("img", {
                                                src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/AppStore.png",
                                                height: "50vw",
                                                width: "50vw",
                                                alt: "Test"
                                            })]
                                        }), Object(D.jsx)("div", {
                                            className: "content-link-div",
                                            children: Object(D.jsx)(dt.Link, {
                                                to: "contact-us-div",
                                                smooth: !0,
                                                className: "content-link",
                                                children: Object(D.jsxs)("div", {
                                                    style: {
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        width: "100%"
                                                    },
                                                    children: [Object(D.jsx)("p", {
                                                        style: {
                                                            margin: "auto 0"
                                                        },
                                                        children: "Know More"
                                                    }), Object(D.jsx)(ut.a, {
                                                        style: {
                                                            fontsize: "50px",
                                                            color: "#F8F8F8",
                                                            float: "right"
                                                        }
                                                    })]
                                                })
                                            })
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                vt = function() {
                    return Object(D.jsxs)("div", {
                        id: "covered-areas-div",
                        children: [Object(D.jsx)("p", {
                            id: "covered-areas-heading",
                            children: Object(D.jsx)("span", {
                                id: "covered-areas-text-shadow",
                                children: "Everyone is covered"
                            })
                        }), Object(D.jsxs)("div", {
                            id: "covered-areas-cards",
                            children: [Object(D.jsxs)("div", {
                                className: "covered-areas-single-card",
                                children: [Object(D.jsx)("div", {
                                    className: "covered-areas-card-inside-div",
                                    children: Object(D.jsx)("img", {
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/gadget1.png",
                                        width: "100vw",
                                        height: "100vw"
                                    })
                                }), Object(D.jsx)("p", {
                                    className: "covered-areas-card-data",
                                    children: "Technology/Gadget enthusiastic"
                                })]
                            }), Object(D.jsxs)("div", {
                                className: "covered-areas-single-card",
                                children: [Object(D.jsx)("div", {
                                    className: "covered-areas-card-inside-div",
                                    children: Object(D.jsx)("img", {
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/ent.png",
                                        width: "100vw",
                                        height: "100vw"
                                    })
                                }), Object(D.jsx)("p", {
                                    className: "covered-areas-card-data",
                                    children: "Media & Entertainment"
                                })]
                            }), Object(D.jsxs)("div", {
                                className: "covered-areas-single-card",
                                children: [Object(D.jsx)("div", {
                                    className: "covered-areas-card-inside-div",
                                    children: Object(D.jsx)("img", {
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/table.png",
                                        width: "100vw",
                                        height: "100vw"
                                    })
                                }), Object(D.jsx)("p", {
                                    className: "covered-areas-card-data",
                                    children: "Frequently Dining out"
                                })]
                            }), Object(D.jsxs)("div", {
                                className: "covered-areas-single-card",
                                children: [Object(D.jsx)("div", {
                                    className: "covered-areas-card-inside-div",
                                    children: Object(D.jsx)("img", {
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/businessTrip.png",
                                        width: "100vw",
                                        height: "100vw"
                                    })
                                }), Object(D.jsx)("p", {
                                    className: "covered-areas-card-data",
                                    children: "Businesss Travelers"
                                })]
                            }), Object(D.jsxs)("div", {
                                className: "covered-areas-single-card",
                                children: [Object(D.jsx)("div", {
                                    className: "covered-areas-card-inside-div",
                                    children: Object(D.jsx)("img", {
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/shopper.png",
                                        width: "100vw",
                                        height: "100vw"
                                    })
                                }), Object(D.jsx)("p", {
                                    className: "covered-areas-card-data",
                                    children: "Shoppers"
                                })]
                            }), Object(D.jsxs)("div", {
                                className: "covered-areas-single-card",
                                children: [Object(D.jsx)("div", {
                                    className: "covered-areas-card-inside-div",
                                    children: Object(D.jsx)("img", {
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/watchingMovie.png",
                                        width: "100vw",
                                        height: "100vw"
                                    })
                                }), Object(D.jsx)("p", {
                                    className: "covered-areas-card-data",
                                    children: "Movie Lovers"
                                })]
                            })]
                        })]
                    })
                },
                Nt = s(109),
                wt = s.n(Nt),
                kt = function() {
                    var e = Object(a.useRef)(),
                        t = Object(a.useRef)(),
                        s = Object(a.useRef)(),
                        c = Object(a.useRef)(),
                        i = Object(a.useRef)(),
                        n = Object(a.useRef)(),
                        r = Object(a.useRef)(),
                        o = Object(a.useRef)(),
                        l = Object(a.useState)(""),
                        u = Object(d.a)(l, 2),
                        m = u[0],
                        h = u[1],
                        p = function(e) {
                            var t = wt()("#" + e.target.id).find("option:selected").text(),
                                s = wt()("<select/>").append(wt()("<option/>").text(t));
                            wt()("#" + e.target.id).after(s), wt()("#" + e.target.id).width(Math.max(0, s.width())), s.remove()
                        },
                        b = function() {
                            var a = Object(j.a)(Object(g.a)().mark((function a(l) {
                                var d, j, u;
                                return Object(g.a)().wrap((function(a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            l.preventDefault(), d = JSON.parse(localStorage.getItem("loginData")), j = "<br />Name:- " + e.current.value + "<br/>User Type :-" + t.current.value + "<br/> User Purpose:- " + s.current.value + "<br/> User Reach:- " + n.current.value + "<br/> Company Name:- " + r.current.value, (u = new FormData).append("message", j), u.append("email", c.current.value), u.append("mobile", i.current.value), u.append("type", "Advertisement"), u.append("csrf_token", d.csrf_token), u.append("isLoggedIn", d.isLoggedIn), u.append("time", d.time), u.append("post_id", 0), fetch("https://util.geeksforgeeks.org/ajax/contactUsAjax.php", {
                                                method: "POST",
                                                body: u,
                                                redirect: "follow",
                                                credentials: "include"
                                            }).then((function(e) {
                                                return e.text()
                                            })).then((function(e) {
                                                var t = JSON.parse(e);
                                                o.current.style.display = "block", h(t.message), 1 == t.status ? (l.target.reset(), setTimeout((function() {
                                                    o.current.style.display = "none"
                                                }), 3e3)) : t.message.includes("email") ? c.current.focus() : i.current.focus()
                                            })).catch((function(e) {
                                                return console.log("error", e)
                                            }));
                                        case 14:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })));
                            return function(e) {
                                return a.apply(this, arguments)
                            }
                        }();
                    return Object(D.jsxs)("div", {
                        id: "contact-us-div",
                        children: [Object(D.jsx)("p", {
                            id: "contact-us-heading",
                            children: Object(D.jsx)("span", {
                                id: "contact-us-text-shadow",
                                children: "Contact Us"
                            })
                        }), Object(D.jsx)("div", {
                            id: "contact-form",
                            children: Object(D.jsx)("form", {
                                onSubmit: b,
                                children: Object(D.jsxs)("div", {
                                    id: "contact-form-div",
                                    children: [Object(D.jsxs)("div", {
                                        id: "contact-form-user-dropdown-div",
                                        children: [Object(D.jsx)("div", {
                                            id: "contact-form-user-dropdown1",
                                            children: Object(D.jsxs)("p", {
                                                className: "contact-us-para",
                                                children: ["I am \xa0", Object(D.jsxs)("select", {
                                                    name: "userType",
                                                    id: "userType",
                                                    className: "contact-us-dropdown",
                                                    ref: t,
                                                    onChange: p,
                                                    children: [Object(D.jsx)("option", {
                                                        value: "individual",
                                                        children: "a individual"
                                                    }), Object(D.jsx)("option", {
                                                        value: "brand",
                                                        children: "a brand"
                                                    })]
                                                })]
                                            })
                                        }), Object(D.jsx)("div", {
                                            id: "contact-form-user-dropdown2",
                                            children: Object(D.jsxs)("p", {
                                                className: "contact-us-para",
                                                children: ["looking to \xa0", Object(D.jsxs)("select", {
                                                    name: "userPurpose",
                                                    id: "userPurpose",
                                                    className: "contact-us-dropdown",
                                                    onChange: p,
                                                    ref: s,
                                                    children: [Object(D.jsx)("option", {
                                                        value: "awareness",
                                                        children: "build brand awareness"
                                                    }), Object(D.jsx)("option", {
                                                        value: "grow",
                                                        children: "grow more"
                                                    })]
                                                })]
                                            })
                                        })]
                                    }), Object(D.jsxs)("div", {
                                        className: "contact-us-inputs",
                                        children: [Object(D.jsx)("label", {
                                            children: "Name*"
                                        }), Object(D.jsx)("input", {
                                            type: "text",
                                            id: "name",
                                            name: "name",
                                            placeholder: "John Doe",
                                            ref: e,
                                            maxLength: "50",
                                            title: "Please enter alphabets only",
                                            pattern: "[a-zA-Z ]*$",
                                            required: !0
                                        })]
                                    }), Object(D.jsxs)("div", {
                                        className: "contact-us-inputs",
                                        children: [Object(D.jsx)("label", {
                                            children: "Email address*"
                                        }), Object(D.jsx)("input", {
                                            type: "email",
                                            pattern: "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}",
                                            id: "email",
                                            name: "email",
                                            placeholder: "xyz@gmail.com",
                                            ref: c,
                                            title: "Please enter valid email",
                                            required: !0
                                        })]
                                    }), Object(D.jsxs)("div", {
                                        className: "contact-us-inputs",
                                        children: [Object(D.jsx)("label", {
                                            children: "Mobile Number*"
                                        }), Object(D.jsx)("input", {
                                            type: "text",
                                            pattern: "\\+[0-9]+",
                                            id: "mobileNumber",
                                            name: "mobileNumber",
                                            placeholder: "9999999999",
                                            ref: i,
                                            maxLength: "20",
                                            title: "Enter Phone number with country code without space",
                                            required: !0
                                        })]
                                    }), Object(D.jsxs)("div", {
                                        className: "contact-us-inputs",
                                        children: [Object(D.jsx)("label", {
                                            children: "Estimated User Reach"
                                        }), Object(D.jsx)("input", {
                                            type: "text",
                                            id: "userReach",
                                            name: "userReach",
                                            placeholder: "9999999999",
                                            maxLength: "20",
                                            pattern: "^[0-9]*$",
                                            title: "Please enter digits only",
                                            ref: n
                                        })]
                                    }), Object(D.jsxs)("div", {
                                        className: "contact-us-inputs",
                                        children: [Object(D.jsx)("label", {
                                            children: "Company Name(Optional)"
                                        }), Object(D.jsx)("input", {
                                            type: "text",
                                            id: "companyName",
                                            name: "companyName",
                                            placeholder: "companyname.com",
                                            ref: r,
                                            maxLength: "100"
                                        })]
                                    }), Object(D.jsx)("div", {
                                        id: "contact-us-submit-div",
                                        children: Object(D.jsx)("a", {
                                            href: "#",
                                            id: "contact-us-submit",
                                            children: Object(D.jsx)("button", {
                                                type: "submit",
                                                id: "contact-us-button-submit",
                                                children: "Submit"
                                            })
                                        })
                                    }), Object(D.jsx)("div", {
                                        id: "contact-us-form-response",
                                        ref: o,
                                        children: Object(D.jsx)("p", {
                                            id: "contact-us-form-response-text",
                                            children: m
                                        })
                                    })]
                                })
                            })
                        })]
                    })
                },
                yt = f + "auth-dashboard-uploads/Group-%280%29.png",
                St = f + "auth-dashboard-uploads/Group-%281%29.png",
                Lt = f + "auth-dashboard-uploads/Group-%282%29.png",
                Ct = f + "auth-dashboard-uploads/Group-%283%29.png",
                Gt = f + "auth-dashboard-uploads/Group-%284%29.png",
                Tt = f + "auth-dashboard-uploads/Group-%285%29.png",
                Rt = f + "auth-dashboard-uploads/Group-%286%29.png",
                Et = f + "auth-dashboard-uploads/Group-%287%29.png",
                It = f + "auth-dashboard-uploads/Group-%288%29.png",
                Ft = f + "auth-dashboard-uploads/Group-%289%29.png",
                At = f + "auth-dashboard-uploads/Group-%2810%29.png",
                Pt = f + "auth-dashboard-uploads/Group-%2811%29.png",
                Ut = f + "auth-dashboard-uploads/Ellipse-1.png",
                Dt = function() {
                    return Object(D.jsxs)("div", {
                        id: "solutions-div",
                        children: [Object(D.jsx)("img", {
                            src: Ut,
                            id: "solutions-bgImage"
                        }), Object(D.jsx)("p", {
                            id: "solutions-heading",
                            children: Object(D.jsx)("span", {
                                id: "solutions-text-shadow",
                                children: "Solutions to offer"
                            })
                        }), Object(D.jsx)("p", {
                            id: "solutions-subheading",
                            children: "Take a look on how we do our work"
                        }), Object(D.jsx)("div", {
                            id: "solution-content-parent",
                            children: Object(D.jsxs)("div", {
                                id: "solutions-content",
                                children: [Object(D.jsxs)("div", {
                                    className: "solutions-single-card",
                                    children: [Object(D.jsx)("div", {
                                        className: "solutions-card-inside-div",
                                        children: Object(D.jsx)("img", {
                                            src: yt,
                                            width: "50vw",
                                            height: "50vw"
                                        })
                                    }), Object(D.jsx)("p", {
                                        className: "solutions-card-data",
                                        children: "Email Marketing"
                                    })]
                                }), Object(D.jsxs)("div", {
                                    className: "solutions-single-card",
                                    children: [Object(D.jsx)("div", {
                                        className: "solutions-card-inside-div",
                                        children: Object(D.jsx)("img", {
                                            src: St,
                                            width: "50vw",
                                            height: "50vw"
                                        })
                                    }), Object(D.jsx)("p", {
                                        className: "solutions-card-data",
                                        children: "Social Media Campaigns"
                                    })]
                                }), Object(D.jsxs)("div", {
                                    className: "solutions-single-card",
                                    children: [Object(D.jsx)("div", {
                                        className: "solutions-card-inside-div",
                                        children: Object(D.jsx)("img", {
                                            src: Lt,
                                            width: "50vw",
                                            height: "50vw"
                                        })
                                    }), Object(D.jsx)("p", {
                                        className: "solutions-card-data",
                                        children: "Brand Reviews"
                                    })]
                                }), Object(D.jsxs)("div", {
                                    className: "solutions-single-card",
                                    children: [Object(D.jsx)("div", {
                                        className: "solutions-card-inside-div",
                                        children: Object(D.jsx)("img", {
                                            src: Ct,
                                            width: "50vw",
                                            height: "50vw"
                                        })
                                    }), Object(D.jsx)("p", {
                                        className: "solutions-card-data",
                                        children: "Dedicated Product Reviews"
                                    })]
                                }), Object(D.jsxs)("div", {
                                    className: "solutions-single-card",
                                    children: [Object(D.jsx)("div", {
                                        className: "solutions-card-inside-div",
                                        children: Object(D.jsx)("img", {
                                            src: Gt,
                                            width: "50vw",
                                            height: "50vw"
                                        })
                                    }), Object(D.jsx)("p", {
                                        className: "solutions-card-data",
                                        children: "Guest Postings"
                                    })]
                                }), Object(D.jsxs)("div", {
                                    className: "solutions-single-card",
                                    children: [Object(D.jsx)("div", {
                                        className: "solutions-card-inside-div",
                                        children: Object(D.jsx)("img", {
                                            src: Tt,
                                            width: "50vw",
                                            height: "50vw"
                                        })
                                    }), Object(D.jsx)("p", {
                                        className: "solutions-card-data",
                                        children: "Campus Connect"
                                    })]
                                }), Object(D.jsxs)("div", {
                                    className: "solutions-single-card",
                                    children: [Object(D.jsx)("div", {
                                        className: "solutions-card-inside-div",
                                        children: Object(D.jsx)("img", {
                                            src: Rt,
                                            width: "50vw",
                                            height: "50vw"
                                        })
                                    }), Object(D.jsx)("p", {
                                        className: "solutions-card-data",
                                        children: "YouTube Series & Workshops"
                                    })]
                                }), Object(D.jsxs)("div", {
                                    className: "solutions-single-card",
                                    children: [Object(D.jsx)("div", {
                                        className: "solutions-card-inside-div",
                                        children: Object(D.jsx)("img", {
                                            src: Et,
                                            width: "50vw",
                                            height: "50vw"
                                        })
                                    }), Object(D.jsx)("p", {
                                        className: "solutions-card-data",
                                        children: "Podcasts"
                                    })]
                                }), Object(D.jsxs)("div", {
                                    className: "solutions-single-card",
                                    children: [Object(D.jsx)("div", {
                                        className: "solutions-card-inside-div",
                                        children: Object(D.jsx)("img", {
                                            src: It,
                                            width: "50vw",
                                            height: "50vw"
                                        })
                                    }), Object(D.jsx)("p", {
                                        className: "solutions-card-data",
                                        children: "Hackathons"
                                    })]
                                }), Object(D.jsxs)("div", {
                                    className: "solutions-single-card",
                                    children: [Object(D.jsx)("div", {
                                        className: "solutions-card-inside-div",
                                        children: Object(D.jsx)("img", {
                                            src: Ft,
                                            width: "50vw",
                                            height: "50vw"
                                        })
                                    }), Object(D.jsx)("p", {
                                        className: "solutions-card-data",
                                        children: "Coding Contests"
                                    })]
                                }), Object(D.jsxs)("div", {
                                    className: "solutions-single-card",
                                    children: [Object(D.jsx)("div", {
                                        className: "solutions-card-inside-div",
                                        children: Object(D.jsx)("img", {
                                            src: At,
                                            width: "50vw",
                                            height: "50vw"
                                        })
                                    }), Object(D.jsx)("p", {
                                        className: "solutions-card-data",
                                        children: "Hiring Challenges"
                                    })]
                                }), Object(D.jsxs)("div", {
                                    className: "solutions-single-card",
                                    children: [Object(D.jsx)("div", {
                                        className: "solutions-card-inside-div",
                                        children: Object(D.jsx)("img", {
                                            src: Pt,
                                            width: "50vw",
                                            height: "50vw"
                                        })
                                    }), Object(D.jsx)("p", {
                                        className: "solutions-card-data",
                                        children: "Tech Carnivals"
                                    })]
                                })]
                            })
                        })]
                    })
                };
            var Bt = function() {
                    return Object(D.jsxs)("div", {
                        className: "App",
                        children: [Object(D.jsx)(jt, {}), Object(D.jsx)(mt, {}), Object(D.jsx)(bt, {}), Object(D.jsx)(xt, {}), Object(D.jsx)(ft, {}), Object(D.jsx)(_t, {}), Object(D.jsx)(Dt, {}), Object(D.jsx)(vt, {}), Object(D.jsx)(kt, {})]
                    })
                },
                qt = (s(297), function() {
                    return Object(D.jsxs)(D.Fragment, {
                        children: [Object(D.jsxs)(fe.a, {
                            children: [Object(D.jsx)("title", {
                                children: "Advertise with us"
                            }), Object(D.jsx)("meta", {
                                charset: "utf-8"
                            }), Object(D.jsx)("meta", {
                                name: "keywords",
                                content: "Data Structures,Algorithms,Python,Java,C,C++,JavaScript,Android Development,SQL,Data Science,Machine Learning,PHP,Web Development,System Design,Tutorial,Technical Blogs,Interview Experience,Interview Preparation,Programming,Competitive Programming,SDE Sheet,Job-a-thon,Coding Contests,GATE CSE,HTML,CSS,React,NodeJS,Placement,Aptitude,Quiz,Computer Science,Programming Examples,GeeksforGeeks Courses,Puzzles"
                            }), Object(D.jsx)("meta", {
                                name: "viewport",
                                content: "width=device-width,initial-scale=1,maximum-scale=1"
                            }), Object(D.jsx)("meta", {
                                name: "theme-color",
                                content: "#308D46"
                            }), Object(D.jsx)("meta", {
                                name: "image",
                                property: "og:image",
                                content: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png"
                            }), Object(D.jsx)("meta", {
                                property: "og:image:type",
                                content: "image/png"
                            }), Object(D.jsx)("meta", {
                                property: "og:image:width",
                                content: "200"
                            }), Object(D.jsx)("meta", {
                                property: "og:image:height",
                                content: "200"
                            }), Object(D.jsx)("meta", {
                                name: "facebook-domain-verification",
                                content: "xo7t4ve2wn3ywfkjdvwbrk01pvdond"
                            }), Object(D.jsx)("meta", {
                                name: "description",
                                content: "A Computer Science portal for geeks. It contains well written, well thought and well explained computer science and programming articles, quizzes and practice/competitive programming/company interview Questions."
                            }), Object(D.jsx)("meta", {
                                property: "og:locale",
                                content: "en_US"
                            }), Object(D.jsx)("meta", {
                                property: "og:type",
                                content: "article"
                            }), Object(D.jsx)("meta", {
                                property: "og:title",
                                content: "Advertise with us - GeeksforGeeks"
                            }), Object(D.jsx)("meta", {
                                property: "og:description",
                                content: "A Computer Science portal for geeks. It contains well written, well thought and well explained computer science and programming articles, quizzes and practice/competitive programming/company interview Questions."
                            }), Object(D.jsx)("meta", {
                                property: "og:url",
                                content: "https://www.geeksforgeeks.org/advertise-with-us/"
                            }), Object(D.jsx)("meta", {
                                property: "og:site_name",
                                content: "GeeksforGeeks"
                            }), Object(D.jsx)("meta", {
                                name: "generator",
                                content: "WordPress 4.9.8"
                            }), Object(D.jsx)("meta", {
                                name: "msapplication-TileImage",
                                content: "https://www.geeksforgeeks.org/wp-content/uploads/gfg_200X200.png"
                            })]
                        }), Object(D.jsx)(Bt, {})]
                    })
                }),
                Vt = s(451),
                Mt = s(453),
                zt = s(454),
                Wt = s(455),
                Ht = s(116),
                Jt = s(244),
                Qt = s(456),
                Xt = function() {
                    var e = Object(a.useState)(""),
                        t = Object(d.a)(e, 2),
                        s = t[0],
                        c = t[1],
                        i = Object(a.useState)({
                            width: void 0,
                            height: void 0
                        }),
                        n = Object(d.a)(i, 2),
                        r = n[0],
                        o = n[1],
                        l = function() {
                            o({
                                width: window.innerWidth,
                                height: window.innerHeight
                            })
                        };
                    return Object(a.useEffect)((function() {
                        return window.addEventListener("resize", l), l(), 0 < r.width && r.width <= 576 && c("xs"), 577 <= r.width && r.width <= 768 && c("sm"), 769 <= r.width && r.width < 835 && c("md"), 835 <= r.width && r.width < 1195 && c("lg"), 1195 <= r.width && c("xl"),
                            function() {
                                return window.removeEventListener("resize", l)
                            }
                    }), [r.width]), s
                },
                Kt = s(93),
                Yt = function(e, t, s) {
                    try {
                        Kt.a.event({
                            category: s,
                            action: t,
                            label: window.location.href
                        })
                    } catch (a) {
                        console.log(a)
                    }
                },
                Zt = (Vt.a.Meta, function(e) {
                    var t = 0 !== (e.duration / 3600 | 0) ? e.duration / 3600 | 0 : "",
                        s = e.duration % 3600 / 60 | 0,
                        a = e.duration % 60,
                        c = t.toString(),
                        i = s.toString(),
                        n = a.toString(),
                        r = "" !== c ? 1 === c.length ? "0" + c + ":" : c + ":" : "";
                    return r += (1 === i.length ? "0" + i : i) + ":", r += 1 === n.length ? "0" + n : n, Object(D.jsx)(D.Fragment, {
                        children: Object(D.jsx)(Mt.a, {
                            className: "xl" !== e.breakpoint && "lg" !== e.breakpoint && "md" !== e.breakpoint ? "gfg_home_course gfg_home_page_video_outer_height_hover" : "ant-col-8 gfg_home_page_video_outer_height_hover",
                            children: Object(D.jsx)(ce.a, {
                                to: "videos/" + e.slug + "/",
                                onClick: function(t) {
                                    return Yt(t, "clickopen", "".concat(e.eventCategory))
                                },
                                children: Object(D.jsx)(Vt.a, {
                                    className: "gfg_home_page_video_card",
                                    hoverable: !0,
                                    style: {
                                        borderRadius: "10px"
                                    },
                                    cover: Object(D.jsxs)("div", {
                                        style: {
                                            position: "relative"
                                        },
                                        children: [Object(D.jsx)(Qt.a, {
                                            className: "gfg_home_page_video_card_play_button"
                                        }), Object(D.jsx)("div", {
                                            class: "duration_video",
                                            children: r
                                        }), Object(D.jsx)("img", {
                                            className: "gfg_home_page_video_image",
                                            src: e.meta.thumbnail ? e.meta.thumbnail : "https://media.geeksforgeeks.org/img-practice/banner/complete-interview-preparation-thumbnail.png"
                                        })]
                                    }),
                                    children: Object(D.jsxs)("div", {
                                        style: {
                                            marginBottom: "-10px",
                                            marginTop: "-10px"
                                        },
                                        children: [Object(D.jsx)("div", {
                                            className: "video-card-content video-card-content_video",
                                            children: e.title
                                        }), Object(D.jsx)("div", {
                                            className: "video-card-date",
                                            children: e.date
                                        })]
                                    })
                                })
                            })
                        })
                    })
                }),
                $t = function() {
                    var e = Object(a.useState)(!1),
                        t = Object(d.a)(e, 2),
                        s = t[0],
                        c = t[1],
                        i = Ye(void 0, {
                            skip: 0 == s
                        }),
                        n = i.data,
                        r = i.isLoading,
                        o = Xt(),
                        l = [];
                    !r && n && n.results.forEach((function(e) {
                        return l.length < 3 && l.push(Object(D.jsx)(Zt, {
                            title: e.title,
                            date: e.time,
                            slug: e.slug,
                            breakpoint: o,
                            image: e.meta.thumbnail,
                            duration: e.duration,
                            meta: e.meta,
                            eventCategory: "homepage_videos_card_" + "".concat(l.length + 1)
                        }))
                    }));
                    try {
                        if ("undefined" !== typeof window && window.videosRes.results && window.videosRes.results.length > 0) window.videosRes.results.forEach((function(e) {
                            return l.length < 3 && l.push(Object(D.jsx)(Zt, {
                                title: e.title,
                                date: e.time,
                                slug: e.slug,
                                breakpoint: o,
                                image: e.meta.thumbnail,
                                duration: e.duration,
                                meta: e.meta,
                                eventCategory: "homepage_videos_card_" + "".concat(l.length + 1)
                            }))
                        }))
                    } catch (g) {
                        S(g)
                    }
                    return Object(a.useEffect)((function() {
                        "undefined" !== typeof window && window.videosResErr && 0 == window.videosResErr.length && c(!0)
                    }), []), Object(D.jsx)(D.Fragment, {
                        children: Object(D.jsxs)("div", {
                            className: "gfg_home_page_video_outer_height",
                            children: [Object(D.jsx)(zt.a, {
                                className: "gfg_view_all",
                                children: Object(D.jsx)(Mt.a, {
                                    span: "xl" !== o ? "sm" === o || "xs" === o ? 23 : 22 : 20,
                                    offset: "xl" !== o ? "sm" === o || "xs" === o ? 0 : 1 : 2,
                                    children: Object(D.jsx)(Mt.a, {
                                        offset: 1,
                                        children: Object(D.jsx)(Mt.a, {
                                            span: 23,
                                            children: Object(D.jsxs)(zt.a, {
                                                justify: "space-between",
                                                children: [Object(D.jsx)(Mt.a, {
                                                    className: "video-card-heading",
                                                    children: "Videos"
                                                }), Object(D.jsx)(Wt.b, {
                                                    children: Object(D.jsx)(Ht.a, {
                                                        className: "view_all_button",
                                                        shape: "round",
                                                        href: h.GFG_SITE_URL + "videos/",
                                                        children: "View All"
                                                    })
                                                })]
                                            })
                                        })
                                    })
                                })
                            }), Object(D.jsx)(zt.a, {
                                children: Object(D.jsx)(Mt.a, {
                                    span: "xl" !== o ? "sm" === o || "xs" === o ? 23 : 22 : 20,
                                    offset: "xl" !== o ? "sm" === o || "xs" === o ? 0 : 1 : 2,
                                    children: Object(D.jsx)(Mt.a, {
                                        offset: 1,
                                        children: Object(D.jsx)(Mt.a, {
                                            span: 23,
                                            className: "gfg_home_page_video_outer_height_hover",
                                            children: Object(D.jsx)(zt.a, {
                                                className: "xl" !== o && "lg" !== o ? "scroll_gfg gfg_home_sroll" : "",
                                                wrap: "xl" === o || "lg" === o || "md" === o,
                                                gutter: "xl" === o || "lg" === o ? 60 : 30,
                                                children: l.length ? l : Object(D.jsxs)(D.Fragment, {
                                                    children: [Object(D.jsxs)(Mt.a, {
                                                        span: "xl" !== o && "lg" !== o && "md" !== o && "sm" !== o ? 20 : 8,
                                                        children: [Object(D.jsx)(Jt.a.Avatar, {
                                                            className: "gfg_home_page_search_image_skeleton",
                                                            shape: "square",
                                                            active: !0
                                                        }), Object(D.jsx)(Jt.a, {
                                                            active: !0
                                                        })]
                                                    }), Object(D.jsxs)(Mt.a, {
                                                        span: "xl" !== o && "lg" !== o && "md" !== o && "sm" !== o ? 20 : 8,
                                                        children: [Object(D.jsx)(Jt.a.Avatar, {
                                                            className: "gfg_home_page_search_image_skeleton",
                                                            shape: "square",
                                                            active: !0
                                                        }), Object(D.jsx)(Jt.a, {
                                                            active: !0
                                                        })]
                                                    }), Object(D.jsxs)(Mt.a, {
                                                        span: "xl" !== o && "lg" !== o && "md" !== o && "sm" !== o ? 20 : 8,
                                                        children: [Object(D.jsx)(Jt.a.Avatar, {
                                                            className: "gfg_home_page_search_image_skeleton",
                                                            shape: "square",
                                                            active: !0
                                                        }), Object(D.jsx)(Jt.a, {
                                                            active: !0
                                                        })]
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                })
                            })]
                        })
                    })
                },
                es = (Vt.a.Meta, function(e) {
                    var t;
                    return Object(D.jsx)(D.Fragment, {
                        children: Object(D.jsx)(Mt.a, {
                            style: {
                                paddingBottom: "20px"
                            },
                            className: "xl" !== e.breakpoint && "lg" !== e.breakpoint && "md" !== e.breakpoint ? "gfg_home_course gfg_home_page_course_card_distance" : "ant-col-8 gfg_home_page_course_card_distance",
                            children: Object(D.jsx)("a", {
                                href: "".concat(h.GFG_PRACTICE_URL, "courses/").concat(e.data.course_slug, "?utm_source=geeksforgeeks&utm_medium=newui_home&utm_campaign=courses"),
                                children: Object(D.jsx)(Vt.a, {
                                    className: "gfg_home_page_course_card",
                                    hoverable: !0,
                                    cover: Object(D.jsxs)("div", {
                                        className: "gfg_home_page_course_card_cover",
                                        children: [Object(D.jsx)("img", {
                                            className: "gfg_home_page_course_card_image",
                                            src: e.data.small_banner
                                        }), Object(D.jsxs)(Mt.a, {
                                            className: "gfg_home_page_course_card_divider",
                                            style: {
                                                paddingLeft: "0px",
                                                paddingRight: "0px"
                                            },
                                            children: [Object(D.jsxs)(zt.a, {
                                                justify: "space-between",
                                                style: {
                                                    padding: "10px"
                                                },
                                                children: [Object(D.jsx)(Mt.a, {
                                                    span: 14,
                                                    children: e.data.visit_count && Object(D.jsx)(zt.a, {
                                                        children: Object(D.jsxs)("div", {
                                                            style: {
                                                                display: "flex",
                                                                alignItems: "center"
                                                            },
                                                            children: [Object(D.jsx)("img", {
                                                                className: "gfg_home_page_course_visit_count_image",
                                                                src: "https://media.geeksforgeeks.org/img-practice/Group7622-1669294650.svg"
                                                            }), Object(D.jsxs)("span", {
                                                                style: {
                                                                    font: "normal normal 12px normal"
                                                                },
                                                                className: "gfg_home_page_course_visit_color font-primary",
                                                                children: [e.data.visit_count, " interested Geeks"]
                                                            })]
                                                        })
                                                    })
                                                }), Object(D.jsx)(Mt.a, {
                                                    children: e.data.rating.avg_rating && Object(D.jsx)(zt.a, {
                                                        children: Object(D.jsxs)("div", {
                                                            className: "gfg_home_page_course_card_rating",
                                                            children: [Object(D.jsx)("img", {
                                                                className: "gfg_home_page_course_rating_image",
                                                                src: "https://media.geeksforgeeks.org/img-practice/Path4648-1641537423.svg"
                                                            }), Object(D.jsx)("span", {
                                                                style: {
                                                                    paddingLeft: "4px"
                                                                },
                                                                className: "gfg_home_page_course_rating_val",
                                                                children: e.data.rating.avg_rating
                                                            })]
                                                        })
                                                    })
                                                })]
                                            }), Object(D.jsx)(zt.a, {
                                                style: {
                                                    minHeight: "55px",
                                                    maxHeight: "55px",
                                                    overflow: "hidden"
                                                },
                                                children: Object(D.jsx)("span", {
                                                    className: "video-card-content video-card-content_course",
                                                    children: e.data.course_name
                                                })
                                            }), Object(D.jsx)(zt.a, {
                                                justify: "space-between",
                                                style: {
                                                    padding: "18px 10px 10px 10px"
                                                },
                                                children: Object(D.jsx)("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center"
                                                    },
                                                    children: (null === e || void 0 === e || null === (t = e.data) || void 0 === t ? void 0 : t.level) && Object(D.jsxs)(c.a.Fragment, {
                                                        children: [Object(D.jsx)("img", {
                                                            className: "gfg_home_page_course_level_image",
                                                            src: "https://media.geeksforgeeks.org/img-practice/Levels-1669283463.svg"
                                                        }), Object(D.jsx)("span", {
                                                            style: {
                                                                paddingLeft: "8px"
                                                            },
                                                            className: "gfg_home_page_course_level_color",
                                                            children: e.data.level
                                                        })]
                                                    })
                                                })
                                            })]
                                        })]
                                    })
                                })
                            })
                        })
                    })
                }),
                ts = function() {
                    var e = Object(a.useState)(!1),
                        t = Object(d.a)(e, 2),
                        s = t[0],
                        c = t[1],
                        i = Ke(void 0, {
                            skip: 0 == s
                        }),
                        n = i.data,
                        r = i.isLoading,
                        o = [],
                        l = [],
                        g = Xt();
                    try {
                        if (!r && n) {
                            for (var j in n) {
                                var u, m;
                                l.push.apply(l, null === (u = n[j]) || void 0 === u || null === (m = u.course_list) || void 0 === m ? void 0 : m.slice(0, 2))
                            }
                            for (var p in n) {
                                var b, x;
                                l.push.apply(l, null === (b = n[p]) || void 0 === b || null === (x = b.course_list) || void 0 === x ? void 0 : x.slice(2))
                            }
                            for (var f = 0; f < 6; f++) o.push(Object(D.jsx)(es, {
                                breakpoint: g,
                                data: l[f],
                                eventCategory: "homepage_courses_card" + (f + 1)
                            }))
                        }
                    } catch (C) {
                        S(C)
                    }
                    try {
                        if ("undefined" !== typeof window && window.coursesRes && window.coursesRes.length > 0) {
                            var O = window.coursesRes;
                            for (var _ in O) {
                                var v, N;
                                l.push.apply(l, null === (v = O[_]) || void 0 === v || null === (N = v.course_list) || void 0 === N ? void 0 : N.slice(0, 2))
                            }
                            for (var w in O) {
                                var k, y;
                                l.push.apply(l, null === (k = O[w]) || void 0 === k || null === (y = k.course_list) || void 0 === y ? void 0 : y.slice(2))
                            }
                            for (var L = 0; L < 6; L++) o.push(Object(D.jsx)(es, {
                                breakpoint: g,
                                data: l[L],
                                eventCategory: "homepage_courses_card" + (L + 1)
                            }))
                        }
                    } catch (C) {
                        S(C)
                    }
                    return Object(a.useEffect)((function() {
                        "undefined" !== typeof window && window.coursesRes && 0 == window.coursesRes.length && c(!0)
                    }), []), Object(D.jsx)(D.Fragment, {
                        children: Object(D.jsx)(zt.a, {
                            className: "gfg_home_page_course_outer_height gfg_view_all",
                            children: Object(D.jsx)(Mt.a, {
                                span: "xl" !== g ? "sm" === g || "xs" === g ? 23 : 22 : 20,
                                offset: "xl" !== g ? "sm" === g || "xs" === g ? 0 : 1 : 2,
                                children: Object(D.jsxs)(Mt.a, {
                                    offset: 1,
                                    children: [Object(D.jsx)(Mt.a, {
                                        span: 23,
                                        children: Object(D.jsxs)(zt.a, {
                                            justify: "space-between",
                                            children: [Object(D.jsx)(Mt.a, {
                                                className: "video-card-heading",
                                                children: "Courses"
                                            }), Object(D.jsx)(Wt.b, {
                                                children: Object(D.jsx)(Ht.a, {
                                                    href: "".concat(h.GFG_PRACTICE_URL, "courses?utm_source=geeksforgeeks&utm_medium=newui_home&utm_campaign=courses"),
                                                    className: "view_all_button view_all_button_courses",
                                                    shape: "round",
                                                    children: "View All"
                                                })
                                            })]
                                        })
                                    }), Object(D.jsx)(Mt.a, {
                                        span: 23,
                                        children: Object(D.jsx)(zt.a, {
                                            className: "xl" !== g && "lg" !== g && "md" !== g ? "scroll_gfg gfg_home_sroll" : "",
                                            wrap: "xl" === g || "lg" === g || "md" === g,
                                            gutter: "xl" === g || "lg" === g ? 60 : 30,
                                            children: o.length ? o : Object(D.jsxs)(D.Fragment, {
                                                children: [Object(D.jsxs)(Mt.a, {
                                                    className: "gfg_home_page_course_card_skeleton_padding",
                                                    span: "xl" !== g && "lg" !== g && "md" !== g && "sm" !== g ? 20 : 8,
                                                    children: [Object(D.jsx)(Jt.a.Avatar, {
                                                        className: "gfg_home_page_search_image_skeleton",
                                                        shape: "square",
                                                        active: !0
                                                    }), Object(D.jsx)(Jt.a, {
                                                        active: !0
                                                    })]
                                                }), Object(D.jsxs)(Mt.a, {
                                                    span: "xl" !== g && "lg" !== g && "md" !== g && "sm" !== g ? 20 : 8,
                                                    children: [Object(D.jsx)(Jt.a.Avatar, {
                                                        className: "gfg_home_page_search_image_skeleton",
                                                        shape: "square",
                                                        active: !0
                                                    }), Object(D.jsx)(Jt.a, {
                                                        active: !0
                                                    })]
                                                }), Object(D.jsxs)(Mt.a, {
                                                    span: "xl" !== g && "lg" !== g && "md" !== g && "sm" !== g ? 20 : 8,
                                                    children: [Object(D.jsx)(Jt.a.Avatar, {
                                                        className: "gfg_home_page_search_image_skeleton",
                                                        shape: "square",
                                                        active: !0
                                                    }), Object(D.jsx)(Jt.a, {
                                                        active: !0
                                                    })]
                                                }), Object(D.jsxs)(Mt.a, {
                                                    span: "xl" !== g && "lg" !== g && "md" !== g && "sm" !== g ? 20 : 8,
                                                    children: [Object(D.jsx)(Jt.a.Avatar, {
                                                        className: "gfg_home_page_search_image_skeleton",
                                                        shape: "square",
                                                        active: !0
                                                    }), Object(D.jsx)(Jt.a, {
                                                        active: !0
                                                    })]
                                                }), Object(D.jsxs)(Mt.a, {
                                                    span: "xl" !== g && "lg" !== g && "md" !== g && "sm" !== g ? 20 : 8,
                                                    children: [Object(D.jsx)(Jt.a.Avatar, {
                                                        className: "gfg_home_page_search_image_skeleton",
                                                        shape: "square",
                                                        active: !0
                                                    }), Object(D.jsx)(Jt.a, {
                                                        active: !0
                                                    })]
                                                }), Object(D.jsxs)(Mt.a, {
                                                    span: "xl" !== g && "lg" !== g && "md" !== g && "sm" !== g ? 20 : 8,
                                                    children: [Object(D.jsx)(Jt.a.Avatar, {
                                                        className: "gfg_home_page_search_image_skeleton",
                                                        shape: "square",
                                                        active: !0
                                                    }), Object(D.jsx)(Jt.a, {
                                                        active: !0
                                                    })]
                                                })]
                                            })
                                        })
                                    })]
                                })
                            })
                        })
                    })
                },
                ss = s(448),
                as = function(e) {
                    var t = Xe(),
                        s = t.data,
                        c = t.isLoading,
                        i = t.isError,
                        n = Object(a.useState)(59),
                        r = Object(d.a)(n, 2),
                        o = r[0],
                        l = r[1],
                        g = Object(a.useState)(59),
                        j = Object(d.a)(g, 2),
                        u = j[0],
                        m = j[1],
                        h = Object(a.useState)(23),
                        p = Object(d.a)(h, 2),
                        b = p[0],
                        x = p[1],
                        O = Object(a.useState)(!1),
                        _ = Object(d.a)(O, 2),
                        v = _[0],
                        N = _[1];
                    if (Object(a.useEffect)((function() {
                            var e = setTimeout((function() {
                                0 === b && 0 === u && 0 === o || (0 === u && 0 === o && x(b - 1), 0 === o && m(u - 1 < 0 ? 59 : u - 1), l(o - 1 < 0 ? 59 : o - 1))
                            }), 1e3);
                            return function() {
                                return clearInterval(e)
                            }
                        })), !c && !i && s && s.id) {
                        if (!v) {
                            if (s.xdate) try {
                                var w = s.end_date.split(/[- :]/),
                                    k = new Date(w[0], w[1] - 1, w[2], w[3], w[4], w[5]),
                                    y = new Date(k);
                                l(new Date(y).getSeconds() - new Date(s.xdate).getSeconds()), m(new Date(y).getMinutes() - new Date(s.xdate).getMinutes()), x(new Date(y).getHours() - new Date(s.xdate).getHours())
                            } catch (G) {
                                l(NaN), m(NaN), x(NaN)
                            } else try {
                                var S = s.end_date.split(/[- :]/),
                                    L = new Date(S[0], S[1] - 1, S[2], S[3], S[4], S[5]),
                                    C = new Date(L);
                                l(new Date(C).getSeconds() - (new Date).getSeconds()), m(new Date(C).getMinutes() - (new Date).getMinutes()), x(new Date(C).getHours() - (new Date).getHours())
                            } catch (G) {
                                l(NaN), m(NaN), x(NaN)
                            }
                            N(!0)
                        }
                        return Object(D.jsx)(D.Fragment, {
                            children: Object(D.jsx)("a", {
                                href: s.problem_url + "/?utm_source=geeksforgeeks&utm_medium=newui_home&utm_campaign=potd",
                                children: Object(D.jsx)(Mt.a, {
                                    span: "xl" !== e.breakpoint ? 22 : 20,
                                    offset: "xl" !== e.breakpoint ? 1 : 2,
                                    className: "gfg_home_page_potd_min_height",
                                    children: Object(D.jsx)(Mt.a, {
                                        offset: "xl" !== e.breakpoint ? 0 : 1,
                                        children: Object(D.jsx)(zt.a, {
                                            className: "gfg_home_page_potd_height_spacing ".concat("xs" === e.breakpoint || "sm" === e.breakpoint ? "gfg_home_page_potd_height_spacing_small" : ""),
                                            children: Object(D.jsx)(Mt.a, {
                                                className: "gfg_home_page_potd",
                                                span: "xl" !== e.breakpoint ? 24 : 23,
                                                children: Object(D.jsxs)(zt.a, {
                                                    className: "gfg_home_page_potd_outer gfg_home_page_potd_outer_border",
                                                    justify: "space-between",
                                                    wrap: "xs" === e.breakpoint || "sm" === e.breakpoint,
                                                    children: [Object(D.jsx)(Mt.a, {
                                                        className: "first_column ".concat("xs" === e.breakpoint || "sm" === e.breakpoint ? "first_column_small" : ""),
                                                        span: "xs" === e.breakpoint || "sm" === e.breakpoint ? 24 : 3,
                                                        children: Object(D.jsx)(zt.a, {
                                                            justify: "xs" === e.breakpoint || "sm" === e.breakpoint ? "center" : "",
                                                            children: Object(D.jsx)(ss.a, {
                                                                className: "gfg_home_page_potd_image ".concat("xs" === e.breakpoint || "sm" === e.breakpoint ? "gfg_home_page_potd_image_small" : ""),
                                                                preview: !1,
                                                                src: "".concat(f, "img-practice/Asset1-1641910145.svg")
                                                            })
                                                        })
                                                    }), Object(D.jsx)(Mt.a, {
                                                        className: "second_column ".concat("xs" === e.breakpoint || "sm" === e.breakpoint ? "second_column_small" : ""),
                                                        span: "xs" === e.breakpoint || "sm" === e.breakpoint ? 24 : 14,
                                                        children: Object(D.jsxs)(Mt.a, {
                                                            className: "xs" === e.breakpoint || "sm" === e.breakpoint ? "card_spacing_small" : "card_spacing",
                                                            children: [Object(D.jsx)(zt.a, {
                                                                className: "gfg_home_page_potd_banner_title",
                                                                children: "Problem of the day"
                                                            }), Object(D.jsx)(zt.a, {
                                                                className: "problem_name",
                                                                children: s.problem_name
                                                            }), Object(D.jsx)(zt.a, {
                                                                className: "problem_description",
                                                                children: "Solve one problem based on Data Structures and Algorithms every day and win exciting prizes."
                                                            })]
                                                        })
                                                    }), Object(D.jsxs)(Mt.a, {
                                                        className: "third_column ".concat("xs" === e.breakpoint || "sm" === e.breakpoint ? "third_column_small" : ""),
                                                        span: "xs" === e.breakpoint || "sm" === e.breakpoint ? 24 : 7,
                                                        children: [Object(D.jsxs)(zt.a, {
                                                            justify: "space-around",
                                                            style: {
                                                                alignContent: "flex-end"
                                                            },
                                                            children: [Object(D.jsx)(Mt.a, {
                                                                className: "gfg_home_page_potd_time",
                                                                children: 1 === b.toString().length ? "0" + b : b
                                                            }), Object(D.jsx)(Mt.a, {
                                                                className: "gfg_home_page_potd_time",
                                                                children: 1 === u.toString().length ? "0" + u : u
                                                            }), Object(D.jsx)(Mt.a, {
                                                                className: "gfg_home_page_potd_time",
                                                                children: 1 === o.toString().length ? "0" + o : o
                                                            })]
                                                        }), Object(D.jsxs)(zt.a, {
                                                            justify: "space-around",
                                                            children: [Object(D.jsx)(Mt.a, {
                                                                className: "gfg_home_page_potd_time_unit",
                                                                children: "\xa0\xa0\xa0Hours"
                                                            }), Object(D.jsx)(Mt.a, {
                                                                className: "gfg_home_page_potd_time_unit",
                                                                children: "\xa0\xa0\xa0Minutes"
                                                            }), Object(D.jsx)(Mt.a, {
                                                                className: "gfg_home_page_potd_time_unit",
                                                                children: "\xa0\xa0Seconds"
                                                            })]
                                                        }), Object(D.jsx)(zt.a, {
                                                            justify: "space-around",
                                                            children: Object(D.jsx)(Ht.a, {
                                                                className: "gfg_home_page_potd_button ".concat("xs" === e.breakpoint || "sm" === e.breakpoint ? "gfg_home_page_potd_button_small" : ""),
                                                                style: {
                                                                    paddingTop: "10px",
                                                                    paddingBottom: "20px",
                                                                    fontSize: "14px",
                                                                    borderRadius: "4px"
                                                                },
                                                                onClick: function(e) {
                                                                    return Yt(e, "clickopen", "homepagepotd")
                                                                },
                                                                children: "Solve Now"
                                                            })
                                                        })]
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    }
                    return Object(D.jsx)(D.Fragment, {
                        children: Object(D.jsx)(Mt.a, {
                            span: "xl" !== e.breakpoint ? 22 : 20,
                            offset: "xl" !== e.breakpoint ? 1 : 2,
                            className: "gfg_home_page_potd_min_height",
                            children: Object(D.jsx)(Mt.a, {
                                offset: "xl" !== e.breakpoint ? 0 : 1,
                                children: Object(D.jsx)(zt.a, {
                                    className: "gfg_home_page_potd_height_spacing ".concat("xs" === e.breakpoint || "sm" === e.breakpoint ? "gfg_home_page_potd_height_spacing_small" : ""),
                                    children: Object(D.jsx)(Mt.a, {
                                        className: "gfg_home_page_potd",
                                        span: "xl" !== e.breakpoint ? 24 : 23,
                                        children: Object(D.jsxs)(zt.a, {
                                            className: "gfg_home_page_potd_outer gfg_home_page_potd_outer_border",
                                            justify: "space-between",
                                            wrap: "xs" === e.breakpoint || "sm" === e.breakpoint,
                                            children: [Object(D.jsx)(Mt.a, {
                                                className: "".concat("xs" === e.breakpoint || "sm" === e.breakpoint ? "first_column_small" : ""),
                                                span: "xs" === e.breakpoint || "sm" === e.breakpoint ? 24 : 3,
                                                children: Object(D.jsx)(Jt.a.Avatar, {
                                                    className: "gfg_home_page_potd_outer first_column_skeleton",
                                                    active: !0,
                                                    shape: "square"
                                                })
                                            }), Object(D.jsx)(Mt.a, {
                                                style: {
                                                    paddingTop: "2%"
                                                },
                                                className: "".concat("xs" === e.breakpoint || "sm" === e.breakpoint ? "second_column_small" : ""),
                                                span: "xs" === e.breakpoint || "sm" === e.breakpoint ? 24 : 14,
                                                children: Object(D.jsx)(Jt.a, {
                                                    style: {
                                                        padding: "4%"
                                                    },
                                                    active: !0
                                                })
                                            }), Object(D.jsx)(Mt.a, {
                                                className: "".concat("xs" === e.breakpoint || "sm" === e.breakpoint ? "third_column_small" : ""),
                                                span: "xs" === e.breakpoint || "sm" === e.breakpoint ? 24 : 7,
                                                children: Object(D.jsx)(Jt.a.Avatar, {
                                                    className: "gfg_home_page_potd_outer third_column_skeleton",
                                                    active: !0,
                                                    shape: "square"
                                                })
                                            })]
                                        })
                                    })
                                })
                            })
                        })
                    })
                },
                cs = function(e) {
                    var t = e.data,
                        s = e.breakpoint;
                    return Object(D.jsx)(Mt.a, {
                        className: "gfg_home_page_single_gblog_container gfg_gBlog_fade",
                        span: "xl" !== s ? "sm" === s || "xs" === s ? 23 : 22 : 20,
                        offset: "xl" !== s ? "sm" === s || "xs" === s ? 0 : 1 : 2,
                        children: Object(D.jsx)(Mt.a, {
                            offset: 1,
                            children: Object(D.jsx)(Mt.a, {
                                span: "sm" === s || "xs" === s ? 24 : 23,
                                children: Object(D.jsx)("a", {
                                    href: t.post_link + (function() {
                                        if (!t.post_link) return "";
                                        var e = document.createElement("a");
                                        e.href = t.post_link;
                                        var s = e.origin + "/";
                                        return e.remove(), s
                                    }() === h.GFG_SITE_URL ? "" : "?utm_source=geeksforgeeks&utm_medium=newui_home&utm_campaign=gblog"),
                                    children: Object(D.jsxs)(zt.a, {
                                        className: "gfg_home_page_carousel_border",
                                        wrap: !0,
                                        children: [Object(D.jsx)(Mt.a, {
                                            className: "gfg_home_page_carousel_height",
                                            span: "xl" !== s && "lg" !== s && "md" !== s && "sm" !== s ? 24 : 14,
                                            children: Object(D.jsx)("img", {
                                                className: "gfg_home_page_carousel_image",
                                                style: {
                                                    objectFit: "cover"
                                                },
                                                src: t.post_image
                                            })
                                        }), Object(D.jsx)(Mt.a, {
                                            className: "gfg_home_page_carousel_height",
                                            span: "xl" !== s && "lg" !== s && "md" !== s && "sm" !== s ? 24 : 10,
                                            style: {
                                                overflow: "hidden",
                                                padding: "8px"
                                            },
                                            children: Object(D.jsxs)(Mt.a, {
                                                className: "gfg_home_page_carousel_card_size",
                                                style: {
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis"
                                                },
                                                children: [1 == t.is_gblog && Object(D.jsx)(Mt.a, {
                                                    style: {
                                                        color: "#2f8d46",
                                                        font: "normal normal normal 13px/24px sofia-pro,sans-serif",
                                                        letterSpacing: "0px"
                                                    },
                                                    children: Object(D.jsx)("a", {
                                                        className: "gfg_home_page_gBlogHeading",
                                                        href: "https://www.geeksforgeeks.org/category/guestblogs/",
                                                        children: "GBlog"
                                                    })
                                                }), Object(D.jsx)(Mt.a, {
                                                    className: "gfg_home_page_carousel_title",
                                                    children: t.post_title
                                                }), Object(D.jsx)(Mt.a, {
                                                    style: {
                                                        paddingBottom: "5px"
                                                    },
                                                    children: Object(D.jsx)("div", {
                                                        className: "gfg_home_page_carousel_description",
                                                        children: t.post_excerpt
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                })
                            })
                        })
                    })
                },
                is = function(e) {
                    var t = e.data,
                        s = e.breakpoint,
                        c = Object(a.useState)(),
                        i = Object(d.a)(c, 2),
                        n = i[0],
                        r = i[1];
                    Object(a.useEffect)((function() {
                        o(0)
                    }), []);
                    var o = function e(s) {
                        s %= t.length;
                        var a = document.getElementsByClassName("gfg_home_page_single_gblog_container"),
                            c = document.getElementsByClassName("gfg_home_page_gblog_dot");
                        if (c && (null === t || void 0 === t ? void 0 : t.length) > 1) {
                            for (var i = 0; i < a.length; i++) a[i].style.display = "none", c[i].classList.remove("gfg_home_page_gblog_active");
                            c[s].className += " gfg_home_page_gblog_active"
                        }
                        a[s].style.display = "block";
                        var n = setTimeout(e, 5e3, s + 1);
                        r(n)
                    };
                    return Object(D.jsxs)("div", {
                        className: "gfg_home_page_gblog_collection_container",
                        children: [Object(D.jsx)(zt.a, {
                            className: "gfg_home_page_carousel_spacing",
                            children: t && t.map((function(e) {
                                return Object(D.jsx)(cs, {
                                    data: e,
                                    breakpoint: s
                                })
                            }))
                        }), (null === t || void 0 === t ? void 0 : t.length) > 1 ? Object(D.jsx)("div", {
                            className: "gfg_home_page_gblog_dots_container",
                            children: Object(ve.a)(Array(t.length).keys()).map((function(e) {
                                return Object(D.jsx)("span", {
                                    className: "gfg_home_page_gblog_dot",
                                    onClick: function() {
                                        return t = e, clearTimeout(n), void o(t);
                                        var t
                                    }
                                })
                            }))
                        }) : null]
                    })
                },
                ns = function(e) {
                    var t, s, c, i, n, r, o, l, g, j, u, m = e.breakpoint,
                        h = Object(a.useState)(!1),
                        p = Object(d.a)(h, 2),
                        b = p[0],
                        x = p[1],
                        f = Ze(void 0, {
                            skip: 0 == b
                        }),
                        O = f.data,
                        _ = f.isLoading,
                        v = f.isError,
                        N = [],
                        w = window.heroSectionCardCnt;
                    return (null === (t = window.gBlogRes) || void 0 === t || null === (s = t.response) || void 0 === s ? void 0 : s.length) > 0 && (null === (c = window.gBlogRes) || void 0 === c || null === (i = c.response) || void 0 === i ? void 0 : i.length) < w ? w = null === (n = window.gBlogRes) || void 0 === n || null === (r = n.response) || void 0 === r ? void 0 : r.length : (null === O || void 0 === O || null === (o = O.response) || void 0 === o ? void 0 : o.length) < w && (w = null === O || void 0 === O || null === (l = O.response) || void 0 === l ? void 0 : l.length), (null === O || void 0 === O || null === (g = O.response) || void 0 === g ? void 0 : g.length) > 0 && !_ && !v && N.push(Object(D.jsx)(is, {
                        data: O.response.slice(0, w),
                        breakpoint: m
                    })), "undefined" !== typeof window && (null === (j = window.gBlogRes) || void 0 === j || null === (u = j.response) || void 0 === u ? void 0 : u.length) > 0 && N.push(Object(D.jsx)(is, {
                        data: window.gBlogRes.response.slice(0, w),
                        breakpoint: m
                    })), Object(a.useEffect)((function() {
                        var e, t;
                        "undefined" === typeof window || null !== (e = window.gBlogRes) && void 0 !== e && null !== (t = e.response) && void 0 !== t && t.length || x(!0)
                    })), w <= 0 ? null : Object(D.jsx)(D.Fragment, {
                        children: N.length > 0 ? N : Object(D.jsx)(zt.a, {
                            children: Object(D.jsx)(Mt.a, {
                                span: "xl" !== m ? 22 : 20,
                                offset: "xl" !== m ? 1 : 2,
                                style: {
                                    marginTop: "50px"
                                },
                                children: Object(D.jsx)(Mt.a, {
                                    offset: 1,
                                    children: Object(D.jsx)(Mt.a, {
                                        className: "gfg_home_page_carousel_skeleton_spaces",
                                        span: 23,
                                        children: Object(D.jsxs)(zt.a, {
                                            style: {
                                                border: "2px solid #EEEEEE",
                                                borderRadius: "13px"
                                            },
                                            wrap: !0,
                                            children: [Object(D.jsx)(Mt.a, {
                                                className: "gfg_home_page_carousel_height",
                                                span: "xl" !== m && "lg" !== m && "md" !== m && "sm" !== m ? 24 : 14,
                                                children: Object(D.jsx)(Jt.a.Avatar, {
                                                    className: "gfg_home_page_carousel_height ant-col-24 gfg_home_page_carousel_skeleton",
                                                    active: !0,
                                                    shape: "square",
                                                    style: {
                                                        minWidth: "100%",
                                                        minHeight: "100%",
                                                        display: "block !important"
                                                    }
                                                })
                                            }), Object(D.jsx)(Mt.a, {
                                                className: "gfg_home_page_carousel_height",
                                                span: "xl" !== m && "lg" !== m && "md" !== m && "sm" !== m ? 24 : 10,
                                                style: {
                                                    overflow: "hidden",
                                                    padding: "5px"
                                                },
                                                children: Object(D.jsx)(Jt.a, {
                                                    active: !0
                                                })
                                            })]
                                        })
                                    })
                                })
                            })
                        })
                    })
                },
                rs = function() {
                    var e, t, s = document.getElementsByClassName("gfg_home_topic_cards").item(0),
                        a = !1;
                    s && (s.addEventListener("mousedown", (function(c) {
                        a = !0, s.classList.add("active"), e = c.pageX - s.offsetLeft, t = s.scrollLeft
                    })), s.addEventListener("mouseleave", (function() {
                        a = !1, s.classList.remove("active")
                    })), s.addEventListener("mouseup", (function() {
                        a = !1, s.classList.remove("active")
                    })), s.addEventListener("mousemove", (function(c) {
                        if (a) {
                            c.preventDefault();
                            var i = 3 * (c.pageX - s.offsetLeft - e);
                            s.scrollLeft = t - i
                        }
                    })))
                },
                os = ["checkForNavigationDisability", "scrollAhead", "scrollBack"],
                ls = [
                    [{
                        color: "blue",
                        topicName: "Array",
                        url: "auth-dashboard-uploads/dsa1.png",
                        slug: "array-data-structure/"
                    }, {
                        color: "blue",
                        topicName: "Analysis of Algo",
                        url: "auth-dashboard-uploads/dsa2.png",
                        slug: "analysis-of-algorithms-set-1-asymptotic-analysis/"
                    }, {
                        color: "blue",
                        topicName: "Linked List",
                        url: "auth-dashboard-uploads/dsa3.png",
                        slug: "data-structures/linked-list/"
                    }, {
                        color: "blue",
                        topicName: "Searching Algo",
                        url: "auth-dashboard-uploads/dsa4.png",
                        slug: "searching-algorithms/"
                    }, {
                        color: "blue",
                        topicName: "Stack",
                        url: "auth-dashboard-uploads/dsa1.png",
                        slug: "stack-data-structure/"
                    }, {
                        color: "blue",
                        topicName: "Sorting Algo",
                        url: "auth-dashboard-uploads/dsa2.png",
                        slug: "sorting-algorithms/"
                    }, {
                        color: "blue",
                        topicName: "Queue",
                        url: "auth-dashboard-uploads/dsa3.png",
                        slug: "queue-data-structure/"
                    }, {
                        color: "blue",
                        topicName: "Graph Algo",
                        url: "auth-dashboard-uploads/dsa4.png",
                        slug: "graph-data-structure-and-algorithms/"
                    }]
                ],
                ds = function(e) {
                    return Object(D.jsx)(D.Fragment, {
                        children: Object(D.jsx)(Mt.a, {
                            className: "xl" === e.breakpoint || "lg" === e.breakpoint || "md" === e.breakpoint ? "gfg_home_topic_xl homepage_single_card" : "gfg_home_topic_scroll homepage_single_card",
                            style: {
                                marginRight: "1%"
                            },
                            children: Object(D.jsx)(Vt.a, {
                                className: "gfg_home_page_topic_card",
                                hoverable: !0,
                                cover: Object(D.jsx)("div", {
                                    className: "gfg_home_page_topic_card_cover",
                                    children: Object(D.jsx)("a", {
                                        href: "".concat(h.GFG_SITE_URL).concat(e.slug),
                                        children: Object(D.jsxs)(zt.a, {
                                            className: "gfg_home_topic_".concat(e.color),
                                            style: {
                                                height: "180px",
                                                borderRadius: "12px",
                                                width: "100%"
                                            },
                                            children: [Object(D.jsx)(Mt.a, {
                                                span: 16,
                                                style: {
                                                    zIndex: "2"
                                                },
                                                children: Object(D.jsx)(zt.a, {
                                                    className: "font-primary",
                                                    style: {
                                                        color: "#FFFFFF",
                                                        fontSize: "25px",
                                                        paddingLeft: "4%",
                                                        paddingTop: "4%"
                                                    },
                                                    children: e.topic
                                                })
                                            }), Object(D.jsx)(zt.a, {
                                                style: {
                                                    position: "absolute",
                                                    height: "100%",
                                                    width: "inherit"
                                                },
                                                children: Object(D.jsx)(Mt.a, {
                                                    span: 24,
                                                    className: "gfg_home_page_cards_image",
                                                    children: Object(D.jsx)(ss.a, {
                                                        preview: !1,
                                                        style: {
                                                            height: "180px",
                                                            width: "-webkit-fill-available !important",
                                                            borderRadius: "15px"
                                                        },
                                                        src: f + e.url
                                                    })
                                                })
                                            })]
                                        })
                                    })
                                })
                            })
                        })
                    })
                },
                gs = function(e) {
                    var t = e.checkForNavigationDisability,
                        s = e.scrollAhead,
                        c = e.scrollBack,
                        i = Object(Y.a)(e, os),
                        n = Object(a.useRef)(),
                        r = {
                            xl: "8",
                            lg: "8",
                            md: "8",
                            sm: "8",
                            xs: "8"
                        },
                        o = Xt(),
                        l = [];
                    return ls[0].forEach((function(e) {
                        return l.length < r[o] && l.push(Object(D.jsx)(ds, {
                            color: e.color,
                            topic: e.topicName,
                            url: e.url,
                            breakpoint: o,
                            slug: e.slug
                        }))
                    })), Object(a.useEffect)((function() {
                        rs()
                    }), []), Object(a.useEffect)((function() {
                        return n.current && (n.current.addEventListener("scroll", (function() {
                                return t(0, "Topic", n)
                            })), t(0, "Topic", n)),
                            function() {
                                n.current.removeEventListener("scroll")
                            }
                    }), []), Object(D.jsx)(D.Fragment, {
                        children: Object(D.jsx)(zt.a, {
                            className: "gfg_view_all",
                            children: Object(D.jsx)(Mt.a, {
                                className: "gfg_home_topic_outer_height ".concat(i.flag ? "gfg_home_topic_outer_height_algo" : ""),
                                span: "xl" !== o ? "sm" === o || "xs" === o ? 23 : 22 : 20,
                                offset: "xl" !== o ? "sm" === o || "xs" === o ? 0 : 1 : 2,
                                children: Object(D.jsxs)(Mt.a, {
                                    offset: 1,
                                    children: [Object(D.jsx)(Mt.a, {
                                        span: 23,
                                        children: Object(D.jsxs)(zt.a, {
                                            justify: "space-between",
                                            children: [Object(D.jsx)(Mt.a, {
                                                className: "video-card-heading",
                                                children: "DSA"
                                            }), Object(D.jsx)(Wt.b, {
                                                children: Object(D.jsx)(Ht.a, {
                                                    className: "view_all_button",
                                                    shape: "round",
                                                    href: "".concat(h.GFG_SITE_URL, "learn-data-structures-and-algorithms-dsa-tutorial/"),
                                                    children: "View All"
                                                })
                                            })]
                                        })
                                    }), Object(D.jsx)(Mt.a, {
                                        span: "sm" === o || "xs" === o ? 24 : 23,
                                        children: Object(D.jsx)(zt.a, {
                                            ref: n,
                                            wrap: !1,
                                            gutter: 10,
                                            className: "scroll_gfg gfg_home_sroll gfg_home_topic_cards gfg_home_topic_right_margin",
                                            children: l
                                        })
                                    }), Object(D.jsxs)(Mt.a, {
                                        className: "homePageCardScroller",
                                        span: "sm" === o || "xs" === o ? 24 : 23,
                                        style: {
                                            display: "flex",
                                            justifyContent: "center"
                                        },
                                        children: [Object(D.jsx)("div", {
                                            title: "Scroll Back",
                                            className: "homeCardScrollBtn leftScrollTopicCard",
                                            onClick: function() {
                                                return c(n, "Topic")
                                            },
                                            children: Object(D.jsx)("i", {
                                                className: "gfg-icon slide-left"
                                            })
                                        }), Object(D.jsx)("div", {
                                            title: "Scroll Ahead",
                                            className: "homeCardScrollBtn rightScrollTopicCard",
                                            onClick: function() {
                                                return s(n, "Topic")
                                            },
                                            children: Object(D.jsx)("i", {
                                                className: "gfg-icon slide-right"
                                            })
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                },
                js = s(452),
                us = s(449),
                ms = s(238),
                hs = s.n(ms),
                ps = s(242),
                bs = ps.a.TabPane,
                xs = function(e) {
                    var t = e.tags.map((function(e) {
                            return Object(D.jsx)(Mt.a, {
                                className: "gfg_home_page_article_tag",
                                children: Object(D.jsx)("a", {
                                    href: e.tag_link,
                                    children: Object(D.jsx)(Mt.a, {
                                        style: {
                                            paddingLeft: "0px",
                                            paddingRight: "0px"
                                        },
                                        children: e.tag_name
                                    })
                                })
                            })
                        })),
                        s = e.breakpoint;
                    return Object(D.jsx)(Mt.a, {
                        style: {
                            marginBottom: "20px"
                        },
                        children: Object(D.jsx)(Vt.a, {
                            className: "gfg_home_page_article_background",
                            children: Object(D.jsxs)("a", {
                                href: e.link,
                                children: [Object(D.jsx)(hs.a, {
                                    title: Object(D.jsx)("div", {
                                        className: "gfg_home_page_article_meta",
                                        children: Object(D.jsx)("div", {
                                            style: {
                                                color: "var(--color-black)"
                                            },
                                            children: e.title
                                        })
                                    }),
                                    description: Object(D.jsxs)("div", {
                                        className: "gfg_home_page_article_description",
                                        children: ["xs" === s ? e.snippet.substring(0, 100) + "..." : e.snippet, Object(D.jsx)("a", {
                                            style: {
                                                color: "var(--color-gfg)"
                                            },
                                            href: e.link,
                                            children: "Read more"
                                        })]
                                    })
                                }), Object(D.jsxs)(zt.a, {
                                    style: {
                                        marginTop: "25px"
                                    },
                                    gutter: 16,
                                    children: [Object(D.jsx)(Mt.a, {
                                        className: "gfg-icon gfg-icon_tag-primary"
                                    }), t]
                                })]
                            })
                        })
                    })
                },
                fs = function(e) {
                    var t, s = Object(a.useRef)("all+category"),
                        c = Object(a.useState)(s.current),
                        i = Object(d.a)(c, 2),
                        n = i[0],
                        r = i[1],
                        o = Object(a.useState)(1),
                        l = Object(d.a)(o, 2),
                        g = l[0],
                        j = l[1],
                        u = Object(a.useRef)(null),
                        m = n.split("+")[0],
                        p = et({
                            chip: m,
                            page: g
                        }),
                        b = p.data,
                        x = p.isLoading,
                        f = p.isError,
                        O = p.isFetching,
                        _ = at().data;
                    _ && (t = _[0].page_count * _[0].page_size + _[0].remaining_post);
                    var v = e.breakpoint,
                        N = [];
                    return x || !b || f || (N = b.map((function(e) {
                        return Object(D.jsx)(xs, {
                            title: e.article_title,
                            snippet: e.article_excrpt,
                            tags: e.article_tags,
                            link: e.article_link,
                            breakpoint: v
                        })
                    }))), Object(D.jsx)(D.Fragment, {
                        children: Object(D.jsx)(Mt.a, {
                            ref: u,
                            span: "xl" !== v ? "sm" === v || "xs" === v ? 23 : 22 : 20,
                            offset: "xl" !== v ? "sm" === v || "xs" === v ? 0 : 1 : 2,
                            children: Object(D.jsxs)(Mt.a, {
                                offset: 1,
                                className: "gfg_article_bottom gfg_home_page_article_header gfg_view_all",
                                children: [Object(D.jsx)(Mt.a, {
                                    span: 23,
                                    children: Object(D.jsxs)(zt.a, {
                                        justify: "space-between",
                                        children: [Object(D.jsx)(Mt.a, {
                                            className: "video-card-heading",
                                            children: "Articles"
                                        }), Object(D.jsx)(Wt.b, {
                                            children: "all+category" !== n && !O && Object(D.jsx)(Ht.a, {
                                                className: "view_all_button",
                                                shape: "round",
                                                href: "all" !== n.split("+")[0] ? h.GFG_SITE_URL + n.split("+")[1] + "/" + n.split("+")[0] + "?utm_source=geeksforgeeks&utm_medium=newui_home&utm_campaign=articles" : h.GFG_SITE_URL + "page/2?utm_source=geeksforgeeks&utm_medium=newui_home&utm_campaign=articles",
                                                children: "View All"
                                            })
                                        })]
                                    })
                                }), Object(D.jsx)(Mt.a, {
                                    className: "gfg_home_page_article_width",
                                    children: Object(D.jsx)(ps.a, {
                                        tabBarStyle: {
                                            border: "none"
                                        },
                                        onTabClick: function(e) {
                                            s.current = "all+undefined" == e ? "all+category" : e, r(s.current), j(1)
                                        },
                                        children: _ && _.map((function(e) {
                                            return Object(D.jsx)(bs, {
                                                tab: Object(D.jsx)(Mt.a, {
                                                    className: "gfg_homepage_article_scroll",
                                                    children: Object(D.jsx)(js.a, {
                                                        className: "gfg_home_page_article_tab_pane_tag",
                                                        children: e.name
                                                    })
                                                }),
                                                children: x || f || O ? Object(D.jsxs)(D.Fragment, {
                                                    children: [Object(D.jsx)(Jt.a, {}), Object(D.jsx)(Jt.a, {}), Object(D.jsx)(Jt.a, {}), Object(D.jsx)(Jt.a, {})]
                                                }) : N
                                            }, e.slug + "+" + e.type)
                                        }))
                                    })
                                }), !x && !O && "all+category" == n && t && Object(D.jsx)(us.a, {
                                    className: "gfg_home_page_articles_pagination",
                                    style: {
                                        textAlign: "center",
                                        paddingBottom: "30px",
                                        paddingTop: "12px"
                                    },
                                    defaultCurrent: g,
                                    onChange: function(e) {
                                        j(e), u.current.scrollIntoView()
                                    },
                                    total: t,
                                    defaultPageSize: 15,
                                    itemRender: function(e, t, s) {
                                        return "prev" === t ? Object(D.jsx)("a", {
                                            children: Object(D.jsx)("span", {
                                                children: "< Prev"
                                            })
                                        }) : "next" === t ? Object(D.jsx)("a", {
                                            children: Object(D.jsx)("span", {
                                                children: "Next >"
                                            })
                                        }) : s
                                    },
                                    responsive: !0
                                })]
                            })
                        })
                    })
                },
                Os = s(450),
                _s = s(120),
                vs = s(241),
                Ns = s.n(vs),
                ws = s(192),
                ks = s(94),
                ys = function(e, t) {
                    return e.map((function(e) {
                        return Object(D.jsx)(Ss, {
                            breakpoint: t,
                            title: e.name,
                            snippet: e.excerpt,
                            thumbnail: e.image_url,
                            link: e.link,
                            date: null !== e && void 0 !== e && e.last_updated ? e.last_updated.substr(0, 10) : ""
                        })
                    }))
                },
                Ss = function(e) {
                    var t = e.breakpoint;
                    return Object(D.jsxs)("div", {
                        style: {
                            marginLeft: "20px",
                            paddingBottom: "20px"
                        },
                        children: [Object(D.jsxs)(zt.a, {
                            gutter: 40,
                            wrap: !1,
                            children: [Object(D.jsxs)(Mt.a, {
                                span: "xs" === t ? 6 : 4,
                                style: {
                                    marginTop: "auto",
                                    marginBottom: "auto",
                                    textAlign: "center"
                                },
                                children: [" ", Object(D.jsx)(ss.a, {
                                    preview: !1,
                                    style: {
                                        maxWidth: "60px",
                                        maxHeight: "120px"
                                    },
                                    src: e.thumbnail ? e.thumbnail : "".concat(f, "img-practice/gfg_200X200.png")
                                })]
                            }), Object(D.jsx)(Mt.a, {
                                span: "xs" === t ? 18 : 20,
                                style: {
                                    marginLeft: "-30px"
                                },
                                children: Object(D.jsxs)(zt.a, {
                                    style: {
                                        flexDirection: "column"
                                    },
                                    children: [Object(D.jsx)(zt.a, {
                                        children: Object(D.jsx)("a", {
                                            className: "font-primary",
                                            style: {
                                                color: "#2f8d46",
                                                font: "normal normal bold 16px normal"
                                            },
                                            href: e.link,
                                            children: e.title
                                        })
                                    }), Object(D.jsx)(zt.a, {
                                        className: "gfg_home_page_search_modal_article_meta",
                                        children: Object(D.jsxs)(Mt.a, {
                                            className: "font-primary",
                                            span: 23,
                                            style: {
                                                fontSize: "14px"
                                            },
                                            children: [e.date ? "".concat(e.date, "...") : null, " ", e.snippet, " ..."]
                                        })
                                    })]
                                })
                            })]
                        }), Object(D.jsx)(zt.a, {
                            style: {
                                paddingTop: "15px"
                            },
                            children: Object(D.jsx)(Mt.a, {
                                span: 23,
                                style: {
                                    borderBottom: "1px solid #cccccc"
                                }
                            })
                        })]
                    })
                },
                Ls = c.a.memo((function(e) {
                    var t, s, c, i = $e(),
                        n = Object(d.a)(i, 2),
                        r = n[0],
                        o = n[1],
                        l = o.isFetching,
                        g = o.isError,
                        j = o.data,
                        u = Object(a.useState)(),
                        m = Object(d.a)(u, 2),
                        h = m[0],
                        p = m[1],
                        b = Object(a.useState)(),
                        x = Object(d.a)(b, 2),
                        f = x[0],
                        O = x[1],
                        _ = Object(a.useState)(0),
                        v = Object(d.a)(_, 2),
                        N = v[0],
                        w = v[1],
                        k = Object(a.useState)("relevance"),
                        y = Object(d.a)(k, 2),
                        S = y[0],
                        L = y[1],
                        C = Object(a.useState)(1),
                        G = Object(d.a)(C, 2),
                        T = G[0],
                        R = G[1];
                    Object(a.useEffect)((function() {
                        E()
                    }), [e.value, S, T]);
                    var E = function() {
                            w(1);
                            var t = {};
                            t.page = T, t.sort = S, t.type = "premium", t.query = e.value, ("relevance" == S && !h || "relevance" == S && h && 1 != T) && r(t), ("date" == S && !f || "date" == S && f && 1 != T) && r(t)
                        },
                        I = function(e) {
                            R(e)
                        };
                    return Object(a.useEffect)((function() {
                        "relevance" == S && 1 == T ? p(j) : "date" == S && 1 == T && O(j)
                    }), [j]), Object(D.jsxs)(Os.a, {
                        style: {
                            height: "662px"
                        },
                        bodyStyle: {
                            overflowY: "scroll",
                            overflowX: "hidden"
                        },
                        className: "gfg_home_page_modal",
                        closable: !1,
                        width: "1009px",
                        title: Object(D.jsxs)(Mt.a, {
                            id: "gfg_home_page_modal",
                            children: [Object(D.jsxs)(zt.a, {
                                gutter: 10,
                                justify: "center",
                                style: {
                                    background: "#eff8f3",
                                    marginBottom: "20px"
                                },
                                children: [Object(D.jsx)(Mt.a, {
                                    className: "font-primary",
                                    style: {
                                        paddingTop: "9px",
                                        fontSize: "18px",
                                        color: "#273239",
                                        fontWeight: "bold"
                                    },
                                    children: "Improve your Coding Skills with Practice"
                                }), Object(D.jsx)(Mt.a, {
                                    children: Object(D.jsx)(Ht.a, {
                                        className: "gfg_home_page_search_results_button",
                                        children: Object(D.jsx)("a", {
                                            href: "https://practice.geeksforgeeks.org/explore?page=1&sortBy=submissions&utm_source=geeksforgeeks&utm_medium=search-bar&utm_campaign=practice-search",
                                            children: "Try It!"
                                        })
                                    })
                                })]
                            }), Object(D.jsxs)(zt.a, {
                                className: "gfg_home_page_modal_meta-wrapper",
                                wrap: !1,
                                children: [1 == T && h && h.response ? Object(D.jsx)(Mt.a, {
                                    children: Object(D.jsxs)("div", {
                                        className: "gfg_home_page_modal_search-info",
                                        children: ["About ", h.response.totalResults ? "".concat(Number(null === h || void 0 === h || null === (t = h.response) || void 0 === t ? void 0 : t.totalResults).toLocaleString("en-US"), " ") : "0", " results (", h.response.searchTime ? h.response.searchTime : "", " seconds)"]
                                    })
                                }) : 1 == T && f && f.response ? Object(D.jsx)(Mt.a, {
                                    children: Object(D.jsxs)("div", {
                                        className: "gfg_home_page_modal_search-info",
                                        children: ["About ", f.response.totalResults ? "".concat(Number(null === f || void 0 === f || null === (s = f.response) || void 0 === s ? void 0 : s.totalResults).toLocaleString("en-US"), " ") : "0", " results (", f.response.searchTime ? f.response.searchTime : "", " seconds)"]
                                    })
                                }) : !l && !g && j && j.response ? Object(D.jsx)(Mt.a, {
                                    children: Object(D.jsxs)("div", {
                                        className: "gfg_home_page_modal_search-info",
                                        children: ["About ", j.response.totalResults ? "".concat(Number(null === j || void 0 === j || null === (c = j.response) || void 0 === c ? void 0 : c.totalResults).toLocaleString("en-US"), " ") : "0", " results (", j.response.searchTime ? j.response.searchTime : "", " seconds)"]
                                    })
                                }) : "", l ? "" : Object(D.jsx)(Mt.a, {
                                    children: Object(D.jsxs)(zt.a, {
                                        className: "gfg_home_page_modal_sort-wrapper",
                                        gutter: 10,
                                        wrap: !0,
                                        children: [Object(D.jsx)(Mt.a, {
                                            className: "gfg_home_page_modal_sort-label",
                                            children: "Sort By:"
                                        }), Object(D.jsx)(Mt.a, {
                                            children: Object(D.jsxs)(_s.a, {
                                                style: {
                                                    width: "100px"
                                                },
                                                defaultValue: S,
                                                size: "small",
                                                onChange: function(e) {
                                                    L(e), R(1)
                                                },
                                                children: [Object(D.jsx)(ws.Option, {
                                                    value: "date",
                                                    children: "Date"
                                                }), Object(D.jsx)(ws.Option, {
                                                    value: "relevance",
                                                    children: "Relevance"
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })]
                        }),
                        visible: e.visible,
                        onCancel: function() {
                            w(0), e.cancel(), R(1)
                        },
                        footer: !1,
                        children: [1 == T && "relevance" == S && h && h.response.items ? ys(h.response.items, e.breakpoint) : 1 == T && "date" == S && f && f.response.items ? ys(f.response.items, e.breakpoint) : l || g ? Object(D.jsx)(ks.a, {
                            style: {
                                fontSize: 24,
                                marginLeft: "50%",
                                marginTop: "30%"
                            },
                            spin: !0
                        }) : j && j.response ? j.response.items && 1 === N ? ys(j.response.items, e.breakpoint) : Object(D.jsx)("div", {
                            className: "custom_no_results_color",
                            children: "No Results Found"
                        }) : Object(D.jsx)(ks.a, {
                            style: {
                                fontSize: 24,
                                marginLeft: "50%",
                                marginTop: "30%"
                            },
                            spin: !0
                        }), h && h.response && h.response.items && h.response.totalResults && parseInt(h.response.totalResults) > 10 && 1 == T && "relevance" == S ? Object(D.jsx)(us.a, {
                            style: {
                                paddingLeft: "20px",
                                textAlign: "center"
                            },
                            defaultCurrent: 1,
                            onChange: I,
                            total: parseInt(h.response.totalResults),
                            showSizeChanger: !1,
                            responsive: !0
                        }) : "", f && f.response && f.response.items && f.response.totalResults && parseInt(f.response.totalResults) > 10 && 1 == T && "date" == S ? Object(D.jsx)(us.a, {
                            style: {
                                paddingLeft: "20px",
                                textAlign: "center"
                            },
                            defaultCurrent: 1,
                            onChange: I,
                            total: parseInt(f.response.totalResults),
                            showSizeChanger: !1,
                            responsive: !0
                        }) : "", l || g || j && j.response && j.response.totalResults && parseInt(j.response.totalResults) < 10 ? "" : j && j.response.items && 1 === N && h && 1 != T ? Object(D.jsx)(us.a, {
                            style: {
                                paddingLeft: "20px",
                                textAlign: "center"
                            },
                            defaultCurrent: T,
                            onChange: I,
                            total: parseInt(j.response.totalResults),
                            showSizeChanger: !1,
                            responsive: !0
                        }) : ""]
                    })
                })),
                Cs = function(e) {
                    var t = e.breakpoint,
                        s = Object(a.useState)(0),
                        c = Object(d.a)(s, 2),
                        i = c[0],
                        n = c[1],
                        r = Object(a.useState)(0),
                        o = Object(d.a)(r, 2),
                        l = o[0],
                        g = o[1],
                        j = Object(a.useState)(""),
                        u = Object(d.a)(j, 2),
                        m = u[0],
                        h = u[1],
                        p = Object(a.useState)(!1),
                        b = Object(d.a)(p, 2),
                        x = b[0],
                        f = b[1],
                        O = Object(a.useState)(""),
                        _ = Object(d.a)(O, 2),
                        v = _[0],
                        N = _[1],
                        w = Object(a.useState)(""),
                        k = Object(d.a)(w, 2),
                        y = k[0],
                        S = k[1],
                        L = ["Data Structures and Algorithms", "Complete Interview Preparation", "Must Do SDE Sheet Practice", "Learn Python, Java, C++", "GeeksforGeeks Courses"];
                    return Object(a.useEffect)((function() {
                        var e = setTimeout((function() {
                            g(l + 1), l > L[i].length && (g(0), n((i + 1) % L.length), h("")), h(L[i].substr(0, l))
                        }), 100);
                        return function() {
                            return clearTimeout(e)
                        }
                    })), Object(D.jsx)(D.Fragment, {
                        children: Object(D.jsxs)(Mt.a, {
                            children: [Object(D.jsx)(zt.a, {
                                justify: "center",
                                className: "gfg_home_page_search_heading",
                                children: "Hello, What Do You Want To Learn?"
                            }), Object(D.jsx)(zt.a, {
                                justify: "center",
                                className: "gfg_home_page_search_input",
                                children: Object(D.jsx)(Ns.a, {
                                    placeholder: m,
                                    allowClear: !0,
                                    defaultValue: v,
                                    enterButton: Object(D.jsx)(Ht.a, {
                                        children: "Search"
                                    }),
                                    className: "gfg_home_page_search gfg_home_page_search_search_bar_width",
                                    size: "large",
                                    value: v,
                                    style: {
                                        height: "10px"
                                    },
                                    onSearch: function(e) {
                                        f(!0), S(e.trim()), y.length || N("")
                                    },
                                    onChange: function(e) {
                                        return N(e.target.value)
                                    }
                                })
                            }), y.length ? Object(D.jsx)(Ls, {
                                breakpoint: t,
                                cancel: function() {
                                    f(!1), N(""), S("")
                                },
                                visible: x,
                                value: encodeURIComponent(y)
                            }) : ""]
                        })
                    })
                },
                Gs = {
                    xl: "50",
                    lg: "30"
                },
                Ts = [{
                    post_title: "Explore Practice Problems",
                    excerpt: "Solve DSA Problems. Filter based on topic tags and company tags. Get curated problem lists by GFG experts.",
                    url: "".concat(h.GFG_PRACTICE_URL, "explore?page=1&curated[]=1&sortBy=submissions&curated_names[]=SDE%20Sheet/")
                }, {
                    post_title: "Interview Preparation",
                    excerpt: "An interview-centric course designed to prepare you for the role of SDE for both product and service based companies. A placement preparation pack built with years of expertise. Prepare C++, Java, DSA, CS Theory concepts and much more!",
                    url: "".concat(h.GFG_PRACTICE_URL, "courses/complete-interview-preparation/")
                }],
                Rs = [{
                    post_title: "Interview Preparation",
                    excerpt: "An interview-centric course designed to prepare you for the role of SDE for both product and service based companies. A placement preparation pack built with years of expertise. Prepare C++, Java, DSA, CS Theory concepts and much more!",
                    url: "".concat(h.GFG_PRACTICE_URL, "courses/complete-interview-preparation/")
                }, {
                    post_title: "DSA Self Paced",
                    excerpt: " Most popular course on DSA trusted by over 75,000 students! Built with years of experience by industry experts and gives you a complete package",
                    url: "".concat(h.GFG_PRACTICE_URL, "courses/dsa-self-paced/")
                }, {
                    post_title: "DSA in Python - Self Paced",
                    excerpt: " Most popular course on DSA trusted by over 75,000 students! Built with years of experience by industry experts and gives you a complete package",
                    url: "".concat(h.GFG_PRACTICE_URL, "courses/Data-Structures-With-Python/")
                }],
                Es = ["".concat(f, "auth-dashboard-uploads/read.png"), "".concat(f, "auth-dashboard-uploads/Homepage-Article-2.png"), "".concat(f, "auth-dashboard-uploads/Homepage-Article-3.png")],
                Is = function(e) {
                    var t = Object(a.useState)(!1),
                        s = Object(d.a)(t, 2),
                        c = s[0],
                        i = s[1],
                        n = JSON.parse(localStorage.getItem("loginData")),
                        r = localStorage.getItem("previous"),
                        o = localStorage.getItem("prev_post_title");
                    Object(a.useEffect)((function() {
                        n && 1 == n.isLoggedIn && i(!0)
                    }));
                    var l = ct({
                            prevPostId: r,
                            prevPostTitle: o
                        }),
                        g = l.data,
                        j = l.isLoading,
                        u = it(void 0, {
                            skip: 0 == c
                        }),
                        m = u.data,
                        h = u.isLoading,
                        p = Object(a.useState)(null),
                        b = Object(d.a)(p, 2),
                        x = b[0],
                        O = b[1],
                        _ = Object(a.useState)(null),
                        v = Object(d.a)(_, 2),
                        N = v[0],
                        w = v[1],
                        k = e.breakpoint;
                    Es[0] = "".concat(f, "xs" == k ? "auth-dashboard-uploads/image-%2822%29.png" : "auth-dashboard-uploads/read.png"), Object(a.useEffect)((function() {
                        var e = Rs[Math.floor(Math.random() * Rs.length)];
                        O(e)
                    }), []), Object(a.useEffect)((function() {
                        if (m && m.courses.length > 0) {
                            var e = Object(ve.a)(m.courses);
                            e.sort(S), w(e[0])
                        }
                    }), [m]);
                    var y = function(e) {
                            var t;
                            return "recommendCourse" == e.type && (t = e.post.short_description.replace(/(<([^>]+)>)/gi, "")), Object(D.jsx)(D.Fragment, {
                                children: Object(D.jsxs)(zt.a, {
                                    className: "search_bar_card_body",
                                    children: [Object(D.jsx)(Mt.a, {
                                        span: 24,
                                        className: "gfg_home_page_search_card_title_button_gap",
                                        children: Object(D.jsx)("div", {
                                            className: "video-card-content gfg_home_page_search_card_title",
                                            children: "recommendCourse" == e.type ? e.post.course_name : e.post.post_title
                                        })
                                    }), Object(D.jsx)(Mt.a, {
                                        className: "gfg_home_page_search_card_description",
                                        span: 24,
                                        children: "recommendCourse" == e.type ? t.slice(0, 100) : e.post.excerpt.slice(0, 100) + "..."
                                    })]
                                })
                            })
                        },
                        S = function(e, t) {
                            return +t.visit_count - +e.visit_count
                        },
                        L = function() {
                            try {
                                var e = [];
                                return null != N && e.push(Object(D.jsx)(y, {
                                    type: "recommendCourse",
                                    post: N
                                })), e[0]
                            } catch (s) {
                                var t = [];
                                return t.push(Object(D.jsx)(y, {
                                    type: "localStorage",
                                    post: Ts[1]
                                })), t[0]
                            }
                        },
                        C = function(e) {
                            return Object(D.jsx)(D.Fragment, {
                                children: Object(D.jsx)(Mt.a, {
                                    style: {
                                        paddingBottom: "10px"
                                    },
                                    className: "xl" !== k && "lg" !== k && "md" !== k && "sm" !== k ? "ant-col-24" : "ant-col-8",
                                    children: Object(D.jsx)("a", {
                                        href: g && g.url,
                                        children: Object(D.jsx)(Vt.a, {
                                            className: "gfg_home_page_search_card gfg_home_page_article_background",
                                            hoverable: !0,
                                            style: {
                                                borderRadius: "10px",
                                                overflow: "hidden"
                                            },
                                            cover: Object(D.jsx)(D.Fragment, {
                                                children: Object(D.jsxs)(zt.a, {
                                                    className: "gfg_home_page_search_card_cover_wrap",
                                                    wrap: "xl" === k || "md" === k || "lg" === k || "sm" === k,
                                                    children: [Object(D.jsx)(Mt.a, {
                                                        span: "xl" !== k && "md" !== k && "lg" !== k && "sm" !== k ? 8 : 24,
                                                        children: Object(D.jsx)("img", {
                                                            className: "gfg_home_page_search_image",
                                                            src: e.image
                                                        })
                                                    }), j || !g ? Object(D.jsx)(D.Fragment, {
                                                        children: Object(D.jsx)(Mt.a, {
                                                            span: 24,
                                                            children: Object(D.jsx)(zt.a, {
                                                                wrap: !0,
                                                                className: "gfg_home_page_for_you_skeleton",
                                                                children: Object(D.jsx)(Jt.a, {
                                                                    active: !0
                                                                })
                                                            })
                                                        })
                                                    }) : Object(D.jsxs)(zt.a, {
                                                        className: "search_bar_card_body",
                                                        children: [Object(D.jsx)(Mt.a, {
                                                            span: 24,
                                                            className: "gfg_home_page_search_card_title_button_gap",
                                                            children: Object(D.jsx)("div", {
                                                                className: "video-card-content gfg_home_page_search_card_title",
                                                                children: Object(D.jsx)("div", {
                                                                    className: "gfg_home_page_search_card_title_anchor",
                                                                    children: g.post_title
                                                                })
                                                            })
                                                        }), Object(D.jsx)(Mt.a, {
                                                            className: "gfg_home_page_search_card_description",
                                                            span: 24,
                                                            children: g.excerpt + "..."
                                                        })]
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        },
                        G = function(e) {
                            return Object(D.jsx)(D.Fragment, {
                                children: Object(D.jsx)(Mt.a, {
                                    style: {
                                        paddingBottom: "10px"
                                    },
                                    className: "xl" !== k && "lg" !== k && "md" !== k && "sm" !== k ? "ant-col-24" : "ant-col-8",
                                    children: Object(D.jsx)("a", {
                                        href: e.post.url + "?utm_source=geeksforgeeks&utm_medium=newui_home&utm_campaign=first_section",
                                        children: Object(D.jsx)(Vt.a, {
                                            className: "gfg_home_page_search_card gfg_home_page_article_background",
                                            hoverable: !0,
                                            style: {
                                                borderRadius: "10px",
                                                overflow: "hidden"
                                            },
                                            cover: Object(D.jsx)(D.Fragment, {
                                                children: Object(D.jsxs)(zt.a, {
                                                    className: "gfg_home_page_search_card_cover_wrap",
                                                    wrap: "xl" === k || "md" === k || "lg" === k || "sm" === k,
                                                    children: [Object(D.jsx)(Mt.a, {
                                                        span: "xl" !== k && "md" !== k && "lg" !== k && "sm" !== k ? 8 : 24,
                                                        children: Object(D.jsx)("img", {
                                                            className: "gfg_home_page_search_image",
                                                            src: e.image
                                                        })
                                                    }), Object(D.jsxs)(zt.a, {
                                                        className: "search_bar_card_body",
                                                        children: [Object(D.jsx)(Mt.a, {
                                                            span: 24,
                                                            className: "gfg_home_page_search_card_title_button_gap",
                                                            children: Object(D.jsx)("div", {
                                                                className: "video-card-content gfg_home_page_search_card_title",
                                                                children: e.post.post_title
                                                            })
                                                        }), Object(D.jsx)(Mt.a, {
                                                            className: "gfg_home_page_search_card_description",
                                                            span: 24,
                                                            children: e.post.excerpt.slice(0, 100) + "..."
                                                        })]
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        },
                        T = function(e) {
                            return Object(D.jsx)(D.Fragment, {
                                children: Object(D.jsx)(Mt.a, {
                                    style: {
                                        paddingBottom: "10px"
                                    },
                                    className: "xl" !== k && "lg" !== k && "md" !== k && "sm" !== k ? "ant-col-24" : "ant-col-8",
                                    children: Object(D.jsx)("a", {
                                        href: N ? N.course_url + "?utm_source=geeksforgeeks&utm_medium=newui_home&utm_campaign=first_section" : x ? x.url + "?utm_source=geeksforgeeks&utm_medium=newui_home&utm_campaign=first_section" : "",
                                        children: Object(D.jsx)(Vt.a, {
                                            className: "gfg_home_page_search_card gfg_home_page_article_background",
                                            hoverable: !0,
                                            style: {
                                                borderRadius: "10px",
                                                overflow: "hidden"
                                            },
                                            cover: Object(D.jsx)(D.Fragment, {
                                                children: Object(D.jsxs)(zt.a, {
                                                    className: "gfg_home_page_search_card_cover_wrap",
                                                    wrap: "xl" === k || "md" === k || "lg" === k || "sm" === k,
                                                    children: [Object(D.jsx)(Mt.a, {
                                                        span: "xl" !== k && "md" !== k && "lg" !== k && "sm" !== k ? 8 : 24,
                                                        children: Object(D.jsx)("img", {
                                                            className: "gfg_home_page_search_image",
                                                            src: e.image
                                                        })
                                                    }), n && n.isLoggedIn ? h || !m ? Object(D.jsx)(D.Fragment, {
                                                        children: Object(D.jsx)(Mt.a, {
                                                            span: 24,
                                                            children: Object(D.jsx)(zt.a, {
                                                                wrap: !0,
                                                                className: "gfg_home_page_for_you_skeleton",
                                                                children: Object(D.jsx)(Jt.a, {
                                                                    active: !0
                                                                })
                                                            })
                                                        })
                                                    }) : m.courses.length > 0 ? L() : x ? Object(D.jsx)(y, {
                                                        type: "localStorage",
                                                        post: x
                                                    }) : Object(D.jsx)(D.Fragment, {
                                                        children: Object(D.jsx)(Mt.a, {
                                                            span: 24,
                                                            children: Object(D.jsx)(zt.a, {
                                                                wrap: !0,
                                                                className: "gfg_home_page_for_you_skeleton",
                                                                children: Object(D.jsx)(Jt.a, {
                                                                    active: !0
                                                                })
                                                            })
                                                        })
                                                    }) : x ? Object(D.jsx)(y, {
                                                        type: "localStorage",
                                                        post: x
                                                    }) : Object(D.jsx)(D.Fragment, {
                                                        children: Object(D.jsx)(Mt.a, {
                                                            span: 24,
                                                            children: Object(D.jsx)(zt.a, {
                                                                wrap: !0,
                                                                className: "gfg_home_page_for_you_skeleton",
                                                                children: Object(D.jsx)(Jt.a, {
                                                                    active: !0
                                                                })
                                                            })
                                                        })
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        };
                    return Object(a.useEffect)((function() {}), [g]), Object(D.jsxs)(D.Fragment, {
                        children: [Object(D.jsx)(zt.a, {
                            className: "gfg_home_page_search_background_outer_small",
                            children: Object(D.jsx)(Mt.a, {
                                className: "gfg_home_page_search_card_outer gfg_home_page_search_background_outer_small",
                                span: "xl" !== k ? 22 : 20,
                                offset: "xl" !== k ? 1 : 2
                            })
                        }), Object(D.jsx)(zt.a, {
                            children: Object(D.jsx)(Mt.a, {
                                className: "gfg_home_page_search_card_gradient",
                                style: {
                                    backgroundColor: "#FFF"
                                },
                                span: "xl" !== k ? 22 : 20,
                                offset: "xl" !== k ? 1 : 2,
                                children: Object(D.jsx)(Mt.a, {
                                    className: "gfg_home_page_search_card_small_positioning",
                                    offset: "sm" === k || "xs" === k ? 0 : 1,
                                    children: Object(D.jsx)(Mt.a, {
                                        span: "sm" === k || "xs" === k ? 24 : 23,
                                        children: Object(D.jsxs)(zt.a, {
                                            wrap: !0,
                                            gutter: Gs[k] ? Gs[k] : 22,
                                            children: [Object(D.jsx)(C, {
                                                type: "readCard",
                                                image: Es[0]
                                            }), Object(D.jsx)(G, {
                                                type: "practiceCard",
                                                post: Ts[0],
                                                image: "".concat(f, "xs" != k ? "auth-dashboard-uploads/practice.png" : "auth-dashboard-uploads/image-%2821%29.png"),
                                                event_category: "homepage_foryou_card_two"
                                            }), Object(D.jsx)(T, {
                                                type: "learnCard",
                                                image: "".concat(f, "xs" != k ? "auth-dashboard-uploads/learn.png" : "auth-dashboard-uploads/image-%2823%29.png")
                                            })]
                                        })
                                    })
                                })
                            })
                        })]
                    })
                },
                Fs = function(e) {
                    return Object(D.jsx)(Mt.a, {
                        className: "gfg_home_page_chips_button_header",
                        children: Object(D.jsx)(Ht.a, {
                            className: "gfg_home_page_chips_button",
                            onClick: function(t) {
                                return Yt(t, "clickopen", "".concat(e.eventCategory))
                            },
                            children: Object(D.jsx)("a", {
                                href: e.url,
                                children: e.name
                            })
                        })
                    })
                },
                As = function(e) {
                    var t = Object(a.useState)(!1),
                        s = Object(d.a)(t, 2),
                        c = s[0],
                        i = s[1],
                        n = st(void 0, {
                            skip: 0 == c
                        }),
                        r = n.data,
                        o = [];
                    if (!n.isLoading && r)
                        for (var l = 0; l < r.length; l++) {
                            var g = r[l],
                                j = g.title.split("-"),
                                u = void 0;
                            u = j[0].length < 16 && j[1] && j[1].length > 0 ? j[0] + "-" + j[1] : j[0], o.push(Object(D.jsx)(Fs, {
                                name: u,
                                url: g.url,
                                eventCategory: "homepage_chips_card" + (l + 1)
                            }))
                        }
                    if ("undefined" !== typeof window && window.rightBarRes && window.rightBarRes.length > 0)
                        for (l = 0; l < window.rightBarRes.length; l++) {
                            var m = window.rightBarRes[l],
                                h = m.title.split("-"),
                                p = void 0;
                            p = h[0].length < 16 && h[1] && h[1].length > 0 ? h[0] + "-" + h[1] : h[0], o.push(Object(D.jsx)(Fs, {
                                name: p,
                                url: m.url,
                                eventCategory: "homepage_chips_card" + (l + 1)
                            }))
                        }
                    return Object(a.useEffect)((function() {
                        "undefined" !== typeof window && window.rightBarRes && 0 == window.rightBarRes.length && i(!0)
                    }), []), Object(D.jsx)(Mt.a, {
                        className: "gfg_home_page_chips",
                        children: 0 == o.length ? Object(D.jsx)(Mt.a, {
                            style: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            },
                            children: Object(D.jsxs)(Wt.b, {
                                children: [Object(D.jsx)(Jt.a.Button, {
                                    active: !0,
                                    size: "default",
                                    className: "gfg_home_page_chips_skeleton"
                                }), Object(D.jsx)(Jt.a.Button, {
                                    active: !0,
                                    size: "default",
                                    className: "gfg_home_page_chips_skeleton"
                                }), Object(D.jsx)(Jt.a.Button, {
                                    active: !0,
                                    size: "default",
                                    className: "gfg_home_page_chips_skeleton"
                                })]
                            })
                        }) : Object(D.jsx)(zt.a, {
                            className: "gfg_home_page_chips_header scroll_gfg gfg_home_sroll",
                            wrap: !1,
                            children: o
                        })
                    })
                },
                Ps = function() {
                    var e, t, s = document.getElementsByClassName("gfg_home_web_cards").item(0),
                        a = !1;
                    s && (s.addEventListener("mousedown", (function(c) {
                        a = !0, s.classList.add("active"), e = c.pageX - s.offsetLeft, t = s.scrollLeft
                    })), s.addEventListener("mouseleave", (function() {
                        a = !1, s.classList.remove("active")
                    })), s.addEventListener("mouseup", (function() {
                        a = !1, s.classList.remove("active")
                    })), s.addEventListener("mousemove", (function(c) {
                        if (a) {
                            c.preventDefault();
                            var i = 3 * (c.pageX - s.offsetLeft - e);
                            s.scrollLeft = t - i
                        }
                    })))
                },
                Us = ["checkForNavigationDisability", "scrollAhead", "scrollBack"],
                Ds = [
                    [{
                        color: "orange",
                        topicName: "HTML",
                        url: "auth-dashboard-uploads/dev1.png",
                        slug: "html/"
                    }, {
                        color: "orange",
                        topicName: "CSS",
                        url: "auth-dashboard-uploads/dev2.png",
                        slug: "css/"
                    }, {
                        color: "orange",
                        topicName: "Javascript",
                        url: "auth-dashboard-uploads/dev3.png",
                        slug: "javascript/"
                    }, {
                        color: "orange",
                        topicName: "PHP Tutorials",
                        url: "auth-dashboard-uploads/dev4.png",
                        slug: "php-tutorials/"
                    }, {
                        color: "orange",
                        topicName: "Bootstrap",
                        url: "auth-dashboard-uploads/dev1.png",
                        slug: "bootstrap/"
                    }, {
                        color: "orange",
                        topicName: "ReactJS Tutorials",
                        url: "auth-dashboard-uploads/dev2.png",
                        slug: "reactjs-tutorials/"
                    }, {
                        color: "orange",
                        topicName: "NodeJS ",
                        url: "auth-dashboard-uploads/dev3.png",
                        slug: "nodejs/"
                    }, {
                        color: "orange",
                        topicName: "AngularJS ",
                        url: "auth-dashboard-uploads/dev4.png",
                        slug: "angularjs/"
                    }]
                ],
                Bs = function(e) {
                    return Object(D.jsx)(D.Fragment, {
                        children: Object(D.jsx)(Mt.a, {
                            className: "xl" === e.breakpoint || "lg" === e.breakpoint || "md" === e.breakpoint ? "gfg_home_topic_xl homepage_single_card" : "gfg_home_topic_scroll homepage_single_card",
                            style: {
                                marginRight: "1%"
                            },
                            children: Object(D.jsx)(Vt.a, {
                                className: "gfg_home_page_topic_card",
                                hoverable: !0,
                                cover: Object(D.jsx)("div", {
                                    className: "gfg_home_page_topic_card_cover",
                                    children: Object(D.jsx)("a", {
                                        href: "".concat(h.GFG_SITE_URL).concat(e.slug),
                                        children: Object(D.jsxs)(Mt.a, {
                                            className: "gfg_home_topic_".concat(e.color),
                                            style: {
                                                height: "180px",
                                                borderRadius: "12px"
                                            },
                                            children: [Object(D.jsx)(Mt.a, {
                                                span: 12,
                                                style: {
                                                    zIndex: "2"
                                                },
                                                children: Object(D.jsx)(zt.a, {
                                                    className: "font-primary",
                                                    style: {
                                                        color: "#FFFFFF",
                                                        fontSize: "25px",
                                                        paddingLeft: "4%",
                                                        paddingTop: "4%"
                                                    },
                                                    children: e.topic
                                                })
                                            }), Object(D.jsx)(zt.a, {
                                                style: {
                                                    position: "absolute",
                                                    top: "0%",
                                                    right: "0%",
                                                    height: "100%",
                                                    width: "inherit"
                                                },
                                                children: Object(D.jsx)(Mt.a, {
                                                    span: 24,
                                                    className: "gfg_home_page_cards_image",
                                                    children: Object(D.jsx)(ss.a, {
                                                        preview: !1,
                                                        style: {
                                                            height: "180px",
                                                            borderRadius: "15px"
                                                        },
                                                        src: f + e.url
                                                    })
                                                })
                                            })]
                                        })
                                    })
                                })
                            })
                        })
                    })
                },
                qs = function(e) {
                    var t = e.checkForNavigationDisability,
                        s = e.scrollAhead,
                        c = e.scrollBack,
                        i = Object(Y.a)(e, Us),
                        n = Object(a.useRef)(),
                        r = {
                            xl: "8",
                            lg: "8",
                            md: "8",
                            sm: "8",
                            xs: "8"
                        },
                        o = Xt(),
                        l = [];
                    return Ds[0].forEach((function(e) {
                        return l.length < r[o] && l.push(Object(D.jsx)(Bs, {
                            color: e.color,
                            topic: e.topicName,
                            url: e.url,
                            breakpoint: o,
                            slug: e.slug
                        }))
                    })), Object(a.useEffect)((function() {
                        Ps()
                    }), []), Object(a.useEffect)((function() {
                        return n.current && (n.current.addEventListener("scroll", (function() {
                                return t(0, "WebDevelopment", n)
                            })), t(0, "WebDevelopment", n)),
                            function() {
                                n.current.removeEventListener("scroll")
                            }
                    }), []), Object(D.jsx)(D.Fragment, {
                        children: Object(D.jsx)(zt.a, {
                            className: "gfg_view_all",
                            children: Object(D.jsx)(Mt.a, {
                                className: "gfg_home_topic_outer_height ".concat(i.flag ? "gfg_home_topic_outer_height_algo" : ""),
                                span: "xl" !== o ? "sm" === o || "xs" === o ? 23 : 22 : 20,
                                offset: "xl" !== o ? "sm" === o || "xs" === o ? 0 : 1 : 2,
                                children: Object(D.jsxs)(Mt.a, {
                                    offset: 1,
                                    children: [Object(D.jsx)(Mt.a, {
                                        span: 23,
                                        children: Object(D.jsxs)(zt.a, {
                                            justify: "space-between",
                                            children: [Object(D.jsx)(Mt.a, {
                                                className: "video-card-heading",
                                                children: "Web Development"
                                            }), Object(D.jsx)(Wt.b, {
                                                children: Object(D.jsx)(Ht.a, {
                                                    className: "view_all_button",
                                                    shape: "round",
                                                    href: "".concat(h.GFG_SITE_URL, "web-development/"),
                                                    children: "View All"
                                                })
                                            })]
                                        })
                                    }), Object(D.jsx)(Mt.a, {
                                        span: "sm" === o || "xs" === o ? 24 : 23,
                                        children: Object(D.jsx)(zt.a, {
                                            ref: n,
                                            wrap: !1,
                                            gutter: 10,
                                            className: "scroll_gfg gfg_home_sroll gfg_home_web_cards gfg_home_topic_right_margin",
                                            children: l
                                        })
                                    }), Object(D.jsxs)(Mt.a, {
                                        className: "homePageCardScroller",
                                        span: "sm" === o || "xs" === o ? 24 : 23,
                                        style: {
                                            display: "flex",
                                            justifyContent: "center"
                                        },
                                        children: [Object(D.jsx)("div", {
                                            title: "Scroll Back",
                                            className: "homeCardScrollBtn leftScrollWebDevelopmentCard",
                                            onClick: function() {
                                                return c(n, "WebDevelopment")
                                            },
                                            children: Object(D.jsx)("i", {
                                                className: "gfg-icon slide-left"
                                            })
                                        }), Object(D.jsx)("div", {
                                            title: "Scroll Ahead",
                                            className: "homeCardScrollBtn rightScrollWebDevelopmentCard",
                                            onClick: function() {
                                                return s(n, "WebDevelopment")
                                            },
                                            children: Object(D.jsx)("i", {
                                                className: "gfg-icon slide-right"
                                            })
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                },
                Vs = function() {
                    var e, t, s = document.getElementsByClassName("gfg_home_language_cards").item(0),
                        a = !1;
                    s && (s.addEventListener("mousedown", (function(c) {
                        a = !0, s.classList.add("active"), e = c.pageX - s.offsetLeft, t = s.scrollLeft
                    })), s.addEventListener("mouseleave", (function() {
                        a = !1, s.classList.remove("active")
                    })), s.addEventListener("mouseup", (function() {
                        a = !1, s.classList.remove("active")
                    })), s.addEventListener("mousemove", (function(c) {
                        if (a) {
                            c.preventDefault();
                            var i = 3 * (c.pageX - s.offsetLeft - e);
                            s.scrollLeft = t - i
                        }
                    })))
                },
                Ms = ["checkForNavigationDisability", "scrollAhead", "scrollBack"],
                zs = [
                    [{
                        color: "green",
                        topicName: "Python",
                        url: "auth-dashboard-uploads/learn1.png",
                        slug: "python-programming-language/"
                    }, {
                        color: "green",
                        topicName: "Java",
                        url: "auth-dashboard-uploads/learn2.png",
                        slug: "java/"
                    }, {
                        color: "green",
                        topicName: "C++",
                        url: "auth-dashboard-uploads/learn3.png",
                        slug: "c-plus-plus/"
                    }, {
                        color: "green",
                        topicName: "C",
                        url: "auth-dashboard-uploads/learn4.png",
                        slug: "c-programming-language/"
                    }, {
                        color: "green",
                        topicName: "C#",
                        url: "auth-dashboard-uploads/learn1.png",
                        slug: "csharp-programming-language/"
                    }, {
                        color: "green",
                        topicName: "Golang",
                        url: "auth-dashboard-uploads/learn2.png",
                        slug: "golang/"
                    }, {
                        color: "green",
                        topicName: "SQL",
                        url: "auth-dashboard-uploads/learn3.png",
                        slug: "sql-tutorial/"
                    }, {
                        color: "green",
                        topicName: "Android",
                        url: "auth-dashboard-uploads/learn4.png",
                        slug: "android-tutorial/"
                    }]
                ],
                Ws = function(e) {
                    return Object(D.jsx)(D.Fragment, {
                        children: Object(D.jsx)(Mt.a, {
                            className: "xl" === e.breakpoint || "lg" === e.breakpoint || "md" === e.breakpoint ? "gfg_home_topic_xl homepage_single_card" : "gfg_home_topic_scroll homepage_single_card",
                            style: {
                                marginRight: "1%"
                            },
                            children: Object(D.jsx)(Vt.a, {
                                className: "gfg_home_page_topic_card",
                                hoverable: !0,
                                cover: Object(D.jsx)("div", {
                                    className: "gfg_home_page_topic_card_cover",
                                    children: Object(D.jsx)("a", {
                                        href: "".concat(h.GFG_SITE_URL).concat(e.slug),
                                        children: Object(D.jsxs)(Mt.a, {
                                            className: "gfg_home_topic_".concat(e.color),
                                            style: {
                                                height: "180px",
                                                borderRadius: "12px"
                                            },
                                            children: [Object(D.jsx)(Mt.a, {
                                                span: 16,
                                                style: {
                                                    zIndex: "2"
                                                },
                                                children: Object(D.jsx)(zt.a, {
                                                    className: "font-primary",
                                                    style: {
                                                        color: "#FFFFFF",
                                                        fontSize: "25px",
                                                        paddingLeft: "4%",
                                                        paddingTop: "4%"
                                                    },
                                                    children: e.topic
                                                })
                                            }), Object(D.jsx)(zt.a, {
                                                style: {
                                                    position: "absolute",
                                                    height: "100%",
                                                    top: "0%",
                                                    right: "0%",
                                                    width: "inherit"
                                                },
                                                children: Object(D.jsx)(Mt.a, {
                                                    span: 24,
                                                    className: "gfg_home_page_cards_image",
                                                    children: Object(D.jsx)(ss.a, {
                                                        preview: !1,
                                                        style: {
                                                            height: "180px",
                                                            borderRadius: "15px"
                                                        },
                                                        src: f + e.url
                                                    })
                                                })
                                            })]
                                        })
                                    })
                                })
                            })
                        })
                    })
                },
                Hs = function(e) {
                    var t = e.checkForNavigationDisability,
                        s = e.scrollAhead,
                        c = e.scrollBack,
                        i = (Object(Y.a)(e, Ms), Object(a.useRef)()),
                        n = {
                            xl: "8",
                            lg: "8",
                            md: "8",
                            sm: "8",
                            xs: "8"
                        },
                        r = Xt(),
                        o = [];
                    return zs[0].forEach((function(e) {
                        return o.length < n[r] && o.push(Object(D.jsx)(Ws, {
                            color: e.color,
                            topic: e.topicName,
                            url: e.url,
                            breakpoint: r,
                            slug: e.slug
                        }))
                    })), Object(a.useEffect)((function() {
                        Vs()
                    }), []), Object(a.useEffect)((function() {
                        return i.current && (i.current.addEventListener("scroll", (function() {
                                return t(0, "Language", i)
                            })), t(0, "Language", i)),
                            function() {
                                i.current.removeEventListener("scroll")
                            }
                    }), []), Object(D.jsx)(D.Fragment, {
                        children: Object(D.jsx)(zt.a, {
                            className: "gfg_view_all",
                            children: Object(D.jsx)(Mt.a, {
                                className: "gfg_home_topic_outer_height gfg_home_topic_outer_height_algo",
                                span: "xl" !== r ? "sm" === r || "xs" === r ? 23 : 22 : 20,
                                offset: "xl" !== r ? "sm" === r || "xs" === r ? 0 : 1 : 2,
                                children: Object(D.jsxs)(Mt.a, {
                                    offset: 1,
                                    children: [Object(D.jsx)(Mt.a, {
                                        span: 23,
                                        children: Object(D.jsx)(zt.a, {
                                            justify: "space-between",
                                            children: Object(D.jsx)(Mt.a, {
                                                className: "video-card-heading",
                                                children: "Tutorials"
                                            })
                                        })
                                    }), Object(D.jsx)(Mt.a, {
                                        span: "sm" === r || "xs" === r ? 24 : 23,
                                        children: Object(D.jsx)(zt.a, {
                                            ref: i,
                                            wrap: !1,
                                            gutter: 10,
                                            className: "scroll_gfg gfg_home_sroll gfg_home_language_cards gfg_home_topic_right_margin",
                                            children: o
                                        })
                                    }), Object(D.jsxs)(Mt.a, {
                                        className: "homePageCardScroller",
                                        span: "sm" === r || "xs" === r ? 24 : 23,
                                        style: {
                                            display: "flex",
                                            justifyContent: "center"
                                        },
                                        children: [Object(D.jsx)("div", {
                                            title: "Scroll Back",
                                            className: "homeCardScrollBtn leftScrollLanguageCard",
                                            onClick: function() {
                                                return c(i, "Language")
                                            },
                                            children: Object(D.jsx)("i", {
                                                className: "gfg-icon slide-left"
                                            })
                                        }), Object(D.jsx)("div", {
                                            title: "Scroll Ahead",
                                            className: "homeCardScrollBtn rightScrollLanguageCard",
                                            onClick: function() {
                                                return s(i, "Language")
                                            },
                                            children: Object(D.jsx)("i", {
                                                className: "gfg-icon slide-right"
                                            })
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                },
                Js = function() {
                    var e = Xt(),
                        t = {
                            lg: "22",
                            xl: "20",
                            md: "22"
                        },
                        s = function(e, t, s) {
                            var a = s.current.scrollLeft + e,
                                c = s.current.scrollWidth - s.current.offsetWidth,
                                i = !0;
                            c > 0 && c <= a && (document.querySelector(".rightScroll".concat(t, "Card")).classList.add("scrollBtnHomeCardInactive"), i = !1), a <= 0 && (document.querySelector(".leftScroll".concat(t, "Card")).classList.add("scrollBtnHomeCardInactive"), i = !1), i && (document.querySelector(".leftScroll".concat(t, "Card")).classList.remove("scrollBtnHomeCardInactive"), document.querySelector(".rightScroll".concat(t, "Card")).classList.remove("scrollBtnHomeCardInactive"))
                        },
                        a = function(e, t) {
                            e.current.scrollBy({
                                left: -320,
                                behavior: "smooth"
                            }), s(-320, t, e)
                        },
                        c = function(e, t) {
                            e.current.scrollBy({
                                left: 320,
                                behavior: "smooth"
                            }), e.current.left += 320, s(320, t, e)
                        };
                    return Object(D.jsx)(D.Fragment, {
                        children: Object(D.jsxs)("div", {
                            className: "gfg_home_page_background_base",
                            style: {
                                width: "100%"
                            },
                            children: [Object(D.jsxs)("div", {
                                className: "gfg_home_page_search_background gfg_home_page_padding",
                                children: [Object(D.jsx)(Cs, {
                                    breakpoint: e
                                }), Object(D.jsx)(As, {
                                    breakpoint: e
                                })]
                            }), Object(D.jsxs)("div", {
                                className: "gfg_home_page_background_white_base",
                                children: [Object(D.jsx)("div", {
                                    className: "gfg_home_page_search_card_mode gfg_home_page_padding",
                                    children: Object(D.jsx)("div", {
                                        className: "gfg_homepage_section_max_width",
                                        children: Object(D.jsx)(Is, {
                                            breakpoint: e
                                        })
                                    })
                                }), Object(D.jsx)("div", {
                                    className: "gfg_home_page_padding gfg_home_page_carousel  gfg_homepage_section_max_width",
                                    children: Object(D.jsx)(ns, {
                                        breakpoint: e
                                    })
                                }), Object(D.jsxs)("div", {
                                    className: "gfg_home_page_padding  gfg_homepage_section_max_width",
                                    children: [Object(D.jsx)(gs, {
                                        breakPointOffsets: t,
                                        flag: 0,
                                        checkForNavigationDisability: s,
                                        scrollAhead: c,
                                        scrollBack: a
                                    }), Object(D.jsx)(qs, {
                                        breakPointOffsets: t,
                                        checkForNavigationDisability: s,
                                        scrollAhead: c,
                                        scrollBack: a
                                    }), Object(D.jsx)(Hs, {
                                        breakPointOffsets: t,
                                        checkForNavigationDisability: s,
                                        scrollAhead: c,
                                        scrollBack: a
                                    })]
                                })]
                            }), Object(D.jsx)("div", {
                                className: "gfg_home_page_padding  gfg_homepage_section_max_width",
                                children: Object(D.jsx)(ts, {})
                            }), Object(D.jsx)("div", {
                                className: "gfg_home_page_background_white_base gfg_home_page_potd_mobile_spacing gfg_home_page_padding",
                                children: Object(D.jsx)("div", {
                                    className: "gfg_home_page_section",
                                    children: Object(D.jsx)("div", {
                                        className: "gfg_homepage_section_max_width",
                                        children: Object(D.jsx)(as, {
                                            breakpoint: e
                                        })
                                    })
                                })
                            }), Object(D.jsx)("div", {
                                className: "gfg_home_page_padding  gfg_homepage_section_max_width",
                                children: Object(D.jsx)($t, {})
                            }), Object(D.jsx)("div", {
                                className: "gfg_home_page_background_white_base gfg_home_page_padding",
                                children: Object(D.jsx)("div", {
                                    className: "gfg_homepage_section_max_width",
                                    children: Object(D.jsx)(fs, {
                                        breakpoint: e
                                    })
                                })
                            })]
                        })
                    })
                },
                Qs = Object(H.configureStore)({
                    reducer: Object(M.a)({}, Qe.reducerPath, Qe.reducer),
                    middleware: [J.a, Qe.middleware]
                }),
                Xs = [{
                    path: ["/", "/page/:page"],
                    component: function() {
                        return Object(D.jsx)(W.a, {
                            store: Qs,
                            children: Object(D.jsx)(Js, {})
                        })
                    },
                    name: "GeeksforGeeks | A computer science portal for geeks",
                    exact: !0,
                    private: !1
                }, {
                    path: "/videos/",
                    component: lt,
                    name: "Videos | GeeksforGeeks",
                    exact: !1,
                    private: !1
                }, {
                    path: "/advertise-with-us/",
                    component: qt,
                    name: "Advertisement | GeeksforGeeks",
                    exact: !1,
                    private: !1
                }],
                Ks = Object(r.a)();
            Ks.listen((function(e) {
                Kt.a.set({
                    page: e.pathname
                }), Kt.a.pageview(e.pathname)
            }));
            var Ys = function() {
                    return Object(D.jsx)(q, {
                        children: Object(D.jsx)(o.c, {
                            history: Ks,
                            children: Object(D.jsxs)(o.d, {
                                children: [Xs.map((function(e, t) {
                                    return Object(D.jsx)(o.b, {
                                        exact: e.exact,
                                        path: e.path,
                                        children: e.component
                                    }, t)
                                })), Object(D.jsx)(o.a, {
                                    to: "/"
                                })]
                            })
                        })
                    })
                },
                Zs = function(e) {
                    e && e instanceof Function && s.e(3).then(s.bind(null, 457)).then((function(t) {
                        var s = t.getCLS,
                            a = t.getFID,
                            c = t.getFCP,
                            i = t.getLCP,
                            n = t.getTTFB;
                        s(e), a(e), c(e), i(e), n(e)
                    }))
                };
            s(434), s(435);
            pe.a.configure({
                autoClose: 4e3,
                draggable: !1,
                hideProgressBar: !0,
                toastClassName: "toast-dark",
                position: "bottom-right",
                className: "fsize-5"
            });
            Kt.a.initialize("G-DWCCJLKX3X"), n.a.render(Object(D.jsx)(c.a.StrictMode, {
                children: Object(D.jsx)(Ys, {})
            }), document.getElementById("RA-root")), Zs()
        }
    },
    [
        [436, 1, 2]
    ]
]);