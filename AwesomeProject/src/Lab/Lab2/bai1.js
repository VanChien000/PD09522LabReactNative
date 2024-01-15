// const number = [5, 1, 2, 3, 4];
// number.sort(function(a, b){
//     return a - b;
// });

// console.log(number);


const class1 = [
    {
        mssv: "PS000",
        name: "Nguyen Van A",
        avgPoint: 8.9,
        avgTrainingPoint: 7,
        status: "pass",
    },
    {
        mssv: "PS001",
        name: "Nguyen Van B",
        avgPoint: 8.9,
        avgTrainingPoint: 10,
        status: "pass", 
    },   
];

const class2 = [
    {
        mssv: "PS002",
        name: "Nguyen Van C",
        avgPoint: 4.9,
        avgTrainingPoint: 10,
        status: "failed",
    },
    {
        mssv: "PS003",
        name: "Nguyen Van D",
        avgPoint: 10,
        avgTrainingPoint: 10,
        status: "pass", 
    }, 
    {
        mssv: "PS004",
        name: "Nguyen Van E",
        avgPoint: 10,
        avgTrainingPoint: 2,
        status: "pass", 
    },   
];
// sắp xếp danh sách sinh viên theo avgpoint từ cao đến thấp
const sortedByAvgPoint = [...class1, ...class2].sort((a, b) => b.avgPoint - a.avgPoint);
console.log("Danh sách sinh viên theo avgPoint từ cao xuống thấp:");
console.log(sortedByAvgPoint);

// sắp xếp danh sách sv theo avgTrainningPoint từ cao xuống thấp
const sortedByAvgTraingPoint  = [...class1, ...class2].sort((a, b) => b.avgTraingPoint - a.avgTraingPoint);
console.log("Danh sách sinh viên theo avgTraingPoint từ cao xuống thấp:");
console.log(sortedByAvgTraingPoint);

//Tìm sinh viên có avgPoint và avgTraingPoint cao nhất
const allStudents = [...class1, ...class2];
const maxAvgPointStudent = allStudents.reduce((max, student) => (student.avgPoint > max.avgPoint ? student : max));
const maxAvgTraingPointStudent = allStudents.reduce((max, student) => (student.avgTrainingPoint > max.avgTrainingPoint ? student : max));

console.log("Thông tin sinh viên có avgPoint cao nhất:");
console.log(maxAvgPointStudent);

console.log("Thông tin sinh viên có avgTraingPoint cao nhất:");
console.log(maxAvgTraingPointStudent);