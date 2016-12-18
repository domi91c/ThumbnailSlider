/**
 * Created by domi91c on 2016-12-17.
 */
let stack = ["im1", "im2", "im3", "im4"];

let image = stack.shift();
stack.push(image);
stack.push(image);
stack.push(image);
stack.push(image);
stack.pop();
stack.pop();
stack.pop();
stack.pop();


console.log(stack);
