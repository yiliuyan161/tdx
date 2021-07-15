hljs.registerLanguage("tdx", function () {
    "use strict";
    return function (e) {
        var n = {
                keyword: "O C H L OPEN CLOSE HIGH LOW IF IFC IFN VALUEWHEN AND OR NOT  and or not open high low close vol VOL",
                literal: "False None True LINETHICK1 LINETHICK2 LINETHICK3 CIRCLEDOT COLOR COLORBLACK COLORBLUE COLORBROWN COLORCYAN COLORGRAY COLORGREEN COLORLIBLUE COLORLICYAN COLORLIGRAY COLORLIGREEN COLORLIMAGENTA COLORLIRED COLORMAGENTA COLORRED COLORSTICK COLORWHITE COLORYELLOW CROSSDOT DOTLINE DRAWABOVE LINESTICK LINETHICK MOVE MOVER NODRAW NOFRAME NOTEXT PLAYSOUND1 PLAYSOUND10 PLAYSOUND11 PLAYSOUND12 PLAYSOUND13 PLAYSOUND14 PLAYSOUND15 PLAYSOUND16 PLAYSOUND17 PLAYSOUND18 PLAYSOUND19 PLAYSOUND2 PLAYSOUND20 PLAYSOUND3 PLAYSOUND4 PLAYSOUND5 PLAYSOUND6 PLAYSOUND7 PLAYSOUND8 PLAYSOUND9 POINTDOT STICK VOLSTICK"
            },
            b = {className: "operator", begin: /(:=)|(:)|(>=)|(<=)|(>)|(<)|(\()|(\))|(\*)|(\/)|(<>)|(=)/},
            c = {className: "built_in", begin: /(EMA)|(SMA)|(DRAWICON)|(CROSS)|(HHV)|(LLV)/},
            l = {
                className: "number",
                relevance: 0,
                variants: [{begin: e.BINARY_NUMBER_RE + "[lLjJ]?"}, {begin: "\\b(0o[0-7]+)[lLjJ]?"}, {begin: e.C_NUMBER_RE + "[lLjJ]?"}]
            },
            i = {className: "subst", begin: /\{/, end: /\}/, keywords: n, illegal: /#/},
            t = {
                className: "params",
                variants: [{begin: /\(\s*\)/, skip: !0, className: null}, {
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    contains: ["self", l, e.HASH_COMMENT_MODE]
                }]
            };
        return i.contains = [l], {
            name: "tdx",
            aliases: ["tn"],
            keywords: n,
            illegal: /(<\/|->|\?)|=>/,
            contains: [b, c, l,
                hljs.COMMENT(
                    /\{/,      // begin regex
                    /\}/,        // end regex
                )]
        }
    }
}());

document$.subscribe(() => {
    hljs.highlightAll()
})

