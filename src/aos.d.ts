declare module 'aos' {
    export function init(options?: {
        duration?: number;
        delay?: number;
        easing?: string;
        once?: boolean;
        mirror?: boolean;
        anchorPlacement?: string;
    }): void;
}
