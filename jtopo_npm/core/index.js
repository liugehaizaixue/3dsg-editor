const wt = nx;
function nx(n, x) {
  const t = Yx();
  return nx = function(e, s) {
    return e = e - 378, t[e];
  }, nx(n, x);
}
(function(n, x) {
  const t = nx, e = n();
  for (; []; )
    try {
      if (-parseInt(t(380)) / 1 * (parseInt(t(381)) / 2) + parseInt(t(390)) / 3 + parseInt(t(388)) / 4 + parseInt(t(389)) / 5 + parseInt(t(379)) / 6 + -parseInt(t(386)) / 7 * (-parseInt(t(378)) / 8) + -parseInt(t(391)) / 9 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Yx, 332582);
function s1(n, x, t) {
  return n[0] = x[0] + t[0], n[1] = x[1] + t[1], n;
}
function yi(n, x, t) {
  return n[0] = x[0] * t, n[1] = x[1] * t, n;
}
function i1(n, x, t) {
  return n[0] = x[0] * t, n[1] = x[1] * t, n;
}
function Yx() {
  const n = ["576800uGnYSM", "1630015kabbdv", "360297WDOfZb", "7043166uqLyXx", "projection", "dot", "584yradWk", "2513616WwZGbf", "17393Pzrymc", "62VkvEuX", "scale", "normalize", "sqrt", "add", "61859WaLdzV", "negate"];
  return Yx = function() {
    return n;
  }, Yx();
}
function r1(n, x) {
  return n[0] = -x[0], n[1] = -x[1], n;
}
function a1(n, x) {
  let t = Math.sqrt(x[0] * x[0] + x[1] * x[1]);
  return t == 0 ? (n[0] = 0, n[0] = 0, n) : (n[0] = x[0] / t, n[1] = x[1] / t, n);
}
function o1(n) {
  return Math[nx(384)](n[0] * n[0] + n[1] * n[1]);
}
function gi(n, x) {
  return n[0] * x[0] + n[1] * x[1];
}
function c1(n, x, t) {
  let e = gi(x, t);
  return yi(n, t, e), n;
}
class z {
}
z.multiplyC = yi, z[wt(382)] = i1, z.len = o1, z[wt(387)] = r1, z[wt(385)] = s1, z[wt(383)] = a1, z[wt(393)] = gi, z[wt(392)] = c1;
const Q = Ux;
(function(n, x) {
  const t = Ux, e = n();
  for (; []; )
    try {
      if (parseInt(t(211)) / 1 * (parseInt(t(188)) / 2) + -parseInt(t(192)) / 3 + -parseInt(t(187)) / 4 + -parseInt(t(193)) / 5 + parseInt(t(216)) / 6 * (parseInt(t(189)) / 7) + parseInt(t(196)) / 8 * (-parseInt(t(199)) / 9) + parseInt(t(181)) / 10 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Vx, 187074);
function Vx() {
  const n = ["forward", "createPoints", "185298IGevuL", "getAngle", "log", "5533460AqvJun", "createPoints2", "concat", "isLikePoint", "betweenPoints", "rotatePoint", "434020SDdecV", "17828MBEfiT", "77iChwBD", "abs", "middle", "359298pQAEDZ", "1310615LyFOKm", "distance", "cos", "8vDAkik", "length", "sin", "3304161ImaeRd", "sqrt", "assert error betweenPoints", "scale", "points.length < 2", "atan2", "push", "between", "countPointsDistance", "normalize", "distancePoint", "offsetWithAngle", "17xQTMDr", "keys", "looksSame"];
  return Vx = function() {
    return n;
  }, Vx();
}
function Ux(n, x) {
  const t = Vx();
  return Ux = function(e, s) {
    return e = e - 181, t[e];
  }, Ux(n, x);
}
class A {
  constructor(x = 0, t = 0) {
    this.x = x, this.y = t;
  }
  toPojo() {
    return { x: this.x, y: this.y };
  }
  static [Q(184)](x) {
    const t = Q;
    return x instanceof A ? !![] : Object[t(212)](x)[t(197)] == 2 && x.x != null && x.y != null;
  }
  static [Q(213)](x, t, e) {
    const s = Q;
    if (x === t)
      return !![];
    let i = Math.abs(t.x - x.x), r = Math[s(190)](t.y - x.y);
    return e == null && (e = 0.01), i < e && r < e;
  }
  static [Q(191)](x, t) {
    return { x: (t.x + x.x) / 2, y: (t.y + x.y) / 2 };
  }
  static [Q(217)](x, t) {
    return Math[Q(204)](t.y - x.y, t.x - x.x);
  }
  static rotate(x, t, e, s, i) {
    const r = Q;
    return { x: (x - e) * Math[r(195)](i) - (t - s) * Math[r(198)](i) + e, y: (x - e) * Math[r(198)](i) + (t - s) * Math[r(195)](i) + s };
  }
  static [Q(186)](x, t, e) {
    const s = Q;
    return { x: (x.x - t.x) * Math[s(195)](e) - (x.y - t.y) * Math[s(198)](e) + t.x, y: (x.x - t.x) * Math[s(198)](e) + (x.y - t.y) * Math[s(195)](e) + t.y };
  }
  static [Q(194)](x, t, e, s) {
    const i = Q;
    let r = e - x, a = s - t;
    return Math[i(200)](r * r + a * a);
  }
  static [Q(209)](x, t) {
    const e = Q;
    let s = t.x - x.x, i = t.y - x.y;
    return Math[e(200)](s * s + i * i);
  }
  static mergePoints(x) {
    const t = Q;
    let e = [x[0]];
    for (let s = 1; s < x[t(197)] - 1; s++) {
      let i = e[e[t(197)] - 1], r = x[s], a = x[s + 1];
      if (r.x === a.x && r.y === a.y)
        continue;
      let o = z[t(208)]([], [r.x - i.x, r.y - i.y]), c = z[t(208)]([], [a.x - r.x, a.y - r.y]);
      Math[t(190)](o[0] - c[0]) < 0.01 && Math[t(190)](o[1] - c[1]) < 0.01 || e[t(205)](r);
    }
    return e[t(205)](x[x[t(197)] - 1]), e;
  }
  static extend(x, t, e) {
    const s = Q, i = [t.x - x.x, t.y - x.y];
    return z[s(208)](i, i), z[s(202)](i, i, e), { x: x.x + i[0], y: x.y + i[1] };
  }
  static [Q(214)](x, t, e) {
    const s = Q;
    let i = Math[s(204)](t.y - x.y, t.x - x.x);
    return { x: x.x + e * Math[s(195)](i), y: x.y + e * Math[s(198)](i) };
  }
  static [Q(210)](x, t, e) {
    const s = Q;
    return typeof e == "number" && (e = { x: Math[s(195)](t) * e, y: Math[s(198)](t) * e }), { x: x.x + e.x, y: x.y + e.y };
  }
  static createPoints(x, t, e = 1, s = ![]) {
    const i = Q, r = s ? [x] : [], a = s ? e - 1 : e;
    let o = x;
    for (var c = 0; c < a; c++) {
      const h = { x: o.x + t[0], y: o.y + t[1] };
      r[i(205)](h), o = h;
    }
    return r;
  }
  static [Q(182)](x, t, e) {
    const s = Q;
    if (e == 0)
      return [];
    const i = [-t[0], -t[1]];
    if (e % 2 == 0) {
      const o = [t[0] / 2, t[1] / 2], c = { x: x.x - o[0], y: x.y - o[1] }, h = { x: x.x + o[0], y: x.y + o[1] }, l = A[s(215)](c, i, e / 2, !![]), f = A.createPoints(h, t, e / 2, !![]);
      return l[s(183)](f);
    }
    const r = A[s(215)](x, i, (e - 1) / 2 + 1, !![]), a = A[s(215)](x, t, (e - 1) / 2, ![]);
    return r[s(183)](a);
  }
  static [Q(206)](x, t, e, s = 0) {
    const i = Q;
    let r = (1 - e) * x.x, a = (1 - e) * x.y, o = e * t.x, c = e * t.y, h = { x: r + o, y: a + c };
    if (s != null && s != 0) {
      let l = Math[i(204)](t.y - x.y, t.x - x.x);
      h = { x: h.x + s * Math.cos(l), y: h.y + s * Math[i(198)](l) };
    }
    return h;
  }
  static countPointsDistance(x) {
    const t = Q;
    let e = x[t(197)];
    if (e < 2)
      throw new Error("points.length < 2");
    let s = x[0], i = x[e - 1];
    if (x.length == 2)
      return A[t(209)](s, i);
    let r = 0;
    for (var a = 1; a < e; a++)
      r += A[t(209)](x[a - 1], x[a]);
    return r;
  }
  static [Q(185)](x, t, e) {
    const s = Q;
    let i = x[s(197)];
    if (x[s(197)] < 2)
      throw new Error(s(203));
    let r = x[0], a = x[x[s(197)] - 1];
    if (x[s(197)] == 2)
      return A[s(206)](r, a, t, e);
    if (t < 0)
      return A[s(206)](x[0], x[1], t, e);
    if (t > 1)
      return A[s(206)](x[x[s(197)] - 2], x[x.length - 1], t, e);
    let o = A[s(207)](x), c = o * t, h = 0;
    for (var l = 1; l < i; l++) {
      let f = A[s(209)](x[l - 1], x[l]);
      if (c >= h && c <= h + f) {
        let y = c - h, _ = y / f;
        return A[s(206)](x[l - 1], x[l], _, e);
      }
      h += f;
    }
    throw console[s(218)](x, t), new Error(s(201));
  }
}
const e0 = sx;
(function(n, x) {
  const t = sx, e = n();
  for (; []; )
    try {
      if (parseInt(t(287)) / 1 + parseInt(t(284)) / 2 + parseInt(t(303)) / 3 * (-parseInt(t(286)) / 4) + -parseInt(t(319)) / 5 * (-parseInt(t(282)) / 6) + parseInt(t(292)) / 7 * (parseInt(t(295)) / 8) + -parseInt(t(327)) / 9 * (parseInt(t(293)) / 10) + -parseInt(t(314)) / 11 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Kx, 390774);
class as {
  constructor(x) {
    const t = sx;
    this.m = x && x[t(312)]() || [1, 0, 0, 1, 0, 0];
  }
  [e0(326)]() {
    return new as(this.m);
  }
  identity() {
    this.m = [1, 0, 0, 1, 0, 0];
  }
  transform(x, t, e, s, i, r) {
    this.m[0] = x, this.m[1] = t, this.m[2] = e, this.m[3] = s, this.m[4] = i, this.m[5] = r;
  }
  [e0(291)](x) {
    let t = this.m;
    return { x: t[0] * x.x + t[2] * x.y + t[4], y: t[3] * x.y + t[1] * x.x + t[5] };
  }
  [e0(321)](x, t) {
    let e = this.m;
    return { x: e[0] * x + e[2] * t, y: e[3] * t + e[1] * x };
  }
  points(x) {
    const t = e0;
    let e = [];
    for (var s = 0; s < x[t(301)]; s++) {
      let i = x[s];
      e[t(294)](this[t(291)](i));
    }
    return e;
  }
  [e0(308)](x, t) {
    return this.m[4] += this.m[0] * x + this.m[2] * t, this.m[5] += this.m[1] * x + this.m[3] * t, this;
  }
  [e0(299)](x, t) {
    return this.m[4] = x, this.m[5] = t, this;
  }
  [e0(300)](x, t) {
    return this.m[0] *= x, this.m[1] *= x, this.m[2] *= t, this.m[3] *= t, this;
  }
  [e0(324)]() {
    return { x: this.m[0], y: this.m[3] };
  }
  [e0(317)](x) {
    let e = Math[e0(290)](x), s = Math.sin(x), i = this.m[0] * e + this.m[2] * s, r = this.m[1] * e + this.m[3] * s, a = this.m[0] * -s + this.m[2] * e, o = this.m[1] * -s + this.m[3] * e;
    return this.m[0] = i, this.m[1] = r, this.m[2] = a, this.m[3] = o, this;
  }
  [e0(325)](x, t, e) {
    const s = e0;
    this[s(308)](t, e), this[s(317)](x), this.translate(-t, -e);
  }
  [e0(311)]() {
    return { x: this.m[4], y: this.m[5] };
  }
  getRotation() {
    const x = e0;
    let t = this.copy();
    t[x(299)](0, 0);
    let e = t.point({ x: 0, y: 0 });
    return Math[x(330)](e.y, e.x);
  }
  [e0(285)](x) {
    let t = this.m[0] * x.m[0] + this.m[2] * x.m[1], e = this.m[1] * x.m[0] + this.m[3] * x.m[1], s = this.m[0] * x.m[2] + this.m[2] * x.m[3], i = this.m[1] * x.m[2] + this.m[3] * x.m[3], r = this.m[0] * x.m[4] + this.m[2] * x.m[5] + this.m[4], a = this.m[1] * x.m[4] + this.m[3] * x.m[5] + this.m[5];
    return this.m[0] = t, this.m[1] = e, this.m[2] = s, this.m[3] = i, this.m[4] = r, this.m[5] = a, this;
  }
  [e0(313)]() {
    let x = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]), t = this.m[3] * x, e = -this.m[1] * x, s = -this.m[2] * x, i = this.m[0] * x, r = x * (this.m[2] * this.m[5] - this.m[3] * this.m[4]), a = x * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
    return this.m[0] = t, this.m[1] = e, this.m[2] = s, this.m[3] = i, this.m[4] = r, this.m[5] = a, this;
  }
  getMatrix() {
    return this.m;
  }
  [e0(304)](x, t) {
    let e = this.m[0], s = this.m[1], i = this.m[2], r = this.m[3], a = this.m[4], o = this.m[5], c = (e * (t - o) - s * (x - a)) / (e * r - s * i), h = (x - a - i * c) / e;
    return this.translate(h, c);
  }
}
function sx(n, x) {
  const t = Kx();
  return sx = function(e, s) {
    return e = e - 281, t[e];
  }, sx(n, x);
}
class co {
  constructor(x, t, e) {
    const s = e0;
    this[s(309)] = new ArrayBuffer(x), this.matrixSize = t, this[s(306)] = [0], this[s(310)] = [], this.compactThreshold = e, this[s(298)] = 0, this[s(318)] = 0;
  }
  [e0(283)]() {
    const x = e0;
    if (this[x(306)].length === 0 && !this[x(281)]())
      throw new Error(x(288));
    const t = this.freeList[x(289)](), e = new Float32Array(this[x(309)], t, this.matrixSize);
    return this.usedList[x(294)]({ index: t, matrix: e }), this[x(298)]++, this[x(298)] - this[x(318)] > this[x(328)] && this[x(297)](), e;
  }
  [e0(315)](x) {
    const t = e0, e = x[t(307)], s = this[t(310)][t(302)]((i) => i[t(305)] === e);
    s && (this[t(310)][t(316)](this[t(310)].indexOf(s), 1), this[t(306)][t(294)](e), this[t(318)]++, this.allocationCount - this.freeCount > this.compactThreshold && this.compact());
  }
  [e0(297)]() {
    const x = e0;
    this[x(310)][x(320)]((s, i) => s.index - i[x(305)]), this.freeList = [];
    let t = 0;
    for (const s of this[x(310)])
      s[x(305)] - t > 0 && this[x(306)].push(t), t = s[x(305)] + s[x(323)][x(296)];
    this[x(309)].byteLength - t > 0 && this.freeList[x(294)](t), this.allocationCount = this[x(310)][x(301)], this[x(318)] = this.freeList[x(301)];
  }
  expand() {
    const x = e0, t = new ArrayBuffer(this.buffer[x(296)] * 2);
    if (!t)
      return ![];
    const e = new Uint8Array(t), s = new Uint8Array(this[x(309)]);
    e[x(322)](s), this.buffer = t;
    const i = this.freeList[this[x(306)][x(301)] - 1];
    for (let r = this.buffer[x(296)] - this.matrixSize; r >= i; r -= this[x(329)])
      this[x(306)][x(294)](r);
    return !![];
  }
}
function Kx() {
  const n = ["translate", "buffer", "usedList", "getTranslation", "slice", "invert", "2259884bQwKMG", "free", "splice", "rotate", "freeCount", "4230GHKJvo", "sort", "vec", "set", "matrix", "getScale", "rotateTarget", "copy", "70065zSxrYX", "compactThreshold", "matrixSize", "atan2", "expand", "3012ivyGcg", "allocate", "905404YIVhRQ", "multiply", "136244UsPuIO", "143286XNFjMU", "Failed to expand buffer", "pop", "cos", "point", "7vTpmnU", "770AabDLe", "push", "1672352zljiJV", "byteLength", "compact", "allocationCount", "translateTo", "scale", "length", "find", "3TNACtD", "setAbsolutePosition", "index", "freeList", "byteOffset"];
  return Kx = function() {
    return n;
  }, Kx();
}
const U = ix;
(function(n, x) {
  const t = ix, e = n();
  for (; []; )
    try {
      if (-parseInt(t(204)) / 1 * (parseInt(t(189)) / 2) + parseInt(t(185)) / 3 + -parseInt(t(175)) / 4 + parseInt(t(201)) / 5 * (parseInt(t(207)) / 6) + parseInt(t(177)) / 7 * (-parseInt(t(211)) / 8) + -parseInt(t(195)) / 9 + parseInt(t(208)) / 10 * (parseInt(t(192)) / 11) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Qx, 342275);
function ix(n, x) {
  const t = Qx();
  return ix = function(e, s) {
    return e = e - 175, t[e];
  }, ix(n, x);
}
class V {
  constructor(x = 0, t = 0, e = 0, s = 0) {
    const i = ix;
    this.x = 0, this.y = 0, this[i(197)] = 0, this[i(178)] = 0, this.x = x, this.y = t, this[i(197)] = e, this.height = s;
  }
  [U(199)](x = 0, t = 0, e = 0, s = 0) {
    const i = U;
    this.x = x, this.y = t, this[i(197)] = e, this[i(178)] = s;
  }
  getRect() {
    return this;
  }
  [U(202)]() {
    const x = U;
    return new V(this.x, this.y, this[x(197)], this.height);
  }
  [U(179)]() {
    const x = U;
    return x(203) + this.x + x(176) + this.y + " width:" + this[x(197)] + x(196) + this.height + "]";
  }
  [U(198)](x) {
    const t = U;
    return x.x == this.x && x.y == this.y && x[t(197)] == this[t(197)] && x.height == this[t(178)];
  }
  [U(191)](x) {
    const t = U;
    return x.x > this.x && x[t(184)]() < this[t(184)]() && x.y > this.y && x.getBottom() < this.getBottom() ? !![] : ![];
  }
  [U(200)](x, t) {
    const e = U;
    return x >= this.x && x <= this.x + this.width && t >= this.y && t <= this.y + this[e(178)];
  }
  [U(210)](x) {
    const t = U;
    return x.x > this.getRight() || x.y > this[t(183)]() ? ![] : x[t(184)]() < this.x || x.getBottom() < this.y ? ![] : !![];
  }
  [U(184)]() {
    const x = U;
    return this.x + this[x(197)];
  }
  getBottom() {
    return this.y + this.height;
  }
  isEmpty() {
    const x = U;
    return this.x === 0 && this.y === 0 && this[x(197)] === 0 && this.height === 0;
  }
  [U(205)]() {
    this[U(199)](0, 0, 0, 0);
  }
  [U(181)]() {
    const x = U;
    return { x: this.x + this.width / 2, y: this.y + this[x(178)] / 2 };
  }
  static [U(182)](x, t) {
    const e = U;
    let s = Math[e(209)](x.x, t.x), i = Math[e(209)](x.y, t.y), r = Math[e(180)](x[e(184)](), t[e(184)]()), a = Math[e(180)](x[e(183)](), t[e(183)]());
    return x[e(199)](s, i, r - s, a - i), x;
  }
  static [U(188)](x, t) {
    const e = U;
    let s = t.x - x.x, i = t.y - x.y;
    return Math.abs(s) > Math[e(206)](i) ? [Math[e(190)](s), 0] : [0, Math[e(190)](i)];
  }
}
class rx {
  constructor(x) {
    const t = U;
    this[t(186)] = x, this[t(193)] = rx[t(187)](x);
  }
  [U(200)](x, t) {
    const e = U;
    return this[e(193)][e(200)](x, t) == ![] ? ![] : !![];
  }
  static toAABB(x) {
    const t = U;
    let e = x[0], s = { x: e.x, y: e.y }, i = { x: e.x, y: e.y }, r = { x: e.x, y: e.y }, a = { x: e.x, y: e.y };
    for (let o = 1; o < x[t(194)]; o++) {
      let c = x[o];
      c.x < s.x && (s.x = c.x), c.x > i.x && (i.x = c.x), c.y < r.y && (r.y = c.y), c.y > a.y && (a.y = c.y);
    }
    return new V(s.x, r.y, i.x - s.x, a.y - r.y);
  }
}
function Qx() {
  const n = ["toAABB", "normal", "8rfDleX", "sign", "containsRect", "11605chWxwQ", "aabb", "length", "765675KmuMtI", " height:", "width", "equals", "setTo", "contains", "15LIGaGj", "clone", "[x: ", "87051uaZShz", "setToEmpty", "abs", "1355484IIJsUA", "9110SVGjZj", "min", "isIntersectRect", "8CkauRO", "1856640jdPzfN", " y:", "3143749cGgBTB", "height", "toString", "max", "getCenter", "union", "getBottom", "getRight", "149922bubFUA", "points"];
  return Qx = function() {
    return n;
  }, Qx();
}
(function(n, x) {
  for (var t = Is, e = n(); []; )
    try {
      var s = -parseInt(t(228)) / 1 + parseInt(t(230)) / 2 + parseInt(t(225)) / 3 + parseInt(t(226)) / 4 * (-parseInt(t(223)) / 5) + parseInt(t(229)) / 6 + -parseInt(t(231)) / 7 + -parseInt(t(224)) / 8 * (-parseInt(t(227)) / 9);
      if (s === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Zx, 351570);
function Is(n, x) {
  var t = Zx();
  return Is = function(e, s) {
    e = e - 223;
    var i = t[e];
    return i;
  }, Is(n, x);
}
function Zx() {
  var n = ["5fkbvGb", "60688oEjCaW", "431994rIJuvV", "1060612ibsdnq", "1566UpLjEH", "605072BHFyyl", "6096mOJEap", "211756qgjIkO", "2443427peIqdN"];
  return Zx = function() {
    return n;
  }, Zx();
}
function ws(n, x) {
  var t = Jx();
  return ws = function(e, s) {
    e = e - 474;
    var i = t[e];
    return i;
  }, ws(n, x);
}
(function(n, x) {
  for (var t = ws, e = n(); []; )
    try {
      var s = parseInt(t(480)) / 1 * (-parseInt(t(478)) / 2) + -parseInt(t(482)) / 3 + parseInt(t(476)) / 4 * (parseInt(t(479)) / 5) + parseInt(t(481)) / 6 * (parseInt(t(483)) / 7) + -parseInt(t(484)) / 8 + -parseInt(t(474)) / 9 + parseInt(t(477)) / 10 * (parseInt(t(475)) / 11);
      if (s === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Jx, 892260);
function Jx() {
  var n = ["68LpXLkK", "20OzHvyN", "17234PDfCAL", "217370fLIUnc", "167cEPnOz", "6qndUrO", "2050743MymEBt", "10025414UGWrQr", "6194680UiLJAm", "13653927vZYLMf", "17242819ukNdVL"];
  return Jx = function() {
    return n;
  }, Jx();
}
const tt = ax;
(function(n, x) {
  const t = ax, e = n();
  for (; []; )
    try {
      if (parseInt(t(286)) / 1 + parseInt(t(281)) / 2 + -parseInt(t(280)) / 3 * (parseInt(t(279)) / 4) + -parseInt(t(283)) / 5 + -parseInt(t(274)) / 6 + parseInt(t(272)) / 7 * (-parseInt(t(287)) / 8) + parseInt(t(284)) / 9 * (parseInt(t(277)) / 10) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})($x, 201474);
function $x() {
  const n = ["dispatchEvent", "334635CBQvIy", "1376kTnzxz", "type", "call", "6153qKccZM", "listeners", "2329134ZyCCPN", "length", "addEventListener", "465950ZGazWI", "removeEventListener", "4SeCRnF", "1083717MSOnfD", "119068LfGHnY", "hasListener", "1818820FKqwEu", "207araWNL"];
  return $x = function() {
    return n;
  }, $x();
}
function ax(n, x) {
  const t = $x();
  return ax = function(e, s) {
    return e = e - 272, t[e];
  }, ax(n, x);
}
class Y0 {
  constructor() {
    const x = ax;
    this[x(273)] = {};
  }
  [tt(282)](x) {
    return x in this[tt(273)];
  }
  addEventListener(x, t) {
    const e = tt;
    !(x in this[e(273)]) && (this[e(273)][x] = []), this[e(273)][x].push(t);
  }
  [tt(278)](x, t) {
    const e = tt;
    if (!(x in this[e(273)]))
      return;
    let s = this.listeners[x];
    for (var i = 0, r = s[e(275)]; i < r; i++)
      if (s[i] === t)
        return s.splice(i, 1), this[e(278)](x, t);
  }
  [tt(285)](x) {
    const t = tt;
    if (!(x.type in this.listeners))
      return;
    let e = this[t(273)][x[t(288)]];
    for (var s = 0, i = e[t(275)]; s < i; s++)
      e[s][t(289)](this, x);
  }
  on(x, t) {
    return this[tt(276)](x, t);
  }
}
function te() {
  const n = ["819348sZvYPL", "down", "normal", "begin", "selectObject", "2.0.0", "fold2", "s-resize", "edit", "e-resize", "mid", "corosshair", "1970392yCSnmF", "358315esKslx", "706794lSdOqQ", "drag", "center", "end", "ctrlPoint", "7aXbRBb", "zoomAfter", "ctrlPoint2", "horizontal", "right", "move", "left", "862734jECagK", "nearest", "fullWindow", "resize", "vertical", "1080116WWIgKC", "groupdragend", "1416400fsqKqj", "mid1", "10px sans-serif", "assert", "n-resize"];
  return te = function() {
    return n;
  }, te();
}
const q = ee;
(function(n, x) {
  const t = ee, e = n();
  for (; []; )
    try {
      if (parseInt(t(392)) / 1 + parseInt(t(417)) / 2 + -parseInt(t(405)) / 3 + -parseInt(t(410)) / 4 + -parseInt(t(412)) / 5 + parseInt(t(393)) / 6 * (parseInt(t(398)) / 7) + parseInt(t(391)) / 8 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(te, 291200);
const _0 = { DefaultFont: q(414) }, vs = 2 * Math.PI, xe = q(384), O0 = { drag: q(394), edit: q(387), normal: q(419), select: "select", view: "view" }, h1 = { move: q(403), corosshair: q(390), s_resize: q(386), n_resize: q(416), w_resize: "w-resize", e_resize: q(388) }, Ft = { horizontal: q(401), vertical: q(409) }, E = { lt: "lt", ct: "ct", rt: "rt", lm: "lm", center: q(395), rm: "rm", lb: "lb", cb: "cb", rb: "rb", nearest: q(406), begin: q(420), end: q(396), ctrlPoint: q(397), ctrlPoint1: "ctrlPoint1", ctrlPoint2: q(400), fold1: "fold1", fold2: q(385), mid: q(389), mid1: q(413), mid2: "mid2", up: "up", down: q(418), left: q(404), right: q(402) }, l1 = { lt: E.rb, ct: E.cb, rt: E.lb, rm: E.lm, rb: E.lt, cb: E.ct, lb: E.rt, lm: E.rm }, Mx = { HandlerLayerCanvas: 99, FullWindowDom: 1e3, Link: 1, Node: 2, EditorNewLink: 3, IntersectPoint: 999, NodeCtrlBox: 1e3, LinkCtrlBox: 1001 }, Bs = !![];
function ee(n, x) {
  const t = te();
  return ee = function(e, s) {
    return e = e - 383, t[e];
  }, ee(n, x);
}
function W0(n, ...x) {
  const t = q;
  Bs != ![] && console[t(415)](n != null, x);
}
function u1(n, x, ...t) {
  const e = q;
  Bs != ![] && console[e(415)](n == x, t);
}
function _i(n, ...x) {
  const t = q;
  Bs != ![] && console[t(415)](n, x);
}
const Bt = 0, H0 = 1, L0 = { zoom: "zoom", resize: q(408), zoomAfter: q(399), fullWindow: q(407), modeChange: "modeChange", groupdrag: "groupdrag", groupdragend: q(411), selectObject: q(383) };
function I(n) {
  return (x, t) => {
    x[t] = n;
  };
}
const u0 = se;
(function(n, x) {
  const t = se, e = n();
  for (; []; )
    try {
      if (-parseInt(t(417)) / 1 + -parseInt(t(421)) / 2 * (-parseInt(t(437)) / 3) + parseInt(t(428)) / 4 * (-parseInt(t(416)) / 5) + -parseInt(t(436)) / 6 + -parseInt(t(408)) / 7 * (-parseInt(t(430)) / 8) + parseInt(t(426)) / 9 * (-parseInt(t(410)) / 10) + parseInt(t(407)) / 11 * (-parseInt(t(411)) / 12) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(ne, 827334);
function ne() {
  const n = ["map", "height", "rotate", "14085KeklWO", "hasChild", "19764nxfclp", "getRectsNormalization", "14096oFPpvJ", "length", "getPointsNormalization", "notContains", "splice", "MIN_SAFE_INTEGER", "1035432stXMpc", "231267WMDfEj", "width", "union", "min", "22HRiCEH", "4354qhiSHj", "removeAt", "1560bIeGiw", "2604420PuQypL", "addAll", "getMinMax", "forEach", "max", "130JTyLSM", "137361bqxwPE", "slice", "getPointsRect", "rotateNormaledPoints", "22vyGwsH", "setTo"];
  return ne = function() {
    return n;
  }, ne();
}
function se(n, x) {
  const t = ne();
  return se = function(e, s) {
    return e = e - 405, t[e];
  }, se(n, x);
}
class W {
  static [u0(427)](x, t) {
    return x.indexOf(t) != -1;
  }
  static [u0(433)](x, t) {
    return x.indexOf(t) == -1;
  }
  static [u0(412)](x, t) {
    const e = u0;
    for (var s = 0; s < t[e(431)]; s++)
      x.push(t[s]);
    return x;
  }
  static [u0(409)](x, t) {
    return x[u0(434)](t, 1);
  }
  static remove(x, t) {
    const e = u0;
    let s = x.indexOf(t);
    return s == -1 ? -1 : (x[e(434)](s, 1), s);
  }
  static [u0(419)](x) {
    const t = u0;
    let e = Number.MAX_SAFE_INTEGER, s = Number.MAX_SAFE_INTEGER, i = Number.MIN_SAFE_INTEGER, r = Number[t(435)];
    return x[t(414)](function(a) {
      a.x < e && (e = a.x), a.y < s && (s = a.y), a.x > i && (i = a.x), a.y > r && (r = a.y);
    }), new V(e, s, i - e, r - s);
  }
  static [u0(429)](x, t) {
    const e = u0;
    let s = new V();
    s[e(422)](x[0].x, x[0].y, x[0].width, x[0][e(424)]);
    for (let h = 1; h < x.length; h++)
      V[e(405)](s, x[h]);
    let i = s[e(438)], r = s.height, a = s.x, o = s.y;
    return x[e(423)]((h) => {
      const l = e;
      let f = h.width / i, y = h[l(424)] / r, _ = (h.x - a) / i, b = (h.y - o) / r, P = f * t[l(438)], v = y * t[l(424)], D = t.x + _ * t[l(438)], S = t.y + b * t.height;
      return new V(D, S, P, v);
    });
  }
  static [u0(413)](x) {
    const t = u0;
    let e = { x: x[0].x, y: x[0].y }, s = { x: x[0].x, y: x[0].y };
    for (let i = 1; i < x[t(431)]; i++) {
      let r = x[i];
      e.x = Math[t(406)](e.x, r.x), e.y = Math[t(406)](e.y, r.y), s.x = Math[t(415)](s.x, r.x), s.y = Math[t(415)](s.y, r.y);
    }
    return { min: e, max: s };
  }
  static getPointsNormalization(x, t = -0.5, e = -0.5, s = !![]) {
    const i = u0;
    let r = W[i(413)](x), a = r[i(406)], o = r[i(415)], c = o.x - a.x, h = o.y - a.y;
    if (c == h || s == ![])
      return x[i(423)]((_) => ({ x: (_.x - a.x) / c + t, y: (_.y - a.y) / h + e }));
    if (c > h) {
      let y = (c - h) * 0.5;
      return h = c, x.map((b) => ({ x: (b.x - a.x) / c + t, y: (b.y + y - a.y) / h + e }));
    }
    let l = (h - c) * 0.5;
    return c = h, x[i(423)]((y) => ({ x: (y.x + l - a.x) / c + t, y: (y.y - a.y) / h + e }));
  }
  static [u0(420)](x, t, e = 0, s = 0) {
    const i = u0;
    if (t == 0 || t % 6.283185307179586 == 0)
      return x[i(418)]();
    let r = x[i(423)]((a) => A[i(425)](a.x, a.y, e, s, t));
    return W[i(432)](r);
  }
}
const us = ie;
(function(n, x) {
  const t = ie, e = n();
  for (; []; )
    try {
      if (-parseInt(t(416)) / 1 * (parseInt(t(428)) / 2) + parseInt(t(429)) / 3 * (parseInt(t(420)) / 4) + -parseInt(t(422)) / 5 + -parseInt(t(436)) / 6 + parseInt(t(426)) / 7 * (parseInt(t(430)) / 8) + parseInt(t(421)) / 9 + parseInt(t(437)) / 10 * (parseInt(t(431)) / 11) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(re, 487496);
function ie(n, x) {
  const t = re();
  return ie = function(e, s) {
    return e = e - 416, t[e];
  }, ie(n, x);
}
function re() {
  const n = ["forEach", "getCanvas", "3073848tUxrVL", "1313030xnBysO", "isArray", "27427PYBIYI", "src", "isHtmlImage", "loadImage", "4oadzqX", "1341126RmAkSc", "4410280pnjPkO", "push", "onload", "lastResource", "1722XadCJy", "clearCache", "14ksGlCg", "2477115jBtpHZ", "18664zIENgC", "44DkVQjw", "loaded", "dispatchEvent"];
  return re = function() {
    return n;
  }, re();
}
var vt = {};
class d1 extends Y0 {
  [us(427)]() {
    vt = {};
  }
  [us(419)](x, t) {
    const e = us;
    let s = this;
    s[e(425)] = x;
    function i(a) {
      t(a), s.hasLoaded = !![];
    }
    let r = vt[x];
    if (r != null && !Array[e(438)](r)) {
      i(r);
      return;
    }
    if (x[e(418)] == !![]) {
      x[e(435)]().then(i), s.dispatchEvent({ type: e(432), resource: r });
      return;
    }
    if (t != null) {
      let a = vt[x];
      a == null && (a = [], vt[x] = a), Array[e(438)](a) && a[e(423)](t);
    }
    setTimeout(function() {
      const a = e;
      let o = new Image();
      o[a(417)] = x, o[a(424)] = function() {
        const c = a;
        let h = vt[x];
        Array[c(438)](h) && h[c(434)]((l) => l(o)), vt[x] = o, s[c(433)]({ type: c(432), resource: o });
      };
    }, 1);
  }
}
var X0 = new d1();
(function(n, x) {
  const t = Dt, e = n();
  for (; []; )
    try {
      if (parseInt(t(360)) / 1 + parseInt(t(357)) / 2 * (-parseInt(t(348)) / 3) + -parseInt(t(346)) / 4 * (parseInt(t(353)) / 5) + parseInt(t(351)) / 6 + -parseInt(t(359)) / 7 + -parseInt(t(354)) / 8 * (parseInt(t(356)) / 9) + parseInt(t(361)) / 10 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(ae, 161347);
function Dt(n, x) {
  const t = ae();
  return Dt = function(e, s) {
    return e = e - 346, t[e];
  }, Dt(n, x);
}
function ae() {
  const n = ["201936LJpdso", "231563Cqatxz", "2172640gJXcor", "24ByalRN", "function", "81Utqduq", "serializers", "defineProperties", "1904730XBSgvv", "name", "260655GRrvFm", "424TOuMla", "className", "26757nVpyfA", "7832LyEJIC", "class not exist name:"];
  return ae = function() {
    return n;
  }, ae();
}
function f1(n, x, t) {
  const e = Dt;
  return typeof n == e(347) ? Vs(n[e(352)], n, x) : Vs(n, x, t);
}
function Vs(n, x, t) {
  const e = Dt;
  if (_0[n] != null)
    throw new Error("class already reg, name:" + n);
  const s = x.prototype;
  t != null && t.length > 0 && (s[e(349)] = s[e(349)].concat(t)), Object[e(350)](s, { className: { writable: !![] } }), s[e(355)] = n, Object.defineProperties(s, { className: { writable: ![] } }), _0[n] = x;
}
function Ds(n) {
  const x = Dt;
  let t = _0[n];
  if (t == null)
    throw new Error(x(358) + n);
  return t;
}
const Fx = oe;
function oe(n, x) {
  const t = ce();
  return oe = function(e, s) {
    return e = e - 291, t[e];
  }, oe(n, x);
}
(function(n, x) {
  const t = oe, e = n();
  for (; []; )
    try {
      if (-parseInt(t(301)) / 1 + parseInt(t(296)) / 2 * (-parseInt(t(300)) / 3) + parseInt(t(295)) / 4 + parseInt(t(299)) / 5 + -parseInt(t(291)) / 6 + -parseInt(t(302)) / 7 * (parseInt(t(298)) / 8) + parseInt(t(304)) / 9 * (parseInt(t(303)) / 10) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(ce, 487665);
let Kt = 0, A0 = {};
function ce() {
  const n = ["1531095CayirI", "6JqbNLN", "769659mDEbBa", "7kYtPAi", "6510670drAJpJ", "27sENSDx", "475446QgGYGE", "compare", "next", "resetTo", "2104020MjaqCL", "701154BCTakP", "getMax", "5981648QKzvef"];
  return ce = function() {
    return n;
  }, ce();
}
A0[Fx(293)] = function() {
  return ++Kt;
}, A0.back = function() {
  return --Kt;
}, A0[Fx(297)] = function() {
  return Kt;
}, A0[Fx(294)] = function(n) {
  Kt = n;
}, A0[Fx(292)] = function(n) {
  n != null && n > Kt && A0.resetTo(n + 1);
};
const T = jt;
(function(n, x) {
  const t = jt, e = n();
  for (; []; )
    try {
      if (parseInt(t(232)) / 1 + parseInt(t(218)) / 2 * (parseInt(t(235)) / 3) + -parseInt(t(245)) / 4 + -parseInt(t(229)) / 5 * (parseInt(t(223)) / 6) + parseInt(t(219)) / 7 + parseInt(t(258)) / 8 * (parseInt(t(234)) / 9) + -parseInt(t(266)) / 10 * (parseInt(t(256)) / 11) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(he, 240897);
var b1 = Object.defineProperty, p1 = Object.getOwnPropertyDescriptor, ox = (n, x, t, e) => {
  for (var s = e > 1 ? void 0 : e ? p1(x, t) : x, i = n.length - 1, r; i >= 0; i--)
    (r = n[i]) && (s = (e ? r(x, t, s) : r(s)) || s);
  return e && s && b1(x, t, s), s;
};
const Ct = class {
  constructor(n) {
    const x = jt;
    this[x(227)] = !![], this[x(239)] = n;
  }
  [T(264)]() {
    const n = T;
    let x = { className: this.className };
    return x[n(239)] = this[n(239)], x[n(227)] = this[n(227)], x;
  }
  static fromPojo(n) {
    const x = T;
    let t = Ds(n[x(240)]), e = new t(n[x(239)]);
    return e.isClosed = n[x(227)], e;
  }
  static [T(268)](n, x = !![]) {
    let e = W[T(265)](n, -0.5, -0.5, x);
    return new Ct(e);
  }
  [T(261)](n, x) {
    const t = T;
    x[t(246)](n[0].x, n[0].y);
    let e = n[0];
    for (let s = 1; s < n[t(224)]; s++) {
      if (n[s].x === e.x && n[s].y === e.y) {
        e = n[s];
        continue;
      }
      x.lineTo(n[s].x, n[s].y), e = n[s];
    }
    this[t(227)] && x[t(243)]();
  }
  [T(251)](n) {
    const x = T;
    return this[x(239)] = W[x(237)](this.points, n), this[x(253)] = !![], this;
  }
  scale(n, x) {
    const t = T;
    return this.points.forEach((e) => {
      e.x *= n, e.y *= x;
    }), this.points = W[t(265)](this[t(239)]), this[t(253)] = !![], this;
  }
  skew(n, x) {
    const t = T;
    return this[t(239)][t(238)]((e) => {
      let s = e.x, i = e.y;
      e.x = s + i * x, e.y = i + s * n;
    }), this[t(239)] = W[t(265)](this[t(239)]), this.dirty = !![], this;
  }
  static [T(249)](n, x, t, e = ![]) {
    const s = T;
    return e == !![] && x != t && (x > t ? x = t : t = x), n.points[s(247)]((r) => ({ x: r.x * x, y: r.y * t }));
  }
  static [T(228)](n = 3, x = 0) {
    const t = T;
    let e = [], s = 2 * Math.PI / n;
    for (var i = 0; i < n; i++) {
      let a = Math[t(248)](x + i * s), o = Math[t(242)](x + i * s);
      e.push({ x: a, y: o });
    }
    return Ct.fromPoints(e);
  }
  static Scale(n, x) {
    return function(t) {
      return t.x *= n, t.y *= x, t;
    };
  }
  static Rotate(n) {
    return function(x) {
      const t = jt;
      let e = Math.atan2(x.y, x.x), s = e + n, i = A[t(259)](x.x, x.y, 0, 0);
      return x.x = i * Math.cos(s), x.y = i * Math[t(242)](s), x;
    };
  }
  static [T(255)](n = 0) {
    const x = T;
    let t = [{ x: 0, y: 0 }, { x: 1, y: 0.5 }, { x: 0, y: 1 }], e = W.getPointsNormalization(t);
    return n != 0 && (e = W[x(237)](e, -Math.PI)), e;
  }
  static [T(254)](n = 0.2) {
    const x = T;
    let t = [{ x: n, y: 0 }, { x: 1, y: 0 }, { x: 1 - n, y: 1 }, { x: 0, y: 1 }];
    return W[x(265)](t);
  }
  static [T(270)]() {
    let n = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 0.8 }, { x: 0.8, y: 0.8 }, { x: 0.5, y: 1 }, { x: 0.2, y: 0.8 }, { x: 0, y: 0.8 }, { x: 0, y: 0 }];
    return W.getPointsNormalization(n);
  }
  static [T(241)](n) {
    const x = T;
    n[x(222)] = n[x(222)] | 0, n[x(269)] = n[x(269)] | vs;
    let t = [];
    if (n[x(221)] == null) {
      n[x(267)] = n.step | 0.2;
      for (let e = n[x(222)]; e <= n.end; e += n[x(267)]) {
        let s = e;
        t[x(260)]({ x: s, y: Math[x(248)](s) });
      }
    } else {
      n[x(267)] = (n[x(269)] - n[x(222)]) / n[x(221)];
      for (let e = 0; e < n[x(221)]; e++) {
        let s = (e + 1) * n[x(267)];
        t[x(260)]({ x: s, y: Math[x(248)](s) });
      }
    }
    return Ct[x(268)](t);
  }
  static [T(257)](n) {
    const x = T;
    n[x(222)] = n[x(222)] || 0, n[x(269)] = n[x(269)] || vs;
    let t = [];
    if (n.pointCount == null) {
      n[x(267)] = n[x(267)] | 0.2;
      for (let e = n[x(222)]; e <= n[x(269)]; e += n.step) {
        let s = e;
        t[x(260)]({ x: Math[x(242)](s), y: Math.cos(s) });
      }
    } else {
      let e = (n.end - n.begin) / n.pointCount;
      for (let s = 0; s < n[x(221)]; s++) {
        let i = s * e;
        t[x(260)]({ x: Math.sin(i), y: Math[x(248)](i) });
      }
    }
    return W[x(265)](t);
  }
  static fn(n) {
    let x = n();
    return Ct.fromPoints(x);
  }
  static outerGrid(n, x) {
    const t = T;
    let e = [], s = 1 / (x - 1), i = 1 / (n - 1);
    for (let r = 0; r < n; r++)
      for (let a = 0; a < x; a++) {
        let o = { y: r * i - 0.5, x: a * s - 0.5 };
        e[t(260)](o);
      }
    return e;
  }
  static [T(236)](n, x) {
    let t = [], e = 1 / x, s = 1 / n, i = e * 0.5, r = s * 0.5;
    for (let a = 0; a < n; a++)
      for (let o = 0; o < x; o++) {
        let c = { y: i + a * s - 0.5, x: r + o * e - 0.5 };
        t.push(c);
      }
    return t;
  }
};
let p0 = Ct;
p0[T(250)] = (() => {
  const n = T;
  let x = [{ x: 0, y: 0.5 }, { x: 0.5, y: 0 }, { x: 1, y: 0.5 }, { x: 0.5, y: 1 }];
  return Ct[n(268)](x);
})(), ox([I("Shape")], p0[T(220)], T(240), 2), ox([I(![])], p0[T(220)], T(253), 2);
function he() {
  const n = ["map", "cos", "pointToSize", "Damond", "rotate", "atan2", "dirty", "parallelogram", "triangle", "1638263EtPqrP", "circle", "1022536VwGndA", "distance", "push", "draw", "center", "ArrowShape", "toPojo", "getPointsNormalization", "10IgNFJj", "step", "fromPoints", "end", "tip", "14nfcYzi", "1973195etgROK", "prototype", "pointCount", "begin", "1604442KeSXBa", "length", "outerGrid", "RectShape", "isClosed", "Polygon", "5jdyMIO", "center is zero vector", "lineTo", "7512VluNVZ", "nearest", "18hLOjwF", "83199DhhnEI", "innerGrid", "rotateNormaledPoints", "forEach", "points", "className", "Cos", "sin", "closePath", "normalize", "327700StOszv", "moveTo"];
  return he = function() {
    return n;
  }, he();
}
class Jt extends p0 {
  constructor(x = [{ x: -0.5, y: -0.5 }, { x: 0.5, y: 0 }, { x: -0.5, y: 0.5 }, { x: -0.5, y: 0 }]) {
    super(x);
  }
  [T(261)](x, t) {
    const e = T;
    t[e(246)](x[0].x, x[0].y), t.lineTo(x[1].x, x[1].y), t[e(231)](x[2].x, x[2].y), t[e(246)](x[3].x - 1, x[3].y), t[e(231)](x[1].x - 1, x[1].y);
  }
}
ox([I(T(263))], Jt[T(220)], "className", 2), ox([I(![])], Jt.prototype, T(227), 2), _0.ArrowShape = Jt, p0[T(263)] = new Jt();
function jt(n, x) {
  const t = he();
  return jt = function(e, s) {
    return e = e - 218, t[e];
  }, jt(n, x);
}
class jx extends p0 {
  constructor(x = [{ x: -0.5, y: -0.5 }, { x: 0.5, y: -0.5 }, { x: 0.5, y: 0.5 }, { x: -0.5, y: 0.5 }]) {
    super(x);
  }
  draw(x, t) {
    let e = x[0], s = x[2];
    t.rect(e.x, e.y, s.x - e.x, s.y - e.y);
  }
}
ox([I(T(226))], jx.prototype, T(240), 2), _0[T(226)] = jx, p0.RectShape = new jx();
const y1 = p0[T(225)](3, 3), g1 = [E.lt, E.ct, E.rt, E.lm, E.center, E.rm, E.lb, E.cb, E.rb], rt = {};
g1.forEach((n, x) => {
  rt[n] = y1[x];
}), rt[E.nearest] = function() {
  return this[T(233)];
};
function js(n) {
  const x = T;
  if (n == x(262))
    throw new Error(x(230));
  let t = rt[n];
  return z[x(244)]([], [t.x, t.y]);
}
function mi(n) {
  const x = T;
  let t = rt[n];
  return Math[x(252)](t.y, t.x);
}
function Z0(n, x) {
  const t = le();
  return Z0 = function(e, s) {
    return e = e - 329, t[e];
  }, Z0(n, x);
}
(function(n, x) {
  const t = Z0, e = n();
  for (; []; )
    try {
      if (parseInt(t(369)) / 1 * (-parseInt(t(333)) / 2) + parseInt(t(356)) / 3 + -parseInt(t(359)) / 4 + parseInt(t(331)) / 5 + -parseInt(t(342)) / 6 * (-parseInt(t(336)) / 7) + parseInt(t(368)) / 8 * (parseInt(t(352)) / 9) + parseInt(t(361)) / 10 * (-parseInt(t(371)) / 11) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(le, 891896);
function ds(n, x) {
  const t = Z0;
  let e = {}, s = {}, i = {}, r = {}, a = n[t(354)] || [0], o = n[t(366)], c = n[t(341)], h = n[t(362)];
  n.Resources[t(350)](function(v, D) {
    const S = t;
    r[D] = v[S(355)];
  }), c[t(350)](function(v, D) {
    let C = m0[t(340)](v);
    s[D] = C;
  }), h.forEach(function(v, D) {
    let C = p0[t(340)](v);
    i[D] = C;
  });
  let f = [];
  function y(v, D) {
    const S = t;
    let C;
    if (x && (C = x[v.id]), C == null && (C = os(v.className)), D < a.length && f[S(347)](C), _1(v, C), v[S(345)] != null) {
      let Z = r[v.image];
      C[S(360)] = Z;
    }
    if (v[S(357)] != null) {
      let Z = s[v[S(357)]];
      C[S(357)] = Z;
    }
    if (v.shape != null) {
      let Z = i[v[S(363)]];
      C[S(346)](Z);
    }
    return e[D] = C, C;
  }
  let _ = o.map(y);
  _.forEach((v) => {
    v.removeAllChild();
  }), o[t(350)]((v, D) => {
    const S = t;
    let C = _[D];
    if (v[S(364)] != null) {
      let Z = e[v[S(364)]];
      W0(Z), Z[S(329)](C);
    }
  });
  let b = o[t(348)]((v) => v.isLink), P = _[t(348)]((v) => v[t(335)]);
  return b.forEach(function(v, D) {
    let S = P[D];
    I1(S, v, e), m1(S, v, e);
  }), f;
}
function _1(n, x) {
  const t = Z0;
  let e = x[t(339)], s = Object.getPrototypeOf(x);
  return e[t(350)]((i) => {
    const r = t;
    if (n[r(365)](i)) {
      let a = n[i];
      a != null && a[r(349)] != null && (a = os(a[r(349)], a)), x[i] = a;
    } else
      s[r(365)](i) && (x[i] = s[i]);
  }), x.id == null && (x.id = A0[t(351)]()), x;
}
function Us(n, x) {
  const t = Z0;
  let e = n.target, s = os(n.className, n);
  if (s[t(353)]() && (s[t(337)] = x[e], s[t(337)] == null))
    throw new Error(t(334) + e);
  return W0(s, n), s;
}
function m1(n, x, t) {
  const e = Z0, s = Us(x[e(370)], t);
  n[e(358)](s);
  const i = Us(x[e(343)], t);
  n.setEnd(i);
}
function I1(n, x, t) {
  const e = Z0;
  if (x.label != null) {
    let s = t[x[e(344)]];
    n.label = s;
  }
  if (x[e(367)] != null) {
    let s = t[x[e(367)]];
    n[e(367)] = s;
  }
  if (x[e(330)] != null) {
    let s = t[x.endArrow];
    n[e(330)] = s;
  }
}
function le() {
  const n = ["hasOwnProperty", "DisplayObjects", "beginArrow", "161104PcTdmH", "1SaPvgU", "begin", "22BsEhIm", "addChild", "endArrow", "3881035RsdFWP", "assign", "2609346rlCTcl", "找不到link的端点对象，序列化时有错误:", "isLink", "3033800MdDZqz", "target", "unkown class name: ", "serializers", "fromPojo", "Styles", "12cDZaHr", "end", "label", "image", "setShape", "push", "filter", "className", "forEach", "next", "261PzKGZw", "isDisplayObjectId", "Roots", "src", "912246boXwlO", "style", "setBegin", "248776ZvMyNB", "imageSrc", "1361640bDlYPQ", "Shapes", "shape", "parent"];
  return le = function() {
    return n;
  }, le();
}
function os(n, x) {
  const t = Z0;
  let e;
  try {
    let s = Ds(n);
    e = new s(), x && Object[t(332)](e, x);
  } catch {
    throw new Error(t(338) + n);
  }
  return e;
}
function ue(n, x) {
  const t = de();
  return ue = function(e, s) {
    return e = e - 160, t[e];
  }, ue(n, x);
}
const d0 = ue;
(function(n, x) {
  const t = ue, e = n();
  for (; []; )
    try {
      if (-parseInt(t(185)) / 1 * (parseInt(t(167)) / 2) + parseInt(t(186)) / 3 + -parseInt(t(195)) / 4 * (-parseInt(t(194)) / 5) + -parseInt(t(175)) / 6 + -parseInt(t(180)) / 7 * (parseInt(t(169)) / 8) + -parseInt(t(192)) / 9 + parseInt(t(160)) / 10 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(de, 311600);
function de() {
  const n = ["551706YnGaMv", "925722TdDFnp", "version", "toJson", "json version :", "getPrototypeOf", "style", "3210165YhLXsM", "fillByJson", "37545MfVeXt", "212keTqXK", "11753510IhLwIX", "CustomStyle", "styleSystem", "assign", "forEach", "get", "copyToPojo", "2RdmIpk", "setNumberFixed", "8gIPhOB", "stage", "Styles", "_restoreBackground", "getState", "pojoToObjects", "2744952gEblLx", "compare", "toPojo", "serializers", "getEmptyInstance", "1430933xRsuxw", "dirty", "parse", "DisplayObjects", "getProtoDefaultProperties"];
  return de = function() {
    return n;
  }, de();
}
let w1 = /* @__PURE__ */ new Map();
const ks = class {
  constructor() {
  }
  [d0(168)](n) {
    ks.numberFixed = n;
  }
  [d0(177)](n) {
    return fs(n);
  }
  [d0(188)](n) {
    n instanceof F && (n = [n]);
    let x = this.toPojo(n);
    return JSON.stringify(x);
  }
  [d0(174)](n, x) {
    return ds(n, x);
  }
  [d0(166)](n) {
    const x = d0;
    let t = fs(n);
    return t[x(183)][x(164)]((e) => {
      e.id = void 0;
    }), t;
  }
  static [d0(179)](n) {
    let t = w1[d0(165)](n);
    return t == null && (t = os(n)), t;
  }
  static [d0(184)](n) {
    const x = d0;
    let t = n[x(178)], e = Object[x(190)](n), s = {};
    for (var i = 0; i < t.length; i++) {
      let r = t[i], a = e[r], o = n[r];
      o === a && (s[r] = o);
    }
    return s;
  }
  componentToObjects(n) {
    const x = d0;
    let t = JSON.parse(n);
    return t[x(183)][x(164)]((i) => {
      delete i.id;
    }), ds(t);
  }
  objectsToComponent(n) {
    let x = this.copyToPojo(n);
    return JSON.stringify(x);
  }
  [d0(173)](n) {
    const x = d0;
    let t = fs([n]), e = ks[x(184)](n);
    return Object[x(163)](e, t), e;
  }
  [d0(193)](n, x) {
    const t = d0;
    let e = JSON[t(182)](x);
    n[t(170)][t(162)].fromPojo(e[t(161)]);
    let s = e[t(183)];
    e[t(187)] != xe && console.warn(t(189), e.version, "jtopo version:", xe);
    let i = s[0];
    if (i.className == "Layer") {
      const r = e[t(171)][i[t(191)]];
      n[t(172)](r), n.id = i.id;
    }
    return s[t(164)]((r) => A0[t(176)](r.id)), this.restore(n, e), n.dirty = !![], n.translateWith(0, 0), this;
  }
  restore(n, x) {
    const t = d0;
    if (n[t(181)] = !![], x != null) {
      let e = n.toIdMap();
      ds(x, e);
    }
    return x;
  }
};
let Ot = ks;
Ot.numberFixed = 6;
const R = be;
(function(n, x) {
  const t = be, e = n();
  for (; []; )
    try {
      if (parseInt(t(416)) / 1 * (-parseInt(t(407)) / 2) + parseInt(t(422)) / 3 * (-parseInt(t(396)) / 4) + parseInt(t(384)) / 5 * (-parseInt(t(415)) / 6) + parseInt(t(406)) / 7 + -parseInt(t(428)) / 8 * (-parseInt(t(397)) / 9) + parseInt(t(388)) / 10 * (parseInt(t(409)) / 11) + parseInt(t(403)) / 12 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(fe, 671002);
var v1 = Object[R(401)], k1 = Object[R(398)], P1 = (n, x, t, e) => {
  const s = R;
  for (var i = e > 1 ? void 0 : e ? k1(x, t) : x, r = n[s(426)] - 1, a; r >= 0; r--)
    (a = n[r]) && (i = (e ? a(x, t, i) : a(i)) || i);
  return e && i && v1(x, t, i), i;
};
class J0 {
  [R(390)]() {
    return this[R(391)] instanceof F;
  }
  [R(421)]() {
    const x = R;
    return this instanceof M0 || this instanceof at || this instanceof pt ? this[x(391)][x(404)] : ![];
  }
  isDisplayObjectId() {
    const x = R;
    return this instanceof M0 || this instanceof at || this instanceof pt ? this[x(391)] != null && typeof this[x(391)] == x(392) : ![];
  }
  [R(427)]() {
    const x = R;
    let t = this.className, e = Object[x(395)]({ className: t }, this);
    return this[x(391)] == null && delete e.target, e;
  }
}
P1([I(R(394))], J0[R(424)], R(417), 2);
class at extends J0 {
  constructor(x, t, e = 0) {
    super(), this.target = x, this.t = t, this.segIndex = e;
  }
}
at[R(424)][R(417)] = R(402);
class M0 extends J0 {
  constructor(x, t) {
    const e = R;
    super(), this[e(391)] = x, this[e(400)] = t;
  }
  [R(393)]() {
    return mi(this[R(400)]) + Math.PI;
  }
  [R(423)]() {
    const x = R;
    return this.target.isNode ? js(this[x(400)]) : [0, 0];
  }
}
M0[R(424)][R(417)] = R(389);
class pt extends J0 {
  constructor(x) {
    const t = R;
    super(), this[t(391)] = x;
  }
  [R(393)](x) {
    const t = R;
    let e = 0;
    if (this[t(391)][t(404)]) {
      let s = this[t(391)];
      e = Math[t(418)](x.y - s.y, x.x - s.x);
    }
    return e;
  }
}
pt[R(424)][R(417)] = "EndpointNearest";
function fe() {
  const n = ["points", "segIndex", "log", "ShapeNode", "error arguments", "2319210dkghqk", "56955bUKsUW", "className", "atan2", "normal", "function", "isNodeTarget", "100830Juzdvx", "getVec", "prototype", "EndpointFixedPoint", "length", "toPojo", "31984qzGmKF", "positionToLocalPoint", "normalize", "target is null", "5TEHMPh", "nearest", "getPositionNormal", "EndpointFunction", "119380EsSOkY", "EndpointFixedName", "isDisplayObjectTarget", "target", "number", "getAngle", "Endpoint", "assign", "48rkLpqz", "1053GpCSTG", "getOwnPropertyDescriptor", "isLikePoint", "name", "defineProperty", "EndpointSegment", "13118532UpKSkS", "isNode", "center", "3479273okXZaM", "26AVxfqW", "getLocalPoint", "132Mckvjk"];
  return fe = function() {
    return n;
  }, fe();
}
class ot extends J0 {
  constructor(x, t) {
    super(), this.x = x, this.y = t;
  }
}
ot[R(424)][R(417)] = R(425);
function be(n, x) {
  const t = fe();
  return be = function(e, s) {
    return e = e - 381, t[e];
  }, be(n, x);
}
class Tx extends J0 {
  constructor(x) {
    super(), this.fn = x;
  }
}
Tx[R(424)][R(417)] = R(387);
function Ps(n, x) {
  const t = R;
  if (n == null)
    throw new Error(t(383));
  if (n instanceof J0)
    return n;
  if (x instanceof J0)
    return x;
  if (n instanceof F)
    return x == E[t(385)] ? new pt(n) : new M0(n, x || E.center);
  if (A[t(399)](n)) {
    let e = n;
    return new ot(e.x, e.y);
  } else {
    if (typeof n == t(420))
      return new Tx(n);
    throw console[t(412)](n, x), new Error(t(414));
  }
}
const S1 = { lm: [-1, 0], ct: [0, -1], rm: [1, 0], cb: [0, 1] };
function Ss(n) {
  const x = R;
  if (n == null)
    return;
  let t = n[x(391)];
  if (typeof t != x(420)) {
    if (n instanceof M0)
      return t[x(417)] == x(413) ? t[x(386)](n[x(400)]) : S1[n[x(400)]];
    if (n instanceof at) {
      let e = n[x(411)], s = n.t;
      if (t[x(417)] == x(413)) {
        let i = t[x(381)](E[x(405)]), r = t[x(408)](s, e);
        return V[x(419)](i, r);
      } else if (t instanceof Node) {
        if (e == 0)
          return [0, -1];
        if (e == 1)
          return [1, 0];
        if (e == 2)
          return [0, 1];
        if (e == 3)
          return [-1, 0];
        throw new Error("unkow segIndex:" + e);
      }
      if (t.isAutoFoldLink) {
        let i = t[x(410)][e], r = t[x(410)][e + 1], a = [r.x - i.x, r.y - i.y];
        return z[x(382)]([], a);
      }
    }
  }
}
(function(n, x) {
  const t = q0, e = n();
  for (; []; )
    try {
      if (-parseInt(t(235)) / 1 + parseInt(t(201)) / 2 * (parseInt(t(186)) / 3) + parseInt(t(184)) / 4 * (-parseInt(t(177)) / 5) + -parseInt(t(196)) / 6 + -parseInt(t(223)) / 7 + parseInt(t(227)) / 8 + -parseInt(t(198)) / 9 * (-parseInt(t(200)) / 10) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(pe, 733417);
function E1(n) {
  const x = q0;
  let t = F[x(233)](n[0][x(212)]);
  for (let l = 1; l < n[x(225)]; l++) {
    let f = F.flatten(n[l][x(212)], (y) => y[x(219)]);
    t = t[x(220)](f);
  }
  let e = n[x(220)](t), s = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), a = [], o = [], c = /* @__PURE__ */ new Map(), h = [];
  return e[x(178)]((l, f) => {
    const y = x;
    let _ = l.style;
    if (i[y(208)](_) == null) {
      let v = a.length;
      i[y(202)](_, v), a[y(230)](_.toPojo());
    }
    let b = l.imageSrc;
    b != null && c[b] == null && (h[y(230)]({ type: y(189), src: b }), c[b] = h[y(225)] - 1);
    let P = l[y(199)];
    if (l[y(204)] && r.get(P) == null) {
      let v = o[y(225)];
      r[y(202)](P, v), o[y(230)](P[y(222)]());
    }
    s[y(202)](l, f);
  }), { objects: e, objIndexMap: s, styleIndexMap: i, styles: a, resourcesIndexMap: c, resources: h, shapeIndexMap: r, shapes: o };
}
function fs(n) {
  const x = q0, t = {};
  t[x(190)] = xe;
  const e = E1(n);
  let s = e[x(182)], i = e[x(173)], r = e[x(229)], a = e[x(216)], o = e[x(175)];
  return t[x(181)] = n[x(205)]((c, h) => h), t[x(234)] = e[x(221)], t[x(211)] = e[x(195)], t[x(231)] = e.resources, t[x(191)] = s[x(205)](function(c) {
    return L1(c, i, r, o, a);
  }), t;
}
function L1(n, x, t, e, s) {
  const i = q0;
  let r = {};
  if (n[i(197)])
    r[i(197)] = !![];
  else if (n[i(204)])
    r[i(204)] = !![];
  else if (n.isLink)
    r[i(183)] = !![];
  else
    throw console[i(228)](n), new Error(i(192));
  C1(r, n);
  let a = x[i(208)](n[i(174)]);
  if (a != null && (r[i(174)] = a), n.isLink == !![]) {
    let h = n[i(203)], l = n[i(194)];
    r[i(203)] = Ks(n, h, i(203), x), r.end = Ks(n, l, i(194), x), n[i(213)] != null && (r[i(213)] = x[i(208)](n[i(213)])), n.beginArrow != null && (r[i(224)] = x[i(208)](n[i(224)])), n[i(206)] != null && (r[i(206)] = x[i(208)](n[i(206)]));
  }
  let o = t[i(208)](n[i(176)]);
  W0(o), r[i(176)] = o;
  let c = e[n[i(214)]];
  if (c != null && (r[i(215)] = c), n[i(204)]) {
    let h = s.get(n[i(199)]);
    W0(h), r.shape = h;
  }
  return r;
}
function Ks(n, x, t, e) {
  const s = q0;
  let i = x[s(222)]();
  if (x[s(210)] instanceof F) {
    let r = e[s(208)](x[s(210)]);
    if (r == null) {
      let a = t == "begin" ? n[s(193)]() : n[s(232)]();
      i[s(180)] = ot[s(218)][s(180)], i.x = a.x, i.y = a.y, delete i[s(210)];
    } else
      i.target = r;
  } else if (x instanceof Tx) {
    let r = x.fn();
    i[s(180)] = ot[s(218)][s(180)], i.x = r.x, i.y = r.y, delete i.target;
  }
  return i;
}
function C1(n, x) {
  const t = x.serializers;
  return Ii(n, x, t);
}
function Ii(n, x, t) {
  const e = q0;
  let s = Ot.getEmptyInstance(x[e(180)]);
  for (var i = 0; i < t.length; i++) {
    let r = t[i], a = x[r];
    if (r == e(180)) {
      n[r] = a;
      continue;
    }
    if (a !== s[r]) {
      if (Array[e(172)](a) && Array.isArray(s[r])) {
        let o = s[r];
        if (!A1(o, a))
          n[r] = a;
        else
          continue;
      }
      if (r == e(207) && a != null) {
        a = JSON[e(209)](JSON[e(179)](a)), n[r] = a;
        continue;
      }
      if (a == null) {
        n[r] = a;
        continue;
      }
      typeof a == e(187) && Ot[e(226)] != null && (a = O1(a, Ot[e(226)])), a[e(222)] != null ? a = a.toPojo() : A[e(185)](a) && (a = new A(a.x, a.y)), n[r] = a;
    }
  }
}
function q0(n, x) {
  const t = pe();
  return q0 = function(e, s) {
    return e = e - 172, t[e];
  }, q0(n, x);
}
function O1(n, x) {
  const t = q0;
  if (Number.isInteger(n))
    return n;
  let e = n[t(188)]();
  return e[t(225)] - e[t(217)](".") - 1 > x && (n = n.toFixed(x), n = parseFloat(n)), n;
}
function pe() {
  const n = ["get", "parse", "target", "Shapes", "children", "label", "imageSrc", "image", "shapeIndexMap", "indexOf", "prototype", "serializeable", "concat", "styles", "toPojo", "7790062xacXRg", "beginArrow", "length", "numberFixed", "10983696YqYLHD", "log", "styleIndexMap", "push", "Resources", "getEndPoint", "flatten", "Styles", "1117323NAKUgq", "isArray", "objIndexMap", "parent", "resourcesIndexMap", "style", "18865hlPGKO", "forEach", "stringify", "className", "Roots", "objects", "isLink", "852GAbmxB", "isLikePoint", "802821QjYysd", "number", "toString", "img", "version", "DisplayObjects", "unkonw object type:", "getBeginPoint", "end", "shapes", "6607296qmOnTY", "isLayer", "9gudFPs", "shape", "32279020KcvtzZ", "2JPIfWZ", "set", "begin", "isNode", "map", "endArrow", "userData"];
  return pe = function() {
    return n;
  }, pe();
}
function A1(n, x) {
  const t = q0;
  if (n === x)
    return !![];
  if (n[t(225)] != x[t(225)])
    return ![];
  for (let e = 0; e < n[t(225)]; e++)
    if (n[e] != x[e])
      return ![];
  return !![];
}
function ye(n, x) {
  const t = ge();
  return ye = function(e, s) {
    return e = e - 294, t[e];
  }, ye(n, x);
}
const cs = ye;
function ge() {
  const n = ["actualBoundingBoxDescent", "getContext", "198LIMDkJ", "actualBoundingBoxRight", "8jpNmed", "17482430vHHhtB", "178083LnADVg", "length", "measureText", "92884HczqyN", "width", "1356990vSwVbb", "3434eJGvYI", "187PnqQUB", "84637bdryvR", "2515908ogojiy", "257rOJpQO", "actualBoundingBoxLeft", "actualBoundingBoxAscent", "canvas", "87skWfMv", "font"];
  return ge = function() {
    return n;
  }, ge();
}
(function(n, x) {
  const t = ye, e = n();
  for (; []; )
    try {
      if (-parseInt(t(297)) / 1 * (-parseInt(t(315)) / 2) + -parseInt(t(301)) / 3 * (parseInt(t(312)) / 4) + -parseInt(t(314)) / 5 + -parseInt(t(305)) / 6 * (parseInt(t(295)) / 7) + parseInt(t(307)) / 8 * (-parseInt(t(309)) / 9) + -parseInt(t(308)) / 10 + parseInt(t(294)) / 11 * (parseInt(t(296)) / 12) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(ge, 893632);
const M1 = document.createElement(cs(300)), xx = M1[cs(304)]("2d");
function T1(n, x) {
  const t = cs;
  xx[t(302)] = x;
  const e = xx[t(311)](n), s = e[t(299)] + e[t(303)];
  return { width: e[t(306)] + e[t(298)], height: s };
}
function F1(n, x) {
  const t = cs;
  xx.font = x;
  let e = xx[t(311)](n[0]);
  for (let r = 0; r < n[t(310)]; r++) {
    let a = xx[t(311)](n[r]);
    a[t(313)] > e[t(313)] && (e = a);
  }
  const s = e[t(299)] + e[t(303)];
  return { width: e[t(306)] + e[t(298)], height: s };
}
const k = me;
(function(n, x) {
  const t = me, e = n();
  for (; []; )
    try {
      if (-parseInt(t(340)) / 1 * (parseInt(t(358)) / 2) + parseInt(t(384)) / 3 * (parseInt(t(304)) / 4) + parseInt(t(341)) / 5 * (-parseInt(t(325)) / 6) + -parseInt(t(388)) / 7 * (parseInt(t(372)) / 8) + parseInt(t(279)) / 9 + -parseInt(t(266)) / 10 * (parseInt(t(380)) / 11) + parseInt(t(386)) / 12 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(_e, 518795);
var B1 = Object[k(267)], D1 = Object.getOwnPropertyDescriptor, j1 = (n, x, t, e) => {
  const s = k;
  for (var i = e > 1 ? void 0 : e ? D1(x, t) : x, r = n[s(361)] - 1, a; r >= 0; r--)
    (a = n[r]) && (i = (e ? a(x, t, i) : a(i)) || i);
  return e && i && B1(x, t, i), i;
};
let Qs = document[k(314)]("my");
function bs(n) {
  const x = k;
  return typeof n == "number" ? n : typeof n == x(382) && n[x(280)]("px") ? parseFloat(n[x(324)](0, n[x(361)] - 2)) : n;
}
const wi = class {
  constructor(n) {
    const x = k;
    this[x(265)] = !![], this[x(313)] = {}, this[x(332)] = [], n != null && Object[x(286)](this, n);
  }
  isDirty() {
    return this[k(265)] ? !![] : this.dirty;
  }
  [k(335)]() {
    return [];
  }
  [k(276)]() {
    const n = k;
    if (this[n(343)]()) {
      let x = this.getChanged();
      for (let t = 0; t < x.length; t++) {
        let e = x[t];
        this[n(313)][e] = this[e];
      }
      return !![];
    }
    return ![];
  }
  [k(360)]() {
    const n = k;
    let x = Object[n(308)](this), t = this;
    x[n(327)]((e) => t[e] = H1[e]);
  }
  [k(281)]() {
    const n = k;
    let x = {}, t = [n(313), n(265), n(332)], e = Object[n(308)](this)[n(379)]((s) => t[n(287)](s) == -1);
    return Ii(x, this, e), delete x[n(294)], x;
  }
  [k(306)](n) {
    const x = k;
    n != null && Object[x(286)](this, n);
  }
  [k(278)](n, x) {
    const t = k;
    let e = Object[t(308)](n);
    for (let s = 0; s < e[t(361)]; s++) {
      let i = e[s], r = n[i];
      x != null && (i == t(348) ? (r = bs(r), x.width = r) : i == t(282) && (r = bs(r), x[t(282)] = r), i == t(392) && (r = bs(r), x[t(392)] = r, x[t(342)]())), this[i] = r;
    }
  }
  [k(378)](n, x) {
    this[n] = x;
  }
  [k(357)](n, x, t) {
    const e = k;
    let s = this.borderWidth || 0, i = s, r = s, a = n, o = x;
    if (this[e(319)] != null ? a = this.backgroundWidth : this[e(298)] != null ? a = n * this[e(298)] : this._backgroundImageObject != null && (a = this[e(294)][e(348)]), this[e(303)] != null ? o = this[e(303)] : this[e(275)] != null ? o = x * this.backgroundHeightRate : this[e(294)] != null && (o = this._backgroundImageObject[e(282)]), this[e(398)] != null) {
      let h = this[e(398)];
      h == e(318) ? i += n * 0.5 - a * 0.5 : h == "left" || h == e(310) && (i += n - a);
    } else
      this[e(320)] != null ? i += this[e(320)] : this[e(404)] != null && (i += n * this[e(404)]);
    if (this[e(321)] != null) {
      let h = this[e(321)];
      h == "center" ? r += x * 0.5 - o * 0.5 : h == "top" || h == e(371) && (r += x - o);
    } else
      this[e(406)] != null ? r += this[e(406)] : this[e(363)] != null && (r += x * this[e(363)]);
    return this.backgroundRepeat == e(402), { x: i, y: r, width: a, height: o };
  }
  [k(301)](n) {
    const x = k, t = this;
    t[x(334)] != null && (n[x(334)] = t[x(334)]), t[x(394)] != null && (n[x(394)] = t.textAlign), t.textBaseline != null && (n[x(312)] = t[x(312)]), t[x(331)] != null && (n[x(331)] = t[x(331)]), t.strokeStyle != null && (n[x(288)] = t[x(288)]), t[x(356)] != null && (n[x(356)] = t[x(356)]), t[x(300)] != null && (n[x(300)] = t[x(300)]), t[x(316)] != null && (n[x(316)] = t[x(316)]), t[x(291)] != null && (n[x(291)] = t[x(291)]), t[x(311)] != null ? n[x(302)](t[x(311)]) : n[x(302)]([]), t[x(295)] != null && (n[x(295)] = t.lineDashOffset), t[x(328)] != null && (n[x(328)] = t[x(328)]), t[x(290)] != null && (n.shadowBlur = t[x(290)]), t.shadowColor != null && (n[x(272)] = t[x(272)]), t[x(346)] != null && (n[x(346)] = t[x(346)]), t[x(405)] != null && (n.shadowOffsetY = t[x(405)]), t[x(390)] != null && (n[x(390)] = t[x(390)]);
  }
  [k(355)]() {
    const n = k;
    return (this[n(401)] || 0) * 2 + (this.padding || 0) * 2 + (this[n(316)] || 0);
  }
  static [k(381)](n) {
    const x = k;
    let t = new wi(n);
    return n[x(354)] != null && (t[x(368)] = n[x(354)]), t;
  }
  static [k(292)](n, x, t) {
    const e = k;
    let s;
    t == 1 ? s = T1(n, x[e(334)]) : s = F1(n, x[e(334)]);
    let i = s[e(348)], r = s.height;
    if (x[e(373)] != null)
      r = x.lineHeight;
    else {
      let o = x[e(334)] || e(271), c = o[e(400)](/.*?(\d+)px.*/);
      c != null && (r = parseInt(c[1]));
    }
    let a = r * t;
    return { width: i, height: a, lineHeight: r };
  }
};
let m0 = wi;
j1([I(k(283))], m0[k(369)], k(391), 2), Object.defineProperties(m0[k(369)], { border: { get() {
  return this[k(296)];
}, set(n) {
  const x = k;
  if (this[x(265)] = !![], n != null) {
    this[x(397)] = void 0, this.borderWidth = void 0, this[x(364)] = void 0;
    let t = n.toLowerCase()[x(317)](/\s+/ig, " ")[x(396)](" ");
    for (let e = 0; e < t[x(361)]; e++) {
      let s = t[e];
      z1(s) ? this.borderStyle = s : s.endsWith("px") ? this[x(401)] = parseFloat(s[x(324)](0, s[x(361)] - 2)) : this.borderColor = s;
    }
  }
  this[x(296)] = n;
} }, backgroundImage: { get() {
  return this[k(354)];
}, set(n) {
  const x = k;
  if (this[x(265)] = !![], this[x(354)] = n, n != null && (n = n[x(376)](), n[x(273)]("url("))) {
    this[x(294)] = void 0;
    let t = n[x(317)](/\s+/ig, " ");
    t = t.substring(5, t[x(361)] - 2), this[x(354)] = t;
    let e = this;
    X0.loadImage(t, function(s) {
      const i = x;
      e[i(294)] = s;
    });
  }
} }, backgroundSize: { get() {
  return this[k(375)];
}, set(n) {
  const x = k;
  if (this[x(265)] = !![], this[x(375)] = n, n != null && n != "initial") {
    let t = Zs(n), e = t[0], s = t[1];
    e != null && (e[x(366)] == x(347) ? this[x(319)] = e[x(387)] : this[x(298)] = e[x(387)]), s != null && (s[x(366)] == "number" ? this[x(303)] = s[x(387)] : this[x(275)] = s[x(387)]);
  }
} }, backgroundPosition: { get() {
  return this[k(351)];
}, set(n) {
  const x = k;
  if (this[x(265)] = !![], this[x(351)] = n, this[x(398)] = void 0, this[x(321)] = void 0, this.backgroundPositionX = void 0, this[x(406)] = void 0, this[x(404)] = void 0, this[x(363)] = void 0, n != null && n != x(370)) {
    let t = Zs(n), e = t[0], s = t[1];
    e != null && (e.type == x(347) ? this.backgroundPositionX = e[x(387)] : e.type == x(377) ? this[x(404)] = e[x(387)] : this[x(321)] = e[x(387)]), s != null && (s[x(366)] == x(347) ? this[x(406)] = s.value : s[x(366)] == x(377) ? this[x(363)] = s[x(387)] : this[x(398)] = s.value);
  }
} }, background: { get() {
  return this[k(326)];
}, set(n) {
  const x = k;
  if (this.dirty = !![], this[x(319)] = null, this[x(303)] = null, this[x(298)] = null, this.backgroundHeightRate = null, this[x(320)] = null, this.backgroundPositionY = null, this[x(404)] = null, this[x(363)] = null, this[x(354)] = null, this[x(368)] = null, n != null) {
    Qs[x(403)][x(365)] = n;
    let t = Qs[x(403)];
    this.backgroundColor = t.backgroundColor, this.backgroundRepeat = t[x(336)], this[x(368)] = t[x(368)], this[x(269)] = t.backgroundPosition, this.backgroundSize = t[x(389)];
  }
  this[x(326)] = n;
} } });
function Zs(n) {
  const x = k;
  let t = n.split(" "), e = [];
  for (let s = 0; s < t[x(361)]; s++) {
    let i = t[s];
    if (i[x(361)] == 0)
      continue;
    if (i[x(280)]("px")) {
      let a = parseFloat(i.substring(0, i[x(361)] - 2));
      e[x(274)]({ type: x(347), value: a });
    } else if (i[x(280)]("%")) {
      let a = parseFloat(i[x(324)](0, i[x(361)] - 1)) / 100;
      e[x(274)]({ type: "rate", value: a });
    } else
      typeof i == "string" && e[x(274)]({ type: x(382), value: i });
  }
  return e;
}
function z1(n) {
  const x = k;
  return x(383)[x(287)](n) != -1;
}
function _e() {
  const n = ["assign", "indexOf", "strokeStyle", "this.", "shadowBlur", "miterLimit", "measureText", "yStart", "_backgroundImageObject", "lineDashOffset", "_border", "startY", "backgroundWidthRate", "xStart", "lineJoin", "applyTo", "setLineDash", "backgroundHeight", "4deEnth", "createLinearGradient", "setStyles", "createRadialGradient", "keys", "addColorStop", "right", "lineDash", "textBaseline", "_preState", "createElement", "radiusStart", "lineWidth", "replace", "center", "backgroundWidth", "backgroundPositionX", "backgroundPositionYName", "borderWidth,globalAlpha,globalCompositeOperation,fillStyle,strokeStyle,shadowBlur,shadowColor,shadowOffsetX", "yStop", "substring", "8742BuzJYj", "_background", "forEach", "globalAlpha", "cacheImg", "repetition", "fillStyle", "_changed", "xStop", "font", "getChanged", "backgroundRepeat", `;

    if(!noChange){
        this.dirty = true;
    }
    return this.dirty;
`, "image", "radiusEnd", "4ppzsFs", "3090zwhbrV", "updatezIndex", "isDirty", '");}', "top", "shadowOffsetX", "number", "width", " === state.", "getGradient", "_backgroundPosition", "colors", "cache", "_backgroundImage", "calcGap", "lineCap", "getBackgroundRect", "495086hruoGt", "stopY", "reset", "length", "this._changed = [];", "backgroundPositionYRate", "borderColor", "background", "type", "startX", "backgroundImage", "prototype", "initial", "bottom", "3917000lUKiLB", "lineHeight", "119119119046106116111112111046099111109", "_backgroundSize", "trim", "rate", "set", "filter", "22XyHLOy", "fromPojo", "string", "none,hidden,dotted,dashed,solid,doubble,groove,ridge,inseet,outset,inherit", "2856759YXLAzo", `
    return this._changed;
`, "12985032BqbvRp", "value", "7ZHcYPK", "backgroundSize", "globalCompositeOperation", "className", "zIndex", ",lineCap,lineWidth,lineHeight,padding,borderStyle,borderColor,borderRadius,backgroundColor", "textAlign", "createPattern", "split", "borderStyle", "backgroundPositionXName", "left", "match", "borderWidth", "no-repeat", "style", "backgroundPositionXRate", "shadowOffsetY", "backgroundPositionY", "pattern", "dirty", "31270AgyaAq", "defineProperty", " != state.", "backgroundPosition", ",miterLimit,font,textAlign,textBaseline,lineDash,lineDashOffset,textPosition,color", "10px sans-serif", "shadowColor", "startsWith", "push", "backgroundHeightRate", "updateState", "stopX", "merge", "7838397XyCUVV", "endsWith", "toPojo", "height", "Style", "loadImage", "src"];
  return _e = function() {
    return n;
  }, _e();
}
X0.w != k(329) && (X0.w = k(374));
class N1 {
  constructor(x, t, e, s) {
    const i = k;
    this.startX = 0, this[i(297)] = 0, this[i(277)] = 0, this.stopY = 0, this[i(353)] = ![], this[i(352)] = [], this[i(367)] = x, this[i(297)] = t, this[i(277)] = e, this[i(359)] = s, this.cache = ![];
  }
  addColorStop(x, t) {
    const e = k;
    this[e(352)] == null && (this[e(352)] = []), this[e(352)][e(274)]([x, t]);
  }
  getGradient(x) {
    const t = k;
    let e = x[t(305)](this[t(367)], this.startY, this.stopX, this[t(359)]);
    if (this[t(352)] != null)
      for (var s = 0; s < this.colors.length; s++) {
        let i = this.colors[s];
        e[t(309)](i[0], i[1]);
      }
    return e;
  }
}
class R1 {
  constructor(x, t, e, s, i, r) {
    const a = k;
    this[a(299)] = 0, this[a(293)] = 0, this[a(315)] = 0, this.xStop = 0, this[a(323)] = 0, this[a(339)] = 0, this[a(352)] = [], this[a(299)] = x, this[a(293)] = t, this.radiusStart = e, this[a(333)] = s, this[a(323)] = i, this[a(339)] = r;
  }
  addColorStop(x, t) {
    const e = k;
    this.colors == null && (this[e(352)] = []), this[e(352)][e(274)]([x, t]);
  }
  getGradient(x) {
    const t = k;
    let e = x[t(307)](this[t(299)], this.yStart, this[t(315)], this.xStop, this[t(323)], this[t(339)]);
    if (this[t(352)] != null)
      for (var s = 0; s < this.colors[t(361)]; s++) {
        let i = this[t(352)][s];
        e.addColorStop(i[0], i[1]);
      }
    return e;
  }
}
let H1 = new m0();
class W1 {
  constructor(x, t) {
    const e = k;
    let s = this;
    this[e(338)] = x, typeof x == e(382) && (this[e(338)] = new Image(), this[e(338)][e(285)] = x, X0[e(284)](x, function(i) {
      const r = e;
      s[r(338)] = i;
    })), this[e(330)] = t || "no-repeat";
  }
  [k(350)](x) {
    const t = k;
    return this[t(264)] == null && (this[t(264)] = x[t(395)](this[t(338)], this[t(330)])), this[t(264)];
  }
}
let zx = k(322);
zx += k(270), zx += k(393), zx += ",textOffsetX,textOffsetY";
let ex = zx[k(396)](",");
{
  let n = "";
  for (let t = 0; t < ex[k(361)]; t++) {
    let e = ex[t];
    n += k(289) + e + k(349) + e, t + 1 < ex[k(361)] && (n += "&&");
  }
  let x = `
    if(this.dirty){
        return true;
    }
    let state = this._preState;

    let noChange = ` + n + k(337);
  m0[k(369)][k(343)] = new Function("", x);
}
{
  let n = k(362);
  for (let t = 0; t < ex[k(361)]; t++) {
    let e = ex[t];
    n += "if(this." + e + k(268) + e + '){ this._changed.push("' + e + k(344);
  }
  let x = `
    let state = this._preState;
    ` + n + k(385);
  m0.prototype[k(335)] = new Function("", x);
}
function me(n, x) {
  const t = _e();
  return me = function(e, s) {
    return e = e - 264, t[e];
  }, me(n, x);
}
(function(n, x) {
  const t = cx, e = n();
  for (; []; )
    try {
      if (-parseInt(t(346)) / 1 * (-parseInt(t(353)) / 2) + -parseInt(t(352)) / 3 + -parseInt(t(358)) / 4 * (-parseInt(t(344)) / 5) + parseInt(t(342)) / 6 + -parseInt(t(357)) / 7 * (parseInt(t(354)) / 8) + parseInt(t(345)) / 9 + parseInt(t(351)) / 10 * (parseInt(t(347)) / 11) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Ie, 862888);
let Qt;
function cx(n, x) {
  const t = Ie();
  return cx = function(e, s) {
    return e = e - 340, t[e];
  }, cx(n, x);
}
function vi(n) {
  const x = cx;
  let t = new KeyboardEvent(n[x(355)], n), e = t.preventDefault;
  if (t[x(341)] = function() {
    const s = x;
    n[s(341)](), e[s(349)](this);
  }, t[x(348)] = Qt, Qt) {
    const s = n[x(343)] == Qt.key;
    let i = t[x(340)] - Qt[x(340)];
    s && i < 400 && (t.isDouble = !![]);
  }
  return Qt = t, t;
}
function X1(n, x) {
  const t = cx;
  let e = {};
  x instanceof WheelEvent ? e = new WheelEvent(n, x) : window[t(350)] && x instanceof window[t(350)] ? e = new DragEvent(n, x) : x instanceof MouseEvent ? e = new MouseEvent(n, x) : x instanceof TouchEvent && (e = new TouchEvent(n, x));
  let s = e[t(341)];
  return e[t(341)] = function() {
    const i = t;
    x[i(341)](), s[i(349)](this);
  }, e[t(356)] = x, e;
}
let k0 = class {
  constructor(x) {
    this.type = x;
  }
};
class ki {
  constructor(x) {
    this.type = x;
  }
}
function Ie() {
  const n = ["4198FJvVaJ", "11074736JiQZVL", "type", "raw", "7GQCnwY", "221612ZihsrX", "time", "preventDefault", "7756818zwLLXP", "key", "65RirChU", "9665298BvvXCU", "1byFgzA", "15312fpmkou", "previous", "call", "DragEvent", "4260NQKjug", "4304475giVXBx"];
  return Ie = function() {
    return n;
  }, Ie();
}
const d = hx;
(function(n, x) {
  const t = hx, e = n();
  for (; []; )
    try {
      if (parseInt(t(330)) / 1 + -parseInt(t(369)) / 2 + -parseInt(t(388)) / 3 + parseInt(t(263)) / 4 * (-parseInt(t(380)) / 5) + -parseInt(t(387)) / 6 * (parseInt(t(312)) / 7) + parseInt(t(381)) / 8 + parseInt(t(255)) / 9 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(we, 519906);
var q1 = Object.defineProperty, G1 = Object.getOwnPropertyDescriptor, $ = (n, x, t, e) => {
  const s = hx;
  for (var i = e > 1 ? void 0 : e ? G1(x, t) : x, r = n[s(302)] - 1, a; r >= 0; r--)
    (a = n[r]) && (i = (e ? a(x, t, i) : a(i)) || i);
  return e && i && q1(x, t, i), i;
};
let Pi = new k0("touchstart"), Si = new k0("touchmove"), Ei = new k0(d(303)), Li = new k0(d(243)), Ci = new k0(d(329)), Y1 = new k0(d(233)), Oi = new k0("click"), Ai = new k0(d(377)), Mi = new k0(d(253)), Ti = new k0("mouseout"), Es = new k0(d(363)), Fi = new k0("selected"), Bi = new k0(d(349)), Di = new ki(d(212));
const $t = class extends Y0 {
  constructor() {
    const n = d;
    super(), this.id = 0, this[n(331)] = !![], this._isOutOfViewport = ![], this.id = A0[n(324)](), this.children = [], this[n(250)] = new as(), this[n(239)] = new m0(), this._style = new m0(), this.classList = [], this[n(224)] = [0, 0], this[n(314)] = {}, this[n(356)] = [], this[n(372)] = [];
  }
  [d(334)](n, x) {
    const t = d;
    if (x == null)
      throw new Error(t(357));
    let e = this._obb;
    (e == null || x != H0) && (this._obb = this.getOBB(x), e = this._obb);
    let s = e[t(361)][t(249)]();
    if (n && this[t(352)]()) {
      const r = this.getChildrenAABB(n, x);
      V[t(245)](s, r);
    }
    let i = this[t(232)][t(271)] || 0;
    return i != 0 && (s.x -= i * 0.5, s.y -= i * 0.5, s[t(220)] += i, s[t(214)] += i), s;
  }
  [d(283)](n) {
    const x = d;
    if (this[x(240)](Es), this.mouseEnabled == ![] || this[x(350)] == ![])
      return;
    let t = this[x(265)][x(392)]()[x(264)](), e = t[x(317)](n.dx, n.dy);
    this[x(223)](e.x, e.y);
  }
  [d(339)](n, x) {
    const t = d;
    return this[t(224)][0] = n, this.origin[1] = x, this;
  }
  [d(347)]() {
    throw new Error("getAllVisiable() not implements");
  }
  [d(229)](n) {
    const x = d;
    return this.getTransform()[x(319)](n);
  }
  getTransform() {
    const n = d;
    return _0[n(219)](this)[n(327)](this);
  }
  [d(222)](n) {
    return this[d(239)][n];
  }
  setStyles(n) {
    return this[d(351)](n);
  }
  isVisible() {
    return this[d(358)];
  }
  css(n, x) {
    const t = d;
    if (typeof n == t(298) && x != null) {
      let e = n;
      n = {}, n[e] = x;
    }
    return this[t(239)][t(320)](n, this), this[t(239)][t(386)] = !![], this;
  }
  clearCss() {
    const n = d;
    this[n(239)][n(362)](), this[n(239)][n(386)] = !![];
  }
  [d(216)](n) {
    const x = d;
    W[x(212)](this.classList, n), this[x(365)][x(335)](n), this[x(239)][x(386)] = !![];
  }
  [d(236)](n) {
    W.remove(this.classList, n), this.style.dirty = !![];
  }
  getTransformByDeep(n) {
    const x = d;
    return _0[x(219)](this)[x(287)](this, n);
  }
  [d(373)]() {
    return this[d(287)](H0);
  }
  [d(392)]() {
    return this[d(287)](Bt);
  }
  [d(246)]() {
    const n = d;
    return this.dirty = !![], this[n(358)] = !![], this;
  }
  [d(322)]() {
    const n = d;
    return this[n(386)] = !![], this[n(358)] = ![], this;
  }
  [d(248)](n, x) {
    const t = d, e = n.render;
    if (this[t(384)] = ![], !e.dontNeedPickup(this)) {
      if (this[t(254)] == t(242)) {
        this[t(384)] = !![];
        return;
      }
      this[t(384)] = e[t(259)](x);
    }
  }
  [d(385)](n, x) {
    const t = d;
    this.isPointOn = ![];
    const e = n[t(343)];
    e.dontNeedPickup(this) || (x == null && (x = this._pickRadius), this[t(384)] = e[t(355)](x, null));
  }
  [d(238)](n) {
    const x = d;
    return this[x(370)] = n, this;
  }
  [d(286)]() {
    return this.userData;
  }
  [d(280)]() {
    const n = d;
    return this[n(370)] = void 0, this;
  }
  definePosition(n, x) {
    const t = d;
    if (n == null || x == null)
      throw new Error(t(318));
    this[t(314)][n] = x;
  }
  [d(272)]() {
    return Object[d(341)](this.positions);
  }
  getPoint(n, x) {
    return this.getLocalPoint(n, x);
  }
  [d(307)](n, x, t) {
    const e = d;
    let s = this[e(313)](), i = s[e(302)] - 1;
    if (x != null) {
      if (x >= i)
        throw console[e(360)](this), console[e(360)](x, i), new Error(e(346));
      s = [s[x], s[x + 1]];
    }
    return A.betweenPoints(s, n, t);
  }
  [d(282)](n, x, t = ![]) {
    const e = d;
    let s = this, i = s[e(371)], r = [], a = typeof x == e(340);
    for (var o = 0; o < i[e(302)]; o++) {
      let c = i[o];
      if (a ? x(c) && r.push(c) : c[n] == x && r[e(335)](c), t) {
        let h = c[e(282)](n, x, t);
        r = r.concat(h);
      }
    }
    return r;
  }
  querySelectorAll(n) {
    const x = d;
    let t, e, s = n, i, r = n.match(/(.*)\s*(\[.*\])/);
    if (r && (s = r[1], i = r[2]), s[x(247)](".") ? e = (a) => a[x(365)][x(225)](s) != -1 : s[x(247)]("#") ? e = (a) => a.id == s[x(288)](1) : s != "" && (e = (a) => a[x(348)] == s), i != null && (t = i[x(241)](/\[\s*(.*?)\s*([>|<|=]{1,2})\s*['"]{0,1}(.*?)['"]{0,1}]$/)) != null) {
      let a = t[1], o = t[2], c = t[3], h = (f) => "" + f[a] == c;
      o == ">" ? h = (f) => f[a] > parseInt(c) : o == ">=" ? h = (f) => f[a] >= parseInt(c) : o == "<" ? h = (f) => f[a] < parseInt(c) : o == "<=" && (h = (f) => f[a] <= parseInt(c));
      let l = h;
      return e != null && (l = (f) => e(f) && h(f)), this[x(282)](a, l, !![]);
    }
    return this._findChildren(s, e, !![]);
  }
  querySelector(n) {
    return this[d(301)](n)[0];
  }
  getAllNodes() {
    const n = d;
    return this[n(282)](n(295), !![], !![]);
  }
  [d(270)]() {
    const n = d;
    return this[n(282)](n(300), !![], !![]);
  }
  [d(383)](n) {
    const x = d;
    this[x(278)] == !![] && this[x(240)](Pi);
  }
  touchendHandler(n) {
    const x = d;
    this[x(278)] == !![] && this[x(240)](Ei);
  }
  [d(290)](n) {
    const x = d;
    this[x(278)] == !![] && this[x(240)](Si);
  }
  [d(306)](n) {
    const x = d;
    this[x(278)] == !![] && this[x(240)](Li);
  }
  [d(221)](n) {
    this[d(278)] == !![] && this.dispatchEvent(Ci);
  }
  mouseoverHandler(n) {
    this[d(278)] == !![] && this.dispatchEvent(n);
  }
  [d(291)](n) {
    const x = d;
    this.mouseEnabled == !![] && this[x(240)](n);
  }
  [d(345)](n) {
    this[d(278)] == !![] && this.dispatchEvent(Mi);
  }
  [d(315)](n) {
    const x = d;
    this[x(278)] == !![] && this[x(240)](Ti);
  }
  [d(379)](n) {
    const x = d;
    this[x(278)] == !![] && this[x(240)](Es);
  }
  [d(284)](n) {
    const x = d;
    this[x(278)] == !![] && this[x(240)](Oi);
  }
  [d(325)](n) {
    const x = d;
    this[x(278)] == !![] && this[x(240)](Ai);
  }
  [d(228)]() {
    const n = d;
    this[n(278)] == !![] && (this[n(276)] = !![], this[n(240)](Fi));
  }
  [d(391)]() {
    const n = d;
    this[n(276)] = ![], this[n(278)] == !![] && this.dispatchEvent(Bi);
  }
  [d(294)](n, x) {
    const t = d;
    let e = this[t(296)](n);
    if (e == null && this[t(384)] && this[t(358)] && (this[t(278)] == ![] && x != !![] || (e = this)), e != null) {
      let s = e[t(213)]();
      s != null && (e = s);
    }
    return e;
  }
  [d(296)](n, x = ![]) {
    const t = d, e = this;
    let s = e[t(371)];
    if (this[t(358)] == ![])
      return null;
    for (var i = s[t(302)] - 1; i >= 0; i--) {
      let r = s[i];
      if (r[t(305)] == ![] && r[t(371)][t(302)] > 0 && e[t(331)] == ![])
        continue;
      let a = r[t(294)](n, x);
      if (a != null)
        return a;
    }
    return null;
  }
  [d(366)](n) {
    const x = d;
    return V1(this, n), this[x(386)] = !![], this;
  }
  [d(277)](n) {
    const x = d;
    this[x(257)] = n, this[x(265)] && this[x(265)].updatezIndex(), this[x(386)] = !![];
  }
  [d(378)]() {
    const n = d;
    this[n(371)][n(285)](function(x, t) {
      const e = n;
      return x.zIndex - t[e(257)];
    }), this[n(386)] = !![];
  }
  updateChildrenDeep(n = ![]) {
    const x = d;
    if (this[x(371)].length > 0) {
      const t = this[x(371)];
      for (let e = 0; e < t.length; e++) {
        const s = t[e];
        s.deep = this[x(367)] + 1, s[x(371)].length > 0 && s.updateChildrenDeep(n);
      }
    }
  }
  [d(326)]() {
    return this.children;
  }
  [d(268)](n) {
    const x = d;
    return this[x(371)][x(225)](n) != -1;
  }
  [d(352)]() {
    const n = d;
    return this[n(371)][n(302)] > 0;
  }
  [d(292)]() {
    const n = d;
    return this[n(265)] && (this[n(240)](Di), this[n(265)][n(336)](this)), this[n(386)] = !![], this;
  }
  [d(212)]() {
    return this[d(292)]();
  }
  [d(267)](n) {
    const x = d;
    this[x(386)] = !![];
    for (var t = 0; t < n[x(302)]; t++) {
      let e = n[t];
      e[x(265)] = this, e[x(367)] = this[x(367)] + 1, this.children[x(335)](e), e[x(352)]() && e[x(321)](!![]);
    }
    this.updatezIndex();
  }
  removeChild(n) {
    const x = d;
    this[x(386)] = !![];
    let t = this[x(371)][x(225)](n);
    return t == -1 ? this : (W[x(299)](this[x(371)], t), n.parent = null, this);
  }
  [d(261)](n) {
    const x = d;
    for (var t of n)
      this[x(336)](t);
    return this;
  }
  [d(338)]() {
    const n = d;
    return this[n(386)] = !![], this[n(371)][n(235)](function(x) {
      const t = n;
      x[t(265)] = null;
    }), this[n(371)].length = 0, this[n(386)] = !![], this;
  }
  [d(234)](n, x) {
    const t = d, e = this[t(371)][t(225)](n);
    if (e == -1)
      throw new Error(t(227));
    this.children[e] = x, n.parent = null, x[t(265)] = this;
  }
  getPaintedAABBInLayer() {
    const n = d;
    return this[n(293)][n(361)];
  }
  [d(374)](n, x) {
    return ji(this, n, x);
  }
  [d(262)]() {
    const n = d;
    let x = this;
    for (; x[n(265)] != null; )
      x = x.parent;
    return x;
  }
  [d(230)](n, x) {
    const t = d;
    return this[t(392)]()[t(264)]()[t(319)]({ x: n, y: x });
  }
  [d(226)](n, x) {
    const t = d;
    return this.getStageTransform()[t(319)]({ x: n, y: x });
  }
  [d(269)](n, x) {
    return this[d(373)]().point({ x: n, y: x });
  }
  [d(342)](n, x, t) {
    const e = d;
    let s = this[e(226)](n, x);
    return t[e(230)](s.x, s.y);
  }
  [d(231)](n) {
    const x = d;
    if (this[x(386)] = !![], this[x(356)] == null && (this.inLinks = []), this[x(356)][x(335)](n), this[x(309)](x(231))) {
      let t = new Event("addInLink");
      t.link = n, this[x(240)](t);
    }
  }
  [d(304)](n) {
    const x = d;
    if (this[x(386)] = !![], this.outLinks[x(335)](n), this[x(309)](x(304))) {
      let t = new Event(x(304));
      t.link = n, this[x(240)](t);
    }
  }
  removeInLink(n) {
    const x = d;
    if (this[x(386)] = !![], W.remove(this[x(356)], n), this[x(309)](x(252))) {
      let t = new Event(x(252));
      t[x(244)] = n, this[x(240)](t);
    }
  }
  [d(258)](n) {
    const x = d;
    if (this[x(386)] = !![], this.outLinks != null && W[x(212)](this[x(372)], n), this[x(309)](x(258))) {
      let t = new Event("removeOutLink");
      t.link = n, this[x(240)](t);
    }
  }
  getLinks() {
    const n = d;
    let x = [];
    return this[n(356)] && (x = x[n(311)](this.inLinks)), this[n(372)] && (x = x[n(311)](this[n(372)])), x;
  }
  [d(364)](n = H0) {
    const x = d;
    let t = this[x(354)]();
    return this[x(367)] < n ? new rx(t) : (t = this.getTransformByDeep(n)[x(328)](t), new rx(t));
  }
  [d(390)](n, x) {
    const t = d;
    let e = this[t(281)](x - 1e-4, n), s = this[t(281)](x + 1e-4, n), i = s.x - e.x, r = s.y - e.y;
    return Math[t(344)](r, i);
  }
  [d(353)]() {
    const n = d;
    return this[n(218)]()[n(310)]((t) => {
      t[n(333)]();
    })[n(211)]((t) => t != null);
  }
  [d(316)]() {
    const n = d;
    let x = this, t = x[n(265)];
    if (t != null) {
      const e = x[n(334)](![], H0);
      return !t[n(334)](![], H0)[n(273)](e);
    }
    return ![];
  }
  [d(213)]() {
    const n = d;
    let x = this[n(323)]();
    for (let t = 0; t < x[n(302)]; t++)
      if (x[t][n(382)])
        return x[t];
    return null;
  }
  [d(323)]() {
    const n = d;
    if (this[n(265)] == null)
      return [];
    let x = this, t = [];
    for (; x.parent != null; )
      t[n(335)](x[n(265)]), x = x[n(265)];
    return t[n(210)]();
  }
  [d(251)](n) {
    const x = d;
    if (this === n.parent)
      return !![];
    let t = n[x(323)]();
    return W.hasChild(t, this);
  }
  toIdMap() {
    const n = d;
    let x = $t[n(274)](this.children), t = /* @__PURE__ */ new Map();
    return x.forEach((e) => {
      t[n(266)](e.id, e);
    }), t[this.id] = this, t;
  }
  [d(256)]() {
    const n = d;
    this[n(368)] = !![], this[n(265)] && this[n(265)][n(336)](this), this[n(393)] = void 0, this[n(239)] = void 0, this.children = void 0, this[n(250)] = void 0, this[n(314)] = void 0, this[n(293)][n(361)] = void 0, this.origin = void 0, this[n(370)] = void 0, this[n(356)] = void 0, this.outLinks = void 0;
  }
  static [d(274)](n, x) {
    const t = d;
    let e = [];
    for (var s = 0; s < n[t(302)]; s++) {
      let i = n[s];
      if ((x == null || x(i) == !![]) && (e[t(335)](i), i[t(371)] && i[t(371)][t(302)] > 0)) {
        let r = $t.flatten(i[t(371)], x);
        e = e.concat(r);
      }
    }
    return e;
  }
  static getNoChildrensObjects(n) {
    const x = d;
    let t = $t[x(274)](n);
    return t = $t.flatten(n, (e) => W[x(359)](t, e.parent)), t;
  }
  static getAABB(n, x = ![], t) {
    const e = d;
    let s = n[0].getAABB(x, t)[e(249)]();
    for (let i = 1; i < n[e(302)]; i++)
      s = V[e(245)](s, n[i][e(334)](x, t));
    return s;
  }
};
function we() {
  const n = ["mousePickupPath", "clone", "transform", "isAncestors", "removeInLink", "mouseenter", "pickType", "7039899aKNSKq", "_destory", "zIndex", "removeOutLink", "isMouseInPath", "scaleX", "removeChilds", "getRoot", "4BwRDmQ", "invert", "parent", "set", "addChilds", "hasChild", "toLayerXY", "getAllLinks", "lineWidth", "getPositionNames", "isIntersectRect", "flatten", "添加自己为子节点了2", "isSelected", "setzIndex", "mouseEnabled", "互为子节点了", "removeUserData", "getPoint", "_findChildren", "mousedragHandler", "clickHandler", "sort", "getUserData", "getTransformByDeep", "substring", "name", "touchmoveHandler", "mousemoveHandler", "removeFromParent", "_obb", "pickUp", "isNode", "pickUpChild", "serializers", "string", "removeAt", "isLink", "querySelectorAll", "length", "touchend", "addOutLink", "painted", "mousedownHandler", "getLocalPoint", "rotation", "hasListener", "map", "concat", "1113gBpzZd", "getSegmentPoints", "positions", "mouseoutHandler", "isOutOfParent", "vec", "definePosition arguments error.", "point", "merge", "updateChildrenDeep", "hide", "getAncestors", "next", "dblclickHandler", "getChildren", "getTransform", "points", "mouseup", "632240OnJeBF", "paintChildrenWhenOutOfViewport", "depth", "upgradeParent", "getAABB", "push", "removeChild", "重复添加", "removeAllChild", "setOrigin", "function", "keys", "toObjectLocalXY", "render", "atan2", "mouseenterHandler", "segIndex out of bounds.", "getAllVisiable", "className", "unselected", "draggable", "css", "hasChildren", "upgradeLinks", "_OBBPoints", "isMouseInStroke", "inLinks", "minDeep is required.", "visible", "notContains", "log", "aabb", "reset", "mousedragend", "getOBB", "classList", "addChild", "deep", "destroyed", "373310DzxEGJ", "userData", "children", "outLinks", "getLayerTransform", "getChildrenAABB", "prototype", "editable", "dblclick", "updatezIndex", "mousedragEndHandler", "3369490cUnmnR", "4977792WYAuRN", "frozen", "touchstartHandler", "isPointOn", "mousePickupStroke", "dirty", "2448PdxZHF", "1774032RvMWaU", "skewX", "getK", "unselectedHandler", "getStageTransform", "listeners", "reverse", "filter", "remove", "getTopFrozenParent", "height", "_pickRadius", "addClass", "skewY", "getLinks", "getCS", "width", "mouseupHandler", "getStyle", "translateWith", "origin", "indexOf", "toStageXY", "replace child not found", "selectedHandler", "transformPoint", "stageToLocalXY", "addInLink", "_style", "mousemove", "replaceChild", "forEach", "removeClass", "showSelected", "setUserData", "style", "dispatchEvent", "match", "rect", "mousedown", "link", "union", "show", "startsWith"];
  return we = function() {
    return n;
  }, we();
}
function hx(n, x) {
  const t = we();
  return hx = function(e, s) {
    return e = e - 210, t[e];
  }, hx(n, x);
}
let F = $t;
$([I("DisplayObject")], F.prototype, d(348), 2), $([I("rect")], F.prototype, d(254), 2), $([I(null)], F.prototype, "paintSelected", 2), $([I(![])], F.prototype, "painted", 2), $([I(![])], F.prototype, d(384), 2), $([I(!![])], F[d(375)], d(386), 2), $([I(null)], F[d(375)], d(215), 2), $([I(![])], F.prototype, d(368), 2), $([I([d(348), "id", d(289), d(257), "frozen", d(376), "selectedStyle", d(278), "connectable", d(370), d(237), d(350), d(358), d(224), "classList"])], F.prototype, d(297), 2), $([I(0)], F.prototype, d(257), 2), $([I(0)], F[d(375)], d(332), 2), $([I(![])], F[d(375)], d(382), 2), $([I(1)], F[d(375)], d(260), 2), $([I(1)], F[d(375)], "scaleY", 2), $([I(0)], F[d(375)], d(389), 2), $([I(0)], F[d(375)], d(217), 2), $([I(0)], F[d(375)], d(367), 2), $([I(0)], F.prototype, d(308), 2), $([I(!![])], F[d(375)], d(358), 2), $([I(!![])], F[d(375)], d(237), 2), $([I(!![])], F[d(375)], "serializeable", 2), $([I(!![])], F[d(375)], "connectable", 2), $([I(!![])], F[d(375)], d(278), 2), $([I(!![])], F.prototype, d(350), 2), $([I(![])], F.prototype, d(276), 2), $([I(!![])], F[d(375)], "editable", 2);
function ji(n, x, t) {
  const e = d;
  let s = new V(0, 0, 0, 0);
  if (n[e(352)]()) {
    let r = n[e(326)]();
    s = r[0][e(334)](x, t);
    for (var i = 1; i < r[e(302)]; i++) {
      let o = r[i], c = o[e(334)](x, t);
      V[e(245)](s, c);
    }
  }
  return s;
}
function V1(n, x) {
  const t = d;
  if (n === x)
    throw console[t(360)](n), new Error(t(275));
  if (W.hasChild(n.getAncestors(), x) && (console[t(360)](t(279)), console[t(360)](n, x)), n[t(265)] === x && (console.log("互为子节点了2"), console[t(360)](n, x)), n[t(386)] = !![], x.parent = n, x[t(367)] = n.deep + 1, n[t(371)].indexOf(x) != -1)
    throw console.log(n, x), new Error(t(337));
  return n[t(371)][t(335)](x), x[t(371)][t(302)] > 0 && x[t(321)](!![]), n[t(378)](), n;
}
(function(n, x) {
  const t = ke, e = n();
  for (; []; )
    try {
      if (-parseInt(t(484)) / 1 + parseInt(t(503)) / 2 * (-parseInt(t(486)) / 3) + -parseInt(t(488)) / 4 * (parseInt(t(492)) / 5) + parseInt(t(507)) / 6 * (-parseInt(t(490)) / 7) + parseInt(t(495)) / 8 * (-parseInt(t(493)) / 9) + parseInt(t(501)) / 10 + parseInt(t(497)) / 11 * (parseInt(t(502)) / 12) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(ve, 138978);
function ve() {
  const n = ["1372TvwFug", "MAX_SAFE_INTEGER", "516355PbRUvt", "toStageXY", "2785BOnrHZ", "9fxbclQ", "scaleX", "1097944kmqzKT", "hasChildren", "2920643fheFBG", "MIN_SAFE_INTEGER", "length", "width", "2538450RwGiYV", "24GoDUzZ", "288niYzqo", "scaleY", "height", "scaleBy", "12cyKgGb", "translateWith", "55301HUhNjA", "getChildren", "2391cfFKOK", "resizeTo"];
  return ve = function() {
    return n;
  }, ve();
}
function U1(n, x, t, e, s) {
  const i = ke;
  let r = n[i(500)] * n[i(494)], a = n.height * n[i(504)], o = r * x - r, c = a * t - a;
  if (e != null && s != null) {
    let h = { x: n[i(500)] * 0.5, y: n[i(505)] * 0.5 }, l = n[i(491)](h.x, h.y), f = (e - l.x) / 2, y = (s - l.y) / 2;
    x >= 1 ? (o += f, c += y) : (o -= f * x, c -= y * t);
  }
  n[i(508)](-(o / 2), -(c / 2)), n[i(506)](x, t);
}
function ke(n, x) {
  const t = ve();
  return ke = function(e, s) {
    return e = e - 484, t[e];
  }, ke(n, x);
}
var ps = lx;
function Pe() {
  var n = ["show", "552020pQNMJD", "rgba(0,255,0, 0.4)", "14GDlHyR", "500870bIxFng", "5864fjtzaF", "2136244VwfKAE", "338559BTbKjL", "5qpzThf", "top", "visible", "11939939JEVJyN", "hide", "rgba(255,0,0,0.3)", "right", "3194868XWmdfm", "364lrayGt", "bottom", "18KsMjKG", "rgba(0,255,0, 0.9)"];
  return Pe = function() {
    return n;
  }, Pe();
}
(function(n, x) {
  for (var t = lx, e = n(); []; )
    try {
      var s = parseInt(t(468)) / 1 + -parseInt(t(450)) / 2 * (-parseInt(t(454)) / 3) + parseInt(t(453)) / 4 + -parseInt(t(455)) / 5 * (parseInt(t(462)) / 6) + -parseInt(t(463)) / 7 * (-parseInt(t(452)) / 8) + -parseInt(t(465)) / 9 * (-parseInt(t(451)) / 10) + -parseInt(t(458)) / 11;
      if (s === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Pe, 396415);
function lx(n, x) {
  var t = Pe();
  return lx = function(e, s) {
    e = e - 450;
    var i = t[e];
    return i;
  }, lx(n, x);
}
class K1 {
  constructor() {
    var x = lx;
    this[x(457)] = ![], this.lineDashScale = 1, this.styleX = new m0({ strokeStyle: x(460), fillStyle: "rgba(255,0,0,0.9)", textAlign: x(461), textBaseline: x(456), lineWidth: 1 }), this.styleY = new m0({ strokeStyle: x(469), fillStyle: x(466), textBaseline: x(464), lineWidth: 1 });
  }
  [ps(467)]() {
    this.visible = !![];
  }
  [ps(459)]() {
    var x = ps;
    this[x(457)] = ![];
  }
}
const Bx = Ee;
(function(n, x) {
  const t = Ee, e = n();
  for (; []; )
    try {
      if (-parseInt(t(208)) / 1 * (parseInt(t(201)) / 2) + -parseInt(t(205)) / 3 + -parseInt(t(207)) / 4 + -parseInt(t(209)) / 5 * (parseInt(t(200)) / 6) + parseInt(t(202)) / 7 + parseInt(t(211)) / 8 + parseInt(t(203)) / 9 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Se, 608511);
function Se() {
  const n = ["2514628BRFcLP", "4SlRRRX", "1215KUfZdg", "getItem", "7483336WRPNpN", "_jtopo_debug_mode", "24534mJJRce", "217454pFVwAB", "7425593olUOoG", "12445218jBJkRr", "true", "2139945rCZWpu", "setItem"];
  return Se = function() {
    return n;
  }, Se();
}
function Ee(n, x) {
  const t = Se();
  return Ee = function(e, s) {
    return e = e - 200, t[e];
  }, Ee(n, x);
}
let yt = { isDebug: localStorage[Bx(210)](Bx(212)) == Bx(204), showFPS: ![], paintAABB: ![], debugInfo: null, debugMode: function() {
  const n = Bx;
  let x = localStorage[n(210)]("_jtopo_debug_mode") == n(204), t = !x;
  localStorage[n(206)]("_jtopo_debug_mode", "" + t), yt.isDebug = t;
} };
(function(n, x) {
  for (var t = Ce, e = n(); []; )
    try {
      var s = -parseInt(t(312)) / 1 + -parseInt(t(321)) / 2 * (-parseInt(t(314)) / 3) + -parseInt(t(309)) / 4 * (-parseInt(t(313)) / 5) + -parseInt(t(310)) / 6 + parseInt(t(319)) / 7 + -parseInt(t(318)) / 8 + -parseInt(t(316)) / 9 * (-parseInt(t(320)) / 10);
      if (s === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Le, 247908);
function Le() {
  var n = ["61348kcuYmQ", "1691250PFdzVf", "writable", "163801pLYaxh", "95EcGzOU", "6666QkdUEn", "defineProperty", "27KaiIjI", "enumerable", "837872ZELWhk", "786464nBdCQw", "715270fjPGTW", "162dpdcOk"];
  return Le = function() {
    return n;
  }, Le();
}
function V0(n, x) {
  for (var t in x) {
    let e = x[t];
    Q1(n, t, e);
  }
}
function Ce(n, x) {
  var t = Le();
  return Ce = function(e, s) {
    e = e - 309;
    var i = t[e];
    return i;
  }, Ce(n, x);
}
function Q1(n, x, t) {
  var e = Ce;
  t.writable == null && (t[e(311)] = !![]), t[e(317)] == null && (t[e(317)] = !![]), Object[e(315)](n, x, t);
}
(function(n, x) {
  for (var t = Oe, e = n(); []; )
    try {
      var s = -parseInt(t(199)) / 1 * (-parseInt(t(206)) / 2) + parseInt(t(203)) / 3 * (-parseInt(t(195)) / 4) + parseInt(t(196)) / 5 * (-parseInt(t(201)) / 6) + parseInt(t(205)) / 7 * (-parseInt(t(193)) / 8) + -parseInt(t(200)) / 9 * (-parseInt(t(197)) / 10) + parseInt(t(194)) / 11 * (parseInt(t(204)) / 12) + parseInt(t(202)) / 13;
      if (s === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Ae, 326452);
function Oe(n, x) {
  var t = Ae();
  return Oe = function(e, s) {
    e = e - 193;
    var i = t[e];
    return i;
  }, Oe(n, x);
}
class hs {
  constructor(x) {
    var t = Oe;
    this[t(198)] = 0, this.x = x.x, this.y = x.y;
  }
}
function Ae() {
  var n = ["684KVaQxH", "1548114tkTHWZ", "5896969iIlYdT", "3DOCTVm", "742776RcCVlC", "52185xfrVBn", "29186vrLRTT", "592IfRdTn", "33OEnGJr", "300016PfoZRM", "10YSDnFT", "84230dWxTRJ", "length", "13UnRZct"];
  return Ae = function() {
    return n;
  }, Ae();
}
(function(n, x) {
  const t = l0, e = n();
  for (; []; )
    try {
      if (-parseInt(t(492)) / 1 * (parseInt(t(489)) / 2) + -parseInt(t(506)) / 3 + -parseInt(t(470)) / 4 + -parseInt(t(496)) / 5 + parseInt(t(481)) / 6 + -parseInt(t(471)) / 7 * (-parseInt(t(503)) / 8) + parseInt(t(499)) / 9 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Te, 691821);
function l0(n, x) {
  const t = Te();
  return l0 = function(e, s) {
    return e = e - 468, t[e];
  }, l0(n, x);
}
function Z1(n, x, t, e) {
  const s = l0, i = n.x, r = x.x, a = n.y, o = x.y, c = [r - i, o - a];
  z[s(468)](c, c);
  const h = [-c[1] * e, c[0] * e], l = A[s(478)](n, h, t), f = A[s(478)](x, h, t);
  return [l, f];
}
function J1(n, x, t) {
  const e = l0, s = n.x, i = x.x, r = n.y, a = x.y, o = [i - s, a - r];
  z[e(468)](o, o);
  const c = [-o[1] * t, o[0] * t], h = A[e(478)](n, c, 1), l = A[e(478)](x, c, 1);
  return [h[0], l[0]];
}
function $1(n, x, t) {
  const e = l0, s = [n.x - x.x, n.y - x.y], i = [t.x - x.x, t.y - x.y], r = z[e(468)]([], i), a = z[e(498)](s, r), o = z[e(482)]([], r, a);
  return o[e(472)] = a, o;
}
function tr(n, x, t) {
  const e = l0, s = $1(n, x, t), i = [t.x - x.x, t.y - x.y], r = z.len(i), a = s.projectionLen / r, o = new hs();
  return o.x = x.x + s[0], o.y = x.y + s[1], o[e(509)] = r, o[e(472)] = s[e(472)], o[e(502)] = a, o;
}
function xr(n, x, t) {
  const e = l0, s = [n.x - x.x, n.y - x.y], i = [t.x - x.x, t.y - x.y], r = z[e(468)]([], i), a = z[e(485)](i);
  let o;
  const c = z[e(498)](s, r);
  if (c > a)
    o = t;
  else if (c < 0)
    o = x;
  else {
    let l = z[e(482)]([], r, c);
    o = { x: x.x + l[0], y: x.y + l[1] };
  }
  let h = new hs(o);
  return h[e(509)] = a, h[e(472)] = c, h.rate = c / a, h;
}
function zs(n, x) {
  const t = l0;
  if (x.length < 2)
    throw new Error("number of points is less than 2");
  let e = new hs(x[0]), s = Number[t(508)];
  for (let i = 0; i < x[t(484)] - 1; i++) {
    const r = x[i], a = x[i + 1], o = xr(n, r, a), c = A[t(507)](o, n);
    c < s && (e = o, e[t(483)] = [r, a], e[t(488)] = c, e.segIndex = i, s = c);
  }
  return e;
}
function Me(n, x, t, e, s = ![]) {
  const i = l0, r = [x.x - n.x, x.y - n.y], a = [e.x - t.x, e.y - t.y], o = z[i(468)]([], [-r[1], r[0]]), c = z[i(468)]([], [-a[1], a[0]]), h = z[i(498)](o, [n.x, n.y]), l = z[i(498)](c, [t.x, t.y]), f = o[0], y = o[1], _ = c[0], b = c[1], P = f * b - _ * y;
  if (P == 0)
    return null;
  const v = { x: (b * h - y * l) / P, y: (f * l - _ * h) / P };
  return s == ![] && (!Js(v, n, x) || !Js(v, t, e)) ? null : v;
}
function zi(n, x, t, e = ![]) {
  const s = l0;
  if (t[s(484)] < 2)
    throw new Error(s(493));
  let i = [];
  for (var r = 0; r < t.length - 1; r++) {
    const a = t[r], o = t[r + 1];
    let c = Me(n, x, a, o, e);
    c != null && i[s(480)](c);
  }
  return i = er(i), i;
}
function Js(n, x, t) {
  const e = l0;
  let s = [t.x - x.x, t.y - x.y], i = z[e(485)](s), r = { x: (x.x + t.x) / 2, y: (x.y + t.y) / 2 }, a = [n.x - r.x, n.y - r.y];
  return z.len(a) * 2 <= i + 1e-10;
}
function er(n) {
  const x = l0;
  let t = {}, e = [];
  for (var s = 0; s < n[x(484)]; s++) {
    let i = n[s], r = i.x[x(479)](6) + "-" + i.y[x(479)](6);
    t[r] == null && (e[x(480)](i), t[r] = i);
  }
  return e;
}
function nr(n, x, t) {
  const e = l0;
  let s = Number[e(508)], i = null;
  for (var r = 0; r < x[e(484)]; r++) {
    const a = x[r], o = a[e(500)](Bt)[e(486)];
    a[e(475)] && o[e(480)](o[0]), _i(o[e(484)] >= 2, a, o);
    let c = zs(n, o);
    c[e(488)] < s && c[e(488)] < t && (s = c.dist, c.object = a, i = c);
  }
  return i;
}
function sr(n, x, t) {
  const e = l0;
  let s = Number[e(508)], i = { object: null, anchorName: null };
  for (let r = 0; r < x[e(484)]; r++) {
    const a = x[r];
    let o = a[e(495)](Bt), c = a[e(491)]();
    for (let h = 0; h < c.length; h++) {
      let l = c[h], f = o[e(473)](a[e(469)](l)), y = A[e(507)](f, n);
      y < s && (s = y, i = { object: a, anchorName: l });
    }
  }
  return s < t ? i : null;
}
function Te() {
  const n = ["4854368YICkMS", "14OCOwGF", "projectionLen", "point", "abs", "isNode", "begin", "segIndex", "createPoints2", "toFixed", "push", "2720160IDmEmn", "multiplyC", "seg", "length", "len", "points", "end", "dist", "4gXnKel", "object", "getAnchorPoints", "504904VmUbES", "lenght of points less than 2", "concat", "getTransformByDeep", "4715900QujFVy", "getBeginPoint", "dot", "32922666amYtIe", "getOBB", "unkwnow object!", "rate", "1006192wMhdCW", "getEndPoint", "stageToLocalXY", "1513743SXUkfE", "distancePoint", "MAX_SAFE_INTEGER", "segLen", "normalize", "positionToLocalPoint"];
  return Te = function() {
    return n;
  }, Te();
}
function ir(n, x) {
  const t = l0;
  let e = n[t(477)], s = n[t(502)], i = n[t(490)], r = s >= 0.25 && s <= 0.75, a = s - 0.5, o = Math[t(474)](n[t(509)] * a);
  if (i[t(475)]) {
    if (o > x || !r)
      return null;
    if (e == 0)
      return E.ct;
    if (e == 1)
      return E.rm;
    if (e == 2)
      return E.cb;
    if (e == 3)
      return E.lm;
    throw new Error("error segIndex:" + e);
  } else if (i.isLink) {
    let c = i[t(505)](n.x, n.y);
    return A[t(507)](c, i[t(497)]()) <= x ? E[t(476)] : A[t(507)](c, i[t(504)]()) <= x ? E[t(487)] : null;
  } else
    throw new Error(t(501));
}
function Nx(n) {
  return Math[l0(474)](Math.abs(n) % Math.PI) < 0.5;
}
function Ls(n, x, t) {
  return n < x ? x : n > t ? t : n;
}
function Fe() {
  const n = ["replace", "isHtmlImage", "style", "querySelector", "1080tpFjIz", "html", "514354dnMiMe", "scale", '" display="inline" style="vertical-align: middle;display: inline-block"><image xlink:href="', "getContext", "src", "border:0px;position:absolute;top:0px;left:0px;text-align:center;z-index:10;width:", "HtmlImage has only src attr", "then", 'px" width="', "201PeepHT", "width", "canvas", "39215qVkYRU", "px;height:", "length", "onload", "height", "32AOCxuA", '<foreignObject width="100%" height="100%" style="position:absolute;top:0;left:0; opacity: ', "forEach", '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink= "http://www.w3.org/1999/xlink" width="', '" height="', 'px" /></svg>', "div", "image/png", "605801ANIdea", "HtmlImage", "substring", "2550780XGzBTy", "img", "drawImage", "match", "naturalHeight", "setSize", "foreignObject", "push", "getCanvas", "6698890XQvryx", "opacity", "svg", "getAttribute", "innerHTML", "http://www.w3.org/2000/svg", "startsWith", "createElement", "30qgVDOx", "438HHnPmL", "toDataURL", "537885vmLiwR"];
  return Fe = function() {
    return n;
  }, Fe();
}
const kt = ct;
function ct(n, x) {
  const t = Fe();
  return ct = function(e, s) {
    return e = e - 457, t[e];
  }, ct(n, x);
}
(function(n, x) {
  const t = ct, e = n();
  for (; []; )
    try {
      if (-parseInt(t(468)) / 1 + parseInt(t(475)) / 2 + -parseInt(t(484)) / 3 * (parseInt(t(473)) / 4) + parseInt(t(487)) / 5 * (-parseInt(t(466)) / 6) + -parseInt(t(500)) / 7 * (parseInt(t(492)) / 8) + -parseInt(t(503)) / 9 + parseInt(t(465)) / 10 * (parseInt(t(457)) / 11) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Fe, 326041);
function rr(n, x, t) {
  const e = ct;
  t = t | 1;
  const s = document.createElementNS(e(462), "svg");
  return s.setAttribute("xmlns", e(462)), s[e(471)] = e(480) + n + e(488) + x + "px;opacity:" + t + ";", s[e(461)] = e(493) + t + `;">
        '</foreignObject>`, s;
}
function ar(n) {
  const x = ct;
  let t = document[x(464)](x(486));
  t[x(485)] = n.style[x(485)] ? +n.style.width : n[x(485)], t.height = n[x(471)][x(491)] ? +n.style.height : n[x(491)];
  let e = t[x(478)]("2d");
  return e[x(476)](t.width / n.naturalWidth, t[x(491)] / n[x(507)]), e[x(505)](n, 0, 0), x(495) + n[x(485)] + x(496) + n[x(491)] + x(477) + t[x(467)](x(499)) + x(496) + n[x(491)] + x(483) + n[x(485)] + x(497);
}
async function or(n) {
  const x = ct, t = n[x(469)](/\<br\>/gi, "<div/>"), e = t[x(506)](/<img .*?>/g);
  if (e == null || e[x(489)] == 0)
    return new Promise(function(i) {
      i([[], []]);
    });
  const s = [];
  return new Promise(function(i) {
    const r = x;
    e[r(494)](function(a) {
      const o = r, c = document[o(464)](o(498));
      c[o(461)] = a;
      const h = c.querySelector(o(504));
      h[o(490)] = function() {
        const l = o, f = ar(h);
        s[l(510)](f), s[l(489)] == e[l(489)] && i([e, s]);
      };
    });
  });
}
class Cs {
  constructor(x, t, e, s = 1) {
    const i = ct;
    this[i(470)] = !![], this[i(485)] = 1, this[i(491)] = 1, this[i(458)] = 1, this[i(470)] = !![], x !== null && x[i(463)](i(501)) && (x = x[i(502)](i(501)[i(489)])), this.html = x, this[i(485)] = t, this[i(491)] = e, this[i(458)] = s | 1, this[i(459)] = rr(t, e, this[i(458)]), this[i(486)] = document[i(464)](i(486));
  }
  [kt(508)](x, t) {
    const e = kt;
    this[e(485)] = x, this[e(491)] = t;
  }
  [kt(460)](x) {
    const t = kt;
    if (x != t(479))
      throw new Error(t(481));
    return t(501) + this[t(474)];
  }
  setHtml(x) {
    this.html = x;
  }
  [kt(511)]() {
    const x = kt;
    let t = this[x(474)];
    const e = this[x(459)], s = this;
    let i = s[x(486)], r = i.getContext("2d");
    return i[x(471)][x(485)] = s.width + "px", i[x(471)].height = s[x(491)] + "px", i[x(485)] = s[x(485)], i[x(491)] = s[x(491)], new Promise(function(a) {
      const o = x;
      or(t)[o(482)](function(c) {
        const h = o, l = c[0], f = c[1];
        for (let b = 0; b < l.length; b++)
          t = t.replace(l[b], f[b]);
        const y = e[h(472)](h(509));
        y.innerHTML = t;
        let _ = new Image();
        _[h(479)] = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(s[h(459)].outerHTML), _[h(490)] = function() {
          const b = h;
          r[b(505)](_, 0, 0, s[b(485)], s[b(491)]), a(i);
        };
      });
    });
  }
}
const p = Be;
(function(n, x) {
  const t = Be, e = n();
  for (; []; )
    try {
      if (parseInt(t(301)) / 1 + parseInt(t(273)) / 2 + -parseInt(t(381)) / 3 * (-parseInt(t(267)) / 4) + -parseInt(t(277)) / 5 + -parseInt(t(366)) / 6 * (-parseInt(t(295)) / 7) + -parseInt(t(382)) / 8 * (parseInt(t(318)) / 9) + -parseInt(t(296)) / 10 * (parseInt(t(276)) / 11) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(De, 904628);
var cr = Object[p(398)], hr = Object[p(330)], i0 = (n, x, t, e) => {
  const s = p;
  for (var i = e > 1 ? void 0 : e ? hr(x, t) : x, r = n[s(369)] - 1, a; r >= 0; r--)
    (a = n[r]) && (i = (e ? a(x, t, i) : a(i)) || i);
  return e && i && cr(x, t, i), i;
};
function Be(n, x) {
  const t = De();
  return Be = function(e, s) {
    return e = e - 264, t[e];
  }, Be(n, x);
}
const Ni = class extends F {
  constructor(n, x = 0, t = 0, e = 1, s = 1) {
    const i = p;
    super(), this.x = 0, this.y = 0, this[i(429)] = 0, this[i(297)] = 0, this[i(420)] = 0, this.bottom = 0, this[i(302)] = p0[i(315)], this.x = x || 0, this.y = t || 0, this.width = e || 0, this[i(362)] = s || 0, this[i(327)] = n;
  }
  [p(332)](n) {
    const x = p;
    this[x(302)] = n, this[x(412)]();
  }
  [p(412)]() {
    const n = p, x = this[n(288)]();
    this[n(269)] = p0[n(397)](this.shape, x.width, x[n(362)]), this[n(341)] = x.width, this._preHeight = x[n(362)];
  }
  [p(413)](n, x, t, e) {
    const s = p;
    x != null && (this[s(402)] = x), this.originAlignPosition = n, this[s(388)](n), t != null && this[s(392)](t, this[s(371)][1]), e != null && this[s(392)](this.origin[0], e);
  }
  [p(290)](n, x = p(427)) {
    let t = rt[x];
    this.setOrigin(t.x, t.y), this.originAlignPosition = n;
  }
  [p(359)]() {
    const n = p;
    let x = this[n(420)], t = this[n(286)], e = this[n(429)], s = this[n(297)];
    return [{ x: e, y: s }, { x, y: s }, { x, y: t }, { x: e, y: t }];
  }
  [p(288)]() {
    const n = p, x = this[n(310)];
    let t = x[n(373)] || 0, e = x[n(395)] || 0, s = x.padding || 0;
    const i = this[n(385)] - t * 2 - e - s * 2, r = this[n(362)] - t * 2 - e - s * 2;
    return { width: i, height: r };
  }
  [p(404)]() {
    const n = p, x = this[n(359)]();
    return this[n(302)] === p0[n(315)] && x[n(334)](x[0]), x;
  }
  [p(264)]() {
    const n = p;
    if (this[n(302)][n(428)])
      return this[n(302)][n(428)] = ![], this._projectionShape(), this[n(269)];
    let x = this[n(288)]();
    return this[n(341)] == x.width && this[n(358)] == x.height ? this._shapePoints : (this[n(412)](), this[n(269)]);
  }
  [p(399)](n, x) {
    const t = p;
    let e = this;
    if (n == null || n == "")
      return this[t(416)] = null, this[t(357)] = null, this;
    if (n[t(293)] == t(364))
      return this[t(416)] = n[t(422)]("src"), e[t(357)] = n, x == !![] && e[t(308)](n[t(385)], n[t(362)]), this;
    if (n[t(293)] == t(396))
      return this[t(416)] = t(298), this[t(357)] = n, x == !![] && this[t(308)](n[t(385)], n[t(362)]), this;
    if (typeof n == t(323))
      if (n[t(274)]("HtmlImage")) {
        let s = n;
        n = new Cs(s, this[t(385)], this[t(362)]);
      } else
        this[t(416)] = n;
    return X0[t(324)](n, function(s) {
      const i = t;
      e[i(357)] = s, n instanceof Cs ? e[i(416)] = n.getAttribute("src") : e._imageSrc = s[i(422)]("src"), x == !![] && e[i(308)](s.width, s[i(362)]);
    }), this;
  }
  setText(n) {
    const x = p;
    if (n != this[x(374)] && (this[x(353)] = !![]), n == null) {
      this[x(374)] = n;
      return;
    }
    if (typeof n == x(265) && (n = "" + n), n[x(305)](`
`) != -1) {
      let t = n[x(268)](`
`);
      this._textArr = t;
    } else
      this[x(415)] = null;
    this[x(374)] = n, this[x(401)]();
  }
  [p(401)]() {
    const n = p;
    let x = this[n(415)] == null ? 1 : this[n(415)].length, t;
    x == 1 ? t = m0[n(390)](this[n(374)], this[n(310)], x) : t = m0.measureText(this[n(415)], this._style, x), this[n(424)] = t[n(385)], this[n(351)] = t.height, this[n(311)] = t[n(287)];
  }
  [p(389)](n) {
    const x = p;
    return Object.assign(this, n), this[x(428)] = !![], this;
  }
  resizeToFitImage() {
    const n = p;
    this[n(307)] != null && this[n(307)][n(385)] != null && this.resizeTo(this[n(307)][n(385)], this[n(307)][n(362)]);
  }
  [p(340)](n, x, t, e, s) {
    const i = p;
    this.dirty = !![], this.x = x || 0, this.y = t || 0, this[i(385)] = e || 0, this.height = s || 0, this[i(327)] = n;
  }
  [p(425)](n) {
    const x = p;
    let t = this.getPoints();
    this[x(302)][x(284)](t, n);
  }
  [p(406)](n) {
    const x = p;
    let t = this._style, e = t[x(373)] || 0;
    const s = e > 0;
    let i = this.left + e * 0.5, r = this[x(297)] + e * 0.5, a = this[x(385)] - e, o = this.height - e;
    const c = t.backgroundColor != null;
    if (c) {
      n.lineWidth = e, n[x(419)] = t[x(282)], n.strokeStyle = t[x(281)] || x(377);
      let f = t[x(344)] || 0;
      (t[x(336)] == x(294) || t[x(336)] == x(410)) && n[x(405)]([1, 1]), n[x(403)](), f == 0 ? n[x(343)](i, r, a, o) : n[x(331)](i, r, a, o, f), n.fill();
    }
    if (s) {
      if (!c) {
        n[x(395)] = e, n[x(419)] = t[x(282)], n.strokeStyle = t[x(281)] || x(377);
        let f = t[x(344)] || 0;
        (t.borderStyle == x(294) || t.borderStyle == x(410)) && n[x(405)]([1, 1]), n[x(403)](), f == 0 ? n[x(343)](i, r, a, o) : n[x(331)](i, r, a, o, f), n.closePath();
      }
      n[x(291)]();
    }
    const h = this.image || this[x(299)][x(314)], l = h != null;
    return l && this[x(400)](n, h, s, c, e), s || c || l;
  }
  [p(400)](n, x, t, e, s) {
    const i = p;
    if (this._imageSrc != null && this[i(416)].toLowerCase()[i(272)](i(393))) {
      n[i(408)](x, this[i(429)], this[i(297)], this[i(385)], this[i(362)]);
      return;
    }
    const r = this[i(299)];
    let a = this[i(385)] - s - s, o = this.height - s - s, c = r.getBackgroundRect(a, o, this), h = this[i(429)] + c.x, l = this.top + c.y, f = c.width, y = c[i(362)], _ = x[i(385)], b = x[i(362)];
    const P = r.backgroundRepeat || i(350);
    if (P == i(350)) {
      n[i(408)](x, 0, 0, _, b, h, l, f, y);
      return;
    }
    (t || e) && n[i(355)]();
    let v = n[i(306)](x, P);
    n[i(419)] = v;
    let D = h % _, S = l % b;
    P == i(271) ? S = 0 : P == i(300) && (D = 0), n[i(367)](D, S), n[i(283)](this[i(429)] - _, this[i(297)] - b, a + _ + _, o + b + b), n.translate(-D, -S);
  }
  strokeAndFill(n) {
    const x = p;
    let t = this[x(310)];
    n[x(321)](), this[x(406)](n) && this[x(354)](n), n[x(403)](), this[x(425)](n), t[x(419)] != null && (n[x(419)] = t.fillStyle, n[x(409)]()), (t[x(395)] || 0) != 0 && t[x(303)] != null && (n.lineWidth = t[x(395)], n[x(303)] = t[x(303)], n.stroke()), this.isPointOn == ![] && this[x(391)] == "shape" && this[x(354)](n), n.restore();
  }
  [p(284)](n) {
    const x = p;
    this[x(385)] != 0 && this[x(362)] != 0 && this[x(411)](n), this[x(322)](n);
  }
  [p(370)]() {
    const n = p;
    return this._textDirty || this[n(299)][n(313)]();
  }
  [p(376)](n = 0, x = 0) {
    const t = p;
    this[t(370)]() && this[t(401)]();
    let e = this[t(310)], s = null;
    e[t(423)] != null ? s = this[t(384)](e[t(423)]) : s = { x: 0, y: this[t(286)] };
    let i = 0, r = -(this[t(351)] - this[t(311)]) * 0.5;
    return e.textAlign == t(429) ? i = n + x : e.textAlign == "right" && (i = -(n + x)), e[t(347)] == t(297) ? r = n + x : e[t(347)] == t(286) && (r = -(n + x) - this._textHeight + this[t(311)]), s.x += i, s.y += r, e[t(319)] != null && (s.x += e[t(319)]), e[t(275)] != null && (s.y += e[t(275)]), s;
  }
  [p(322)](n) {
    const x = p;
    let t = this[x(374)];
    if (t == null)
      return;
    let e = this[x(310)], s = this[x(376)](), i = this._textArr;
    if (n[x(419)] = e[x(386)] || x(377), this[x(285)] == 0)
      if (i == null)
        n[x(383)](t, s.x, s.y);
      else {
        let a = this[x(311)];
        for (var r = 0; r < i[x(369)]; r++)
          n[x(383)](i[r], s.x, s.y + r * a);
      }
    else {
      if (n[x(367)](s.x, s.y), n.rotate(this[x(285)]), i == null)
        n[x(383)](t, 0, 0);
      else {
        let a = this[x(311)];
        for (var r = 0; r < i.length; r++)
          n[x(383)](i[r], 0, 0 + r * a);
      }
      n[x(289)](-this[x(327)]), n.translate(-s.x, -s.y);
    }
    return this[x(353)] = ![], s;
  }
  [p(280)](n) {
    const x = p;
    let t = [], e = this.outLinks;
    for (var s = 0; s < e[x(369)]; s++) {
      let i = e[s], r = i.end.target;
      !W[x(346)](t, r) && t.push(r), n && r instanceof Ni && r[x(375)][x(369)] > 0 && W[x(363)](t, r[x(280)](n));
    }
    return t;
  }
  nearest(n, x) {
    const t = p, e = this[t(404)](), s = zi({ x: n, y: x }, { x: 0, y: 0 }, e);
    return s == null || s[t(369)] == 0 ? { x: n, y: x } : s[0];
  }
  setRotateCenter(n) {
    const x = p;
    return this[x(372)] = n, this;
  }
  [p(348)](n, x) {
    const t = p;
    return this[t(428)] = !![], this.x += n, this.y += x, this;
  }
  [p(317)](n, x) {
    const t = p;
    return this[t(428)] = !![], this.x = n, this.y = x, this;
  }
  translate(n, x) {
    const t = p;
    return this[t(428)] = !![], this.x = n, this.y = x, this;
  }
  [p(361)](n, x) {
    const t = p;
    return this[t(428)] = !![], this.x = n, this.y = x, this;
  }
  [p(360)](n, x, t) {
    const e = p;
    this[e(428)] = !![];
    let s = this[e(384)](n), i = x - s.x, r = t - s.y;
    this[e(348)](i, r);
  }
  [p(308)](n, x) {
    const t = p;
    return this[t(428)] = !![], this.width = n, this[t(362)] = x, this;
  }
  resizeWith(n, x) {
    const t = p;
    return this[t(428)] = !![], this[t(385)] += n, this[t(362)] += x, this[t(385)] < 0 && (this.width = 0), this[t(362)] < 0 && (this[t(362)] = 0), this;
  }
  [p(309)](n, x) {
    const t = p;
    return this[t(428)] = !![], this[t(326)] *= n, this[t(368)] *= x, this;
  }
  [p(387)](n, x, t, e) {
    const s = p;
    return this[s(428)] = !![], this[s(385)] * this.scaleX, this[s(362)] * this[s(368)], this.scaleBy(n, x), this;
  }
  [p(379)]() {
    return this.zoom(0.8, 0.8), this;
  }
  [p(414)]() {
    return this.zoom(1.25, 1.25), this;
  }
  [p(333)](n, x) {
    const t = p;
    return this[t(428)] = !![], this.scaleX = n, this[t(368)] = x, this;
  }
  [p(278)](n) {
    return this.dirty = !![], this.rotation = n, this;
  }
  [p(289)](n) {
    const x = p;
    return this[x(428)] = !![], this[x(394)] = n, this;
  }
  [p(349)](n) {
    const x = p;
    return this[x(428)] = !![], this.rotation += n, this;
  }
  getRect() {
    const n = p;
    return new V(this.x - this[n(385)] * 0.5, this.y - this.height * 0.5, this[n(385)], this.height);
  }
  [p(316)](n, x) {
    const t = p;
    let e = this[t(329)](n, x);
    return { x: this[t(429)] + e.x, y: this[t(297)] + e.y };
  }
  [p(339)](n) {
    const x = p;
    if (this[x(328)] === n)
      throw new Error(x(407));
    let t = this;
    return Ns(t, n), t[x(328)] && t[x(328)][x(352)](t), n[x(337)](t), this;
  }
  [p(304)](n) {
    const x = p;
    let t = rt[n];
    return this[x(371)][0] = t.x, this.origin[1] = t.y, this;
  }
  [p(384)](n, x, t) {
    const e = p;
    let s = this[e(345)][n];
    if (s == null && (s = rt[n]), s == null)
      throw Error(e(356) + n);
    return typeof s == e(320) ? s.call(this, x, t) : { x: s.x * this.width, y: s.y * this[e(362)] };
  }
  [p(335)](n) {
    const x = p;
    let t = this.positionToLocalPoint(E[x(427)]), e = this[x(384)](n);
    return V[x(279)](t, e);
  }
};
function De() {
  const n = ["_getShapeSize", "rotate", "alignOriginToNode", "stroke", "Node", "tagName", "dashed", "805AlkUXi", "10357630qNupOB", "top", "cavnas", "style", "repeat-y", "1510160GuBiFT", "shape", "strokeStyle", "setOriginToPosition", "indexOf", "createPattern", "_image", "resizeTo", "scaleBy", "_style", "_textLineHeight", "getAnchorPoints", "isDirty", "_backgroundImageObject", "RectShape", "getPoint", "translateTo", "1713501xbEQFU", "textOffsetX", "function", "save", "_paintText", "string", "loadImage", "getCtrlPoints", "scaleX", "text", "parent", "getLocalPoint", "getOwnPropertyDescriptor", "roundRect", "setShape", "scaleTo", "push", "getPositionNormal", "borderStyle", "addChild", "toObjectLocalXY", "changeParent", "init", "_preWidth", "isNode", "rect", "borderRadius", "positions", "hasChild", "textBaseline", "translateWith", "rotateWith", "no-repeat", "_textHeight", "removeChild", "_textDirty", "mousePickupPath", "clip", "position not exist:", "image", "_preHeight", "_OBBPoints", "translatePositionTo", "setXY", "height", "addAll", "IMG", "className", "20340CunwQI", "translate", "scaleY", "length", "_isTextOrStyleDirty", "origin", "rotateCenter", "borderWidth", "_text", "outLinks", "_calcTextPosition", "black", "originAlignPosition", "zoomOut", "zIndex", "417yYIDPA", "24gbmoAc", "fillText", "positionToLocalPoint", "width", "color", "zoom", "setRotateCenter", "attr", "measureText", "pickType", "setOrigin", "svg", "rotation", "lineWidth", "CANVAS", "pointToSize", "defineProperty", "setImage", "_drawImage", "calcTextSize", "originOffset", "beginPath", "getSegmentPoints", "setLineDash", "_drawBackgroundAndBorder", "same parent, dont need change", "drawImage", "fill", "dotted", "strokeAndFill", "_projectionShape", "alignOriginToLink", "zoomIn", "_textArr", "_imageSrc", "originAutoRotate", "prototype", "fillStyle", "right", "end", "getAttribute", "textPosition", "_textWidth", "drawShape", "target", "center", "dirty", "left", "getPoints", "number", "getEndPoint", "16148zWdddV", "split", "_shapePoints", "serializers", "repeat-x", "endsWith", "1598018PMikUB", "startsWith", "textOffsetY", "11hbCkDq", "3743020rAHDwq", "rotateTo", "normal", "getLinkChildren", "borderColor", "backgroundColor", "fillRect", "draw", "textRotation", "bottom", "lineHeight"];
  return De = function() {
    return n;
  }, De();
}
let O = Ni;
i0([I(p(292))], O[p(418)], p(365), 2), i0([I(1)], O[p(418)], p(385), 2), i0([I(1)], O[p(418)], "height", 2), i0([I(0)], O[p(418)], p(394), 2), i0([I(null)], O[p(418)], p(378), 2), i0([I(!![])], O.prototype, p(417), 2), i0([I(0)], O[p(418)], "originOffset", 2), i0([I(null)], O[p(418)], "text", 2), i0([I(null)], O.prototype, "_text", 2), i0([I(null)], O[p(418)], p(415), 2), i0([I(null)], O.prototype, p(353), 2), i0([I(0)], O.prototype, "_textWidth", 2), i0([I(0)], O[p(418)], p(351), 2), i0([I(0)], O[p(418)], "_textLineHeight", 2), i0([I(!![])], O[p(418)], p(342), 2), i0([I(Mx.Node)], O[p(418)], p(380), 2), i0([I(0)], O[p(418)], p(285), 2), i0([I(F.prototype[p(270)].concat(["text", "x", "y", "width", p(362), p(302), p(326), p(368), "rotation", p(402), p(319), "textOffsetY", p(417), p(285), p(378), "rotateCenter"]))], O[p(418)], p(270), 2), i0([I(function() {
  return [p(289), "lt", "lb", "rt", "rb"];
})], O[p(418)], p(325), 2), i0([I(function() {
  return ["ct", "cb", "lm", "rm"];
})], O.prototype, p(312), 2), i0([I(p(302))], O[p(418)], p(391), 2), i0([I(p(427))], O.prototype, p(372), 2), Object.defineProperties(O[p(418)], { text: { get() {
  return this[p(374)];
}, set(n) {
  this.setText(n);
} }, imageSrc: { get() {
  return this[p(416)];
}, set(n) {
  const x = p;
  n == "canvas" && (n = null), this[x(399)](n), this[x(416)] = n;
} } }), V0(O[p(418)], { _textHeight: { enumerable: ![] }, _textWidth: { enumerable: ![] } });
function Ns(n, x) {
  const t = p;
  if (n instanceof O) {
    let e = n[t(338)](0, 0, x);
    n[t(361)](e.x, e.y);
    return;
  } else {
    const e = n, s = e.begin[t(426)];
    if (!(s instanceof F) && s.x != null && s.y != null) {
      let r = e.getBeginPoint(), a = e[t(338)](r.x, r.y, x);
      s.x = a.x, s.y = a.y;
    }
    const i = e[t(421)][t(426)];
    if (!(i instanceof F) && i.x != null && i.y != null) {
      let r = e[t(266)](), a = e[t(338)](r.x, r.y, x);
      i.x = a.x, i.y = a.y;
    }
    return;
  }
}
var lr = ux;
(function(n, x) {
  for (var t = ux, e = n(); []; )
    try {
      var s = parseInt(t(501)) / 1 * (-parseInt(t(506)) / 2) + -parseInt(t(500)) / 3 * (-parseInt(t(497)) / 4) + -parseInt(t(502)) / 5 + parseInt(t(498)) / 6 * (-parseInt(t(505)) / 7) + parseInt(t(496)) / 8 * (parseInt(t(503)) / 9) + -parseInt(t(495)) / 10 * (-parseInt(t(494)) / 11) + -parseInt(t(493)) / 12 * (-parseInt(t(499)) / 13);
      if (s === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(je, 848825);
function ux(n, x) {
  var t = je();
  return ux = function(e, s) {
    e = e - 493;
    var i = t[e];
    return i;
  }, ux(n, x);
}
class ur extends Y0 {
  constructor() {
    var x = ux;
    super(), this[x(504)] = ![];
  }
  [lr(507)]() {
  }
}
function je() {
  var n = ["8253vQwAiu", "stoped", "119GciBTK", "4SROuOn", "dispose", "23008896KYRwBk", "54494iOKEjW", "1130aAGWGC", "6296zTqHzt", "1822268lAVDuF", "254898IsFBCX", "13bxkNAf", "6wFzIxx", "431957GyTUlF", "8375365jVNHaU"];
  return je = function() {
    return n;
  }, je();
}
const lt = zt;
(function(n, x) {
  const t = zt, e = n();
  for (; []; )
    try {
      if (-parseInt(t(207)) / 1 * (parseInt(t(215)) / 2) + parseInt(t(218)) / 3 * (-parseInt(t(231)) / 4) + -parseInt(t(223)) / 5 * (-parseInt(t(213)) / 6) + -parseInt(t(219)) / 7 * (-parseInt(t(221)) / 8) + parseInt(t(229)) / 9 + parseInt(t(224)) / 10 + -parseInt(t(205)) / 11 * (parseInt(t(222)) / 12) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(ze, 644754);
let N0 = {};
var dr = 40;
function fr(n, x) {
  const t = zt;
  if (x[t(230)](n.x, n.y) || x[t(202)] == 0 || x[t(227)] == 0)
    return n;
  let e = x[t(202)] / 2, s = x.height / 2;
  if (n.x -= e, n.y -= s, n.x == 0)
    return n.y < 0 ? { x: e, y: 0 } : { x: e, y: x[t(227)] };
  let i = { x: e, y: s }, r = n.y / n.x, a = { x: i.x, y: i.x * r };
  return Math[t(225)](a.y) <= s ? (i.y = i.x * r, n.x <= 0 && (i.x = -i.x, i.y = -i.y)) : (i.x = i.y / r, n.y <= 0 && (i.y = -i.y, i.x = -i.x)), i.x += e, i.y += s, i;
}
function br(n) {
  const x = zt;
  if (n == null)
    return null;
  let t = "";
  for (var e = 0; e < n[x(232)]; e += x(210)[x(232)])
    n[x(232)] != dr - 1 && (CanvasRender.prototype.setWidth = function() {
    }), t += String[x(228)](n[x(206)](e, e + x(210)[x(232)]));
  return t;
}
N0.getDistance = function(n, x, t, e) {
  let s, i;
  return t == null && e == null ? (s = x.x - n.x, i = x.y - n.y) : (s = t - n, i = e - x), Math.sqrt(s * s + i * i);
}, N0[lt(208)] = function() {
  return navigator[lt(220)].indexOf("Firefox") > 0;
}, N0.isIE = function() {
  const n = lt;
  return !!(window[n(216)] && navigator.userAgent[n(226)]("Opera") === -1);
}, N0[lt(209)] = function() {
  const n = lt;
  return navigator.userAgent[n(214)]()[n(204)](/chrome/) != null;
}, N0[lt(211)] = fr, N0.gc = br;
function pr(n, x) {
  const t = lt;
  let e = Object[t(201)](x);
  var s = { set: function(r, a, o, c) {
    const h = t;
    return e[h(203)]((l) => {
      const f = h;
      if (a == l) {
        let y = x[l];
        if (typeof y == f(212))
          o = y(o);
        else {
          let _ = y[0], b = y[1];
          o < _ ? o = _ : o > b && (o = b);
        }
      }
    }), Reflect.set(r, a, o, c);
  } };
  return new Proxy(n, s);
}
function zt(n, x) {
  const t = ze();
  return zt = function(e, s) {
    return e = e - 201, t[e];
  }, zt(n, x);
}
function ze() {
  const n = ["indexOf", "height", "fromCharCode", "9486054xynckF", "contains", "4BAiXPB", "length", "apply", "keys", "width", "forEach", "match", "347842kySUzG", "substring", "925CJCEyV", "isFirefox", "isChrome", "fun", "intersectionLineBound", "function", "108bklfbe", "toLowerCase", "2650KjgCrD", "attachEvent", "getTime", "2456439lgQhVx", "427mACugE", "userAgent", "133192nEuOaC", "132tOPrEC", "131440PLpuyi", "4942550SbZIqm", "abs"];
  return ze = function() {
    return n;
  }, ze();
}
function Ne(n, x) {
  const t = Re();
  return Ne = function(e, s) {
    return e = e - 264, t[e];
  }, Ne(n, x);
}
function Re() {
  const n = ["text", "asEndArrow", "log", "unlinkBegin", "isEndDisplayObject", "removeChild", "_OBBPoints", "_calcAZ", "_pickRadius", "className", "copy", "arrow must be Node", "setEndArrow", "5562464fRmmBG", "string", "setBegin", "removeOutLink", "transform", "changeParent", "dirty", "_offsetAZ", "getEndPoint", "getTransformByDeep", "length", "lineWidth", "begin", "addOutLink", "removeInLink", "moveTo", "2tcmKQV", "Invalid link's position arguments", "beginArrow", "setLabel", "isLink", "getBeginArrow", "parent", "21666XfhKXc", "getOwnPropertyDescriptor", "mousedownHandler", "setBeginArrow", "deep is required.", "getEndArrow", "toLayerXY", "getLayerTransform", "end", "getTransform", "_setOffsetByVec", "beginOffset", "label", "width", "positionToLocalPoint", "4515237Tjwuoa", "points is null", "name", "serializers", "isAlone", "asBeginArrow", "not reached", "negate", "endArrow", "endOffset", "updatePoints", "Link", "2209245VZLGyE", "LinkHelper", "center", "nearest", "drawPoints", "asLabel", "701060ixCSjL", "upgradeParent", "stroke", "beginPath", "point", "getAnchorPoints", "visible", "link's deep is 0!", "prototype", "isNode", "same parent, dont need change", "translateWith", "getLabel", "position not exist:", "function", "AutoFoldLink", "assign", "getBeginPoint", "unlinkEnd", "createLabel", "lineCap", "DefaultPositions", "168DNQxIT", "getLocalPoint", "normalize", "points", "997705hKtKZe", "middle", "defineProperty", "36YmHLly", "zIndex", "getSegmentPoints", "2384180xQwGEQ", "_text", "mousePickupStroke", "draw", "defineProperties", "unlink", "invert", "getPoints", "deep", "addInLink", "_style", "target", "isDisplayObjectTarget", "setEnd"];
  return Re = function() {
    return n;
  }, Re();
}
const m = Ne;
(function(n, x) {
  const t = Ne, e = n();
  for (; []; )
    try {
      if (-parseInt(t(330)) / 1 + -parseInt(t(290)) / 2 * (-parseInt(t(324)) / 3) + parseInt(t(359)) / 4 * (parseInt(t(356)) / 5) + parseInt(t(297)) / 6 * (parseInt(t(352)) / 7) + -parseInt(t(274)) / 8 + -parseInt(t(312)) / 9 + parseInt(t(362)) / 10 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Re, 959305);
var yr = Object[m(358)], gr = Object[m(298)], Pt = (n, x, t, e) => {
  for (var s = e > 1 ? void 0 : e ? gr(x, t) : x, i = n.length - 1, r; i >= 0; i--)
    (r = n[i]) && (s = (e ? r(x, t, s) : r(s)) || s);
  return e && s && yr(x, t, s), s;
};
const Rx = {};
Rx[E.begin] = function() {
  return this[m(355)][0];
}, Rx[E.end] = function() {
  return this[m(355)][1];
}, Rx[E[m(326)]] = function() {
  const n = m;
  return A[n(357)](this[n(355)][0], this[n(355)][1]);
};
class Y extends F {
  constructor(x, t, e, s, i) {
    const r = m;
    super(), this[r(360)] = Mx[r(323)], this[r(355)] = null, t == null && (t = new A(0, 0)), e == null && (e = new A(10, 0)), this[r(276)](t, s), this[r(375)](e, i), this.text = x;
  }
  setLabel(x) {
    const t = m;
    return x == null && this[t(309)] == null ? this : x instanceof O ? (_0[t(325)][t(329)](this, x), x) : this[t(309)] != null && typeof x == t(275) ? (this[t(309)][t(376)] = x, this) : (_0.LinkHelper[t(349)](this, x), this);
  }
  attr(x) {
    const t = m;
    return Object[t(346)](this, x), this[t(280)] = !![], this;
  }
  [m(342)]() {
    return this[m(309)];
  }
  [m(295)]() {
    return this[m(292)];
  }
  [m(300)](x) {
    const t = m;
    if (!(x instanceof O))
      throw new Error(t(272));
    return _0[t(325)][t(317)](this, x), this;
  }
  [m(302)]() {
    return this.endArrow;
  }
  [m(273)](x) {
    const t = m;
    if (!(x instanceof O))
      throw new Error(t(272));
    return _0[t(325)][t(377)](this, x), this;
  }
  [m(267)]() {
    return this.getPoints();
  }
  [m(276)](x, t) {
    const e = m;
    this[e(280)] = !![], this[e(286)] = Ps(x, t), this[e(286)][e(374)]() && this[e(286)][e(373)].removeOutLink(this), this[e(286)][e(373)] instanceof F && this.begin[e(373)][e(287)](this);
  }
  setEnd(x, t) {
    const e = m;
    this[e(280)] = !![], this[e(305)] = Ps(x, t), this[e(305)][e(374)]() && this[e(305)][e(373)][e(288)](this), this[e(305)][e(373)] instanceof F && this[e(305)].target[e(371)](this);
  }
  [m(347)]() {
    const x = m;
    return this.points == null && (this[x(355)] = this[x(322)]()), this.points[0];
  }
  [m(282)]() {
    const x = m;
    return this.points == null && (this[x(355)] = this[x(322)]()), this[x(355)][this[x(355)].length - 1];
  }
  [m(328)](x, t) {
    const e = m;
    let s = t[0], i = t[t.length - 1];
    x[e(289)](s.x, s.y);
    let r = s;
    for (let a = 1; a < t[e(284)] - 1; a++) {
      if (t[a].x === r.x && t[a].y === r.y) {
        r = t[a];
        continue;
      }
      x.lineTo(t[a].x, t[a].y), r = t[a];
    }
    x.lineTo(i.x, i.y);
  }
  [m(365)](x) {
    const t = m;
    if (this[t(286)] == null || this[t(305)] == null)
      return this;
    const e = this[t(355)];
    x[t(333)](), this._style && this[t(372)].lineCap && (x[t(350)] = this[t(372)][t(350)]), this.drawPoints(x, e), x[t(332)]();
    const s = this._pickRadius, i = this[t(372)][t(285)] >= s ? 0 : s;
    return this[t(364)](x, i), this;
  }
  [m(299)](x) {
    this.mouseEnabled == !![] && this.dispatchEvent(x);
  }
  [m(341)](x, t) {
    const e = m;
    if (this[e(286)] instanceof ot) {
      let s = this.begin;
      s.x += x, s.y += t;
    }
    if (this[e(305)] instanceof ot) {
      let s = this[e(305)];
      s.x += x, s.y += t;
    }
    return this;
  }
  [m(268)]() {
    const x = m;
    let t = dx(this, this[x(286)]), e = dx(this, this[x(305)]);
    return this[x(281)](t, e, this[x(286)], !![]), this[x(281)](t, e, this.end, ![]), [t, e];
  }
  [m(281)](x, t, e, s) {
    const i = m;
    let r = He(this, e, [x, t], s), a = s ? this[i(292)] : this[i(320)], o = s ? this.beginOffset || 0 : this.endOffset || 0, c = s ? x : t;
    if (a != null && a[i(336)] == !![]) {
      let h = this[i(372)].lineWidth || 2, l = o + h + a[i(310)];
      s && (l = -l), this[i(307)](c, r, l);
    } else
      o != 0 && this[i(307)](c, r, o);
  }
  [m(307)](x, t, e) {
    let s = [0, 0];
    e != 0 ? z.multiplyC(s, t, -e) : s = t, x.x += s[0], x.y += s[1];
  }
  updatePoints() {
    const x = m;
    let t = this._calcAZ();
    return this[x(355)] = t, this[x(355)];
  }
  [m(369)]() {
    const x = m;
    return this[x(355)] == null && (this[x(355)] = this[x(322)]()), this[x(355)];
  }
  [m(306)]() {
    return this[m(278)];
  }
  [m(283)](x) {
    const t = m;
    if (x == null)
      throw new Error(t(301));
    return this[t(370)] <= x || this[t(296)] == null ? this[t(306)]() : this[t(296)][t(283)](x)[t(271)]();
  }
  [m(327)](x, t) {
    const e = m, s = this[e(361)](), i = zs({ x, y: t }, s);
    return i == null || i[e(284)] == 0 ? { x, y: t } : i;
  }
  getSegmentPoints() {
    return this.getPoints();
  }
  [m(331)]() {
    const x = m;
    let t = this.begin, e = this[x(305)], s, i;
    if ((t instanceof M0 || t instanceof at) && (s = t[x(373)]), (e instanceof M0 || e instanceof at) && (i = e[x(373)]), s == null || i == null)
      return;
    let r = Hx(s, i);
    if (W0(r), this[x(296)] !== r)
      return this[x(279)](r), r;
  }
  [m(316)]() {
    const x = m;
    return this[x(286)][x(374)]() || this[x(305)][x(374)]() ? ![] : !![];
  }
  isBeginDisplayObject() {
    const x = m;
    return this[x(286)][x(374)]();
  }
  [m(265)]() {
    const x = m;
    return this[x(305)][x(374)]();
  }
  [m(264)]() {
    const x = m;
    this[x(286)][x(374)]() && this[x(286)][x(373)][x(277)](this), this.setBegin(this[x(347)]());
  }
  [m(348)]() {
    const x = m;
    this.end.isDisplayObjectTarget() && this[x(305)][x(373)][x(288)](this), this[x(375)](this[x(282)]());
  }
  [m(367)]() {
    const x = m;
    this[x(264)](), this[x(348)]();
  }
  [m(279)](x) {
    const t = m;
    if (this[t(296)] === x)
      throw new Error(t(340));
    let e = this;
    return Ns(e, x), e[t(296)] && e[t(296)][t(266)](e), x.addChild(e), this;
  }
  [m(311)](x, t, e) {
    const s = m;
    let i = this.positions[x];
    if (i == null && (i = this[s(351)][x]), i == null)
      throw Error(s(343) + x);
    return typeof i == s(344) ? i.call(this, t, e) : i;
  }
}
Pt([I("Link")], Y[m(338)], m(270), 2), Pt([I(!![])], Y[m(338)], m(294), 2), Pt([I(5)], Y[m(338)], m(269), 2), Pt([I(Rx)], Y[m(338)], m(351), 2), Pt([I(F[m(338)].serializers.concat([m(308), m(321)]))], Y[m(338)], m(315), 2), Pt([I(function() {
  const n = m;
  return [n(286), n(305)];
})], Y.prototype, m(335), 2);
function dx(n, x) {
  const t = m;
  let e;
  if (x instanceof M0) {
    let s = x[t(373)];
    e = mr(n, s, x[t(314)]);
  } else if (x instanceof pt)
    e = Ir(n, x);
  else if (x instanceof ot)
    e = { x: x.x, y: x.y };
  else if (x instanceof at) {
    let s = x[t(373)], i = x.segIndex, r = x.t;
    e = _r(n, s, i, r);
  } else if (x instanceof Tx)
    e = x.fn();
  else
    throw console[t(378)](x), new Error(t(291));
  return e;
}
Object[m(366)](Y[m(338)], { text: { get() {
  const n = m;
  return this[n(309)] != null ? this[n(309)][n(376)] : this[n(363)];
}, set(n) {
  const x = m;
  this[x(280)] = !![], this[x(293)](n), this[x(363)] = n;
} } });
function _r(n, x, t, e, s) {
  const i = m;
  let r;
  if (x[i(296)] === n[i(296)])
    r = x[i(353)](e, t, s), r = x[i(306)]()[i(334)](r);
  else {
    let a;
    n[i(370)] == H0 ? a = n[i(304)]() : a = n[i(296)][i(304)](), r = x[i(353)](e, t, s), r = x[i(304)]()[i(334)](r), r = a[i(368)]().point(r);
  }
  return r;
}
function mr(n, x, t) {
  const e = m;
  let s;
  if (x.parent === n[e(296)])
    s = x[e(311)](t), x[e(339)] && (s = x[e(306)]().point(s)), W0(s, x, t);
  else {
    W0(n[e(296)], n);
    let i;
    n[e(370)] == H0 ? i = n[e(304)]() : i = n[e(296)][e(304)](), s = x[e(311)](t), s = x[e(304)]()[e(334)](s), s = i[e(368)]()[e(334)](s), W0(s, x, t);
  }
  return s;
}
function Ir(n, x) {
  const t = m;
  if (n[t(370)] == 0)
    throw new Error(t(337));
  let e = x[t(373)], s;
  n.deep == H0 ? s = n[t(304)]()[t(271)]() : s = n[t(296)][t(304)]()[t(271)]();
  const i = n[t(286)][t(373)] === e, r = i ? n[t(305)] : n[t(286)], a = r[t(373)];
  if (a[t(294)] && a[t(355)] == null)
    throw new Error(t(313));
  let o;
  r instanceof pt ? o = a[t(303)](0, 0) : (i ? o = dx(n, n[t(305)]) : o = dx(n, n[t(286)]), o = s[t(334)](o));
  let h = e[t(304)]();
  o = h[t(271)]()[t(368)]()[t(334)](o);
  let l = e[t(327)](o.x, o.y);
  return l = h.point(l), l = s[t(368)]()[t(334)](l), l;
}
function Hx(n, x) {
  const t = m;
  return n[t(296)] === x[t(296)] ? n[t(296)] : n[t(370)] == x[t(370)] ? Hx(n[t(296)], x.parent) : n[t(370)] > x[t(370)] ? Hx(n[t(296)], x) : Hx(n, x[t(296)]);
}
function He(n, x, t, e) {
  const s = m;
  if (n[s(270)] == s(323)) {
    let r = t[t[s(284)] - 2], a = t[t.length - 1], o = [a.x - r.x, a.y - r.y];
    return z[s(354)](o, o);
  }
  let i = ![];
  if (e) {
    if (i = x instanceof M0 && x.target instanceof O && x.name !== s(326), i == ![]) {
      t = t || n.getPoints();
      let r = t[0], a = t[1], o = [r.x - a.x, r.y - a.y];
      return n[s(270)] == s(345) && z[s(319)](o, o), z.normalize(o, o);
    }
  } else if (i = x instanceof M0 && x.target instanceof O && x[s(314)] !== s(326), i == ![]) {
    t = t || n[s(369)]();
    let r = t[t[s(284)] - 2], a = t[t[s(284)] - 1], o = [a.x - r.x, a.y - r.y];
    return z[s(354)](o, o);
  }
  if (x instanceof M0) {
    let r = js(x[s(314)]);
    return !e && z[s(319)](r, r), r;
  }
  throw new Error(s(318));
}
var f0 = We;
(function(n, x) {
  for (var t = We, e = n(); []; )
    try {
      var s = -parseInt(t(272)) / 1 + parseInt(t(292)) / 2 * (parseInt(t(278)) / 3) + parseInt(t(282)) / 4 * (parseInt(t(264)) / 5) + parseInt(t(284)) / 6 * (parseInt(t(269)) / 7) + parseInt(t(268)) / 8 * (-parseInt(t(277)) / 9) + parseInt(t(271)) / 10 + parseInt(t(288)) / 11;
      if (s === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Xe, 327076);
var wr = Object[f0(286)], vr = Object.getOwnPropertyDescriptor, kr = (n, x, t, e) => {
  for (var s = f0, i = e > 1 ? void 0 : e ? vr(x, t) : x, r = n[s(276)] - 1, a; r >= 0; r--)
    (a = n[r]) && (i = (e ? a(x, t, i) : a(i)) || i);
  return e && i && wr(x, t, i), i;
};
class gt extends O {
  constructor(x, t = 0, e = 0, s = 1, i = 1, r = !![]) {
    var a = f0;
    super(x, t, e, s, i), this[a(298)] = !![], this[a(294)] = !![], this[a(275)] = r;
  }
  get [f0(275)]() {
    return this._autoSize;
  }
  set autoSize(x) {
    var t = f0;
    this[t(294)] = x;
  }
  _isTextOrStyleDirty() {
    var x = f0;
    return this._textDirty || this[x(291)][x(289)]() ? (this[x(294)] && this[x(267)](), !![]) : ![];
  }
  [f0(267)]() {
    var x = f0;
    super[x(265)]();
    let e = this._style.calcGap();
    this[x(290)](this[x(263)] + e, this[x(280)] + e);
  }
  _calcTextPosition() {
    var x = f0;
    const t = this[x(293)];
    let e = t[x(287)] || 0, s = (t[x(283)] || 0) + (t[x(295)] | 0);
    return (t[x(274)] == x(281) && (t[x(279)] == "lt" || t[x(279)] == "ct" || t[x(279)] == "rt") || t[x(274)] == "top" && (t[x(279)] == "lb" || t[x(279)] == "cb" || t.textPosition == "rb") || t.textAlign == x(299) && (t[x(279)] == "lt" || t[x(279)] == "lm" || t[x(279)] == "lb") || t.textAlign == "left" && (t[x(279)] == "rt" || t.textPosition == "rm" || t.textPosition == "rb")) && (e = 0, s = 0), super[x(273)](e, s);
  }
}
function We(n, x) {
  var t = Xe();
  return We = function(e, s) {
    e = e - 263;
    var i = t[e];
    return i;
  }, We(n, x);
}
kr([I(f0(270))], gt.prototype, f0(296), 2), V0(gt[f0(266)], { serializers: { value: O[f0(266)][f0(297)][f0(285)](["autoSize", f0(298)]) } });
function Xe() {
  var n = ["calcTextSize", "prototype", "resizeToFitText", "184Nxrlai", "1207472fllCUm", "TextNode", "5570300sKpKwu", "549400zrutMf", "_calcTextPosition", "textBaseline", "autoSize", "length", "246123eyNKsW", "48wWOPIe", "textPosition", "_textHeight", "bottom", "250284xkKQhE", "padding", "12mIBtqh", "concat", "defineProperty", "borderWidth", "87747QVbEmG", "isDirty", "resizeTo", "style", "27504TMKjSZ", "_style", "_autoSize", "lineWidth", "className", "serializers", "autoDirection", "right", "_textWidth", "30DVghmf"];
  return Xe = function() {
    return n;
  }, Xe();
}
const b0 = qe;
(function(n, x) {
  const t = qe, e = n();
  for (; []; )
    try {
      if (parseInt(t(449)) / 1 + parseInt(t(431)) / 2 + parseInt(t(458)) / 3 * (-parseInt(t(444)) / 4) + -parseInt(t(440)) / 5 * (parseInt(t(438)) / 6) + -parseInt(t(422)) / 7 * (-parseInt(t(445)) / 8) + -parseInt(t(435)) / 9 + parseInt(t(433)) / 10 * (-parseInt(t(441)) / 11) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Ge, 380249);
class Rs {
  [b0(452)](x) {
    return 0;
  }
  [b0(455)](x) {
    const t = b0;
    let e = x[t(428)];
    return e[t(453)](), this[t(428)](e, x), e;
  }
  [b0(439)](x, t) {
    const e = b0;
    if (t == null)
      throw new Error("deep is required.");
    if (x[e(454)] <= t || x[e(442)] == null)
      return x[e(455)]();
    let s = x[e(442)][e(439)](t).copy();
    return this[e(428)](s, x), s;
  }
  [b0(428)](x, t) {
    const e = b0;
    if (!(t instanceof O) || t[e(442)] == null && !(t instanceof ht))
      return;
    let s = this[e(460)](t, t[e(442)]), i = s[0] + t.x, r = s[1] + t.y;
    x[e(450)](i, r), (t[e(425)] != 0 || t[e(443)] != 0) && x.transform(1, t[e(425)], t.skewY, 1, 0, 0), (t.scaleX !== 1 || t[e(424)] !== 1) && x.scale(t[e(459)], t[e(424)]);
    let a = this[e(452)](t) + t[e(429)];
    if (a != 0) {
      let o = t[e(434)](t[e(423)]);
      x[e(450)](o.x, o.y), x[e(432)](a), x.translate(-o.x, -o.y);
    }
  }
}
class Ri extends Rs {
  calcOriginInParent(x, t) {
    const e = b0;
    if (x instanceof ls)
      return [0, 0];
    if (x instanceof ht) {
      const s = x[e(462)];
      return [s[e(446)] * 0.5, s.height * 0.5];
    } else if (x instanceof O) {
      let s = [x[e(447)][0] * t.width, x[e(447)][1] * t[e(426)]], i = x[e(419)];
      if (i != null) {
        let r = x[e(434)](i);
        s[0] -= r.x, s[1] -= r.y;
      }
      return s;
    } else if (x instanceof Y)
      return [0, 0];
    throw new Error(e(436));
  }
}
function qe(n, x) {
  const t = Ge();
  return qe = function(e, s) {
    return e = e - 419, t[e];
  }, qe(n, x);
}
class Hi extends Rs {
  [b0(460)](x, t) {
    const e = b0;
    if (t == null || x instanceof Y)
      return x[e(447)];
    let s = x[e(447)][0], i = x[e(447)][1], r = t[e(456)](i, s);
    if (x[e(430)]) {
      let o = this[e(452)](x);
      r = { x: r.x + x[e(430)] * Math[e(421)](o), y: r.y + x.originOffset * Math[e(457)](o) };
    }
    let a = x[e(419)];
    if (a != null) {
      let o = x.positionToLocalPoint(a);
      r.x -= o.x, r.y -= o.y;
    }
    return [r.x, r.y];
  }
  [b0(428)](x, t) {
    const e = b0;
    if (t instanceof gt && t[e(437)] == !![]) {
      let s = this[e(452)](t);
      s < -Math.PI / 2 || s > Math.PI / 2 ? t[e(429)] = Math.PI : t[e(429)] = 0;
    }
    return super[e(428)](x, t);
  }
  [b0(452)](x) {
    const t = b0;
    let e = 0;
    if (x.originAutoRotate) {
      let i = x.origin[0], r = x[t(447)][1];
      e = x[t(442)][t(461)](i, r);
    }
    let s = x[t(442)];
    if (x === s[t(451)]) {
      let i = He(s, s[t(448)], s[t(427)](), !![]);
      z.negate(i, i), e = Math[t(463)](i[1], i[0]);
    } else if (x === s.endArrow) {
      let i = He(s, s.end, s.getPoints(), ![]);
      e = Math[t(463)](i[1], i[0]);
    }
    return e;
  }
}
function Ge() {
  const n = ["5316339HBYnXB", "rotateCenter", "scaleY", "skewX", "height", "getPoints", "transform", "rotation", "originOffset", "1203546oHmpbI", "rotate", "410XeMpaO", "positionToLocalPoint", "4642587eWhUko", "unknow origin object type", "autoDirection", "15804mRYhsP", "getTransformByDeep", "1065ovMmLR", "38841hKFktx", "parent", "skewY", "4hluWQE", "8rnxrIr", "width", "origin", "begin", "476146SwVWAC", "translate", "beginArrow", "getOriginRotation", "identity", "deep", "getTransform", "getPoint", "sin", "706473TWZpwu", "scaleX", "calcOriginInParent", "getK", "stage", "atan2", "originAlignPosition", "getCS", "cos"];
  return Ge = function() {
    return n;
  }, Ge();
}
const Pr = new Hi(), Sr = new Ri();
function Hs(n) {
  return n[b0(442)] instanceof Y ? Pr : Sr;
}
_0[b0(420)] = Hs;
const M = fx;
(function(n, x) {
  const t = fx, e = n();
  for (; []; )
    try {
      if (-parseInt(t(484)) / 1 + -parseInt(t(493)) / 2 * (parseInt(t(379)) / 3) + parseInt(t(386)) / 4 + parseInt(t(393)) / 5 + -parseInt(t(412)) / 6 * (-parseInt(t(464)) / 7) + -parseInt(t(408)) / 8 * (-parseInt(t(496)) / 9) + -parseInt(t(447)) / 10 * (parseInt(t(426)) / 11) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Ye, 954239);
function Ye() {
  const n = ["fillText", "rgba(0,0,255,0.3)", "bottom", "isIntersectRect", "right", "context", "bold 16px arial", "assign", "paintAxis", "isSelected", "getTransform", "shadowColor", "exportPaint", "renderLayer", "green", "closePath", "7eofFrg", "isPointOn", "isDraging", "gray", "style", "lineTo", "lineWidth", "paintChildrenWhenOutOfViewport", "_paintChildren", "display", "isMouseInPath", "font", "paintAABB", "isMouseInObjectAABB", "getHeight", "points", "clearAll", "inputSystem", "moveTo", "dontNeedPickup", "1148124AErXYs", "getOBB", "_style", "pink", "roundRect", "render", "_obb", "stage", "save", "26eYzCBc", "toStageXY", "cursor", "520929WfhsxU", "styleY", "clone", "length", "136317rHbFCg", "fillStyle", "aabb", "children", "setCursor", "max", "isMouseInStroke", "6431132WlSFjU", "devicePixelRatio", "visible", "quadraticCurveTo", "isPointInPath", "layer", "left", "8949585jTcpTN", "scaleX", "shadowOffsetY", "selectedStyle", "block", "paintOBB", "getViewportRectInLayer", "selectedGroup", "_paintNodeOrLinkPrepare", "updatePoints", "remove", "draw", "getContext", "painted", "HandlerLayer", "240koeVoK", "paint", "mouseX", "getWidth", "1162218HTpLPj", "showSelected", "#009A93", "beginPath", "absolute", "hide", "applyTo", "contextExtends", "getCursor", "styleSystem", "className", "isOutOfViewPort", "createElement", "width", "649wEOBDb", "height", "paintSelected", "toDataURL", "canvas", "axis", "isEmpty", "top", "destoryed", "_isOutOfViewport", "mouseY", "restore", "setSize", "clear", "push", "stroke", "styleX", "dispose", "setLineDash", "isPointInStroke", "strokeStyle", "446570KtJRik"];
  return Ye = function() {
    return n;
  }, Ye();
}
var Er = N0.gc;
let $s = X0.w;
function fx(n, x) {
  const t = Ye();
  return fx = function(e, s) {
    return e = e - 376, t[e];
  }, fx(n, x);
}
class Ws extends ur {
  constructor(x) {
    const t = fx;
    super(), this[t(434)] = ![], this[t(391)] = x, this[t(430)] = document[t(424)](t(430)), Object[t(455)](this[t(430)][t(468)], { position: t(416), left: "0px" }), this[t(453)] = this[t(430)][t(405)]("2d"), this.context[t(489)] = this, window[t(387)] && this[t(453)].scale(window.devicePixelRatio, window[t(387)]), this[t(419)]();
  }
  [M(443)]() {
    const x = M;
    this[x(430)][x(403)]();
  }
  [M(461)](x) {
    const t = M;
    if (this[t(491)] = this[t(391)][t(491)], this[t(421)] = this[t(491)][t(421)], this[t(439)](), x[t(431)][t(388)] && x[t(422)] != t(407) && this[t(456)](x), this[t(409)](x), yt[t(476)] == !![] && this[t(391)] != null) {
      let s = x[t(382)];
      if (s != null)
        for (var e = s[t(378)] - 1; e >= 0; e--) {
          let i = s[e];
          this[t(476)](i);
        }
    }
    {
      if ($s == null)
        return;
      let s = this[t(453)];
      s.save(), s.globalAlpha = 0.8, s[t(475)] = t(454);
      let i = Er($s);
      s[t(380)] = t(467), s[t(448)](i, 14, this[t(478)]() - 14), s.restore();
    }
  }
  [M(423)](x) {
    const t = M;
    if (x.isLayer)
      return ![];
    if (this[t(391)] == null)
      return ![];
    const e = this[t(391)];
    return e.cuttingHide == ![] ? ![] : !e[t(399)]()[t(451)](x._obb[t(381)]);
  }
  [M(401)](x) {
    const t = M;
    return x.painted = ![], x instanceof Y ? x[t(479)] = x[t(402)]() : x instanceof O && (x[t(452)] = x.width * 0.5, x[t(450)] = x[t(427)] * 0.5, x[t(392)] = -x[t(452)], x[t(433)] = -x[t(450)]), x.visible == ![] ? ![] : (x[t(490)] = x[t(485)](), x[t(435)] = this[t(423)](x), !![]);
  }
  overviewPaint(x) {
    return this[M(409)](x, !![], ![]);
  }
  [M(460)](x) {
    return this[M(409)](x, ![], !![]);
  }
  [M(409)](x, t = ![], e = ![]) {
    const s = M;
    let i = this[s(453)], r = this[s(391)];
    this[s(391)] != null && (x[s(465)] = ![]);
    let a = !(x instanceof Y || x instanceof ls);
    if (i[s(492)](), a && Hs(x).transform(i, x), x[s(435)] == ![]) {
      x[s(406)] = !![], r && r[s(491)][s(421)]._computeStyle(x), x[s(486)].applyTo(i);
      let o = x[s(457)] && x[s(413)] == !![];
      o && (i[s(492)](), this.paintSelected(x)), x[s(404)](i), o && i[s(437)]();
    }
    return this[s(472)](x, t, e), i[s(437)](), x;
  }
  [M(472)](x, t = ![], e = ![]) {
    const s = M;
    let i = x[s(382)];
    if (i[s(378)] == 0 || x._isOutOfViewport && x[s(471)] == ![])
      return;
    const r = this[s(391)];
    for (var a = 0; a < i[s(378)]; a++) {
      let o = i[a];
      this[s(401)](o) == !![] && (this.paint(o, t, e), r && o[s(406)] && r.displayList[s(440)](o));
    }
  }
  [M(428)](x) {
    const t = M;
    let e = this.context;
    if (x.selectedStyle != null && x[t(396)][t(418)](e), x[t(428)] != null) {
      x.paintSelected(e);
      return;
    }
    if (x instanceof O) {
      e[t(492)](), e[t(415)]();
      let s = 1;
      x[t(396)] != null ? s = x.selectedStyle[t(470)] | s : (e[t(444)]([0, 0]), this[t(421)] ? e.strokeStyle = this.styleSystem[t(396)] : e.strokeStyle = t(414)), e[t(470)] = s;
      let i = x.width + s + 3, r = x.height + s + 3;
      e.rect(-i * 0.5, -r * 0.5, i, r), e.stroke(), e[t(463)](), e[t(437)]();
    } else
      this[t(421)] ? e.shadowColor = this[t(421)][t(396)] : e[t(459)] = t(414), e.shadowBlur = 5, e.shadowOffsetX = 3, e[t(395)] = 3;
  }
  [M(480)]() {
    this[M(439)]();
  }
  [M(483)](x) {
    const t = M;
    let e = this[t(491)];
    return e == null ? !![] : this.layer == null ? !![] : e[t(481)].x < 0 || e[t(481)].y < 0 ? !![] : e[t(400)][t(432)]() && e[t(481)][t(466)] ? !![] : this[t(477)](x) ? ![] : !![];
  }
  [M(477)](x) {
    const t = M;
    let e = x[t(490)][t(381)][t(377)]();
    return x instanceof Y && (e.x -= 2, e.y -= 2, e[t(425)] += 4, e[t(427)] += 4), e.contains(this[t(391)][t(410)], this[t(391)][t(436)]);
  }
  [M(385)](x, t) {
    const e = M;
    let s = this[e(453)], i = this[e(491)];
    if (x == null || x == 0)
      return t != null ? s[e(445)](t, i[e(481)].x, i.inputSystem.y) : s[e(445)](i[e(481)].x, i[e(481)].y);
    let r = ![];
    for (var a = 0; a < x; a++) {
      if (t != null ? r = s[e(445)](t, i[e(481)].x + a, i[e(481)].y + a) : r = s[e(445)](i[e(481)].x + a, i[e(481)].y + a), r)
        return !![];
      if (t != null ? r = s[e(445)](t, i[e(481)].x - a, i[e(481)].y - a) : r = s[e(445)](i.inputSystem.x - a, i[e(481)].y - a), r)
        return !![];
      if (t != null ? r = s.isPointInStroke(t, i.inputSystem.x - a, i[e(481)].y + a) : r = s[e(445)](i.inputSystem.x - a, i.inputSystem.y + a), r)
        return !![];
      if (t != null ? r = s[e(445)](t, i.inputSystem.x + a, i[e(481)].y - a) : r = s[e(445)](i[e(481)].x + a, i.inputSystem.y - a), r)
        return !![];
    }
    return ![];
  }
  [M(474)](x) {
    const t = M;
    let e = this.context, s = this[t(491)];
    return x ? e[t(390)](x, s.inputSystem.x, s[t(481)].y) : e[t(390)](s[t(481)].x, s.inputSystem.y);
  }
  contextExtends() {
    const x = M;
    this[x(453)][x(488)] == null && (this[x(453)][x(488)] = function(t, e, s, i, r) {
      const a = x;
      this.beginPath(), this[a(482)](t + r, e), this[a(469)](t + s - r, e), this.quadraticCurveTo(t + s, e, t + s, e + r), this[a(469)](t + s, e + i - r), this[a(389)](t + s, e + i, t + s - r, e + i), this[a(469)](t + r, e + i), this[a(389)](t, e + i, t, e + i - r), this.lineTo(t, e + r), this.quadraticCurveTo(t, e, t + r, e), this.closePath();
    });
  }
  [M(476)](x) {
    const t = M;
    if (x._obb == null)
      return;
    let e = this[t(391)], s = this[t(453)], i = x._obb[t(381)];
    i = e.toStageAABB(i), s[t(492)](), x instanceof ht ? s[t(446)] = t(449) : x instanceof Y ? s[t(446)] = t(487) : s[t(446)] = t(462), s[t(415)](), s.rect(i.x, i.y, i.width, i[t(427)]), s.stroke(), s[t(463)](), s.restore();
  }
  [M(398)](x) {
    const t = M;
    if (x[t(490)] == null)
      return;
    let e = this[t(453)], s = this[t(391)][t(458)](), i = s[t(479)](x[t(490)][t(479)]);
    e[t(492)](), x instanceof ht ? e[t(446)] = "rgba(0,0,255,0.3)" : x instanceof Y ? e[t(446)] = t(487) : e.strokeStyle = t(462), e[t(415)](), e[t(482)](i[0].x, i[0].y);
    for (let r = 1; r < i[t(378)]; r++) {
      const a = i[r];
      e.lineTo(a.x, a.y);
    }
    e.lineTo(i[0].x, i[0].y), e[t(441)](), e.closePath(), e[t(437)]();
  }
  show() {
    const x = M;
    this.canvas.style[x(473)] = x(397);
  }
  [M(417)]() {
    this.canvas.style.display = "none";
  }
  getWidth() {
    return this.canvas.width;
  }
  getHeight() {
    const x = M;
    return this[x(430)][x(427)];
  }
  [M(438)](x, t) {
    const e = M;
    this[e(430)][e(425)] = x, this.canvas[e(427)] = t;
  }
  [M(420)]() {
    const x = M;
    return this.canvas[x(468)][x(495)];
  }
  [M(383)](x) {
    const t = M;
    this[t(430)][t(468)][t(495)] = x;
  }
  getImage(x, t) {
    const e = M;
    return x = x || "image/png", this.canvas[e(429)](x, t);
  }
  getRectImageData(x, t, e, s) {
    const i = M;
    return x == null && (x = 0), t == 0 && (t = 0), e == null && (e = this[i(411)]()), s == null && (s = this[i(478)]()), this.context.getImageData(x, t, e, s);
  }
  [M(456)](x) {
    const t = M;
    let e = this[t(453)];
    const s = x.stage.width, i = x.stage.height, r = x[t(494)](0, 0);
    e[t(492)](), r.x > 0 && r.x < s && (e[t(415)](), x[t(431)][t(376)][t(418)](e), e[t(482)](r.x, 0), e[t(469)](r.x, i), e.moveTo(r.x - 5, i - 8), e[t(469)](r.x, i), e[t(469)](r.x + 5, i - 8), e[t(441)](), e.fillText("+y", r.x + 6, i - 5)), r.y > 0 && r.y < i && (e[t(415)](), x[t(431)][t(442)][t(418)](e), e[t(482)](s * 0.5, r.y), e[t(469)](0, r.y), e[t(482)](s * 0.5, r.y), e[t(469)](s, r.y), e[t(482)](s - 8, r.y - 5), e[t(469)](s, r.y), e[t(469)](s - 8, r.y + 5), e.stroke(), e[t(448)]("+x", s - 5, r.y + 5));
    let a = x.axis[t(442)], o = x[t(431)][t(376)];
    a[t(470)] = Math.max(1, x[t(394)]), o.lineWidth = Math[t(384)](1, x.scaleY), e[t(437)]();
  }
  clear() {
    const x = M;
    this[x(430)].width = this.canvas[x(425)];
  }
}
const w = Ve;
(function(n, x) {
  const t = Ve, e = n();
  for (; []; )
    try {
      if (-parseInt(t(402)) / 1 * (-parseInt(t(342)) / 2) + parseInt(t(345)) / 3 * (-parseInt(t(414)) / 4) + parseInt(t(386)) / 5 + -parseInt(t(405)) / 6 * (parseInt(t(408)) / 7) + -parseInt(t(401)) / 8 * (parseInt(t(413)) / 9) + -parseInt(t(396)) / 10 * (parseInt(t(332)) / 11) + -parseInt(t(330)) / 12 * (-parseInt(t(362)) / 13) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Ue, 155324);
var Lr = Object[w(378)], Cr = Object[w(395)], ti = (n, x, t, e) => {
  const s = w;
  for (var i = e > 1 ? void 0 : e ? Cr(x, t) : x, r = n[s(435)] - 1, a; r >= 0; r--)
    (a = n[r]) && (i = (e ? a(x, t, i) : a(i)) || i);
  return e && i && Lr(x, t, i), i;
};
class ht extends O {
  constructor(x) {
    const t = w;
    super(), this[t(430)] = t(352), this[t(310)] = !![], this[t(409)] = new V(0, 0, 1, 1), this[t(432)] = !![], this[t(388)] = [], this[t(417)] = !![], this[t(355)] = new K1(), this.mouseX = -1, this[t(307)] = -1, this[t(349)] = { x: 10, y: 10 }, this[t(316)] = { x: 0.1, y: 0.1 }, this[t(382)] = 0, this[t(387)] = ![], this[t(312)] = ![], this[t(419)] = { sw: null, sh: null, x: null, y: null }, this[t(305)] = x, this[t(399)] = ![], this.setRender(new Ws(this)), this[t(388)] = [], yt.isDebug && (_0.layer = this);
  }
  get [w(308)]() {
    return this[w(382)];
  }
  set [w(308)](x) {
    const t = w;
    this[t(382)] = x;
  }
  [w(397)]() {
    return this[w(392)](), this._requestReapint = !![], !![];
  }
  [w(314)]() {
    this[w(355)].show();
  }
  hideAxis() {
    const x = w;
    this[x(355)][x(373)]();
  }
  [w(309)](x) {
    const t = w;
    this[t(323)] != null && this.render[t(357)](), this.render = x, this[t(397)]();
  }
  [w(369)]() {
    const x = w;
    this[x(388)] = [];
    let t = this[x(325)]()[x(322)](), e = t[x(360)]({ x: this[x(383)].inputSystem.x || 0, y: this[x(383)].inputSystem.y || 0 });
    return this.mouseX = e.x, this[x(307)] = e.y, this[x(433)] && this[x(327)](), !![];
  }
  getViewportRectInLayer() {
    return this[w(409)];
  }
  toFileJson() {
    const x = w;
    let t = this[x(383)].serializerSystem[x(379)]([this]);
    return t[x(415)] = this[x(383)].styleSystem.toPojo(), console[x(391)](t), JSON.stringify(t);
  }
  [w(317)](x) {
    const t = w;
    A0.resetTo(100), this[t(346)](), this.stage[t(311)][t(313)](this, x), this[t(383)][t(375)][t(318)](this);
  }
  runScript(x) {
    x(this[w(383)], this);
  }
  [w(327)]() {
    const x = w;
    this[x(409)][x(412)](0, 0, this[x(383)][x(334)], this[x(383)].height);
    let t = this[x(325)]()[x(322)]();
    const e = this.viewportRect;
    let s = t[x(360)]({ x: e.x, y: e.y }), i = t.point({ x: e[x(334)], y: e[x(361)] });
    return e.x = s.x, e.y = s.y, e.width = i.x - s.x, e.height = i.y - s.y, this.viewportRect = e, e;
  }
  [w(390)](x, t) {
    const e = w;
    (x != this[e(323)][e(410)]() || t != this[e(323)].getHeight()) && (this[e(323)][e(436)](x, t), this[e(333)](x, t), this[e(397)]());
  }
  [w(420)](x = ![]) {
    const t = w;
    let e = this.render[t(337)];
    return super[t(420)](e, x);
  }
  [w(321)](x) {
    const t = w, e = this;
    let s = [], i = e.getAllVisiable();
    if (i != null)
      for (var r = 0; r < i[t(435)]; r++) {
        let a = i[r];
        if (!a[t(329)])
          continue;
        let o = a[t(319)].aabb;
        x[t(367)](o) && s[t(406)](a);
      }
    return s;
  }
  [w(439)](x, t) {
    const e = w;
    return super[e(439)](x, t), this[e(392)](), this;
  }
  [w(392)]() {
    const x = w;
    if (!this[x(323)])
      return;
    let t = this._bgInfo, e = this[x(380)][x(425)];
    if (e != null && e != x(340)) {
      let s = 100, i = 100, r = this[x(380)][x(315)];
      r != null && (s = r[x(334)], i = r[x(361)]);
      let a = s * this[x(303)], o = i * this[x(384)], c = this.width * 0.5 % a + this.x, h = this[x(361)] * 0.5 % o + this.y;
      if (t.sw != a || t.sh != o || t.x != c || t.y != h) {
        const l = this[x(323)].canvas;
        l[x(380)][x(324)] = a + "px " + o + "px", l[x(380)][x(304)] = c + x(403) + h + "px";
      }
      t.sw = a, t.sh = o, t.x = c, t.y = h;
    }
  }
  [w(421)](x) {
    const t = w;
    super[t(421)](x);
    let e = x;
    if (this[t(323)]) {
      const s = this.render[t(363)];
      Object[t(366)](e)[t(368)]((r) => {
        const a = t;
        let o = e[r];
        r[a(426)](a(320)) && (s[a(380)][r] = o);
      });
    }
    return this;
  }
  getAABB(x = ![]) {
    let t = this.getChildrenAABB(x, H0);
    return this.toStageAABB(t);
  }
  [w(350)]() {
    const x = w;
    return super[x(350)](), this[x(392)](), this;
  }
  hide() {
    const x = w;
    return super[x(373)](), this[x(323)][x(373)](), this;
  }
  [w(351)]() {
    const x = w;
    let t = this.width, e = this[x(361)];
    return [{ x: 0, y: 0 }, { x: t, y: 0 }, { x: t, y: e }, { x: 0, y: e }];
  }
  getPoints() {
    return this._OBBPoints();
  }
  [w(356)](x) {
  }
  zoom(x, t, e, s) {
    const i = w;
    if (this[i(424)](i(394))) {
      let a = new Event("zoom", { cancelable: !![] });
      if (a[i(394)] = { x, y: t, cx: e, cy: s }, this[i(338)](a), a.defaultPrevented == !![])
        return this;
    }
    if (x < 1) {
      let a = this[i(316)];
      if (this.viewportRect[i(334)] >= this.width * (1 / a.x) && this[i(409)].height >= this[i(361)] * (1 / a.y))
        return this;
    } else {
      let a = this[i(349)];
      if (this[i(409)][i(334)] <= this[i(334)] * (1 / a.x) && this[i(409)][i(361)] <= this[i(361)] * (1 / a.y))
        return this;
    }
    return U1(this, x, t, e, s), this;
  }
  [w(393)]() {
    const x = w;
    this[x(381)](1, 1), this.translateTo(0, 0), this[x(433)] = !![];
  }
  forceUpdate() {
    this.render.renderLayer(this);
  }
  [w(348)](x, t) {
    const e = w;
    this.render[e(363)][e(380)].background = x, this[e(323)][e(363)][e(380)].backgroundSize = t;
  }
  [w(411)](x, t, e = ![]) {
    return this[w(398)](x, t, e);
  }
  [w(358)](x) {
    const t = w;
    let e = x[t(434)](), s = this[t(325)](), i = s[t(360)]({ x: e.x, y: e.y }), r = s[t(360)]({ x: e.x + e[t(334)], y: e.y + e[t(361)] });
    return e.x = i.x, e.y = i.y, e.width = r.x - i.x, e.height = r.y - i.y, e;
  }
  [w(344)](x) {
    const t = w;
    let e = this[t(325)]()[t(322)](), s = new V(), i = e[t(360)]({ x: x.x, y: x.y }), r = e[t(360)]({ x: x.x + x[t(334)], y: x.y + x[t(361)] });
    return s.x = i.x, s.y = i.y, s[t(334)] = r.x - i.x, s[t(361)] = r.y - i.y, s;
  }
  [w(359)](x) {
    const t = w;
    if (this[t(404)] == ![])
      return;
    let e = x.dx, s = x.dy;
    if (this[t(312)] == ![]) {
      this[t(439)](e, s);
      return;
    }
    let i = this[t(323)][t(363)], r = i.offsetLeft, a = i[t(372)];
    i[t(380)][t(437)] = r + e + "px", i[t(380)][t(341)] = a + s + "px";
  }
  setDrawDelay(x) {
    const t = w;
    this[t(312)] = x, x ? this[t(383)].layersContainer[t(380)][t(376)] = t(339) : this[t(383)][t(335)][t(380)].overflow = "inherit";
  }
  [w(326)](x) {
    const t = w;
    if (this[t(312)] == ![])
      return;
    let e = this[t(323)][t(363)], s = e[t(347)], i = e[t(372)];
    this.translateWith(s, i), e[t(380)][t(437)] = t(440), e.style[t(341)] = t(440);
  }
  [w(400)](x) {
    const t = w;
    return super[t(400)](x), this[t(397)](), this;
  }
  [w(331)](x) {
    const t = w;
    super[t(331)](x), this[t(397)]();
  }
  [w(407)](x) {
    const t = w;
    let e = this, s = e.stage, i;
    if (x == null)
      i = e[t(416)](!![]);
    else if (x instanceof F)
      i = x[t(416)](!![], Bt);
    else {
      let h = x.map((l) => l[t(416)](!![], Bt));
      i = Q0.getUnionRect(h);
    }
    let r = s[t(334)] / 2, a = s[t(361)] / 2, o = r - i.x, c = a - i.y;
    o -= i.width / 2, c -= i[t(361)] / 2, e[t(439)](o, c), e[t(397)]();
  }
  _restoreBackground(x) {
    const t = w;
    let e = Object[t(366)](x);
    const s = this[t(323)][t(363)];
    x[t(336)] != null && (s[t(380)][t(320)] = x[t(336)]), e[t(368)]((i) => {
      const r = t;
      let a = x[i];
      i[r(426)]("background") && (s[r(380)][i] = a);
    }), s[t(334)] += 1, s[t(334)] -= 1;
  }
  [w(364)]() {
    const x = w;
    let t = this.stage[x(311)], e = t[x(422)]([this]);
    console.time(x(427)), this[x(317)](e);
    let s = t[x(422)]([this]);
    console.timeEnd("reloadJsonTest");
    function i(a, o) {
      const c = x, h = Math.min(a[c(435)], o[c(435)]);
      for (let l = 0; l < h; l++)
        if (a[l] !== o[l])
          return console.log(c(385), a[c(306)](l, l + 20), o[c(306)](l, l + 20)), l;
      return a.length !== o[c(435)] ? h : -1;
    }
    let r = i(e, s);
    return r != -1 ? console[x(391)](x(343), r) : console[x(391)](x(370)), e;
  }
  [w(353)]() {
    const x = w;
    return F[x(429)](this[x(438)], (t) => t.visible == !![]);
  }
  [w(328)](x = 60) {
    const t = w;
    this[t(382)] = x;
  }
  [w(441)]() {
    const x = w;
    if (this[x(423)])
      throw new Error(x(428));
    this[x(423)] = !![], this[x(323)][x(363)][x(365)](), this[x(383)] && this[x(383)][x(374)](this), this.displayList = void 0, this[x(371)] = void 0, this[x(380)] = void 0, this.viewportRect = void 0, this[x(431)] = void 0, this[x(323)] = void 0, this[x(383)] = void 0, this[x(438)][x(368)]((t) => t[x(354)]()), this[x(438)] = void 0;
  }
}
ti([I(["id", w(305), w(430)])], ht.prototype, w(389), 2), ti([I(w(418))], ht.prototype, w(377), 2);
function Ve(n, x) {
  const t = Ue();
  return Ve = function(e, s) {
    return e = e - 303, t[e];
  }, Ve(n, x);
}
function Ue() {
  const n = ["_findChildren", "visible", "addChild", "40yAneLt", "77xSebnq", "px ", "draggable", "31686MXwauA", "push", "centerBy", "217fUyFiG", "viewportRect", "getWidth", "find", "setTo", "492345HeRUdG", "88XDUSbR", "CustomStyle", "getAABB", "wheelZoom", "undefined", "_bgInfo", "pickUpChild", "css", "toJson", "destroyed", "hasListener", "backgroundRepeat", "startsWith", "reloadJsonTest", "Layer has been destroyed already.", "flatten", "className", "classList", "cuttingHide", "dirty", "clone", "length", "setSize", "left", "children", "translateWith", "0px", "_destory", "scaleX", "backgroundPosition", "name", "substring", "mouseY", "frames", "setRender", "isLayer", "serializerSystem", "_dragDrawDelay", "fillByJson", "showAxis", "_backgroundImageObject", "zoomMinLimit", "openJson", "_computeLayer", "_obb", "background", "pickUpByRect", "invert", "render", "backgroundSize", "getTransform", "dragEndHandler", "updateViewRect", "loopRender", "painted", "12NWyUNS", "addChilds", "44HNgNtQ", "resizeTo", "width", "layersContainer", "_background", "context", "dispatchEvent", "hidden", "no-repeat", "top", "868tjPCoF", "changed", "toLayerRect", "17337WxSwnt", "removeAllChild", "offsetLeft", "setBackground", "zoomMaxLimit", "show", "_OBBPoints", "Layer", "getAllVisiable", "removeFromParent", "axis", "draw", "dispose", "toStageAABB", "dragHandle", "point", "height", "12644333NnfLXo", "canvas", "_reloadJsonTest", "remove", "keys", "containsRect", "forEach", "_paintPrepare", "passed", "listeners", "offsetTop", "hide", "removeChild", "styleSystem", "overflow", "_layerIndex", "defineProperty", "toPojo", "style", "scaleTo", "_frames", "stage", "scaleY", "diff:", "43855meOCnd", "_requestReapint", "displayList", "serializers", "updateSize", "log", "_calcBackgroundPosition", "cancelZoom", "zoom", "getOwnPropertyDescriptor", "737830jeGJeJ", "update"];
  return Ue = function() {
    return n;
  }, Ue();
}
const ut = Qe;
(function(n, x) {
  const t = Qe, e = n();
  for (; []; )
    try {
      if (-parseInt(t(184)) / 1 + -parseInt(t(199)) / 2 + parseInt(t(185)) / 3 + -parseInt(t(174)) / 4 * (-parseInt(t(196)) / 5) + parseInt(t(180)) / 6 + parseInt(t(190)) / 7 + parseInt(t(194)) / 8 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Ke, 649770);
function Ke() {
  const n = ["2017034prwJVI", "</svg>", "652rNnEzK", ';stroke-width:0.5"/>', '<line x1="0" y1="', "rgb(21,21,21)", "rgb(36,36,36)", "innerHTML", "823410Nrfjdr", '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ', "get", "querySelector", "476078tNGBwE", "1088436WjuZke", `">
            <rect x="0" y="0" width="`, '<line x1="', '" style="fill:', "div", "1271844GfjcuE", "replace", '" height="', '" y1="0" x2="', "9605024PgsEQk", '" style="stroke:', "7730qIERtt", ";stroke:", '" y2="'];
  return Ke = function() {
    return n;
  }, Ke();
}
let Or = `
<svg viewBox="0 0 24 24" id="zoom-in">
<path d="M4,20 L9.58788778,14.4121122"/>
<path d="M14,16 C10.6862915,16 8,13.3137085 8,10 C8,6.6862915 10.6862915,4 14,4 C17.3137085,4 20,6.6862915 20,10 C20,13.3137085 17.3137085,16 14,16 Z"/>
<path d="M16.6666667 10L11.3333333 10M14 7.33333333L14 12.6666667"/>
</svg>
<svg viewBox="0 0 24 24" id="zoom-out">
<path d="M14,16 C10.6862915,16 8,13.3137085 8,10 C8,6.6862915 10.6862915,4 14,4 C17.3137085,4 20,6.6862915 20,10 C20,13.3137085 17.3137085,16 14,16 Z"/>
<path d="M16.6666667 10L11.3333333 10M4 20L9.58788778 14.4121122"/>
</svg>
<svg viewBox="0 0 24 24" id="back-left">
<path d="M5,17 L5,15 C5,10.0294373 8.80557963,6 13.5,6 C18.1944204,6 22,10.0294373 22,15"/>
<polyline points="8 15 5 18 2 15"/>
</svg>
<svg viewBox="0 0 24 24" id="align-center">
<path d="M8 10L16 10M6 6L18 6M6 14L18 14M8 18L16 18"/>
</svg>
<svg viewBox="0 0 24 24" id="edit">
<path d="M18.4142136 4.41421356L19.5857864 5.58578644C20.366835 6.36683502 20.366835 7.63316498 19.5857864 8.41421356L8 20 4 20 4 16 15.5857864 4.41421356C16.366835 3.63316498 17.633165 3.63316498 18.4142136 4.41421356zM14 6L18 10"/>
</svg>
<svg viewBox="0 0 24 24" id="lock-alt">
<rect width="14" height="10" x="5" y="11"/>
<path d="M12,3 L12,3 C14.7614237,3 17,5.23857625 17,8 L17,11 L7,11 L7,8 C7,5.23857625 9.23857625,3 12,3 Z"/>
<circle cx="12" cy="16" r="1"/>
</svg>
<svg viewBox="0 0 24 24" id="lock-open">
<path d="M7,7.625 L7,7 C7,4.23857625 9.23857625,2 12,2 L12,2 C14.7614237,2 17,4.23857625 17,7 L17,11"/>
<rect width="14" height="10" x="5" y="11"/>
</svg>
<svg viewBox="0 0 24 24" id="pan">
<path d="M20,14 L20,17 C20,19.209139 18.209139,21 16,21 L10.0216594,21 C8.75045497,21 7.55493392,20.3957659 6.80103128,19.3722467 L3.34541668,14.6808081 C2.81508416,13.9608139 2.94777982,12.950548 3.64605479,12.391928 C4.35756041,11.8227235 5.38335813,11.8798792 6.02722571,12.5246028 L8,14.5 L8,13 L8.00393081,13 L8,11 L8.0174523,6.5 C8.0174523,5.67157288 8.68902517,5 9.5174523,5 C10.3458794,5 11.0174523,5.67157288 11.0174523,6.5 L11.0174523,11 L11.0174523,4.5 C11.0174523,3.67157288 11.6890252,3 12.5174523,3 C13.3458794,3 14.0174523,3.67157288 14.0174523,4.5 L14.0174523,11 L14.0174523,5.5 C14.0174523,4.67157288 14.6890252,4 15.5174523,4 C16.3458794,4 17.0174523,4.67157288 17.0174523,5.5 L17.0174523,11 L17.0174523,7.5 C17.0174523,6.67157288 17.6890252,6 18.5174523,6 C19.3458794,6 20.0174523,6.67157288 20.0174523,7.5 L20.0058962,14 L20,14 Z"/>
</svg>
<svg viewBox="0 0 24 24" id="apps-alt">
<rect x="5" y="5" width="2" height="2"/>
<rect x="11" y="5" width="2" height="2"/>
<rect x="17" y="5" width="2" height="2"/>
<rect x="5" y="11" width="2" height="2"/>
<rect x="11" y="11" width="2" height="2"/>
<rect x="17" y="11" width="2" height="2"/>
<rect x="5" y="17" width="2" height="2"/>
<rect x="11" y="17" width="2" height="2"/>
<rect x="17" y="17" width="2" height="2"/>
</svg>
<svg viewBox="0 0 24 24" id="maximise">
<polyline points="21 16 21 21 16 21"/>
<polyline points="8 21 3 21 3 16"/>
<polyline points="16 3 21 3 21 8"/>
<polyline points="3 8 3 3 8 3"/>
</svg>
<svg viewBox="0 0 24 24" id="minimise">
<polyline points="8 3 8 8 3 8"/>
<polyline points="21 8 16 8 16 3"/>
<polyline points="3 16 8 16 8 21"/>
<polyline points="16 21 16 16 21 16"/>
</svg>
<svg viewBox="0 0 24 24" id="download">
<path d="M12,3 L12,16"/>
<polyline points="7 12 12 17 17 12"/>
<path d="M20,21 L4,21"/>
</svg>
<svg viewBox="0 0 24 24" id="rectangle">
<rect width="18" height="18" x="3" y="3"/>
</svg>
<svg viewBox="0 0 24 24" id="cursor">
<polygon points="7 20 7 4 19 16 12 16 7 21"/>
</svg>
<svg viewBox="0 0 24 24" id="search">
<path d="M14.4121122,14.4121122 L20,20"/>
<circle cx="10" cy="10" r="6"/>
</svg>
<svg viewBox="0 0 24 24" id="eye">
<path d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z"/>
<circle cx="12" cy="12" r="3"/>
</svg>
<svg viewBox="0 0 24 24" id="save">
<path d="M17.2928932,3.29289322 L21,7 L21,20 C21,20.5522847 20.5522847,21 20,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,4 C3,3.44771525 3.44771525,3 4,3 L16.5857864,3 C16.8510029,3 17.1053568,3.10535684 17.2928932,3.29289322 Z"/>
<rect width="10" height="8" x="7" y="13"/>
<rect width="8" height="5" x="8" y="3"/>
</svg>
<svg viewBox="0 0 24 24" id="image">
<rect width="18" height="18" x="3" y="3"/>
<path stroke-linecap="round" d="M3 14l4-4 11 11"/>
<circle cx="13.5" cy="7.5" r="2.5"/>
<path stroke-linecap="round" d="M13.5 16.5L21 9"/>
</svg>
<svg viewBox="0 0 24 24" id="upload">
<path d="M12,4 L12,17"/>
<polyline points="7 8 12 3 17 8"/>
<path d="M20,21 L4,21"/>
</svg>
`;
function xi(n, x, t, e, s = ut(178), i = ut(177)) {
  const r = ut;
  let a = r(181) + n + " " + x + r(186) + n + r(192) + x + r(188) + s + r(197) + i + ';stroke-width:1;"/>', o = x / t, c = n / e;
  for (let h = 1; h <= t; h++)
    a += r(176) + o * h + '" x2="' + n + r(198) + o * h + r(195) + i + ';stroke-width:0.5"/>';
  for (let h = 1; h <= e; h++)
    a += r(187) + c * h + r(193) + c * h + r(198) + x + r(195) + i + r(175);
  return a += r(173), a = a[r(191)](/\n/g, ""), a;
}
function ei(n) {
  return "data:image/svg+xml;charset=UTF-8," + n;
}
let Wi = document.createElement(ut(189));
Wi[ut(179)] = Or;
function Qe(n, x) {
  const t = Ke();
  return Qe = function(e, s) {
    return e = e - 173, t[e];
  }, Qe(n, x);
}
let Xs = {};
Xs[ut(182)] = function(n) {
  return Wi[ut(183)]("#" + n);
};
function bx(n, x) {
  const t = Ze();
  return bx = function(e, s) {
    return e = e - 340, t[e];
  }, bx(n, x);
}
const L = bx;
(function(n, x) {
  const t = bx, e = n();
  for (; []; )
    try {
      if (parseInt(t(349)) / 1 + parseInt(t(360)) / 2 + parseInt(t(353)) / 3 + -parseInt(t(346)) / 4 + -parseInt(t(348)) / 5 + parseInt(t(355)) / 6 * (parseInt(t(356)) / 7) + parseInt(t(357)) / 8 * (-parseInt(t(341)) / 9) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Ze, 561024);
function Ze() {
  const n = ["382123msxafd", "8FmYmvt", "center", "top", "1378696AZmkXV", "rgba(255,255,255,0.2)", "9320922ivWaCl", "assign", "white", "url('", "black", "3532808NUJjeg", "theme not exist:", "1033670MkMPso", "233640OZGFOj", "rgba(0,0,236,0.1)", "') repeat", "1px solid rgba(255,255,255,0.5)", "3161919zrWLdZ", "middle", "78onLKab"];
  return Ze = function() {
    return n;
  }, Ze();
}
const px = { copyFrom: function(n) {
  const x = bx;
  let t = px[n];
  if (t == null)
    throw new Error(x(347) + n);
  let e = Object.keys(t), s = {};
  return e.forEach((i) => {
    const r = x;
    s[i] = Object[r(342)]({}, t[i]);
  }), s;
}, DefaultLight: { SelectArea: { border: "1px solid rgba(0,0,0,0.5)", backgroundColor: L(350) }, Layer: { background: L(344) + ei(xi(100, 100, 5, 5, "rgb(255,255,255)", "rgb(220,220,220)")) + L(351) }, Node: { textPosition: "cb", textAlign: "center", textBaseline: "top", strokeStyle: "black" }, TextNode: { textPosition: L(358), textAlign: L(358), textBaseline: L(354), strokeStyle: L(345) }, TipNode: { textPosition: "ct", textAlign: L(358), textBaseline: L(359) }, ShapeNode: { lineWidth: 1, textPosition: "cb", textAlign: L(358), textBaseline: L(359), strokeStyle: L(345) }, CircleNode: { textPosition: "cb", textAlign: "center", textBaseline: L(359), strokeStyle: L(345) }, VideoNode: { textPosition: "cb", textAlign: "center", textBaseline: "top" }, RatioNode: { textPosition: L(358), textAlign: L(358), textBaseline: L(354) }, Link: { lineWidth: 1, strokeStyle: L(345) }, AutoFoldLink: { strokeStyle: L(345) }, FoldLink: { strokeStyle: L(345) }, FlexionalLink: { strokeStyle: L(345) }, CurveLink: { strokeStyle: "black" }, BezierLink: { strokeStyle: L(345) }, ArcLink: { strokeStyle: "black" } }, DefaultDark: { SelectArea: { border: L(352), backgroundColor: L(340) }, Layer: { background: "url('" + ei(xi(100, 100, 5, 5)) + L(351) }, Node: { textPosition: "cb", textAlign: "center", textBaseline: "top", strokeStyle: L(343), color: L(343) }, TextNode: { textPosition: L(358), textAlign: L(358), textBaseline: "middle", strokeStyle: L(343), color: L(343) }, TipNode: { textPosition: "ct", textAlign: "center", textBaseline: L(359), color: L(343) }, ShapeNode: { lineWidth: 1, textPosition: "cb", textAlign: L(358), textBaseline: L(359), strokeStyle: L(343), color: L(343) }, CircleNode: { textPosition: "cb", textAlign: L(358), textBaseline: "top", strokeStyle: L(343), color: L(343) }, VideoNode: { textPosition: "cb", textAlign: L(358), textBaseline: L(359), strokeStyle: L(343), color: L(343) }, RatioNode: { textPosition: L(358), textAlign: L(358), textBaseline: L(354), color: L(343) }, Link: { strokeStyle: L(343) }, AutoFoldLink: { strokeStyle: L(343) }, FoldLink: { strokeStyle: L(343) }, FlexionalLink: { strokeStyle: L(343) }, CurveLink: { strokeStyle: L(343) }, BezierLink: { strokeStyle: L(343) }, ArcLink: { strokeStyle: L(343) } } }, Dx = yx;
(function(n, x) {
  const t = yx, e = n();
  for (; []; )
    try {
      if (-parseInt(t(337)) / 1 * (-parseInt(t(349)) / 2) + -parseInt(t(327)) / 3 + parseInt(t(351)) / 4 * (parseInt(t(345)) / 5) + parseInt(t(342)) / 6 + parseInt(t(326)) / 7 + parseInt(t(324)) / 8 + -parseInt(t(336)) / 9 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Je, 344622);
function yx(n, x) {
  const t = Je();
  return yx = function(e, s) {
    return e = e - 323, t[e];
  }, yx(n, x);
}
var Ar = N0.gc;
function Je() {
  const n = ["fillText", "4lqkylw", "_frames", "render", "13px arial", "back", "getHeight", "4186736OHjerv", "white", "3329340hkmdOf", "56190JddRIE", "areaBox", "mouseY", "css", "draw", "style", "visible", "mouseDownX", "axis", "14905944bfCArQ", "1iDSuPy", "bold 16px arial", "HandlerLayer", "red", "DefaultDark", "1677042bOORGS", "restore", "mouseoutHandler", "1513505RQMhyv", "stage", "save", "mouseX", "876796KdfkFS"];
  return Je = function() {
    return n;
  }, Je();
}
let ni = X0.w;
class ls extends ht {
  constructor(x) {
    const t = yx;
    super(), this.className = t(339), this[t(352)] = 0, this.zIndex = Mx.HandlerLayerCanvas, this[t(348)] = 0, this[t(329)] = 0, this[t(334)] = 0, this.mouseDownY = 0, A0[t(355)](), this[t(346)] = x, this[t(332)] = new m0({ fillStyle: t(340), font: t(354) }), this[t(328)] = new O(), A0[t(355)](), this[t(328)][t(330)](px[t(341)].SelectArea), this.addChild(this[t(328)]), this[t(335)][t(333)] = ![], this[t(333)] = !![];
  }
  [Dx(344)](x) {
    this[Dx(328)].hide();
  }
  [Dx(331)](x) {
    const t = Dx;
    if (ni == null)
      return;
    x[t(347)](), x.globalAlpha = 0.6, x.font = t(338);
    let e = Ar(ni);
    x.fillStyle = t(325), x[t(350)](e, 16, this[t(353)][t(323)]() - 16), x[t(343)]();
  }
}
function $e() {
  const n = ["isMobileDevice", "clientY", "isFirefox", "clientX", "offsetParent", "webkitRequestFullscreen", "attachEvent", "mozRequestFullScreen", "forEach", "fullWindow", "offsetTop", "msRequestFullscreen", "pageX", "requestFullscreen", "8ppZuPF", "zIndex", "top", "mousewheel", "body", "createVideo", "fullScreen", "8822511xWBpJs", "position,width,height,left,top,bottom,right,zIndex", "createElement", "scrollLeft", "getBoundingClientRect", "DOMMouseScroll", "3122917cZxmOY", "touches", "clientLeft", "appendChild", "test", "3972ANzawt", "oncanplay", "FullWindowDom", "muted", "type", "getOffsetPosition", "scrollTop", "pageY", "pageYOffset", "ownerDocument", "440143DRpJuZ", "video", "4HvRNIR", "offsetLeft", "_backup", "style", "documentElement", "clientTop", "fixed", "src", "1173MIiniD", "video/mp4", "source", "position", "none", "userAgent", "9071810MhjfHd", "3180750TdCCKs", "left", "string", "addEventListener", "display", "5yCubcl", "2729934TBEwdL"];
  return $e = function() {
    return n;
  }, $e();
}
const E0 = gx;
function gx(n, x) {
  const t = $e();
  return gx = function(e, s) {
    return e = e - 324, t[e];
  }, gx(n, x);
}
(function(n, x) {
  const t = gx, e = n();
  for (; []; )
    try {
      if (parseInt(t(327)) / 1 * (parseInt(t(329)) / 2) + -parseInt(t(337)) / 3 * (parseInt(t(383)) / 4) + parseInt(t(349)) / 5 * (-parseInt(t(350)) / 6) + parseInt(t(378)) / 7 + -parseInt(t(365)) / 8 * (parseInt(t(372)) / 9) + parseInt(t(344)) / 10 + parseInt(t(343)) / 11 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})($e, 645671);
function Xi(n, x) {
  const t = gx;
  let e = x[t(379)][0][t(363)], s = x[t(379)][0][t(324)];
  x[t(379)][0][t(363)] == null && (e = x[t(379)][0][t(354)] + document.body[t(375)] - document[t(369)].clientLeft, s = x[t(379)][0][t(352)] + document[t(369)].scrollTop - document.body[t(334)]);
  let i = G0[t(388)](n), r = e - i[t(345)], a = s - i.top;
  return { x: r, y: a };
}
class G0 {
  static [E0(347)](x, t, e) {
    const s = E0;
    let i = x[s(357)] || x[s(347)];
    N0[s(353)]() && t == s(368) ? t = s(377) : window.attachEvent && t.substring(0, 2) !== "on" && (t = "on" + t), i.call(x, t, e);
  }
  static [E0(388)](x) {
    const t = E0;
    if (x == null)
      return { left: 0, top: 0 };
    let e = 0, s = 0;
    if (x[t(376)] != null) {
      let i = x[t(376)](), r = x[t(326)], a = r.body, o = r[t(333)], c = o[t(334)] || a[t(334)] || 0, h = o.clientLeft || a[t(380)] || 0;
      e = i[t(367)] + (window[t(325)] || o && o.scrollTop || a[t(389)]) - c, s = i[t(345)] + (window.pageXOffset || o && o[t(375)] || a[t(375)]) - h;
    } else
      do
        e += x[t(361)] || 0, s += x[t(330)] || 0, x = x[t(355)];
      while (x);
    return { left: s, top: e };
  }
  static [E0(370)](x, t) {
    const e = E0;
    if (typeof x == e(346)) {
      let s = document.createElement(e(328));
      s.muted = e(386), s[e(332)][e(348)] = e(341);
      let i = document[e(374)](e(339));
      return i[e(387)] = e(338), i[e(336)] = x, s.appendChild(i), document[e(369)][e(381)](s), s[e(384)] = function() {
        t(s);
      }, s;
    } else
      return x;
  }
  static [E0(360)](x) {
    const t = E0;
    let e = t(373).split(",");
    if (x[t(371)] == !![]) {
      let s = x[t(331)];
      e[t(359)]((i) => {
        x.style[i] = s[i];
      }), x[t(371)] = ![];
    } else {
      let s = {};
      e[t(359)]((i) => {
        const r = t;
        s[i] = x[r(332)][i];
      }), x._backup = s, x[t(332)][t(340)] = t(335), x[t(332)][t(345)] = 0, x.style[t(367)] = 0, x[t(332)].bottom = 0, x[t(332)].right = 0, x[t(332)][t(366)] = Mx[t(385)], x[t(371)] = !![];
    }
  }
  static [E0(371)](x) {
    const t = E0;
    x[t(364)] ? x[t(364)]() : x[t(358)] ? x[t(358)]() : x[t(356)] ? x.webkitRequestFullscreen() : x[t(362)] && x[t(362)]();
  }
}
G0[E0(351)] = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i[E0(382)](navigator[E0(342)]);
const j = Nt;
(function(n, x) {
  const t = Nt, e = n();
  for (; []; )
    try {
      if (parseInt(t(412)) / 1 + -parseInt(t(419)) / 2 + parseInt(t(394)) / 3 * (parseInt(t(418)) / 4) + -parseInt(t(378)) / 5 * (-parseInt(t(424)) / 6) + parseInt(t(354)) / 7 * (parseInt(t(428)) / 8) + -parseInt(t(447)) / 9 * (-parseInt(t(376)) / 10) + -parseInt(t(396)) / 11 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(tn, 224396);
function y0(n) {
  return Xs[Nt(430)](n).outerHTML;
}
let qi = j(356);
qi = "";
var Mr = j(404) + y0(j(436)) + j(423) + qi + ">" + y0("edit") + j(387) + y0(j(417)) + j(369) + y0(j(444)) + j(405) + y0("lock-alt") + j(372) + y0("zoom-in") + `</button>
<button title="缩小"  class="item" iconId='zoom-out'>` + y0(j(410)) + `</button>
<button title="居中" class="item" iconId='align-center'>` + y0("align-center") + `</button>
<button title="缩放至画布" class="item" iconId='minimise'>` + y0(j(454)) + j(381) + y0(j(449)) + `</button>
</div>

<div class="group">
<button title="缩略图" class="item" iconId='eye'>` + y0(j(421)) + `</button>
<button title="浏览器全屏" class="item" iconId='maximise'>` + y0("maximise") + j(380) + Xs[j(430)](j(358))[j(434)] + `</button>
</div>

<div class="group">
<button title="导出PNG" class="item" iconId='image'>` + y0(j(392)) + j(416) + y0(j(382)) + j(439) + y0("save") + `</button>
<div style="display:none;"><input type="file"/></div>
</div>
`;
function tn() {
  const n = ["view", "querySelectorAll", "jtopo_toolbar", "iconId", "getCurrentLayer", "onload", "visible", "hideOverview", `</button>
<button title="拖拽模式"  class="item" group='mode' iconId='pan'>`, "files", "text", `</button>
</div>

<div class="group">
<button title="放大"  class="item" iconId='zoom-in'>`, "加载出现错误", "readAsText", "stage", "140bZrLYn", "name", "1590205oUeeGm", "zoomIn", `</button>
<input title="查找" type="text" placeholder="查找" value=""></input>
<button class="item" iconId='search'>`, `</button>
<button title="取消缩放" class="item" iconId='back-left'>`, "upload", "classList", "clientHeight", "hide", "onkeydown", `</button>
<button title="框选模式" class="item" group='mode' iconId='rectangle'>`, "play", "initActiveStatus", "update", 'input[type="text"]', "image", "button[iconid='edit']", "411fmEnRm", "normal", "6902159xLYhod", "parentNode", "div", "none", "createElement", "domObj", "centerBy", 'input[type="file"]', `
<div class="group">
<button title="默认" class="item active" group='mode' iconId='cursor'>`, `</button>
<button title="锁定模式" class="item" group='mode' iconId='lock-alt'>`, "saveImageInfo", "getAttribute", "click", "block", "zoom-out", "Enter", "185395DTSNKk", "buttons", "length", "initToolbar", `</button>
<button title="打开本地文件" class="item" iconId='upload'>`, "rectangle", "5188vVipZz", "656402cwmUVa", "change", "eye", "fullWindow", `</button>
<button title="编辑模式" edit="true" class="item" group='mode' iconId='edit' `, "6uFAWzM", "editor", "scaleTo", "style", "488SySzhF", "indexOf", "get", "openJson", "flash", "getHeigth", "outerHTML", "fileInput", "cursor", "value", "drag", `</button>
<button title="保存到本地" class="item" iconId='save'>`, "translateToCenter", "overview", "target", "log", "pan", "input", "add", "238437obbNjR", "edit", "back-left", "zoomFullStage", "translate", "display", "getDom", "minimise", "setMode", "reloadJsonTest", "activeBtn", "remove", "removeAllActive", "group", "14693bJLQbe", "showOverview", ' style="display:none" ', '<input type="file"/>', "search", "effectSystem", "querySelector"];
  return tn = function() {
    return n;
  }, tn();
}
function Nt(n, x) {
  const t = tn();
  return Nt = function(e, s) {
    return e = e - 353, t[e];
  }, Nt(n, x);
}
class Gi {
  constructor(x) {
    const t = j;
    this.stage = x, this[t(415)](x, Mr);
    let e = this;
    setTimeout(function() {
      e[t(389)]();
    }, 200);
  }
  [j(453)]() {
    return this.domObj;
  }
  show() {
    const x = j;
    this[x(401)][x(427)].display = x(409);
  }
  [j(385)]() {
    const x = j;
    this[x(401)][x(427)][x(452)] = x(399);
  }
  [j(458)]() {
    const x = j;
    this.domObj[x(458)]();
  }
  [j(433)]() {
    const x = j;
    return this[x(401)][x(427)][x(452)] == "none" ? 0 : this.domObj[x(384)] + 1;
  }
  [j(389)]() {
    const x = j;
    if (this[x(375)].mode == x(448)) {
      let e = document[x(360)](x(393));
      this[x(457)](e);
    }
  }
  initToolbar(x, t) {
    const e = j;
    let s = this, i = document[e(400)](e(398));
    this[e(401)] = i, i[e(383)][e(446)](e(363)), i.innerHTML = t;
    let r = i[e(362)]("button");
    this[e(413)] = r;
    let a = i.querySelector(e(403)), o = a[e(397)];
    function c(b) {
      const P = e;
      o.innerHTML = P(357), h();
      let v = b[P(442)][P(370)][0];
      const D = new FileReader();
      D[P(374)](v), D[P(366)] = function() {
        const S = P, C = s[S(375)][S(365)](), Z = this.result;
        try {
          C[S(431)](Z), C[S(451)](0, 0), C[S(426)](1, 1), document.title = v[S(377)];
        } catch (P0) {
          console[S(443)](P0), alert(S(373));
        }
      };
    }
    function h() {
      const b = e;
      a = i[b(360)](b(403)), a.addEventListener(b(420), c);
    }
    h(), this[e(435)] = a;
    function l() {
      const b = e;
      let P = x[b(365)](), v = i[b(360)](b(391))[b(437)];
      if (v[b(414)] > 0) {
        let D = P.displayList;
        for (let S = 0; S < D[b(414)]; S++) {
          const C = D[S];
          if (C[b(371)] != null && C.text[b(429)](v) != -1) {
            P[b(402)](C, 10), x[b(359)][b(432)](C)[b(388)](), x[b(425)] != null ? x[b(425)][b(390)]() : x.update();
            return;
          }
        }
      }
    }
    let f = { cursor: function() {
      const b = e;
      x[b(455)](b(395));
    }, rectangle: function() {
      x.setMode("select");
    }, pan: function() {
      const b = e;
      x[b(455)](b(438));
    }, edit: function() {
      x.setMode("edit");
    }, "lock-alt": function() {
      const b = e;
      x[b(455)](b(361));
    }, eye: function() {
      const b = e;
      x.overview == null || x[b(441)][b(367)] == ![] ? x[b(355)]() : x[b(368)]();
    }, "zoom-in": function() {
      x[e(379)]();
    }, "zoom-out": function() {
      x.zoomOut();
    }, "back-left": function() {
      x.cancelZoom();
    }, minimise: function() {
      x[e(450)]();
    }, "align-center": function() {
      x[e(440)]();
    }, maximise: function() {
      x[e(422)]();
    }, image: function() {
      x[e(406)]();
    }, save: function() {
      let b = prompt("输入要保存的文件名：");
      b != null && x.download(b + ".json");
    }, upload: function() {
      a[e(408)]();
    }, search: l };
    i.querySelector(e(445))[e(386)] = function(b) {
      const P = e;
      b.key == P(411) && l();
    }, i[e(360)](e(445)).ondblclick = function() {
      const b = e;
      console.log(b(456)), x[b(365)]()[b(456)]();
    };
    function y(b) {
      b.onclick = function() {
        const P = Nt;
        let v = b.getAttribute(P(364));
        f[v](), s[P(457)](b);
      };
    }
    for (var _ = 0; _ < r[e(414)]; _++) {
      let b = r[_];
      y(b);
    }
  }
  [j(457)](x) {
    const t = j;
    let e = x[t(407)]("group");
    e != null && (this[t(459)](e), x[t(383)][t(446)]("active"));
  }
  [j(459)](x) {
    const t = j;
    let e = this[t(413)];
    for (var s = 0; s < e[t(414)]; s++) {
      let i = e[s];
      x == i[t(407)](t(353)) && i[t(383)].remove("active");
    }
  }
}
const st = dt;
(function(n, x) {
  const t = dt, e = n();
  for (; []; )
    try {
      if (-parseInt(t(476)) / 1 * (parseInt(t(508)) / 2) + -parseInt(t(442)) / 3 * (parseInt(t(492)) / 4) + -parseInt(t(448)) / 5 * (parseInt(t(453)) / 6) + parseInt(t(496)) / 7 * (parseInt(t(465)) / 8) + -parseInt(t(462)) / 9 * (-parseInt(t(499)) / 10) + parseInt(t(498)) / 11 * (-parseInt(t(451)) / 12) + parseInt(t(507)) / 13 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(xn, 477736);
function dt(n, x) {
  const t = xn();
  return dt = function(e, s) {
    return e = e - 433, t[e];
  }, dt(n, x);
}
function xn() {
  const n = ["mouseup", "mousemove", "editor", "type", "isDragEnd", "isDragStart", "addEventListener", "offsetY", "isIdle", "2031qWUpFc", "mode", "length", "forceUpdate", "inputSystem", "dispatchEvent", "15Fnduwm", "touchesDistance", "dragover", "1569108RAkDth", "overview", "1324476ZqCUta", "isMouseOn", "assign", "isMobileDevice", "touches", "Handler", "preventDefault", "button", "event", "187623vkvtcA", "clearTimeout", "dirty", "8NcSiuP", "handlerLayer", "mousedown", "idleTimeout", "mouseout", "mouseDownX", "canvas", "offsetX", "map", "touchmove", "mouseenter", "16DxJywG", "drop", "mouseDownY", "mousedragHandler", "mockMouseEvent", "dblclick", "render", "getElementById", "idleTimer", "isDraging", "left", "top", "getBoundingClientRect", "isRightButton", "mousewheel", "_initEvent", "3524ofSfsw", "click", "touchstart", "previous", "1957851vaVgJL", "buttons", "22EgMtWf", "30IKBStW", "isMouseDown", "touchend", "targetCanvas", "edit", "update", "dragend", "touchendHandler", "33334899zOVMnl", "113566KPVlDt", "view"];
  return xn = function() {
    return n;
  }, xn();
}
class qs extends Y0 {
  constructor() {
    const x = dt;
    super(), this.wheelZoom = !![], this[x(470)] = 0, this[x(478)] = 0, this.x = -1, this.y = -1, this[x(500)] = ![], this[x(437)] = ![], this.isDraging = ![], this[x(454)] = ![], this[x(438)] = ![], this[x(449)] = 0, this[x(468)] = 50, this[x(497)] = 0, this[x(460)] = 0;
  }
  preventDefault() {
    const x = dt;
    this[x(461)] && this[x(461)][x(459)]();
  }
  [st(489)]() {
    return this.button == 2;
  }
  [st(504)](x, t) {
    const e = st, s = Object[e(455)]({}, this);
    this[e(495)] = s, this[e(461)] = x, this[e(497)] = x[e(497)], this[e(460)] = x.button, this[e(437)] = ![], this[e(454)] = t != e(469), this[e(441)] = ![];
    let i = this;
    this[e(484)] != null && window[e(463)](this[e(484)]), this[e(484)] = setTimeout(function() {
      const r = e;
      i[r(441)] = !![];
    }, this[e(468)]), this[e(436)] = t, this.x = x[e(472)], this.y = x.offsetY, t == "mousedown" || t == e(494) ? (this[e(500)] = !![], this[e(470)] = this.x, this[e(478)] = this.y) : (t == e(433) || t == e(493) || t == e(469) || t == e(501)) && (this[e(500)] = ![], s && s[e(436)] == e(434) && (this[e(437)] = !![])), this.isDraging = this[e(500)] == !![] && (t == e(434) || t == e(474)), this[e(438)] = this.isDraging && s[e(485)] != !![], this.dx = this.x - s.x, this.dy = this.y - s.y;
  }
  [st(491)](x) {
    const t = st;
    if (G0[t(456)]) {
      Tr(x);
      return;
    }
    let e = x[t(446)], s = x[t(466)], i = s[t(482)][t(471)];
    [t(475), t(469), "mouseover", t(467), t(433), t(434), t(490), t(493), t(481), "dragstart", t(505), t(450), t(477)].map(function(a) {
      G0.addEventListener(i, a, function(o) {
        const c = dt;
        if (o[c(472)] < 0 || o.offsetY < 0 || (e[c(504)](o, a), x.update(), x[c(443)] == O0[c(509)]))
          return;
        if (x[c(443)] == O0.edit && (a == "dragstart" || a == "dragend" || a == c(450) || a == c(477))) {
          e[c(447)](o);
          return;
        }
        let h = a + c(458);
        (e.isDraging || a == c(474) && (o[c(457)][c(444)] == 1 || o[c(457)][c(444)] >= 2)) && (h = c(479)), a == c(467) && x.forceUpdate(), !(x.mode == O0[c(503)] && x[c(435)] != null && x.editor[h] && (x.editor[h](o), e.event.defaultPrevented)) && (x[h] && (x[h](o), x[c(452)] && (x[c(452)][c(464)] = !![]), e[c(461)].defaultPrevented) || (a == "mousewheel" && o[c(459)](), e.dispatchEvent(o)));
      });
    });
  }
  [st(480)](x, t, e, s) {
    const i = st, r = x[i(488)]();
    e = r[i(486)] + e, s = r[i(487)] + s;
    const a = new MouseEvent(t, { clientX: e, clientY: s });
    console.log(a), x[i(447)](a);
  }
}
function Tr(n) {
  const x = st;
  let t = n[x(446)], e = n.handlerLayer, s = e.render.canvas;
  ["touchstart", "touchmove", x(501)][x(473)](function(r) {
    const a = x;
    G0[a(439)](s, r, function(o) {
      const c = a;
      if (o[c(459)](), n.mode == O0[c(509)])
        return;
      if (t[c(504)](o, r), o[c(457)].length == 0 && r == "touchend") {
        n[c(506)] && n[c(506)](t);
        return;
      }
      if (o.touches.length == 0)
        return;
      let h = Xi(s, o);
      if (t.offsetX = h.x, t[c(440)] = h.y, t.x = h.x, t.y = h.y, t.x = h.x, t.y = h.y, o[c(457)][c(444)] > 1) {
        r == c(474) && n[c(479)] && n[c(479)](t);
        return;
      }
      r == "touchstart" && n[c(445)]();
      let l = r + c(458);
      n[l] && n[l](t), t[c(447)](o);
    });
  });
}
const I0 = Rt;
(function(n, x) {
  const t = Rt, e = n();
  for (; []; )
    try {
      if (parseInt(t(327)) / 1 * (parseInt(t(352)) / 2) + parseInt(t(319)) / 3 * (parseInt(t(302)) / 4) + -parseInt(t(325)) / 5 * (-parseInt(t(309)) / 6) + parseInt(t(313)) / 7 * (-parseInt(t(340)) / 8) + -parseInt(t(336)) / 9 * (-parseInt(t(353)) / 10) + parseInt(t(306)) / 11 + -parseInt(t(308)) / 12 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(en, 860103);
function en() {
  const n = ["altKey", "27071652BxPLFp", "1698CiXaji", "regMap", "keys", "keydown", "357420MWSQDQ", "toLowerCase", "isMouseOn", "indexOf", "textInputMode", "init", "11859jxyKhS", "tagName", "sort", "keyupHandler", "keydownHandler", "inputSystem", "12315KLzAaY", "split", "1343822hbbDXt", "Meta", "forEach", "ctrlKey", "keyup", "Control", "preKeydownEvent", "keyMap", "debug", "3477879HXFNSS", "unBind", "mock", "editor", "200cnLAnt", "push", "fireKey", "INPUT", "key", "shift", "log", "shiftKey", "preventDefault", "join", "stage", "dispatchEvent", "2MhSGIa", "30BbZiHA", "isMouseOnInputDomElement", "1132DrbUxe", "meta", "isKeydown", "Shift", "811041ZaOrWB"];
  return en = function() {
    return n;
  }, en();
}
function Rt(n, x) {
  const t = en();
  return Rt = function(e, s) {
    return e = e - 301, t[e];
  }, Rt(n, x);
}
class Yi extends Y0 {
  constructor(x) {
    const t = Rt;
    super(), this[t(335)] = ![], this.regMap = {}, this[t(334)] = {}, this[t(350)] = x, this.init(), this[t(335)] = ![];
  }
  bindKey(x, t) {
    const e = Rt;
    let s = x[e(314)]().split("+")[e(321)]()[e(349)]("+");
    this[e(310)][s] = t;
  }
  [I0(337)](x) {
    const t = I0;
    let e = x.toLowerCase()[t(326)]("+")[t(321)]().join("+");
    this[t(310)][e] = void 0;
  }
  [I0(304)](x) {
    return this.keyMap[x];
  }
  sendKey(x, t) {
    const e = I0;
    t == null && (t = new KeyboardEvent(e(312)), t[e(338)] = !![]), this[e(342)](x.toLowerCase()[e(326)]("+"), t, !![]);
  }
  [I0(301)]() {
    const x = I0;
    let t = document.activeElement[x(320)];
    return t == x(343) || t == "TEXTAREA";
  }
  [I0(342)](x, t, e) {
    const s = I0;
    if (e == ![] || this[s(301)]())
      return;
    const i = this;
    let r = this[s(350)], a = r.editor, o = x[s(321)]()[s(349)]("+").toLowerCase();
    this[s(335)] && console[s(346)]("按下", o), Object[s(311)](this[s(310)])[s(329)]((h) => {
      const l = s;
      if (h != o || a != null && a.textInputMode == !![])
        return;
      t[l(348)]();
      let f = i[l(310)][h];
      f(t);
    });
  }
  [I0(323)](x) {
    const t = I0;
    let e = x[t(344)][t(314)](), s = this[t(350)], i = [];
    x[t(330)] && (this[t(334)][t(332)] = !![], i[t(341)]("control")), x[t(307)] && (this[t(334)].Alt = !![], i[t(341)]("alt")), x[t(347)] && (this[t(334)][t(305)] = !![], i[t(341)](t(345))), x.metaKey && (this[t(334)][t(328)] = !![], i[t(341)](t(303))), i[t(316)](e) == -1 && i[t(341)](e), this[t(334)][e] = !![];
    let r = vi(x);
    this[t(333)] = r, this[t(342)](i, r, s[t(324)][t(315)]), this[t(351)](r);
  }
  [I0(322)](x) {
    const t = I0, e = this;
    e[t(334)][x[t(344)]] = ![];
    let s = e.stage[t(339)];
    s != null && s[t(317)] == !![] || e[t(351)](new Event("keyup"));
  }
  [I0(318)]() {
    const x = I0;
    let t = this;
    document.addEventListener(x(312), function(e) {
      t.keydownHandler(e);
    }), document.addEventListener(x(331), function(e) {
      t.keyupHandler(e);
    });
  }
}
function nn() {
  const n = ["getNoChildrensObjects", "draggable", "mouseoutHandler", "selectedHandler", "688XJpNxI", "877083nTAZfk", "hasChild", "noChildrensObjects", "808246VsbYCd", "groupdrag", "41265QRtbzF", "removeAll", "988284KbsggM", "length", "group", "dispatchEvent", "addAll", "push", "objects", "mousedragEndHandler", "4935408ozsLZC", "unselectedHandler", "342005hkvGhW", "remove", "6fCGHmS", "event", "defaultPrevented", "isDraging", "mousedragHandler", "3671150fXpZqp"];
  return nn = function() {
    return n;
  }, nn();
}
const c0 = sn;
(function(n, x) {
  const t = sn, e = n();
  for (; []; )
    try {
      if (-parseInt(t(404)) / 1 + parseInt(t(407)) / 2 * (parseInt(t(393)) / 3) + -parseInt(t(411)) / 4 + parseInt(t(391)) / 5 + parseInt(t(389)) / 6 + -parseInt(t(398)) / 7 + parseInt(t(403)) / 8 * (parseInt(t(409)) / 9) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(nn, 444921);
let si = new InputEvent(L0.groupdragend), Fr = new InputEvent(L0[c0(408)]);
class Vi extends Y0 {
  constructor() {
    const x = c0;
    super(), this[x(387)] = [], this[x(396)] = ![], this[x(406)];
  }
  isEmpty() {
    const x = c0;
    return this.objects[x(412)] == 0;
  }
  [c0(401)](x) {
    const t = c0;
    this[t(396)] = ![], !this.isEmpty() && this[t(414)](si);
  }
  mousedragHandler(x) {
    const t = c0;
    if (this[t(414)](Fr), x[t(394)][t(395)] == !![])
      return;
    let e = this[t(399)]();
    for (var s = 0; s < e.length; s++) {
      let i = e[s];
      i[t(400)] && i.mousedragHandler && i[t(397)](x);
    }
  }
  mousedragEndHandler(x) {
    const t = c0;
    this.dispatchEvent(si);
    let e = this[t(399)]();
    for (var s = 0; s < e[t(412)]; s++) {
      let i = e[s];
      i[t(400)] && i.mousedragEndHandler && i[t(388)](x);
    }
  }
  [c0(399)]() {
    const x = c0;
    return F.getNoChildrensObjects(this[x(387)]);
  }
  [c0(415)](x) {
    const t = c0;
    for (var e = 0; e < x[t(412)]; e++) {
      let s = x[e];
      s[t(413)] = this, !W[t(405)](this[t(387)], s) && (s[t(402)] && s[t(402)](), this[t(387)][t(386)](s));
    }
    return this;
  }
  add(x) {
    const t = c0;
    return x[t(413)] = this, W[t(405)](this[t(387)], x) ? this : (x[t(402)].call(x), this[t(387)][t(386)](x), this);
  }
  [c0(392)](x) {
    const t = c0;
    return x[t(413)] = void 0, x.unselectedHandler && x[t(390)](x), W[t(392)](this[t(387)], x), this;
  }
  [c0(410)]() {
    const x = c0;
    let t = this[x(387)];
    for (var e = 0; e < t[x(412)]; e++) {
      let s = t[e];
      s[x(413)] = void 0, s[x(390)] && s[x(390)]();
    }
    return this.objects.length = 0, this;
  }
  has(x) {
    const t = c0;
    return W[t(405)](this[t(387)], x);
  }
}
function sn(n, x) {
  const t = nn();
  return sn = function(e, s) {
    return e = e - 386, t[e];
  }, sn(n, x);
}
const j0 = Ht;
(function(n, x) {
  const t = Ht, e = n();
  for (; []; )
    try {
      if (parseInt(t(469)) / 1 * (-parseInt(t(484)) / 2) + parseInt(t(507)) / 3 * (-parseInt(t(487)) / 4) + -parseInt(t(481)) / 5 + -parseInt(t(468)) / 6 * (-parseInt(t(518)) / 7) + -parseInt(t(462)) / 8 + -parseInt(t(505)) / 9 + -parseInt(t(500)) / 10 * (-parseInt(t(483)) / 11) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(rn, 218293);
class Br {
  constructor(x) {
    const t = Ht;
    this[t(479)] = 0, this[t(480)] = x;
  }
  [j0(510)]() {
    const x = j0, t = document[x(478)]("div");
    t[x(516)].add(x(514)), this[x(480)][x(519)][x(502)](t), this[x(497)] = t, this.hide();
  }
  [j0(521)](x = 24) {
    const t = this, e = this.stage;
    function s() {
      const i = Ht;
      if (e[i(467)][i(485)])
        return;
      let r = e[i(506)](), a = 0, o = 0, c = 0;
      for (var h = 0; h < r.length; h++) {
        let v = r[h];
        a += v[i(504)].length, o += v[i(511)]().length, c += v[i(493)]()[i(465)];
      }
      let l = Math[i(474)](e.inputSystem.x), f = Math[i(474)](e[i(467)].y), y = e[i(466)](), _ = { x: 0, y: 0 };
      y != null && (_ = y[i(495)](l, f));
      const b = e[i(467)][i(494)];
      let P = "<li>Mouse-Canvas( x: " + l + i(498) + f + i(508);
      if (P += i(464) + _.x[i(492)](2) + i(498) + _.y[i(492)](2) + i(508), P += i(471) + o + "</li>", P += i(496) + c + i(490), P += i(515) + (o + c) + i(490), P += "<li>Painted: " + a + i(490), b) {
        P += i(470) + b.id;
        const v = b._obb.aabb, D = b[i(463)](0, 0), S = b.toLayerXY(0, 0), C = this[i(479)];
        P += "<li>_aabb:[x:" + v.x[i(492)](C) + ",y: " + v.y[i(492)](C) + i(477) + v.width[i(492)](C) + ", h:" + v[i(520)][i(492)](C) + "] </li>", P += i(475) + b.origin[0].toFixed(C) + ", " + b[i(491)][1][i(492)](C) + i(482), P += i(488) + D.x[i(492)](C) + ", y: " + D.y[i(492)](C) + ") </li>", b instanceof O && (P += i(489) + b.x.toFixed(C) + ", y: " + b.y[i(492)](C) + ") </li>"), P += "<li>&nbsp;&nbsp;-Layer:  (x: " + S.x[i(492)](C) + i(476) + S.y[i(492)](C) + ") </li>";
      }
      yt[i(509)] && (P += i(512) + yt[i(509)] + i(490)), t[i(486)](P);
    }
    this._timer = setInterval(s, x);
  }
  [j0(486)](x) {
    const t = j0;
    this[t(497)][t(517)] = x;
  }
  checkDom() {
    const x = j0;
    this[x(497)] == null && this[x(510)]();
  }
  [j0(501)]() {
    const x = j0;
    return this[x(499)](), clearInterval(this._timer), this[x(497)].style[x(513)] = x(503), this;
  }
  [j0(473)](x) {
    const t = j0;
    return this[t(499)](), this[t(497)][t(472)][t(513)] = "block", this.start(x), this;
  }
}
function Ht(n, x) {
  const t = rn();
  return Ht = function(e, s) {
    return e = e - 462, t[e];
  }, Ht(n, x);
}
function rn() {
  const n = ["<li>Total: ", "classList", "innerHTML", "826moxHXg", "layersContainer", "height", "start", "2094496Pvdxup", "toStageXY", "<li>Mouse-Layer( x: ", "length", "getCurrentLayer", "inputSystem", "15216UcrUij", "113052VZcZsJ", "<li>Target: id: ", "<li>Nodes: ", "style", "show", "ceil", "<li>Origin: [", ", y: ", ",w: ", "createElement", "numberFixed", "stage", "1933270rvsyyY", "]</li>", "1122OQBbiw", "6wtPysY", "isIdle", "setContent", "8xFWCtf", "<li>&nbsp;&nbsp;-Canvas: (x: ", "<li>&nbsp;&nbsp;-Parent: (x: ", "</li>", "origin", "toFixed", "getAllLinks", "pickedObject", "stageToLocalXY", "<li>Links: ", "domElement", " y: ", "checkDom", "131540FHCxdW", "hide", "appendChild", "none", "displayList", "2063583kWVArZ", "getChildren", "308631SthwGl", ")</li>", "debugInfo", "init", "getAllNodes", "<li>", "display", "jtopo_debugPanel"];
  return rn = function() {
    return n;
  }, rn();
}
const x0 = Wt;
(function(n, x) {
  const t = Wt, e = n();
  for (; []; )
    try {
      if (parseInt(t(204)) / 1 * (-parseInt(t(207)) / 2) + parseInt(t(210)) / 3 * (parseInt(t(181)) / 4) + -parseInt(t(163)) / 5 * (-parseInt(t(195)) / 6) + parseInt(t(206)) / 7 * (-parseInt(t(225)) / 8) + parseInt(t(211)) / 9 + -parseInt(t(214)) / 10 * (-parseInt(t(197)) / 11) + -parseInt(t(203)) / 12 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(an, 575049);
function an() {
  const n = ["border", "getChildren", "mouseup", "getAABB", "translateWith", "clearAll", "0.7", "max", "lineWidth", "getLayersAABBRect", "show", "offsetX", "bottom", "contains", "layersAABBRect", "stroke", "4GfyEFD", "isDraging", "rgba(0,250,50,0.2)", "restore", "moveWith", "getRect", "rgba(255,255,255,0.5)", "rect", "initEvent", "preventDefault", "strokeStyle", "left", "rectObj", "height", "5242434zzKNlC", "visible", "308QMvYtT", "right", "overviewPaint", "pickedObject", "backgroundColor", "red", "1072440bWzXFz", "4OIMbFX", "union", "35nXIVbX", "483696mqeXNC", "beginPath", "save", "303081ipKTHk", "2250234iAOQRy", "setSize", "getHeight", "406430awnTVr", "stage", "translateTo", "getWidth", "_overviewTimer", "addEventListener", "render", "setTo", "translate", "position", "mousemoveHandler", "1169576MqZjDj", "appendChild", "style", "layersContainer", "mousedragHandler", "opacity", "Handler", "update", "inputSystem", "fill", "canvas", "hide", "forEach", "width", "dirty", "paint", "mousewheel", "mouseupHandler", "domElement", "offsetY", "5IMQZut", "absolute"];
  return an = function() {
    return n;
  }, an();
}
function Wt(n, x) {
  const t = an();
  return Wt = function(e, s) {
    return e = e - 156, t[e];
  }, Wt(n, x);
}
class Dr {
  constructor(x) {
    const t = Wt;
    this.visible = ![], this.dirty = !![], this[t(179)] = new V(), this[t(215)] = x, this.inputSystem = new qs(), this.render = new Ws();
    let e = this[t(220)][t(235)];
    e[t(227)][t(201)] = t(187), e[t(227)][t(165)] = "solid 1px gray", e[t(227)][t(223)] = t(164), e[t(227)].zIndex = "" + (x.handlerLayer.zIndex + 1), e.style[t(230)] = t(171), e.style[t(198)] = "0", e[t(227)][t(192)] = null, e[t(227)][t(177)] = "0", x[t(228)][t(226)](e), this[t(235)] = e, this[t(161)] = e, this[t(220)].setSize(200, 200 * 0.618), this[t(193)] = new O(null, 0, 0), this.rectObj[t(236)](), this[t(189)](), this.hide();
  }
  css(x) {
    const t = Wt;
    if (x == null)
      return this;
    for (let e in x)
      this[t(235)].style[e] = x[e];
    return this;
  }
  [x0(189)]() {
    const x = x0;
    let t = this, e = ["mousedown", x(167), "mousemove", x(159)], s = t[x(220)], i = s[x(235)], r = this.inputSystem;
    e.map(function(a) {
      const o = x;
      G0[o(219)](i, a, function(c) {
        const h = o;
        if (c[h(176)] < 0 || c[h(162)] < 0)
          return;
        r.update(c, a);
        let l = a + h(231);
        if (r[h(182)] && (l = h(229)), t[l] == null)
          throw new Error("Overview has no handler:" + a);
        t[l](c);
      });
    });
  }
  [x0(175)]() {
    const x = x0;
    this[x(196)] = !![], this[x(220)][x(175)](), clearInterval(this[x(218)]);
    let t = this;
    return this[x(218)] = setInterval(function() {
      const e = x;
      t[e(157)] && t[e(232)]();
    }, 500), this;
  }
  [x0(236)]() {
    const x = x0;
    return this[x(196)] = ![], this[x(220)][x(236)](), clearInterval(this._overviewTimer), this;
  }
  [x0(217)]() {
    const x = x0;
    return this[x(220)][x(217)]();
  }
  [x0(213)]() {
    return this.render.getHeight();
  }
  setSize(x, t) {
    const e = x0;
    return this.render[e(212)](x, t);
  }
  [x0(174)]() {
    const x = x0;
    let t = null;
    return this[x(215)].getChildren()[x(237)](function(e, s) {
      const i = x;
      let r = e[i(168)](!![]);
      t == null ? t = r : t = V[i(205)](t, r);
    }), this[x(179)][x(221)](t.x, t.y, t[x(156)], t[x(194)]), this[x(179)];
  }
  [x0(158)]() {
    const x = x0;
    let t = this, e = t[x(215)], s = t[x(220)], i = t[x(217)](), r = t[x(213)](), a = this[x(174)]();
    if (a == null)
      return;
    let o = Math[x(172)](i, a[x(156)]), c = Math[x(172)](r, a[x(194)]), h = i / o, l = r / c;
    s[x(170)]();
    let f = s.context;
    f[x(209)](), f.scale(h, l), f[x(222)](-a.x, -a.y), e[x(166)]()[x(237)](function(y) {
      const _ = x;
      y[_(157)] = !![], s[_(199)](y);
    }), f[x(184)](), this.paintDragRect(f, a);
  }
  paintDragRect(x, t) {
    const e = x0;
    let s = this.rectObj, i = this[e(215)], r = this[e(220)], a = Math.max(t[e(156)], i[e(156)]), o = Math[e(172)](t.height, i[e(194)]), c = i.width / a, h = i[e(194)] / o;
    if (c == 1 && h == 1) {
      s.hide();
      return;
    }
    s[e(175)]();
    let l = r[e(217)]() * c, f = r.getHeight() * h;
    s.resizeTo(l, f);
    let y = r.getWidth() / a, _ = r[e(213)]() / o, b = -t.x * y, P = -t.y * _;
    b < 0 && (b = 0), P < 0 && (P = 0), b + s[e(156)] > r[e(217)]() && (b = r[e(217)]() - s[e(156)]), P + s[e(194)] > r.getHeight() && (P = r[e(213)]() - s[e(194)]), s[e(216)](b, P), x.save(), x[e(173)] = 2, x.fillStyle = e(183), x[e(191)] = e(202), x[e(208)](), x[e(188)](s.x, s.y, s.width, s[e(194)]), x[e(180)](), x[e(234)](), x[e(184)]();
  }
  [x0(232)]() {
    const x = x0;
    this.visible && (this[x(215)][x(232)](), this[x(158)]());
  }
  mousedownHandler() {
    const x = x0;
    let t = this.rectObj[x(186)](), e = this[x(233)].x, s = this.inputSystem.y;
    t[x(178)](e, s) && (this[x(233)][x(200)] = this[x(193)]);
    let i = e - (this[x(193)].x + this[x(193)][x(156)] / 2), r = s - (this[x(193)].y + this.rectObj[x(194)] / 2);
    this[x(185)](i, r);
  }
  [x0(229)]() {
    const x = x0;
    let t = this[x(233)].dx, e = this.inputSystem.dy;
    this[x(185)](t, e);
  }
  moveWith(x, t) {
    const e = x0;
    if (!this[e(193)][e(196)])
      return;
    x < 0 && this[e(193)].x + x <= 0 && (x = -this.rectObj.x), x > 0 && this[e(193)].x + this[e(193)][e(156)] >= this[e(217)]() && (x = this[e(217)]() - this[e(193)][e(156)] - this[e(193)].x), t < 0 && this.rectObj.y <= 0 && (t = -this[e(193)].y), t > 0 && this[e(193)].y + this.rectObj[e(194)] >= this.getHeight() && (t = this[e(213)]() - this[e(193)][e(194)] - this.rectObj.y), this[e(193)][e(169)](x, t);
    let i = this[e(174)](), r = i.width, a = i[e(194)], o = r * (x / this[e(217)]()), c = a * (t / this[e(213)]());
    this.stage[e(166)]()[e(237)](function(l, f) {
      l[e(169)](-o, -c);
    });
    let h = this;
    this._updateTimer = setTimeout(function() {
      h.update();
    }, 20), this[e(215)].getChildren()[e(237)](function(l, f) {
      l.dirty = !![];
    }), this[e(215)][e(232)]();
  }
  mousewheelHandler(x) {
    x[x0(190)]();
  }
  [x0(224)]() {
  }
  [x0(160)]() {
    const x = x0;
    this[x(233)][x(200)] = null;
  }
}
const jr = `.jtopo_popoupmenu{padding:10px;border-radius:5px;min-width:210px;background-color:#fff;border:1px solid;position:absolute;z-index:10000}.jtopo_popoupmenu .header{font-size:14px;height:24px;padding-bottom:3px}.jtopo_popoupmenu a{text-rendering:optimizeLegibility;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;padding-left:20px;display:block;height:25px;color:#00000080;font-size:13px;cursor:pointer}.jtopo_popoupmenu a:hover{color:#000}.jtopo_iconsPanel{opacity:.8;padding-left:5px;position:absolute;background-color:#e8e8e8;top:90px;width:52px;height:425px;z-index:1000;border-radius:5px}.jtopo_iconsPanel .item{border:1px solid white;width:42px;height:42px;margin-top:10px}.jtopo_toolbar{border-bottom:1px dotted;padding-bottom:2px;border-color:#e0e0e0;width:100%;min-height:33px;background-color:#e8e8e8}.jtopo_toolbar .group{float:left;margin-right:5px}.jtopo_toolbar .item{float:left;width:32px;height:32px;stroke:gray;stroke-width:1;stroke-linecap:square;stroke-linejoin:miter;fill:none;font-size:12px;color:gray}.jtopo_toolbar .active{background-color:#d3d3d3;border:1px solid black}.jtopo_toolbar input[type=text]{font-size:12px;color:gray;float:left;width:120px;height:26px;border:1px solid white;margin:2px 2px 2px 4px}.jtopo_input_textfield{position:absolute;display:none;font-size:smaller;z-index:10000}.jtopo_tooltip{pointer-events:none;opacity:.9;min-width:30px;min-height:30px;padding:10px;border-radius:5px;background-color:#f8f8f8;border:1px solid;position:absolute;z-index:10000}.jtopo_historyPanel{position:absolute;left:0px;top:100%;width:879px;overflow-x:scroll;height:600px;z-index:1000}.jtopo_debugPanel{user-select:none;border:dashed 1px gray;padding:8px;position:absolute;left:0px;top:0%;width:300px;z-index:98;text-align:left;font-size:10px;color:gray}
`, n0 = v0;
(function(n, x) {
  const t = v0, e = n();
  for (; []; )
    try {
      if (parseInt(t(180)) / 1 * (parseInt(t(130)) / 2) + -parseInt(t(182)) / 3 + parseInt(t(156)) / 4 * (parseInt(t(138)) / 5) + -parseInt(t(171)) / 6 + -parseInt(t(175)) / 7 * (-parseInt(t(184)) / 8) + -parseInt(t(186)) / 9 * (parseInt(t(152)) / 10) + parseInt(t(195)) / 11 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(on, 203277);
function zr(n, x, t, e) {
  return t * n / e + x;
}
function Nr(n, x, t, e) {
  return t * (n /= e) * n + x;
}
function Rr(n, x, t, e) {
  return -t * (n /= e) * (n - 2) + x;
}
function Hr(n, x, t, e) {
  return (n /= e / 2) < 1 ? t / 2 * n * n + x : -t / 2 * (--n * (n - 2) - 1) + x;
}
function Wr(n, x, t, e) {
  const s = v0;
  return -t * Math[s(150)](n / e * (Math.PI / 2)) + t + x;
}
function Xr(n, x, t, e) {
  return t * Math[v0(185)](n / e * (Math.PI / 2)) + x;
}
function qr(n, x, t, e) {
  const s = v0;
  return -t / 2 * (Math[s(150)](Math.PI * n / e) - 1) + x;
}
function Gr(n, x, t, e) {
  const s = v0;
  return n == 0 ? x : t * Math[s(155)](2, 10 * (n / e - 1)) + x;
}
function Yr(n, x, t, e) {
  const s = v0;
  return n == 0 ? x : n == e ? x + t : (n /= e / 2) < 1 ? t / 2 * Math[s(155)](2, 10 * (n - 1)) + x : t / 2 * (-Math.pow(2, -10 * --n) + 2) + x;
}
function Vr(n, x, t, e) {
  return -t * (Math.sqrt(1 - (n /= e) * n) - 1) + x;
}
function Ur(n, x, t, e) {
  return t * Math[v0(164)](1 - (n = n / e - 1) * n) + x;
}
function on() {
  const n = ["asin", "reject", "2347656xLyaiQ", "running", "filter", "delay", "534513mNIdcB", "setDuration", "value format error.", "currentTime", "play", "13LHkJhp", "_getTickAction", "128028YNndIC", "cancel", "24yqPqik", "sin", "2262933sHBRSM", "continue", "abs", "playedTimes", "direction", "onEnd", "add", "pause", "none", "3704250xtBIWP", "27526nJTakD", "set", "animations", "anime", "name", "isPause", "length", "stepAction", "102800HeAByq", "cancelAll", "action", "now", "finished", "isArray", "startTime", "effect", "promise", "alternate-reverse", "alternate", "onUpdate", "cos", "anime_", "10bUNYCv", "remove", "idle", "pow", "28sILRMR", "reverse", "duration", "update", "push", "slice", "times", "playState", "sqrt", "resolve", "from", "delayed", "system"];
  return on = function() {
    return n;
  }, on();
}
function Kr(n, x, t, e) {
  return (n /= e / 2) < 1 ? -t / 2 * (Math.sqrt(1 - n * n) - 1) + x : t / 2 * (Math.sqrt(1 - (n -= 2) * n) + 1) + x;
}
function Qr(n, x, t, e) {
  return t * (n /= e) * n * n + x;
}
function Zr(n, x, t, e) {
  return t * ((n = n / e - 1) * n * n + 1) + x;
}
function Jr(n, x, t, e) {
  return (n /= e / 2) < 1 ? t / 2 * n * n * n + x : t / 2 * ((n -= 2) * n * n + 2) + x;
}
function $r(n, x, t, e) {
  return t * (n /= e) * n * n * n + x;
}
function ta(n, x, t, e) {
  return -t * ((n = n / e - 1) * n * n * n - 1) + x;
}
function xa(n, x, t, e) {
  return (n /= e / 2) < 1 ? t / 2 * n * n * n * n + x : -t / 2 * ((n -= 2) * n * n * n - 2) + x;
}
function ea(n, x, t, e) {
  return t * (n /= e) * n * n * n * n + x;
}
function v0(n, x) {
  const t = on();
  return v0 = function(e, s) {
    return e = e - 130, t[e];
  }, v0(n, x);
}
function na(n, x, t, e) {
  return t * ((n = n / e - 1) * n * n * n * n + 1) + x;
}
function sa(n, x, t, e) {
  return (n /= e / 2) < 1 ? t / 2 * n * n * n * n * n + x : t / 2 * ((n -= 2) * n * n * n * n + 2) + x;
}
function ia(n, x, t, e) {
  const s = v0;
  var a = 1.70158, i = 0, r = t;
  if (n == 0)
    return x;
  if ((n /= e) == 1)
    return x + t;
  if (i || (i = e * 0.3), r < Math[s(188)](t)) {
    r = t;
    var a = i / 4;
  } else
    var a = i / (2 * Math.PI) * Math.asin(t / r);
  return -(r * Math[s(155)](2, 10 * (n -= 1)) * Math.sin((n * e - a) * (2 * Math.PI) / i)) + x;
}
function ra(n, x, t, e) {
  const s = v0;
  var a = 1.70158, i = 0, r = t;
  if (n == 0)
    return x;
  if ((n /= e) == 1)
    return x + t;
  if (i || (i = e * 0.3), r < Math[s(188)](t)) {
    r = t;
    var a = i / 4;
  } else
    var a = i / (2 * Math.PI) * Math[s(169)](t / r);
  return r * Math[s(155)](2, -10 * n) * Math[s(185)]((n * e - a) * (2 * Math.PI) / i) + t + x;
}
function aa(n, x, t, e) {
  const s = v0;
  var a = 1.70158, i = 0, r = t;
  if (n == 0)
    return x;
  if ((n /= e / 2) == 2)
    return x + t;
  if (i || (i = e * (0.3 * 1.5)), r < Math[s(188)](t)) {
    r = t;
    var a = i / 4;
  } else
    var a = i / (2 * Math.PI) * Math.asin(t / r);
  return n < 1 ? -0.5 * (r * Math.pow(2, 10 * (n -= 1)) * Math[s(185)]((n * e - a) * (2 * Math.PI) / i)) + x : r * Math[s(155)](2, -10 * (n -= 1)) * Math[s(185)]((n * e - a) * (2 * Math.PI) / i) * 0.5 + t + x;
}
function oa(n, x, t, e, s) {
  return s == null && (s = 1.70158), t * (n /= e) * n * ((s + 1) * n - s) + x;
}
function ca(n, x, t, e, s) {
  return s == null && (s = 1.70158), t * ((n = n / e - 1) * n * ((s + 1) * n + s) + 1) + x;
}
function ha(n, x, t, e, s) {
  return s == null && (s = 1.70158), (n /= e / 2) < 1 ? t / 2 * (n * n * (((s *= 1.525) + 1) * n - s)) + x : t / 2 * ((n -= 2) * n * (((s *= 1.525) + 1) * n + s) + 2) + x;
}
function Ui(n, x, t, e) {
  return t - Gs(e - n, 0, t, e) + x;
}
function Gs(n, x, t, e) {
  return (n /= e) < 1 / 2.75 ? t * (7.5625 * n * n) + x : n < 2 / 2.75 ? t * (7.5625 * (n -= 1.5 / 2.75) * n + 0.75) + x : n < 2.5 / 2.75 ? t * (7.5625 * (n -= 2.25 / 2.75) * n + 0.9375) + x : t * (7.5625 * (n -= 2.625 / 2.75) * n + 0.984375) + x;
}
function la(n, x, t, e) {
  return n < e / 2 ? Ui(n * 2, 0, t, e) * 0.5 + x : Gs(n * 2 - e, 0, t, e) * 0.5 + t * 0.5 + x;
}
let ua = { easeLinear: zr, easeInQuad: Nr, easeOutQuad: Rr, easeInOutQuad: Hr, easeInSine: Wr, easeOutSine: Xr, easeInOutSine: qr, easeInExpo: Gr, easeInOutExpo: Yr, easeInCirc: Vr, easeOutCirc: Ur, easeInOutCirc: Kr, easeInCubic: Qr, easeOutCubic: Zr, easeInOutCubic: Jr, easeInQuart: $r, easeOutQuart: ta, easeInOutQuart: xa, easeInQuint: ea, easeOutQuint: na, easeInOutQuint: sa, easeInElastic: ia, easeOutElastic: ra, easeInOutElastic: aa, easeInBack: oa, easeOutBack: ca, easeInOutBack: ha, easeInBounce: Ui, easeOutBounce: Gs, easeInOutBounce: la };
class Ki {
  constructor(x, t, e, s) {
    const i = v0;
    this[i(174)] = 0, this[i(190)] = "normal", this.fillMode = i(194), this.playState = i(154), this[i(135)] = ![], this[i(142)] = ![], this[i(167)] = ![], this[i(162)] = 1, this[i(189)] = 0, this[i(145)] = "easeLinear", this[i(166)] = x, this.to = t, this[i(158)] = e, this[i(140)] = s;
  }
  [n0(131)](x, t, e, s) {
    const i = n0;
    return this[i(166)] = x, this.to = t, this.duration = e, this[i(140)] = s, this;
  }
  setFrom(x) {
    const t = n0;
    return this[t(166)] = x, this;
  }
  setTo(x) {
    return this.to = x, this;
  }
  [n0(176)](x) {
    return this.duration = x, this;
  }
  [n0(149)](x) {
    const t = n0;
    return this[t(140)] = x, this;
  }
  [n0(183)]() {
    const x = n0;
    return this[x(168)] && this[x(168)].remove(this), this[x(170)] && (this[x(170)](), this[x(170)] = null), this[x(163)] = x(142), this;
  }
  [n0(193)]() {
    const x = n0;
    return this[x(163)] = "paused", this[x(135)] = !![], this;
  }
  [n0(187)]() {
    const x = n0;
    return this.startTime = Date[x(141)]() - this[x(178)], this[x(163)] = x(172), this[x(135)] = ![], this;
  }
  tick(x) {
    const t = n0;
    if (this[t(163)] != t(172))
      return ![];
    let e = x - this[t(144)];
    return this.currentTime = e, e >= this[t(158)] ? (this[t(163)] = "finished", this[t(168)].remove(this), this.stepAction(this[t(158)]), this[t(189)] < this.times ? this.play() : (this[t(165)](), this[t(165)] = null, this[t(191)] && this[t(191)]())) : this[t(137)](e), !![];
  }
  [n0(179)]() {
    const x = n0;
    let t = this;
    this[x(168)][x(192)](this), this[x(189)]++, this.isPause = ![], this[x(174)] != 0 && this[x(167)] == ![] ? (setTimeout(function() {
      const r = x;
      t[r(144)] = Date[r(141)](), t[r(163)] = r(172);
    }, this[x(174)]), t[x(167)] = !![]) : (t.startTime = Date[x(141)](), t[x(163)] = x(172));
    const e = this;
    let s = this._getTickAction();
    this.stepAction = s;
    let i = this[x(146)];
    return i == null && (i = new Promise(function(r, a) {
      const o = x;
      e[o(165)] == null && (e[o(165)] = r, e[o(170)] = a);
    }), this[x(146)] = this[x(146)]), i.catch((r) => {
    });
  }
  [n0(181)]() {
    const x = n0;
    let t = this[x(145)], e = this[x(166)], s = this.to, i = this[x(158)], r = this[x(140)], a = e, o = s;
    if (typeof e == "number" && (a = [e], o = [s]), this[x(190)] == x(157) || this[x(190)] == x(147)) {
      let S = a;
      a = o, o = S;
    }
    let c = a[0];
    const h = Array[x(143)](e), l = typeof c == "number", f = c.x != null || c.y != null;
    let y = a[x(161)](), _, b = ua[t], P = this[x(190)] == x(148) || this[x(190)] == x(147), v = this, D = this[x(158)] * 0.5;
    if (l)
      _ = function(S) {
        const C = x;
        let Z = S;
        P && (S > D ? Z = v[C(158)] * 2 - Z * 2 : Z = S * 2);
        for (let P0 = 0; P0 < a[C(136)]; P0++) {
          const T0 = a[P0], It = o[P0], $0 = It - T0;
          if ($0 == 0)
            y[P0] = T0;
          else {
            let n1 = b(Z, T0, $0, i);
            y[P0] = n1;
          }
        }
        r(h ? y : y[0]);
      };
    else if (f)
      _ = function(S) {
        for (let C = 0; C < a.length; C++) {
          const Z = a[C], P0 = o[C], T0 = P0.x - Z.x, It = P0.y - Z.y;
          let $0 = { x: Z.x, y: Z.y };
          T0 != 0 && ($0.x = b(S, Z.x, T0, i)), It != 0 && ($0.y = b(S, Z.y, It, i)), y[C] = $0;
        }
        r(h ? y : y[0]);
      };
    else
      throw new Error(x(177));
    return _;
  }
}
let da = 0;
class Qi {
  constructor() {
    this.animations = [];
  }
  add(x) {
    const t = n0;
    this[t(132)].indexOf(x) == -1 && this[t(132)][t(160)](x);
  }
  [n0(153)](x) {
    W[n0(153)](this.animations, x);
  }
  [n0(139)]() {
    const x = n0;
    for (let t = 0; t < this.animations[x(136)]; t++)
      this[x(132)][t][x(183)]();
  }
  tick(x) {
    const t = n0;
    let e = ![];
    for (let s = 0; s < this[t(132)][t(136)]; s++)
      this[t(132)][s].tick(x) && e == ![] && (e = !![]);
    return this[t(132)] = this[t(132)][t(173)]((s) => s[t(163)] != t(142)), e;
  }
  [n0(133)](x) {
    const t = n0;
    x[t(158)] == null && (x[t(158)] = 1e3);
    let e = new Ki(x[t(166)], x.to, x[t(158)], x[t(159)]);
    return e[t(168)] = this, e.direction = x[t(190)] || "normal", e.delay = x[t(174)] || 0, e.name = x[t(134)] || t(151) + da++, e[t(191)] = x.onEnd, x[t(162)] != null && (e[t(162)] = x.times), x[t(145)] != null && (e[t(145)] = x[t(145)]), e;
  }
}
const S0 = _x;
(function(n, x) {
  const t = _x, e = n();
  for (; []; )
    try {
      if (-parseInt(t(139)) / 1 * (parseInt(t(108)) / 2) + parseInt(t(113)) / 3 * (parseInt(t(106)) / 4) + parseInt(t(111)) / 5 + -parseInt(t(105)) / 6 + parseInt(t(132)) / 7 + -parseInt(t(109)) / 8 * (-parseInt(t(125)) / 9) + -parseInt(t(144)) / 10 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(cn, 396566);
function cn() {
  const n = ["48NJysJY", "#009A93", "children", "handlerLayer", "getClass", "update", "theme not exist.", "setTheme", "style", "_style", "css", "merge", "2705895KSKcSd", "_computeLayer", "classList", "length", "className", "reset", "styleClass", "1402478PGQTIv", "assign", "areaBox", "stage", "toPojo", "themeName", "DefaultLight", "3nvuUde", "_preState", "SelectArea", "forEach", "_computeStyle", "7612290FLCqYQ", "defClass", "Layer", "1416606rlJWdg", "98444yVMCcG", "updateState", "190558MESzoI", "16BbQffl", "dirty", "2421465YNhDFf", "keys"];
  return cn = function() {
    return n;
  }, cn();
}
function _x(n, x) {
  const t = cn();
  return _x = function(e, s) {
    return e = e - 104, t[e];
  }, _x(n, x);
}
class fa {
  constructor(x) {
    const t = _x;
    this[t(131)] = {}, this.themeName = t(138), this.selectedStyle = t(114), this[t(135)] = x, this[t(120)](this[t(137)]);
  }
  [S0(136)]() {
    return this[S0(131)];
  }
  fromPojo(x) {
    const t = S0;
    this[t(131)] = {}, Object.assign(this[t(131)], x);
  }
  [S0(145)](x, t) {
    const e = S0;
    let s = new m0();
    s[e(124)](t), this[e(131)][x] = s;
  }
  [S0(117)](x) {
    return this[S0(131)][x];
  }
  [S0(120)](x) {
    const t = S0;
    this[t(137)] = x;
    let e = px[x];
    if (e == null)
      throw new Error(t(119));
    e[t(141)] && this[t(135)] && this[t(135)][t(116)][t(134)][t(123)](e[t(141)]);
    let s = Object[t(112)](e), i = this;
    s[t(142)]((a) => {
      i[t(145)](a, e[a]);
    }), this.stage[t(115)][t(142)]((a) => {
      i._computeLayer(a);
    }), this[t(135)][t(118)]();
  }
  [S0(126)](x) {
    const t = S0;
    let e = px[this[t(137)]], s = Object.keys(e), i = this;
    s[t(142)]((a) => {
      const o = t;
      a == o(104) && x[o(123)](e[a]), i.defClass(a, e[a]);
    }), F.flatten(x.children)[t(142)]((a) => {
      const o = t;
      a[o(121)][o(110)] = !![], i._computeStyle(a);
    });
  }
  [S0(143)](x) {
    const t = S0;
    let e = this;
    if (!x[t(121)].isDirty())
      return;
    x[t(122)][t(130)]();
    let s = e[t(117)](x[t(129)]);
    s != null && x[t(122)][t(124)](s);
    const i = x[t(127)];
    if (i[t(128)] > 0)
      for (let r = 0; r < i[t(128)]; r++) {
        let a = e[t(117)](i[r]);
        a != null && x._style[t(124)](a);
      }
    x[t(121)][t(107)](), Object[t(133)](x[t(122)], x.style[t(140)]), x[t(121)][t(110)] = ![];
  }
}
function mx(n, x) {
  const t = hn();
  return mx = function(e, s) {
    return e = e - 373, t[e];
  }, mx(n, x);
}
const St = mx;
(function(n, x) {
  const t = mx, e = n();
  for (; []; )
    try {
      if (parseInt(t(390)) / 1 + parseInt(t(401)) / 2 * (-parseInt(t(379)) / 3) + -parseInt(t(375)) / 4 + -parseInt(t(388)) / 5 * (-parseInt(t(408)) / 6) + parseInt(t(405)) / 7 + -parseInt(t(398)) / 8 * (-parseInt(t(386)) / 9) + parseInt(t(403)) / 10 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(hn, 317650);
function hn() {
  const n = ["handlerLayer", "animationSystem", "60FBBFJE", "mode", "visibilityState", "inputSystem", "length", "start", "_requestReapint", "459dgyvkb", "stage", "12490SZvOTr", "stoped", "109962rIGKyu", "isDraging", "mousedragHandler", "hidden", "tick", "timeline", "_tickLayer", "children", "9960rTCCEB", "requestTimer", "addEventListener", "30882yJZqZH", "pause", "4755610VtKlej", "visible", "690431GsLgRX", "renderLayer", "destoryed", "114wkwcTE", "_paintPrepare", "behaviourSystem", "674572HejLkr", "_frames"];
  return hn = function() {
    return n;
  }, hn();
}
class ba {
  constructor(x) {
    const t = mx;
    this[t(395)] = { currentTime: Date.now() }, this[t(387)] = x, this.start(), document[t(400)]("visibilitychange", function() {
      const e = t;
      document[e(381)], e(393);
    });
  }
  [St(396)](x, t) {
    const e = St;
    let s = x.render;
    if (!(x[e(404)] == ![] || x.destroyed || x._dragDrawDelay && x[e(387)][e(382)][e(391)] || s[e(389)] || s[e(407)] == !![]) && x[e(373)]() != ![]) {
      if (x[e(376)] == 0) {
        x[e(385)] == !![] && (x[e(385)] = ![], s.renderLayer(x));
        return;
      }
      s[e(406)](x);
    }
  }
  [St(402)]() {
    cancelAnimationFrame(this[St(399)]);
  }
  [St(384)]() {
    const x = St, t = this[x(387)], e = this, s = t[x(377)], i = t[x(397)], r = this.timeline, a = t[x(378)], o = t[x(374)], c = this[x(387)][x(392)][x(380)] != null;
    function h() {
      const l = x;
      if (t[l(407)])
        return;
      let f = Date.now();
      r.currentTime = f, o[l(394)](f);
      let y = ![];
      !c && (y = a[l(394)](f)), y == !![] && (s[l(385)] = !![]), e._tickLayer(s, f);
      for (let _ = 0; _ < i[l(383)]; _++) {
        let b = i[_];
        y && (b[l(385)] = !![]), e[l(396)](b, f);
      }
      e[l(399)] = requestAnimationFrame(h);
    }
    e[x(399)] = requestAnimationFrame(h);
  }
}
function Ix(n, x) {
  const t = ln();
  return Ix = function(e, s) {
    return e = e - 181, t[e];
  }, Ix(n, x);
}
const z0 = Ix;
function ln() {
  const n = ["open", ".png", "1011072kApHqg", "8Qfbbbh", "createEvent", "257552XBNAGd", "forEach", "translate", "width", "stage", "getTime", "union", "MouseEvents", "height", "removeChild", "12864049FXeSzd", "getChildren", "331898VmlMXC", "max", "dispatchEvent", "4283804bvjzpx", "160910ggTKtC", "download", "saveAsLocalImage", "88034ryVTjX", "children", "revokeObjectURL", "render", "text/json", "saveImageInfo", "restore", "getImage", "write", "_exportPaint", "saveDataAsFile", "279JnMTUM", "' alt='from canvas'/>", "39YRsdnO", "exportPaint", "name", "jtopo_data-noname.json", "createElementNS", "context", "95MqtLjG", "save", "click", "href", "body", "about:blank", "<img src='"];
  return ln = function() {
    return n;
  }, ln();
}
(function(n, x) {
  const t = Ix, e = n();
  for (; []; )
    try {
      if (parseInt(t(209)) / 1 + -parseInt(t(216)) / 2 * (parseInt(t(229)) / 3) + -parseInt(t(197)) / 4 * (parseInt(t(185)) / 5) + -parseInt(t(194)) / 6 + parseInt(t(212)) / 7 * (parseInt(t(195)) / 8) + -parseInt(t(227)) / 9 * (-parseInt(t(213)) / 10) + parseInt(t(207)) / 11 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(ln, 648045);
class pa {
  constructor(x) {
    const t = Ix;
    this[t(201)] = x, this[t(219)] = new Ws();
  }
  [z0(215)]() {
    const x = z0;
    this._exportPaint();
    let t = this[x(219)].getImage(), e = "jtopo_" + (/* @__PURE__ */ new Date())[x(202)]() + x(193);
    this.saveDataAsFile(t, e);
  }
  [z0(221)]() {
    const x = z0;
    this[x(225)]();
    let t = this[x(219)][x(223)]();
    window[x(192)](x(190)).document[x(224)](x(191) + t + x(228));
  }
  [z0(214)](x) {
    const t = z0;
    let e = this.stage;
    x == null && x == t(182);
    const s = e[t(217)][0].toFileJson(), i = new File([s], x, { type: t(220) });
    function r(a) {
      const o = t, c = document.createElement("a"), h = URL.createObjectURL(a);
      c[o(188)] = h, c[o(214)] = a[o(181)], document.body.appendChild(c), c[o(187)](), document[o(189)][o(206)](c), URL[o(218)](h);
    }
    r(i);
  }
  [z0(225)]() {
    const x = z0;
    let t = this[x(219)], e = this[x(201)], s = e[x(200)], i = e[x(205)], r = null;
    e[x(208)]()[x(198)](function(c, h) {
      const l = x;
      let f = c.getAABB(!![]);
      r == null ? r = f : r = V[l(203)](r, f);
    });
    let a = Math[x(210)](s, r[x(200)]), o = Math[x(210)](i, r[x(205)]);
    t.setSize(a, o), t[x(184)][x(186)](), t.context[x(199)](-r.x, -r.y), e[x(208)]()[x(198)](function(c) {
      t[x(230)](c);
    }), t[x(184)][x(222)]();
  }
  [z0(226)](x, t) {
    const e = z0;
    let s = document[e(183)]("http://www.w3.org/1999/xhtml", "a");
    s[e(188)] = x, s[e(214)] = t;
    let i = document[e(196)](e(204));
    i.initMouseEvent("click", !![], ![], window, 0, 0, 0, 0, 0, ![], ![], ![], ![], 0, null), s[e(211)](i);
  }
}
var o0 = un;
(function(n, x) {
  for (var t = un, e = n(); []; )
    try {
      var s = -parseInt(t(220)) / 1 + parseInt(t(203)) / 2 + parseInt(t(214)) / 3 + -parseInt(t(204)) / 4 + parseInt(t(225)) / 5 * (parseInt(t(198)) / 6) + -parseInt(t(222)) / 7 + parseInt(t(202)) / 8;
      if (s === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(dn, 350974);
var ya = Object.defineProperty, ga = Object[o0(209)], _a = (n, x, t, e) => {
  for (var s = e > 1 ? void 0 : e ? ga(x, t) : x, i = n.length - 1, r; i >= 0; i--)
    (r = n[i]) && (s = (e ? r(x, t, s) : r(s)) || s);
  return e && s && ya(x, t, s), s;
};
function un(n, x) {
  var t = dn();
  return un = function(e, s) {
    e = e - 198;
    var i = t[e];
    return i;
  }, un(n, x);
}
function dn() {
  var n = ["prototype", "getPoint", "radius", "513375lGWuqB", "height", "306950ctUYvJ", "defineProperties", "min", "65705mrrduG", "borderWidth", "102vXYrGW", "lineWidth", "padding", "_radius", "4417200GZwAsi", "217838tEBLlc", "1281780OqPUen", "endAngle", "className", "getRadius", "beginAngle", "getOwnPropertyDescriptor", "width", "concat", "dirty", "arc", "1032534aMUAHw", "sin", "setRadius"];
  return dn = function() {
    return n;
  }, dn();
}
class At extends O {
  constructor(x, t = 0, e = 0, s = 1, i = 1) {
    var r = o0;
    super(x, t, e, s, i), this[r(201)] = 24, this[r(208)] = 0, this.endAngle = 2 * Math.PI, this._z = 2, this.setRadius(s / 2);
  }
  [o0(216)](x = 1) {
    var t = o0;
    this[t(201)] = x, this[t(210)] = x * 2, this[t(221)] = x * 2, this[t(212)] = !![];
  }
  [o0(207)]() {
    var x = o0;
    return this[x(201)];
  }
  drawShape(x) {
    var t = o0;
    const e = this._style, s = e[t(199)] || 0;
    this[t(201)] = Math.min(this.width * 0.5, this[t(221)] * 0.5);
    let i = (e[t(226)] || 0) + (e[t(200)] || 0), r = this._radius - 2 * i - s * 0.5;
    r > 0 && x[t(213)](0, 0, r, this[t(208)], this.endAngle);
  }
  [o0(218)](x) {
    var t = o0;
    let e = Math[t(224)](this[t(210)] * 0.5, this[t(221)] * 0.5), s = x * (2 * Math.PI);
    return { x: this.x + e + e * Math.cos(s), y: this.y + e + e * Math[t(215)](s) };
  }
}
_a([I("CircleNode")], At.prototype, o0(206), 2), Object[o0(223)](At[o0(217)], { radius: { get() {
  return this._radius;
}, set(n) {
  var x = o0;
  this[x(216)](n);
} } }), V0(At[o0(217)], { serializers: { value: O[o0(217)].serializers[o0(211)]([o0(219), "beginAngle", o0(205)]) } });
const w0 = wx;
function wx(n, x) {
  const t = fn();
  return wx = function(e, s) {
    return e = e - 382, t[e];
  }, wx(n, x);
}
(function(n, x) {
  const t = wx, e = n();
  for (; []; )
    try {
      if (-parseInt(t(426)) / 1 + parseInt(t(395)) / 2 + -parseInt(t(406)) / 3 + parseInt(t(407)) / 4 * (-parseInt(t(424)) / 5) + -parseInt(t(388)) / 6 * (parseInt(t(398)) / 7) + -parseInt(t(389)) / 8 + parseInt(t(410)) / 9 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(fn, 231142);
class Zi {
  constructor(x, t) {
    const e = wx;
    this.objects = x, this[e(401)] = t;
  }
  [w0(393)]() {
    const x = w0;
    this[x(427)][x(429)]((t) => t[x(393)]()), this[x(401)][x(429)]((t, e) => {
      t.cancel();
    });
  }
  [w0(383)]() {
    const x = w0;
    this[x(401)][x(429)]((t, e) => {
      t.play();
    });
  }
}
class Ji {
  constructor(x) {
    const t = w0;
    this[t(390)] = x;
  }
  xyToCenter(x, t = { x: 0, y: 0 }) {
    const e = w0;
    let s = t.x || 0, i = t.y || 0;
    return this[e(390)][e(402)]({ from: [x.x, x.y], to: [-s, -i], update: (a) => {
      x.x = a[0], x.y = a[1];
    }, effect: e(405) });
  }
  flash(x, t = {}) {
    const e = w0;
    let s = t[e(404)] || 3, i = t[e(399)] || 100;
    return this[e(390)].anime({ from: [0], to: [1], update: (o) => {
      x[e(392)]({ globalAlpha: o[0] });
    }, times: s, effect: "easeOutBounce", duration: i });
  }
  [w0(409)](x, t = {}) {
    const e = w0;
    let s = t[e(400)] || "center", i = t[e(386)] || 0, r = t.beginHeight || 0, a = this[e(390)], o = [i, r, x.x, x.y], c = [x[e(414)], x[e(391)], x.x, x.y];
    return s == e(385) ? o = [i, r, x.x, x.y] : s == "lt" ? o = [i, r, x.x - x[e(414)] * 0.5, x.y - x[e(391)] * 0.5] : s == "rt" ? o = [i, r, x.x + x[e(414)] * 0.5, x.y - x[e(391)] * 0.5] : s == "lb" ? o = [i, r, x.x - x.width * 0.5, x.y + x[e(391)] * 0.5] : s == "rb" ? o = [i, r, x.x + x[e(414)] * 0.5, x.y + x.height * 0.5] : s == "ct" ? o = [x[e(414)], r, x.x, x.y - x[e(391)] * 0.5] : s == "cb" ? o = [x[e(391)], r, x.x, x.y + x[e(391)] * 0.5] : s == "lm" ? o = [i, x[e(391)], x.x - x[e(414)] * 0.5, x.y] : s == "rm" && (o = [i, x[e(391)], x.x + x.width * 0.5, x.y]), a[e(402)]({ from: o, to: c, update: (l) => {
      const f = e;
      x[f(422)](l[0] / x[f(414)], l[1] / x[f(391)]), x[f(418)](l[2], l[3]);
    }, effect: "easeOutCubic" });
  }
  [w0(417)](x, t = {}) {
    const e = w0;
    let s = t.position || e(385), i = t[e(420)] || 0, r = t[e(394)] || 0, a = this.animationSystem, o = [x.width, x[e(391)], x.x, x.y], c = [i, r, x.x, x.y];
    return s == e(385) ? c = [i, r, x.x, x.y] : s == "lt" ? c = [i, r, x.x - x[e(414)] * 0.5, x.y - x[e(391)] * 0.5] : s == "rt" ? c = [i, r, x.x + x[e(414)] * 0.5, x.y - x[e(391)] * 0.5] : s == "lb" ? c = [i, r, x.x - x[e(414)] * 0.5, x.y + x[e(391)] * 0.5] : s == "rb" ? c = [i, r, x.x + x.width * 0.5, x.y + x[e(391)] * 0.5] : s == "ct" ? c = [i, r, x.x, x.y - x[e(391)] * 0.5] : s == "cb" ? c = [i, r, x.x, x.y + x[e(391)] * 0.5] : s == "lm" ? c = [i, r, x.x - x[e(414)] * 0.5, x.y] : s == "rm" && (c = [i, r, x.x + x[e(414)] * 0.5, x.y]), a.anime({ from: o, to: c, update: (l) => {
      const f = e;
      x[f(422)](l[0] / x[f(414)], l[1] / x[f(391)]), x.translateTo(l[2], l[3]);
    }, effect: e(384) });
  }
  flow(x, t = {}) {
    const e = w0;
    let s = t[e(413)] || [3, 2], i = t[e(412)] || e(408), r = i == e(408) ? 1 : -1, a = this.animationSystem;
    return x.css({ lineDash: s }), a[e(402)]({ from: [0], to: [300], update: (c) => {
      x[e(392)]({ lineDashOffset: -c[0] * r });
    }, times: 20, duration: 1e4 });
  }
  [w0(387)](x = {}) {
    const t = w0;
    let e = x[t(415)] || 50, s = x[t(425)] || t(423), i = x[t(416)] || 3, r = x[t(396)] || 8, a = this.animationSystem, o = [], c = new At(null, 0, 0);
    c[t(421)] = ![], c.setRadius(e);
    for (let _ = 0; _ < i; _++) {
      let b = new At(null, 0, 0);
      b[t(421)] = ![], b.style[t(403)] = s, b[t(419)](1), c.addChild(b);
    }
    let h = c.children, l = e / i, f = a[t(402)]({ from: [1], to: [e], update: (_) => {
      const b = t;
      let P = _[0];
      for (let v = 0; v < h[b(397)]; v++) {
        let D = h[v], S = P + v * l;
        S > e && (S = S % e);
        let C = S / e;
        D[b(419)](S), D[b(428)][b(396)] = C * r, D[b(428)][b(411)] = 1 - C;
      }
    }, times: 1 / 0, duration: 2e3 });
    return o[t(382)](f), new Zi([c], o);
  }
}
function fn() {
  const n = ["count", "unexpandScale", "translateTo", "setRadius", "minWidth", "mouseEnabled", "scaleTo", "rgba(128,128,128,0.8)", "52995AAIIOf", "color", "6786WlUJzp", "objects", "style", "forEach", "push", "play", "easeOutCubic", "center", "beginWidth", "rippling", "24uVHdLd", "1572456TtTjBv", "animationSystem", "height", "css", "remove", "minHeight", "308690DYSFdE", "lineWidth", "length", "242977YsfSXy", "duration", "position", "animationList", "anime", "strokeStyle", "times", "easeInOutElastic", "634110gFlCJK", "36xPcvoj", "clockwise", "expandScale", "6531705oZsZzg", "globalAlpha", "direction", "lineDash", "width", "radius"];
  return fn = function() {
    return n;
  }, fn();
}
const D0 = vx;
(function(n, x) {
  const t = vx, e = n();
  for (; []; )
    try {
      if (parseInt(t(408)) / 1 * (-parseInt(t(404)) / 2) + parseInt(t(410)) / 3 + -parseInt(t(396)) / 4 + -parseInt(t(382)) / 5 * (-parseInt(t(413)) / 6) + parseInt(t(409)) / 7 + parseInt(t(400)) / 8 * (parseInt(t(406)) / 9) + parseInt(t(384)) / 10 * (-parseInt(t(383)) / 11) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(bn, 107596);
function bn() {
  const n = ["tick", "name", "behaviours not exist:", "11905Fpzwif", "11HPtELD", "1126850egxolJ", "stoped", "set", "isNaN", "executeBehaviours", "behaviour name cannot be number:", "get", "remove", "stage", "length", "update", "number", "823752fIUdiG", "indexOf", "behaviourMap", "assign", "1706344GnnesP", "prototype", "argMap", "behaviour already exist: ", "34pQfJis", "map", "9EsJfyd", "regBehaviour", "4565pzuMxO", "662669LhfThX", "551877KeKlMO", "first", "push", "30HbsBJI"];
  return bn = function() {
    return n;
  }, bn();
}
function vx(n, x) {
  const t = bn();
  return vx = function(e, s) {
    return e = e - 381, t[e];
  }, vx(n, x);
}
class ma {
  constructor(x) {
    const t = vx;
    this[t(405)] = /* @__PURE__ */ new Map(), this[t(402)] = /* @__PURE__ */ new WeakMap(), this[t(398)] = /* @__PURE__ */ new Map(), this[t(385)] = ![], this[t(392)] = x;
  }
  [D0(414)](x) {
    const t = D0;
    if (this[t(385)])
      return;
    let e = this[t(405)].keys();
    for (let s of e)
      this[t(388)](s, t(394));
  }
  defBehaviour(x, t) {
    const e = D0;
    if (this[e(398)][e(390)](x) != null)
      throw new Error(e(403) + x);
    let s = new ii(x);
    return Object[e(399)](s, t), this.regBehaviour(s), s;
  }
  [D0(407)](x) {
    const t = D0;
    this[t(398)].set(x[t(415)], x);
  }
  addBehaviour(x, t, e) {
    const s = D0;
    let i = this.behaviourMap.get(t);
    if (i == null)
      throw new Error(s(381) + t);
    let r = this[s(405)][s(390)](x);
    r == null ? (r = [], this[s(405)][s(386)](x, r), r.push(i)) : r[s(397)](i) == -1 && r[s(412)](i), e != null && (r[t] = e), i[s(411)](x, e);
  }
  removeBehaviour(x, t) {
    const e = D0;
    let s = this[e(405)][e(390)](x);
    if (s != null)
      for (let i = 0; i < s.length; i++) {
        let r = s[i];
        if (r[e(415)] == t) {
          W[e(391)](s, r);
          return;
        }
      }
  }
  [D0(388)](x, t) {
    const e = D0;
    let s = this[e(405)][e(390)](x);
    if (s != null)
      for (let i = 0; i < s[e(393)]; i++) {
        let r = s[i];
        if (t == e(394)) {
          let a = s[r.name];
          if (r[e(394)] !== ii[e(401)][e(394)] && r[e(394)](x, a) == ![])
            return ![];
        }
      }
    return null;
  }
}
class ii {
  constructor(x) {
    const t = D0;
    if (typeof x == t(395) || !Number[t(387)](parseInt(x)))
      throw new Error(t(389) + x);
    this[t(415)] = x;
  }
  first(x, t) {
  }
  [D0(394)](x, t) {
  }
}
const r0 = kx;
(function(n, x) {
  const t = kx, e = n();
  for (; []; )
    try {
      if (-parseInt(t(276)) / 1 + -parseInt(t(264)) / 2 * (-parseInt(t(284)) / 3) + parseInt(t(266)) / 4 + -parseInt(t(281)) / 5 * (-parseInt(t(283)) / 6) + -parseInt(t(268)) / 7 + -parseInt(t(272)) / 8 * (parseInt(t(261)) / 9) + -parseInt(t(267)) / 10 * (parseInt(t(263)) / 11) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(pn, 484331);
function kx(n, x) {
  const t = pn();
  return kx = function(e, s) {
    return e = e - 261, t[e];
  }, kx(n, x);
}
class Mt {
  constructor(x = 0, t = 0, e = 1, s = 1) {
    const i = kx;
    this.x = 0, this.y = 0, this.width = 1, this[i(287)] = 1, this[i(282)] = new V(0, 0, 1, 1), this[i(288)] = [], this[i(290)] = null, this.x = x, this.y = t, this[i(273)] = e, this[i(287)] = s;
  }
  [r0(279)](x) {
    const t = r0;
    this[t(290)] = x, this.x = x.x, this.y = x.y, this[t(273)] = x.width, this[t(287)] = x[t(287)];
  }
  [r0(286)](x) {
    const t = r0;
    this[t(290)] = x;
  }
  [r0(274)](x = ![]) {
    const t = r0;
    return this[t(282)][t(293)](this.x, this.y, this[t(273)], this[t(287)]), x ? V.union(this[t(282)], this[t(280)](!![])) : this[t(282)];
  }
  getChildrenRect(x) {
    const t = r0;
    let e = this[t(288)], s = e[0][t(274)](x);
    for (let i = 1; i < e.length; i++)
      s = V[t(265)](s, e[i][t(274)](x));
    return s;
  }
  translateWith(x, t) {
    this.x += x, this.y += t;
  }
  [r0(277)](x, t) {
    this.x = x, this.y = t;
  }
  addChild(x) {
    const t = r0;
    x[t(294)] = this, this[t(288)].push(x);
  }
  [r0(269)](x, t) {
    const e = r0;
    this[e(285)](x, t);
    let s = this[e(288)];
    for (var i = 0; i < s.length; i++)
      s[i][e(269)](x, t);
  }
  [r0(275)](x) {
    const t = r0;
    let e = [];
    for (var s = 0; s < this[t(288)][t(278)]; s++) {
      let i = this.children[s];
      if ((x == null || x(i) == !![]) && (e[t(289)](i), i[t(288)] && i[t(288)][t(278)] > 0)) {
        let r = Mt[t(275)](i.children, x);
        e = e.concat(r);
      }
    }
    return e;
  }
  [r0(271)]() {
    const x = r0;
    return this.object[x(292)] + x(262) + Mt[x(275)](this[x(288)]).map((e) => e.object.text).join(",");
  }
  static [r0(291)](x) {
    const t = r0;
    let e = x[0].getRect();
    for (let s = 1; s < x[t(278)]; s++)
      e = V[t(265)](e, x[s][t(274)]());
    return e;
  }
  static [r0(275)](x, t) {
    const e = r0;
    let s = [];
    for (var i = 0; i < x.length; i++) {
      let r = x[i];
      if ((t == null || t(r) == !![]) && (s[e(289)](r), r.children && r.children[e(278)] > 0)) {
        let a = Mt[e(275)](r.children, t);
        s = s[e(270)](a);
      }
    }
    return s;
  }
}
function pn() {
  const n = ["object", "getVNodeUnionRect", "text", "setTo", "parent", "2181969vowhjU", ": 	", "22qNMVnL", "6zaSXup", "union", "3267100ASnyKX", "74440ywegSV", "2572794QCViEt", "translateWithRecursive", "concat", "toString", "8docmST", "width", "getRect", "flatten", "706166NZjCKp", "translateTo", "length", "fromObject", "getChildrenRect", "143890YMoSDz", "rect", "12ctMSth", "941037dUEhyF", "translateWith", "setObject", "height", "children", "push"];
  return pn = function() {
    return n;
  }, pn();
}
function Xt(n, x) {
  const t = yn();
  return Xt = function(e, s) {
    return e = e - 265, t[e];
  }, Xt(n, x);
}
const U0 = Xt;
(function(n, x) {
  const t = Xt, e = n();
  for (; []; )
    try {
      if (-parseInt(t(267)) / 1 + -parseInt(t(286)) / 2 * (parseInt(t(272)) / 3) + parseInt(t(287)) / 4 + parseInt(t(283)) / 5 * (-parseInt(t(280)) / 6) + parseInt(t(268)) / 7 + parseInt(t(295)) / 8 * (-parseInt(t(291)) / 9) + parseInt(t(265)) / 10 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(yn, 778968);
class Ia {
  constructor(x) {
    const t = Xt;
    this[t(293)] = 0, this[t(274)] = x, this.descendants = x[t(294)](), this[t(273)] = [x][t(282)](this[t(270)]), this[t(266)] = this[t(273)][t(276)]((e) => e[t(269)]), this[t(285)] = [], this[t(279)]();
  }
  [U0(279)]() {
    const x = U0;
    let t = [];
    const e = this;
    function s(i, r) {
      const a = Xt;
      e[a(293)] < r && (e[a(293)] = r);
      let o = i[a(277)], c = t[r];
      c == null && (c = [], t[r] = c), c[a(275)](i);
      for (var h = 0; h < o[a(284)]; h++)
        s(o[h], r + 1);
    }
    s(this[x(274)], 0), this[x(285)] = t;
  }
  getRect() {
    const x = U0, t = this[x(274)][x(294)]();
    if (t[x(284)] == 0)
      throw new Error(x(271));
    let e = t[0][x(278)]();
    for (let s = 1; s < t.length; s++) {
      const i = t[s];
      e = V[x(289)](e, i[x(278)]());
    }
    return e;
  }
  centerTo(x, t) {
    const e = U0, s = this[e(273)];
    let i = this.root[e(278)]();
    s.forEach((c) => {
      const h = e;
      i = V[h(289)](i, c[h(278)]());
    });
    let r = i[e(281)](), a = x - r.x, o = t - r.y;
    return s[e(288)]((c) => {
      c[e(290)](a, o);
    }), this;
  }
  [U0(292)](x, t) {
    const e = U0, s = this[e(273)];
    let i = this[e(274)][e(278)]();
    s[e(288)]((o) => {
      const c = e;
      i = V[c(289)](i, o[c(278)]());
    });
    let r = x - i.x, a = t - i.y;
    return s[e(288)]((o) => {
      o[e(290)](r, a);
    }), this;
  }
  [U0(290)](x, t) {
    const e = U0;
    return this[e(273)][e(288)]((i) => {
      i[e(290)](x, t);
    }), this;
  }
  getLeafs() {
    const x = U0;
    return this[x(285)][this[x(293)]];
  }
}
function yn() {
  const n = ["object", "descendants", "getRect() in empty tree", "32583iQJJQE", "allVirtualNodes", "root", "push", "map", "children", "getRect", "index", "128646vNmLpX", "getCenter", "concat", "310sOCxku", "length", "indexData", "4azdtnz", "4458704ZbVvYH", "forEach", "union", "translateWith", "18HQUwUt", "translateTo", "deep", "flatten", "2880128cLMJnP", "9615580Gaqlee", "allObjects", "63122acAdim", "5858664RkcsOp"];
  return yn = function() {
    return n;
  }, yn();
}
const N = _t;
(function(n, x) {
  const t = _t, e = n();
  for (; []; )
    try {
      if (-parseInt(t(335)) / 1 + parseInt(t(368)) / 2 + parseInt(t(354)) / 3 * (parseInt(t(360)) / 4) + parseInt(t(371)) / 5 * (-parseInt(t(363)) / 6) + -parseInt(t(342)) / 7 * (parseInt(t(344)) / 8) + parseInt(t(326)) / 9 * (-parseInt(t(364)) / 10) + -parseInt(t(331)) / 11 * (-parseInt(t(352)) / 12) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(gn, 820334);
function _t(n, x) {
  const t = gn();
  return _t = function(e, s) {
    return e = e - 324, t[e];
  }, _t(n, x);
}
class Tt {
  constructor() {
    const x = _t;
    this.inputs = [], this[x(347)] = [];
  }
  getDegree() {
    const x = _t;
    return this.getInDegree() + this[x(357)]();
  }
  [N(336)]() {
    const x = N;
    return this[x(329)][x(328)];
  }
  getOutDegree() {
    return this.outputs.length;
  }
  [N(346)]() {
    const x = N;
    let t = this[x(347)].map((s) => s.to), e = this.inputs.map((s) => s[x(356)]);
    return t[x(351)](e);
  }
}
class Os {
  constructor(x, t) {
    const e = N;
    this[e(362)] = 0, this[e(356)] = x, this.to = t, x[e(347)].push(this), t[e(329)][e(337)](this);
  }
  isLoop() {
    return this[N(356)] === this.to;
  }
  isAdjacent(x) {
    return this[N(356)] === x.from || this.from === x.to || this.to === x.from || this.to === x.to;
  }
}
class wa {
  constructor(x) {
    const t = N;
    this[t(345)] = x;
  }
  [N(365)](x) {
    return ![];
  }
  isTrace(x) {
    return ![];
  }
  [N(369)](x) {
    const t = N;
    return this[t(365)](x) && this[t(358)](x);
  }
  [N(349)](x) {
    return ![];
  }
  [N(370)](x) {
    return this[N(365)](x) && this.isTrack(x);
  }
}
function gn() {
  const n = ["travelNext", "9449587wQQBUC", "clone", "8SYJepo", "vertexes", "getAdjacentList", "outputs", "map", "isTrack", "getMinDegree", "concat", "24uoEuzf", "getMaxDegreeVertext", "3HbhDGz", "isBridge", "from", "getOutDegree", "isTrace", "traverse", "3498532ticNkK", "add", "weight", "8544LeeRjf", "51710GHdjDX", "isClose", "depth", "has", "2218056lLAnaa", "isCircuit", "isCycle", "2675nYHfyX", "isAlone", "isSubGraph", "slice", "edges", "check", "1332MkKIwi", "assert", "length", "inputs", "filter", "12975281idownY", "isTree", "forEach", "hasDirection", "645380Lohivj", "getInDegree", "push", "getOrder", "isZero", "getDegree"];
  return gn = function() {
    return n;
  }, gn();
}
class Px {
  constructor(x, t) {
    const e = N;
    this[e(334)] = !![], this.vertexes = x, this.edges = t;
  }
  [N(339)]() {
    const x = N;
    return this[x(345)][x(328)] > 0 && this[x(324)][x(328)] == 0;
  }
  [N(372)]() {
    const x = N;
    return this[x(345)].length == 1 && this[x(324)][x(328)] == 0;
  }
  [N(359)](x, t = N(366), e = [], s = /* @__PURE__ */ new Set()) {
    const i = N;
    x == null && (x = this.vertexes[0]);
    let r = this;
    if (!s[i(367)](x) && (e[i(337)](x), s.add(x)), t == i(366))
      x.getAdjacentList()[i(330)]((o) => !s.has(o))[i(348)]((o) => {
        const c = i;
        !s.has(o) && (e[c(337)](o), s.add(o)), r[c(359)](o, t, e, s);
      });
    else {
      let a = x[i(346)]()[i(330)]((o) => !s[i(367)](o));
      a.map((o) => {
        const c = i;
        e.push(o), s[c(361)](o);
      }), a[i(348)]((o) => {
        r[i(359)](o, t, e, s);
      });
    }
    return e;
  }
  [N(353)]() {
    const x = N;
    let t = this[x(345)][0];
    for (let e = 1; e < this[x(345)].length; e++) {
      const s = this[x(345)][e];
      s.getDegree() > t[x(340)]() && (t = s);
    }
    return t;
  }
  [N(350)]() {
    const x = N;
    let t = this[x(345)][0].getDegree();
    for (let e = 1; e < this[x(345)][x(328)]; e++) {
      const s = this.vertexes[e];
      s[x(340)]() < t && (t = s[x(340)]());
    }
    return t;
  }
  getPathList(x, t, e = /* @__PURE__ */ new Set()) {
    return [];
  }
  [N(338)]() {
    const x = N;
    return this[x(345)][x(328)];
  }
  [N(355)]() {
  }
  [N(373)](x) {
  }
  [N(332)]() {
    const x = N;
    return this[x(345)][x(328)] != this[x(324)].length + 1 ? ![] : this[x(345)].length == 1 ? !![] : this[x(345)][x(330)]((e) => e[x(340)]() == 1)[x(328)] > 0;
  }
  [N(341)](x) {
    let t = [];
    function e(s) {
      const i = _t;
      t[i(337)](s);
      let r = s[i(347)][i(348)]((a) => a.to);
      for (let a = 0; a < r[i(328)]; a++) {
        let o = r[a];
        if (o === x)
          return;
        e(o);
      }
    }
    return e(x), t;
  }
  [N(343)]() {
    const x = N;
    let t = this[x(345)].slice();
    t[x(333)]((i) => {
      const r = x;
      i.inputs = i.inputs[r(374)](), i[r(347)] = i[r(347)][r(374)]();
    });
    let e = this[x(324)][x(374)](), s = new Px(t, e);
    return s[x(334)] = this[x(334)], s;
  }
  [N(325)]() {
    const x = N;
    let t = 0;
    this[x(345)][x(333)]((s) => t += s[x(340)]()), console[x(327)](t == this[x(324)].length * 2);
    let e = this[x(345)][x(330)]((s) => s[x(340)]() % 2 != 0).length;
    console[x(327)](e % 2 == 0);
  }
}
function _n(n, x) {
  const t = mn();
  return _n = function(e, s) {
    return e = e - 420, t[e];
  }, _n(n, x);
}
const F0 = _n;
(function(n, x) {
  const t = _n, e = n();
  for (; []; )
    try {
      if (parseInt(t(454)) / 1 * (parseInt(t(459)) / 2) + -parseInt(t(421)) / 3 + parseInt(t(448)) / 4 + parseInt(t(424)) / 5 * (parseInt(t(445)) / 6) + parseInt(t(431)) / 7 * (parseInt(t(457)) / 8) + parseInt(t(440)) / 9 * (-parseInt(t(420)) / 10) + -parseInt(t(426)) / 11 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(mn, 307347);
function mn() {
  const n = ["fromObject", "24uBTBui", "filter", "10CgPcFo", "getInDegree", "add", "20uGuDRi", "1206402UvEdZU", "outputs", "getOutDegree", "1095830UIpoAU", "set", "6341170UzQSzP", "edges", "from", "target", "push", "1039703secChL", "length", "inputs", "forEach", "has", "begin", "getLinks", "get", "vertexes", "761472VJbREs", "weight", "addChild", "toGraphs", "object", "12EHjoWl", "createMinimalSpanningTree", "isTree", "125332ZbAreG", "sort", "concat", "map", "end", "travelVertext", "107983lMZLpy", "isNodeTarget"];
  return mn = function() {
    return n;
  }, mn();
}
class qt {
  static [F0(446)](x) {
    const t = F0;
    let e = [], s = [], i = x[t(427)][t(449)]((o, c) => {
      const h = t;
      let l = o[h(441)] - c[h(441)];
      return l == 0 && (l = o.from[h(460)]() - c[h(428)][h(460)](), l == 0 && (l = c.to[h(423)]() - o.to[h(423)]())), l;
    }), r = /* @__PURE__ */ new WeakMap();
    for (let o = 0; o < i[t(432)]; o++) {
      const c = i[o];
      let h = c.from, l = c.to, f = r[t(438)](h), y = r[t(438)](l);
      if (f != null && y != null)
        continue;
      f == null && (f = new Tt(), f.object = h[t(444)], e[t(430)](f), r[t(425)](h, f)), y == null && (y = new Tt(), y[t(444)] = l[t(444)], e[t(430)](y), r[t(425)](l, y));
      let _ = new Os(f, y);
      _.object = c[t(444)], s[t(430)](_);
    }
    return new Px(e, s);
  }
  getNodes(x) {
    const t = F0;
    return x.vertexes[t(451)]((e) => e[t(444)]);
  }
  [F0(437)](x) {
    const t = F0;
    return x[t(427)][t(451)]((e) => e[t(444)]);
  }
  objectsToGraphs(x) {
    const t = F0, e = x.filter((c) => c instanceof O);
    let s = x.filter((c) => c instanceof Y);
    s.filter((c) => c.begin[t(455)]() && c[t(452)][t(455)]());
    const i = /* @__PURE__ */ new WeakMap(), r = e[t(451)]((c) => {
      const h = t, l = new Tt();
      return l.object = c, i[h(425)](c, l), l;
    });
    s[t(458)]((c) => {
      const h = t;
      return i.get(c[h(436)][h(429)]) && i[h(438)](c[h(452)][h(429)]);
    });
    const a = s[t(451)]((c) => {
      const h = t;
      let l = i[h(438)](c[h(436)][h(429)]), f = i[h(438)](c[h(452)][h(429)]), y = new Os(l, f);
      return y[h(444)] = c, y;
    });
    return this[t(443)](r, a);
  }
  [F0(443)](x, t) {
    const e = F0;
    let s = [], i = [];
    x[e(434)]((o) => {
      const c = e;
      s[c(430)](o);
      let h = o[c(433)], l = o.outputs;
      i = i[c(450)](h), i = i[c(450)](l);
    });
    let r = [], a = /* @__PURE__ */ new Set();
    for (let o = 0; o < x[e(432)]; o++) {
      const c = x[o];
      if (a[e(435)](c))
        continue;
      let h = [], l = [];
      this.travelVertext(c, h, l, a);
      let f = new Px(h, l);
      r[e(430)](f);
    }
    return r;
  }
  [F0(453)](x, t = [], e = [], s = /* @__PURE__ */ new Set()) {
    const i = F0;
    if (s[i(435)](x))
      return;
    t.push(x), s.add(x);
    let r = x[i(433)][i(458)]((c) => !s[i(435)](c)), a = x[i(422)][i(458)]((c) => !s.has(c));
    r.forEach((c) => {
      const h = i;
      e.push(c), s[h(461)](c);
    }), a[i(434)]((c) => {
      const h = i;
      e[h(430)](c), s[h(461)](c);
    });
    let o = this;
    r[i(434)]((c) => {
      const h = i;
      o.travelVertext(c[h(428)], t, e, s);
    }), a[i(434)]((c) => {
      o.travelVertext(c.to, t, e, s);
    });
  }
  toTree(x) {
    const t = F0;
    !x[t(447)]() && (x = qt[t(446)](x));
    let e = x[t(439)][t(458)]((c) => c[t(460)]() == 0)[0][t(444)], s = x[t(439)][t(451)]((c) => c.object), i = x[t(427)].map((c) => c[t(444)]);
    const r = /* @__PURE__ */ new WeakMap();
    let a = new Mt();
    return a[t(456)](e), r[t(425)](e, a), s[t(434)]((c) => {
      const h = t;
      if (c === e)
        return;
      const l = new Mt();
      l[h(456)](c), r.set(c, l);
    }), i[t(434)]((c) => {
      const h = t;
      let l = r[h(438)](c[h(436)].target), f = r[h(438)](c[h(452)][h(429)]);
      l[h(442)](f);
    }), new Ia(a);
  }
}
function Sx(n, x) {
  const t = In();
  return Sx = function(e, s) {
    return e = e - 178, t[e];
  }, Sx(n, x);
}
function In() {
  const n = ["275944yYPfty", "resizeTo", "378ePsmrt", "6vyiNFZ", "rotateNormaledPoints", "rotate", "1EfXEAx", "objects", "map", "74940xAyJPz", "scaleX", "positionNormals", "positions", "995404lCbNbT", "48oPUrfg", "getPointsRect", "18818810sCcUFg", "7345408wwXzdM", "103953mbtXAf", "forEach", "translate", "scale", "3377YpANgz", "width", "height", "from", "6724655xwRipV", "play", "doLayout", "scaleY", "animationSystem", "setXY", "getPointsNormalization", "update"];
  return In = function() {
    return n;
  }, In();
}
const xt = Sx;
(function(n, x) {
  const t = Sx, e = n();
  for (; []; )
    try {
      if (parseInt(t(191)) / 1 * (parseInt(t(198)) / 2) + -parseInt(t(203)) / 3 * (parseInt(t(199)) / 4) + parseInt(t(211)) / 5 * (parseInt(t(188)) / 6) + parseInt(t(202)) / 7 + parseInt(t(185)) / 8 * (-parseInt(t(187)) / 9) + parseInt(t(201)) / 10 + -parseInt(t(207)) / 11 * (parseInt(t(194)) / 12) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(In, 992125);
class Wx {
  constructor(x, t) {
    const e = Sx;
    this.x = 0, this.y = 0, this[e(195)] = 1, this.scaleY = 1, this.width = 1, this[e(209)] = 1, this.rotation = 0, this.objects = x, this[e(197)] = t, this[e(196)] = W[e(183)](t);
    let s = W[e(200)](t);
    this[e(208)] = s.width, this[e(209)] = s[e(209)];
  }
  [xt(186)](x, t) {
    const e = xt;
    this[e(208)] = x, this[e(209)] = t;
  }
  [xt(205)](x, t) {
    this.x = x, this.y = t;
  }
  [xt(206)](x, t) {
    const e = xt;
    this[e(195)] = x, this[e(180)] = t;
  }
  [xt(190)](x) {
    this.rotation = x;
  }
  [xt(179)](x) {
    const t = xt;
    let e = this, s = this[t(192)], i = this.positionNormals;
    this.rotation != 0 && (i = W[t(189)](this.positionNormals, this.rotation));
    let r = (o) => {
      const c = t;
      return { x: e.x + e[c(208)] * o.x * e[c(195)], y: e.y + e[c(209)] * o.y * e[c(180)] };
    };
    i = i[t(193)](r);
    function a(o) {
      const c = t;
      o[c(204)]((h, l) => {
        const f = c;
        s[l][f(182)](h.x, h.y);
      });
    }
    if (x != null) {
      let o = s[t(193)]((c) => ({ x: c.x, y: c.y }));
      x[t(210)] = o, x.to = i, x[t(184)] = a, this[t(181)].anime(x)[t(178)]();
    } else
      a(i);
    return this;
  }
}
function wn() {
  const n = ["10798884ZeVVau", "3357VyUkkD", "forEach", "255338ZyyxKg", "width", "allVirtualNodes", "11WJlgpU", "1560BhctQL", "children", "translateWithRecursive", "deep", "11950WqmbAp", "805020pVVpxA", "length", "10fxVtzb", "6vhdnZZ", "12929Nxggmm", "indexData", "233259usJBJg", "push", "1752280oDMAzh", "getLeafs", "translateTo"];
  return wn = function() {
    return n;
  }, wn();
}
(function(n, x) {
  const t = vn, e = n();
  for (; []; )
    try {
      if (parseInt(t(181)) / 1 + parseInt(t(166)) / 2 * (-parseInt(t(178)) / 3) + -parseInt(t(183)) / 4 + -parseInt(t(177)) / 5 * (parseInt(t(175)) / 6) + -parseInt(t(179)) / 7 * (parseInt(t(170)) / 8) + parseInt(t(187)) / 9 * (parseInt(t(174)) / 10) + parseInt(t(169)) / 11 * (parseInt(t(186)) / 12) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(wn, 256988);
function vn(n, x) {
  const t = wn();
  return vn = function(e, s) {
    return e = e - 166, t[e];
  }, vn(n, x);
}
function va(n, x = {}) {
  const t = vn;
  let e = n[t(180)], s = n[t(173)], i = n[t(184)](), r = 60, a = 80;
  for (let h = 0; h < i.length; h++) {
    let l = i[h], f = (h + 1) * r, y = s * a;
    l[t(185)](f, y);
  }
  for (let h = s - 1; h >= 0; h--) {
    let l = e[h];
    for (let f = 0; f < l[t(176)]; f++) {
      let y = l[f], _ = y[t(171)], b = y.x, P = h * a;
      if (_[t(176)] > 0 ? b = (_[0].x + _[_[t(176)] - 1].x) / 2 : f > 0 && (b = l[f - 1].x + l[f - 1][t(167)]), y.translateTo(b, P), f > 0 && y.x < l[f - 1].x + l[f - 1][t(167)]) {
        let v = l[f - 1].x + l[f - 1][t(167)], D = Math.abs(v - y.x);
        for (let S = f; S < l.length; S++)
          l[S][t(172)](D, 0);
      }
    }
  }
  let o = [];
  return n[t(168)][t(188)]((h) => {
    o[t(182)](h);
  }), o;
}
const K0 = Ex;
(function(n, x) {
  const t = Ex, e = n();
  for (; []; )
    try {
      if (-parseInt(t(191)) / 1 * (-parseInt(t(193)) / 2) + parseInt(t(173)) / 3 * (parseInt(t(159)) / 4) + -parseInt(t(178)) / 5 * (parseInt(t(176)) / 6) + -parseInt(t(156)) / 7 * (-parseInt(t(188)) / 8) + -parseInt(t(165)) / 9 * (-parseInt(t(172)) / 10) + parseInt(t(162)) / 11 + parseInt(t(186)) / 12 * (-parseInt(t(183)) / 13) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(kn, 889731);
function Ex(n, x) {
  const t = kn();
  return Ex = function(e, s) {
    return e = e - 156, t[e];
  }, Ex(n, x);
}
function kn() {
  const n = ["update", "217896ucdDsB", "push", "circleLayout", "522151XEfucE", "vertexes", "2AcqglZ", "graphSystem", "has", "21BkulCP", "startAngle", "graph is not a tree", "2658984VJXhrS", "add", "radius", "13121878lfMkJi", "object", "getCircleLayoutPositions", "28161LXApKK", "treeLayout", "length", "filter", "endAngle", "createMinimalSpanningTree", "travelNext", "2390uVoacn", "3SyRszy", "toTree", "animationSystem", "783318YUwyDi", "traverse", "5ZQtzku", "map", "cos", "shapeLayout", "angleScale", "28457689hjCANr", "isTree", "radiusScale", "12gdvhUz"];
  return kn = function() {
    return n;
  }, kn();
}
class $i {
  constructor(x, t) {
    const e = Ex;
    this[e(175)] = x, this[e(194)] = t;
  }
  [K0(181)](x, t) {
    const e = K0;
    let s = new Wx(x, t);
    return s[e(175)] = this[e(175)], s;
  }
  [K0(190)](x, t = {}) {
    const e = K0;
    !x[e(184)]() && (x = qt[e(170)](x));
    let s = x.traverse(null)[e(168)]((c) => c instanceof Tt), i = s[0], r = this.getCircleLayoutPositions(i, t), a = s[e(179)]((c) => c[e(163)]), o = new Wx(a, r);
    return o.animationSystem = this[e(175)], o;
  }
  [K0(166)](x) {
    const t = K0;
    !x[t(184)]() && (x = qt[t(170)](x));
    let e = x[t(177)](null)[t(168)]((o) => o instanceof Tt), s = this[t(194)][t(174)](x), i = va(s), r = e.map((o) => o[t(163)]), a = new Wx(r, i);
    return a[t(175)] = this.animationSystem, a;
  }
  travelTree(x, t) {
    const e = K0;
    if (!x[e(184)]())
      throw new Error(e(158));
    return t == null && (t = x[e(192)][0]), x[e(171)](t);
  }
  [K0(164)](x, t = {}) {
    const e = K0;
    t.cx = t.cx || 0, t.cy = t.cy || 0, t[e(161)] = t.radius || 200, t[e(157)] = t[e(157)] || 0, t.endAngle = t[e(169)] || 2 * Math.PI, t.radiusScale = t[e(185)] || 0.5, t[e(182)] = t.angleScale || 1, t.endAngle > 2 * Math.PI && (t.endAngle = t[e(169)] % (2 * Math.PI));
    let s = [], i = /* @__PURE__ */ new Set(), r = [];
    function a(o, c, h, l, f, y, _) {
      const b = e;
      if (i[b(195)](o))
        return;
      r.push(o.object.id), i[b(160)](o), s[b(189)]({ x: c, y: h });
      let P = o.getAdjacentList(), v = P[b(167)];
      if (_ > 1 && (v -= 1), v <= 0)
        return;
      let D = f, S = y - f, C = S;
      S < 2 * Math.PI && (v -= 1), v != 0 && (C /= v), _ > 1 && (S < 2 * Math.PI ? D -= S * 0.5 : S == 2 * Math.PI && v > 1 && v % 2 == 0 && (D += C * 0.5));
      for (let Z = 0; Z < P[b(167)]; Z++) {
        let P0 = P[Z], T0 = D + Z * C, It = c + l * Math[b(180)](T0), $0 = h + l * Math.sin(T0);
        t[b(187)] && t[b(187)](t, x[b(163)], _), a(P0, It, $0, l * t.radiusScale, T0, T0 + S, _ + 1);
      }
    }
    return t.update && t[e(187)](t, x[e(163)], 0), a(x, t.cx, t.cy, t[e(161)], t[e(157)], t.endAngle, 1), s;
  }
}
const g = Gt;
(function(n, x) {
  const t = Gt, e = n();
  for (; []; )
    try {
      if (parseInt(t(214)) / 1 + parseInt(t(189)) / 2 * (parseInt(t(348)) / 3) + -parseInt(t(164)) / 4 + -parseInt(t(300)) / 5 + -parseInt(t(281)) / 6 * (parseInt(t(293)) / 7) + -parseInt(t(318)) / 8 + parseInt(t(166)) / 9 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Pn, 996868);
function Gt(n, x) {
  const t = Pn();
  return Gt = function(e, s) {
    return e = e - 160, t[e];
  }, Gt(n, x);
}
function Pn() {
  const n = ["debugPanel", "index", "position", "remove", "draggable", "px)", "6jxkqQi", "getToolbarHeight", "normal", "hasChildren", "clickHandler", "setMode", "3055668ReBTmj", "toolbar", "32631498FXXkYJ", "getChildren", "exporterSystem", "_destory", "appendChild", "translateToCenter", "hasListener", "backgroundPosition", "push", "default", "areaBox", "render", "touchendHandler", "disconnect", "getElementsByTagName", "now", "edit", "touchstartHandler", "resize", "clearCache", "isDebug", "injectCss", "addAll", "648040fCujpX", "style", "mouseEnabled", "mouseup", "previous", "add", "forEach", "getCursor", "isRightButton", "update", "translateTo", "_initEvent", "removeAll", "1719720000000", "backgroundSize", "grabbing", "show", "saveImageInfo", "metaKey", "Layer_", "random", "zIndex", "rand", "round", "relative", "901784wnhIhG", "fullWindow", "background", "mode", "touchwheelHandler", "mouseupHandler", "isDraging", "currentTime", "mousedragHandler", "indexOf", "layersContainer", "domElement", "name", "getHeigth", "drag", "preventDefault", "fullScreen", "saveAsLocalImage", "union", "touchend", "setToolbar", "mousemoveHandler", "hideToolbar", "destory", "zoom", "pickUpViewLayers", "filter", "the dom element is null.", "min", "offsetWidth", "100%", "createElement", "_init", "buttons", "toLayerRect", "mousedownHandler", "getCurrentLayer", "offsetHeight", "effectSystem", "download", "mouseDownY", "showToolbar", "loaded", "touchmoveHandler", "observe", "getDom", "handlerLayer", "_computeLayer", "forceUpdate", "defaultPrevented", "overview", "destoryed", "addChild", "context", "mouseDownX", "timeline", "getAABB", "hide", "serializerSystem", "innerHTML", "dragover", "visible", "mouseenterHandler", "hideDebugPanel", "mouseoutHandler", "hideOverview", "animationSystem", "174aSFQKI", "ctrlKey", "dragEndHandler", "removeChild", "resizeTo", "showDebugPanel", "abs", "type", "dispatchEvent", "randomNum", "select", "contentRect", "388577ekBlop", "setCursor", "modeChange", "wheelDelta", "dragHandle", "graphSystem", "div", "2689530vpLIhW", "string", "pickUpByRect", "updateSize", "isMouseOn", "calc(100% - ", "dirty", "styleSystem", "zoomFullStage", "addEventListener", "mouseoverTarget", "getHeight", "getImageData", "keyboard", "renderSystem", "_resizeObserver", "ResizeObserver", "head", "10136288zCvQLR", "canvas", "Stage has been destroyed already.", "zoomAfter", "inputSystem", "editor", "width", "isDragEnd", "pickedObject", "selectedGroup", "grab", "cancelZoom", "isDragStart", "zoomIn", "stage", "data", "height", "dblclickHandler", "length", "children", "layer_container", "wheelZoom", "_resizeTimer", "call"];
  return Pn = function() {
    return n;
  }, Pn();
}
let ri = Date[g(181)](), ai = ![];
class ka extends Y0 {
  constructor(x) {
    const t = g;
    super(), this[t(337)] = [], this[t(275)] = ![], this[t(217)] = t(160), this[t(265)] = ![], this[t(313)] = new Yi(this), this[t(322)] = new qs(), this[t(327)] = new Vi(), this[t(246)](x), this[t(187)](), this.behaviourSystem = new ma(this), this[t(307)] = new fa(this), this.animationSystem = new Qi(), this[t(252)] = new Ji(this.animationSystem), this[t(298)] = new qt(), this.layoutSystem = new $i(this[t(280)], this[t(298)]), this[t(314)] = new ba(this), this[t(168)] = new pa(this), this[t(272)] = new Ot(), X0[t(309)](t(256), () => this[t(198)]());
  }
  [g(187)]() {
    const x = g;
    if (ai == ![]) {
      ai = !![];
      let t = document.head || document[x(180)](x(317))[0], e = document[x(245)](x(190));
      e.textContent = jr, t[x(170)](e);
    }
  }
  [g(246)](x) {
    const t = g;
    let e = this;
    document.oncontextmenu = function() {
      const r = Gt;
      return !e[r(322)][r(304)];
    }, e.domElement = Aa(x);
    const s = document[t(245)](t(299));
    e.layersContainer = s, e[t(342)] = new Br(e), yt[t(186)] && e[t(342)].show(), e.setToolbar(new Gi(e)), s.classList[t(194)](t(338)), s[t(190)][t(344)] = t(213), s[t(190)][t(324)] = t(244), e[t(225)][t(170)](s), e[t(324)] = s[t(243)], e[t(334)] = s.clientHeight;
    {
      const r = new ls(e);
      e.handlerLayer = r;
      const a = r.render.canvas;
      a.style[t(210)] = "" + r.zIndex, this[t(224)].appendChild(a);
    }
    La(e);
    let i = parseInt("1719720000000");
    Date[t(181)]() > i || e[t(322)][t(200)](e), e.on(t(274), function(r) {
      r[t(229)]();
    });
  }
  [g(286)]() {
    const x = g;
    this[x(342)][x(205)]();
  }
  [g(277)]() {
    const x = g;
    this[x(342)][x(271)]();
  }
  showOverview(x) {
    const t = g;
    let e = this;
    this.renderSystem[t(269)][t(221)] > parseInt("1719720000000") || (e[t(264)] == null && (e.overview = new Dr(e)), e[t(264)].css(x), e[t(264)][t(205)]());
  }
  _updateOverview() {
    const x = g;
    this[x(264)] != null && this.overview[x(198)]();
  }
  [g(279)]() {
    const x = g;
    this.overview != null && this.overview[x(271)]();
  }
  getToolbarHeight() {
    const x = g;
    return this[x(165)] == null ? 0 : (this[x(290)] = Math[x(209)](), this.toolbar[x(227)]());
  }
  zoomOut(x = 0.8) {
    return this.zoom(x, x), this;
  }
  [g(331)](x = 1.25) {
    return this.zoom(x, x), this;
  }
  [g(238)](x, t, e, s) {
    const i = g;
    if (this[i(172)](L0[i(238)])) {
      let r = new Event(L0[i(238)], { cancelable: !![] });
      if (this.dispatchEvent(r), r.defaultPrevented == !![])
        return;
    }
    if (Ea(this, x, t, e, s), this.hasListener(L0.zoomAfter)) {
      let r = new Event(L0[i(321)], { cancelable: !![] });
      if (this[i(289)](r), r.defaultPrevented == !![])
        return;
    }
  }
  [g(329)]() {
    this[g(167)]().forEach(function(t) {
      t.cancelZoom(), t.update();
    });
  }
  [g(308)]() {
    Ca(this);
  }
  [g(171)]() {
    const x = g;
    this[x(167)]()[x(195)](function(t) {
      t.centerBy();
    });
  }
  [g(266)](x) {
    const t = g;
    x[t(210)] = this[t(337)][t(336)], x[t(332)] = this, x[t(285)](this[t(324)], this[t(334)]), x[t(306)] = !![], x.name == null && (x[t(226)] = t(208) + x[t(210)]), this[t(337)][t(174)](x);
    const e = x[t(177)][t(319)];
    e[t(190)][t(210)] = "" + x[t(210)], this[t(224)][t(170)](e);
    const s = x[t(190)];
    s != null && (e[t(190)][t(216)] = s[t(216)], e.style[t(173)] = s[t(173)], e.style[t(203)] = s[t(203)]), this[t(307)][t(261)](x);
  }
  getChildren() {
    return this.children;
  }
  [g(284)](x) {
    const t = g;
    x[t(177)][t(319)][t(345)]();
    let e = this[t(337)][t(223)](x);
    return e == -1 ? this : (W.removeAt(this.children, e), x[t(332)] = null, this);
  }
  [g(205)]() {
    const x = g;
    this.visible = !![], this.getChildren()[x(195)](function(t) {
      t[x(205)]();
    }), this[x(198)]();
  }
  [g(271)]() {
    const x = g;
    this[x(275)] = ![], this[x(167)]().forEach(function(t) {
      t[x(271)]();
    });
  }
  [g(198)]() {
    const x = g;
    this[x(260)].update(), this[x(167)]().forEach(function(t) {
      t[x(198)]();
    });
  }
  [g(262)]() {
    const x = g;
    this[x(260)][x(262)](), this.getChildren()[x(195)](function(t) {
      t[x(262)]();
    });
  }
  [g(206)]() {
    return this[g(168)].saveImageInfo();
  }
  [g(231)]() {
    this[g(168)].saveAsLocalImage();
  }
  on(x, t) {
    const e = g;
    return this.on[e(343)] = ri, this[e(309)](x, t);
  }
  [g(215)]() {
    const x = g;
    if (this.hasListener(L0[x(215)])) {
      let t = new Event(L0[x(215)], { cancelable: !![] });
      if (this[x(289)](t), t[x(263)] == !![])
        return;
    }
    G0.fullWindow(this[x(225)]);
  }
  [g(230)]() {
    G0[g(230)](this.domElement);
  }
  [g(255)]() {
    const x = g;
    if (this.toolbar == null)
      return;
    this[x(165)].show();
    let t = x(305) + this.getToolbarHeight() + x(347);
    this[x(224)].style[x(334)] = t;
  }
  [g(236)]() {
    const x = g;
    if (this[x(165)] == null || ri > parseInt(x(202)))
      return;
    this.toolbar[x(271)]();
    let t = x(305) + this[x(349)]() + x(347);
    this[x(224)][x(190)][x(334)] = t;
  }
  [g(234)](x) {
    const t = g;
    this[t(165)] != null && this[t(165)][t(345)](), this[t(225)][t(170)](x[t(259)]());
    let e = t(305) + this[t(349)]() + t(347);
    this[t(224)].style[t(334)] = e, this.toolbar = x;
  }
  [g(163)](x) {
    const t = g;
    if (this[t(172)](L0.modeChange)) {
      let e = new Event(L0[t(295)], { cancelable: !![] });
      if (e.mode = x, this[t(289)](e), e[t(263)] == !![])
        return;
    }
    Oa(this, x), x == O0[t(228)] ? this.setCursor(t(328)) : this.setCursor(t(175));
  }
  [g(249)](x) {
    const t = g, e = this[t(322)];
    if (this[t(217)] == O0[t(228)]) {
      this.setCursor(t(204));
      return;
    }
    let s = this;
    if (s.inputSystem.pickedObject = s[t(239)](), s[t(322)][t(326)] != null) {
      Sa(s, e);
      return;
    } else
      !(x[t(282)] || x[t(207)]) && s[t(327)].removeAll();
  }
  [g(222)](x) {
    const t = g, e = this[t(322)], s = this.handlerLayer, i = this.mode, r = this.inputSystem[t(326)], a = this[t(327)], o = this[t(239)]();
    this.inputSystem.mouseoverTarget = o;
    const c = x[t(247)] == 2, h = e[t(330)], l = r != null && r[t(191)] && r[t(346)], f = this[t(167)]();
    for (let y = 0; y < f.length; y++) {
      const _ = f[y];
      if (_.mouseEnabled) {
        if (c || i == O0[t(228)]) {
          h && this[t(294)](t(204)), _[t(297)](e);
          continue;
        }
        if (l) {
          a[t(222)](e);
          return;
        }
        i == O0[t(291)] || i == O0[t(182)] ? Pa(s, e) : _[t(297)](e);
      }
    }
  }
  mouseupHandler(x) {
    const t = g, e = this[t(322)];
    let s = this;
    const i = this.getChildren(), r = e[t(197)]();
    for (let c = 0; c < i[t(336)]; c++) {
      const h = i[c];
      h[t(346)] && e.isDraging && h[t(283)](e);
    }
    if (this[t(217)] == O0[t(228)]) {
      this[t(294)](t(328));
      return;
    }
    this[t(294)](t(175));
    let a = this[t(322)][t(326)], o = this.handlerLayer;
    o[t(176)].hide(), o.areaBox[t(285)](0, 0), a && a[t(191)] && (e.type == t(192) ? a[t(219)](e) : e[t(288)] == t(233) && a[t(178)](e), e.previous[t(220)] && a[t(346)] && r == ![] && s[t(327)].mousedragEndHandler(e));
  }
  [g(278)](x) {
    const t = g, e = this[t(322)];
    this[t(260)][t(278)](e), this[t(327)][t(278)](e);
  }
  [g(162)](x) {
    const t = g, e = this[t(322)];
    let s = e[t(326)];
    s && !e.previous[t(325)] && s[t(162)](e);
  }
  [g(335)](x) {
    const t = g, e = this[t(322)];
    let s = e.pickedObject;
    s && !e[t(193)][t(325)] && s.dblclickHandler(e);
  }
  [g(235)](x) {
    const t = g;
    if (this[t(217)] == O0[t(228)]) {
      this.setCursor(t(328));
      return;
    }
    const e = this[t(322)];
    let s = e[t(310)], i = this[t(239)]();
    s !== i && s != null && s.mouseoutHandler && s.mouseoutHandler(e), i != null && (s !== i ? i.mouseenterHandler && i[t(276)](e) : i[t(235)] && i[t(235)](e)), e[t(310)] = i;
  }
  mousewheelHandler(x) {
    const t = g, e = this[t(322)];
    if (e.wheelZoom != !![])
      return;
    (x[t(296)] == null ? x.detail : x[t(296)]) > 0 ? this[t(238)](1.25, 1.25, e.x, e.y) : this[t(238)](0.8, 0.8, e.x, e.y);
  }
  [g(276)](x) {
  }
  [g(183)](x) {
    this[g(249)](x);
  }
  [g(257)](x) {
    this[g(222)](x);
  }
  [g(218)](x) {
  }
  [g(178)](x) {
    this.mouseupHandler(x);
  }
  [g(239)](x = ![]) {
    const t = g;
    let e = this[t(167)]();
    for (let s = e[t(336)] - 1; s >= 0; s--) {
      let i = e[s];
      if (!(i[t(275)] && i[t(191)]))
        continue;
      let r = i.pickUpChild(x);
      if (r != null)
        return r;
    }
    return null;
  }
  [g(196)]() {
    const x = g;
    return this[x(260)][x(177)][x(196)]();
  }
  [g(294)](x) {
    const t = g;
    return this[t(260)][t(177)][t(294)](x);
  }
  [g(253)](x) {
    const t = g;
    return this[t(168)][t(253)](x);
  }
  [g(291)](x) {
    const t = g;
    this.selectedGroup[t(201)](), this.selectedGroup.addAll(x);
  }
  [g(250)]() {
    const x = g;
    return this[x(337)][x(240)]((t) => t[x(275)] == !![])[0];
  }
  [g(211)](x, t) {
    const e = g;
    return x == null && (x = -this[e(324)] * 0.5), t == null && (t = this[e(334)] * 0.5), Math[e(212)](Math[e(209)]() * (t - x) + x);
  }
  [g(237)](x) {
    const t = g;
    if (this[t(265)])
      throw new Error(t(320));
    this[t(265)] = !![], this[t(315)] && this[t(315)][t(179)](), this[t(340)] && clearInterval(this[t(340)]), this[t(260)]._destory(), this[t(337)].forEach((e) => {
      e[t(169)]();
    }), this.domElement[t(273)] = "", x != ![] && X0[t(185)]();
  }
}
function Pa(n, x) {
  const t = g;
  let e = n.stage, s = x[t(268)], i = x[t(254)], r = x.x, a = x.y, o = Math[t(242)](s, r), c = Math[t(242)](i, a), h = Math.abs(s - r), l = Math[t(287)](i - a);
  const f = n[t(176)];
  f[t(205)](), f[t(285)](h, l), f[t(199)](o, c), f.translateWith(h * 0.5, l * 0.5);
  let y = new V(o, c, f.width, f[t(334)]), _ = n[t(332)].getChildren();
  for (var b = 0; b < _.length; b++) {
    let P = _[b];
    if (!P[t(161)]())
      continue;
    let v = P[t(248)](y), D = P[t(302)](v);
    e[t(327)][t(188)](D);
  }
}
function Sa(n, x) {
  const t = g;
  let e = n.inputSystem[t(326)], s = x.event;
  x[t(288)] == "mousedown" ? e[t(249)].call(e, s) : s[t(288)] == "touchstart" && e.touchstartHandler[t(341)](e, s);
  const i = s.ctrlKey || s[t(207)];
  n.selectedGroup.has(e) ? i && n.selectedGroup[t(345)](e) : (!i && n[t(327)][t(201)](), n.selectedGroup[t(194)](e));
}
function oi(n, x, t) {
  const e = g;
  n[e(324)] = x, n.height = t, n[e(260)].updateSize(x, t), n[e(167)]()[e(195)](function(i) {
    i[e(303)](x, t);
  });
  let s = new Event(L0[e(184)]);
  n[e(289)](s);
}
function Ea(n, x, t, e, s) {
  const i = g;
  (e == null || s == null) && (e = n[i(324)] / 2, s = n[i(334)] / 2), n[i(167)]()[i(195)](function(r) {
    const a = i;
    !r[a(191)] || !r[a(339)] || (r.zoom(x, t, e, s), r[a(198)]());
  }), n.handlerLayer[i(198)]();
}
function La(n) {
  const x = g, t = n[x(224)];
  if (t.style[x(334)] = x(305) + n.getToolbarHeight() + x(347), window[x(316)]) {
    const s = new ResizeObserver((i) => {
      const r = x;
      for (let a of i) {
        let o = a[r(292)];
        t.style[r(334)] = r(305) + n[r(349)]() + r(347), oi(n, o[r(324)], o[r(334)]);
      }
    });
    s[x(258)](t), n[x(315)] = s;
    return;
  }
  let e = setInterval(function() {
    const s = x;
    let i = t[s(243)], r = t[s(251)];
    (n[s(324)] != i || n[s(334)] != r) && (t[s(190)][s(334)] = s(305) + n.getToolbarHeight() + s(347), oi(n, i, r));
  }, 500);
  n[x(340)] = e;
}
function Ca(n) {
  const x = g;
  let t = null;
  n.getChildren().forEach(function(o) {
    const c = Gt;
    t == null ? t = o[c(270)](!![]) : t = V[c(232)](t, o[c(270)](!![]));
  });
  let e = n[x(324)] / t.width, s = n[x(334)] / t.height, i = Math[x(242)](e, s), r = 0, a = 0;
  n[x(238)](i, i, r, a), n[x(171)]();
}
function Oa(n, x) {
  const t = g;
  let e = n[t(217)];
  n[t(217)] = x;
  let s = { type: L0[t(295)], oldMode: e, newMode: x };
  n.editor && n[t(323)][t(198)](), n[t(289)](s);
}
function Aa(n) {
  const x = g;
  if (typeof n == x(301) && (n = document.getElementById(n), n == null))
    throw new Error("the dom element id is not found id:" + n);
  if (n == null)
    throw new Error(x(241));
  return n.style[x(344)] = x(213), n;
}
var C0 = En;
(function(n, x) {
  for (var t = En, e = n(); []; )
    try {
      var s = parseInt(t(425)) / 1 + -parseInt(t(417)) / 2 + -parseInt(t(436)) / 3 + parseInt(t(418)) / 4 * (parseInt(t(433)) / 5) + parseInt(t(430)) / 6 + -parseInt(t(419)) / 7 * (parseInt(t(429)) / 8) + parseInt(t(422)) / 9;
      if (s === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Sn, 493447);
function Sn() {
  var n = ["820856YTmHHS", "665432BRolut", "329ubecqv", "concat", "FoldLink", "8541000gnetgz", "direction", "prototype", "303036ftyNNc", "horizontal", "updatePoints", "_calcAZ", "149064vnrAgd", "2765982oYyPth", "getOwnPropertyDescriptor", "middle", "20NZqWqM", "serializers", "endArrow", "1796517WkKjoW", "className"];
  return Sn = function() {
    return n;
  }, Sn();
}
var Ma = Object.defineProperty, Ta = Object[C0(431)], ci = (n, x, t, e) => {
  for (var s = e > 1 ? void 0 : e ? Ta(x, t) : x, i = n.length - 1, r; i >= 0; i--)
    (r = n[i]) && (s = (e ? r(x, t, s) : r(s)) || s);
  return e && s && Ma(x, t, s), s;
};
function En(n, x) {
  var t = Sn();
  return En = function(e, s) {
    e = e - 417;
    var i = t[e];
    return i;
  }, En(n, x);
}
class Lx extends Y {
  constructor(x, t, e, s, i) {
    var r = C0;
    super(x, t, e, s, i), this[r(423)] = r(426);
  }
  [C0(427)]() {
    var x = C0;
    const t = this[x(428)](), e = t[0], s = t[1];
    let i;
    return e.x == s.x || e.y == s.y ? i = A[x(432)](e, s) : this.direction == Ft[x(426)] ? i = { x: s.x, y: e.y } : i = { x: e.x, y: s.y }, this.points = [e, i, s], this[x(435)] && (this[x(435)].origin[0] = 1), this.points;
  }
}
ci([I(C0(421))], Lx.prototype, C0(437), 2), ci([I(Y[C0(424)][C0(434)][C0(420)]([C0(423)]))], Lx[C0(424)], C0(434), 2);
const J = On;
(function(n, x) {
  const t = On, e = n();
  for (; []; )
    try {
      if (-parseInt(t(375)) / 1 * (parseInt(t(371)) / 2) + parseInt(t(376)) / 3 * (parseInt(t(384)) / 4) + parseInt(t(392)) / 5 + -parseInt(t(398)) / 6 + -parseInt(t(403)) / 7 + parseInt(t(380)) / 8 + -parseInt(t(370)) / 9 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Cn, 666565);
var Fa = Object.defineProperty, Ba = Object[J(400)], Da = (n, x, t, e) => {
  const s = J;
  for (var i = e > 1 ? void 0 : e ? Ba(x, t) : x, r = n[s(381)] - 1, a; r >= 0; r--)
    (a = n[r]) && (i = (e ? a(x, t, i) : a(i)) || i);
  return e && i && Fa(x, t, i), i;
};
class Ln extends Y {
  constructor(x, t, e, s, i) {
    const r = J;
    super(x, t, e, s, i), this[r(397)] = "horizontal";
  }
  [J(378)](x, t) {
    const e = J;
    let s = t[0], i = t[1], r = this[e(369)](s, i), a = r.x, o = r.y;
    x[e(382)](s.x, s.y), x[e(406)](a, o, i.x, i.y);
  }
  [J(388)](x) {
    const t = J;
    super[t(388)](x);
    let e = this[t(386)];
    if (e) {
      x[t(383)] && (this[t(393)] = { x: e.x, y: e.y });
      let s = this[t(373)][t(394)]()[t(385)](), i = s[t(405)](x.dx, x.dy), r = i.x, a = i.y;
      e.x = this[t(393)].x + r, e.y = this[t(393)].y + a;
    }
  }
  [J(369)](x, t) {
    const e = J;
    if (this.ctrlPoint != null)
      return this[e(386)];
    let s = (x.x + t.x) / 2, i = (x.y + t.y) / 2;
    return this[e(397)] == Ft[e(387)] ? i += (t.y - x.y) / 2 : i -= (t.y - x.y) / 2, { x: s, y: i };
  }
  [J(396)](x) {
    const t = J;
    let e = this[t(395)](), s = e[0], i = e[1], r = this.getCtrlPoint(s, i), a = A.between(s, r, x), o = A[t(404)](r, i, x);
    return A[t(404)](a, o, x);
  }
  [J(374)]() {
    this.ctrlPoint = void 0;
  }
}
function Cn() {
  const n = ["CurveLink", "5992160fIFlhX", "_ctrlPoint", "getStageTransform", "getPoints", "getPoint", "direction", "556788LOmCSe", "middle", "getOwnPropertyDescriptor", "serializers", "end", "2905609bWNXLD", "between", "vec", "quadraticCurveTo", "getCtrlPoint", "8304237qPDpKN", "770274GzghSx", "points", "parent", "resetCtrlPoint", "1QIOEIO", "27hPZpeq", "concat", "drawPoints", "begin", "406568lahzcZ", "length", "moveTo", "isDragStart", "548012bPtqvL", "invert", "ctrlPoint", "horizontal", "mousedragHandler", "getAnchorPoints", "prototype"];
  return Cn = function() {
    return n;
  }, Cn();
}
Da([I(J(391))], Ln[J(390)], "className", 2);
const Zt = {};
Zt[E.begin] = function() {
  return this[J(372)][0];
}, Zt[E[J(402)]] = function() {
  return this[J(372)][1];
}, Zt[E.center] = function() {
  const n = J;
  return A[n(399)](this[n(372)][0], this[n(372)][1]);
}, Zt[E.ctrlPoint] = function() {
  const n = J;
  return this[n(386)] != null ? this.ctrlPoint : this.getCtrlPoint(this[n(372)][0], this.points[1]);
}, V0(Ln[J(390)], { DefaultPositions: { value: Zt }, serializers: { value: Y.prototype[J(401)][J(377)]([J(397), J(386)]) } }), Ln[J(390)][J(389)] = function() {
  const n = J;
  return [n(379), n(402), "ctrlPoint"];
};
function On(n, x) {
  const t = Cn();
  return On = function(e, s) {
    return e = e - 369, t[e];
  }, On(n, x);
}
const g0 = An;
(function(n, x) {
  const t = An, e = n();
  for (; []; )
    try {
      if (-parseInt(t(282)) / 1 * (-parseInt(t(263)) / 2) + -parseInt(t(277)) / 3 + -parseInt(t(281)) / 4 + parseInt(t(275)) / 5 * (-parseInt(t(279)) / 6) + parseInt(t(276)) / 7 * (-parseInt(t(267)) / 8) + parseInt(t(273)) / 9 * (-parseInt(t(259)) / 10) + parseInt(t(283)) / 11 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Mn, 198874);
var ja = Object[g0(264)], za = Object[g0(284)], ys = (n, x, t, e) => {
  const s = g0;
  for (var i = e > 1 ? void 0 : e ? za(x, t) : x, r = n[s(255)] - 1, a; r >= 0; r--)
    (a = n[r]) && (i = (e ? a(x, t, i) : a(i)) || i);
  return e && i && ja(x, t, i), i;
};
function An(n, x) {
  const t = Mn();
  return An = function(e, s) {
    return e = e - 255, t[e];
  }, An(n, x);
}
function Mn() {
  const n = ["363005MUrYAh", "130697OubgnT", "985563PWLlwB", "height", "24IzkJAO", "className", "224312bbFfMm", "256xUxSqC", "10443301dOhLHc", "getOwnPropertyDescriptor", "length", "concat", "arrowsSize", "_textHeight", "1460HaJqVk", "drawShape", "width", "resizeTo", "2384FXNbIq", "defineProperty", "top", "left", "48RNiaet", "resizeToFitText", "serializers", "_textWidth", "lineTo", "TipNode", "16560kQyRbz", "prototype"];
  return Mn = function() {
    return n;
  }, Mn();
}
class Xx extends gt {
  constructor(x, t = 0, e = 0, s = 1, i = 1) {
    super(x, t, e, s, i);
  }
  [g0(268)]() {
    const x = g0;
    super.calcTextSize();
    let e = this._style.calcGap();
    this[x(262)](this[x(270)] + e, this[x(258)] + e + this[x(257)]);
  }
  [g0(260)](x) {
    const t = g0;
    let e = this[t(266)], s = this[t(265)], i = this[t(261)], r = this[t(257)], a = this[t(278)] - r, o = 0;
    x.moveTo(e, s), x.lineTo(e + i, s), x.lineTo(e + i, s + a), x.lineTo(o + (r - 2), s + a), x[t(271)](o, s + a + r), x.lineTo(o - (r - 2), s + a), x[t(271)](e, s + a), x[t(271)](e, s);
  }
}
ys([I(g0(272))], Xx[g0(274)], g0(280), 2), ys([I(8)], Xx.prototype, "arrowsSize", 2), ys([I(gt[g0(274)][g0(269)][g0(256)](["arrowsSize"]))], Xx[g0(274)], g0(269), 2);
const G = Fn;
(function(n, x) {
  const t = Fn, e = n();
  for (; []; )
    try {
      if (-parseInt(t(305)) / 1 + parseInt(t(288)) / 2 * (-parseInt(t(301)) / 3) + parseInt(t(291)) / 4 * (-parseInt(t(280)) / 5) + parseInt(t(292)) / 6 + parseInt(t(299)) / 7 + -parseInt(t(276)) / 8 * (-parseInt(t(298)) / 9) + parseInt(t(287)) / 10 * (parseInt(t(289)) / 11) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Tn, 280631);
var Na = Object[G(294)], Ra = Object[G(281)], gs = (n, x, t, e) => {
  const s = G;
  for (var i = e > 1 ? void 0 : e ? Ra(x, t) : x, r = n[s(279)] - 1, a; r >= 0; r--)
    (a = n[r]) && (i = (e ? a(x, t, i) : a(i)) || i);
  return e && i && Na(x, t, i), i;
};
function Tn() {
  const n = ["1507QDWrpb", "serializers", "20vkRtFG", "494460wxIpHs", "center", "defineProperty", "className", "horizontal", "updatePoints", "121437zfLiiv", "3612504qjszpY", "FlexionalLink", "2676aHoITI", "endArrow", "points", "begin", "149720qquwno", "origin", "fold2", "direction", "8GOjabm", "_calcAZ", "prototype", "length", "49655GwJPbG", "getOwnPropertyDescriptor", "concat", "offsetGap", "getFold2", "end", "getFold1", "3910ijYfaZ", "416oPNGKE"];
  return Tn = function() {
    return n;
  }, Tn();
}
function Fn(n, x) {
  const t = Tn();
  return Fn = function(e, s) {
    return e = e - 274, t[e];
  }, Fn(n, x);
}
class ft extends Y {
  constructor(x, t, e, s, i) {
    super(x, t, e, s, i);
  }
  [G(286)](x, t) {
    const e = G;
    let s = (t.y - x.y) / 2, i = (t.x - x.x) / 2;
    return this[e(275)] == Ft.horizontal ? { x: x.x + i, y: x.y } : { x: x.x, y: x.y + s };
  }
  [G(284)](x, t) {
    const e = G;
    let s = (t.y - x.y) / 2, i = (t.x - x.x) / 2;
    return this[e(275)] == Ft.horizontal ? { x: t.x - i, y: t.y } : { x: t.x, y: t.y - s };
  }
  [G(297)]() {
    const x = G, t = this[x(277)](), e = t[0], s = t[1];
    let i = this.getFold1(e, s), r = this[x(284)](e, s), a = { x: (i.x + r.x) / 2, y: (i.y + r.y) / 2 };
    const o = [e, i, a, r, s];
    if (this.points = o, this[x(302)]) {
      let c = o[x(279)] - 2;
      this[x(302)][x(306)][0] = c;
    }
    return o;
  }
}
gs([I(G(300))], ft.prototype, G(295), 2), gs([I(Ft[G(296)])], ft[G(278)], G(275), 2), gs([I(44)], ft[G(278)], G(283), 2);
const Et = {};
Et[E[G(304)]] = function() {
  return this[G(303)][0];
}, Et[E.fold1] = function() {
  return this[G(303)][1];
}, Et[E[G(293)]] = function() {
  return this[G(303)][2];
}, Et[E[G(274)]] = function() {
  return this[G(303)][3];
}, Et[E[G(285)]] = function() {
  return this[G(303)][4];
}, V0(ft[G(278)], { DefaultPositions: { value: Et }, serializers: { value: Y[G(278)][G(290)][G(282)]([G(275), G(283)]) } });
var K = Dn;
(function(n, x) {
  for (var t = Dn, e = n(); []; )
    try {
      var s = -parseInt(t(198)) / 1 * (parseInt(t(186)) / 2) + -parseInt(t(204)) / 3 + -parseInt(t(181)) / 4 + parseInt(t(213)) / 5 * (-parseInt(t(177)) / 6) + parseInt(t(190)) / 7 + -parseInt(t(214)) / 8 * (parseInt(t(199)) / 9) + parseInt(t(174)) / 10;
      if (s === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Bn, 764942);
var Ha = Object[K(203)], Wa = Object[K(202)], Xa = (n, x, t, e) => {
  for (var s = e > 1 ? void 0 : e ? Wa(x, t) : x, i = n.length - 1, r; i >= 0; i--)
    (r = n[i]) && (s = (e ? r(x, t, s) : r(s)) || s);
  return e && s && Ha(x, t, s), s;
};
class qx extends O {
  constructor(x, t = 0, e = 0, s = 1, i = 1) {
    var r = K;
    super(), this.isPlaying = ![], this[r(195)] = !![], this[r(187)] = x, this.x = t || 0, this.y = e || 0, this[r(182)] = s || 0, this[r(210)] = i || 0;
  }
  showCover() {
    this.isPlaying = ![];
  }
  [K(194)]() {
    var x = K;
    this[x(192)] = !![], this[x(185)][x(194)]();
  }
  [K(196)]() {
    var x = K;
    this[x(185)][x(196)]();
  }
  [K(184)](x) {
    var t = K;
    this._videoSrc = x, this[t(185)] = G0[t(179)](x, function() {
    }), this[t(185)][t(182)] = this[t(182)], this.video[t(210)] = this[t(210)];
  }
  [K(205)](x) {
    var t = K;
    this.video[t(197)](t(194), x, ![]);
  }
  [K(201)](x) {
    var t = K;
    this.video.addEventListener(t(196), x, ![]);
  }
  [K(211)](x) {
    var t = K;
    this.video[t(197)](t(191), x, ![]);
  }
  [K(206)](x) {
    var t = K;
    if (x[t(175)](), x[t(208)](this.left, this.top, this[t(182)], this.height), this[t(185)] != null) {
      this.video[t(182)] != this[t(182)] && (this[t(185)][t(182)] = this[t(182)], this[t(185)].height = this[t(210)]);
      let e = this.isPlaying ? this[t(185)] : this[t(212)];
      e != null && x[t(180)](e, this.left, this.top, this[t(182)], this[t(210)]);
    } else
      x[t(189)]();
    this.mousePickupPath(x), this[t(183)](x);
  }
}
function Bn() {
  var n = ["10993736NjRkdj", "25776470WBKKrS", "beginPath", "prototype", "18462WLWpmz", "VideoNode", "createVideo", "drawImage", "2775936poiOdv", "width", "_paintText", "setVideo", "video", "1410184QVGubC", "text", "defineProperties", "stroke", "9163791jqnZFf", "ended", "isPlaying", "videoSrc", "play", "dirty", "pause", "addEventListener", "1JbHdjk", "9RZSfON", "_videoSrc", "onPause", "getOwnPropertyDescriptor", "defineProperty", "833262UTEQVC", "onPlay", "draw", "concat", "rect", "className", "height", "onEnded", "image", "115JmsHvv"];
  return Bn = function() {
    return n;
  }, Bn();
}
function Dn(n, x) {
  var t = Bn();
  return Dn = function(e, s) {
    e = e - 174;
    var i = t[e];
    return i;
  }, Dn(n, x);
}
Xa([I(K(178))], qx[K(176)], K(209), 2), Object[K(188)](qx[K(176)], { videoSrc: { get() {
  var n = K;
  return this[n(200)];
}, set(n) {
  var x = K;
  this[x(184)](n);
} } }), V0(qx[K(176)], { serializers: { value: O[K(176)].serializers[K(207)]([K(192), K(193)]) } });
const B = mt;
(function(n, x) {
  const t = mt, e = n();
  for (; []; )
    try {
      if (parseInt(t(164)) / 1 + parseInt(t(156)) / 2 * (-parseInt(t(122)) / 3) + -parseInt(t(160)) / 4 + -parseInt(t(163)) / 5 * (-parseInt(t(151)) / 6) + parseInt(t(154)) / 7 * (parseInt(t(130)) / 8) + parseInt(t(166)) / 9 * (-parseInt(t(170)) / 10) + parseInt(t(141)) / 11 * (parseInt(t(161)) / 12) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(zn, 569842);
function mt(n, x) {
  const t = zn();
  return mt = function(e, s) {
    return e = e - 122, t[e];
  }, mt(n, x);
}
var qa = Object.defineProperty, Ga = Object.getOwnPropertyDescriptor, Ya = (n, x, t, e) => {
  const s = mt;
  for (var i = e > 1 ? void 0 : e ? Ga(x, t) : x, r = n[s(123)] - 1, a; r >= 0; r--)
    (a = n[r]) && (i = (e ? a(x, t, i) : a(i)) || i);
  return e && i && qa(x, t, i), i;
};
class Yt extends Y {
  constructor(x, t, e, s, i) {
    const r = mt;
    super(x, t, e, s, i), this.beginOffsetGap = 15, this[r(159)] = 15, this.absorb = 3;
  }
  getFold1(x, t) {
    const e = mt;
    let s = this[e(149)], i = this[e(140)](x, t), r = { x: x.x + i[0] * s, y: x.y + i[1] * s }, a = this[e(134)];
    return a && (r.x += a.x, r.y += a.y), r;
  }
  [B(133)](x, t) {
    const e = B;
    let s = this.endOffsetGap, i = this[e(128)](x, t), r = { x: t.x + i[0] * s, y: t.y + i[1] * s }, a = this.fold2Offset;
    return a && (r.x += a.x, r.y += a.y), r;
  }
  [B(140)](x, t) {
    let e = Ss(this.begin);
    if (e == null) {
      let s = 0, i = 0;
      t.x > x.x ? s = 1 : s = -1, e = [s, i];
    }
    return e;
  }
  [B(128)](x, t) {
    let s = Ss(this[B(157)]);
    if (s == null) {
      let i = 0, r = -1;
      t.y > x.y ? r = -1 : r = 1, s = [i, r];
    }
    return s;
  }
  [B(150)]() {
    const x = B, t = this[x(138)](), e = t[0], s = t[1], i = this.absorb;
    let r = this.getFold1Vec(e, s);
    if (r[0] == 0 && Math.abs(e.x - s.x) < i) {
      let y = (e.x + s.x) * 0.5;
      e.x = y, s.x = y;
    }
    if (r[1] == 0 && Math[x(155)](e.y - s.y) < i) {
      let y = (e.y + s.y) * 0.5;
      e.y = y, s.y = y;
    }
    let a = this[x(131)](e, s), o = this[x(133)](e, s);
    const c = Va(this, e, s, a, o);
    let h = c[0], l = c[1];
    {
      const y = A[x(148)](h, l, 0.5), _ = Math[x(155)](A[x(144)](h, l)).toFixed(6);
      y == ![] && (this[x(169)] != _ && (this[x(127)] = null), this[x(169)] = _);
      let b = this.centerOffset;
      b && (h.x += b.x, h.y += b.y, l.x += b.x, l.y += b.y);
    }
    let f = [e, a, h, l, o, s];
    return this[x(142)] = f, f;
  }
  [B(132)]() {
    const x = B;
    return A.mergePoints(this[x(142)]);
  }
  [B(125)](x, t) {
    const e = B;
    if (this[e(145)] == null || this[e(145)][t] == null)
      return x;
    let s = this[e(145)][t];
    return { x: x.x + s.x, y: x.y + s.y };
  }
  [B(158)](x, t) {
    const e = B;
    let s = this[e(134)];
    s == null && (s = { x: 0, y: 0 }, this.fold1Offset = s), Nx(this[e(143)](0, 0.5)) ? (s.y = 0, t = 0) : (s.x = 0, x = 0), s.x += x, s.y += t;
  }
  [B(152)](x, t) {
    const e = B;
    let s = this[e(153)];
    s == null && (s = { x: 0, y: 0 }, this[e(153)] = s), Nx(this.getK(4, 0.5)) ? (s.y = 0, t = 0) : (s.x = 0, x = 0), s.x += x, s.y += t;
  }
  setCenterOffset(x, t) {
    const e = B;
    let s = this.centerOffset;
    s == null && (s = { x: 0, y: 0 }, this[e(127)] = s), Nx(this[e(143)](2, 0.5)) ? (s.x = 0, x = 0) : (s.y = 0, t = 0), s.x += x, s.y += t;
  }
  resetOffset() {
    const x = B;
    this[x(127)] = void 0, this[x(134)] = null, this[x(153)] = null;
  }
}
Ya([I(B(136))], Yt[B(162)], B(137), 2);
const it = {};
it[E.begin] = function() {
  return this.points[0];
}, it[E[B(126)]] = function() {
  return this[B(142)][1];
}, it[E[B(165)]] = function() {
  return this.points[2];
}, it[E.mid2] = function() {
  return this[B(142)][3];
}, it[E[B(129)]] = function() {
  return this[B(142)][4];
}, it[E[B(157)]] = function() {
  return this[B(142)][5];
}, it[E[B(135)]] = function() {
  const n = B;
  return A.middle(this.points[2], this[n(142)][3]);
};
function jn(n, x) {
  const t = B;
  return Math[t(155)](x[0]) > Math.abs(x[1]) ? n.x * Math[t(146)](x[0]) : n.y * Math.sign(x[1]);
}
function hi(n, x, t) {
  let e = jn(n, x);
  return jn(t, x) - e;
}
function _s(n, x, t, e) {
  let s = jn(n, t), i = jn(x, e), r = t[0] != 0;
  return s > i ? r ? { x: n.x, y: x.y } : { x: x.x, y: n.y } : r ? { x: x.x, y: n.y } : { x: n.x, y: x.y };
}
function Va(n, x, t, e, s) {
  const i = B, r = n[i(140)](x, t), a = n[i(128)](x, t), o = z[i(167)](r, a);
  if (o == 1) {
    let f = _s(e, s, r, a);
    return [f, f];
  }
  if (o == -1) {
    const f = A.middle(e, s);
    let y = _s(e, f, r, r), _ = _s(s, f, a, a);
    return [y, _];
  }
  let c = Me(x, e, t, s, !![]), h = hi(x, r, c), l = hi(t, a, c);
  if (h > 0 && l > 0)
    return [c, c];
  {
    const f = [-r[1], r[0]], y = { x: e.x + f[0], y: e.y + f[1] }, _ = [-a[1], a[0]], b = { x: s.x + _[0], y: s.y + _[1] };
    let P = Me(e, y, s, b, !![]);
    if (W0(P), P != null)
      return [P, P];
  }
  throw new Error(i(168));
}
V0(Yt[B(162)], { DefaultPositions: { value: it }, serializers: { value: Y[B(162)][B(171)][B(147)]([B(149), B(159), B(134), B(153), B(127)]) } }), Yt.prototype[B(139)] = function() {
  const n = B;
  let x = this[n(132)](), t = x[n(123)];
  return t < 4 ? [n(124), n(157)] : t == 4 || t == 5 ? [n(124), n(157), n(126), "fold2"] : ["begin", n(157), n(126), n(129), n(135)];
};
function zn() {
  const n = ["12664PFqIsP", "getFold1", "getMergedPoints", "getFold2", "fold1Offset", "center", "AutoFoldLink", "className", "_calcAZ", "getAnchorPoints", "getFold1Vec", "11McaCbW", "points", "getK", "getAngle", "pointOffsets", "sign", "concat", "looksSame", "beginOffsetGap", "updatePoints", "534yGmioD", "setFold2Offset", "fold2Offset", "119UvygVG", "abs", "303748dIMoWv", "end", "setFold1Offset", "endOffsetGap", "1514592oGYRTl", "19221444axQLSs", "prototype", "51540msiUYQ", "491801yVtMPI", "mid1", "9WeTHRA", "dot", "assert failed getMid1AndMid2", "_preAngle", "10263030nNHHjf", "serializers", "21xDtqBd", "length", "begin", "getWithOffset", "fold1", "centerOffset", "getFold2Vec", "fold2"];
  return zn = function() {
    return n;
  }, zn();
}
const s0 = Rn;
(function(n, x) {
  const t = Rn, e = n();
  for (; []; )
    try {
      if (parseInt(t(289)) / 1 + -parseInt(t(286)) / 2 * (parseInt(t(290)) / 3) + -parseInt(t(284)) / 4 + parseInt(t(315)) / 5 * (-parseInt(t(327)) / 6) + -parseInt(t(335)) / 7 + parseInt(t(316)) / 8 + parseInt(t(331)) / 9 * (parseInt(t(311)) / 10) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Nn, 474840);
function Nn() {
  const n = ["命中1", "inLinks", "1701798fVtxZt", "getUnionRect", "connectable", "getEndPoint", "setOrigin", "getCenter", "createArrow", "addChild", "indexOf", "endArrow", "setBegin", "outLinks", "getBeginPoint", "forEach", "169860EiMqzC", "travel", "2564SDwIgs", "concat", "ArrowShape", "863529JIDVMY", "2031TJlLbG", "setXYwithChildFixed", "setEnd", "length", "push", "createLabel", "mouseEnabled", "alignOriginToLink", "draggable", "asBeginArrow", "createPologyNode", "Polygon", "editable", "setShape", "sizeFitToChildren", "union", "target", "log", "getRect", "asLabel", "removeChild", "4680670FEckVm", "translateObjectsCenterTo", "resizeTo", "beginArrow", "2124695rVOCUP", "2028872QdvOSN", "autoSize", "text", "parent", "asEndArrow", "children", "height", "label", "hasChild", "isDisplayObjectTarget", "end", "6JfeRjM", "disconnect", "unlink", "fromPoints", "18OcbDIJ", "width"];
  return Nn = function() {
    return n;
  }, Nn();
}
function Rn(n, x) {
  const t = Nn();
  return Rn = function(e, s) {
    return e = e - 278, t[e];
  }, Rn(n, x);
}
class Q0 {
  static [s0(300)](x, t = 1, e = 1) {
    const s = s0;
    let i = new O();
    return i[s(303)](p0[s(301)](x)), i[s(313)](t, e), i;
  }
  static [s0(336)](x) {
    const t = s0;
    let e = x[0][t(308)]();
    for (let s = 1; s < x[t(293)]; s++)
      e = V[t(305)](e, x[s].getRect());
    return e;
  }
  static [s0(291)](x, t, e) {
    const s = s0;
    let i = x[s(321)];
    x.x += t, x.y += e;
    for (let r = 0; r < i[s(293)]; r++) {
      const a = i[r];
      a instanceof O && (a.x -= t, a.y -= e);
    }
  }
  static [s0(304)](x) {
    const t = s0;
    let e = x.getChildren();
    if (e.length == 0)
      return;
    let s = Q0[t(336)](e);
    x[t(313)](s[t(332)], s[t(322)]), Q0[t(291)](x, s.x + x[t(332)] / 2, s.y + x[t(322)] / 2);
  }
  static [s0(312)](x, t, e) {
    const s = s0;
    let i = { x: t, y: e }, r = [];
    r = r[s(287)](x);
    let a = Q0[s(336)](r), o = a[s(340)](), c = i.x - o.x, h = i.y - o.y;
    r[s(283)]((l) => {
      l.translateWith(c, h);
    });
  }
  static [s0(285)](x, t, e, s) {
    const i = s0;
    if (s == null)
      s = [];
    else if (W[i(324)](s, x))
      return null;
    if (t && t(x, e), s[i(294)](x), x instanceof O) {
      let a = x.outLinks;
      if (a != null)
        for (var r = 0; r < a[i(293)]; r++) {
          let o = a[r];
          Q0[i(285)](o, t, x, s);
        }
    } else
      x instanceof Y && x[i(326)][i(325)]() && Q0[i(285)](x.end[i(306)], t, e, s);
    return s;
  }
}
class Ys {
  static [s0(328)](x, t) {
    const e = s0;
    if (x instanceof Y) {
      x[e(329)]();
      return;
    }
    let s = x[e(334)];
    s != null && (s.forEach((r) => {
      const a = e;
      if (r[a(319)] != null) {
        if (t != null && t[a(278)](r) != -1) {
          console[a(307)](a(333));
          return;
        }
        r[a(292)](r[a(338)]());
      }
    }), x[e(334)] = []);
    let i = x.outLinks;
    i != null && (i[e(283)]((r) => {
      const a = e;
      if (r.parent != null) {
        if (t != null && t[a(278)](r) != -1) {
          console.log("命中2");
          return;
        }
        r[a(280)](r[a(282)]());
      }
    }), x[e(281)] = []);
  }
  static [s0(295)](x, t) {
    const e = s0;
    if (x[e(323)] == null) {
      const s = new gt(t);
      return s[e(302)] = ![], s.draggable = ![], s[e(337)] = ![], s.mouseEnabled = ![], s[e(317)] = !![], s[e(297)]("cb", 0, 0, 0.5), Ys.asLabel(x, s), s;
    }
    return x[e(323)][e(318)] = t, x[e(323)];
  }
  static [s0(309)](x, t) {
    const e = s0;
    x[e(323)] != null && x[e(310)](x[e(323)]), x[e(323)] = t, x.children[e(278)](x[e(323)]) == -1 && x[e(342)](x[e(323)]);
    let s = 0, i = 0.5;
    return x instanceof Lx ? i = 1 : x instanceof ft ? s = 1 : x instanceof Yt && (s = 2), t[e(339)](s, i), t;
  }
  static [s0(341)](x, t = 10, e = 10) {
    const s = s0;
    let i = new O();
    return i[s(313)](t, e), x == null ? i.setShape(p0[s(288)]) : i.setShape(p0[s(330)](x)), i[s(302)] = ![], i[s(298)] = ![], i[s(337)] = ![], i[s(296)] = ![], i;
  }
  static [s0(299)](x, t) {
    const e = s0;
    return t[e(297)]("lm", 0, 0, 0), x[e(314)] != null && x[e(310)](x[e(314)]), x[e(321)][e(278)](t) == -1 && x.addChild(t), x[e(314)] = t, t;
  }
  static [s0(320)](x, t) {
    const e = s0;
    let s = 1;
    x instanceof Yt ? s = 5 : x instanceof Lx ? s = 2 : x instanceof ft && (s = 3);
    const i = s - 1;
    return t.alignOriginToLink("lm", 0, i, 1), x[e(279)] != null && x[e(310)](x[e(279)]), x[e(321)][e(278)](t) == -1 && x[e(342)](t), x[e(279)] = t, t;
  }
}
const a0 = Vt;
function Vt(n, x) {
  const t = Hn();
  return Vt = function(e, s) {
    return e = e - 428, t[e];
  }, Vt(n, x);
}
(function(n, x) {
  const t = Vt, e = n();
  for (; []; )
    try {
      if (parseInt(t(467)) / 1 * (parseInt(t(433)) / 2) + parseInt(t(435)) / 3 * (-parseInt(t(449)) / 4) + -parseInt(t(450)) / 5 + parseInt(t(461)) / 6 * (parseInt(t(428)) / 7) + -parseInt(t(456)) / 8 * (parseInt(t(454)) / 9) + -parseInt(t(469)) / 10 + parseInt(t(465)) / 11 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Hn, 633116);
function Hn() {
  const n = ["gravity", "calculate", "addLink", "mass", "repulsiveForce", "force", "edges", "frame_width", "isNode", "attractiveForce", "speed", "setOriginEdgeWeight", "4gerPmy", "883600OdPpHg", "maxForceDistance", "log", "push", "81XBzdes", "initNodes", "693656nQQQjK", "length", "origin", "travel", "getLink", "1290HIdTRF", "originForce", "nodes", "neighbors", "21348261HoNsQf", "doLayout", "642PYoXSY", "Error Adding Edge: ", "10360100PPuCIl", "sqrt", "applyForce", "7273rmLrRg", "frame_height", "selectedNode", "addNode", "bounds", "3852RaUvvO", "originWeight", "2323257dzlnho", "originEdges"];
  return Hn = function() {
    return n;
  }, Hn();
}
var As = function() {
};
As.prototype = { calculate: function(n, x) {
  const t = Vt;
  this.dx = n.x - x.x, this.dy = n.y - x.y, this.d2 = this.dx * this.dx + this.dy * this.dy, this.d = Math[t(470)](this.d2);
} };
class Ua {
  constructor(x, t, e) {
    const s = Vt;
    this[s(436)] = [], this[s(444)] = t, this[s(429)] = e, this.origin = x, this.initialize(), this[s(455)](x);
  }
  [a0(455)](x) {
    const t = a0;
    let e = this;
    Q0[t(459)](x, function(s, i) {
      const r = t;
      if (s[r(445)] && i != null) {
        let a = i, o = s;
        a == x && e.setOriginEdgeWeight(o, e[r(434)]);
        let c = o[r(440)] | 1;
        e[r(431)](o, c);
        let h = 30;
        e[r(439)](a, o, h);
      }
    });
  }
  initialize() {
    const x = a0;
    this[x(434)] = 48, this[x(447)] = 12, this[x(437)] = 50, this.maxForceDistance = 512, this.nodes = new Array(), this[x(443)] = new Array(), this[x(436)] = new Array();
  }
  originForce(x, t) {
    const e = a0;
    if (this[e(436)][x.id]) {
      if (x.id != this[e(430)]) {
        let s = this[e(436)][x.id], i = (t.d - s) / s;
        x.force.x += i * (t.dx / t.d), x.force.y += i * (t.dy / t.d);
      }
    } else if (x.id != this[e(430)]) {
      let s = this[e(437)] * x[e(440)] * this[e(458)][e(440)] / t.d2, i = this.maxForceDistance - t.d;
      i > 0 && (s *= Math[e(452)](i)), s < 1024 && (x[e(442)].x -= s * t.dx / t.d, x[e(442)].y -= s * t.dy / t.d);
    }
  }
  attractiveForce(x, t, e) {
    const s = a0;
    let i = this[s(443)][x.id][t.id];
    if (i += 3 * (x[s(464)] + t[s(464)]), i) {
      let r = (e.d - i) / i;
      x.id != this[s(430)] && (x[s(442)].x -= r * e.dx / e.d, x[s(442)].y -= r * e.dy / e.d), t.id != this[s(430)] && (t[s(442)].x += r * e.dx / e.d, t[s(442)].y += r * e.dy / e.d);
    }
  }
  repulsiveForce(x, t, e) {
    const s = a0;
    let i = this[s(437)] * x[s(440)] * t[s(440)] / e.d2, r = this[s(451)] - e.d;
    r > 0 && (i *= Math[s(452)](r)), i < 1024 && (x[s(442)].x += i * e.dx / e.d, x[s(442)].y += i * e.dy / e.d);
  }
  [a0(466)]() {
    this[a0(471)]();
  }
  [a0(471)]() {
    const x = a0;
    for (var t = 0; t < this[x(463)][x(457)]; t++) {
      let s = this.nodes[t];
      for (var e = 0; e < this[x(463)][x(457)]; e++)
        if (t != e) {
          let r = this[x(463)][e], a = new As();
          a[x(438)](s, r), this[x(460)](s.id, r.id) != null && this[x(446)](s, r, a), t != this[x(430)] && this[x(441)](s, r, a);
        }
      let i = new As();
      i[x(438)](this[x(458)], s), this[x(462)](s, i), s[x(442)].x *= this.speed, s[x(442)].y *= this[x(447)], s.x += s[x(442)].x, s.y += s[x(442)].y, s[x(442)].x = 0, s[x(442)].y = 0;
    }
  }
  [a0(432)](x) {
    const t = a0;
    let e = 12, s = e * 2 + 4, i = x.x, r = x.x + s, a = x.y, o = x.y + s;
    i < 0 && (x.x = 0), a < 0 && (x.y = 0), r > this[t(444)] && (x.x = this[t(444)] - s), o > this.frame_height && (x.y = this[t(429)] - s);
  }
  [a0(448)](x, t) {
    const e = a0;
    this[e(436)][x.id] = t;
  }
  [a0(431)](x, t) {
    const e = a0;
    x[e(440)] = t | 1, x[e(464)] = x[e(464)] | 0, x.force = { x: 0, y: 0 }, this[e(463)][e(453)](x);
  }
  getLink(x, t) {
    let e = this.edges[x];
    return e == null ? null : e[t];
  }
  [a0(439)](x, t, e) {
    const s = a0;
    !this[s(443)][x.id] && (this.edges[x.id] = new Object()), this[s(443)][x.id][t.id] = e;
    try {
      x[s(464)]++, t[s(464)]++;
    } catch (i) {
      console[s(452)](s(468) + i);
    }
  }
}
const h0 = Xn;
(function(n, x) {
  const t = Xn, e = n();
  for (; []; )
    try {
      if (parseInt(t(402)) / 1 * (-parseInt(t(401)) / 2) + parseInt(t(411)) / 3 * (-parseInt(t(419)) / 4) + -parseInt(t(406)) / 5 + parseInt(t(424)) / 6 * (-parseInt(t(410)) / 7) + -parseInt(t(428)) / 8 + -parseInt(t(427)) / 9 + parseInt(t(400)) / 10 * (parseInt(t(420)) / 11) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Wn, 235273);
function Wn() {
  const n = ["724RLpPzQ", "11EQKenG", "updatePoints", "_OBBPoints", "getPoints", "24CwuhVz", "cos", "getOwnPropertyDescriptor", "4164912rpvVle", "162552JzPycq", "abs", "direction", "concat", "defineProperty", "16698390xYhwLH", "6PVKUzM", "53324DDdPRx", "prototype", "className", "serializers", "1824670StTBtw", "atan2", "anticlockwise", "sqrt", "69608iUgjQa", "6411KUybSQ", "getPoint", "length", "clockwise", "sin", "arc", "beginPath", "_calcAZ"];
  return Wn = function() {
    return n;
  }, Wn();
}
var Ka = Object[h0(432)], Qa = Object[h0(426)], li = (n, x, t, e) => {
  const s = h0;
  for (var i = e > 1 ? void 0 : e ? Qa(x, t) : x, r = n[s(413)] - 1, a; r >= 0; r--)
    (a = n[r]) && (i = (e ? a(x, t, i) : a(i)) || i);
  return e && i && Ka(x, t, i), i;
};
function Xn(n, x) {
  const t = Wn();
  return Xn = function(e, s) {
    return e = e - 400, t[e];
  }, Xn(n, x);
}
class Gx extends Y {
  constructor(x, t, e, s, i) {
    super(x, t, e, s, i);
  }
  drawPoints(x, t) {
    const e = h0;
    let s = t[0], i = t[t[e(413)] - 1];
    t[1];
    let r = (s.x + i.x) / 2, a = (s.y + i.y) / 2, o = i.x - s.x, c = i.y - s.y, h = Math[e(409)](o * o + c * c) / 2, l = Math[e(407)](c, o);
    this[e(430)] != e(408) && (l += Math.PI);
    let f = l + Math.PI;
    x[e(417)](), x[e(416)](r, a, h, l, f);
  }
  [h0(422)]() {
    const x = h0;
    let t = this[x(423)](), e = this[x(412)](0.5);
    return [t[0], e, t[1]];
  }
  getPoint(x, t = 0) {
    const e = h0;
    let s = this[e(423)](), i = s[0], r = s[s.length - 1], a = (i.x + r.x) / 2, o = (i.y + r.y) / 2, c = r.x - i.x, h = r.y - i.y, l = Math[e(409)](c * c + h * h) / 2, f = Math[e(407)](h, c);
    this.direction != "anticlockwise" && (f += Math.PI);
    let y = f + Math.PI, _ = f + (y - f) * x;
    return { x: a + l * Math[e(425)](_), y: o + l * Math[e(415)](_) };
  }
  [h0(421)]() {
    const x = h0;
    let t = this[x(418)](), e = t[0], s = t[1], i = (e.x + s.x) / 2, r = (e.y + s.y) / 2, a = s.x - e.x, o = s.y - e.y, c = Math[x(429)](Math[x(409)](a * a + o * o) * 0.5);
    c *= Math[x(409)](2);
    let h = Math.PI / 4, l = Math.atan2(o, a);
    l >= Math.PI / 2 && l < Math.PI || (l >= 0 && l < Math.PI / 2 ? h += Math.PI / 2 : l <= 0 && l > -Math.PI / 2 ? h += Math.PI : h -= Math.PI / 2);
    let f = { x: i + c * Math[x(415)](h), y: r + c * Math.cos(h) };
    return [e, f, s];
  }
}
li([I("ArcLink")], Gx[h0(403)], h0(404), 2), li([I(h0(414))], Gx[h0(403)], h0(430), 2), V0(Gx[h0(403)], { serializers: { value: Y.prototype[h0(405)][h0(431)](["direction"]) } });
const X = qn;
(function(n, x) {
  const t = qn, e = n();
  for (; []; )
    try {
      if (parseInt(t(146)) / 1 * (parseInt(t(159)) / 2) + parseInt(t(128)) / 3 + parseInt(t(140)) / 4 + -parseInt(t(151)) / 5 + parseInt(t(156)) / 6 + parseInt(t(124)) / 7 * (parseInt(t(132)) / 8) + -parseInt(t(131)) / 9 * (parseInt(t(125)) / 10) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Gn, 172348);
var Za = Object[X(145)], Ja = Object[X(144)], $a = (n, x, t, e) => {
  const s = X;
  for (var i = e > 1 ? void 0 : e ? Ja(x, t) : x, r = n[s(138)] - 1, a; r >= 0; r--)
    (a = n[r]) && (i = (e ? a(x, t, i) : a(i)) || i);
  return e && i && Za(x, t, i), i;
};
function qn(n, x) {
  const t = Gn();
  return qn = function(e, s) {
    return e = e - 121, t[e];
  }, qn(n, x);
}
function Gn() {
  const n = ["sqrt", "getOwnPropertyDescriptor", "defineProperty", "4042TNKIgo", "center", "sin", "begin", "moveTo", "257175KFYzBi", "mousedragHandler", "_ctrlPoint1", "_calcAZ", "BezierLink", "1231410xKIkXY", "between", "prototype", "136xslLvb", "ctrlPoint2", "_ctrlPoint2", "getAnchorPoints", "isDragStart", "7ZXFbep", "10VeISEU", "points", "serializers", "231717yPpkCd", "ctrlPoint1", "beginPath", "6590727unyPzO", "2569816TcunMG", "bezierCurveTo", "calcCtrlPoint1", "getPoint", "atan2", "cos", "length", "calcCtrlPoint2", "310116ywLoyn", "end", "updatePoints"];
  return Gn = function() {
    return n;
  }, Gn();
}
class Yn extends Y {
  constructor(x, t, e, s, i) {
    super(x, t, e, s, i);
  }
  [X(152)](x) {
    const t = X;
    if (super[t(152)](x), this.ctrlPoint1 || this.ctrlPoint2) {
      const e = x[t(123)], s = x.toObjectLocalDXY(this);
      let i = s.dx, r = s.dy, a = this[t(129)], o = this[t(160)];
      a && (e && (this[t(153)] = { x: a.x, y: a.y }), a.x = this[t(153)].x + i, a.y = this[t(153)].y + r), this[t(160)] && (e && (this[t(121)] = { x: o.x, y: o.y }), o.x = this._ctrlPoint2.x + i, o.y = this[t(121)].y + r);
    }
  }
  drawPoints(x, t) {
    const e = X;
    let s = t[0], i = t[1];
    t[2];
    let r = t[3], a = t[4];
    x[e(130)](), x[e(150)](s.x, s.y), x[e(133)](i.x, i.y, r.x, r.y, a.x, a.y);
  }
  [X(134)](x, t, e) {
    return this[X(129)] != null ? this.ctrlPoint1 : ui(x, e);
  }
  calcCtrlPoint2(x, t, e) {
    return this[X(160)] != null ? this.ctrlPoint2 : ui(t, e);
  }
  resetCtrlPoint() {
    const x = X;
    this[x(129)] = void 0, this.ctrlPoint2 = void 0;
  }
  [X(135)](x, t) {
    const e = X;
    let s = this.getPoints(), i = s[0], r = s[1];
    s[2];
    let a = s[3], o = s[4], c = r, h = a, l = A.between(i, c, x), f = A[e(157)](c, h, x), y = A[e(157)](h, o, x), _ = A[e(157)](l, f, x), b = A[e(157)](f, y, x);
    return A[e(157)](_, b, x);
  }
  [X(142)]() {
    const x = X, t = this[x(154)](), e = t[0], s = t[1];
    let i = { x: (e.x + s.x) / 2, y: (e.y + s.y) / 2 }, r = this[x(134)](e, s, i), a = this[x(139)](e, s, i);
    return [e, r, i, a, s];
  }
}
$a([I(X(155))], Yn[X(158)], "className", 2);
const Lt = {};
Lt[E[X(149)]] = function() {
  return this[X(126)][0];
}, Lt[E.end] = function() {
  return this[X(126)][1];
}, Lt[E[X(147)]] = function() {
  return this[X(135)](0.5, 0);
}, Lt[E[X(129)]] = function() {
  const n = X;
  return this.ctrlPoint1 != null ? this.ctrlPoint1 : this[n(134)](this[n(126)][0], this[n(126)][1]);
}, Lt[E[X(160)]] = function() {
  const n = X;
  return this[n(160)] != null ? this.ctrlPoint2 : this[n(139)](this[n(126)][0], this[n(126)][1]);
}, V0(Yn[X(158)], { DefaultPositions: { value: Lt }, serializers: { value: Y.prototype[X(127)].concat([X(129), X(160)]) } }), Yn[X(158)][X(122)] = function() {
  const n = X;
  return [n(149), n(141), "ctrlPoint1", n(160)];
};
function ui(n, x) {
  const t = X;
  let e = x.x - n.x, s = x.y - n.y, i = (x.x + n.x) / 2, r = (x.y + n.y) / 2, a = Math[t(143)](e * e + s * s) / 2, o = Math[t(136)](s, e) + Math.PI / 2;
  return { x: i + a * Math[t(137)](o), y: r + a * Math[t(148)](o) };
}
const u = Vn;
(function(n, x) {
  const t = Vn, e = n();
  for (; []; )
    try {
      if (parseInt(t(402)) / 1 * (parseInt(t(468)) / 2) + -parseInt(t(345)) / 3 * (-parseInt(t(384)) / 4) + -parseInt(t(511)) / 5 * (parseInt(t(359)) / 6) + parseInt(t(406)) / 7 * (parseInt(t(518)) / 8) + -parseInt(t(483)) / 9 + parseInt(t(444)) / 10 + parseInt(t(443)) / 11 * (parseInt(t(340)) / 12) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Un, 334264);
function Vn(n, x) {
  const t = Un();
  return Vn = function(e, s) {
    return e = e - 336, t[e];
  }, Vn(n, x);
}
var t1 = [u(411), u(515), u(500), u(458), u(457), "#2bae85", u(353), u(447), u(394), "#1ba784", "#0f1423", u(489), u(463), u(461), u(367), u(380), u(429), "#7e2065", "#681752", u(399), u(543)], ms = [t1, [u(426), "#c5aa99", "#ca7d61", u(387), u(440)], [u(526), u(386), u(379)], [u(431), u(471), u(385), u(356), u(346)], [u(366), u(369), u(537), u(454), u(439)], [u(395), u(362), u(437), u(479), u(452)], [u(393), u(343), u(509), u(338), u(388)], ["#e85827", "#fb991c", u(336), u(405), u(435)], [u(371), u(474), u(514), u(414), u(533)], [u(507), u(539), u(545), u(341), "#ebe0c4"]];
class bt {
  constructor(x) {
    const t = u;
    this.r = 1, this.g = 1, this.b = 1, this.o = 1, arguments[t(451)] === 3 ? this[t(466)](arguments[0], arguments[1], arguments[2]) : this[t(521)](x);
  }
  [u(521)](x) {
    const t = u;
    return x instanceof bt ? this[t(409)](x) : typeof x === t(512) ? this[t(433)](x) : typeof x === t(497) && this[t(477)](x), this;
  }
  [u(433)](x) {
    return x = Math[u(381)](x), this.r = (x >> 16 & 255) / 255, this.g = (x >> 8 & 255) / 255, this.b = (x & 255) / 255, this;
  }
  [u(466)](x, t, e) {
    return this.r = x, this.g = t, this.b = e, this;
  }
  [u(349)](x, t, e) {
    if (t === 0)
      this.r = this.g = this.b = e;
    else {
      let s = function(a, o, c) {
        return c < 0 && (c += 1), c > 1 && (c -= 1), c < 0.16666666666666666 ? a + (o - a) * 6 * c : c < 0.5 ? o : c < 0.6666666666666666 ? a + (o - a) * 6 * (0.6666666666666666 - c) : a;
      }, i = e <= 0.5 ? e * (1 + t) : e + t - e * t, r = 2 * e - i;
      this.r = s(r, i, x + 1 / 3), this.g = s(r, i, x), this.b = s(r, i, x - 1 / 3);
    }
    return this;
  }
  [u(477)](x) {
    const t = u;
    if (/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i[t(342)](x)) {
      let e = /^rgb\((\d+), ?(\d+), ?(\d+)\)$/i[t(530)](x);
      return this.r = Math[t(363)](255, parseInt(e[1], 10)) / 255, this.g = Math.min(255, parseInt(e[2], 10)) / 255, this.b = Math.min(255, parseInt(e[3], 10)) / 255, this;
    }
    if (/^rgba\((\d+),?(\d+),?(\d+),?(\S+)\)$/i[t(342)](x)) {
      let e = /^rgba\((\d+),?(\d+),?(\d+),?(\S+)\)$/i[t(530)](x);
      return this.r = Math[t(363)](255, parseInt(e[1], 10)) / 255, this.g = Math[t(363)](255, parseInt(e[2], 10)) / 255, this.b = Math[t(363)](255, parseInt(e[3], 10)) / 255, this.o = parseInt(e[4]), this;
    }
    if (/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i[t(342)](x)) {
      let e = /^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.exec(x);
      return this.r = Math[t(363)](100, parseInt(e[1], 10)) / 100, this.g = Math[t(363)](100, parseInt(e[2], 10)) / 100, this.b = Math[t(363)](100, parseInt(e[3], 10)) / 100, this;
    }
    if (/^\#([0-9a-f]{6})$/i[t(342)](x)) {
      let e = /^\#([0-9a-f]{6})$/i.exec(x);
      return this.setHex(parseInt(e[1], 16)), this;
    }
    if (/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(x)) {
      let e = /^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(x);
      return this[t(433)](parseInt(e[1] + e[1] + e[2] + e[2] + e[3] + e[3], 16)), this;
    }
    return /^(\w+)$/i.test(x) ? (this.setHex(x1[x]), this) : this;
  }
  [u(409)](x) {
    return this.r = x.r, this.g = x.g, this.b = x.b, this;
  }
  [u(488)](x) {
    return this.r = x.r * x.r, this.g = x.g * x.g, this.b = x.b * x.b, this;
  }
  [u(524)](x) {
    const t = u;
    return this.r = Math[t(355)](x.r), this.g = Math[t(355)](x.g), this.b = Math[t(355)](x.b), this;
  }
  [u(464)]() {
    let x = this.r, t = this.g, e = this.b;
    return this.r = x * x, this.g = t * t, this.b = e * e, this;
  }
  [u(408)]() {
    const x = u;
    return this.r = Math[x(355)](this.r), this.g = Math[x(355)](this.g), this.b = Math.sqrt(this.b), this;
  }
  [u(456)]() {
    return this.r * 255 << 16 ^ this.g * 255 << 8 ^ this.b * 255 << 0;
  }
  [u(472)]() {
    const x = u;
    return (x(368) + this[x(456)]().toString(16)).slice(-6);
  }
  [u(442)](x) {
    const t = u;
    let e = x || { h: 0, s: 0, l: 0 }, s = this.r, i = this.g, r = this.b, a = Math.max(s, i, r), o = Math[t(363)](s, i, r), c, h, l = (o + a) / 2;
    if (o === a)
      c = 0, h = 0;
    else {
      let f = a - o;
      switch (h = l <= 0.5 ? f / (a + o) : f / (2 - a - o), a) {
        case s:
          c = (i - r) / f + (i < r ? 6 : 0);
          break;
        case i:
          c = (r - s) / f + 2;
          break;
        case r:
          c = (s - i) / f + 4;
          break;
      }
      c /= 6;
    }
    return e.h = c, e.s = h, e.l = l, e;
  }
  getStyle(x) {
    const t = u;
    return x != null ? (x = x[t(377)](1), t(517) + (this.r * 255 | 0) + "," + (this.g * 255 | 0) + "," + (this.b * 255 | 0) + "," + x + ")") : t(382) + (this.r * 255 | 0) + "," + (this.g * 255 | 0) + "," + (this.b * 255 | 0) + ")";
  }
  [u(475)](x, t, e) {
    const s = u;
    let i = this.getHSL();
    return i.h += x, i.s += t, i.l += e, this[s(349)](i.h, i.s, i.l), this;
  }
  [u(455)](x) {
    return this.r += x.r, this.g += x.g, this.b += x.b, this;
  }
  [u(544)](x, t) {
    return this.r = x.r + t.r, this.g = x.g + t.g, this.b = x.b + t.b, this;
  }
  addScalar(x) {
    return this.r += x, this.g += x, this.b += x, this;
  }
  multiply(x) {
    return this.r *= x.r, this.g *= x.g, this.b *= x.b, this;
  }
  [u(486)](x) {
    return this.r *= x, this.g *= x, this.b *= x, this;
  }
  [u(401)](x, t) {
    return this.r += (x.r - this.r) * t, this.g += (x.g - this.g) * t, this.b += (x.b - this.b) * t, this;
  }
  [u(540)](x) {
    return x.r === this.r && x.g === this.g && x.b === this.b;
  }
  [u(432)](x) {
    return this.r = x[0], this.g = x[1], this.b = x[2], this;
  }
  toArray() {
    return [this.r, this.g, this.b];
  }
  [u(423)]() {
    const x = u;
    return new bt()[x(466)](this.r, this.g, this.b);
  }
  static [u(448)](x) {
    const t = u;
    x == null && (x = t1);
    let e = Math[t(448)]() * x[t(451)] | 0;
    return x[e];
  }
  static [u(465)]() {
    let x = Math.random() * ms.length | 0;
    return ms[x];
  }
  static [u(396)](x) {
    return ms[x];
  }
}
const x1 = { aliceblue: u(344), antiquewhite: u(534), aqua: u(436), aquamarine: u(541), azure: u(462), beige: u(516), bisque: "#FFE4C4", black: u(470), blanchedalmond: u(504), blue: u(445), blueviolet: u(390), brown: "#A52A2A", burlywood: u(413), cadetblue: u(492), chartreuse: "#7FFF00", chocolate: u(361), coral: u(358), cornflowerblue: "#6495ED", cornsilk: u(391), crimson: u(499), cyan: "#00FFFF", darkblue: u(415), darkcyan: u(421), darkgoldenrod: u(354), darkgray: u(529), darkgreen: u(438), darkgrey: u(529), darkkhaki: u(503), darkmagenta: "#8B008B", darkolivegreen: u(446), darkorange: u(374), darkorchid: u(528), darkred: u(493), darksalmon: u(460), darkseagreen: u(339), darkslateblue: u(397), darkslategray: u(523), darkslategrey: u(523), darkturquoise: u(372), darkviolet: u(375), deeppink: "#FF1493", deepskyblue: u(473), dimgray: u(522), dimgrey: "#696969", dodgerblue: u(427), firebrick: u(535), floralwhite: u(495), forestgreen: u(351), fuchsia: "#FF00FF", gainsboro: u(498), ghostwhite: u(420), gold: u(469), goldenrod: u(510), gray: u(527), green: u(519), greenyellow: "#ADFF2F", grey: u(527), honeydew: "#F0FFF0", hotpink: "#FF69B4", indianred: "#CD5C5C", indigo: "#4B0082", ivory: u(536), khaki: "#F0E68C", lavender: u(389), lavenderblush: u(360), lawngreen: "#7CFC00", lemonchiffon: u(478), lightblue: u(485), lightcoral: "#F08080", lightcyan: "#E0FFFF", lightgoldenrodyellow: u(337), lightgray: u(487), lightgreen: u(412), lightgrey: u(487), lightpink: "#FFB6C1", lightsalmon: u(525), lightseagreen: "#20B2AA", lightskyblue: u(418), lightslategray: u(352), lightslategrey: u(352), lightsteelblue: u(417), lightyellow: "#FFFFE0", lime: u(422), limegreen: "#32CD32", linen: "#FAF0E6", magenta: u(383), maroon: "#800000", mediumaquamarine: u(430), mediumblue: u(501), mediumorchid: u(490), mediumpurple: u(494), mediumseagreen: u(484), mediumslateblue: u(480), mediumspringgreen: u(467), mediumturquoise: u(370), mediumvioletred: u(376), midnightblue: u(404), mintcream: u(513), mistyrose: u(453), moccasin: u(407), navajowhite: u(508), navy: "#000080", oldlace: u(416), olive: u(419), olivedrab: u(428), orange: u(505), orangered: "#FF4500", orchid: u(450), palegoldenrod: u(434), palegreen: u(392), paleturquoise: u(357), palevioletred: u(373), papayawhip: u(459), peachpuff: u(441), peru: u(365), pink: u(502), plum: u(491), powderblue: u(403), purple: u(364), red: u(531), rosybrown: u(410), royalblue: "#4169E1", saddlebrown: u(425), salmon: "#FA8072", sandybrown: "#F4A460", seagreen: u(350), seashell: u(532), sienna: u(476), silver: u(506), skyblue: "#87CEEB", slateblue: u(449), slategray: u(348), slategrey: u(348), snow: u(378), springgreen: u(347), steelblue: "#4682B4", tan: u(482), teal: u(400), thistle: u(520), tomato: "#FF6347", turquoise: u(542), violet: u(538), wheat: u(398), white: u(424), whitesmoke: u(481), yellow: u(496), yellowgreen: "#9ACD32" };
function Un() {
  const n = ["#000000", "#5ae292", "getHexString", "#00BFFF", "#3fb9c1", "offsetHSL", "#A0522D", "setStyle", "#FFFACD", "#d7d351", "#7B68EE", "#F5F5F5", "#D2B48C", "3264147tKzCzf", "#3CB371", "#ADD8E6", "multiplyScalar", "#D3D3D3", "copyGammaToLinear", "#4E7ca1", "#BA55D3", "#DDA0DD", "#5F9EA0", "#8B0000", "#9370DB", "#FFFAF0", "#FFFF00", "string", "#DCDCDC", "#DC143C", "#FA7E23", "#0000CD", "#FFC0CB", "#BDB76B", "#FFEBCD", "#FFA500", "#C0C0C0", "#6a4307", "#FFDEAD", "#567f4f", "#DAA520", "5AtPnEj", "number", "#F5FFFA", "#7ed1d2", "#2d2e36", "#F5F5DC", "rgba(", "56664QAGqfT", "#008000", "#D8BFD8", "set", "#696969", "#2F4F4F", "copyLinearToGamma", "#FFA07A", "#D73417", "#808080", "#9932CC", "#A9A9A9", "exec", "#FF0000", "#FFF5EE", "#ffe99b", "#FAEBD7", "#B22222", "#FFFFF0", "#d84870", "#EE82EE", "#cb8a2a", "equals", "#7FFFD4", "#40E0D0", "#C02c38", "addColors", "#d2865a", "#fdbc3a", "#FAFAD2", "#f4642b", "#8FBC8F", "24yTcYXZ", "#b6ca98", "test", "#707556", "#F0F8FF", "57QrENGw", "#f7e853", "#00FF7F", "#708090", "setHSL", "#2E8B57", "#228B22", "#778899", "#248067", "#B8860B", "sqrt", "#f4a146", "#AFEEEE", "#FF7F50", "3337206naCjjv", "#FFF0F5", "#D2691E", "#24653E", "min", "#800080", "#CD853F", "#166E84", "#346c9c", "000000", "#97893f", "#48D1CC", "#15838a", "#00CED1", "#DB7093", "#FF8C00", "#9400D3", "#C71585", "toFixed", "#FFFAFA", "#3586E3", "#61649f", "floor", "rgb(", "#FF00FF", "41156sAtQKX", "#ff63b3", "#FDD163", "#8e8b86", "#f6d82c", "#E6E6FA", "#8A2BE2", "#FFF8DC", "#98FB98", "#203046", "#5e5314", "#32510E", "getScheme", "#483D8B", "#F5DEB3", "#EE3f4d", "#008080", "lerp", "7uIRlLd", "#B0E0E6", "#191970", "#ffde5f", "392irprCZ", "#FFE4B5", "convertLinearToGamma", "copy", "#BC8F8F", "#475164", "#90EE90", "#DEB887", "#d2Dfb2", "#00008B", "#FDF5E6", "#B0C4DE", "#87CEFA", "#808000", "#F8F8FF", "#008B8B", "#00FF00", "clone", "#FFFFFF", "#8B4513", "#dcb375", "#1E90FF", "#6B8E23", "#C06f98", "#66CDAA", "#35aeff", "fromArray", "setHex", "#EEE8AA", "#ffdc99", "#00FFFF", "#3c968a", "#006400", "#f3ca43", "#ccbbaa", "#FFDAB9", "getHSL", "1454959zarnGr", "2934520YNDyqP", "#0000FF", "#556B2F", "#12A182", "random", "#6A5ACD", "#DA70D6", "length", "#f0ac68", "#FFE4E1", "#f18851", "add", "getHex", "#FED71A", "#FF9900", "#FFEFD5", "#E9967A", "#2775B6", "#F0FFFF", "#2474b5", "convertGammaToLinear", "randomScheme", "setRGB", "#00FA9A", "29434HqLosG", "#FFD700"];
  return Un = function() {
    return n;
  }, Un();
}
function to(n) {
  const x = u;
  return n != null ? bt[x(448)](bt[x(396)](n)) : bt[x(448)]();
}
const H = Ut;
(function(n, x) {
  const t = Ut, e = n();
  for (; []; )
    try {
      if (-parseInt(t(111)) / 1 + parseInt(t(128)) / 2 + -parseInt(t(133)) / 3 + -parseInt(t(131)) / 4 + -parseInt(t(140)) / 5 * (parseInt(t(138)) / 6) + -parseInt(t(145)) / 7 + parseInt(t(127)) / 8 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Kn, 559779);
const tx = class {
  constructor() {
    const n = Ut;
    this[n(134)] = { x: 0, y: 0 }, this[n(116)] = 0, this[n(119)] = 1, this.dx = 1, this.dy = 1, this.init();
  }
  init() {
    const n = Ut;
    return this._position = { x: 0, y: 0 }, this[n(132)] = [], this.marks = {}, this;
  }
  [H(122)](n, x) {
    const t = H;
    let e = { name: n, args: x };
    return this[t(132)][t(120)](e), this;
  }
  mark(n) {
    const x = H;
    if (n == null)
      throw new Error("mark's name is required.");
    return this[x(139)][n] = { x: this._position.x, y: this[x(143)].y }, this;
  }
  [H(141)](n) {
    return this[H(139)][n];
  }
  faceToMark(n) {
    let t = this[H(141)](n);
    return this.faceTo(t);
  }
  [H(146)](n) {
    const x = H;
    let t = this[x(141)](n);
    return this[x(124)](t);
  }
  forwardToMark(n) {
    const x = H;
    let t = this.getMark(n);
    return this[x(115)](t);
  }
  [H(136)](n) {
    const x = H;
    for (let t = 0; t < n[x(137)]; t++) {
      const e = n[t], s = this[x(141)](e);
      this[x(115)](s);
    }
    return this;
  }
  [H(129)]() {
    const n = H;
    let x = this._position, t = this[n(113)], e = this[n(142)], s = x.x + e * Math[n(130)](t), i = x.y + e * Math[n(121)](t);
    return this.dx = s - x.x, this.dy = i - x.y, this;
  }
  [H(147)](n) {
    const x = H, t = n.x, e = n.y;
    return this[x(113)] = Math.atan2(e - this._position.y, t - this._position.x), this[x(129)](), this;
  }
  forward(n) {
    const x = H;
    return this[x(135)](n), this[x(143)].x += this.dx, this[x(143)].y += this.dy, this[x(122)](tx.OP[x(125)], [this[x(143)].x, this[x(143)].y]), this;
  }
  jump(n) {
    const x = H;
    n == null && (n = 1);
    for (var t = 0; t < n; t++)
      this[x(143)].x += this.dx, this[x(143)].y += this.dy, this[x(122)](tx.OP[x(126)], [this[x(143)].x, this[x(143)].y]);
    return this;
  }
  [H(124)](n) {
    const x = H, t = n.x, e = n.y;
    return this[x(143)].x = t, this._position.y = e, this[x(122)](tx.OP[x(124)], [this[x(143)].x, this._position.y]), this;
  }
  [H(117)](n, x) {
    let t = { x: (n.x + x.x) / 2, y: (n.y + x.y) / 2 };
    return this.moveTo(t);
  }
  [H(115)](n) {
    const x = H, t = n.x, e = n.y;
    return this[x(143)].x = t, this._position.y = e, this[x(122)](tx.OP.forwardTo, [this[x(143)].x, this._position.y]), this;
  }
  [H(112)](n) {
    const x = H;
    return n == null && (n = Math.PI / 2), this._direction = this[x(113)] - n, this[x(129)](), this;
  }
  [H(118)](n) {
    const x = H;
    return n == null && (n = -Math.PI / 2), this[x(113)] = this[x(113)] + n, this[x(129)](), this;
  }
  [H(135)](n) {
    const x = H;
    return this._stepSize = n, this[x(129)](), this;
  }
  sizeBy(n) {
    const x = H;
    return this[x(142)] *= n, this[x(129)](), this;
  }
  sizeWith(n) {
    const x = H;
    return this[x(142)] += n, this[x(129)](), this;
  }
  [H(144)](n) {
    const x = H, t = n.x, e = n.y;
    let s = t - this[x(143)].x, i = e - this._position.y;
    return Math[x(123)](s * s + i * i);
  }
  [H(114)](n) {
    const x = H, t = n.x, e = n.y;
    return Math.atan2(e - this[x(143)].y, t - this[x(143)].x);
  }
};
let e1 = tx;
function Kn() {
  const n = ["jump", "20060512tozRvW", "1178352xYweFg", "updateDxy", "cos", "2536624VupVVo", "_actions", "185304WluiAH", "position", "size", "forwardToMarks", "length", "6UDbglI", "marks", "4870445khIgfC", "getMark", "_stepSize", "_position", "getDistance", "1938937iyyhRs", "moveToMark", "faceTo", "589957XIghiQ", "turnLeft", "_direction", "getAngle", "forwardTo", "direction", "moveToMiddle", "turnRight", "stepSize", "push", "sin", "addAction", "sqrt", "moveTo", "forward"];
  return Kn = function() {
    return n;
  }, Kn();
}
e1.OP = { forward: H(125), forwardTo: H(115), moveTo: "moveTo", jump: "jump" };
function Ut(n, x) {
  const t = Kn();
  return Ut = function(e, s) {
    return e = e - 111, t[e];
  }, Ut(n, x);
}
const t0 = Zn;
(function(n, x) {
  const t = Zn, e = n();
  for (; []; )
    try {
      if (-parseInt(t(465)) / 1 * (-parseInt(t(464)) / 2) + -parseInt(t(435)) / 3 * (-parseInt(t(438)) / 4) + -parseInt(t(468)) / 5 + parseInt(t(461)) / 6 + parseInt(t(433)) / 7 + parseInt(t(441)) / 8 * (parseInt(t(470)) / 9) + -parseInt(t(458)) / 10 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Qn, 479488);
function Qn() {
  const n = ["moveTo", "36MHICzf", "string", "_actions", "5702648eyMBLW", "name", "33AclrPO", "addAction", "style", "254600QfLaCy", "beginPath", "toFunction", "1177112rPotBL", "toCmd", "args", "fill", "stroke", "applyTo", `
 return path;`, `var path = new Path2D();
`, "restore", "length", "fillText", "save", "toCmds", "_position", "lineTo", "arc", "toPath2D", "23408140AUyLSJ", "join", "text", "3891330oZlZCM", "push", "apply", "23266OVBSFA", "29xpXqGK", "isArray", "forwardTo", "1344900uncZnS"];
  return Qn = function() {
    return n;
  }, Qn();
}
var di = { forward: t0(455), forwardTo: t0(455), moveTo: t0(469), jump: t0(469) };
class xo extends e1 {
  constructor() {
    super();
  }
  [t0(446)](x) {
    const t = t0;
    let e = this[t(432)];
    for (let s = 0; s < e[t(450)]; s++) {
      const i = e[s];
      let r = di[i[t(434)]];
      const a = i[t(443)];
      r == null && (r = i[t(434)]);
      let o = x[r];
      if (o == null)
        throw new Error("applyTo's target has no method:" + r);
      if (a == null) {
        o[t(463)](x, []);
        continue;
      }
      a[t(450)] ? o.apply(x, a) : x[r] = a;
    }
    return this;
  }
  [t0(440)]() {
    let x = this.toCmd();
    return new Function("ctx", x);
  }
  [t0(457)]() {
    const x = t0;
    let t = this[x(442)]("path.");
    return t = x(448) + t, t = t + x(447), new Function("path", t)();
  }
  [t0(442)](x) {
    const t = t0;
    return this[t(453)](x)[t(459)](`
`);
  }
  [t0(453)](x) {
    const t = t0;
    let e = this[t(432)], s = [];
    x == null && (x = "ctx.");
    for (let i = 0; i < e[t(450)]; i++) {
      const r = e[i];
      let a = di[r[t(434)]];
      const o = r[t(443)];
      if (a == null && (a = r[t(434)]), o == null) {
        s[t(462)](x + a + "();");
        continue;
      }
      o[t(450)] ? s[t(462)](x + a + "(" + fi(o) + ");") : s[t(462)](x + a + "=" + fi(o) + ";");
    }
    return s;
  }
  circle(x) {
    const t = t0;
    return this[t(436)](t(456), [this[t(454)].x, this._position.y, x, 0, Math.PI * 2]), this;
  }
  [t0(437)](x, t) {
    return this.addAction(x, t), this;
  }
  [t0(460)](x) {
    const t = t0;
    return this.addAction(t(451), [x, this[t(454)].x, this[t(454)].y]), this;
  }
  lineTo(x) {
    return this[t0(467)](x), this;
  }
  [t0(439)]() {
    return this[t0(436)]("beginPath"), this;
  }
  [t0(445)]() {
    return this.addAction("stroke"), this;
  }
  fill() {
    const x = t0;
    return this[x(436)](x(444)), this;
  }
  save() {
    const x = t0;
    return this[x(436)](x(452)), this;
  }
  [t0(449)]() {
    const x = t0;
    return this.addAction(x(449)), this;
  }
}
function Zn(n, x) {
  const t = Qn();
  return Zn = function(e, s) {
    return e = e - 432, t[e];
  }, Zn(n, x);
}
function fi(n) {
  const x = t0;
  if (!Array[x(466)](n) && typeof n == x(471))
    return '"' + n + '"';
  let t = "";
  for (let e = 0; e < n[x(450)]; e++) {
    let s = n[e];
    typeof s == x(471) ? t += '"' + s + '"' : t += "" + s, e + 1 < n[x(450)] && (t += ",");
  }
  return t;
}
const R0 = Jn;
(function(n, x) {
  const t = Jn, e = n();
  for (; []; )
    try {
      if (parseInt(t(212)) / 1 * (-parseInt(t(208)) / 2) + parseInt(t(213)) / 3 + parseInt(t(216)) / 4 + parseInt(t(235)) / 5 * (-parseInt(t(224)) / 6) + parseInt(t(219)) / 7 + -parseInt(t(211)) / 8 + parseInt(t(217)) / 9 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})($n, 514243);
function Jn(n, x) {
  const t = $n();
  return Jn = function(e, s) {
    return e = e - 208, t[e];
  }, Jn(n, x);
}
var eo = Object[R0(228)], no = Object[R0(226)], so = (n, x, t, e) => {
  for (var s = e > 1 ? void 0 : e ? no(x, t) : x, i = n.length - 1, r; i >= 0; i--)
    (r = n[i]) && (s = (e ? r(x, t, s) : r(s)) || s);
  return e && s && eo(x, t, s), s;
};
function $n() {
  const n = ["left", "_paintText", "5591016JBmlLj", "1ElxQyH", "783252UQeZBd", "strokeAndFill", "fillStyle", "857212lcmOFi", "4146696PyCxXt", "_style", "6131790FkSQeU", "prototype", "right", "fill", "className", "6AKQaom", "ratio", "getOwnPropertyDescriptor", "rect", "defineProperty", "beginPath", "top", "down", "padding", "direction", "draw", "1332040qxWpnr", "concat", "width", "height", "665146iHjtrR"];
  return $n = function() {
    return n;
  }, $n();
}
class Ms extends O {
  constructor(x, t = 0, e = 0, s = 1, i = 1) {
    super(x, t, e, s, i), this.ratio = 0.5, this.direction = E.right;
  }
  [R0(234)](x) {
    const t = R0;
    let e = this[t(218)], s = e[t(215)];
    e.fillStyle = null, this[t(214)](x), this.mousePickupPath(x), e.fillStyle = s, x[t(229)](), x[t(215)] = s;
    let i = e.borderWidth || 0, r = e[t(232)] || 0, a = r * 2 + i * 2, o = this[t(209)] + i + r, c = this[t(230)] + i + r, h = (this[t(237)] - a) * this.ratio, l = (this[t(238)] - a) * this[t(225)];
    if (this.direction == E[t(221)])
      l = this[t(238)] - a;
    else if (this.direction == E[t(231)])
      h = this[t(237)] - a;
    else if (this[t(233)] == E[t(209)])
      o = this[t(209)] + this[t(237)] - i - r - h, l = this[t(238)] - a;
    else if (this[t(233)] == E.up)
      c = this.top + this[t(238)] - i - r - l, h = this[t(237)] - a;
    else
      throw new Error("Unknow RatioNode's direction:" + this[t(233)]);
    x[t(227)](o, c, h, l), x[t(222)](), this[t(210)](x);
  }
}
so([I("RatioNode")], Ms.prototype, R0(223), 2), V0(Ms.prototype, { serializers: { value: O[R0(220)].serializers[R0(236)]([R0(225), R0(232), R0(233)]) } });
const et = Cx;
(function(n, x) {
  const t = Cx, e = n();
  for (; []; )
    try {
      if (-parseInt(t(264)) / 1 + -parseInt(t(274)) / 2 + -parseInt(t(278)) / 3 * (parseInt(t(248)) / 4) + -parseInt(t(254)) / 5 * (-parseInt(t(259)) / 6) + -parseInt(t(277)) / 7 + parseInt(t(280)) / 8 * (-parseInt(t(281)) / 9) + parseInt(t(260)) / 10 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(ts, 102401);
function Cx(n, x) {
  const t = ts();
  return Cx = function(e, s) {
    return e = e - 247, t[e];
  }, Cx(n, x);
}
function ts() {
  const n = ["classList", "stage", "jtopo_popoupmenu", "top", "appendChild", "37040WqrfTV", "left", "initEvent", "313894MHGzAq", "3UhJMTO", "createElement", "1580216jdTuUg", "9jjVmfy", "setHtml", "hide", "remove", "div", "style", "411044kQNVFb", "item", "select", "addEventListener", "forEach", "offsetWidth", "126025acbFqx", "offsetHeight", "click", "querySelectorAll", "display", "42rneMXK", "3920300fyzjpn", "height", "width", "layersContainer", "102414VqDEDI", "none", "block", "domElement", "dispatchEvent"];
  return ts = function() {
    return n;
  }, ts();
}
class io extends Y0 {
  constructor(x, t) {
    const e = Cx;
    super(), this[e(270)] = x, this[e(267)] = this[e(282)](t);
  }
  [et(284)]() {
    const x = et;
    this[x(267)] != null && this[x(267)][x(284)]();
  }
  [et(282)](x) {
    const t = et;
    this.html = x, this[t(284)]();
    let e = document[t(279)](t(285));
    return e[t(269)].add(t(271)), this[t(270)][t(263)][t(273)](e), e.innerHTML = x, this[t(276)](e), this[t(267)] = e, this[t(283)](), e;
  }
  [et(276)](x) {
    const t = et;
    let e = this;
    x[t(257)]("a")[t(252)](function(i) {
      const r = t;
      i[r(251)](r(256), function(a) {
        const o = r;
        let c = new Event(o(250), { cancelable: !![] });
        c[o(249)] = this.innerHTML, e[o(268)](c), !c.defaultPrevented && e[o(283)]();
      });
    });
  }
  showAt(x, t) {
    const e = et;
    this[e(267)][e(247)][e(258)] = e(266), t + this[e(267)][e(255)] >= this.stage.height && t > this[e(270)][e(261)] / 2 && (t -= this[e(267)][e(255)]), x + this[e(267)][e(253)] >= this[e(270)][e(262)] && x > this.stage.width / 2 && (x -= this[e(267)].offsetWidth), this[e(267)][e(247)][e(275)] = x + "px", this.domElement[e(247)][e(272)] = t + "px";
  }
  hide() {
    const x = et;
    this[x(267)][x(247)][x(258)] = x(265);
  }
}
function Ox(n, x) {
  const t = xs();
  return Ox = function(e, s) {
    return e = e - 154, t[e];
  }, Ox(n, x);
}
const B0 = Ox;
(function(n, x) {
  const t = Ox, e = n();
  for (; []; )
    try {
      if (parseInt(t(178)) / 1 * (parseInt(t(166)) / 2) + -parseInt(t(168)) / 3 * (parseInt(t(163)) / 4) + parseInt(t(181)) / 5 + parseInt(t(154)) / 6 + parseInt(t(184)) / 7 * (-parseInt(t(167)) / 8) + -parseInt(t(155)) / 9 + parseInt(t(185)) / 10 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(xs, 592177);
function xs() {
  const n = ["style", "mousemove", "mouseup", "hide", "mouseoverTarget", "245924zdYvSw", "appendChild", "inputSystem", "749668QDoxAL", "3880pJzqLx", "9eOkYaT", "display", "fadeoutTimer", "left", "none", "layersContainer", "showAt", "mousedown", "jtopo_tooltip", "opacity", "1IYSLgx", "setHtml", "div", "3129305mcnnAe", "domElement", "fadeOut", "13825vSXDeX", "16093520XWoVIk", "initEvent", "classList", "254346ZvbFcw", "8261487oqIdNx", "stopFade", "stage"];
  return xs = function() {
    return n;
  }, xs();
}
class ro extends Y0 {
  constructor(x) {
    const t = Ox;
    super(), this.stage = x, this[t(182)] = document.createElement(t(180)), this[t(182)][t(187)].add(t(176)), this.stage[t(173)][t(164)](this.domElement), this[t(186)](), this[t(161)]();
  }
  [B0(179)](x) {
    const t = B0;
    return this[t(182)].innerHTML = x, this[t(182)];
  }
  [B0(186)]() {
    const x = B0, t = this, e = this[x(157)][x(165)];
    e.on(x(175), function() {
      t.hide();
    }), e.on(x(160), function() {
      t[x(161)]();
    }), e.on(x(159), function() {
      const s = x;
      e[s(162)] == null && t[s(183)]();
    });
  }
  [B0(174)](x, t) {
    const e = B0;
    this.stopFade(), this[e(182)][e(158)][e(169)] = "block", this[e(182)][e(158)][e(171)] = x + "px", this.domElement.style.top = t + "px", this.domElement[e(158)][e(177)] = "0.9";
  }
  hide() {
    const x = B0;
    this.stopFade(), this[x(182)][x(158)].display = x(172);
  }
  [B0(156)]() {
    const x = B0;
    this[x(170)] != null && (clearInterval(this[x(170)]), this[x(170)] = null);
  }
  [B0(183)](x = 50) {
    const t = B0;
    if (this[t(170)] != null)
      return;
    let e = this;
    this[t(170)] = setInterval(function() {
      const s = t;
      e[s(182)][s(158)][s(177)] -= 0.1, e.domElement[s(158)][s(177)] <= 0.1 && e.hide();
    }, x);
  }
}
const nt = Ax;
(function(n, x) {
  const t = Ax, e = n();
  for (; []; )
    try {
      if (parseInt(t(405)) / 1 * (-parseInt(t(382)) / 2) + -parseInt(t(370)) / 3 * (parseInt(t(394)) / 4) + parseInt(t(376)) / 5 + -parseInt(t(406)) / 6 * (-parseInt(t(386)) / 7) + -parseInt(t(408)) / 8 * (parseInt(t(402)) / 9) + -parseInt(t(395)) / 10 + -parseInt(t(378)) / 11 * (-parseInt(t(401)) / 12) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(es, 772855);
function Ax(n, x) {
  const t = es();
  return Ax = function(e, s) {
    return e = e - 365, t[e];
  }, Ax(n, x);
}
class ao {
  constructor(x) {
    const t = Ax;
    this.editor = x, this.stage = x[t(369)];
    let e = document.createElement(t(377));
    e[t(388)][t(391)]("jtopo_input_textfield"), this[t(369)][t(366)][t(400)](e);
    let s = this;
    e[t(384)] = function(i) {
      s[t(384)](i);
    }, this[t(377)] = e;
  }
  [nt(397)](x, t) {
    const e = nt;
    let s = { x: t.x - 50, y: t.y };
    if (x[e(396)]) {
      let i = x[e(379)](E.lt);
      s = x.toStageXY(i.x, i.y);
      let r = Ls(x.width, 60, 100), a = Ls(x[e(387)], 60, 100);
      this[e(371)](r, a);
    } else if (x.isLink)
      return;
    this[e(403)](x[e(380)]), this[e(372)](s.x, s.y);
  }
  [nt(403)](x) {
    this.textarea.value = x;
  }
  setSize(x, t) {
    const e = nt;
    this[e(377)][e(365)][e(383)] = x + "px", this[e(377)][e(365)][e(387)] = t + "px";
  }
  show(x, t) {
    const e = nt;
    this.textarea[e(365)][e(398)] = e(385), this.textarea[e(375)](), x != null && (x = Math[e(389)](0, x), t = Math[e(389)](0, t), this[e(377)][e(365)].left = x, this[e(377)][e(365)][e(393)] = t), this[e(407)][e(392)]();
  }
  hide() {
    const x = nt;
    this[x(407)][x(373)](), this.textarea[x(365)][x(398)] = "none";
  }
  [nt(384)](x) {
    const t = nt;
    let e = this[t(377)];
    if (x[t(374)] == "Enter" && (x[t(368)] || x.metaKey)) {
      let s = this.stage[t(390)][t(399)];
      if (s == null)
        return;
      s[t(380)] = e[t(381)], e.style[t(398)] = "none", this.editor[t(367)](), this[t(404)]();
    }
  }
}
function es() {
  const n = ["1119320BYWYxJ", "isNode", "attachTo", "display", "pickedObject", "appendChild", "12PXTYwH", "27zfQXyd", "setValue", "hide", "687HdlYKZ", "8526036KyjmVN", "editor", "2054328WsQSrN", "style", "layersContainer", "update", "ctrlKey", "stage", "1481466zRENNW", "setSize", "show", "leaveTextInputMode", "key", "focus", "107575YHaaRI", "textarea", "18485456RXjbzw", "positionToLocalPoint", "text", "value", "1398pyfHBF", "width", "onkeydown", "block", "7SKBeTt", "height", "classList", "max", "inputSystem", "add", "enterTextInputMode", "top", "8jCpTUs"];
  return es = function() {
    return n;
  }, es();
}
function Ts(n, x) {
  var t = ns();
  return Ts = function(e, s) {
    e = e - 364;
    var i = t[e];
    return i;
  }, Ts(n, x);
}
(function(n, x) {
  for (var t = Ts, e = n(); []; )
    try {
      var s = -parseInt(t(369)) / 1 * (parseInt(t(368)) / 2) + -parseInt(t(365)) / 3 + parseInt(t(367)) / 4 * (parseInt(t(366)) / 5) + parseInt(t(373)) / 6 * (parseInt(t(370)) / 7) + parseInt(t(371)) / 8 * (parseInt(t(364)) / 9) + -parseInt(t(374)) / 10 + -parseInt(t(372)) / 11;
      if (s === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(ns, 172727);
function ns() {
  var n = ["5466BRFART", "1430840hBkrSk", "468uoRxWk", "380850vEOqse", "150cWGiiv", "38516RvviFY", "116glJoKE", "1044MLVJuF", "2296FkWeHr", "12544NfBAIR", "1824911POWpqw"];
  return ns = function() {
    return n;
  }, ns();
}
(function(n, x) {
  for (var t = Fs, e = n(); []; )
    try {
      var s = -parseInt(t(171)) / 1 + -parseInt(t(176)) / 2 + -parseInt(t(172)) / 3 + parseInt(t(175)) / 4 + parseInt(t(174)) / 5 + -parseInt(t(169)) / 6 * (-parseInt(t(173)) / 7) + parseInt(t(168)) / 8 * (-parseInt(t(170)) / 9);
      if (s === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(ss, 590679);
function ss() {
  var n = ["758128nQGnTo", "527704nFhNjS", "32394VJAwcl", "63rgiQsS", "710027romBnG", "334479StEQrl", "175QiKAKk", "5031600LJBPrI", "4446836wBYCIB"];
  return ss = function() {
    return n;
  }, ss();
}
function Fs(n, x) {
  var t = ss();
  return Fs = function(e, s) {
    e = e - 168;
    var i = t[e];
    return i;
  }, Fs(n, x);
}
const oo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AENode: Zi,
  Animation: Ki,
  AnimationSystem: Qi,
  ArcLink: Gx,
  ArrowShape: Jt,
  AutoFoldLink: Yt,
  BezierLink: Yn,
  CircleNode: At,
  Collection: W,
  Color: bt,
  ColorKeywords: x1,
  CoordinateSystem: Rs,
  Cursor: h1,
  CurveLink: Ln,
  Debug: yt,
  DefaultZIndexs: Mx,
  Direction: Ft,
  DisplayObject: F,
  DomUtil: G0,
  Edge: Os,
  EffectSystem: Ji,
  Endpoint: J0,
  EndpointFixedName: M0,
  EndpointFixedPoint: ot,
  EndpointFunction: Tx,
  EndpointNearest: pt,
  EndpointSegment: at,
  EventNames: L0,
  EventTarget: Y0,
  FlexionalLink: ft,
  FoldLink: Lx,
  ForceDirectLayout: Ua,
  GeometricCoordinateSystem: Ri,
  Graph: Px,
  GraphSystem: qt,
  HandlerLayer: ls,
  HtmlImage: Cs,
  InputEvent: k0,
  InputSystem: qs,
  InputTextfield: ao,
  Intersect: hs,
  Keyboard: Yi,
  Layer: ht,
  LayerLocalDeep: H0,
  LayoutBase: Wx,
  LayoutSystem: $i,
  LinearGradient: N1,
  Link: Y,
  LinkCoordinateSystem: Hi,
  LinkHelper: Ys,
  Node: O,
  NodeHelper: Q0,
  OBB: rx,
  PI2: vs,
  Path: wa,
  Pattern: W1,
  Point: A,
  PopupMenu: io,
  Position: E,
  PositionInvertMap: l1,
  RadialGradient: R1,
  RatioNode: Ms,
  RectDefaultPositions: rt,
  RectShape: jx,
  Rectangle: V,
  ResourceLoader: X0,
  SelectedGroup: Vi,
  SerializerSystem: Ot,
  Shape: p0,
  Stage: ka,
  StageLocalDeep: Bt,
  StageMode: O0,
  Style: m0,
  TextNode: gt,
  Theme: px,
  TipNode: Xx,
  Toolbar: Gi,
  Tooltip: ro,
  TopoEvent: ki,
  TopoPainter: xo,
  Transform: as,
  VERSION: xe,
  Vertext: Tt,
  VideoNode: qx,
  assertEquals: u1,
  assertNotNull: W0,
  assertTrue: _i,
  clickEvent: Oi,
  constraint: pr,
  copyKeyboardEvent: vi,
  copyMouseEvent: X1,
  dblclickEvent: Ai,
  getArrowDIR: He,
  getCS: Hs,
  getChildrenAABB: ji,
  getClass: Ds,
  getEndpointNormal: Ss,
  getLineIntersectPoint: Me,
  getLineIntersectPoints: zi,
  getNearestAnchorOnObjects: sr,
  getNearestPointOnLines: zs,
  getNearestPointOnObjectsOBB: nr,
  getNearestPositionName: ir,
  getParallelLine: J1,
  getParallelLines: Z1,
  getPointByEndpoint: dx,
  getRectPositionDirection: js,
  getRectPositionRotate: mi,
  getXYInDom: Xi,
  isHorizontal: Nx,
  jtopo: _0,
  mousedownEvent: Li,
  mousedragendEvent: Es,
  mouseenterEvent: Mi,
  mousemoveEvent: Y1,
  mouseoutEvent: Ti,
  mouseupEvent: Ci,
  newEndpoint: Ps,
  pointProjectToLine: tr,
  randomColor: to,
  range: Ls,
  regClass: f1,
  removeEvent: Di,
  selectedEvent: Fi,
  setProto: I,
  touchendEvent: Ei,
  touchmoveEvent: Si,
  touchstartEvent: Pi,
  unselectedEvent: Bi,
  updateTransformInNewParent: Ns,
  util: N0,
  vec2: z
}, Symbol.toStringTag, { value: "Module" }));
function is(n, x) {
  const t = rs();
  return is = function(e, s) {
    return e = e - 385, t[e];
  }, is(n, x);
}
const bi = is;
(function(n, x) {
  const t = is, e = n();
  for (; []; )
    try {
      if (parseInt(t(386)) / 1 + parseInt(t(385)) / 2 + -parseInt(t(390)) / 3 + parseInt(t(394)) / 4 * (parseInt(t(396)) / 5) + -parseInt(t(392)) / 6 * (-parseInt(t(395)) / 7) + parseInt(t(391)) / 8 + parseInt(t(389)) / 9 * (-parseInt(t(388)) / 10) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(rs, 269663);
let pi = _0;
Object[bi(393)](pi, oo), delete pi[bi(387)];
function rs() {
  const n = ["assign", "4FGRiqa", "2989eWTlai", "914205CMwyjc", "528614eCOXAe", "345132bLImLZ", "jtopo", "9470kqQzar", "9693ZalAiB", "1059213ELWJMP", "3110288jlVakp", "6486SRcZNz"];
  return rs = function() {
    return n;
  }, rs();
}
export {
  Zi as AENode,
  Ki as Animation,
  Qi as AnimationSystem,
  Gx as ArcLink,
  Jt as ArrowShape,
  Yt as AutoFoldLink,
  Yn as BezierLink,
  At as CircleNode,
  W as Collection,
  bt as Color,
  x1 as ColorKeywords,
  Rs as CoordinateSystem,
  h1 as Cursor,
  Ln as CurveLink,
  yt as Debug,
  Mx as DefaultZIndexs,
  Ft as Direction,
  F as DisplayObject,
  G0 as DomUtil,
  Os as Edge,
  Ji as EffectSystem,
  J0 as Endpoint,
  M0 as EndpointFixedName,
  ot as EndpointFixedPoint,
  Tx as EndpointFunction,
  pt as EndpointNearest,
  at as EndpointSegment,
  L0 as EventNames,
  Y0 as EventTarget,
  ft as FlexionalLink,
  Lx as FoldLink,
  Ua as ForceDirectLayout,
  Ri as GeometricCoordinateSystem,
  Px as Graph,
  qt as GraphSystem,
  ls as HandlerLayer,
  Cs as HtmlImage,
  k0 as InputEvent,
  qs as InputSystem,
  ao as InputTextfield,
  hs as Intersect,
  Yi as Keyboard,
  ht as Layer,
  H0 as LayerLocalDeep,
  Wx as LayoutBase,
  $i as LayoutSystem,
  N1 as LinearGradient,
  Y as Link,
  Hi as LinkCoordinateSystem,
  Ys as LinkHelper,
  O as Node,
  Q0 as NodeHelper,
  rx as OBB,
  vs as PI2,
  wa as Path,
  W1 as Pattern,
  A as Point,
  io as PopupMenu,
  E as Position,
  l1 as PositionInvertMap,
  R1 as RadialGradient,
  Ms as RatioNode,
  rt as RectDefaultPositions,
  jx as RectShape,
  V as Rectangle,
  X0 as ResourceLoader,
  Vi as SelectedGroup,
  Ot as SerializerSystem,
  p0 as Shape,
  ka as Stage,
  Bt as StageLocalDeep,
  O0 as StageMode,
  m0 as Style,
  gt as TextNode,
  px as Theme,
  Xx as TipNode,
  Gi as Toolbar,
  ro as Tooltip,
  ki as TopoEvent,
  xo as TopoPainter,
  as as Transform,
  xe as VERSION,
  Tt as Vertext,
  qx as VideoNode,
  u1 as assertEquals,
  W0 as assertNotNull,
  _i as assertTrue,
  Oi as clickEvent,
  pr as constraint,
  vi as copyKeyboardEvent,
  X1 as copyMouseEvent,
  Ai as dblclickEvent,
  He as getArrowDIR,
  Hs as getCS,
  ji as getChildrenAABB,
  Ds as getClass,
  Ss as getEndpointNormal,
  Me as getLineIntersectPoint,
  zi as getLineIntersectPoints,
  sr as getNearestAnchorOnObjects,
  zs as getNearestPointOnLines,
  nr as getNearestPointOnObjectsOBB,
  ir as getNearestPositionName,
  J1 as getParallelLine,
  Z1 as getParallelLines,
  dx as getPointByEndpoint,
  js as getRectPositionDirection,
  mi as getRectPositionRotate,
  Xi as getXYInDom,
  Nx as isHorizontal,
  _0 as jtopo,
  Li as mousedownEvent,
  Es as mousedragendEvent,
  Mi as mouseenterEvent,
  Y1 as mousemoveEvent,
  Ti as mouseoutEvent,
  Ci as mouseupEvent,
  Ps as newEndpoint,
  tr as pointProjectToLine,
  to as randomColor,
  Ls as range,
  f1 as regClass,
  Di as removeEvent,
  Fi as selectedEvent,
  I as setProto,
  Ei as touchendEvent,
  Si as touchmoveEvent,
  Pi as touchstartEvent,
  Bi as unselectedEvent,
  Ns as updateTransformInNewParent,
  N0 as util,
  z as vec2
};
