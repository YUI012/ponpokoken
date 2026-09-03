module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/[slug]/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CertificationPage,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Header.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductButton$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProductButton.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CareerAd$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CareerAd.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$certifications$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/certifications.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/products.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$articles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/articles.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$certifications$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["certifications"].filter((cert)=>cert.enabled).map((cert)=>({
            slug: cert.slug
        }));
}
async function CertificationPage({ params }) {
    const { slug } = await params;
    const cert = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$certifications$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["certBySlug"][slug];
    if (!cert || !cert.enabled) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/[slug]/page.js",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "hero compact shell",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "overline",
                        children: cert.category
                    }, void 0, false, {
                        fileName: "[project]/app/[slug]/page.js",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: [
                            cert.name,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/app/[slug]/page.js",
                                lineNumber: 23,
                                columnNumber: 24
                            }, this),
                            "最短合格"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[slug]/page.js",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "shortest",
                        children: cert.shortest
                    }, void 0, false, {
                        fileName: "[project]/app/[slug]/page.js",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "heroText",
                        children: cert.summary
                    }, void 0, false, {
                        fileName: "[project]/app/[slug]/page.js",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/[slug]/page.js",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "shell routeSection",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "sectionTitle",
                        children: "最短ルート"
                    }, void 0, false, {
                        fileName: "[project]/app/[slug]/page.js",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "steps",
                        children: [
                            cert.steps.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "empty",
                                children: "教材・詳細を追加するだけで、このページに自動表示されます。"
                            }, void 0, false, {
                                fileName: "[project]/app/[slug]/page.js",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            cert.steps.map((step, index)=>{
                                if (step.type === "product") {
                                    const product = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["products"][step.productId];
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: "step",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "stepNo",
                                                children: String(index + 1).padStart(2, "0")
                                            }, void 0, false, {
                                                fileName: "[project]/app/[slug]/page.js",
                                                lineNumber: 39,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "label",
                                                        children: step.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/[slug]/page.js",
                                                        lineNumber: 41,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        children: product?.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/[slug]/page.js",
                                                        lineNumber: 42,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: product?.reason
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/[slug]/page.js",
                                                        lineNumber: 43,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductButton$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        product: product
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/[slug]/page.js",
                                                        lineNumber: 44,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/[slug]/page.js",
                                                lineNumber: 40,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, `${step.productId}-${index}`, true, {
                                        fileName: "[project]/app/[slug]/page.js",
                                        lineNumber: 38,
                                        columnNumber: 17
                                    }, this);
                                }
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "step",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "stepNo",
                                            children: String(index + 1).padStart(2, "0")
                                        }, void 0, false, {
                                            fileName: "[project]/app/[slug]/page.js",
                                            lineNumber: 52,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "label",
                                                    children: step.title
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[slug]/page.js",
                                                    lineNumber: 54,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    children: step.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[slug]/page.js",
                                                    lineNumber: 55,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: step.description
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[slug]/page.js",
                                                    lineNumber: 56,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/[slug]/page.js",
                                            lineNumber: 53,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, `${step.name}-${index}`, true, {
                                    fileName: "[project]/app/[slug]/page.js",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[slug]/page.js",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/[slug]/page.js",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            cert.articleIds.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "shell detailSection",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "sectionTitle",
                        children: "詳しく見る"
                    }, void 0, false, {
                        fileName: "[project]/app/[slug]/page.js",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "articleList",
                        children: cert.articleIds.map((id)=>{
                            const article = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$articles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["articles"][id];
                            if (!article) return null;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: article.url,
                                className: "articleRow",
                                target: "_blank",
                                rel: "noreferrer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: article.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/[slug]/page.js",
                                        lineNumber: 73,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "↗"
                                    }, void 0, false, {
                                        fileName: "[project]/app/[slug]/page.js",
                                        lineNumber: 73,
                                        columnNumber: 47
                                    }, this)
                                ]
                            }, id, true, {
                                fileName: "[project]/app/[slug]/page.js",
                                lineNumber: 72,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/[slug]/page.js",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/[slug]/page.js",
                lineNumber: 65,
                columnNumber: 9
            }, this),
            cert.nextCerts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "shell nextSection",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "sectionTitle",
                        children: "次に取るなら"
                    }, void 0, false, {
                        fileName: "[project]/app/[slug]/page.js",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this),
                    cert.nextCerts.map((nextSlug)=>{
                        const next = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$certifications$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["certBySlug"][nextSlug];
                        if (!next) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "nextRow",
                            href: `/${next.slug}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: next.name
                                }, void 0, false, {
                                    fileName: "[project]/app/[slug]/page.js",
                                    lineNumber: 89,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        next.shortest,
                                        " →"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/[slug]/page.js",
                                    lineNumber: 89,
                                    columnNumber: 41
                                }, this)
                            ]
                        }, next.slug, true, {
                            fileName: "[project]/app/[slug]/page.js",
                            lineNumber: 88,
                            columnNumber: 15
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/app/[slug]/page.js",
                lineNumber: 82,
                columnNumber: 9
            }, this),
            cert.showCareerAd && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shell",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CareerAd$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/[slug]/page.js",
                    lineNumber: 96,
                    columnNumber: 52
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[slug]/page.js",
                lineNumber: 96,
                columnNumber: 29
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "shell disclosure",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "PR"
                    }, void 0, false, {
                        fileName: "[project]/app/[slug]/page.js",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "このページにはアフィリエイト広告が含まれます。"
                    }, void 0, false, {
                        fileName: "[project]/app/[slug]/page.js",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/[slug]/page.js",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "footer shell",
                children: "© 2026 ponpokoken.com"
            }, void 0, false, {
                fileName: "[project]/app/[slug]/page.js",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/[slug]/page.js",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/[slug]/page.js [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/[slug]/page.js [app-rsc] (ecmascript)"));
}),
"[project]/components/CareerAd.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CareerAd
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function CareerAd() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "careerAd",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "label",
                children: "資格を取ったあと、転職も考えるなら"
            }, void 0, false, {
                fileName: "[project]/components/CareerAd.js",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "adSlot",
                dangerouslySetInnerHTML: {
                    __html: `
<a href="https://px.a8.net/svt/ejp?a8mat=4B614F+C37VZM+3IZO+I3SI9" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www29.a8.net/svt/bgt?aid=260621871731&wid=001&eno=01&mid=s00000016458003041000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=4B614F+C37VZM+3IZO+I3SI9" alt="">
          `
                }
            }, void 0, false, {
                fileName: "[project]/components/CareerAd.js",
                lineNumber: 6,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CareerAd.js",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Header.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function Header() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "header",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "brand",
                href: "/",
                children: "ぽんぽこ"
            }, void 0, false, {
                fileName: "[project]/components/Header.js",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "tagline",
                children: "IT資格を、最短で。"
            }, void 0, false, {
                fileName: "[project]/components/Header.js",
                lineNumber: 5,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Header.js",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ProductButton.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function ProductButton({ product }) {
    if (!product) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        className: "buyButton",
        href: product.url,
        rel: "sponsored nofollow",
        children: product.label
    }, void 0, false, {
        fileName: "[project]/components/ProductButton.js",
        lineNumber: 4,
        columnNumber: 5
    }, this);
}
}),
"[project]/data/articles.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "articles",
    ()=>articles
]);
const articles = {
    // LPIC
    "lpic-2weeks": {
        title: "LPIC-1は2週間で取れる？短期合格者を調べた結果",
        url: "https://note.com/ponpoko_0803/n/n7b63485649b3"
    },
    "lpic-vs-ccna": {
        title: "CCNAとLPIC、先に取るならどっち？",
        url: "https://note.com/ponpoko_0803/n/n27e16822d8a9"
    },
    "lpic-vs-saa": {
        title: "LPICとAWS SAA、先に取るならどっち？",
        url: "https://note.com/ponpoko_0803/n/n2836d429eb46"
    },
    // CCNA
    "ccna-10days": {
        title: "CCNAは10日で合格できる？短期合格者を調べた結果",
        url: "https://note.com/ponpoko_0803/n/nf6448d3149d5"
    },
    "ccna-udemy": {
        title: "【2026年版】CCNA対策におすすめのUdemy講座3選",
        url: "https://note.com/ponpoko_0803/n/n199789af17e7"
    },
    "ccna-simulation": {
        title: "【2026年版】CCNAのシミュレーション問題を捨てても合格できる？",
        url: "https://note.com/ponpoko_0803/n/n8e91f43faf17"
    },
    // AWS CLF
    "aws-clf-1week": {
        title: "AWS CLF-C02は1週間で合格できる？短期合格者を調べた結果",
        url: "https://note.com/ponpoko_0803/n/n22025aeda527"
    },
    "aws-clf-difficulty": {
        title: "【2026年版】AWSクラウドプラクティショナーの難易度は？未経験でも合格できる？",
        url: "https://note.com/ponpoko_0803/n/n95eb8a68a307"
    },
    "aws-clf-skip": {
        title: "AWS CLFは取らなくていい？SAAからでいい人7タイプ",
        url: "https://note.com/ponpoko_0803/n/n76fcba903eb3"
    },
    // AWS SAA
    "aws-saa-1day": {
        title: "AWS SAAは1日で合格できる？短期合格者を調べた結果",
        url: "https://note.com/ponpoko_0803/n/nd41e8ce4ddc5"
    },
    "aws-saa-udemy": {
        title: "【2026年版】AWS SAA対策におすすめのUdemy講座5選",
        url: "https://note.com/ponpoko_0803/n/ncc4f3250a71d"
    },
    "aws-saa-mock-score": {
        title: "AWS SAA、模試何点なら受験していい？落ちたら追加2万円",
        url: "https://note.com/ponpoko_0803/n/n49f0f00a178f"
    },
    // AWS AI Practitioner
    "aws-ai-10hours": {
        title: "AWS AI Practitionerは10時間で合格できる？短期合格者を調べた結果",
        url: "https://note.com/ponpoko_0803/n/n39cc167c5ef6"
    },
    "aws-ai-udemy-shortest": {
        title: "【2026年版】AWS AI PractitionerはUdemy中心で短期合格できる？3人を比較",
        url: "https://note.com/ponpoko_0803/n/n33e958673949"
    },
    "aws-ai-mock-score": {
        title: "【2026年版】AWS AI PractitionerのUdemy模試は何％取れば受けていい？",
        url: "https://note.com/ponpoko_0803/n/n286d9dbbfb7d"
    },
    // AI-900 / AI-901
    "ai900-10hours": {
        title: "AI-900は10時間で合格できる？短期合格者を調べた結果",
        url: "https://note.com/ponpoko_0803/n/nf00a96454e0d"
    },
    "ai900-related-az900": {
        title: "AZ-900は3時間で合格できる？短期合格者を調べた結果",
        url: "https://note.com/ponpoko_0803/n/n81fdfb0d57b7"
    },
    "ai900-related-sc900": {
        title: "SC-900は3時間で合格できる？短期合格者を調べた結果",
        url: "https://note.com/ponpoko_0803/n/nd913909be874"
    },
    // AZ-900
    "az900-3hours": {
        title: "AZ-900は3時間で合格できる？短期合格者を調べた結果",
        url: "https://note.com/ponpoko_0803/n/n81fdfb0d57b7"
    },
    "az900-udemy": {
        title: "【2026年版】AZ-900対策におすすめのUdemy講座5選",
        url: "https://note.com/ponpoko_0803/n/nb52e39f139da"
    },
    "az900-related-sc900": {
        title: "SC-900は3時間で合格できる？短期合格者を調べた結果",
        url: "https://note.com/ponpoko_0803/n/nd913909be874"
    },
    // SC-900
    "sc900-3hours": {
        title: "SC-900は3時間で合格できる？短期合格者を調べた結果",
        url: "https://note.com/ponpoko_0803/n/nd913909be874"
    },
    "sc900-related-az900": {
        title: "AZ-900は3時間で合格できる？短期合格者を調べた結果",
        url: "https://note.com/ponpoko_0803/n/n81fdfb0d57b7"
    },
    "sc900-related-ai900": {
        title: "AI-900は10時間で合格できる？短期合格者を調べた結果",
        url: "https://note.com/ponpoko_0803/n/nf00a96454e0d"
    },
    // 生成AIパスポート
    "generative-ai-passport-20hours": {
        title: "【2026年版】生成AIパスポートは20時間前後で合格できる？短期合格者を比較",
        url: "https://note.com/ponpoko_0803/n/nf470c2200966"
    },
    "generative-ai-passport-udemy": {
        title: "【2026年版】生成AIパスポートのUdemy420問は初回60％でも間に合う？",
        url: "https://note.com/ponpoko_0803/n/n89b1a159dc9c"
    },
    "generative-ai-passport-chatgpt": {
        title: "【2026年版】ChatGPTやGeminiだけで生成AIパスポート対策するのは危険？",
        url: "https://note.com/ponpoko_0803/n/nc8fe80371765"
    },
    // LinuC
    "linuc-udemy": {
        title: "【2026年版】LinuC Level1対策におすすめのUdemy講座5選",
        url: "https://note.com/ponpoko_0803/n/n8d72c5a97d63"
    },
    "lpic-vs-linuc": {
        title: "LPICとLinuC、両方取る必要ある？",
        url: "https://note.com/ponpoko_0803/n/nc8ddd934b649"
    },
    "linuc-related-lpic": {
        title: "LPIC-1は2週間で取れる？短期合格者を調べた結果",
        url: "https://note.com/ponpoko_0803/n/n7b63485649b3"
    }
};
}),
"[project]/data/certifications.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "certBySlug",
    ()=>certBySlug,
    "certifications",
    ()=>certifications
]);
const certifications = [
    {
        slug: "lpic",
        name: "LPIC-1",
        category: "Linux",
        shortest: "最短2週間〜",
        summary: "101・102を約2週間で取得した短期合格例あり。Linux経験者ほど短期間で進めやすい。",
        steps: [
            {
                type: "product",
                productId: "lpic-udemy",
                title: "最短対策はこれ"
            }
        ],
        articleIds: [
            "lpic-2weeks",
            "lpic-vs-ccna",
            "lpic-vs-saa"
        ],
        nextCerts: [
            "ccna",
            "aws-saa"
        ],
        showCareerAd: true,
        enabled: true
    },
    {
        slug: "ccna",
        name: "CCNA",
        category: "Network",
        shortest: "最短10日〜",
        summary: "10日・約70〜80時間で合格した実例あり。短期なら問題演習とPacket Tracerを早めに回す。",
        steps: [
            {
                type: "product",
                productId: "ccna-udemy",
                title: "最短対策はこれ"
            }
        ],
        articleIds: [
            "ccna-10days",
            "ccna-udemy",
            "ccna-simulation"
        ],
        nextCerts: [
            "aws-saa"
        ],
        showCareerAd: true,
        enabled: true
    },
    {
        slug: "aws-clf",
        name: "AWS CLF",
        category: "AWS",
        shortest: "最短1週間〜",
        summary: "1週間・約13時間での合格例あり。IT基礎がある人なら問題演習中心で短期合格を狙える。",
        steps: [
            {
                type: "product",
                productId: "clf-udemy",
                title: "最短対策はこれ"
            }
        ],
        articleIds: [
            "aws-clf-1week",
            "aws-clf-difficulty",
            "aws-clf-skip"
        ],
        nextCerts: [
            "aws-saa"
        ],
        showCareerAd: false,
        enabled: true
    },
    {
        slug: "aws-saa",
        name: "AWS SAA",
        category: "AWS",
        shortest: "最短1日〜",
        summary: "AWS経験者では1日〜5日の短期合格例あり。基礎があるなら模擬試験中心で仕上げる。",
        steps: [
            {
                type: "product",
                productId: "saa-udemy",
                title: "最短対策はこれ"
            }
        ],
        articleIds: [
            "aws-saa-1day",
            "aws-saa-udemy",
            "aws-saa-mock-score"
        ],
        nextCerts: [
            "aws-ai"
        ],
        showCareerAd: true,
        enabled: true
    },
    {
        slug: "aws-ai",
        name: "AWS AI Practitioner",
        category: "AWS / AI",
        shortest: "最短10時間〜",
        summary: "約10時間で合格した実例あり。AWS・AIの基礎がある人ほど短期化しやすい。",
        steps: [
            {
                type: "product",
                productId: "aws-ai-udemy",
                title: "最短対策はこれ"
            }
        ],
        articleIds: [
            "aws-ai-10hours",
            "aws-ai-udemy-shortest",
            "aws-ai-mock-score"
        ],
        nextCerts: [
            "aws-saa"
        ],
        showCareerAd: false,
        enabled: true
    },
    {
        slug: "ai-900",
        name: "AI-900 → AI-901",
        category: "Azure / AI",
        shortest: "旧AI-900で約10時間〜",
        summary: "旧AI-900では約10時間の合格例あり。現在はAI-901へ移行しているため、現行範囲対応教材で対策する。",
        steps: [
            {
                type: "product",
                productId: "ai900-udemy",
                title: "現行AI-901対策"
            }
        ],
        articleIds: [
            "ai900-10hours",
            "ai900-related-az900",
            "ai900-related-sc900"
        ],
        nextCerts: [
            "az-900",
            "sc-900"
        ],
        showCareerAd: false,
        enabled: true
    },
    {
        slug: "az-900",
        name: "AZ-900",
        category: "Azure",
        shortest: "最短3時間〜",
        summary: "Microsoft資格の前提知識がある人では3時間合格例あり。問題演習中心で短期化しやすい。",
        steps: [
            {
                type: "product",
                productId: "az900-udemy",
                title: "最短対策はこれ"
            }
        ],
        articleIds: [
            "az900-3hours",
            "az900-udemy",
            "az900-related-sc900"
        ],
        nextCerts: [
            "ai-900",
            "sc-900"
        ],
        showCareerAd: false,
        enabled: true
    },
    {
        slug: "sc-900",
        name: "SC-900",
        category: "Security",
        shortest: "最短3時間〜",
        summary: "3時間・5時間・10時間の短期合格例あり。Microsoft資格経験者は問題演習中心で進めやすい。",
        steps: [
            {
                type: "product",
                productId: "sc900-udemy",
                title: "最短対策はこれ"
            }
        ],
        articleIds: [
            "sc900-3hours",
            "sc900-related-az900",
            "sc900-related-ai900"
        ],
        nextCerts: [
            "az-900"
        ],
        showCareerAd: false,
        enabled: true
    },
    {
        slug: "generative-ai-passport",
        name: "生成AIパスポート",
        category: "AI",
        shortest: "最短10〜20時間〜",
        summary: "約10〜15時間台の合格例あり。短期組ほど教材を増やさず、問題演習と弱点復習を重視している。",
        steps: [
            {
                type: "product",
                productId: "generative-ai-passport-udemy",
                title: "最短対策はこれ"
            }
        ],
        articleIds: [
            "generative-ai-passport-20hours",
            "generative-ai-passport-udemy",
            "generative-ai-passport-chatgpt"
        ],
        nextCerts: [
            "aws-ai",
            "ai-900"
        ],
        showCareerAd: false,
        enabled: true
    },
    {
        slug: "linuc-level1",
        name: "LinuC Level1",
        category: "Linux",
        shortest: "最短1〜2週間〜",
        summary: "101・102をまとめて進めるLinux資格。教材を1本に絞り、両試験を連続して進めたい人向け。",
        steps: [
            {
                type: "product",
                productId: "linuc-udemy",
                title: "101・102をまとめて対策"
            }
        ],
        articleIds: [
            "linuc-udemy",
            "lpic-vs-linuc",
            "linuc-related-lpic"
        ],
        nextCerts: [
            "lpic",
            "aws-saa"
        ],
        showCareerAd: false,
        enabled: true
    }
];
const certBySlug = Object.fromEntries(certifications.map((cert)=>[
        cert.slug,
        cert
    ]));
}),
"[project]/data/products.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "products",
    ()=>products
]);
const products = {
    "lpic-udemy": {
        name: "【LPIC1】Level1 (101-500/102-500)模擬試験問題集",
        type: "udemy",
        url: "https://trk.udemy.com/qWObx5",
        label: "Udemyで最短対策する",
        reason: "101・102を1本で対策できる模擬試験。短期間でLPIC-1を仕上げたい人向け。"
    },
    "ccna-udemy": {
        name: "【超絶入門】CCNA対策 Packet Tracerで学ぶ ハンズオン講座",
        type: "udemy",
        url: "https://trk.udemy.com/9VrKyy",
        label: "Udemyで最短対策する",
        reason: "短期合格者でもPacket Tracerを使った学習例あり。コマンド操作を重点的に対策したい人向け。"
    },
    "clf-udemy": {
        name: "【CLF-C02版】最多合格実績のAWS認定クラウドプラクティショナー模擬試験問題集（6回分390問）",
        type: "udemy",
        url: "https://trk.udemy.com/MKW6ro",
        label: "Udemyで最短対策する",
        reason: "1週間合格者でも利用例が確認できる模擬試験。問題演習中心でCLFを仕上げたい人向け。"
    },
    "saa-udemy": {
        name: "【SAA-C03版】AWS認定ソリューションアーキテクト アソシエイト模擬試験問題集（6回分390問）",
        type: "udemy",
        url: "https://trk.udemy.com/MKENqP",
        label: "Udemyで最短対策する",
        reason: "1日〜5日の短期合格例で利用が確認できる模擬試験。AWS基礎がある人の短期仕上げ向け。"
    },
    "aws-ai-udemy": {
        name: "【最新】AWS認定AIプラクティショナー試験突破講座＋模擬試験130問（2回分）付き！",
        type: "udemy",
        url: "https://trk.udemy.com/3kMBmA",
        label: "Udemyで最短対策する",
        reason: "AIF-C01の全体像を短時間でつかみ、早い段階で模擬試験へ移りたい人向け。"
    },
    "ai900-udemy": {
        name: "AI-901：Microsoft Azure AI Fundamentals 模擬問題集",
        type: "udemy",
        url: "https://trk.udemy.com/gRQdnv",
        label: "Udemyで最短対策する",
        reason: "旧AI-900短期合格者でもUdemy模試の利用例あり。現在のAI-901範囲を問題演習で確認する。"
    },
    "az900-udemy": {
        name: "【2026年版】AZ-900 Microsoft Azure Fundamentals模擬試験問題集（6回分420問）",
        type: "udemy",
        url: "https://trk.udemy.com/vDmZqj",
        label: "Udemyで最短対策する",
        reason: "短期合格者でもUdemy模試の利用例あり。問題演習中心でAZ-900を仕上げたい人向け。"
    },
    "sc900-udemy": {
        name: "SC-900: Microsoft セキュリティ、コンプライアンス、ID の基礎 模擬問題集",
        type: "udemy",
        url: "https://trk.udemy.com/QYx1Q9",
        label: "Udemyで最短対策する",
        reason: "5時間・10時間の短期合格例でもUdemy模試を利用。Microsoft資格経験者の短期仕上げ向け。"
    },
    "generative-ai-passport-udemy": {
        name: "■最新■生成AIパスポート試験対策演習420問【2026年シラバス対応】",
        type: "udemy",
        url: "https://trk.udemy.com/bkg6qm",
        label: "Udemyで最短対策する",
        reason: "420問を使って弱点を洗い出し、誤答だけを繰り返して短期間で仕上げたい人向け。"
    },
    "linuc-udemy": {
        name: "【ウズカレ式】『LinuC最短合格講義』の著者直伝！1週間でLPIC・LinuC（101+102）の全てを学べる講座",
        type: "udemy",
        url: "https://trk.udemy.com/6kzgJQ",
        label: "Udemyで最短対策する",
        reason: "101・102を1講座にまとめて学習。LinuC Level1を1本で進めたい人向け。"
    }
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__194nd4g._.js.map