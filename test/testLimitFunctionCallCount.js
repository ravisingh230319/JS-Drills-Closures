import { limitFunctionCallCount } from "../limitFunctionCallCount.js"
function cb () { 
    console.log("Invoked"); 
}
let n_Times = limitFunctionCallCount(cb, 2);
n_Times();
n_Times();
n_Times();