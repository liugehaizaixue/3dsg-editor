// const target = { data: { id: "1" } };
// const init = { id: "", name: "" };

// // 使用 Object.assign() 将 init 对象的属性复制到 target.data
// target.data = Object.assign(init ,target.data);

// console.log(target.data);

const target = { data: { id: "1" } };
const init = { id: "", name: "" };

// 使用对象解构赋值将 init 对象的属性合并到 target.data
target.data = {  ...init , ...target.data,};

console.log(target.data);
