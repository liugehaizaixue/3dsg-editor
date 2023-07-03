import { DisplayObject } from './DisplayObject';
import { PointLike, RectPosition } from './jtopo_type';
export type LinkTarget = Endpoint | DisplayObject | PointLike | Function;
/**
 * 端点基类，表示link连接对象上的具体位置（边框上还是中心等）
 *
 * 实例有：
 *
 * EndpointFixedPoint: 表示连接到一个固定的坐标(x,y)
 *
 * EndpointSegment: 表示连接到Node或Link的某一个线段上
 *
 * EndpointFixedName： 表示连接到Node或Link的某个 ’连接点上‘，如: 'center'、'ct'、'lm'
 *
 * EndpointNearest: 表示连接到Node的边框上
 *
 * EndpointFunction: 表示连接到一个函数上

```js

import {EndpointFixedPoint} from '@jtopo/core';

// 示例
link.setBegin({x: 10, y: 10});

// 等价于：
let endpoint = new EndpointFixedPoint(10, 10);
link.setBegin(endpoint);

let endpointBegin = link.begin;
console.log(endpointBegin.x); // => 10

```
 */
declare abstract class Endpoint {
    className: string;
    /**
     * 被连接的对象
     */
    target?: DisplayObject;
    isDisplayObjectTarget(): boolean;
    isNodeTarget(): any;
    isDisplayObjectId(): any;
    toPojo(): {
        className: string;
    } & this;
}
/**
 * 端点：表示连接到Node或Link的某一个线段上
```js
import {EndpointSegment} from '@jtopo/core';

// 示例
let endpoint = new EndpointSegment(link2, 0.5, 0);
link.setBegin(endpoint);

```
*/
declare class EndpointSegment extends Endpoint {
    t: number;
    segIndex: number;
    /**
     * 被连接的对象
     */
    target: DisplayObject;
    constructor(target: DisplayObject, t: number, segIndex?: number);
}
/**
 * 端点：以节点上某个位置名字来定位
```js
import {EndpointFixedName} from '@jtopo/core';

// 示例
let endpoint = new EndpointFixedName(node, 'ct');
link.setBegin(endpoint);

等价于:
link.setBegin(node, 'ct');

```
*/
declare class EndpointFixedName extends Endpoint {
    name: RectPosition;
    /**
     * 被连接的对象
     */
    target: DisplayObject;
    constructor(target: DisplayObject, name: RectPosition);
    getAngle(): number;
    /**
     * 获取朝向中心的向量
     */
    getVec(): number[];
}
/**
 * 端点：以两个对象之间最短距离来定位
```js
import {EndpointNearest} from '@jtopo/core';

// 示例
let endpoint = new EndpointNearest(node);
link.setBegin(endpoint);

等价于:
link.setBegin(node, 'nearest');

```
*/
declare class EndpointNearest extends Endpoint {
    /**
     * 被连接的对象
     */
    target: DisplayObject;
    constructor(target: DisplayObject);
    /**
     *
     * @param p 边框上的交点
     * @returns
     */
    getAngle(p: PointLike): number;
}
/**
 * 端点: 固定的一个坐标值
```js
import {EndpointFixedPoint} from '@jtopo/core';

// 示例
let endpoint = new EndpointNearest(12, 20);
link.setBegin(endpoint);

等价于:
link.setBegin({x:12, y:20});
```
*/
declare class EndpointFixedPoint extends Endpoint {
    x: number;
    y: number;
    constructor(x: number, y: number);
}
/**
 * 端点：函数
*/
declare class EndpointFunction extends Endpoint {
    fn: Function;
    constructor(fn: Function);
}
declare function newEndpoint(target: LinkTarget, positionName?: Endpoint | string): Endpoint;
export declare function getEndpointNormal(endpoint: any): any;
export { Endpoint, EndpointFixedPoint, EndpointFixedName, EndpointNearest, EndpointSegment, EndpointFunction, newEndpoint };
