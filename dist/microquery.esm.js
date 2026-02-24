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

export { $ };
//# sourceMappingURL=microquery.esm.js.map
