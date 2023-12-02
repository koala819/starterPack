"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@react-aria+label@3.7.3_react@18.2.0";
exports.ids = ["vendor-chunks/@react-aria+label@3.7.3_react@18.2.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@react-aria+label@3.7.3_react@18.2.0/node_modules/@react-aria/label/dist/import.mjs":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@react-aria+label@3.7.3_react@18.2.0/node_modules/@react-aria/label/dist/import.mjs ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useField: () => (/* binding */ $2baaea4c71418dea$export$294aa081a6c6f55d),\n/* harmony export */   useLabel: () => (/* binding */ $d191a55c9702f145$export$8467354a121f1b9f)\n/* harmony export */ });\n/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-aria/utils */ \"(ssr)/./node_modules/.pnpm/@react-aria+utils@3.22.0_react@18.2.0/node_modules/@react-aria/utils/dist/import.mjs\");\n\n\n/*\n * Copyright 2020 Adobe. All rights reserved.\n * This file is licensed to you under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License. You may obtain a copy\n * of the License at http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software distributed under\n * the License is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS\n * OF ANY KIND, either express or implied. See the License for the specific language\n * governing permissions and limitations under the License.\n */ /*\n * Copyright 2021 Adobe. All rights reserved.\n * This file is licensed to you under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License. You may obtain a copy\n * of the License at http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software distributed under\n * the License is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS\n * OF ANY KIND, either express or implied. See the License for the specific language\n * governing permissions and limitations under the License.\n */ /*\n * Copyright 2020 Adobe. All rights reserved.\n * This file is licensed to you under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License. You may obtain a copy\n * of the License at http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software distributed under\n * the License is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS\n * OF ANY KIND, either express or implied. See the License for the specific language\n * governing permissions and limitations under the License.\n */ \nfunction $d191a55c9702f145$export$8467354a121f1b9f(props) {\n    let { id: id, label: label, \"aria-labelledby\": ariaLabelledby, \"aria-label\": ariaLabel, labelElementType: labelElementType = \"label\" } = props;\n    id = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.useId)(id);\n    let labelId = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.useId)();\n    let labelProps = {};\n    if (label) {\n        ariaLabelledby = ariaLabelledby ? `${labelId} ${ariaLabelledby}` : labelId;\n        labelProps = {\n            id: labelId,\n            htmlFor: labelElementType === \"label\" ? id : undefined\n        };\n    } else if (!ariaLabelledby && !ariaLabel) console.warn(\"If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility\");\n    let fieldProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.useLabels)({\n        id: id,\n        \"aria-label\": ariaLabel,\n        \"aria-labelledby\": ariaLabelledby\n    });\n    return {\n        labelProps: labelProps,\n        fieldProps: fieldProps\n    };\n}\n\n\n\nfunction $2baaea4c71418dea$export$294aa081a6c6f55d(props) {\n    let { description: description, errorMessage: errorMessage, isInvalid: isInvalid, validationState: validationState } = props;\n    let { labelProps: labelProps, fieldProps: fieldProps } = (0, $d191a55c9702f145$export$8467354a121f1b9f)(props);\n    let descriptionId = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.useSlotId)([\n        Boolean(description),\n        Boolean(errorMessage),\n        isInvalid,\n        validationState\n    ]);\n    let errorMessageId = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.useSlotId)([\n        Boolean(description),\n        Boolean(errorMessage),\n        isInvalid,\n        validationState\n    ]);\n    fieldProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.mergeProps)(fieldProps, {\n        \"aria-describedby\": [\n            descriptionId,\n            // Use aria-describedby for error message because aria-errormessage is unsupported using VoiceOver or NVDA. See https://github.com/adobe/react-spectrum/issues/1346#issuecomment-740136268\n            errorMessageId,\n            props[\"aria-describedby\"]\n        ].filter(Boolean).join(\" \") || undefined\n    });\n    return {\n        labelProps: labelProps,\n        fieldProps: fieldProps,\n        descriptionProps: {\n            id: descriptionId\n        },\n        errorMessageProps: {\n            id: errorMessageId\n        }\n    };\n}\n\n\n\n\n\n\n//# sourceMappingURL=module.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJlYWN0LWFyaWErbGFiZWxAMy43LjNfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS9sYWJlbC9kaXN0L2ltcG9ydC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVKOztBQUV2SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxpSUFBaUk7QUFDM0ksYUFBYSxvREFBWTtBQUN6QixzQkFBc0Isb0RBQVk7QUFDbEM7QUFDQTtBQUNBLDZDQUE2QyxTQUFTLEVBQUUsZUFBZTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTix5QkFBeUIsd0RBQWdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQSxVQUFVLCtHQUErRztBQUN6SCxVQUFVLGlEQUFpRDtBQUMzRCw0QkFBNEIsd0RBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsd0RBQWdCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIseURBQWlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1zSDtBQUN0SCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1zZXR1cC8uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYStsYWJlbEAzLjcuM19yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByZWFjdC1hcmlhL2xhYmVsL2Rpc3QvaW1wb3J0Lm1qcz9mNjlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU2xvdElkIGFzICRpRDdxMCR1c2VTbG90SWQsIG1lcmdlUHJvcHMgYXMgJGlEN3EwJG1lcmdlUHJvcHMsIHVzZUlkIGFzICRpRDdxMCR1c2VJZCwgdXNlTGFiZWxzIGFzICRpRDdxMCR1c2VMYWJlbHN9IGZyb20gXCJAcmVhY3QtYXJpYS91dGlsc1wiO1xuXG4vKlxuICogQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxuICogb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG4gKiBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbiAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi8gLypcbiAqIENvcHlyaWdodCAyMDIxIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovIC8qXG4gKiBDb3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG4gKiBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG4gKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbiAqIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqLyBcbmZ1bmN0aW9uICRkMTkxYTU1Yzk3MDJmMTQ1JGV4cG9ydCQ4NDY3MzU0YTEyMWYxYjlmKHByb3BzKSB7XG4gICAgbGV0IHsgaWQ6IGlkLCBsYWJlbDogbGFiZWwsIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGFyaWFMYWJlbGxlZGJ5LCBcImFyaWEtbGFiZWxcIjogYXJpYUxhYmVsLCBsYWJlbEVsZW1lbnRUeXBlOiBsYWJlbEVsZW1lbnRUeXBlID0gXCJsYWJlbFwiIH0gPSBwcm9wcztcbiAgICBpZCA9ICgwLCAkaUQ3cTAkdXNlSWQpKGlkKTtcbiAgICBsZXQgbGFiZWxJZCA9ICgwLCAkaUQ3cTAkdXNlSWQpKCk7XG4gICAgbGV0IGxhYmVsUHJvcHMgPSB7fTtcbiAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgYXJpYUxhYmVsbGVkYnkgPSBhcmlhTGFiZWxsZWRieSA/IGAke2xhYmVsSWR9ICR7YXJpYUxhYmVsbGVkYnl9YCA6IGxhYmVsSWQ7XG4gICAgICAgIGxhYmVsUHJvcHMgPSB7XG4gICAgICAgICAgICBpZDogbGFiZWxJZCxcbiAgICAgICAgICAgIGh0bWxGb3I6IGxhYmVsRWxlbWVudFR5cGUgPT09IFwibGFiZWxcIiA/IGlkIDogdW5kZWZpbmVkXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmICghYXJpYUxhYmVsbGVkYnkgJiYgIWFyaWFMYWJlbCkgY29uc29sZS53YXJuKFwiSWYgeW91IGRvIG5vdCBwcm92aWRlIGEgdmlzaWJsZSBsYWJlbCwgeW91IG11c3Qgc3BlY2lmeSBhbiBhcmlhLWxhYmVsIG9yIGFyaWEtbGFiZWxsZWRieSBhdHRyaWJ1dGUgZm9yIGFjY2Vzc2liaWxpdHlcIik7XG4gICAgbGV0IGZpZWxkUHJvcHMgPSAoMCwgJGlEN3EwJHVzZUxhYmVscykoe1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIFwiYXJpYS1sYWJlbFwiOiBhcmlhTGFiZWwsXG4gICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGFyaWFMYWJlbGxlZGJ5XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGFiZWxQcm9wczogbGFiZWxQcm9wcyxcbiAgICAgICAgZmllbGRQcm9wczogZmllbGRQcm9wc1xuICAgIH07XG59XG5cblxuXG5mdW5jdGlvbiAkMmJhYWVhNGM3MTQxOGRlYSRleHBvcnQkMjk0YWEwODFhNmM2ZjU1ZChwcm9wcykge1xuICAgIGxldCB7IGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiwgZXJyb3JNZXNzYWdlOiBlcnJvck1lc3NhZ2UsIGlzSW52YWxpZDogaXNJbnZhbGlkLCB2YWxpZGF0aW9uU3RhdGU6IHZhbGlkYXRpb25TdGF0ZSB9ID0gcHJvcHM7XG4gICAgbGV0IHsgbGFiZWxQcm9wczogbGFiZWxQcm9wcywgZmllbGRQcm9wczogZmllbGRQcm9wcyB9ID0gKDAsICRkMTkxYTU1Yzk3MDJmMTQ1JGV4cG9ydCQ4NDY3MzU0YTEyMWYxYjlmKShwcm9wcyk7XG4gICAgbGV0IGRlc2NyaXB0aW9uSWQgPSAoMCwgJGlEN3EwJHVzZVNsb3RJZCkoW1xuICAgICAgICBCb29sZWFuKGRlc2NyaXB0aW9uKSxcbiAgICAgICAgQm9vbGVhbihlcnJvck1lc3NhZ2UpLFxuICAgICAgICBpc0ludmFsaWQsXG4gICAgICAgIHZhbGlkYXRpb25TdGF0ZVxuICAgIF0pO1xuICAgIGxldCBlcnJvck1lc3NhZ2VJZCA9ICgwLCAkaUQ3cTAkdXNlU2xvdElkKShbXG4gICAgICAgIEJvb2xlYW4oZGVzY3JpcHRpb24pLFxuICAgICAgICBCb29sZWFuKGVycm9yTWVzc2FnZSksXG4gICAgICAgIGlzSW52YWxpZCxcbiAgICAgICAgdmFsaWRhdGlvblN0YXRlXG4gICAgXSk7XG4gICAgZmllbGRQcm9wcyA9ICgwLCAkaUQ3cTAkbWVyZ2VQcm9wcykoZmllbGRQcm9wcywge1xuICAgICAgICBcImFyaWEtZGVzY3JpYmVkYnlcIjogW1xuICAgICAgICAgICAgZGVzY3JpcHRpb25JZCxcbiAgICAgICAgICAgIC8vIFVzZSBhcmlhLWRlc2NyaWJlZGJ5IGZvciBlcnJvciBtZXNzYWdlIGJlY2F1c2UgYXJpYS1lcnJvcm1lc3NhZ2UgaXMgdW5zdXBwb3J0ZWQgdXNpbmcgVm9pY2VPdmVyIG9yIE5WREEuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYWRvYmUvcmVhY3Qtc3BlY3RydW0vaXNzdWVzLzEzNDYjaXNzdWVjb21tZW50LTc0MDEzNjI2OFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlSWQsXG4gICAgICAgICAgICBwcm9wc1tcImFyaWEtZGVzY3JpYmVkYnlcIl1cbiAgICAgICAgXS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIikgfHwgdW5kZWZpbmVkXG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGFiZWxQcm9wczogbGFiZWxQcm9wcyxcbiAgICAgICAgZmllbGRQcm9wczogZmllbGRQcm9wcyxcbiAgICAgICAgZGVzY3JpcHRpb25Qcm9wczoge1xuICAgICAgICAgICAgaWQ6IGRlc2NyaXB0aW9uSWRcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3JNZXNzYWdlUHJvcHM6IHtcbiAgICAgICAgICAgIGlkOiBlcnJvck1lc3NhZ2VJZFxuICAgICAgICB9XG4gICAgfTtcbn1cblxuXG5cblxuXG5leHBvcnQgeyQyYmFhZWE0YzcxNDE4ZGVhJGV4cG9ydCQyOTRhYTA4MWE2YzZmNTVkIGFzIHVzZUZpZWxkLCAkZDE5MWE1NWM5NzAyZjE0NSRleHBvcnQkODQ2NzM1NGExMjFmMWI5ZiBhcyB1c2VMYWJlbH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tb2R1bGUuanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@react-aria+label@3.7.3_react@18.2.0/node_modules/@react-aria/label/dist/import.mjs\n");

/***/ })

};
;