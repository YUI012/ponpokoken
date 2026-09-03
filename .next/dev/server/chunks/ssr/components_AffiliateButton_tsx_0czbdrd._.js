module.exports = [
"[project]/components/AffiliateButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AffiliateButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function AffiliateButton({ href, qualification, placement, children, variant = "primary" }) {
    const handleClick = (event)=>{
        if (!href || href.includes("example.com")) {
            event.preventDefault();
            alert(".env.local に実際のアフィリエイトURLを設定してください。");
            return;
        }
        const body = JSON.stringify({
            qualification,
            placement,
            href,
            path: window.location.pathname,
            ts: new Date().toISOString()
        });
        try {
            navigator.sendBeacon("/api/click", new Blob([
                body
            ], {
                type: "application/json"
            }));
        } catch  {
        // Tracking must never block the affiliate click.
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        className: `affiliateButton ${variant === "secondary" ? "secondary" : ""}`,
        href: href,
        target: "_blank",
        rel: "sponsored nofollow noopener noreferrer",
        onClick: handleClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: children
            }, void 0, false, {
                fileName: "[project]/components/AffiliateButton.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": "true",
                children: "↗"
            }, void 0, false, {
                fileName: "[project]/components/AffiliateButton.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AffiliateButton.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=components_AffiliateButton_tsx_0czbdrd._.js.map