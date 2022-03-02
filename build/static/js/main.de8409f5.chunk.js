(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    51: function (e, t, a) {
      e.exports = a(84);
    },
    58: function (e, t, a) {},
    64: function (e, t, a) {},
    65: function (e, t, a) {},
    66: function (e, t, a) {},
    67: function (e, t, a) {},
    71: function (e, t, a) {},
    72: function (e, t, a) {},
    73: function (e, t, a) {},
    74: function (e, t, a) {},
    75: function (e, t, a) {},
    76: function (e, t, a) {},
    77: function (e, t, a) {},
    78: function (e, t, a) {},
    79: function (e, t, a) {},
    80: function (e, t, a) {},
    81: function (e, t, a) {},
    82: function (e, t, a) {},
    83: function (e, t, a) {},
    84: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(4),
        r = a.n(n),
        i = a(39),
        c = a.n(i),
        l = a(30),
        s = a(22),
        o = a(38),
        m = a(49),
        u = a.n(m),
        p = a(27),
        d = "SET_CURRENT_USER",
        b = { currentUser: null },
        h = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : b,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case d:
              return Object(p.a)({}, e, { currentUser: t.payload });
            default:
              return e;
          }
        },
        g = "TOGGLE_CART_HIDDEN",
        f = "ADD_ITEM",
        v = a(18),
        E = { hidden: !0, cartItems: [] },
        y = function () {
          var e,
            t,
            a =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : E,
            n = arguments.length > 1 ? arguments[1] : void 0;
          switch (n.type) {
            case g:
              return Object(p.a)({}, a, { hidden: !a.hidden });
            case f:
              return Object(p.a)({}, a, {
                cartItems:
                  ((e = a.cartItems),
                  (t = n.payload),
                  e.find(function (e) {
                    return e.id === t.id;
                  })
                    ? e.map(function (e) {
                        return e.id === t.id
                          ? Object(p.a)({}, e, { quantity: e.quantity + 1 })
                          : e;
                      })
                    : [].concat(Object(v.a)(e), [
                        Object(p.a)({}, t, { quantity: 1 }),
                      ])),
              });
            default:
              return a;
          }
        },
        O = Object(o.b)({ user: h, cart: y }),
        k = [u.a],
        w = Object(o.c)(O, o.a.apply(void 0, k)),
        j = (a(58), a(0)),
        N = a.n(j),
        U = a(2),
        C = a(1),
        S = a(3),
        x = a(10),
        B = a(7),
        I = a(9),
        T = a(15),
        P = a(35);
      a(61), a(85);
      P.a.initializeApp({
        apiKey: "AIzaSyDImGyJwF15zPK2NabmHZL2OfTgPWd5-TE",
        authDomain: "d-ecshop.firebaseapp.com",
        projectId: "d-ecshop",
        storageBucket: "d-ecshop.appspot.com",
        messagingSenderId: "1005400267839",
        appId: "1:1005400267839:web:82b349793f35eac3e6ec8a",
      });
      var A = (function () {
          var e = Object(U.a)(
            N.a.mark(function e(t, a) {
              var n, r, i, c;
              return N.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (t) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return");
                      case 2:
                        return (
                          (n = D.doc("users/".concat(t.uid))),
                          (e.next = 5),
                          n.get()
                        );
                      case 5:
                        if (e.sent.exists) {
                          e.next = 17;
                          break;
                        }
                        return (
                          (r = t.displayName),
                          (i = t.email),
                          (c = new Date()),
                          (e.prev = 9),
                          (e.next = 12),
                          n.set(
                            Object(p.a)(
                              { displayName: r, email: i, createAt: c },
                              a
                            )
                          )
                        );
                      case 12:
                        e.next = 17;
                        break;
                      case 14:
                        (e.prev = 14),
                          (e.t0 = e.catch(9)),
                          console.log(
                            "error field to store in firestore",
                            e.t0.message
                          );
                      case 17:
                        return e.abrupt("return", n);
                      case 18:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[9, 14]]
              );
            })
          );
          return function (t, a) {
            return e.apply(this, arguments);
          };
        })(),
        W = new P.a.auth.GoogleAuthProvider();
      W.setCustomParameters({ prompt: "select_account" });
      var R,
        G,
        J,
        q = P.a.auth(),
        D = P.a.firestore(),
        H = function () {
          return q.signInWithPopup(W);
        },
        M = (P.a, a(64), a(65), a(31)),
        z =
          (a(66),
          a(67),
          Object(T.g)(function (e) {
            var t = e.title,
              a = e.imageUrl,
              n = (e.key, e.size),
              i = e.history,
              c = e.linkUrl,
              l = e.match;
            return r.a.createElement(
              "div",
              {
                className: "".concat(n, " menu-item"),
                onClick: function () {
                  i.push("".concat(l.url).concat(c));
                },
              },
              r.a.createElement("div", {
                className: "background-image",
                style: { backgroundImage: "url(".concat(a, ")") },
              }),
              r.a.createElement(
                "div",
                { className: "content" },
                r.a.createElement("h1", { className: "title" }, t),
                r.a.createElement("span", { className: "subtitle" }, "SHOP NOW")
              )
            );
          })),
        V = (function (e) {
          function t() {
            var e;
            return (
              Object(C.a)(this, t),
              ((e = Object(x.a)(this, Object(B.a)(t).call(this))).state = {
                sections: [
                  {
                    title: "hats",
                    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
                    id: 1,
                    linkUrl: "shop/hats",
                  },
                  {
                    title: "jackets",
                    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
                    id: 2,
                    linkUrl: "shop/jackets",
                  },
                  {
                    title: "sneakers",
                    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
                    id: 3,
                    linkUrl: "shop/sneakers",
                  },
                  {
                    title: "womens",
                    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
                    size: "large",
                    id: 4,
                    linkUrl: "shop/womens",
                  },
                  {
                    title: "mens",
                    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
                    size: "large",
                    id: 5,
                    linkUrl: "shop/mens",
                  },
                ],
              }),
              e
            );
          }
          return (
            Object(I.a)(t, e),
            Object(S.a)(t, [
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    "div",
                    { className: "directory-menu" },
                    this.state.sections.map(function (e) {
                      var t = e.id,
                        a = Object(M.a)(e, ["id"]);
                      return r.a.createElement(z, Object.assign({ key: t }, a));
                    })
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        F = function () {
          return r.a.createElement(
            "div",
            { className: "homepage" },
            r.a.createElement(V, null)
          );
        },
        L = [
          {
            id: 1,
            title: "Hats",
            routeName: "hats",
            items: [
              {
                id: 1,
                name: "Brown Brim",
                imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
                price: 25,
              },
              {
                id: 2,
                name: "Blue Beanie",
                imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
                price: 18,
              },
              {
                id: 3,
                name: "Brown Cowboy",
                imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
                price: 35,
              },
              {
                id: 4,
                name: "Grey Brim",
                imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
                price: 25,
              },
              {
                id: 5,
                name: "Green Beanie",
                imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
                price: 18,
              },
              {
                id: 6,
                name: "Palm Tree Cap",
                imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
                price: 14,
              },
              {
                id: 7,
                name: "Red Beanie",
                imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
                price: 18,
              },
              {
                id: 8,
                name: "Wolf Cap",
                imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
                price: 14,
              },
              {
                id: 9,
                name: "Blue Snapback",
                imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
                price: 16,
              },
            ],
          },
          {
            id: 2,
            title: "Sneakers",
            routeName: "sneakers",
            items: [
              {
                id: 10,
                name: "Adidas NMD",
                imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
                price: 220,
              },
              {
                id: 11,
                name: "Adidas Yeezy",
                imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
                price: 280,
              },
              {
                id: 12,
                name: "Black Converse",
                imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
                price: 110,
              },
              {
                id: 13,
                name: "Nike White AirForce",
                imageUrl: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
                price: 160,
              },
              {
                id: 14,
                name: "Nike Red High Tops",
                imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
                price: 160,
              },
              {
                id: 15,
                name: "Nike Brown High Tops",
                imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
                price: 160,
              },
              {
                id: 16,
                name: "Air Jordan Limited",
                imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
                price: 190,
              },
              {
                id: 17,
                name: "Timberlands",
                imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
                price: 200,
              },
            ],
          },
          {
            id: 3,
            title: "Jackets",
            routeName: "jackets",
            items: [
              {
                id: 18,
                name: "Black Jean Shearling",
                imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
                price: 125,
              },
              {
                id: 19,
                name: "Blue Jean Jacket",
                imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
                price: 90,
              },
              {
                id: 20,
                name: "Grey Jean Jacket",
                imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
                price: 90,
              },
              {
                id: 21,
                name: "Brown Shearling",
                imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
                price: 165,
              },
              {
                id: 22,
                name: "Tan Trench",
                imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
                price: 185,
              },
            ],
          },
          {
            id: 4,
            title: "Womens",
            routeName: "womens",
            items: [
              {
                id: 23,
                name: "Blue Tanktop",
                imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
                price: 25,
              },
              {
                id: 24,
                name: "Floral Blouse",
                imageUrl: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
                price: 20,
              },
              {
                id: 25,
                name: "Floral Dress",
                imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
                price: 80,
              },
              {
                id: 26,
                name: "Red Dots Dress",
                imageUrl: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
                price: 80,
              },
              {
                id: 27,
                name: "Striped Sweater",
                imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
                price: 45,
              },
              {
                id: 28,
                name: "Yellow Track Suit",
                imageUrl: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
                price: 135,
              },
              {
                id: 29,
                name: "White Blouse",
                imageUrl: "https://i.ibb.co/qBcrsJg/white-vest.png",
                price: 20,
              },
            ],
          },
          {
            id: 5,
            title: "Mens",
            routeName: "mens",
            items: [
              {
                id: 30,
                name: "Camo Down Vest",
                imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
                price: 325,
              },
              {
                id: 31,
                name: "Floral T-shirt",
                imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
                price: 20,
              },
              {
                id: 32,
                name: "Black & White Longsleeve",
                imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
                price: 25,
              },
              {
                id: 33,
                name: "Pink T-shirt",
                imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
                price: 25,
              },
              {
                id: 34,
                name: "Jean Long Sleeve",
                imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
                price: 40,
              },
              {
                id: 35,
                name: "Burgundy T-shirt",
                imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
                price: 25,
              },
            ],
          },
        ],
        K =
          (a(71),
          function () {
            return { type: g };
          }),
        Y =
          (a(72),
          function (e) {
            var t = e.children,
              a = e.isGoogleButton,
              n = e.inverted,
              i = Object(M.a)(e, ["children", "isGoogleButton", "inverted"]);
            return r.a.createElement(
              "button",
              Object.assign(
                {
                  className: ""
                    .concat(n ? "inverted" : "", " ")
                    .concat(a ? "google-sign-in" : "", " custom-button"),
                },
                i
              ),
              t
            );
          }),
        _ =
          (a(73),
          Object(s.b)(null, function (e) {
            return {
              addItemFromCart: function (t) {
                return e(
                  (function (e) {
                    return { type: f, payload: e };
                  })(t)
                );
              },
            };
          })(function (e) {
            var t = e.item,
              a = e.addItemFromCart,
              n = t.name,
              i = t.imageUrl,
              c = t.price;
            return r.a.createElement(
              "div",
              { className: "collection-item" },
              r.a.createElement("div", {
                className: "image",
                style: { backgroundImage: "url(".concat(i, ")") },
              }),
              r.a.createElement(
                "div",
                { className: "collection-footer" },
                r.a.createElement("span", { className: "name" }, n),
                r.a.createElement("span", { className: "price" }, c)
              ),
              r.a.createElement(
                Y,
                {
                  onClick: function () {
                    return a(t);
                  },
                  inverted: !0,
                },
                "Add to cart"
              )
            );
          })),
        Q = function (e) {
          var t = e.title,
            a = e.items;
          return r.a.createElement(
            "div",
            { className: "collection-preview" },
            r.a.createElement("h1", { className: "title" }, t.toUpperCase()),
            r.a.createElement(
              "div",
              { className: "preview" },
              a
                .filter(function (e, t) {
                  return t < 4;
                })
                .map(function (e) {
                  return r.a.createElement(_, { key: e.id, item: e });
                })
            )
          );
        },
        X = (function (e) {
          function t(e) {
            var a;
            return (
              Object(C.a)(this, t),
              ((a = Object(x.a)(this, Object(B.a)(t).call(this, e))).state = {
                collections: L,
              }),
              a
            );
          }
          return (
            Object(I.a)(t, e),
            Object(S.a)(t, [
              {
                key: "render",
                value: function () {
                  return this.state.collections.map(function (e) {
                    var t = e.id,
                      a = Object(M.a)(e, ["id"]);
                    return r.a.createElement(Q, Object.assign({ key: t }, a));
                  });
                },
              },
            ]),
            t
          );
        })(r.a.Component),
        Z = a(20),
        $ = Object(Z.a)(
          [
            function (e) {
              return e.user;
            },
          ],
          function (e) {
            return e.currentUser;
          }
        ),
        ee = function (e) {
          return e.cart;
        },
        te = Object(Z.a)([ee], function (e) {
          return e.cartItems;
        }),
        ae = Object(Z.a)([te], function (e) {
          return e.reduce(function (e, t) {
            return e + t.quantity;
          }, 0);
        }),
        ne = Object(Z.a)([ee], function (e) {
          return e.hidden;
        }),
        re = Object(Z.a)([te], function (e) {
          return e.reduce(function (e, t) {
            return e + t.quantity * t.price;
          }, 0);
        }),
        ie = ["svgRef"];
      function ce() {
        return (ce =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function le(e, t) {
        if (null == e) return {};
        var a,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var a,
              n,
              r = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++)
              (a = i[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (a = i[n]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (r[a] = e[a]));
        }
        return r;
      }
      var se,
        oe,
        me,
        ue,
        pe,
        de,
        be,
        he,
        ge,
        fe,
        ve,
        Ee,
        ye,
        Oe,
        ke,
        we = function (e) {
          var t = e.svgRef,
            a = le(e, ie);
          return r.a.createElement(
            "svg",
            ce(
              { width: "50px", height: "39px", viewBox: "0 0 50 39", ref: t },
              a
            ),
            R || (R = r.a.createElement("title", null, "Group")),
            G || (G = r.a.createElement("desc", null, "Created with Sketch.")),
            J ||
              (J = r.a.createElement(
                "g",
                {
                  id: "WiP",
                  stroke: "none",
                  strokeWidth: 1,
                  fill: "none",
                  fillRule: "evenodd",
                },
                r.a.createElement(
                  "g",
                  {
                    id: "Artboard",
                    transform: "translate(-90.000000, -38.000000)",
                  },
                  r.a.createElement(
                    "g",
                    {
                      id: "Group",
                      transform: "translate(90.000000, 38.000000)",
                    },
                    r.a.createElement("polygon", {
                      id: "Rectangle",
                      fill: "#808282",
                      points: "3 14 25 26.5 47 14 40.855176 39 9.08421785 39",
                    }),
                    r.a.createElement("polygon", {
                      id: "Triangle",
                      fillOpacity: 0.262838724,
                      fill: "#101A1A",
                      points: "25 8 40 39 10 39",
                    }),
                    r.a.createElement("circle", {
                      id: "Oval",
                      fill: "#5E6363",
                      cx: 2,
                      cy: 9,
                      r: 2,
                    }),
                    r.a.createElement("circle", {
                      id: "Oval",
                      fill: "#5E6363",
                      cx: 25,
                      cy: 2,
                      r: 2,
                    }),
                    r.a.createElement("circle", {
                      id: "Oval",
                      fill: "#5E6363",
                      cx: 48,
                      cy: 9,
                      r: 2,
                    })
                  )
                )
              ))
          );
        },
        je = r.a.forwardRef(function (e, t) {
          return r.a.createElement(we, ce({ svgRef: t }, e));
        }),
        Ne = (a.p, a(74), ["svgRef"]);
      function Ue() {
        return (Ue =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function Ce(e, t) {
        if (null == e) return {};
        var a,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var a,
              n,
              r = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++)
              (a = i[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (a = i[n]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (r[a] = e[a]));
        }
        return r;
      }
      var Se = function (e) {
          var t = e.svgRef,
            a = Ce(e, Ne);
          return r.a.createElement(
            "svg",
            Ue(
              {
                id: "Capa_1",
                x: "0px",
                y: "0px",
                viewBox: "0 0 407.453 407.453",
                style: { enableBackground: "new 0 0 407.453 407.453" },
                xmlSpace: "preserve",
                ref: t,
              },
              a
            ),
            r.a.createElement(
              "g",
              null,
              r.a.createElement("path", {
                style: { fill: "#010002" },
                d: "M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z",
              }),
              r.a.createElement("path", {
                style: { fill: "#010002" },
                d: "M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z",
              }),
              r.a.createElement("path", {
                style: { fill: "#010002" },
                d: "M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z",
              }),
              r.a.createElement("path", {
                style: { fill: "#010002" },
                d: "M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z",
              }),
              r.a.createElement("path", {
                style: { fill: "#010002" },
                d: "M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z",
              })
            ),
            se || (se = r.a.createElement("g", null)),
            oe || (oe = r.a.createElement("g", null)),
            me || (me = r.a.createElement("g", null)),
            ue || (ue = r.a.createElement("g", null)),
            pe || (pe = r.a.createElement("g", null)),
            de || (de = r.a.createElement("g", null)),
            be || (be = r.a.createElement("g", null)),
            he || (he = r.a.createElement("g", null)),
            ge || (ge = r.a.createElement("g", null)),
            fe || (fe = r.a.createElement("g", null)),
            ve || (ve = r.a.createElement("g", null)),
            Ee || (Ee = r.a.createElement("g", null)),
            ye || (ye = r.a.createElement("g", null)),
            Oe || (Oe = r.a.createElement("g", null)),
            ke || (ke = r.a.createElement("g", null))
          );
        },
        xe = r.a.forwardRef(function (e, t) {
          return r.a.createElement(Se, Ue({ svgRef: t }, e));
        }),
        Be = (a.p, a(75), Object(Z.b)({ itemCount: ae })),
        Ie = Object(s.b)(Be, function (e) {
          return {
            toggleCartHidden: function () {
              return e(K());
            },
          };
        })(function (e) {
          var t = e.toggleCartHidden,
            a = e.itemCount;
          return r.a.createElement(
            "div",
            { className: "cart-icon", onClick: t },
            r.a.createElement(xe, { className: "shopping-icon" }),
            r.a.createElement("span", { className: "item-count" }, a)
          );
        }),
        Te =
          (a(76),
          a(77),
          function (e) {
            var t = e.item,
              a = t.imageUrl,
              n = t.name,
              i = t.price,
              c = t.quantity;
            return r.a.createElement(
              "div",
              { className: "cart-item" },
              r.a.createElement("img", { src: a, alt: "item" }),
              r.a.createElement(
                "div",
                { className: "item-details" },
                r.a.createElement("span", { className: "name" }, n),
                r.a.createElement("span", { className: "price" }, c, " x $", i)
              )
            );
          }),
        Pe = Object(Z.b)({ cartItems: te }),
        Ae = Object(T.g)(
          Object(s.b)(Pe)(function (e) {
            var t = e.cartItems,
              a = e.history,
              n = e.dispatch;
            return r.a.createElement(
              "div",
              { className: "cart-dropdown" },
              r.a.createElement(
                "div",
                { className: "cart-items" },
                t.length
                  ? t.map(function (e) {
                      return r.a.createElement(Te, { key: e.id, item: e });
                    })
                  : r.a.createElement(
                      "span",
                      { className: "empty-message" },
                      "Your cart is empty"
                    )
              ),
              r.a.createElement(
                Y,
                {
                  onClick: function () {
                    a.push("./checkout"), n(K());
                  },
                },
                "GO TO CHECKOUT"
              )
            );
          })
        ),
        We = Object(Z.b)({ currentUser: $, hidden: ne }),
        Re = Object(s.b)(We)(function (e) {
          var t = e.currentUser,
            a = e.hidden;
          return r.a.createElement(
            "div",
            { className: "header" },
            r.a.createElement(
              "div",
              { className: "logo-container" },
              r.a.createElement(je, null)
            ),
            r.a.createElement(
              "div",
              { className: "options" },
              r.a.createElement(
                l.b,
                { className: "option", to: "/shop" },
                "SHOP"
              ),
              r.a.createElement(
                l.b,
                { className: "option", to: "/contact" },
                "CONTACT"
              ),
              t
                ? r.a.createElement(
                    "div",
                    {
                      className: "option",
                      onClick: function () {
                        return q.signOut();
                      },
                    },
                    "SIGN OUT"
                  )
                : r.a.createElement(
                    l.b,
                    { className: "option", to: "/signin" },
                    "SIGN IN"
                  ),
              r.a.createElement(Ie, null)
            ),
            a ? null : r.a.createElement(Ae, null)
          );
        }),
        Ge = (a(78), a(5)),
        Je =
          (a(79),
          a(80),
          function (e) {
            var t = e.label,
              a = e.handleChange,
              n = Object(M.a)(e, ["label", "handleChange"]);
            return r.a.createElement(
              "div",
              { className: "group" },
              r.a.createElement(
                "input",
                Object.assign({ className: "form-input", onChange: a }, n)
              ),
              t
                ? r.a.createElement(
                    "label",
                    {
                      className: "".concat(
                        n.value.length ? "shrink" : "",
                        " form-input-label"
                      ),
                    },
                    t
                  )
                : null
            );
          }),
        qe = (function (e) {
          function t(e) {
            var a;
            return (
              Object(C.a)(this, t),
              ((a = Object(x.a)(
                this,
                Object(B.a)(t).call(this, e)
              )).handleSubmit = function (e) {
                e.preventDefault();
                try {
                  var t = e.email,
                    n = e.password;
                  q.signInWithEmailAndPassword(t, n),
                    a.setState({ email: "", password: "" });
                } catch (r) {
                  console.error(r);
                }
              }),
              (a.handleChange = function (e) {
                var t = e.target,
                  n = t.name,
                  r = t.value;
                a.setState(Object(Ge.a)({}, n, r));
              }),
              (a.state = { email: "", password: "" }),
              a
            );
          }
          return (
            Object(I.a)(t, e),
            Object(S.a)(t, [
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    "div",
                    { className: "sign-in" },
                    r.a.createElement(
                      "h1",
                      { className: "title" },
                      " I already have an account "
                    ),
                    r.a.createElement(
                      "span",
                      null,
                      " Sign in with your credentials "
                    ),
                    r.a.createElement(
                      "form",
                      { onSubmit: this.handleSubmit },
                      r.a.createElement(Je, {
                        name: "email",
                        type: "email",
                        value: this.state.email,
                        handleChange: this.handleChange,
                        label: "Email",
                        required: !0,
                      }),
                      r.a.createElement(Je, {
                        name: "password",
                        type: "password",
                        value: this.state.password,
                        handleChange: this.handleChange,
                        label: "Password",
                        required: !0,
                      }),
                      r.a.createElement(
                        "div",
                        { className: "buttons" },
                        r.a.createElement(Y, { type: "button" }, " Sign In "),
                        r.a.createElement(
                          Y,
                          { onClick: H, isGoogleButton: !0 },
                          "Sign In With Google"
                        )
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(r.a.Component),
        De = (function (e) {
          function t(e) {
            var a;
            return (
              Object(C.a)(this, t),
              ((a = Object(x.a)(
                this,
                Object(B.a)(t).call(this, e)
              )).handleChange = function (e) {
                var t = e.target,
                  n = t.name,
                  r = t.value;
                a.setState(Object(Ge.a)({}, n, r));
              }),
              (a.handleSubmit = (function () {
                var e = Object(U.a)(
                  N.a.mark(function e(t) {
                    var n, r, i, c, l, s, o;
                    return N.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                (t.preventDefault(),
                                (n = a.state),
                                (r = n.displayName),
                                (i = n.email),
                                (c = n.password),
                                (l = n.confirmPassword),
                                c === l)
                              ) {
                                e.next = 5;
                                break;
                              }
                              return (
                                alert("password didn't match!"),
                                e.abrupt("return")
                              );
                            case 5:
                              return (
                                (e.prev = 5),
                                (e.next = 8),
                                q.createUserWithEmailAndPassword(i, c)
                              );
                            case 8:
                              return (
                                (s = e.sent),
                                (o = s.user),
                                (e.next = 12),
                                A(o, { displayName: r })
                              );
                            case 12:
                              a.setState({
                                displayName: "",
                                email: "",
                                password: "",
                                confirmPassword: "",
                              }),
                                (e.next = 18);
                              break;
                            case 15:
                              (e.prev = 15),
                                (e.t0 = e.catch(5)),
                                console.error(e.t0);
                            case 18:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[5, 15]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (a.state = {
                displayName: "",
                email: "",
                password: "",
                confirmPassword: "",
              }),
              a
            );
          }
          return (
            Object(I.a)(t, e),
            Object(S.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this.state,
                    t = e.displayName,
                    a = e.email,
                    n = e.password,
                    i = e.confirmPassword;
                  return r.a.createElement(
                    "div",
                    { className: "sign-up" },
                    r.a.createElement(
                      "h2",
                      { className: "title" },
                      "I do not have a account"
                    ),
                    r.a.createElement(
                      "span",
                      null,
                      "Sign up with your email and password"
                    ),
                    r.a.createElement(
                      "form",
                      {
                        className: "sign-up-form",
                        onSubmit: this.handleSubmit,
                      },
                      r.a.createElement(Je, {
                        name: "displayName",
                        type: "text",
                        value: t,
                        handleChange: this.handleChange,
                        label: "Display Name",
                        required: !0,
                      }),
                      r.a.createElement(Je, {
                        name: "email",
                        type: "email",
                        value: a,
                        handleChange: this.handleChange,
                        label: "Email",
                        required: !0,
                      }),
                      r.a.createElement(Je, {
                        name: "password",
                        type: "password",
                        value: n,
                        handleChange: this.handleChange,
                        label: "Password",
                        required: !0,
                      }),
                      r.a.createElement(Je, {
                        name: "confirmPassword",
                        type: "password",
                        value: i,
                        handleChange: this.handleChange,
                        label: "Confirm Password",
                        required: !0,
                      }),
                      r.a.createElement(Y, { type: "submit" }, "Sign Up")
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        He = function () {
          return r.a.createElement(
            "div",
            { className: "sign-in-and-sign-up" },
            r.a.createElement(qe, null),
            r.a.createElement(De, null)
          );
        },
        Me =
          (a(81),
          function (e) {
            var t = e.cartItem,
              a = t.name,
              n = t.imageUrl,
              i = t.quantity,
              c = t.price;
            return r.a.createElement(
              "div",
              { className: "checkout-item" },
              r.a.createElement(
                "div",
                { className: "image-container" },
                r.a.createElement("img", { src: n, alt: "productImage" })
              ),
              r.a.createElement("span", { className: "name" }, a),
              r.a.createElement("span", { className: "quantity" }, i),
              r.a.createElement("span", { className: "price" }, c),
              r.a.createElement("div", { className: "remove-button" }, "\u2718")
            );
          }),
        ze = (a(82), Object(Z.b)({ cartItems: te, cartTotal: re })),
        Ve = Object(s.b)(ze)(function (e) {
          var t = e.cartItems,
            a = e.cartTotal;
          return r.a.createElement(
            "div",
            { className: "checkout-page" },
            r.a.createElement(
              "div",
              { className: "checkout-header" },
              r.a.createElement(
                "div",
                { className: "header-block" },
                r.a.createElement("span", null, "product")
              ),
              r.a.createElement(
                "div",
                { className: "header-block" },
                r.a.createElement("span", null, "description")
              ),
              r.a.createElement(
                "div",
                { className: "header-block" },
                r.a.createElement("span", null, "quantity")
              ),
              r.a.createElement(
                "div",
                { className: "header-block" },
                r.a.createElement("span", null, "price")
              ),
              r.a.createElement(
                "div",
                { className: "header-block" },
                r.a.createElement("span", null, "remove")
              )
            ),
            t.map(function (e) {
              return r.a.createElement(Me, { key: e.id, cartItem: e });
            }),
            r.a.createElement(
              "div",
              { className: "total" },
              r.a.createElement("span", null, "Total : $ ", a)
            )
          );
        }),
        Fe =
          (a(83),
          function () {
            return r.a.createElement("div", null, r.a.createElement(Ve, null));
          }),
        Le = (function (e) {
          function t() {
            var e, a;
            Object(C.a)(this, t);
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
              r[i] = arguments[i];
            return (
              ((a = Object(x.a)(
                this,
                (e = Object(B.a)(t)).call.apply(e, [this].concat(r))
              )).unSubscribeFromAuth = null),
              a
            );
          }
          return (
            Object(I.a)(t, e),
            Object(S.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this.props.setCurrentUser;
                  this.unSubscribeFromAuth = q.onAuthStateChanged(
                    (function () {
                      var t = Object(U.a)(
                        N.a.mark(function t(a) {
                          var n;
                          return N.a.wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (!a) {
                                    t.next = 5;
                                    break;
                                  }
                                  return (n = A(a)), (t.next = 4), n;
                                case 4:
                                  t.sent.onSnapshot(function (t) {
                                    e(Object(p.a)({ id: t.id }, t.data()));
                                  });
                                case 5:
                                  e(a);
                                case 6:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                        })
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })()
                  );
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.unSubscribeFromAuth();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return r.a.createElement(
                    "div",
                    { className: "App" },
                    r.a.createElement(Re, null),
                    r.a.createElement(
                      T.d,
                      null,
                      r.a.createElement(T.b, {
                        exact: !0,
                        path: "/checkout",
                        component: Fe,
                      }),
                      r.a.createElement(T.b, { path: "/shop", component: X }),
                      r.a.createElement(T.b, {
                        path: "/signIn",
                        render: function () {
                          return e.props.currentUser
                            ? r.a.createElement(T.a, { to: "/" })
                            : r.a.createElement(He, null);
                        },
                      }),
                      r.a.createElement(T.b, {
                        exact: !0,
                        path: "/",
                        component: F,
                      })
                    )
                  );
                },
              },
            ]),
            t
          );
        })(r.a.Component),
        Ke = Object(Z.b)({ currentUser: $ }),
        Ye = Object(s.b)(Ke, function (e) {
          return {
            setCurrentUser: function (t) {
              return e(
                (function (e) {
                  return { type: d, payload: e };
                })(t)
              );
            },
          };
        })(Le);
      c.a.render(
        r.a.createElement(
          s.a,
          { store: w },
          r.a.createElement(l.a, null, r.a.createElement(Ye, null))
        ),
        document.getElementById("root")
      );
    },
  },
  [[51, 1, 2]],
]);
//# sourceMappingURL=main.de8409f5.chunk.js.map
