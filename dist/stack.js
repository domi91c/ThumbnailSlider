"use strict";

/**
 * Created by domi91c on 2016-12-17.
 */
var stack = ["im1", "im2", "im3", "im4"];

var image = stack.shift();
stack.push(image);
stack.push(image);
stack.push(image);
stack.push(image);
stack.pop();
stack.pop();
stack.pop();
stack.pop();

console.log(stack);
//# sourceMappingURL=stack.js.map