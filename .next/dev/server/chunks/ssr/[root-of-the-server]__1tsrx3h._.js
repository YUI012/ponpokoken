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
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Header.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductButton$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProductButton.js [app-rsc] (ecmascript)");
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
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$certifications$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["certifications"].filter((cert)=>cert.enabled).map((cert)=>({
            slug: cert.slug
        }));
}
async function generateMetadata({ params }) {
    const { slug } = await params;
    const cert = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$certifications$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["certBySlug"][slug];
    if (!cert) return {};
    return {
        title: `${cert.name}は最短${cert.shortest}｜合格時間と教材`,
        description: `${cert.name}の最短合格目安は${cert.shortest}。最短で進めるUdemy教材と、詳しい根拠をまとめたnoteへの導線を掲載しています。`
    };
}
async function CertificationPage({ params }) {
    const { slug } = await params;
    const cert = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$certifications$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["certBySlug"][slug];
    if (!cert || !cert.enabled) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const certProducts = (cert.productIds || []).map((id)=>__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["products"][id]).filter(Boolean);
    const primaryProduct = certProducts[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "certPage",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/[slug]/page.js",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "hero compact shell certHero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "back",
                        href: "/",
                        children: "← 資格一覧"
                    }, void 0, false, {
                        fileName: "[project]/app/[slug]/page.js",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "overline",
                        children: [
                            cert.category,
                            " / SHORTEST TIME"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[slug]/page.js",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: cert.name
                    }, void 0, false, {
                        fileName: "[project]/app/[slug]/page.js",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "timeHero",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "最短合格目安"
                            }, void 0, false, {
                                fileName: "[project]/app/[slug]/page.js",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: cert.shortest
                            }, void 0, false, {
                                fileName: "[project]/app/[slug]/page.js",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[slug]/page.js",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "heroText",
                        children: cert.summary
                    }, void 0, false, {
                        fileName: "[project]/app/[slug]/page.js",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    primaryProduct && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "heroCta",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductButton$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                product: primaryProduct,
                                certName: cert.name
                            }, void 0, false, {
                                fileName: "[project]/app/[slug]/page.js",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "ctaSub",
                                children: "教材を探し回らず、まず1つに絞って始める。"
                            }, void 0, false, {
                                fileName: "[project]/app/[slug]/page.js",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[slug]/page.js",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/[slug]/page.js",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            certProducts.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "shell routeSection",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "sectionTitle",
                        children: "教材"
                    }, void 0, false, {
                        fileName: "[project]/app/[slug]/page.js",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "productList",
                        children: certProducts.map((product, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "productRow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "productNo",
                                                children: String(index + 1).padStart(2, "0")
                                            }, void 0, false, {
                                                fileName: "[project]/app/[slug]/page.js",
                                                lineNumber: 63,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: product.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/[slug]/page.js",
                                                lineNumber: 64,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: product.reason
                                            }, void 0, false, {
                                                fileName: "[project]/app/[slug]/page.js",
                                                lineNumber: 65,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[slug]/page.js",
                                        lineNumber: 62,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductButton$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        product: product,
                                        certName: cert.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/[slug]/page.js",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, product.name, true, {
                                fileName: "[project]/app/[slug]/page.js",
                                lineNumber: 61,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/[slug]/page.js",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/[slug]/page.js",
                lineNumber: 57,
                columnNumber: 9
            }, this),
            cert.articleIds.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "shell detailSection noteSection",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "sectionTitle",
                        children: "この時間の根拠を見る"
                    }, void 0, false, {
                        fileName: "[project]/app/[slug]/page.js",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "sectionLead",
                        children: "短期合格者の事例・勉強時間・比較はnoteにまとめています。"
                    }, void 0, false, {
                        fileName: "[project]/app/[slug]/page.js",
                        lineNumber: 77,
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
                                        lineNumber: 84,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "↗"
                                    }, void 0, false, {
                                        fileName: "[project]/app/[slug]/page.js",
                                        lineNumber: 84,
                                        columnNumber: 47
                                    }, this)
                                ]
                            }, id, true, {
                                fileName: "[project]/app/[slug]/page.js",
                                lineNumber: 83,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/[slug]/page.js",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/[slug]/page.js",
                lineNumber: 75,
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
                        lineNumber: 94,
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
                                    lineNumber: 100,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        next.shortest,
                                        " →"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/[slug]/page.js",
                                    lineNumber: 100,
                                    columnNumber: 41
                                }, this)
                            ]
                        }, next.slug, true, {
                            fileName: "[project]/app/[slug]/page.js",
                            lineNumber: 99,
                            columnNumber: 15
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/app/[slug]/page.js",
                lineNumber: 93,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "shell disclosure",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "PR"
                    }, void 0, false, {
                        fileName: "[project]/app/[slug]/page.js",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "このページにはアフィリエイト広告が含まれます。"
                    }, void 0, false, {
                        fileName: "[project]/app/[slug]/page.js",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/[slug]/page.js",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "footer shell",
                children: "© 2026 ponpokoken.com"
            }, void 0, false, {
                fileName: "[project]/app/[slug]/page.js",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            primaryProduct && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mobileStickyCta",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductButton$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    product: primaryProduct,
                    certName: cert.name,
                    sticky: true
                }, void 0, false, {
                    fileName: "[project]/app/[slug]/page.js",
                    lineNumber: 116,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[slug]/page.js",
                lineNumber: 115,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/[slug]/page.js",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/[slug]/page.js [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/[slug]/page.js [app-rsc] (ecmascript)"));
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
                children: "資格最短"
            }, void 0, false, {
                fileName: "[project]/components/Header.js",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "tagline",
                children: "何時間で取れる？"
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
function ProductButton({ product, certName, sticky = false }) {
    if (!product) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        className: sticky ? "buyButton stickyBuyButton" : "buyButton",
        href: product.url,
        target: "_blank",
        rel: "sponsored nofollow noreferrer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: "PR・Udemy"
                    }, void 0, false, {
                        fileName: "[project]/components/ProductButton.js",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    certName ? `${certName}の最短教材を見る` : product.label
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProductButton.js",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                children: "→"
            }, void 0, false, {
                fileName: "[project]/components/ProductButton.js",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProductButton.js",
        lineNumber: 5,
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
    "lpic-2weeks": {
        title: "LPIC-1は2週間で取れる？短期合格者を調べた結果",
        url: "https://note.com/ponpoko_0803"
    },
    "lpic101-hours": {
        title: "LPIC101は何時間必要？",
        url: "https://note.com/ponpoko_0803"
    },
    "lpic102-shortest": {
        title: "LPIC102の最短合格ルート",
        url: "https://note.com/ponpoko_0803"
    },
    "ccna-shortest": {
        title: "CCNAは10日で合格できる？短期合格者を調べた結果",
        url: "https://note.com/ponpoko_0803"
    },
    "saa-shortest": {
        title: "AWS SAAは短期間で合格できる？",
        url: "https://note.com/ponpoko_0803"
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
        shortest: "2週間〜",
        summary: "Linux資格を短期間で取りたい人向け。教材を増やしすぎず、101→102の順で進む。",
        productIds: [
            "lpic101-udemy",
            "lpic102-udemy"
        ],
        articleIds: [
            "lpic-2weeks",
            "lpic101-hours",
            "lpic102-shortest"
        ],
        nextCerts: [
            "aws-saa",
            "ccna"
        ],
        enabled: true
    },
    {
        slug: "ccna",
        name: "CCNA",
        category: "Network",
        shortest: "10日〜",
        summary: "ネットワーク資格を短期間で取りたい人向け。教材を1つに絞って、短期合格を狙う。",
        productIds: [
            "ccna-udemy"
        ],
        articleIds: [
            "ccna-shortest"
        ],
        nextCerts: [
            "aws-saa"
        ],
        enabled: true
    },
    {
        slug: "aws-saa",
        name: "AWS SAA",
        category: "AWS",
        shortest: "1〜2週間〜",
        summary: "AWSの定番資格。最短合格を狙うなら教材を1つに絞って進める。",
        productIds: [
            "saa-udemy"
        ],
        articleIds: [
            "saa-shortest"
        ],
        nextCerts: [],
        enabled: true
    },
    {
        slug: "az-900",
        name: "AZ-900",
        category: "Azure",
        shortest: "3時間〜",
        summary: "Azure入門資格を最短で。短時間で全体像をつかんで合格を狙う。",
        productIds: [
            "az900-udemy"
        ],
        articleIds: [],
        nextCerts: [],
        enabled: true
    },
    {
        slug: "linuc-level1",
        name: "LinuC Level1",
        category: "Linux",
        shortest: "1〜2週間〜",
        summary: "LinuC Level1を短期間で取りたい人向け。",
        productIds: [],
        articleIds: [],
        nextCerts: [
            "aws-saa"
        ],
        enabled: true
    },
    {
        slug: "aws-clf",
        name: "AWS CLF",
        category: "AWS",
        shortest: "1日〜",
        summary: "AWS入門資格を短期間で取りたい人向け。",
        productIds: [],
        articleIds: [],
        nextCerts: [
            "aws-saa"
        ],
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
    "lpic101-udemy": {
        name: "LPIC 101 対策講座",
        type: "udemy",
        url: "YOUR_IMPACT_UDEMY_LINK_LPIC101",
        label: "Udemyで見る",
        reason: "最初のインプット用。全体像を掴んでから問題演習へ進む。"
    },
    "lpic102-udemy": {
        name: "LPIC 102 対策講座",
        type: "udemy",
        url: "YOUR_IMPACT_UDEMY_LINK_LPIC102",
        label: "Udemyで見る",
        reason: "101合格後、そのまま102へ進むためのインプット用。"
    },
    "saa-udemy": {
        name: "AWS SAA 対策講座",
        type: "udemy",
        url: "YOUR_IMPACT_UDEMY_LINK_SAA",
        label: "Udemyで見る",
        reason: "Linuxの次にクラウドへ広げたい人向け。"
    },
    "ccna-udemy": {
        name: "CCNA 対策講座",
        type: "udemy",
        url: "YOUR_IMPACT_UDEMY_LINK_CCNA",
        label: "Udemyで見る",
        reason: "ネットワーク基礎を短期で固めるためのインプット用。"
    },
    "az900-udemy": {
        name: "AZ-900 対策講座",
        type: "udemy",
        url: "YOUR_IMPACT_UDEMY_LINK_AZ900",
        label: "Udemyで見る",
        reason: "Azure入門を短時間で終わらせたい人向け。"
    }
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1tsrx3h._.js.map