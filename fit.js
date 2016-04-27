/**
 * @param {{width: number, height: number}} rect The rect to scale
 * @param {{width: number, height: number}} bounds The bounds to fit within
 * @returns {{width: number, height: number}} The new rect
 */

module.exports = function(rect, bounds) {
    
    // Find smallest acceptable ratio
    var ratio = Math.min(bounds.width / rect.width, bounds.height / rect.height, 1);
    
    // Multiply the height and width with the ratio
    return {
        height: rect.height * ratio,
        width: rect.width * ratio
    };
};
