(function () {
    'use strict';

    angular
        .module('cssTester')
        .service('propService', Service);

    //Service.$inject = [''];

    function Service() {
        var styles = [
            {
                "bsProperty": "align-content",
                "bsIE": 11,
                "bsFirefox": 28,
                "bsChrome": 21,
                "bsPreSafari": 7,
                "bsOpera": 12.1
                }, {
                "bsProperty": "align-items",
                "bsIE": 11,
                "bsFirefox": 20,
                "bsChrome": 21,
                "bsPreSafari": 7,
                "bsOpera": 12.1
                }, {
                "bsProperty": "align-self",
                "bsIE": 11,
                "bsFirefox": 20,
                "bsChrome": 21,
                "bsPreSafari": 7,
                "bsOpera": 12.1
                }, {
                "bsProperty": "@keyframes",
                "bsIE": 10,
                "bsFirefox": 16,
                "bsPreChrome": 4,
                "bsPreSafari": 4,
                "bsOpera": 12.1
                }, {
                "bsProperty": "animation",
                "bsIE": 10,
                "bsFirefox": 16,
                "bsPreChrome": 4,
                "bsPreSafari": 4,
                "bsOpera": 12.1
                }, {
                "bsProperty": "animation-name",
                "bsIE": 10,
                "bsFirefox": 16,
                "bsPreChrome": 4,
                "bsPreSafari": 4,
                "bsOpera": 12.1
                }, {
                "bsProperty": "animation-duration",
                "bsIE": 10,
                "bsFirefox": 16,
                "bsPreChrome": 3,
                "bsPreSafari": 4,
                "bsOpera": 12.1
                }, {
                "bsProperty": "animation-timing-function",
                "bsIE": 10,
                "bsFirefox": 16,
                "bsPreChrome": 4,
                "bsPreSafari": 4,
                "bsOpera": 12.1
                }, {
                "bsProperty": "animation-delay",
                "bsIE": 10,
                "bsFirefox": 16,
                "bsPreChrome": 4,
                "bsPreSafari": 4,
                "bsOpera": 12.1
                }, {
                "bsProperty": "animation-iteration-count",
                "bsIE": 10,
                "bsFirefox": 16,
                "bsPreChrome": 4,
                "bsPreSafari": 4,
                "bsOpera": 12.1
                }, {
                "bsProperty": "animation-direction",
                "bsIE": 10,
                "bsFirefox": 16,
                "bsPreChrome": 4,
                "bsPreSafari": 4,
                "bsOpera": 12.1
                }, {
                "bsProperty": "animation-play-state",
                "bsIE": 10,
                "bsFirefox": 16,
                "bsPreChrome": 4,
                "bsPreSafari": 4,
                "bsOpera": 12.1
                }, {
                "bsProperty": "backface-visibility",
                "bsPreIE": 10,
                "bsFirefox": 16,
                "bsChrome": 36,
                "bsPreSafari": 0,
                "bsOpera": 15
                }, {
                "bsProperty": "background-clip",
                "bsIE": 9,
                "bsFirefox": 4,
                "bsChrome": 4,
                "bsSafari": 3,
                "bsOpera": 10.5
                }, {
                "bsProperty": "background-origin",
                "bsIE": 9,
                "bsFirefox": 4,
                "bsChrome": 4,
                "bsSafari": 3,
                "bsOpera": 10.5
                }, {
                "bsProperty": "background-size",
                "bsIE": 9,
                "bsFirefox": 4,
                "bsChrome": 4,
                "bsSafari": 4.1,
                "bsOpera": 10
                }, {
                "bsProperty": "border-bottom-left-radius",
                "bsIE": 9,
                "bsFirefox": 4,
                "bsChrome": 5,
                "bsSafari": 5,
                "bsOpera": 10.5
                }, {
                "bsProperty": "border-bottom-right-radius ",
                "bsIE": 9,
                "bsFirefox": 4,
                "bsChrome": 5,
                "bsSafari": 5,
                "bsOpera": 10.5
                }, {
                "bsProperty": "border-image",
                "bsIE": 11,
                "bsFirefox": 15,
                "bsChrome": 16,
                "bsSafari": 6,
                "bsOpera": 15
                }, {
                "bsProperty": "border-image-outset",
                "bsIE": 11,
                "bsFirefox": 15,
                "bsChrome": 15,
                "bsSafari": 6,
                "bsOpera": 15
                }, {
                "bsProperty": "border-image-repeat",
                "bsIE": 11,
                "bsFirefox": 15,
                "bsChrome": 15,
                "bsSafari": 6,
                "bsOpera": 15
                }, {
                "bsProperty": "border-image-slice",
                "bsIE": 11,
                "bsFirefox": 15,
                "bsChrome": 15,
                "bsSafari": 6,
                "bsOpera": 15
                }, {
                "bsProperty": "border-image-source",
                "bsIE": 11,
                "bsFirefox": 15,
                "bsChrome": 15,
                "bsSafari": 6,
                "bsOpera": 15
                }, {
                "bsProperty": "border-image-width",
                "bsIE": 11,
                "bsFirefox": 13,
                "bsChrome": 15,
                "bsSafari": 6,
                "bsOpera": 15
                }, {
                "bsProperty": "border-radius",
                "bsIE": 9,
                "bsFirefox": 4,
                "bsChrome": 5,
                "bsSafari": 5,
                "bsOpera": 10.5
                }, {
                "bsProperty": "border-top-left-radius",
                "bsIE": 9,
                "bsFirefox": 4,
                "bsChrome": 5,
                "bsSafari": 5,
                "bsOpera": 10.5
                }, {
                "bsProperty": "border-top-right-radius",
                "bsIE": 9,
                "bsFirefox": 4,
                "bsChrome": 5,
                "bsSafari": 5,
                "bsOpera": 10.5
                }, {
                "bsProperty": "box-decoration-break",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "box-shadow",
                "bsIE": 9,
                "bsFirefox": 4,
                "bsChrome": 10,
                "bsSafari": 5.1,
                "bsOpera": 10.5
                }, {
                "bsProperty": "box-sizing",
                "bsIE": 8,
                "bsFirefox": 29,
                "bsChrome": 10,
                "bsSafari": 5.1,
                "bsOpera": 9.5
                }, {
                "bsProperty": "break-after",
                "bsIE": 10,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsOpera": 11.1
                }, {
                "bsProperty": "break-before",
                "bsIE": 10,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsOpera": 11.1
                }, {
                "bsProperty": "break-inside",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "column-count",
                "bsIE": 10,
                "bsPreFirefox": 2,
                "bsPreChrome": 4,
                "bsPreSafari": 3,
                "bsPreOpera": 15
                }, {
                "bsProperty": "column-fill",
                "bsNoIE": 0,
                "bsPreFirefox": 13,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "column-gap",
                "bsIE": 10,
                "bsPreFirefox": 2,
                "bsPreChrome": 4,
                "bsPreSafari": 3,
                "bsPreOpera": 15
                }, {
                "bsProperty": "column-rule",
                "bsIE": 10,
                "bsPreFirefox": 2,
                "bsPreChrome": 4,
                "bsPreSafari": 3,
                "bsPreOpera": 15
                }, {
                "bsProperty": "column-rule-color",
                "bsIE": 10,
                "bsPreFirefox": 2,
                "bsPreChrome": 4,
                "bsPreSafari": 3,
                "bsPreOpera": 15
                }, {
                "bsProperty": "column-rule-style",
                "bsIE": 10,
                "bsPreFirefox": 2,
                "bsPreChrome": 4,
                "bsPreSafari": 3,
                "bsPreOpera": 15
                }, {
                "bsProperty": "column-rule-width",
                "bsIE": 10,
                "bsPreFirefox": 2,
                "bsPreChrome": 4,
                "bsPreSafari": 0,
                "bsPreOpera": 15
                }, {
                "bsProperty": "column-span",
                "bsIE": 10,
                "bsNoFirefox": 0,
                "bsPreChrome": 4,
                "bsPreSafari": 0,
                "bsPreOpera": 15
                }, {
                "bsProperty": "column-width",
                "bsIE": 10,
                "bsPreFirefox": 2,
                "bsPreChrome": 4,
                "bsPreSafari": 3,
                "bsPreOpera": 15
                }, {
                "bsProperty": "columns",
                "bsIE": 10,
                "bsPreFirefox": 9,
                "bsPreChrome": 4,
                "bsPreSafari": 3,
                "bsPreOpera": 15
                }, {
                "bsProperty": "fit",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "flex",
                "bsIE": 11,
                "bsFirefox": 28,
                "bsChrome": 29,
                "bsPreSafari": 6.1,
                "bsOpera": 12.1
                }, {
                "bsProperty": "flex-basis",
                "bsIE": 11,
                "bsFirefox": 28,
                "bsChrome": 29,
                "bsPreSafari": 6.1,
                "bsOpera": 12.1
                }, {
                "bsProperty": "flex-direction",
                "bsIE": 11,
                "bsFirefox": 28,
                "bsChrome": 29,
                "bsPreSafari": 6.1,
                "bsOpera": 12.1
                }, {
                "bsProperty": "flex-flow",
                "bsIE": 11,
                "bsFirefox": 28,
                "bsChrome": 29,
                "bsPreSafari": 6.1,
                "bsOpera": 12.1
                }, {
                "bsProperty": "flex-grow",
                "bsIE": 11,
                "bsFirefox": 28,
                "bsChrome": 29,
                "bsPreSafari": 6.1,
                "bsOpera": 12.1
                }, {
                "bsProperty": "flex-shrink",
                "bsIE": 11,
                "bsFirefox": 28,
                "bsChrome": 29,
                "bsPreSafari": 6.1,
                "bsOpera": 12.1
                }, {
                "bsProperty": "flex-wrap",
                "bsIE": 11,
                "bsFirefox": 28,
                "bsChrome": 29,
                "bsPreSafari": 6.1,
                "bsOpera": 12.1
                }, {
                "bsProperty": "@font-face",
                "bsIE": 9,
                "bsFirefox": 3.6,
                "bsChrome": 4,
                "bsSafari": 3,
                "bsOpera": 10
                }, {
                "bsProperty": "@font-feature-values",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "font-feature-settings",
                "bsIE": 10,
                "bsFirefox": 34,
                "bsPreChrome": 16,
                "bsNoSafari": 0,
                "bsPreOpera": 25
                }, {
                "bsProperty": "font-kerning",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "font-language-override",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "font-size-adjust",
                "bsNoIE": 0,
                "bsFirefox": 3,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "font-stretch",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "font-synthesis",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "font-variant",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "font-variant-alternates",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "font-variant-caps",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "font-variant-east-asian",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "font-variant-ligatures",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "font-variant-numeric",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "font-variant-position",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "hanging-punctuation",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "hyphens",
                "bsPreIE": 10,
                "bsPreFirefox": 6,
                "bsPreChrome": 13,
                "bsPreSafari": 5.1,
                "bsNoOpera": 0
                }, {
                "bsProperty": "image-orientation",
                "bsNoIE": 0,
                "bsFirefox": 26,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "image-rendering",
                "bsNoIE": 0,
                "bsPreFirefox": 0,
                "bsChrome": 0,
                "bsNoSafari": 0,
                "bsOpera": 11.6
                }, {
                "bsProperty": "image-resolution",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "justify-content",
                "bsIE": 11,
                "bsFirefox": 28,
                "bsChrome": 29,
                "bsPreSafari": 6.1,
                "bsOpera": 12.1
                }, {
                "bsProperty": "line-break",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "mark",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "mark-after",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "mark-before",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "marks",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "marquee-direction",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsPreChrome": 0,
                "bsPreSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "marquee-play-count",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsPreChrome": 0,
                "bsPreSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "marquee-speed",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsPreSafari": 0,
                "bsPreSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "marquee-style",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsPreSafari": 0,
                "bsPreSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "nav-down",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsOpera": 11.5
                }, {
                "bsProperty": "nav-index",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsOpera": 11.5
                }, {
                "bsProperty": "nav-left",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsOpera": 11.5
                }, {
                "bsProperty": "nav-right",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsOpera": 11.5
                }, {
                "bsProperty": "nav-up",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsOpera": 11.5
                }, {
                "bsProperty": "object-fit",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "object-position",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "opacity",
                "bsIE": 9,
                "bsFirefox": 2,
                "bsChrome": 4,
                "bsSafari": 3.1,
                "bsOpera": 9
                }, {
                "bsProperty": "order",
                "bsIE": 11,
                "bsFirefox": 28,
                "bsChrome": 29,
                "bsPreSafari": 6.1,
                "bsOpera": 12.1
                }, {
                "bsProperty": "outline-offset",
                "bsNoIE": 0,
                "bsFirefox": 3.5,
                "bsChrome": 4,
                "bsSafari": 3,
                "bsOpera": 10.5
                }, {
                "bsProperty": "overflow-wrap",
                "bsIE": 9,
                "bsFirefox": 3.5,
                "bsChrome": 0,
                "bsSafari": 3,
                "bsOpera": 9.5
                }, {
                "bsProperty": "overflow-x",
                "bsIE": 9,
                "bsFirefox": 3.5,
                "bsChrome": 4,
                "bsSafari": 3,
                "bsOpera": 9.5
                }, {
                "bsProperty": "overflow-y",
                "bsIE": 9,
                "bsFirefox": 0,
                "bsChrome": 4,
                "bsSafari": 3,
                "bsOpera": 9.5
                }, {
                "bsProperty": "@page",
                "bsIE": 8,
                "bsFirefox": 19,
                "bsChrome": 0,
                "bsSafari": 5,
                "bsOpera": 6
                }, {
                "bsProperty": "perspective",
                "bsIE": 10,
                "bsFirefox": 16,
                "bsChrome": 36,
                "bsPreSafari": 4,
                "bsOpera": 23
                }, {
                "bsProperty": "perspective-origin",
                "bsIE": 10,
                "bsFirefox": 16,
                "bsChrome": 36,
                "bsPreSafari": 4,
                "bsOpera": 23
                }, {
                "bsProperty": "resize",
                "bsNoIE": 0,
                "bsFirefox": 5,
                "bsChrome": 4,
                "bsSafari": 4,
                "bsOpera": 15
                }, {
                "bsProperty": "rest",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "rest-after",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "rest-before",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "ruby-align",
                "bsIE": 0,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "tab-size",
                "bsNoIE": 0,
                "bsPreFirefox": 4,
                "bsChrome": 21,
                "bsSafari": 6.1,
                "bsOpera": 15
                }, {
                "bsProperty": "text-align-last",
                "bsIE": 5.5,
                "bsPreFirefox": 12,
                "bsChrome": 35,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "text-combine-upright",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "text-decoration-color",
                "bsNoIE": 0,
                "bsPreFirefox": 6,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "text-decoration-line",
                "bsNoIE": 0,
                "bsPreFirefox": 6,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "text-decoration-style",
                "bsNoIE": 0,
                "bsPreFirefox": 6,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "text-justify",
                "bsIE": 5.5,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "text-orientation",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "text-overflow",
                "bsIE": 6,
                "bsFirefox": 7,
                "bsChrome": 4,
                "bsSafari": 3.1,
                "bsOpera": 11
                }, {
                "bsProperty": "text-shadow",
                "bsIE": 10,
                "bsFirefox": 3.5,
                "bsChrome": 4,
                "bsSafari": 4,
                "bsOpera": 9.6
                }, {
                "bsProperty": "text-underline-position",
                "bsNoIE": 0,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }, {
                "bsProperty": "transform",
                "bsIE": 10,
                "bsFirefox": 16,
                "bsChrome": 36,
                "bsPreSafari": 3.2,
                "bsOpera": 23
                }, {
                "bsProperty": "transform-origin",
                "bsIE": 10,
                "bsFirefox": 16,
                "bsChrome": 36,
                "bsPreSafari": 3.2,
                "bsOpera": 23
                }, {
                "bsProperty": "transform-style",
                "bsIE": 11,
                "bsFirefox": 16,
                "bsChrome": 36,
                "bsPreSafari": 4.0,
                "bsOpera": 23
                }, {
                "bsProperty": "transition",
                "bsIE": 10,
                "bsFirefox": 16,
                "bsChrome": 26,
                "bsSafari": 6.1,
                "bsOpera": 12.1
                }, {
                "bsProperty": "transition-delay",
                "bsIE": 10,
                "bsFirefox": 16,
                "bsChrome": 26,
                "bsSafari": 6.1,
                "bsOpera": 12.1
                }, {
                "bsProperty": "transition-duration",
                "bsIE": 10,
                "bsFirefox": 16,
                "bsChrome": 26,
                "bsSafari": 6.1,
                "bsOpera": 12.1
                }, {
                "bsProperty": "transition-property",
                "bsIE": 10,
                "bsFirefox": 16,
                "bsChrome": 26,
                "bsSafari": 6.1,
                "bsOpera": 12.1
                }, {
                "bsProperty": "transition-timing-function",
                "bsIE": 10,
                "bsFirefox": 16,
                "bsChrome": 26,
                "bsSafari": 6.1,
                "bsOpera": 12.1
                }, {
                "bsProperty": "word-break",
                "bsIE": 5.5,
                "bsFirefox": 15,
                "bsChrome": 4,
                "bsSafari": 3.1,
                "bsOpera": 15
                }, {
                "bsProperty": "word-wrap",
                "bsIE": 5.5,
                "bsFirefox": 3.5,
                "bsChrome": 4,
                "bsSafari": 3.1,
                "bsOpera": 10.5
                }, {
                "bsProperty": "writing-mode",
                "bsPreIE": 0,
                "bsNoFirefox": 0,
                "bsNoChrome": 0,
                "bsNoSafari": 0,
                "bsNoOpera": 0
                }
            ];

        this.getStyles = function () {
            return angular.copy(styles);
        }

        this.getProperties = function () {
            var props = [];

            angular.forEach(styles, function (value) {
                props.push(value.bsProperty);
            });

            return props;
        }

        this.getPropertyStats = function (prop) {
            var result;

            angular.forEach(styles, function (value) {
                if (value.bsProperty === prop + '') {
                    result = value;
                    return false;
                }
            });

            return result;
        }
    }
})();
