// const age = 18;

// export default age;
// export age;
// export 18;

// export 声明或语句
// export const age = 18;

// const age = 18;
// // export age; ×
// export { age }; // √

function fn() {}
// export fn; // ×

// export function fn() {}

// export function () {} // 匿名不行

class className {}
// export className;

// export class className {}

// export class  {} // 匿名不行

const age = 18;

// export const age = 18;

export { fn as func, className, age };

export default 18;
