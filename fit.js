/**
 * @param {{width: number, height: number}} rect The rect to scale
 * @param {{width: number, height: number}} bounds The bounds to fit within
 * @returns {{width: number, height: number}} The new rect
 */

module.exports = function(rect, bounds) {
    var rectRatio = rect.width / rect.height;
    var boundsRatio = bounds.width / bounds.height;

    var newRect = {};

    if (rectRatio > boundsRatio) {

        // Rect is more landscape than bounds - fit to width
        newRect.width = bounds.width;
        newRect.height = rect.height * (bounds.width / rect.width);

    } else {

        // Rect is more portrait than bounds - fit to height
        newRect.width = rect.width * (bounds.height / rect.height);
        newRect.height = bounds.height;

    }

    return newRect;
};