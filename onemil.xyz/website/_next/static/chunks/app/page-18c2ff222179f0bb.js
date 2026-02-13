(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    193: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 6526));
    },
    6526: function (e, t, r) {
      "use strict";
      (r.r(t),
        r.d(t, {
          default: function () {
            return x;
          },
        }));
      var a = r(7437),
        n = r(2265);
      function s(e) {
        let { puzzle: t } = e,
          [r, s] = (0, n.useState)(!1);
        return (0, a.jsxs)("div", {
          className:
            "min-h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-white flex flex-col items-center justify-center p-4 relative overflow-hidden",
          children: [
            (0, a.jsx)("div", {
              className: "absolute inset-0 opacity-5",
              children: (0, a.jsx)("div", {
                className: "absolute inset-0",
                style: {
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                  backgroundSize: "40px 40px",
                },
              }),
            }),
            (0, a.jsx)("div", {
              className:
                "absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-60 pointer-events-none",
            }),
            (0, a.jsxs)("div", {
              className: "max-w-4xl w-full space-y-8 text-center relative z-10",
              children: [
                (0, a.jsx)("div", {
                  className: "flex justify-center mb-8",
                  children: (0, a.jsxs)("div", {
                    className:
                      "relative inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/50 rounded-md backdrop-blur-sm",
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50",
                      }),
                      (0, a.jsx)("span", {
                        className:
                          "text-green-400 text-sm font-mono font-bold tracking-widest uppercase",
                        children: "LIVE",
                      }),
                    ],
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "space-y-4",
                  children: [
                    (0, a.jsx)("h1", {
                      className:
                        "text-7xl md:text-9xl font-black tracking-tighter bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent drop-shadow-2xl",
                      children: "SUDOKU",
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-white/30 to-transparent",
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "space-y-8",
                  children: r
                    ? (0, a.jsxs)("div", {
                        className: "space-y-6",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "bg-red-950/30 border border-red-900/50 rounded-lg p-4 backdrop-blur-sm",
                            children: (0, a.jsx)("p", {
                              className:
                                "text-sm font-mono text-red-400 uppercase tracking-wider",
                              children:
                                "⚠️ CLASSIFIED DOCUMENT | DESTROY AFTER SOLVING",
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "bg-zinc-900 rounded-none shadow-2xl overflow-hidden border-4 border-zinc-800 hover:border-red-900/50 transition-colors duration-300",
                            children: (0, a.jsx)("iframe", {
                              src: t.pdfUrl,
                              className:
                                "w-full h-[600px] md:h-[800px] bg-white",
                              title: "Sudoku Puzzle",
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "flex flex-col sm:flex-row gap-4 justify-center",
                            children: [
                              (0, a.jsx)("a", {
                                href: t.pdfUrl,
                                download: !0,
                                className:
                                  "px-8 py-4 bg-zinc-800 text-white rounded-none hover:bg-red-900 transition-colors font-mono uppercase tracking-wider border border-zinc-700 hover:border-red-800",
                                children: "Download PDF",
                              }),
                              (0, a.jsx)("button", {
                                onClick: () => {
                                  let e = window.open(t.pdfUrl, "_blank");
                                  e &&
                                    (e.onload = () => {
                                      e.print();
                                    });
                                },
                                className:
                                  "px-8 py-4 bg-zinc-800 text-white rounded-none hover:bg-zinc-700 transition-colors font-mono uppercase tracking-wider border border-zinc-700",
                                children: "Print Evidence",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "text-xs text-gray-600 space-y-2 font-mono mt-8",
                            children: [
                              (0, a.jsx)("p", {
                                className: "text-gray-500",
                                children:
                                  "◆ This puzzle is permanently assigned to your session",
                              }),
                              (0, a.jsxs)("p", {
                                className: "text-gray-700",
                                children: [
                                  "CASE #",
                                  String(t.pdfIndex + 1).padStart(6, "0"),
                                ],
                              }),
                            ],
                          }),
                        ],
                      })
                    : (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsxs)("div", {
                            className: "space-y-4 py-8",
                            children: [
                              (0, a.jsx)("p", {
                                className:
                                  "text-2xl md:text-3xl font-light text-gray-300 tracking-wide",
                                children: (0, a.jsx)("span", {
                                  className: "text-red-400 font-bold",
                                  children: "TOP SECRET",
                                }),
                              }),
                              (0, a.jsxs)("p", {
                                className:
                                  "text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed",
                                children: [
                                  "You have been selected for a classified challenge.",
                                  (0, a.jsx)("br", {}),
                                  (0, a.jsx)("span", {
                                    className:
                                      "text-sm text-gray-500 font-mono",
                                    children:
                                      "One puzzle. One chance. Time is running.",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("button", {
                            onClick: () => s(!0),
                            className:
                              "group relative px-12 py-5 bg-white text-black text-xl font-bold rounded-none hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl hover:shadow-red-500/50 border-2 border-white hover:border-red-500 uppercase tracking-wider",
                            children: [
                              (0, a.jsx)("span", {
                                className: "relative z-10",
                                children: "Accept Challenge",
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/0 to-red-600/0 group-hover:from-red-600/20 group-hover:via-red-600/30 group-hover:to-red-600/20 transition-all duration-500",
                              }),
                            ],
                          }),
                          (0, a.jsx)("p", {
                            className:
                              "text-xs text-gray-600 font-mono uppercase tracking-widest",
                            children:
                              "[ Assignment: Random | Status: Encrypted ]",
                          }),
                        ],
                      }),
                }),
              ],
            }),
          ],
        });
      }
      function i() {
        return (0, a.jsx)("div", {
          className:
            "min-h-screen bg-black text-white flex flex-col items-center justify-center",
          children: (0, a.jsxs)("div", {
            className: "space-y-4 text-center",
            children: [
              (0, a.jsx)("div", {
                className:
                  "w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto",
              }),
              (0, a.jsx)("p", {
                className: "text-xl text-gray-400",
                children: "Loading your puzzle...",
              }),
            ],
          }),
        });
      }
      function o(e) {
        let { onVerified: t } = e,
          [r, s] = (0, n.useState)(0),
          [i, o] = (0, n.useState)(0),
          [l, c] = (0, n.useState)(""),
          [d, x] = (0, n.useState)(!1);
        return (
          (0, n.useEffect)(() => {
            (s(Math.floor(9 * Math.random()) + 1),
              o(Math.floor(9 * Math.random()) + 1));
          }, []),
          (0, a.jsx)("div", {
            className:
              "fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50",
            children: (0, a.jsxs)("div", {
              className:
                "bg-gradient-to-b from-zinc-900 to-black border-4 border-red-900 p-8 max-w-md w-full mx-4 relative",
              children: [
                (0, a.jsx)("div", {
                  className: "absolute inset-0 opacity-5",
                  style: {
                    backgroundImage:
                      "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  },
                }),
                (0, a.jsxs)("div", {
                  className: "relative",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "text-center mb-8",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "text-red-500 text-sm font-mono mb-2 tracking-widest",
                          children: "⚠️ SECURITY CHECKPOINT",
                        }),
                        (0, a.jsx)("h2", {
                          className: "text-2xl font-mono text-white mb-2",
                          children: "ARE YOU HUMAN?",
                        }),
                        (0, a.jsx)("div", {
                          className: "h-1 w-20 bg-red-900 mx-auto",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("form", {
                      onSubmit: (e) => {
                        (e.preventDefault(),
                          parseInt(l) === r + i
                            ? t()
                            : (x(!0),
                              c(""),
                              s(Math.floor(9 * Math.random()) + 1),
                              o(Math.floor(9 * Math.random()) + 1),
                              setTimeout(() => x(!1), 2e3)));
                      },
                      className: "space-y-6",
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "bg-zinc-950 border-2 border-zinc-800 p-6 text-center",
                          children: [
                            (0, a.jsx)("div", {
                              className: "text-sm text-gray-500 font-mono mb-4",
                              children: "SOLVE TO CONTINUE",
                            }),
                            (0, a.jsxs)("div", {
                              className: "text-5xl font-mono text-white mb-4",
                              children: [r, " + ", i, " = ?"],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)("input", {
                              type: "number",
                              value: l,
                              onChange: (e) => c(e.target.value),
                              placeholder: "Enter answer",
                              autoFocus: !0,
                              required: !0,
                              className:
                                "w-full px-6 py-4 bg-zinc-950 text-white border-2 ".concat(
                                  d ? "border-red-500" : "border-zinc-800",
                                  " font-mono text-2xl text-center focus:outline-none focus:border-red-900 transition-colors",
                                ),
                            }),
                            d &&
                              (0, a.jsx)("div", {
                                className:
                                  "mt-2 text-red-500 text-sm font-mono text-center animate-pulse",
                                children: "❌ INCORRECT. TRY AGAIN.",
                              }),
                          ],
                        }),
                        (0, a.jsx)("button", {
                          type: "submit",
                          className:
                            "w-full py-4 bg-red-900 hover:bg-red-800 text-white font-mono uppercase tracking-widest text-lg border-2 border-red-700 hover:border-red-600 transition-all",
                          children: "▶ Verify Identity",
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "mt-6 text-center text-xs text-gray-600 font-mono",
                      children: "AUTOMATED ACCESS DENIED",
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      function l(e) {
        let t = 0;
        for (let r = 0; r < e.length; r++)
          ((t = (t << 5) - t + e.charCodeAt(r)), (t &= t));
        return Math.abs(t).toString(36).padStart(8, "0");
      }
      async function c() {
        let e = (function () {
            try {
              let e = document.createElement("canvas"),
                t = e.getContext("2d");
              if (!t) return "";
              return (
                (e.width = 200),
                (e.height = 50),
                (t.textBaseline = "top"),
                (t.font = '14px "Arial"'),
                (t.textBaseline = "alphabetic"),
                (t.fillStyle = "#f60"),
                t.fillRect(125, 1, 62, 20),
                (t.fillStyle = "#069"),
                t.fillText("Browser Fingerprint \uD83D\uDD12", 2, 15),
                (t.fillStyle = "rgba(102, 204, 0, 0.7)"),
                t.fillText("Browser Fingerprint \uD83D\uDD12", 4, 17),
                e.toDataURL()
              );
            } catch (e) {
              return "";
            }
          })(),
          t = (function () {
            try {
              let e = document.createElement("canvas"),
                t = e.getContext("webgl") || e.getContext("experimental-webgl");
              if (!t) return "";
              let r = t.getExtension("WEBGL_debug_renderer_info");
              if (!r) return "";
              let a = t.getParameter(r.UNMASKED_VENDOR_WEBGL),
                n = t.getParameter(r.UNMASKED_RENDERER_WEBGL);
              return "".concat(a, "~").concat(n);
            } catch (e) {
              return "";
            }
          })(),
          r = (function () {
            let e = ["monospace", "sans-serif", "serif"],
              t = document.createElement("canvas").getContext("2d");
            if (!t) return "";
            let r = "mmmmmmmmmmlli",
              a = {};
            for (let n of e)
              ((t.font = "72px ".concat(n)), (a[n] = t.measureText(r).width));
            return [
              "Arial",
              "Verdana",
              "Times New Roman",
              "Courier New",
              "Georgia",
              "Palatino",
              "Garamond",
              "Bookman",
              "Comic Sans MS",
              "Trebuchet MS",
              "Impact",
            ]
              .filter((n) =>
                e.some(
                  (e) => (
                    (t.font = "72px '".concat(n, "', ").concat(e)),
                    t.measureText(r).width !== a[e]
                  ),
                ),
              )
              .sort()
              .join(",");
          })(),
          a = (function () {
            let e = window.screen;
            return [
              e.width,
              e.height,
              e.colorDepth,
              e.pixelDepth,
              window.devicePixelRatio || 1,
            ].join("x");
          })(),
          n = new Date().getTimezoneOffset(),
          s = navigator.language,
          i = navigator.platform,
          o = navigator.hardwareConcurrency || 0,
          c = navigator.deviceMemory,
          d = "ontouchstart" in window || navigator.maxTouchPoints > 0;
        return {
          hash: l([e, t, r, a, n, s, i, o, c || "", d].join("|")),
          canvas: l(e),
          webgl: l(t),
          fonts: l(r),
          screen: a,
          timezone: n,
          language: s,
          platform: i,
          hardwareConcurrency: o,
          deviceMemory: c,
          touchSupport: d,
        };
      }
      async function d() {
        let e = localStorage.getItem("user_fingerprint");
        if (e) return e;
        let t = await c();
        return (
          localStorage.setItem("user_fingerprint", t.hash),
          localStorage.setItem("user_fingerprint_full", JSON.stringify(t)),
          t.hash
        );
      }
      function x() {
        let [e, t] = (0, n.useState)(null),
          [r, l] = (0, n.useState)(!1),
          [c, x] = (0, n.useState)(null),
          [m, u] = (0, n.useState)(null),
          [h, g] = (0, n.useState)(!0);
        (0, n.useEffect)(() => {
          ("true" === sessionStorage.getItem("humanVerified")
            ? (u(!0), p())
            : u(!1),
            g(!1));
        }, []);
        let p = async () => {
          try {
            (l(!0), x(null));
            let e = await d(),
              r = await fetch("/api/puzzle", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fingerprint: e }),
              });
            if (!r.ok) {
              let e = await r.json();
              throw Error(e.error || "Failed to load puzzle");
            }
            let a = await r.json();
            t(a);
          } catch (e) {
            (console.error("Error fetching puzzle:", e),
              x(
                e instanceof Error
                  ? e.message
                  : "Failed to load your puzzle. Please try again.",
              ));
          } finally {
            l(!1);
          }
        };
        return h
          ? null
          : !1 === m
            ? (0, a.jsx)(o, {
                onVerified: () => {
                  (sessionStorage.setItem("humanVerified", "true"), u(!0), p());
                },
              })
            : r
              ? (0, a.jsx)(i, {})
              : c
                ? (0, a.jsx)("div", {
                    className:
                      "min-h-screen flex items-center justify-center bg-black text-white",
                    children: (0, a.jsxs)("div", {
                      className: "text-center space-y-4",
                      children: [
                        (0, a.jsx)("p", { className: "text-xl", children: c }),
                        (0, a.jsx)("button", {
                          onClick: p,
                          className:
                            "px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors",
                          children: "Try Again",
                        }),
                      ],
                    }),
                  })
                : e
                  ? (0, a.jsx)(s, { puzzle: e })
                  : null;
      }
    },
  },
  function (e) {
    (e.O(0, [971, 117, 744], function () {
      return e((e.s = 193));
    }),
      (_N_E = e.O()));
  },
]);
