(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.$ = {}));
})(this, (function (exports) { 'use strict';

    function $(element) {
        if (window && window.document) {
            const results = window.document.querySelectorAll(element);
            for (let result of results) {
                const listeners = {};
                result.on = (event, callback) => {
                    const listener = (data) => callback(data);
                    result.addEventListener(event, listener);
                    if (!listeners[event]) listeners[event] = [];
                    listeners[event].push({ type: event, listener });
                };

                result.off = (event) => {
                    const events = (event && listeners[event]) ? [event] : Object.keys(listeners);
                    events.forEach((event) => {
                        listeners[event].forEach((item) => {
                            result.removeEventListener(item.type, item.listener);
                        });
                    });
                };

                result.empty = () => result.innerHTML = '';
                result.remove = () => result.outerHTML = '';
            }
            return Object.assign({}, results[0], results);
        }
    }

    exports.$ = $;

}));
//# sourceMappingURL=microquery.umd.js.map
