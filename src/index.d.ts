declare const $: (element: string) => {
    on: (event: string, callback: (data: Event) => void) => void;
    off: (event?: string) => void;
    empty: () => void;
    remove: () => void;
    [key: string]: any;
};

export default $;