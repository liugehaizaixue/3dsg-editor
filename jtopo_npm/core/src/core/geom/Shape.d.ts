import { PointLike, Vec2 } from '../jtopo_type';
export declare class Shape {
    className: any;
    /**
     * 单位点列表 x:[-0.5, 0.5] y: [-0.5, 0.5]
     */
    points: Array<PointLike>;
    /**
    * 是否封闭图形（最后一个点是否连接到第一个点形成封闭图形），默认true
    */
    isClosed: boolean;
    dirty: boolean;
    constructor(unitPoints: Array<PointLike>);
    toPojo(): any;
    static fromPojo(pojo: any): any;
    static fromPoints(points: Array<PointLike>, keepAspectRatio?: boolean): Shape;
    draw(projecitionPoints: Array<PointLike>, ctx: CanvasRenderingContext2D): void;
    rotate(angle: number): this;
    scale(sx: number, sy: number): this;
    skew(sx: number, sy: number): this;
    static pointToSize(shape: Shape, width: number, height: number, keepAspectRatio?: boolean): {
        x: number;
        y: number;
    }[];
    static Polygon(edgeCount?: number, initAngle?: number): Shape;
    static Scale(scaleX: any, scaleY: any): (p: any) => any;
    static Rotate(angle: any): (p: any) => any;
    /**
     * 菱形
     */
    static Damond: Shape;
    /**
     * 三角, 右朝向
     */
    static triangle(angle?: number): {
        x: number;
        y: number;
    }[];
    /**
     * 平行四边形（上面一条边向右倾斜）
     * @param beginX X偏移百分比
     */
    static parallelogram(beginX?: number): {
        x: number;
        y: number;
    }[];
    static tip(): {
        x: number;
        y: number;
    }[];
    /**
     * cos函数
     * @returns
     */
    static Cos(opt: {
        begin: number;
        end: number;
        step: number;
        pointCount?: number;
    }): Shape;
    static circle(opt: {
        begin: number;
        end: number;
        step: number;
        pointCount?: number;
    }): {
        x: number;
        y: number;
    }[];
    /**
     * 自定义函数来构
     * @param f
     * @returns
     */
    static fn(f: Function): Shape;
    /**
     * 生成网格坐标(外边框)
     * @param rows 行
     * @param cols 列
     * @returns 一维数组(单位坐标)
     */
    static outerGrid(rows: any, cols: any): any[];
    /**
     * 生成内网格坐标
     * @param rows 行
     * @param cols 列
     * @returns 一维数组
     */
    static innerGrid(rows: any, cols: any): any[];
    static ArrowShape: any;
    static RectShape: any;
}
/**
 * 箭头形状
 */
export declare class ArrowShape extends Shape {
    className: any;
    isClosed: any;
    constructor(unitPoints?: {
        x: number;
        y: number;
    }[]);
    draw(projecitionPoints: Array<PointLike>, ctx: CanvasRenderingContext2D): void;
}
/**
 * 矩形形状
 */
export declare class RectShape extends Shape {
    className: string;
    constructor(unitPoints?: {
        x: number;
        y: number;
    }[]);
    draw(projecitionPoints: Array<PointLike>, ctx: CanvasRenderingContext2D): void;
}
export declare const RectDefaultPositions: {};
/**
 * 每个位置的单位向量，以0，0为圆心
 * TODO: 当center的时候是0，0，是零向量，并不是单位向量
 */
export declare function getRectPositionDirection(name: string): Vec2;
/**
 * 获取相对于圆心的旋转角度
 */
export declare function getRectPositionRotate(name: string): number;
