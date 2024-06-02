let students = ["Omer", "Jane", "Biden", "Jill"];

function findJ() {
    return students.find((student)=> student.includes("J"))
}
console.log(findJ());
function someJ() {
    return students.some((student)=> student.includes("J"))
}
console.log(someJ());
function everyJ() {
    return students.every((student)=> student.includes("J"))
}
console.log(everyJ());