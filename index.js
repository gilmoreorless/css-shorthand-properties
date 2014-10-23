/*!
 * https://github.com/gilmoreorless/css-shorthand-properties
 * MIT Licensed: http://gilmoreorless.mit-license.org/
 */
(function (exports) {
    /**
     * Data collated from MDN pages: https://developer.mozilla.org/en-US/docs/Web/CSS
     * @type {Object}
     */
    var props = exports.shorthandProperties = {
        'animation':       ['-name', '-duration', '-timing-function', '-delay', '-direction', '-iteration-count', '-fill-mode', '-play-state'],
        'transition':      ['-property', '-duration', '-timing-function', '-delay'],
        'background':      ['-image', '-position', '-size', '-repeat', '-origin', '-attachment', '-style', '-clip', '-color'],
        'border':          ['-width', '-style', '-color'],
        'border-color':    ['border-top-color', 'border-right-color', 'border-bottom-color', 'border-left-color'],
        'border-style':    ['border-top-style', 'border-right-style', 'border-bottom-style', 'border-left-style'],
        'border-width':    ['border-top-width', 'border-right-width', 'border-bottom-width', 'border-left-width'],
        'border-top':      ['-width', '-style', '-color'],
        'border-right':    ['-width', '-style', '-color'],
        'border-bottom':   ['-width', '-style', '-color'],
        'border-left':     ['-width', '-style', '-color'],
        'border-image':    ['-source', '-slice', '-width', '-outset', '-repeat'],
        'border-radius':   ['border-top-left-radius', 'border-top-right-radius', 'border-bottom-right-radius', 'border-bottom-left-radius'],
        'columns':         ['column-width', 'column-count'],
        'column-rule':     ['-width', '-style', '-color'],
        'flex':            ['-grow', '-shrink', '-basis'],
        'font':            ['-style', '-variant', '-weight', '-stretch', '-size', 'line-height', '-family'],
        'font-variant':    ['-ligatures', '-alternates', '-caps', '-numeric', '-east-asian'],
        'list-style':      ['-type', '-position', '-image'],
        'margin':          ['-top', '-right', '-bottom', '-left'],
        'padding':         ['-top', '-right', '-bottom', '-left'],
        'outline':         ['-width', '-style', '-color'],
        'text-decoration': ['-line', '-style', '-color']
    };

    /**
     * Expand a shorthand property into an array of longhand properties
     * @param  {string} property CSS property name
     * @param  {boolean} recurse Expand sub-properties, when applicable - default false
     * @return {array}           List of longhand properties, or the original property if it's not a shorthand
     */
    exports.expand = function (property, recurse) {
        if (!props.hasOwnProperty(property)) {
            return [property];
        }
        return props[property].map(function (p) {
            var longhand = p.substr(0, 1) === '-' ? property + p : p;
            return recurse ? exports.expand(longhand, recurse) : longhand;
        });
    };
})((function (root) {
    // CommonJS
    if (typeof module !== 'undefined' && module.exports !== undefined) return module.exports;
    // Global `cssShorthandProps`
    return (root.cssShorthandProps = {});
})(this));
