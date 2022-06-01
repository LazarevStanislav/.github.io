// Release 0
const student = {};
student.firstName = 'Petr';
student.lastName = 'Perviy';
student.firstName = 'Petya';
delete student.firstName;
//console.log(student);
// Release 1
const group = [];
group[0] = student;
group.push({firstName: 'Stas', lastName: 'Tiger'}, {firstName: 'Elbrus', lastName: 'Bootcamp'});
//метод push применил на тот случай если принципиально нужно одной строкой 
console.log(group);
