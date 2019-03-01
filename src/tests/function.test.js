import { after, once } from "../services/functions";
import { add } from "../services/calculations";

//after should only call myFunc after it is called 4 times
describe("after", () => {
  it("should only call myFunc after it is called 4 times", () => {
    const myFunc = jest.fn();
    let myAfter = after(4, myFunc);
    myAfter();
    myAfter();
    myAfter();
    myAfter();
    expect(myFunc.mock.calls.length).toBe(1);
  });
});

describe("before", () => {
  it("before should only call myFunc 4 times at most", () => {
    const myFunc = jest.fn();
    let myBefore = before(4, myFunc);
    myBefore();
    myBefore();
    myBefore();
    myBefore();
    myBefore();
    expect(myFunc.mock.calls.length).toBe(4);
  });
});
//export function before(times, theFunc) {
//let counter = 0;
//const theBefore = () => {
//counter += 1;
//if (counter <= times) {
//theFunc();
//}
//};
//return theBefore;
//}

//before should only call myFunc 4 times at most

//once should only call add once
//create a test that uses once on add

describe("once", () => {
  it("should only call add once", () => {
    const myFunc = jest.fn();
    let myOnce = once(() => add(4, 5));
    myOnce();
    myOnce();
    myOnce();
    myOnce();
    expect(myFunc.mock.calls.length).toBe(4);
  });
});
//call the returned function with 4 and 5 to result in 9
//all subsequent calls should result in 9 no matter what arguments are provided
