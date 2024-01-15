// //yc 1:Dùng các promise khác nếu 1 prm thất bại vẫn log ra lỗi của prm đó
// const promise1 = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         reject("PROMISE 1! ERROR!");
//     }, 2000);
// });

// const promise2 = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         resolve("PROMISE2 FINISHED!");
//     }, 3000);
// });

// const promise3 = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         resolve("PROMISE3 FINISHED!");
//     }, 4000);
// });

// Promise.all([promise1, promise2, promise3])
//     .then((results) => {
//         console.log("ALL PROMISE IS FINISHED!");
//     })
//     .catch((error) => {
//         console.log("FAILED PROMISE", error);
//     });

//yc 2 : chạy tất cả các prm dù hoàn thành hay thất bại và log ra tb thành công
const promise1 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("Hoàn thành promise 1");
    }, 2000);
});

const promise2 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("Hoàn thành promise 2");
    }, 3000);
});

const promise3 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("Hoàn thành promise 3");
    }, 4000);
});

Promise.allSettled([promise1, promise2, promise3]).then((results) => {
    console.log("Tất cả promise đã hoàn thành");
    results.forEach(result=> {
        if (result.status === "fulfilled"){
          console.log("Promise hoàn thành:" , result.value);
        }else{
          console.log("Promise thất bại:", result.reason);
        }
  });
});