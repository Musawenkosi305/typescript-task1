"use strict";
const employee1 = {
    fullName: ["Johan", "Eramus"],
    age: 55,
    department: 'SA Head of Rugby',
    skills: ['Defense coach', 'Scrum master', 'Lineout specialist'],
    isActive: true,
};
const employee2 = {
    fullName: ["Siya", "Kolisi"],
    age: 33,
    department: 'Player',
    skills: ['Ball carrier', 'Lineout jumper', 'Tackler'],
    isActive: true,
};
function logEmployee(Employee) {
    console.log(`
   Employee: ${Employee.fullName},
   Age: ${Employee.age}, 
   Department: ${Employee.department}, 
   Skills: ${Employee.skills}, 
   Active: ${Employee.isActive ? "Yes" : "No"}`);
}
logEmployee(employee1);
logEmployee(employee2);
