"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@nextui-org+use-scroll-position@2.0.4_react@18.2.0";
exports.ids = ["vendor-chunks/@nextui-org+use-scroll-position@2.0.4_react@18.2.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@nextui-org+use-scroll-position@2.0.4_react@18.2.0/node_modules/@nextui-org/use-scroll-position/dist/index.mjs":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@nextui-org+use-scroll-position@2.0.4_react@18.2.0/node_modules/@nextui-org/use-scroll-position/dist/index.mjs ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useScrollPosition: () => (/* binding */ useScrollPosition)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@13.5.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n// src/index.ts\n\nvar isBrowser = typeof window !== \"undefined\";\nfunction getScrollPosition(element) {\n  if (!isBrowser)\n    return { x: 0, y: 0 };\n  if (!element) {\n    return { x: window.scrollX, y: window.scrollY };\n  }\n  return { x: element.scrollLeft, y: element.scrollTop };\n}\nvar useScrollPosition = (props) => {\n  const { elementRef, delay = 30, callback, isEnabled } = props;\n  const position = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(\n    isEnabled ? getScrollPosition(elementRef == null ? void 0 : elementRef.current) : { x: 0, y: 0 }\n  );\n  let throttleTimeout = null;\n  const handler = () => {\n    const currPos = getScrollPosition(elementRef == null ? void 0 : elementRef.current);\n    if (typeof callback === \"function\") {\n      callback({ prevPos: position.current, currPos });\n    }\n    position.current = currPos;\n    throttleTimeout = null;\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (!isEnabled)\n      return;\n    const handleScroll = () => {\n      if (delay) {\n        if (throttleTimeout === null) {\n          throttleTimeout = setTimeout(handler, delay);\n        }\n      } else {\n        handler();\n      }\n    };\n    const target = (elementRef == null ? void 0 : elementRef.current) || window;\n    target.addEventListener(\"scroll\", handleScroll);\n    return () => target.removeEventListener(\"scroll\", handleScroll);\n  }, [elementRef == null ? void 0 : elementRef.current, delay, isEnabled]);\n  return position.current;\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQG5leHR1aS1vcmcrdXNlLXNjcm9sbC1wb3NpdGlvbkAyLjAuNF9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0BuZXh0dWktb3JnL3VzZS1zY3JvbGwtcG9zaXRpb24vZGlzdC9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUMwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFVBQVUsOENBQThDO0FBQ3hELG1CQUFtQiw2Q0FBTTtBQUN6Qix3RkFBd0Y7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixvQ0FBb0M7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGdEQUFTO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFHRSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1zZXR1cC8uL25vZGVfbW9kdWxlcy8ucG5wbS9AbmV4dHVpLW9yZyt1c2Utc2Nyb2xsLXBvc2l0aW9uQDIuMC40X3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQG5leHR1aS1vcmcvdXNlLXNjcm9sbC1wb3NpdGlvbi9kaXN0L2luZGV4Lm1qcz9jMWE3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9pbmRleC50c1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbnZhciBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiO1xuZnVuY3Rpb24gZ2V0U2Nyb2xsUG9zaXRpb24oZWxlbWVudCkge1xuICBpZiAoIWlzQnJvd3NlcilcbiAgICByZXR1cm4geyB4OiAwLCB5OiAwIH07XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybiB7IHg6IHdpbmRvdy5zY3JvbGxYLCB5OiB3aW5kb3cuc2Nyb2xsWSB9O1xuICB9XG4gIHJldHVybiB7IHg6IGVsZW1lbnQuc2Nyb2xsTGVmdCwgeTogZWxlbWVudC5zY3JvbGxUb3AgfTtcbn1cbnZhciB1c2VTY3JvbGxQb3NpdGlvbiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGVsZW1lbnRSZWYsIGRlbGF5ID0gMzAsIGNhbGxiYWNrLCBpc0VuYWJsZWQgfSA9IHByb3BzO1xuICBjb25zdCBwb3NpdGlvbiA9IHVzZVJlZihcbiAgICBpc0VuYWJsZWQgPyBnZXRTY3JvbGxQb3NpdGlvbihlbGVtZW50UmVmID09IG51bGwgPyB2b2lkIDAgOiBlbGVtZW50UmVmLmN1cnJlbnQpIDogeyB4OiAwLCB5OiAwIH1cbiAgKTtcbiAgbGV0IHRocm90dGxlVGltZW91dCA9IG51bGw7XG4gIGNvbnN0IGhhbmRsZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY3VyclBvcyA9IGdldFNjcm9sbFBvc2l0aW9uKGVsZW1lbnRSZWYgPT0gbnVsbCA/IHZvaWQgMCA6IGVsZW1lbnRSZWYuY3VycmVudCk7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBjYWxsYmFjayh7IHByZXZQb3M6IHBvc2l0aW9uLmN1cnJlbnQsIGN1cnJQb3MgfSk7XG4gICAgfVxuICAgIHBvc2l0aW9uLmN1cnJlbnQgPSBjdXJyUG9zO1xuICAgIHRocm90dGxlVGltZW91dCA9IG51bGw7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc0VuYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgaWYgKGRlbGF5KSB7XG4gICAgICAgIGlmICh0aHJvdHRsZVRpbWVvdXQgPT09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdHRsZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGhhbmRsZXIsIGRlbGF5KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGFuZGxlcigpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgdGFyZ2V0ID0gKGVsZW1lbnRSZWYgPT0gbnVsbCA/IHZvaWQgMCA6IGVsZW1lbnRSZWYuY3VycmVudCkgfHwgd2luZG93O1xuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gICAgcmV0dXJuICgpID0+IHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gIH0sIFtlbGVtZW50UmVmID09IG51bGwgPyB2b2lkIDAgOiBlbGVtZW50UmVmLmN1cnJlbnQsIGRlbGF5LCBpc0VuYWJsZWRdKTtcbiAgcmV0dXJuIHBvc2l0aW9uLmN1cnJlbnQ7XG59O1xuZXhwb3J0IHtcbiAgdXNlU2Nyb2xsUG9zaXRpb25cbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@nextui-org+use-scroll-position@2.0.4_react@18.2.0/node_modules/@nextui-org/use-scroll-position/dist/index.mjs\n");

/***/ })

};
;