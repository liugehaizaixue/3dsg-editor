import { EventTarget as hx, Position as u, ColorKeywords as gx, LinkHelper as u0, getClass as Q0, Link as H, Node as q, PositionInvertMap as yx, CircleNode as nx, DefaultZIndexs as Z0, Cursor as T, AutoFoldLink as X, isHorizontal as q0, CurveLink as mx, BezierLink as wx, Style as Cx, assertNotNull as sx, EndpointSegment as fx, EndpointFixedName as ux, EndpointFunction as vx, getNearestPointOnObjectsOBB as kx, getNearestAnchorOnObjects as Sx, DisplayObject as _x, LayerLocalDeep as $0, PopupMenu as Lx, EventNames as f0, StageMode as Ex, ResourceLoader as ix, InputTextfield as Px, Tooltip as Hx } from "@jtopo/core";
const G = n0;
(function(n, t) {
  const x = n0, e = n();
  for (; []; )
    try {
      if (-parseInt(x(175)) / 1 * (parseInt(x(164)) / 2) + -parseInt(x(176)) / 3 + -parseInt(x(183)) / 4 * (parseInt(x(189)) / 5) + -parseInt(x(180)) / 6 * (parseInt(x(187)) / 7) + parseInt(x(167)) / 8 + -parseInt(x(186)) / 9 * (parseInt(x(172)) / 10) + -parseInt(x(191)) / 11 * (-parseInt(x(160)) / 12) === t)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(_0, 492452);
function n0(n, t) {
  const x = _0();
  return n0 = function(e, s) {
    return e = e - 156, x[e];
  }, n0(n, t);
}
class ht extends hx {
  constructor(t) {
    const x = n0;
    super(), this[x(188)] = t, this[x(162)], this.initDom(), this.hide();
  }
  [G(182)]() {
    const t = G;
    let x = document[t(178)](t(179));
    return x.classList.add(t(158)), this[t(188)][t(184)][t(168)](x), this[t(162)] = x, this;
  }
  [G(190)]() {
    const t = G;
    return this[t(162)][t(156)].display = "none", this;
  }
  [G(157)]() {
    const t = G;
    return this.domElement[t(156)][t(163)] = t(169), this;
  }
  [G(181)]() {
    return this[G(170)];
  }
  [G(165)](t) {
    const x = G;
    let e = this;
    return t[x(177)][x(174)](function(s) {
      const a = x;
      let i = document.createElement(a(179));
      i[a(185)].add(a(166)), i[a(171)] = s[a(161)], i.setAttribute(a(173), !![]), i[a(159)] = function(r) {
        const o = a;
        e[o(170)] = s;
      }, e[a(162)].appendChild(i);
    }), this;
  }
}
function _0() {
  const n = ["172FIopvc", "layersContainer", "classList", "51156IWFLeD", "1206751eyfQAt", "stage", "85695yhBPgt", "hide", "24211CRFLTK", "style", "show", "jtopo_iconsPanel", "ondragstart", "13404nbUDrC", "iconHtml", "domElement", "display", "2iBeKOf", "setConfig", "item", "5837984SeNkmi", "appendChild", "block", "dargItem", "innerHTML", "380spkeQu", "draggable", "forEach", "281481BhzpJa", "2832552VIFjfC", "items", "createElement", "div", "18pgcTte", "getDragItem", "initDom"];
  return _0 = function() {
    return n;
  }, _0();
}
(function(n, t) {
  const x = b0, e = n();
  for (; []; )
    try {
      if (-parseInt(x(180)) / 1 * (parseInt(x(184)) / 2) + parseInt(x(188)) / 3 * (parseInt(x(170)) / 4) + parseInt(x(164)) / 5 + -parseInt(x(179)) / 6 + -parseInt(x(186)) / 7 * (parseInt(x(152)) / 8) + parseInt(x(181)) / 9 * (-parseInt(x(157)) / 10) + parseInt(x(185)) / 11 === t)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(p0, 353213);
function p0() {
  const n = ["textOffsetY", "draggable", "_#endArrow", "removeAllChild", "_#label", "2244910yoGMQx", "userData", "filter", "origin", "begin", "setBegin", "4ECSXYj", "updatePoints", "label", "_#beginArrow", "name", "editable", "target", "replaceChild", "inLinks", "2452620MGiZOK", "29509sbNEyu", "9mtJvus", "forEach", "outLinks", "18OkleTR", "15123878Iqnxiw", "364259JJgHoj", "getSegmentPoints", "515793DplWiP", "end", "104kqDcta", "frozen", "style", "updatezIndex", "children", "2917660RvBaRp", "endArrow"];
  return p0 = function() {
    return n;
  }, p0();
}
function b0(n, t) {
  const x = p0();
  return b0 = function(e, s) {
    return e = e - 152, x[e];
  }, b0(n, t);
}
function Ax(n, t) {
  const x = b0;
  ["id", x(154), x(174), "x", "y", x(153), x(175), x(160), x(165), "textOffsetX", x(159)][x(166)]((i) => i != "className")[x(182)]((i) => {
    n[i] = t[i];
  }), n[x(169)](t[x(168)][x(176)], t[x(168)]), n.setEnd(t.end.target, t[x(189)]), n[x(162)](), n.addChilds(t[x(156)]);
  const s = t.parent;
  s && (s[x(177)](t, n), s[x(155)](), s.updateChildrenDeep(!![])), n[x(171)]();
  let a = n[x(187)]().length;
  n.children[x(182)]((i) => {
    const r = x;
    i[r(167)][0] + 1 >= a && (i[r(167)][0] = 0), i.name == r(163) ? n[r(172)] = i : i.name == r(173) ? (n.beginArrow = i, i[r(154)] = n[r(154)]) : i.name == r(161) && (n[r(158)] = i, i.style = n[r(154)]);
  }), t[x(178)] && t[x(178)].forEach((i) => {
    let o = i[x(189)];
    o.target = i;
  }), t[x(183)] && t[x(183)][x(182)]((i) => {
    let o = i[x(168)];
    o.target = i;
  });
}
const y = s0;
function I0() {
  const n = ["borderRadius", "endArrow", "setCurrentObject", "inputSystem", "normal 10px arial", "selectedGroup", "2430855LJnGjs", "borderWidth", "open", "Link", "getValue", "BezierLink", "基线对齐", "normal", "appendChild", "textOffsetX", "CurveLink", "frozen", "beginOffset", "basic", "replace", "update", "string", "absolute", "left", "可拖拽", "italic", "domElement", "beginArrowSize", "setBeginArrow", "垂直偏移量", "0px", "property", "split", "resizeTo", "backgroundColor", "beginArrow", "__folders", "globalAlpha", "13301448gMLojf", "右下角", "Georgia", "display", "text", "stage", "square", "fontWeight", "1,0", "remove", "__controllers", "createArrow", "hide", "getCtrollerValue", "font", "close", "round", "isLink", "lineDash", "currentLayer", "style", "folders", "className", "textAlign", "block", "object", "结束偏移", "setEndArrow", "8062945jydMvP", "字体重量", "showProperty", "edges", "末端样式", "2,2", "attachTo", "ArcLink", "图片路径", "show", "左上角", "center", "onChange", "forEach", "textPosition", "isNode", "endArrowSize", "label", "newFolder", "butt", "setFolderValues", "visible", "右上角", "AutoFoldLink", "文本对齐", "fontFamily", "endOffset", "Arial", "onFinishChange", "connectable", "height", "旋转度数", "fontSize", "圆弧方向", "top", "3,3", "边框/线宽度", "连线属性", "dat", "圆角大小", "zIndex", "gui", "3,7", "px ", "3830876fQlElu", "文本位置", "基础属性", "1472538wEBmHt", "direction", "节点属性", "水平偏移量", "textBaseline", "indexOf", "6637482EMplZx", "init", "边的条数", "add", "width", "开始偏移", "#000000", "color", "结束箭头大小", "addColor", "bottom", "position", "Color", "updatezIndex", "right", "可连线", "7,3", "middle", "editor", "nodeCtrlBox", "7qSyBhs", "绘制不重叠部", "toLowerCase", "find", "parentId", "rotation", "Verdana", "bold", "name", "1803072BvYPlx", "draggable", "getFolder", "addFolder", "可被编辑", "keys"];
  return I0 = function() {
    return n;
  }, I0();
}
function s0(n, t) {
  const x = I0();
  return s0 = function(e, s) {
    return e = e - 275, x[e];
  }, s0(n, t);
}
(function(n, t) {
  const x = s0, e = n();
  for (; []; )
    try {
      if (-parseInt(x(287)) / 1 + parseInt(x(407)) / 2 + parseInt(x(299)) / 3 + -parseInt(x(404)) / 4 + parseInt(x(360)) / 5 + -parseInt(x(413)) / 6 + parseInt(x(278)) / 7 * (parseInt(x(332)) / 8) === t)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(I0, 954786);
class ft {
  constructor(t, x) {
    const e = s0;
    this[e(276)] = t, this[e(398)] = x, this[e(401)] = new x.GUI(), this[e(357)], this[e(353)] = {};
  }
  [y(295)](t) {
    const x = y, e = this[x(276)], s = this[x(276)][x(337)];
    s[x(296)].pickedObject = t, s[x(298)].removeAll().add(t), t.isLink ? e.linkCtrlBox[x(366)](t) : t[x(375)] && e[x(277)][x(366)](t), e[x(314)](), this[x(362)](t);
  }
  [y(362)](t) {
    const x = y;
    if (t == null)
      return;
    this[x(312)] = { id: t.id, name: "", parentId: t[x(282)], x: 1, y: 1, imageSrc: "", width: 1, height: 1, text: "", zIndex: 1, beginArrowSize: 0, endArrowSize: 0, beginOffset: 0, endOffset: 0, edges: 3, rotation: 0, className: x(383), direction: 1, frozen: ![], draggable: !![], editable: !![], connectable: !![] }, t[x(349)] && (t[x(329)] && t[x(329)][x(381)] && (this.basic[x(321)] = t[x(329)][x(417)]), t[x(294)] && t[x(294)][x(381)] && (this[x(312)][x(376)] = t[x(294)][x(417)])), this.style = { lineDash: null, backgroundColor: null, textPosition: u[x(371)], textAlign: "", borderRadius: 0, textBaseline: "", borderColor: null, color: x(419), borderWidth: 1, fontWeight: x(285), fontSize: "12", fontFamily: "arial", lineCap: "butt", globalAlpha: 1, textOffsetX: 0, textOffsetY: 0 };
    const e = this[x(312)], s = this.style;
    Object[x(292)](e).forEach(function(o) {
      if (t[o] != null) {
        let d = t[o];
        o == "rotation" && (d = d * (180 / Math.PI)), e[o] = d;
      }
    }), Object[x(292)](s)[x(373)](function(o) {
      const d = x;
      let c = t[d(352)][o];
      if (t.style[o] != null && (s[o] = c), o[d(412)](d(425)) != -1 && c && c[d(280)]) {
        let l = gx[c[d(280)]()];
        l && (s[o] = l);
      }
    }), this[x(357)] == null && (this.object = t, this[x(414)]()), this[x(357)] = t;
    let a = t[x(352)][x(300)];
    a == null && (a = 1), s[x(300)] = a;
    let i = t[x(352)][x(346)];
    i == null && (i = x(297));
    const r = i[x(326)](" ");
    s[x(339)] = r[0], s[x(392)] = r[1][x(313)]("px", ""), s[x(385)] = r[2], this[x(380)](e, s), t.isNode && this[x(289)](x(409)) != null ? (this.getFolder(x(409))[x(369)](), this[x(289)](x(397))[x(344)]()) : this.getFolder(x(397)) != null && (this.getFolder(x(397))[x(369)](), this[x(289)](x(409)).hide());
  }
  [y(378)](t) {
    const x = y, e = this.gui[x(290)](t);
    return this.folders[t] = e, e;
  }
  [y(289)](t) {
    return this[y(353)][t];
  }
  [y(345)](t, x) {
    const e = y;
    return this.getCtroller(t, x)[e(303)]();
  }
  getCtroller(t, x) {
    const e = y;
    return this.getFolder(t)[e(342)][e(281)]((a) => a[e(325)] == x);
  }
  [y(380)](t, x) {
    const e = y;
    Object[e(292)](this[e(401)][e(330)])[e(373)]((a) => {
      const i = e;
      this[i(401)].__folders[a][i(342)][i(373)](function(d) {
        let l = d[i(325)];
        t[l] != null ? d.setValue(t[l]) : x[l] != null && d.setValue(x[l]);
      });
    });
  }
  [y(414)]() {
    const t = y, x = this, e = this[t(276)], s = e.stage, a = e[t(351)], i = this[t(312)], r = this.style, o = [t(370), "顶部", t(382), "右边", "中心", "右边", "左下角", "底部", t(333)], d = ["lt", "ct", "rt", "lm", t(371), "rm", "lb", "cb", "rb"], c = {};
    o.forEach(function(f, w) {
      c[f] = d[w];
    });
    let l = { 居中: "center", 左: t(317), 右: t(427) }, _ = { 顶部: t(394), 中心: t(275), 底部: t(423) }, p = { 正常: t(306), 加粗: t(285), 斜体: t(319) }, g = { 直线: t(302), 自动折线: t(383), 圆弧: t(367), 曲线: t(309), 贝塞尔曲线: t(304) }, D = { 顺时针: -1, 逆时针: 1 }, R = { 实线: t(340), "虚线1,1": "1,1", "虚线2,2": t(365), "虚线3,3": t(395), "虚线7,3": t(429), "虚线3,7": t(402), "虚线10,1": "10,1", "虚线1,10": "1,10" }, P = [t(387), "宋体", t(334), t(284), "仿宋", "隶书"], Ix = { 默认: t(379), 圆形: t(348), 矩形: t(338) };
    t(279);
    function b() {
      const f = t;
      let w = this[f(325)], m = this[f(303)]();
      w == f(400) ? a[f(426)]() : w == f(283) && (m = m * (Math.PI / 180));
      let I = x.object;
      if (I[f(349)]) {
        if (w == f(321))
          if (m != 0) {
            let k = I[f(329)];
            k == null ? (k = u0[f(343)](), I[f(322)](k)) : k.resizeTo(m, m), k[f(369)]();
          } else
            I[f(329)] && I[f(329)].hide();
        else if (w == "endArrowSize")
          if (m != 0) {
            let k = I[f(294)];
            k == null ? (k = u0[f(343)](), I[f(359)](k)) : k[f(327)](m, m), k[f(369)]();
          } else
            I[f(294)] && I[f(294)].hide();
        else if (w == "className") {
          let k = m;
          if (I.className !== k) {
            let X0 = Q0(k), ax = new X0();
            Ax(ax, I), I = ax, x[f(295)](I);
          }
        }
      }
      w != f(354) && (I[w] = m), I.imageSrc != null && (I[f(352)][f(328)] = null), e[f(314)]();
    }
    function A() {
      const f = t;
      let w = this[f(325)], m = this[f(303)](), I = x[f(357)], k = I[f(352)];
      if (w == f(385) || w == f(339) || w == "fontSize") {
        let X0 = x.getCtrollerValue("文本", f(339)) + " " + x[f(345)]("文本", f(392)) + f(403) + x[f(345)]("文本", f(385));
        w = f(346), m = X0;
      } else
        w == f(350) ? m == null || m == "" ? m = null : typeof m == f(315) && (m = m[f(326)](",")) : w == f(328) && x.object[f(349)] && (m = null);
      I instanceof H && w[f(412)]("font") != -1 && I[f(377)] != null && (I[f(377)][f(352)][w] = m), k[w] = m, I.imageSrc != null && (I[f(352)][f(328)] = null), e[f(314)]();
    }
    const O = this[t(378)](t(406));
    O.add(i, "id").onFinishChange(b)[t(286)]("ID"), O[t(416)](i, t(286)).onFinishChange(b)[t(286)](t(286)), O[t(416)](i, t(336))[t(388)](b)[t(286)]("文字"), O.add(i, t(400), 0, 1e3, 1)[t(372)](b)[t(286)]("层级"), O[t(416)](i, t(310), ![]).onChange(b)[t(286)]("锁定子元素"), O[t(416)](i, t(288), !![])[t(372)](b)[t(286)](t(318)), O[t(416)](i, "editable", !![])[t(372)](b)[t(286)](t(291)), O[t(416)](i, t(389), !![])[t(372)](b)[t(286)](t(428)), O[t(416)](r, t(300), 0, 100).onChange(A)[t(286)](t(396)), O[t(416)](r, t(350), R)[t(372)](A)[t(286)]("虚实"), O[t(416)](r, t(331), 0, 1, 0.1)[t(372)](A)[t(286)]("整体透明度"), O[t(301)]();
    const M = this[t(378)](t(409));
    M[t(416)](i, "imageSrc").onFinishChange(b)[t(286)](t(368)), M[t(416)](i, "x")[t(388)](b), M[t(416)](i, "y")[t(388)](b), M[t(416)](i, t(417), 1)[t(388)](b)[t(286)]("宽度"), M[t(416)](i, t(390), 1)[t(388)](b)[t(286)]("高度"), M[t(416)](i, t(283), -360, 360, 1)[t(372)](b)[t(286)](t(391)), M.add(r, t(293))[t(372)](A)[t(286)](t(399)), M[t(416)](i, t(363), 3, 24)[t(372)](b)[t(286)](t(415)), M[t(301)]();
    const W = this[t(378)](t(397));
    W[t(416)](i, t(354), g)[t(372)](b)[t(286)]("线型"), W.add(i, t(408), D)[t(372)](b)[t(286)](t(393)), W[t(416)](i, t(321), 0, 50)[t(372)](b).name("开始箭头大小"), W[t(416)](i, t(376), 0, 50)[t(372)](b).name(t(421)), W[t(416)](i, t(311), -30, 30).onChange(b)[t(286)](t(418)), W[t(416)](i, t(386), -30, 30)[t(372)](b)[t(286)](t(358)), W.add(r, "lineCap", Ix)[t(372)](A).name(t(364)), W.open();
    const F = this[t(378)]("文本");
    F[t(416)](r, t(385), P)[t(372)](A)[t(286)]("字体名称"), F[t(416)](r, t(392), 1, 1e3)[t(372)](A)[t(286)]("大小"), F[t(416)](r, "fontWeight", p)[t(372)](A)[t(286)](t(361)), F[t(422)](r, t(420)).onChange(A)[t(286)]("颜色"), F.add(r, t(374), c)[t(372)](A)[t(286)](t(405)), F.add(r, t(355), l)[t(372)](A)[t(286)](t(384)), F[t(416)](r, t(411), _).onChange(A)[t(286)](t(305)), F[t(416)](r, t(308))[t(372)](b)[t(286)](t(410)), F[t(416)](r, "textOffsetY").onChange(b)[t(286)](t(323));
    let Z = this[t(401)].domElement;
    Z[t(341)](), s.layersContainer[t(307)](Z), Z[t(352)][t(424)] = t(316), Z.style[t(427)] = "-15px", Z[t(352)][t(394)] = t(324), Z[t(352)][t(400)] = 1e3;
  }
  open() {
    const t = y;
    this[t(401)][t(301)]();
  }
  [y(347)]() {
    const t = y;
    this[t(401)][t(347)]();
  }
  [y(344)]() {
    const t = y;
    this[t(401)][t(320)][t(352)][t(335)] = "none";
  }
  [y(369)]() {
    const t = y;
    this.gui.domElement.style[t(335)] = t(356);
  }
}
function a0(n, t) {
  const x = g0();
  return a0 = function(e, s) {
    return e = e - 182, x[e];
  }, a0(n, t);
}
const B = a0;
(function(n, t) {
  const x = a0, e = n();
  for (; []; )
    try {
      if (-parseInt(x(197)) / 1 + parseInt(x(190)) / 2 + -parseInt(x(198)) / 3 + parseInt(x(200)) / 4 + parseInt(x(185)) / 5 * (parseInt(x(211)) / 6) + -parseInt(x(204)) / 7 * (parseInt(x(216)) / 8) + parseInt(x(209)) / 9 === t)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(g0, 570872);
class Ox extends q {
  constructor(t, x) {
    const e = a0;
    super(), this[e(203)] = !![], this.dragBegin = ![], this.nodeCtrlBox = t, this[e(188)] = t.editor, this[e(220)] = this.editor[e(220)], this[e(193)] = this[e(220)][e(193)], this.resizeTo(12, 12), this[e(201)]({ border: "1px solid black", backgroundColor: e(205) }), this[e(213)] = x;
  }
  [B(189)]() {
  }
  [B(196)]() {
    const t = B;
    let x, e = this[t(213)];
    e == u.lt ? x = t(212) : e == u.ct ? x = t(208) : e == u.rt ? x = t(219) : e == u.lm ? x = t(206) : e == u.rm ? x = t(186) : e == u.lb ? x = "sw-resize" : e == u.cb ? x = t(183) : e == u.rb && (x = t(192)), this[t(188)][t(220)][t(182)](x);
  }
  [B(221)](t) {
  }
  [B(187)](t) {
    t[B(199)]();
  }
  [B(191)](t) {
    t[B(199)]();
  }
  [B(210)](t) {
    const x = B;
    t[x(199)]();
    let e = this[x(218)], s = e.editor, a = s[x(220)], i = this[x(213)];
    if (this[x(193)][x(184)]().length == 0)
      throw new Error(x(215));
    let d = a.inputSystem.pickedObject, c = d[x(217)](t.x, t.y), l = d.positionToLocalPoint(i), _ = c.x - l.x, p = c.y - l.y;
    i == u.lt ? (_ = -_, p = -p) : i == u.ct ? (_ = 0, p = -p) : i == u.rt ? p = -p : i == u.lm ? (_ = -_, p = 0) : i == u.rm ? p = 0 : i == u.lb ? _ = -_ : i == u.cb ? _ = 0 : i == u.rb, this[x(195)](d, { dx: _, dy: p }, i);
  }
  [B(195)](t, x, e) {
    const s = B;
    let a = yx[e], i = t.positionToLocalPoint(a);
    i = t[s(194)](i), t[s(202)](x.dx, x.dy);
    let r = t.positionToLocalPoint(a);
    r = t[s(194)](r);
    let o = i.x - r.x, d = i.y - r.y;
    t[s(214)](o, d), this[s(218)][s(207)]();
  }
}
function g0() {
  const n = ["nw-resize", "name", "translateWith", "selectedGroup.length is 0!", "82768xlNeXm", "stageToLocalXY", "nodeCtrlBox", "ne-resize", "stage", "mouseoutHandler", "setCursor", "s-resize", "getNoChildrensObjects", "25GbGMBH", "e-resize", "mousedownHandler", "editor", "mouseenterHandler", "1673520oEhHdj", "mouseupHandler", "se-resize", "selectedGroup", "transformPoint", "adjustFixedDirection", "mousemoveHandler", "67076HvzPLP", "3073404jmIyrh", "preventDefault", "934116xhVVSw", "css", "resizeWith", "isNodeResizePoint", "385mcRMkb", "orange", "w-resize", "updateSize", "n-resize", "6571368LbTrXt", "mousedragHandler", "517206MLJDGY"];
  return g0 = function() {
    return n;
  }, g0();
}
function Q(n, t) {
  const x = y0();
  return Q = function(e, s) {
    return e = e - 170, x[e];
  }, Q(n, t);
}
const U = Q;
(function(n, t) {
  const x = Q, e = n();
  for (; []; )
    try {
      if (-parseInt(x(189)) / 1 * (parseInt(x(187)) / 2) + -parseInt(x(199)) / 3 + parseInt(x(202)) / 4 + parseInt(x(207)) / 5 * (-parseInt(x(179)) / 6) + -parseInt(x(182)) / 7 * (parseInt(x(172)) / 8) + parseInt(x(195)) / 9 * (parseInt(x(176)) / 10) + parseInt(x(186)) / 11 === t)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(y0, 811571);
function y0() {
  const n = ["3850404hnBhYd", "inputSystem", "length", "atan2", "css", "2619025ocfgIF", "orange", "mouseupHandler", "positionToLocalPoint", "stage", "6176YdTzcJ", "black", "updateSize", "getStageTransform", "5764390StaEwp", "center", "parent", "6yBBjQv", "mouseInitAngle", "preventDefault", "8666wqoNnf", "setCursor", "isNodeRotatePoint", "selectedGroup", "27404278dbwpPY", "40lZDqpx", "getNoChildrensObjects", "51583xPOQUj", "resizeTo", "mousemoveHandler", "nodeCtrlBox", "rotation", "selectedGroup.length is 0!", "9pjeuJz", "editor", "rotate", "point", "2122698ghyPpf", "elementInitAngle", "mousedownHandler"];
  return y0 = function() {
    return n;
  }, y0();
}
function rx(n, t) {
  const x = Q;
  let e = t[x(203)], s = n[x(170)](x(177));
  return s = n[x(175)]()[x(198)](s), Math[x(205)](e.y - s.y, e.x - s.x);
}
class Tx extends nx {
  constructor(t, x) {
    const e = Q;
    super(), this[e(184)] = !![], this[e(192)] = t, this.editor = t[e(196)], this[e(171)] = this.editor[e(171)], this[e(185)] = this.stage[e(185)], this[e(206)]({ lineWidth: 1, strokeStyle: e(173), fillStyle: e(208) }), this[e(190)](14, 14), this.name = x;
  }
  [U(191)]() {
    const t = U;
    this[t(171)][t(183)]("move");
  }
  [U(201)](t) {
    const x = U;
    t[x(181)]();
    let e = this.stage;
    if (this[x(185)][x(188)]()[x(204)] == 0)
      throw new Error(x(194));
    let a = e[x(203)].pickedObject;
    this.elementInitAngle = a[x(193)], this.mouseInitAngle = rx(a, e);
  }
  [U(209)](t) {
    const x = U;
    this[x(171)].setCursor("auto"), t[x(181)]();
  }
  mousedragHandler(t) {
    const x = U;
    t.preventDefault();
    let e = this[x(178)], s = e[x(196)], a = s[x(171)];
    if (s[x(171)][x(185)].getNoChildrensObjects()[x(204)] == 0)
      throw new Error(x(194));
    let o = a[x(203)].pickedObject, d = rx(o, a) - this[x(180)];
    o[x(197)](this[x(200)] + d), e[x(174)]();
  }
}
const j = i0;
(function(n, t) {
  const x = i0, e = n();
  for (; []; )
    try {
      if (-parseInt(x(510)) / 1 * (-parseInt(x(492)) / 2) + -parseInt(x(504)) / 3 * (-parseInt(x(478)) / 4) + parseInt(x(472)) / 5 + parseInt(x(499)) / 6 + parseInt(x(488)) / 7 * (parseInt(x(493)) / 8) + -parseInt(x(474)) / 9 * (parseInt(x(487)) / 10) + -parseInt(x(481)) / 11 * (parseInt(x(475)) / 12) === t)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(m0, 380838);
class Bx extends q {
  constructor(t, x = 0, e = 0, s = 1, a = 1) {
    const i = i0;
    super(null, x, e, s, a), this[i(498)] = Z0[i(473)], this[i(497)] = t, this[i(508)] = ![];
  }
  [j(482)](t) {
  }
  [j(484)](t) {
  }
  initCtrlPoint(t) {
    const x = j;
    this[x(491)]();
    let e = t.getCtrlPoints(), s = this;
    e.forEach((a) => {
      const i = x;
      if (s[i(500)](a), a == i(495)) {
        let r = function() {
          return s[i(506)](u.ct);
        }, o = s[i(500)]("rotate"), d = new H(null, o, r);
        d[i(480)]({ strokeStyle: "gray" }), d.mouseEnabled = ![], s.addChild(d);
      }
    });
  }
  [j(500)](t) {
    const x = j;
    let e;
    return t == x(495) ? e = new Tx(this, t) : e = new Ox(this, t), this.addChild(e), e;
  }
  [j(489)](t) {
    const x = j;
    if (t[x(496)] != !![])
      throw new Error(x(476));
    this[x(477)] !== null && this[x(501)](t), this[x(477)] = t, this.updateSize(), this[x(483)]();
  }
  [j(502)]() {
    const t = j;
    let x = this[t(477)];
    if (x == null || x[t(494)] == ![] || x.parent == null) {
      this[t(477)] = null, this[t(505)]();
      return;
    }
    this[t(479)](x), this[t(507)]();
  }
  [j(507)]() {
    const t = j;
    let x = this[t(509)]();
    for (var e = 0; e < x.length; e++) {
      let s = x[e];
      if (s instanceof H)
        continue;
      let a;
      s.name == t(495) ? (a = this[t(506)](u.ct), a.y -= 30) : a = this[t(506)](s[t(485)]), s instanceof q && s.translateTo(a.x, a.y);
    }
  }
  viewClone(t) {
    const x = j;
    let e = t.getStageTransform(), s = e[x(471)](t.positionToLocalPoint(u[x(490)])), a = e[x(471)](t[x(506)](u.rm)), i = Math[x(503)](a.y - s.y, a.x - s.x);
    e[x(495)](-i);
    let r = e.point(t[x(506)](u[x(490)])), o = e[x(471)](t[x(506)](u.rb)), d = (o.x - r.x) * 2, c = (o.y - r.y) * 2;
    this.resizeTo(d, c), this.rotate(i), this[x(486)](s.x, s.y);
  }
}
function i0(n, t) {
  const x = m0();
  return i0 = function(e, s) {
    return e = e - 471, x[e];
  }, i0(n, t);
}
function m0() {
  const n = ["162510zjrJvd", "NodeCtrlBox", "144CJvOwj", "8584656hSMoic", "attach not Node or not editable", "currNode", "443692AUIotx", "viewClone", "css", "11lrRNqq", "mouseoutStageHandler", "show", "mouseenterStageHandler", "name", "translateTo", "420340sOIllj", "14JfZVZm", "attachTo", "center", "removeAllChild", "69778XGLMhy", "682744YgQkRp", "isSelected", "rotate", "editable", "editor", "zIndex", "1841586Fyhwla", "createCtrlPoint", "initCtrlPoint", "updateSize", "atan2", "18ZptXKX", "hide", "positionToLocalPoint", "initPoints", "mouseEnabled", "getChildren", "17cHUSZa", "point"];
  return m0 = function() {
    return n;
  }, m0();
}
function r0(n, t) {
  const x = w0();
  return r0 = function(e, s) {
    return e = e - 319, x[e];
  }, r0(n, t);
}
function w0() {
  const n = ["setEnd", "rgba(0,0,0,0.9)", "stageToLocalXY", "css", "center", "423710WeTRnh", "isLink", "mousedownHandler", "attachedLink", "setCenterOffset", "s_resize", "1837164KNzOXi", "9edwEYt", "unActive", "221OkyVRQ", "getConnectInfo", "getK", "6164004lNBrFh", "45FrrYuZ", "end", "resetOffset", "points", "mousedragHandler", "mouseupHandler", "w_resize", "n_resize", "setFold1Offset", "setRadius", "name", "88oGbTWq", "anchorBox", "preventDefault", "canConnectEndpoint", "editor", "active", "positionToLocalPoint", "ctrlPoint1", "linkCtrlBox", "ctrlPoint2", "begin", "5Ngumfl", "3262NNLvjb", "setBegin", "target", "setCursor", "11eskezj", "ctrlPoint", "inputSystem", "stage", "fold1", "getBeginPoint", "fillColor", "setFold2Offset", "e_resize", "hide", "isConnectPoint", "upgradeParent", "306980lbJivx", "getEndPoint", "rgba(0,0,0,0.1)", "parent", "334qxmnpo", "fold2", "293671FKlGvI", "7446456UKmkUQ", "mousemoveHandler"];
  return w0 = function() {
    return n;
  }, w0();
}
const N = r0;
(function(n, t) {
  const x = r0, e = n();
  for (; []; )
    try {
      if (-parseInt(x(369)) / 1 * (-parseInt(x(323)) / 2) + parseInt(x(340)) / 3 * (-parseInt(x(339)) / 4) + -parseInt(x(368)) / 5 * (-parseInt(x(345)) / 6) + -parseInt(x(325)) / 7 * (parseInt(x(357)) / 8) + -parseInt(x(346)) / 9 * (parseInt(x(319)) / 10) + -parseInt(x(373)) / 11 * (-parseInt(x(326)) / 12) + parseInt(x(342)) / 13 * (parseInt(x(333)) / 14) === t)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(w0, 714285);
class jx extends nx {
  constructor(t) {
    const x = r0;
    super(), this[x(383)] = !![], this.fillColor = "pink", this[x(355)](7), this[x(365)] = t, this[x(361)] = this[x(365)].editor;
    let e = this;
    this.css({ lineWidth: 1, strokeStyle: "gray", fillStyle: e[x(379)] });
  }
  [N(362)]() {
    const t = N;
    this.css({ strokeStyle: "rgba(0,0,0,0.1)", fillStyle: t(321) });
  }
  [N(341)]() {
    const t = N;
    let x = this[t(379)];
    this[t(331)]({ strokeStyle: t(329), fillStyle: x });
  }
  [N(327)]() {
    const t = N;
    this[t(361)][t(358)][t(382)](), this[t(361)][t(376)][t(372)](T.move);
    let x = this[t(322)], e = x[t(322)], s = e[t(376)], a = x[t(336)];
    if (a instanceof X) {
      let i, r = a[t(349)][0], o = a[t(349)][1], d = a[t(349)][4], c = a[t(349)][5];
      this[t(356)] == u[t(377)] ? q0(a[t(344)](0, 0.5)) ? i = o.x > r.x ? T[t(352)] : T[t(381)] : i = o.y > r.y ? T.s_resize : T[t(353)] : this.name == u.fold2 ? q0(a.getK(4, 0.5)) ? i = d.x > c.x ? T[t(352)] : T[t(381)] : i = d.y > c.y ? T[t(338)] : T.n_resize : this[t(356)] == u[t(332)] && (q0(a.getK(2, 0.5)) ? i = T[t(338)] : i = T[t(381)]), i && s.setCursor(i);
    }
  }
  [N(335)](t) {
    const x = N;
    this.editor[x(376)].setCursor(T.corosshair), this[x(360)] = null, t[x(359)]();
  }
  [N(350)](t) {
    const x = N;
    t.preventDefault();
    let e = this[x(322)], s = e.parent, a = s[x(376)];
    const i = a[x(361)];
    let r = e.attachedLink;
    i[x(358)][x(382)]();
    const o = this[x(356)];
    let d = r[x(330)](a[x(375)].x, a[x(375)].y);
    if (t.isDragStart && this[x(362)](), o == u.begin) {
      let c = r[x(378)]();
      c.x += d.x - c.x, c.y += d.y - c.y, r instanceof X && r.resetOffset(), r[x(370)](c), this[x(360)] = i[x(358)][x(343)](r, null, null);
    } else if (o == u.end) {
      let c = r[x(320)]();
      c.x += d.x - c.x, c.y += d.y - c.y, r instanceof X && r[x(348)](), r[x(328)](c), this.canConnectEndpoint = i[x(358)][x(343)](r, null, null);
    }
    if (r instanceof mx)
      this[x(356)] == u.ctrlPoint && (r[x(374)] == null ? r[x(374)] = r[x(363)](o) : (r[x(374)].x += d.x - r[x(374)].x, r.ctrlPoint.y += d.y - r[x(374)].y));
    else if (r instanceof wx)
      o == u.ctrlPoint1 ? r[x(364)] == null ? r[x(364)] = r[x(363)](o) : (r[x(364)].x += d.x - r[x(364)].x, r[x(364)].y += d.y - r[x(364)].y) : o == u[x(366)] && (r[x(366)] == null ? r[x(366)] = r.positionToLocalPoint(o) : (r[x(366)].x += d.x - r[x(366)].x, r[x(366)].y += d.y - r.ctrlPoint2.y));
    else if (r instanceof X) {
      if (o == u[x(377)]) {
        let c = r[x(363)](u.fold1);
        const l = d.x - c.x, _ = d.y - c.y;
        r[x(354)](l, _);
      } else if (o == u[x(324)]) {
        let c = r[x(363)](u[x(324)]);
        const l = d.x - c.x, _ = d.y - c.y;
        r[x(380)](l, _);
      } else if (o == u[x(332)]) {
        let c = r[x(363)](u[x(332)]);
        const l = d.x - c.x, _ = d.y - c.y;
        r[x(337)](l, _);
      }
    }
  }
  [N(351)](t) {
    const x = N;
    t[x(359)](), this.unActive();
    let e = this[x(322)], s = e[x(336)];
    if (this[x(360)] != null) {
      let a = this.canConnectEndpoint, i = a[x(371)];
      if (i[x(334)]) {
        let r = i;
        r[x(347)][x(371)] !== s && r[x(367)][x(371)] !== s && (this[x(356)] == u.begin ? s[x(370)](r, a) : this.name == u[x(347)] && s[x(328)](r, a), s[x(384)]());
      } else
        this[x(356)] == u[x(367)] ? s[x(370)](i, a) : this[x(356)] == u[x(347)] && s[x(328)](i, a), s.upgradeParent();
      this.canConnectEndpoint = null;
    }
  }
}
const v = o0;
(function(n, t) {
  const x = o0, e = n();
  for (; []; )
    try {
      if (-parseInt(x(271)) / 1 + parseInt(x(294)) / 2 * (parseInt(x(314)) / 3) + -parseInt(x(299)) / 4 + parseInt(x(287)) / 5 + parseInt(x(268)) / 6 + -parseInt(x(281)) / 7 + parseInt(x(308)) / 8 === t)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(C0, 732368);
function o0(n, t) {
  const x = C0();
  return o0 = function(e, s) {
    return e = e - 265, x[e];
  }, o0(n, t);
}
function C0() {
  const n = ["editor", "1917272bgUdQK", "hide", "ctrlPointInfo", "createNodeResizePoint", "attachTo", "draw", "25701AzmJkt", "center", "setEnd", "point", "visible", "stage", "fillColor", "4430592cKHBnY", "pickedObject", "mouseoutStageHandler", "303676PouciH", "addChild", "hideAllPoint", "Link", "background", "end", "isNode", "anchorNameStr", "join", "show", "423437XnjGJM", "css", "LinkCtrlBox", "getAnchorPoints", "updateSize", "inputSystem", "1364995zJIuOY", "begin", "isPoint", "getStageTransform", "length", "attachedLink", "setBegin", "234PJSkDM", "name", "updateCtrlPoints", "isLink", "ctrlPoint1", "4627576CaeVUR", "parent", "ctrlPointStyle", "zIndex", "translateTo", "init", "gray", "updateFllow"];
  return C0 = function() {
    return n;
  }, C0();
}
class Nx extends q {
  constructor(t) {
    const x = o0;
    super(), this.ctrlPointInfo = {}, this[x(302)] = Z0[x(283)], this[x(307)] = t, this[x(301)] = new Cx({}), this.init();
  }
  [v(270)](t) {
  }
  mouseenterStageHandler(t) {
  }
  [v(311)](t) {
    const x = v;
    let e = new jx(this);
    return e[x(295)] = t, this[x(272)](e), e;
  }
  [v(304)]() {
    const t = v;
    this[t(310)] = {};
  }
  [v(313)](t) {
    const x = v;
    this[x(265)] != ![] && this[x(285)]();
  }
  [v(285)]() {
    const t = v, x = this.editor[t(266)][t(286)][t(269)];
    this[t(292)] ? this[t(292)].parent == null || x == null || this[t(292)] != x ? (this[t(292)] = null, this[t(309)]()) : this[t(312)](this[t(292)]) : this.hide();
  }
  [v(296)](t) {
    const x = v;
    this[x(292)] = t;
    let e = t[x(284)]();
    this[x(278)] = e[x(279)](",");
    for (let s = 0; s < e[x(291)]; s++) {
      let a = e[s], i = this[x(310)][a];
      if (i == null) {
        if (i = this[x(311)](a), a != u[x(288)] && a != u.end && (i[x(267)] = this[x(301)][x(275)], i[x(282)]({ strokeStyle: x(305), fillStyle: "orange" }), i.isConnectPoint = ![]), a == x(298)) {
          let r = new H();
          r.css({ lineDash: [2, 2] }), r[x(293)](i, x(315));
          let o = this[x(310)][x(288)];
          r.setEnd(o, x(315)), this[x(272)](r), this.ctrlPointInfo[a + x(274)] = r;
        } else if (a == "ctrlPoint2") {
          let r = new H();
          r[x(282)]({ lineDash: [2, 2] }), r.setBegin(i, x(315));
          let o = this[x(310)][x(276)];
          r[x(316)](o, x(315)), this[x(272)](r), this[x(310)][a + x(274)] = r;
        } else if (a == "ctrlPoint") {
          let r = new H();
          r[x(282)]({ lineDash: [2, 2] }), r.setBegin(i, "center");
          let o = this[x(310)][x(288)];
          r[x(316)](o, x(315)), this.addChild(r), this.ctrlPointInfo[a + "Link"] = r;
        }
        this[x(310)][a] = i;
      }
    }
  }
  hideAllPoint() {
    const t = v;
    let x = this[t(310)];
    for (var e in x)
      x[e][t(309)]();
  }
  [v(306)]() {
    const t = v, x = this[t(292)];
    let e = x[t(290)](), s = x[t(284)]();
    this[t(273)]();
    for (let a = 0; a < s[t(291)]; a++) {
      const i = s[a];
      let r = this[t(310)][i], o = x.positionToLocalPoint(i);
      sx(o, x, i);
      let d = e[t(317)](o);
      r[t(303)](d.x, d.y), r[t(280)]();
      let c = this[t(310)][i + t(274)];
      c && c[t(280)]();
    }
  }
  attachTo(t) {
    const x = v;
    if (t[x(300)] != null) {
      if (this[x(292)] === t) {
        t instanceof X && t[x(284)]().join(",") != this[x(278)] && this[x(296)](t), this[x(306)](), this[x(280)]();
        return;
      }
      this.ctrlPointInfo = {}, this.removeAllChild(), this[x(296)](t), this.updateFllow(), this[x(280)]();
    }
  }
  [v(289)](t) {
    const x = v;
    return t[x(277)] || t[x(297)] ? ![] : typeof t == "object" && t.x != null && t.y != null;
  }
}
const L = $;
(function(n, t) {
  const x = $, e = n();
  for (; []; )
    try {
      if (-parseInt(x(292)) / 1 * (parseInt(x(251)) / 2) + -parseInt(x(246)) / 3 + parseInt(x(241)) / 4 + -parseInt(x(239)) / 5 * (-parseInt(x(253)) / 6) + parseInt(x(266)) / 7 + -parseInt(x(283)) / 8 * (-parseInt(x(279)) / 9) + parseInt(x(237)) / 10 === t)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(v0, 570239);
function $(n, t) {
  const x = v0();
  return $ = function(e, s) {
    return e = e - 235, x[e];
  }, $(n, t);
}
function v0() {
  const n = ["2340681eHleJc", "recordEnd", "setCursor", "red", "height", "mousePickupPath", "endpoint", "active", "arc", "mousedragHandler", "strokeAndFill", "segIndex", "buttons", "2889qmpyoK", "newLink", "isDragStart", "mouseoutHandler", "13904WLFZHH", "stage", "target", "mouseEnabled", "beginAngle", "hide", "anchorBox", "parent", "width", "695vNjURu", "gray", "画线开始", "3677610IXQlbB", "isActive", "5igEEqo", "auto", "254388qAcSmJ", "preventDefault", "intersect", "mouseenterHandler", "showTip", "578400CWzaBN", "unactive", "editor", "mouseupHandler", "update", "2782PmVTKX", "inputSystem", "2436870YVAApV", "link", "setEnd", "radius", "resizeTo", "mousedownHandler", "end", "assert", "rate", "endAngle", "min", "css", "name"];
  return v0 = function() {
    return n;
  }, v0();
}
class xx extends nx {
  constructor(t, x = 0, e = 0, s = 1, a = 1) {
    const i = $;
    super(null, x, e, s, a), this[i(238)] = ![], this.anchorBox = t, this[i(248)] = t[i(248)], this[i(284)] = this[i(248)][i(284)], this[i(257)](15, 15), this[i(247)](), this[i(264)]({ lineWidth: 1, strokeStyle: i(235) });
  }
  setIntersect(t) {
    const x = $;
    this[x(243)] = t;
  }
  [L(244)](t) {
    this.active();
  }
  [L(282)](t) {
    this[L(247)]();
  }
  [L(258)](t) {
    const x = L;
    t[x(242)](), this[x(248)][x(245)](x(236)), this[x(248)][x(284)][x(268)]("crosshair"), this[x(254)] = null;
  }
  [L(275)](t) {
    const x = L;
    if (t[x(278)] == 2)
      return;
    t[x(242)](), this[x(248)][x(284)][x(268)](x(240));
    const e = this[x(248)], s = e.stage;
    this[x(288)]();
    const a = this.anchorBox[x(285)];
    if (t[x(281)]) {
      let i = function() {
        const d = x;
        return o[d(290)].stageToLocalXY(s[d(252)].x, s.inputSystem.y);
      };
      console[x(260)](this[x(254)] == null, this.link);
      let r;
      if (this[x(265)] == "intersectNode") {
        let d = this[x(289)].intersect;
        r = new fx(a, d[x(261)], d[x(277)]);
      } else
        r = new ux(a, this.name);
      this[x(248)].record("划线");
      const o = e[x(280)](null, a, null, r);
      o[x(286)] = ![], this[x(254)] = o, o[x(255)](i);
      return;
    }
    sx(this[x(254)][x(259)], this[x(254)]), this[x(272)] = this[x(289)].getConnectInfo(this[x(254)], a, this[x(254)][x(259)].target);
  }
  [L(249)](t) {
    const x = L;
    if (t.isDragEnd != ![]) {
      if (this.show(), this[x(248)][x(250)](), this[x(248)][x(284)][x(268)](x(240)), this[x(254)] != null) {
        let e, s;
        if (this[x(272)] != null)
          this[x(254)][x(286)] = !![], e = this[x(272)], s = this[x(272)];
        else {
          let a = this[x(254)].end;
          a instanceof vx && (e = a.fn(), this.link[x(286)] = !![]);
        }
        e && (this.link[x(255)](e, s), this[x(254)].upgradeParent(), this[x(248)][x(267)]("划线"));
      }
      this[x(254)] = null;
    }
  }
  draw(t) {
    const x = L;
    this[x(256)] = Math[x(263)](this.width * 0.5, this[x(270)] * 0.5), t.beginPath();
    let e = this[x(291)] / 2, s = this.height / 2;
    t[x(274)](e, s, this[x(256)], this[x(287)], this[x(262)]), t.closePath(), this[x(276)](t), this[x(271)](t);
  }
  [L(273)]() {
    const t = L;
    this.isActive = !![], this[t(264)]({ fillStyle: t(269) });
  }
  [L(247)]() {
    const t = L;
    this[t(238)] = ![], this[t(264)]({ strokeStyle: t(235), fillStyle: "rgba(255,255,255,0.6)" });
  }
}
const C = c0;
(function(n, t) {
  const x = c0, e = n();
  for (; []; )
    try {
      if (-parseInt(x(410)) / 1 + parseInt(x(392)) / 2 + parseInt(x(402)) / 3 + parseInt(x(387)) / 4 + parseInt(x(396)) / 5 + parseInt(x(371)) / 6 * (-parseInt(x(394)) / 7) + -parseInt(x(405)) / 8 * (parseInt(x(395)) / 9) === t)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(k0, 839952);
function c0(n, t) {
  const x = k0();
  return c0 = function(e, s) {
    return e = e - 367, x[e];
  }, c0(n, t);
}
function k0() {
  const n = ["children", "4584642rUPbBP", "stage", "keyboard", "362744UENALF", "fold1", "setIntersect", "anchorName", "getObjectsIntersect", "543944eWmJew", "inputSystem", "hide", "nodeDist", "removeAllChild", "positionToLocalPoint", "unactive", "getStageTransform", "createAnchorPoint", "mouseenterStageHandler", "currentLayer", "anchorDist", "object", "6FplLza", "intersectNode", "getConnectInfo", "mouseoutStageHandler", "target", "isKeydown", "clearTarget", "getAnchorPointBy", "active", "show", "name", "getLocalPoint", "ctrlIntersectNode", "anchorBox", "setTarget", "filter", "3142196gvumId", "activePoint", "intersect", "editor", "displayList", "2516076HcXKmB", "translateTo", "5058494kvPinZ", "369IeEvHX", "1969000BmVjsg", "rate", "update", "fold2", "point"];
  return k0 = function() {
    return n;
  }, k0();
}
class zx extends q {
  constructor(t, x = 0, e = 0, s = 1, a = 1) {
    const i = c0;
    super(null, x, e, s, a), this[i(369)] = 10, this[i(413)] = 10, this[i(390)] = t;
  }
  [C(374)](t) {
  }
  [C(367)](t) {
  }
  [C(377)]() {
    const t = C;
    this[t(375)] = null, this.removeAllChild(), this[t(412)]();
  }
  [C(385)](t, x) {
    const e = C;
    if (this[e(375)] !== t) {
      if (this[e(375)] = t, this[e(414)](), t != null) {
        let a = t.getAnchorPoints();
        for (var s = 0; s < a.length; s++) {
          let i = a[s];
          t instanceof X && (i == e(406) || i == e(399)) || this[e(418)](i);
        }
        this[e(383)] = this[e(418)](e(372)), this[e(383)][e(412)]();
      }
      this[e(398)]();
    }
    this[e(388)](x);
  }
  activePoint(t) {
    const x = C;
    this[x(401)].forEach((s) => {
      const a = x;
      s[a(381)] == t ? s[a(379)]() : s[a(416)]();
    }), this[x(383)][x(412)](), this[x(380)]();
  }
  [C(407)](t) {
    const x = C;
    if (this[x(389)] = t, t == null) {
      this.ctrlIntersectNode[x(412)]();
      return;
    }
    let e = t[x(397)], s = t.segIndex;
    const a = this[x(375)];
    let i = a[x(382)](e, s), o = a.getStageTransform()[x(400)](i);
    this[x(383)][x(393)](o.x, o.y), this.ctrlIntersectNode[x(380)]();
  }
  [C(398)]() {
    const t = C;
    if (this[t(375)] == null) {
      this.hide();
      return;
    }
    const x = this.target, e = x[t(417)](), s = this[t(401)];
    for (let a = 0; a < s.length; a++) {
      const i = s[a];
      if (i.name != t(372)) {
        let r = x[t(415)](i[t(381)]), o = e[t(400)](r);
        i[t(393)](o.x, o.y);
      }
    }
  }
  [C(418)](t) {
    const x = C, e = new xx(this);
    return e[x(381)] = t, e[x(384)] = this, this.addChild(e), e;
  }
  [C(378)](t, x) {
    const e = C, s = this[e(401)];
    for (let a = 0; a < s.length; a++)
      if (s[a][e(381)] == x)
        return s[a];
    return null;
  }
  [C(409)](t) {
    const x = C;
    let e = this[x(390)].stage, s = { x: e[x(411)].x, y: e[x(411)].y };
    return kx(s, t, this[x(413)]);
  }
  [C(373)](t, x, e) {
    const s = C, a = this.editor, i = this, r = a[s(403)];
    let o = { x: r[s(411)].x, y: r[s(411)].y };
    const d = a[s(368)], c = a[s(404)][s(376)]("Control");
    let l = null, _;
    const p = d[s(391)][s(386)]((P) => P !== t && P !== e && P.mouseEnabled && P.connectable);
    let g, D;
    const R = Sx(o, p, this[s(369)]);
    if (R != null)
      g = R.object, D = R[s(408)], _ = new ux(g, D), i[s(385)](g, D);
    else if (c) {
      const P = this.getObjectsIntersect(p);
      P != null && (g = P[s(370)], i[s(385)](g, D), _ = new fx(g, P.rate, P.segIndex), this[s(407)](P));
    }
    return g != null && g !== t && g !== e && (l = _), l;
  }
}
const S = x0;
function x0(n, t) {
  const x = S0();
  return x0 = function(e, s) {
    return e = e - 391, x[e];
  }, x0(n, t);
}
(function(n, t) {
  const x = x0, e = n();
  for (; []; )
    try {
      if (-parseInt(x(399)) / 1 + -parseInt(x(413)) / 2 * (parseInt(x(415)) / 3) + -parseInt(x(410)) / 4 + -parseInt(x(402)) / 5 + -parseInt(x(411)) / 6 + parseInt(x(394)) / 7 + parseInt(x(405)) / 8 === t)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(S0, 908041);
function S0() {
  const n = ["length", "2399840WEhQuR", "10499730LckOJC", "剪切粘贴", "22PFmpGt", "redoHistory", "268278SEVVOK", "redo", "update", "位置改变", "连线调整", "type", "3321633kirmTu", "pop", "redoFn", "undoFn", "辅助粘贴", "1337086ZkSJdn", "undoAll", "push", "7827145vDMCDb", "cut", "undoHistory", "53357104sOyIRF", "editor", "undo", "尺寸修改"];
  return S0 = function() {
    return n;
  }, S0();
}
const Dx = { cut: S(403), copy: "copy", delete: "删除", modify: "修改", addChild: "添加图元", pasteCopy: S(398), pasteCut: S(412), resize: S(408), rotate: "旋转", dragNodeOrLink: S(391), modifyLink: S(392) };
class Gx {
  constructor(t, x, e) {
    const s = S;
    this[s(393)] = t, this[s(397)] = e, this[s(396)] = x;
  }
  [S(416)]() {
    this[S(396)]();
  }
  undo() {
    this[S(397)]();
  }
}
class Mx extends EventTarget {
  constructor(t) {
    const x = S;
    super(), this[x(406)] = t, this[x(404)] = [], this[x(414)] = [];
  }
  push(t, x, e) {
    const s = S;
    let a = new Gx(t, x, e);
    return a[s(406)] = this[s(406)], this.redoHistory.length = 0, this.undoHistory.push(a), a;
  }
  undo() {
    const t = S;
    if (this[t(404)][t(409)] == 0)
      return null;
    let x = this[t(404)][t(395)]();
    return x.undo(), this.redoHistory[t(401)](x), x;
  }
  [S(416)]() {
    const t = S;
    if (this[t(414)][t(409)] == 0)
      return null;
    let x = this[t(414)][t(395)]();
    return x[t(416)](), this[t(404)][t(401)](x), x;
  }
  [S(400)](t = 500) {
    let x = this;
    function e() {
      const s = x0;
      let a = x[s(407)]();
      x[s(406)][s(417)](), a != null && setTimeout(e, t);
    }
    e();
  }
  redoAll(t = 500) {
    let x = this;
    function e() {
      const s = x0;
      x.editor[s(417)](), x[s(416)]() != null && setTimeout(e, t);
    }
    e();
  }
}
var K = l0;
(function(n, t) {
  for (var x = l0, e = n(); []; )
    try {
      var s = parseInt(x(131)) / 1 * (parseInt(x(137)) / 2) + -parseInt(x(129)) / 3 * (-parseInt(x(138)) / 4) + -parseInt(x(126)) / 5 * (parseInt(x(133)) / 6) + parseInt(x(122)) / 7 + -parseInt(x(121)) / 8 + parseInt(x(125)) / 9 + parseInt(x(135)) / 10 * (-parseInt(x(130)) / 11);
      if (s === t)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(L0, 317549);
function L0() {
  var n = ["1vDavwm", "copyPut", "2360364FOBygZ", "cutPut", "10Cczklc", "isFirstCutPaste", "88906LzQQmJ", "438008slyivS", "copy", "type", "645528ZlovvD", "1190966ESRtcH", "source", "cut", "2997216axUoua", "5NgNcfO", "takeSource", "take", "15COeUrF", "3338401Hmgvrr"];
  return L0 = function() {
    return n;
  }, L0();
}
function l0(n, t) {
  var x = L0();
  return l0 = function(e, s) {
    e = e - 120;
    var a = x[e];
    return a;
  }, l0(n, t);
}
class ox {
  constructor() {
    var t = l0;
    this[t(128)] = 0;
  }
  [K(132)](t) {
    var x = K;
    this.take = 0, this[x(120)] = x(139), this[x(123)] = t;
  }
  [K(134)](t) {
    var x = K;
    this[x(128)] = -1, this[x(120)] = x(124), this[x(123)] = t;
  }
  [K(127)]() {
    var t = K;
    return this[t(128)]++, this[t(123)];
  }
  [K(136)]() {
    var t = K;
    return this[t(120)] == Dx[t(124)] && this.take == 0;
  }
}
function V(n, t) {
  const x = E0();
  return V = function(e, s) {
    return e = e - 276, x[e];
  }, V(n, t);
}
(function(n, t) {
  const x = V, e = n();
  for (; []; )
    try {
      if (-parseInt(x(294)) / 1 * (parseInt(x(278)) / 2) + -parseInt(x(276)) / 3 * (-parseInt(x(293)) / 4) + parseInt(x(290)) / 5 * (-parseInt(x(284)) / 6) + parseInt(x(283)) / 7 + -parseInt(x(289)) / 8 * (-parseInt(x(281)) / 9) + -parseInt(x(291)) / 10 * (-parseInt(x(286)) / 11) + -parseInt(x(280)) / 12 === t)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(E0, 762194);
function E0() {
  const n = ["14830XwsqZs", "1929690IZJWja", "startsWith", "4792972fOhoIe", "12192KizoVD", "3bMroGt", "reverse", "16uddXbU", "setItem", "9490044FXdKqN", "279IEQEEj", "getItem", "5270846AdWqDv", "2118UVZHhU", "length", "22EseReJ", "keys", "now", "93008GielKa"];
  return E0 = function() {
    return n;
  }, E0();
}
const cx = { getItem: function(n) {
  const t = V;
  return localStorage[t(282)](n);
}, setItem: function(n, t) {
  localStorage.setItem(n, t);
}, saveWithVersion(n, t) {
  const x = V;
  n += Date[x(288)](), this[x(279)](n, t);
}, getAllVersions(n) {
  const t = V;
  return Object[t(287)](localStorage).filter((e) => e[t(292)](n)).sort();
}, getLastVersion(n, t) {
  const x = V;
  let e = this.getAllVersions(n)[x(277)]();
  if (e.length == 0)
    return;
  t == null && (t = 0), t + 1 >= e[x(285)] && (t = e[x(285)] - 1);
  let s = e[t];
  return this[x(282)](s);
} };
function P0(n, t) {
  const x = H0();
  return P0 = function(e, s) {
    return e = e - 188, x[e];
  }, P0(n, t);
}
(function(n, t) {
  const x = P0, e = n();
  for (; []; )
    try {
      if (-parseInt(x(209)) / 1 + parseInt(x(192)) / 2 + -parseInt(x(198)) / 3 + -parseInt(x(194)) / 4 * (-parseInt(x(211)) / 5) + parseInt(x(191)) / 6 + -parseInt(x(189)) / 7 * (parseInt(x(200)) / 8) + parseInt(x(201)) / 9 * (-parseInt(x(188)) / 10) === t)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(H0, 952212);
function H0() {
  const n = ["selectedGroup", "1076022hJmjSG", "showOpTooltip", "7876135yjUEjR", "选编组-", "keyboard", "45940fNcTDV", "1590659WMTmGg", "filter", "6565230KUGvfE", "1493372dkNKyu", "parent", "4MbfANd", "bindKey", "centerBy", "objects", "636456eWRTWW", "slice", "16btJlpN", "1413VYPrAA", "CreateGroup", "removeAll", "preventDefault", "编组-", "stage", "inputSystem"];
  return H0 = function() {
    return n;
  }, H0();
}
function Fx(n, t, x) {
  const e = P0, s = n[e(213)], a = n.KeysConfig[e(202)];
  let i = {};
  function r(c) {
    const l = e;
    i[c] = n[l(206)].selectedGroup.objects[l(199)](), n[l(210)](l(205) + c);
  }
  function o(c) {
    const l = e;
    let _ = i[c];
    if (_)
      return _ = _[l(190)]((p) => p[l(193)] !== null), _.length > 0 && (n[l(210)](l(212) + c), n[l(206)][l(208)][l(203)]().addAll(_), n[l(206)][l(207)].pickedObject = _[0]), _;
  }
  function d(c) {
    const l = e;
    o(c) && x[l(196)](t.selectedGroup[l(197)]);
  }
  for (let c = 0; c <= 9; c++)
    s[e(195)](a + "+" + c, function(l) {
      l[e(204)](), r(c);
    }), s.bindKey("" + c, function(l) {
      l[e(204)](), o(c);
    }), s[e(195)]("" + c + "+" + c, function(l) {
      l[e(204)](), d(c);
    });
}
(function(n, t) {
  const x = O0, e = n();
  for (; []; )
    try {
      if (parseInt(x(423)) / 1 + parseInt(x(415)) / 2 + -parseInt(x(409)) / 3 + -parseInt(x(405)) / 4 + -parseInt(x(397)) / 5 + -parseInt(x(395)) / 6 + parseInt(x(414)) / 7 * (parseInt(x(386)) / 8) === t)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(A0, 973557);
function A0() {
  const n = ["12711482AfjUnO", "3879620BNAQkA", "cutHandler", "Select_all", "saveHandler", "Layout_tree", "select", "Select_invert", "update", "406324XpPkpR", "selectedGroup", "粘贴样式", "copyHandler", "isNode", "Copy", "redoHandler", "Save", "undoHandler", "doTreeLayout", "8FXBCOn", "Open", "filter", "Delete", "currentLayer", "Move_right", "keyboard", "Redo", "bindKey", "906528yinaeJ", "Cut", "3013845RmJThG", "Paste", "deleteHandler", "paste_Style", "Undo", "forEach", "getNoChildrensObjects", "Move_down", "7707916XZuYhc", "Copy_style", "stylePasteHandler", "showOpTooltip", "1523001UbYItb", "Move_left", "KeysConfig", "openLasted", "keydown"];
  return A0 = function() {
    return n;
  }, A0();
}
function O0(n, t) {
  const x = A0();
  return O0 = function(e, s) {
    return e = e - 386, x[e];
  }, O0(n, t);
}
function Rx(n) {
  const t = O0, x = n.stage, e = n[t(390)];
  let s = n[t(392)];
  const a = n[t(411)];
  function i(r, o, d) {
    const c = t;
    r[c(402)]((l) => {
      s[c(394)](l, function(p) {
        o(p);
      }, d);
    });
  }
  i(a[t(389)], (r) => n[t(399)](r)), i(a[t(396)], (r) => n[t(416)](r)), i(a[t(428)], (r) => {
    const o = t;
    n.showOpTooltip("复制"), n[o(426)](r);
  }), i(a[t(398)], (r) => n.pasteHandler(r)), i(a[t(401)], (r) => {
    const o = t;
    n[o(408)]("撤销"), n[o(431)](r);
  }), i(a[t(393)], (r) => {
    const o = t;
    n[o(408)]("重做"), n[o(429)](r);
  }), i(a[t(417)], (r) => {
    const o = t;
    n[o(408)]("全选"), x[o(420)](e.getAllVisiable());
  }), i(a[t(421)], (r) => {
    const o = t;
    n.showOpTooltip("反选");
    let d = x[o(424)][o(403)]();
    x[o(420)](e.displayList[o(388)]((c) => d.notContains(c)));
  }), i(a[t(430)], (r) => {
    const o = t;
    n[o(408)]("保存"), n[o(418)](r);
  }, ![]), i(a[t(387)], (r) => {
    const o = t;
    n[o(408)]("打开"), n[o(412)](r);
  }, ![]), i(a[t(406)], (r) => {
    n[t(408)]("复制样式"), n.styleCopyHandler(r);
  }, ![]), i(a[t(400)], (r) => {
    const o = t;
    n[o(408)](o(425)), n[o(407)](r);
  }, ![]), i(a[t(410)], (r) => {
    const o = t;
    x.selectedGroup[o(403)]()[o(388)]((c) => c[o(427)]).forEach((c) => {
      c.x -= 1;
    });
  }), i(a[t(391)], (r) => {
    const o = t;
    x.selectedGroup[o(403)]().filter((c) => c.isNode)[o(402)]((c) => {
      c.x += 1;
    });
  }), i(a.Move_up, (r) => {
    const o = t;
    x.selectedGroup[o(403)]()[o(388)]((c) => c[o(427)])[o(402)]((c) => {
      c.y -= 1;
    });
  }), i(a[t(404)], (r) => {
    const o = t;
    x[o(424)][o(403)]().filter((c) => c[o(427)]).forEach((c) => {
      c.y += 1;
    });
  }), i(a[t(419)], (r) => {
    n[t(432)]();
  }), i(a.Layout_grid, (r) => {
    n.doGridLayout();
  }), Fx(n, x, e), s.on(t(413), function() {
    n.update();
  }), s.on("keyup", function() {
    n[t(422)]();
  });
}
function d0(n, t) {
  const x = T0();
  return d0 = function(e, s) {
    return e = e - 270, x[e];
  }, d0(n, t);
}
(function(n, t) {
  const x = d0, e = n();
  for (; []; )
    try {
      if (parseInt(x(288)) / 1 + -parseInt(x(285)) / 2 * (parseInt(x(277)) / 3) + parseInt(x(283)) / 4 * (-parseInt(x(286)) / 5) + parseInt(x(271)) / 6 + -parseInt(x(270)) / 7 + parseInt(x(276)) / 8 + -parseInt(x(272)) / 9 * (-parseInt(x(281)) / 10) === t)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(T0, 529729);
function T0() {
  const n = ["22MXCQMf", "40cMzvEz", "isLink", "707072eAwvOA", "currentLayer", "length", "mouseEnabled", "getPaintedAABBInLayer", "4579414WTJsIx", "410052bHinpx", "365733QotlZF", "assert", "isNode", "filter", "642096DwOoDL", "61590DuLjtI", "isSelected", "isAncestors", "addChild", "170khSlCX", "parent", "68372tGdsgZ", "isOutOfParent"];
  return T0 = function() {
    return n;
  }, T0();
}
function lx(n, t) {
  const x = d0;
  let e = n[x(289)], s = n[x(289)].getAllVisiable()[x(275)]((r) => {
    const o = x;
    return r.visible && r[o(274)] && r[o(278)] != !![] && r[o(291)];
  }), a = t[x(275)]((r) => r[x(284)]() || r.parent === e), i;
  for (let r = 0; r < a[x(290)]; r++) {
    let o = a[r];
    if (i = Wx(o, s), i != null)
      break;
  }
  return i == null && (i = e, a = a[x(275)]((r) => r[x(282)] !== e)), console[x(273)](i[x(287)] != !![], !![], i), { parent: i, objects: a };
}
function Wx(n, t) {
  const x = d0, e = n[x(292)](), s = t[x(275)]((a) => {
    const i = x;
    return a === n[i(282)] || a === n ? ![] : n[i(279)](a) ? ![] : !![];
  });
  for (let a = s[x(290)] - 1; a >= 0; a--) {
    const i = s[a];
    if (i[x(292)]().isIntersectRect(e))
      return i;
  }
  return null;
}
function B0(n, t) {
  const x = j0();
  return B0 = function(e, s) {
    return e = e - 305, x[e];
  }, B0(n, t);
}
(function(n, t) {
  const x = B0, e = n();
  for (; []; )
    try {
      if (parseInt(x(326)) / 1 + parseInt(x(322)) / 2 * (-parseInt(x(320)) / 3) + parseInt(x(318)) / 4 * (parseInt(x(310)) / 5) + parseInt(x(323)) / 6 + parseInt(x(305)) / 7 + parseInt(x(308)) / 8 + -parseInt(x(317)) / 9 === t)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(j0, 720131);
function j0() {
  const n = ["isNode", "stage", "4921792EYpdHX", "getBottom", "10rGYbiT", "getNoChildrensObjects", "getRight", "translateWith", "length", "isAlone", "getAABB", "11072673LvNNWf", "2332544LrVoou", "filter", "6MWqyfb", "底部对齐", "1065566nLGPgL", "1321074FOTjZr", "顶部对齐", "左对齐", "422549KVdCeD", "4142390nkgigc"];
  return j0 = function() {
    return n;
  }, j0();
}
function Kx(n, t) {
  const x = B0;
  let e = t[x(307)].selectedGroup[x(311)]();
  if (e = e[x(319)]((a) => a[x(306)] || a[x(315)]()), e[x(314)] == 0)
    return;
  let s = _x[x(316)](e, ![], $0);
  for (let a = 0; a < e.length; a++) {
    let i = e[a], r = i[x(316)](![], $0);
    n == x(325) ? i[x(313)](s.x - r.x, 0) : n == "右对齐" ? i[x(313)](s[x(312)]() - r[x(312)](), 0) : n == x(324) ? i[x(313)](0, s.y - r.y) : n == x(321) && i[x(313)](0, s.getBottom() - r[x(309)]());
  }
}
const px = z0;
(function(n, t) {
  const x = z0, e = n();
  for (; []; )
    try {
      if (parseInt(x(262)) / 1 + parseInt(x(263)) / 2 + parseInt(x(260)) / 3 * (-parseInt(x(289)) / 4) + parseInt(x(261)) / 5 + parseInt(x(259)) / 6 * (parseInt(x(287)) / 7) + parseInt(x(283)) / 8 + -parseInt(x(274)) / 9 === t)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(N0, 898218);
function N0() {
  const n = ["addEventListener", "上下等距", "pickedObject", "22844403bGaBKR", `
<div class="header">编辑</div>
<a>剪切</a>
<a>复制</a>
<a>粘贴</a>
<a>删除</a> 
<hr></hr>
<div class="header">前后</div>
<a>上移一层</a>
<a>下移一层</a>
<a>移至顶部</a>
<a>移至底部</a>
<div class="header">对齐</div>
<a>左对齐</a>
<a>右对齐</a>
<a>顶部对齐</a>
<a>底部对齐</a>
`, "stage", "上移一层", "底部对齐", "update", "updatezIndex", "下移一层", "item", "2438392ErjfGZ", "移至底部", "右对齐", "select", "7QdxZKs", "顶部对齐", "184zcpdku", "zIndex", "5135166VYyuBS", "20472mMrWSt", "2722575aNntoX", "1763018HwIrBs", "564392RbfGeY", "alignHandler", "parent", "移至顶部", "copyHandler", "左对齐", "inputSystem", "左右等距"];
  return N0 = function() {
    return n;
  }, N0();
}
function z0(n, t) {
  const x = N0();
  return z0 = function(e, s) {
    return e = e - 258, x[e];
  }, z0(n, t);
}
let Jx = px(275);
function Ux(n) {
  const t = px, x = n[t(276)];
  let e = new Lx(x, Jx);
  return e[t(271)](t(286), function(s) {
    const a = t, i = s[a(282)];
    let r = x[a(269)][a(273)];
    i == "剪切" ? n.cutHandler() : i == "复制" ? n[a(267)]() : i == "粘贴" ? n.pasteHandler() : i == "删除" && n.deleteHandler(), r != null && (i == a(277) ? r.zIndex++ : i == a(281) ? r[a(258)]-- : i == a(266) ? r[a(258)] = 1e3 : i == a(284) ? r[a(258)] = 0 : i == a(268) ? n[a(264)](a(268)) : i == a(285) ? n.alignHandler(a(285)) : i == "顶部对齐" ? n[a(264)](a(288)) : i == a(278) ? n[a(264)]("底部对齐") : i == a(270) ? n.alignHandler(a(270)) : i == a(272) && n[a(264)](a(272)), r.zIndex < 0 ? r[a(258)] = 0 : r[a(258)] > 1e3 && (r[a(258)] = 1e3), r[a(265)] != null && r[a(265)][a(280)](), n[a(279)]());
  }), e;
}
function t0(n, t) {
  const x = D0();
  return t0 = function(e, s) {
    return e = e - 150, x[e];
  }, t0(n, t);
}
(function(n, t) {
  const x = t0, e = n();
  for (; []; )
    try {
      if (parseInt(x(172)) / 1 + parseInt(x(158)) / 2 + parseInt(x(173)) / 3 * (parseInt(x(157)) / 4) + -parseInt(x(159)) / 5 * (-parseInt(x(165)) / 6) + parseInt(x(156)) / 7 * (-parseInt(x(169)) / 8) + parseInt(x(153)) / 9 + -parseInt(x(168)) / 10 === t)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(D0, 975447);
function D0() {
  const n = ["#c8c8c8", "262227qkYbSe", "4jfpweO", "2875176lvqnNZ", "25770RxEqAH", "mouseEnabled", "handlerLayer", "stage", "guildlineS", "height", "834hYWSqF", "setEnd", "setBegin", "48938320vvGDgQ", "40bHwKfC", "addChild", "guildlineW", "1057156tveGTr", "5370828arJvsW", "hide", "css", "show", "9496422GTUoDa", "width"];
  return D0 = function() {
    return n;
  }, D0();
}
function Vx(n) {
  const t = t0, x = new H();
  x[t(160)] = ![], x.css({ strokeStyle: t(155), lineDash: [1, 1] }), x[t(150)](), n[t(171)] = x, n[t(161)][t(170)](n[t(171)]);
  const e = new H();
  x[t(160)] = ![], e[t(151)]({ strokeStyle: t(155), lineDash: [1, 1] }), e[t(150)](), n[t(163)] = e, n[t(161)].addChild(n[t(163)]);
}
function Yx(n, t) {
  const x = t0, e = n[x(162)], s = n[x(171)], a = n[x(163)];
  s[x(167)]({ x: 0, y: t.y }), s[x(166)]({ x: e[x(154)], y: t.y }), s[x(152)](), a[x(167)]({ x: t.x, y: 0 }), a.setEnd({ x: t.x, y: e[x(164)] }), a[x(152)]();
}
function Zx(n) {
  const t = t0;
  n[t(171)][t(150)](), n[t(163)][t(150)]();
}
(function(n, t) {
  const x = J, e = n();
  for (; []; )
    try {
      if (-parseInt(x(370)) / 1 * (-parseInt(x(367)) / 2) + -parseInt(x(393)) / 3 + parseInt(x(398)) / 4 + parseInt(x(373)) / 5 + -parseInt(x(359)) / 6 + parseInt(x(379)) / 7 * (-parseInt(x(386)) / 8) + parseInt(x(394)) / 9 * (parseInt(x(361)) / 10) === t)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(G0, 400131);
function G0() {
  const n = ["endArrow", "2625945ohApgX", "recordEnd", "afterDeleteHandler", "record", "currentLayer", "disconnect", "499359ilZaft", "removeChild", "width", "serializerSystem", "copyPut", "resizeTo", "hideCtrlBox", "56rzNoeK", "getNoChildrensObjects", "removeAll", "length", "beginArrow", "anchorBox", "clipBoard", "1237683bfAsBM", "7587TiabTp", "pickedObject", "selectedGroup", "cutPut", "78264YARtgP", "addChild", "inputSystem", "translateWith", "2177424qAepDX", "concat", "9840KZfISv", "className", "map", "copyToPojo", "pojoToObjects", "visible", "601376VyhpWj", "forEach", "parent", "1MGjQmR", "stage"];
  return G0 = function() {
    return n;
  }, G0();
}
function J(n, t) {
  const x = G0();
  return J = function(e, s) {
    return e = e - 358, x[e];
  }, J(n, t);
}
function Xx(n) {
  const t = J;
  let x = n[t(371)], e = [][t(360)](x[t(396)][t(387)]());
  if (e[t(389)] == 0)
    return;
  let s = e[t(363)]((a) => a[t(369)]);
  n[t(392)][t(383)]([e, s]);
}
function qx(n) {
  const t = J;
  let x = n[t(371)], e = [][t(360)](x[t(396)].getNoChildrensObjects());
  if (e[t(389)] == 0)
    return;
  let s = e[t(363)]((a) => a.parent);
  n[t(392)][t(397)]([e, s]), n.record("剪切"), e[t(368)]((a, i) => {
    const r = t;
    s[i][r(380)](a), u0.disconnect(a, e);
  }), n[t(374)]("剪切"), x[t(400)][t(395)] = null, n[t(385)](), n[t(391)].clearTarget();
}
function Qx(n) {
  const t = J;
  let x = n[t(392)].takeSource();
  if (x == null)
    return;
  let e = n[t(377)], s = n.stage, a = x[0], i = x[1], r = _x.getAABB(a, ![], $0), o = r.getCenter(), d = e.stageToLocalXY(s.inputSystem.x, s[t(400)].y), c = d.x - o.x, l = d.y - o.y;
  n.record("粘贴");
  let _ = a, p = s[t(382)][t(364)](a);
  _ = s[t(382)][t(365)](p), _[t(368)]((g, D) => {
    g[t(358)](c, l);
  }), _[t(368)]((g, D) => {
    const R = t;
    i[D][R(399)](g);
  }), n[t(374)]("粘贴");
}
function $x(n) {
  const t = J;
  let x = n.stage, e = x.selectedGroup.getNoChildrensObjects();
  e && (x[t(396)][t(388)](), n[t(376)]("删除"), e[t(368)](function(s) {
    const a = t;
    u0[a(378)](s), s.parent.removeChild(s), n[a(375)](s);
  }), n[t(374)]("删除"));
}
function xt(n, t) {
  const x = J;
  n === t || n.className !== t[x(362)] || !(n instanceof Node && t instanceof Node || n instanceof H && t instanceof H) || (n.css(t.style), n instanceof H && t instanceof H && (n.beginArrow[x(366)] = t[x(390)].visible, n.endArrow[x(366)] = t[x(372)].visible, n[x(390)][x(384)](t[x(390)][x(381)], t[x(390)].height), n.endArrow[x(384)](t[x(372)][x(381)], t[x(372)].height)));
}
function M0() {
  const n = ["nodeCtrlBox", "hide", "defaultPrevented", "handlerLayer", "2843428eIZREP", "selectedGroup", "activeBox", "update", "4ueueZN", "90SgYSPT", "isDragEnd", "groupdragend", "348194sObWPu", "dragover", "selectedGroupDragHandler", "event", "showAt", "preventDefault", "drop", "152176McdnnJ", "getNoChildrensObjects", "now", "435222UcfUhH", "modeChange", "newMode", "dispatchEvent", "popupMenu", "388334laBHce", "inputSystem", "addChild", "5rOGJqE", "linkCtrlBox", "2314040WofuLd", "1719720000000", "groupdrag", "373872UVYXnE", "edit", "removeChild"];
  return M0 = function() {
    return n;
  }, M0();
}
function F0(n, t) {
  const x = M0();
  return F0 = function(e, s) {
    return e = e - 490, x[e];
  }, F0(n, t);
}
(function(n, t) {
  const x = F0, e = n();
  for (; []; )
    try {
      if (-parseInt(x(517)) / 1 + parseInt(x(494)) / 2 + -parseInt(x(502)) / 3 * (parseInt(x(513)) / 4) + -parseInt(x(497)) / 5 * (-parseInt(x(527)) / 6) + parseInt(x(509)) / 7 + -parseInt(x(524)) / 8 * (parseInt(x(514)) / 9) + parseInt(x(499)) / 10 === t)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(M0, 241274);
function tt(n) {
  const t = F0;
  let x = n.stage, e = x[t(495)], s = n[t(508)], a = n[t(505)], i = n[t(498)], r = n[t(511)], o = n.anchorBox, d = parseInt(t(500));
  Date[t(526)]() > d || (x.on(f0[t(490)], function(c) {
    const l = t;
    c[l(491)] == Ex[l(503)] ? (s[l(496)](a), s[l(496)](i), s.addChild(o), s[l(496)](r)) : (s[l(504)](a), s.removeChild(i), s[l(504)](o), s[l(504)](r)), x[l(512)]();
  }), e.on(t(518), function(c) {
    const l = t;
    c[l(522)](), n[l(492)](e);
  }), e.on(t(523), function() {
    const c = t;
    e[c(520)].defaultPrevented || n[c(492)](e);
  }), e.on("mousedown", function(c) {
    const l = t;
    e[l(520)][l(507)] || n[l(493)][l(506)]();
  }), e.on("mouseup", function(c) {
    const l = t;
    e.button == 2 ? !e[l(515)] && n[l(493)][l(521)](e.x, e.y) : n.popupMenu[l(506)]();
  }), x[t(510)].on(f0[t(501)], function(c) {
    const l = t;
    n[l(519)](c, x[l(510)][l(525)]());
  }), x[t(510)].on(f0[t(516)], function(c) {
    const l = t;
    n.selectedGroupDragEndHandler(c, x[l(510)][l(525)]());
  }));
}
function R0() {
  const n = ["isLink", "viewClone", "NodeCtrlBox", "resizeTo", "atan2", "getStageTransform", "3400713rxEnxt", "updateSize", "744236LgPWnB", "show", "translateTo", "8022rATWsP", "editor", "6akBtLs", "point", "attachTo", "3px solid orange", "rotate", "81745Zfswjj", "1304cQGDjM", "1354716GhOHBT", "attach not Node", "mouseEnabled", "zIndex", "editable", "262532eNOmNi", "center", "507215EJDIHd", "hide", "positionToLocalPoint", "currObject", "css"];
  return R0 = function() {
    return n;
  }, R0();
}
const e0 = h0;
(function(n, t) {
  const x = h0, e = n();
  for (; []; )
    try {
      if (parseInt(x(343)) / 1 + parseInt(x(350)) / 2 * (-parseInt(x(338)) / 3) + parseInt(x(333)) / 4 + parseInt(x(320)) / 5 + parseInt(x(345)) / 6 + parseInt(x(336)) / 7 * (parseInt(x(344)) / 8) + -parseInt(x(331)) / 9 === t)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(R0, 141442);
class et extends q {
  constructor(t, x = 0, e = 0, s = 1, a = 1) {
    const i = h0;
    super(null, x, e, s, a), this[i(348)] = Z0[i(327)], this[i(337)] = t, this[i(324)]({ border: i(341), lineDash: [5, 3] }), this[i(347)] = ![], this.currObject;
  }
  [e0(340)](t) {
    const x = e0;
    if (t == null || t[x(349)] != !![]) {
      this[x(323)] = null, this[x(321)]();
      return;
    }
    if (t[x(325)])
      throw new Error(x(346));
    this[x(323)] = t, this[x(332)](), this[x(334)]();
  }
  [e0(332)]() {
    const t = e0;
    this.currObject != null && this[t(326)](this[t(323)]);
  }
  viewClone(t) {
    const x = e0;
    let e = t[x(330)](), s = e.point(t[x(322)](u[x(351)])), a = e[x(339)](t[x(322)](u.rm)), i = Math[x(329)](a.y - s.y, a.x - s.x);
    e.rotate(-i);
    let r = e[x(339)](t[x(322)](u.center)), o = e.point(t.positionToLocalPoint(u.rb)), d = (o.x - r.x) * 2, c = (o.y - r.y) * 2, l = 4;
    this[x(328)](d + l * 2, c + l * 2), this[x(342)](i), this[x(335)](s.x, s.y);
  }
}
function h0(n, t) {
  const x = R0();
  return h0 = function(e, s) {
    return e = e - 320, x[e];
  }, h0(n, t);
}
function W0(n, t) {
  const x = K0();
  return W0 = function(e, s) {
    return e = e - 414, x[e];
  }, W0(n, t);
}
const E = W0;
(function(n, t) {
  const x = W0, e = n();
  for (; []; )
    try {
      if (parseInt(x(428)) / 1 * (-parseInt(x(426)) / 2) + parseInt(x(415)) / 3 * (parseInt(x(434)) / 4) + -parseInt(x(416)) / 5 * (parseInt(x(414)) / 6) + -parseInt(x(421)) / 7 + parseInt(x(437)) / 8 + parseInt(x(431)) / 9 * (-parseInt(x(430)) / 10) + -parseInt(x(420)) / 11 * (-parseInt(x(427)) / 12) === t)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(K0, 620125);
const nt = navigator.userAgent[E(429)]().indexOf(E(422)) != -1, z = E(nt ? 436 : 439);
function K0() {
  const n = ["ArrowDown", "Meta+Backspace", "19311105jeSutS", "4236463dYEFFN", "MAC OS", "Shift", "Shift+c", "ArrowRight", "148714zxHdKB", "12CTEFbA", "4xymAYq", "toUpperCase", "10310oGfIMw", "9630ebWMsA", "+shift+z", "Shift+v", "20ompVLH", "ArrowUp", "Meta", "1966000OhUSUu", "ArrowLeft", "Control", "496734GIDnYZ", "722490fjMeGw", "35OVzmQU", "Delete"];
  return K0 = function() {
    return n;
  }, K0();
}
const bx = { CtrlOrCmd: z, CreateGroup: z, DropTo_leader: E(423), Delete: [E(417), E(419)], Select_all: [z + "+a"], Select_invert: [z + "+i"], Cut: [z + "+x"], Copy: [z + "+c"], Paste: [z + "+v"], Save: [z + "+s"], Open: [z + "+o"], Undo: [z + "+z"], Redo: [z + E(432)], Copy_style: [E(424)], paste_Style: [E(433)], Move_up: [E(435)], Move_down: [E(418)], Move_left: [E(438)], Move_right: [E(425)], Layout_tree: ["t"], Layout_grid: ["g"] };
(function(n, t) {
  for (var x = tx, e = n(); []; )
    try {
      var s = -parseInt(x(263)) / 1 + parseInt(x(259)) / 2 * (parseInt(x(265)) / 3) + parseInt(x(264)) / 4 + -parseInt(x(258)) / 5 + -parseInt(x(266)) / 6 + -parseInt(x(261)) / 7 * (-parseInt(x(262)) / 8) + parseInt(x(260)) / 9;
      if (s === t)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(J0, 641924);
function tx(n, t) {
  var x = J0();
  return tx = function(e, s) {
    e = e - 258;
    var a = x[e];
    return a;
  }, tx(n, t);
}
function J0() {
  var n = ["2695RQZZSH", "10248HAJNTD", "773258MSIyAO", "3255084uLrfSL", "417216RHlaoc", "574362muAVJT", "77620zZxfjI", "2jcNNhK", "723645dddEMH"];
  return J0 = function() {
    return n;
  }, J0();
}
class Y {
  constructor(t) {
    this.type = t;
  }
}
const h = U0;
function U0(n, t) {
  const x = V0();
  return U0 = function(e, s) {
    return e = e - 263, x[e];
  }, U0(n, t);
}
(function(n, t) {
  const x = U0, e = n();
  for (; []; )
    try {
      if (-parseInt(x(277)) / 1 + -parseInt(x(280)) / 2 * (parseInt(x(397)) / 3) + parseInt(x(288)) / 4 + parseInt(x(411)) / 5 * (-parseInt(x(405)) / 6) + -parseInt(x(333)) / 7 * (-parseInt(x(402)) / 8) + -parseInt(x(315)) / 9 + parseInt(x(363)) / 10 * (parseInt(x(334)) / 11) === t)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(V0, 614633);
function V0() {
  const n = ["buttons", "addChild", "forEach", "1798056yRCAYM", "getState", "Node", "paste", "linkCtrlBox", "paddingRight", "inputSystem", "hideCtrlBox", "recordEnd", "changeParent", "editable", "cssClipBoard", "width", "showAt", "keyboard", "redoUndoSys", "pickUpChild", "visible", "Shift", "dblclickHandler", "showTip", "selectedGroupDragHandler", "objects", "mouseOvertarget's parent is null", "round", "copyPut", "defaultPrevented", "8282862vuHtmZ", "handlerLayer", "Control", "setCursor", "connectable", "控制点", "recordInterrupt", "zIndex", "record和recordEnd没有成对出现", "alignHandler", "isDragStart", "getObjectsIntersect", "function", "opTooltip", "create", "attachTo", "EditorNewLink", "openJson", "1047158oQqlSL", "1122tjthte", "currObject", "AutoFoldLink", "hide", "粘贴样式", "addLink", "anchorBox", "record", "mouseenterHandler", "Link", "mouseoutStageHandler", "button", "toStageAABB", "LinkClassName", "styleCopyHandler", "assign", "lastLayerState", "isDragEnd", "isNode", "KeysConfig", "currentLayer", "getNoChildrensObjects", "leaveTextInputMode", "mouseoutHandler", "nodeCtrlBox", "cut", "mousedownHandler", "length", "css", "212340lcqxKk", "mousemoveHandler", "afterDeleteHandler", "mousewheelHandler", "preventDefault", "setHtml", "topo_last_doc", "domElement", "mouseupHandler", "stage", "recordName", "hideGuidLine", "controlTarget", "setTarget", "textInputMode", "sendKey", "restore", "copy", "showOpTooltip", "fadeOut", "serializerSystem", "enterTextInputMode", "auto", "parent", "push", "getCurrentLayer", "log", "defineKeys", "isLink", "clipBoard", "editor", "takeSource", "pickedObject", "activeBox", "27QVmifR", "newLinkProperties", "warn", "20px", "undo", "56lxcZZW", "update", "selectedGroup", "21876tStvoO", "view", "保存成功", "isMouseOn", "msg", "setIntersect", "1400sHaEst", "对象拖拽", "mouseX", "save", "translateToCenter", "mouseenterStageHandler", "addNewInstance", "undoHandler", "getItem", "event", "indexOf", "_obb", "dispatchEvent", "delete", "setItem", "updateSize", "mousedragHandler", "DropTo_leader", "mouseOverTarget", "redo", "isKeydown", "height", "deleteHandler", "style", "getCenter", "pasteHandler", "aabb", "toJson", "174822oLkjhM", "openLasted", "showGuildLine", "207086YWpmwc", "keys", "updatezIndex", "selectedGroupDragEndHandler", "saveHandler"];
  return V0 = function() {
    return n;
  }, V0();
}
const st = ix.w != null ? ix.w.charAt(3) : "1";
let at = new Y("open"), ut = new Y(h(414)), it = new Y(h(359)), rt = new Y(h(380)), ot = new Y(h(291)), dx = new Y(h(329)), ct = new Y(h(424));
class lt extends hx {
  constructor(t) {
    const x = h;
    super(), this[x(353)] = bx, this[x(377)] = ![], this[x(347)] = x(336), this.stage = t, t[x(393)] = this, this[x(354)] = this.getCurrentLayer(), this[x(316)] = t.handlerLayer, this[x(404)] = this[x(372)].selectedGroup, this[x(302)] = t.keyboard, this[x(392)] = new ox(), this[x(299)] = new ox(), this.nodeCtrlBox = new Bx(this), this[x(292)] = new Nx(this), this[x(340)] = new zx(this), this[x(396)] = new et(this), this.popupMenu = Ux(this), tt(this), Rx(this), this[x(295)](), this[x(372)][x(294)][x(395)] = null;
    let e = this;
    this[x(372)].on(f0.zoomAfter, function() {
      const s = x;
      e.update(), e[s(340)][s(403)]();
    }), this.controlTarget = null, this[x(267)] = null, this.inputTextfield = new Px(this), this[x(303)] = new Mx(this), Vx(this), this[x(328)] = new Hx(t), this[x(328)][x(370)][x(272)].paddingLeft = x(400), this.opTooltip.domElement.style[x(293)] = "20px";
  }
  [h(388)]() {
    return this.stage.getCurrentLayer();
  }
  [h(390)](t) {
    Object.assign(this[h(353)], t);
  }
  [h(381)](t) {
    const x = h;
    this.opTooltip[x(368)](t), this.opTooltip[x(301)](this[x(372)][x(300)] * 0.5, this[x(372)][x(270)] * 0.5), this.opTooltip[x(382)](80);
  }
  [h(279)](t) {
    Yx(this, t);
  }
  hideGuidLine() {
    Zx(this);
  }
  [h(384)]() {
    const t = h;
    this[t(377)] = !![];
  }
  [h(356)]() {
    const t = h;
    this[t(377)] = ![];
  }
  [h(284)](t) {
    const x = h;
    let e = this.stage[x(383)][x(276)]([this[x(354)]]);
    cx[x(263)](x(369), e), console[x(389)](x(407), e);
  }
  [h(278)]() {
    const t = h, x = this[t(354)], e = cx[t(419)](t(369));
    e != null && (console.debug("加载", e), x.removeAllChild(), this[t(372)][t(383)].fillByJson(x, e));
  }
  [h(418)]() {
    const t = h;
    this.redoUndoSys[t(401)]();
  }
  redoHandler() {
    const t = h;
    this[t(303)][t(268)]();
  }
  copyHandler() {
    const t = h;
    Xx(this), this[t(423)](rt);
  }
  cutHandler() {
    const t = h;
    qx(this), this[t(423)](it);
  }
  [h(274)]() {
    Qx(this), this.dispatchEvent(ot);
  }
  [h(271)]() {
    const t = h;
    $x(this), this[t(423)](ct);
  }
  [h(348)]() {
    const t = h;
    let x = this[t(372)][t(294)][t(395)];
    x == null && (!this[t(372)][t(404)].isEmpty() && (x = this[t(372)][t(404)].objects[0]), x == null) || this[t(299)][t(313)](x);
  }
  stylePasteHandler() {
    const t = h;
    let x = this.cssClipBoard[t(394)]();
    if (x == null)
      return;
    let e = this[t(372)][t(404)].objects;
    this[t(341)](t(338)), e.forEach((s) => {
      xt(s, x);
    }), this[t(296)]("粘贴样式");
  }
  [h(324)](t) {
    Kx(t, this), this.update();
  }
  hideCtrlBox() {
    const t = h;
    this[t(292)].hide(), this[t(358)][t(337)]();
  }
  [h(307)](t) {
    const x = h;
    this[x(372)][x(294)];
  }
  [h(366)](t) {
  }
  [h(360)](t) {
    const x = h, e = this[x(372)].inputSystem;
    let s = this[x(316)], a = this[x(358)], i = this.linkCtrlBox;
    if (this.controlTarget = s[x(304)](), this[x(340)].hide(), this[x(375)] != null) {
      this[x(375)][x(360)](e), e[x(367)](), this[x(403)]();
      return;
    }
    i[x(337)](), a[x(337)](), this[x(403)]();
  }
  [h(371)](t) {
    const x = h, e = this.stage[x(294)];
    this[x(374)]();
    let s = this.stage, a = this[x(358)], i = this[x(292)], r = this[x(375)];
    if (r != null) {
      e[x(351)] && !(r instanceof xx) && this[x(296)](x(320)), r[x(371)](e), e[x(367)](), this.update();
      return;
    }
    if (e[x(345)] == 2)
      return;
    let o = s.inputSystem[x(395)];
    o != null ? o[x(298)] && (o instanceof H ? i[x(330)](o) : (this.anchorBox[x(376)](o), a.attachTo(o))) : (this[x(340)][x(337)](), a.hide(), i[x(337)]());
    {
      if (this.activeBox[x(335)] != null) {
        let c = this[x(404)][x(355)](), l = lx(this, c), _ = l[x(386)];
        l[x(310)][x(287)]((g) => {
          g[x(297)](_), g.upgradeLinks();
        });
      }
      this[x(396)][x(330)](null);
    }
    this.update();
  }
  [h(265)](t) {
    const x = h, e = this[x(372)][x(294)];
    if (e[x(285)] == 2)
      return;
    this.keyboard[x(269)](x(306)) && this[x(372)].setCursor("crosshair"), this[x(279)](e);
    let s = this[x(375)];
    if (s != null) {
      if (e[x(325)] && !(s instanceof xx) && this[x(341)](x(320)), s[x(265)](e), this[x(403)](), e[x(420)][x(314)] == !![])
        return;
      e[x(367)]();
    }
    this[x(396)].hide();
    const a = this[x(353)][x(266)];
    if (this[x(372)].inputSystem[x(395)] && this[x(302)][x(269)](a)) {
      let i = this.selectedGroup[x(355)](), r = lx(this, i), o = r[x(386)];
      o != null && o[x(298)] && this.activeBox[x(330)](o);
    }
  }
  [h(364)](t) {
    const x = h;
    let e = this[x(372)];
    const s = e[x(316)];
    let a = this[x(354)];
    e.setCursor(x(385));
    let i = s[x(304)]();
    if (i !== this[x(267)] && (this[x(267)] != null && this.mouseOverTarget[x(357)](t), i != null && i.mouseenterHandler(t)), this.mouseOverTarget = i, i != null) {
      const o = i[x(386)];
      sx(o, x(311)), i[x(364)](t), t[x(367)]();
      return;
    }
    let r = a[x(304)]();
    if (r != null && (this[x(372)][x(318)]("move"), r[x(352)] && r[x(319)] && this[x(340)].setTarget(r), this[x(302)][x(269)](x(317)) && r.connectable)) {
      this[x(340)][x(376)](r);
      const d = this.anchorBox[x(326)]([r]);
      d != null && this.anchorBox[x(410)](d);
    }
    this[x(403)]();
  }
  [h(309)](t, x) {
    const e = h;
    if (this[e(372)][e(294)][e(325)] && this[e(341)](e(412)), x[e(361)] == 1) {
      const s = x[0], a = this[e(354)][e(346)](s[e(422)][e(275)]), i = a[e(273)]();
      this[e(279)](i);
    }
  }
  [h(283)](t, x) {
    const e = h;
    if (!this[e(372)].inputSystem[e(408)]) {
      this[e(321)]();
      return;
    }
    x.forEach((s) => {
      const a = e;
      s[a(352)] && (s.x = Math.round(s.x), s.y = Math[a(312)](s.y));
    }), this[e(296)]("对象拖拽");
  }
  [h(321)]() {
    const t = h;
    this[t(373)] = null, this[t(350)] = null;
  }
  [h(341)](t) {
    const x = h;
    let e = this[x(354)], s = e[x(372)].serializerSystem;
    this[x(373)] != null && console[x(399)](x(323), this[x(373)] + ":" + t), this[x(373)] = t, this[x(350)] = s[x(289)](this[x(354)]);
  }
  recordEnd(t) {
    const x = h;
    if (t != this[x(373)])
      throw console[x(399)](this[x(373)], t), new Error("recordName error");
    this[x(373)] = null;
    let e = this.currentLayer, s = e[x(372)].serializerSystem, a = this[x(350)], i = s[x(289)](e);
    this.redoUndoSys[x(387)](t, function() {
      s[x(379)](e, i);
    }, function() {
      s.restore(e, a);
    });
  }
  [h(342)](t) {
    const x = h;
    this.linkCtrlBox.mouseenterStageHandler(t), this.nodeCtrlBox[x(416)](t), this.anchorBox[x(416)](t);
  }
  mouseoutHandler(t) {
    const x = h;
    this[x(292)][x(344)](t), this[x(358)][x(344)](t), this[x(340)][x(344)](t);
  }
  newLink(t, x, e, s) {
    const a = h;
    let i = this, r = Q0(this[a(347)]);
    const o = new r(t, x, e, s), d = Object[a(349)]({}, i[a(398)]);
    d[a(362)] && (o[a(362)](d.css), delete d[a(362)]), Object[a(281)](d)[a(287)]((_) => {
      const p = a;
      let g = d[_];
      typeof g == p(327) ? o[_] = g() : o[_] = g;
    });
    let l = x[a(352)] || x[a(391)] ? x[a(386)] : this[a(354)];
    return o[a(322)] = Z0[a(331)], l[a(286)](o), o;
  }
  [h(365)](t) {
    const x = h;
    if (st != "1")
      return null;
    this[x(381)]("删除"), t === this[x(340)].target && this[x(340)].hide();
  }
  [h(417)](t) {
    const x = h;
    this[x(388)]()[x(286)](t);
  }
  [h(339)](t) {
    this[h(354)].addChild(t);
  }
  update() {
    const t = h;
    this[t(396)][t(305)] && this.activeBox[t(264)](), this[t(358)][t(305)] && this[t(358)][t(264)](), this[t(340)][t(403)](), this[t(372)][t(403)]();
  }
  [h(282)]() {
    this[h(354)].updatezIndex();
  }
  toJson() {
    const t = h;
    return this[t(372)][t(383)].toJson(this[t(354)]);
  }
  [h(332)](t) {
    const x = h;
    this[x(354)].openJson(t), this.stage[x(415)](), this.dispatchEvent(at);
  }
  [h(308)](t, x = "") {
    const e = h;
    let s = new Event(e(389));
    s[e(409)] = t + x, this[e(423)](s);
  }
  [h(329)](t) {
    const x = h;
    let e = { x: this.currentLayer[x(413)], y: this[x(354)].mouseY }, s = e.x, a = e.y, i = Q0(t);
    if (t[x(421)](x(290)) != -1) {
      let r = new i(null, s, a, 64, 64);
      return this.addNewInstance(r), this[x(423)](dx), r;
    }
    if (t[x(421)](x(343)) != -1) {
      this[x(372)][x(265)].mode && this[x(372)].setMode(x(406));
      let r = new i(null, { x: s - 40, y: a }, { x: s + 40, y: a + (t == x(343) ? 0 : 80) });
      return this.addNewInstance(r), this[x(423)](dx), r;
    }
    throw new Error("unknow classname:" + t);
  }
  [h(378)](t, x) {
    const e = h;
    this[e(302)][e(378)](t, x);
  }
}
lt[h(353)] = bx;
function ex(n, t) {
  var x = Y0();
  return ex = function(e, s) {
    e = e - 164;
    var a = x[e];
    return a;
  }, ex(n, t);
}
(function(n, t) {
  for (var x = ex, e = n(); []; )
    try {
      var s = parseInt(x(167)) / 1 * (-parseInt(x(173)) / 2) + parseInt(x(171)) / 3 + -parseInt(x(165)) / 4 * (-parseInt(x(168)) / 5) + parseInt(x(174)) / 6 * (parseInt(x(164)) / 7) + parseInt(x(166)) / 8 * (parseInt(x(170)) / 9) + -parseInt(x(169)) / 10 + -parseInt(x(172)) / 11;
      if (s === t)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Y0, 744240);
function Y0() {
  var n = ["2966214lqpElb", "7SkFvWD", "1340268BwNmTP", "8lyzxNH", "2711BdQbCz", "15grDdXo", "9593280HXBWKk", "9781956lGWzHY", "3983424cFGarx", "15937933RFrBzU", "562nOmkJE"];
  return Y0 = function() {
    return n;
  }, Y0();
}
export {
  lt as Editor,
  ht as IconsPanel,
  ft as PropertiesPanel,
  rt as copyEvent,
  dx as createEvent,
  it as cutEvent,
  ct as deleteEvent,
  at as openEvent,
  ot as pasteEvent,
  ut as saveEvent
};
