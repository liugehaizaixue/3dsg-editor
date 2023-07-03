import { Layer } from "./Layer";
import Stage from "./Stage";
export declare class RenderSystem {
    requestTimer: number;
    stage: Stage;
    timeline: {
        currentTime: number;
    };
    constructor(stage: Stage);
    _tickLayer(layer: Layer, time: number): void;
    pause(): void;
    start(): void;
}
