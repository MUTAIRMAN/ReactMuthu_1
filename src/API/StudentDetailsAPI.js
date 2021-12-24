"use strict"

var students = require('./StudentDetails').students;
var _ = require('lodash');

var _generateId=function(student){
    return student.id;
}

var _cloneMe = function(item) {
    return JSON.parse(JSON.stringify(item));
}

var studentAPI= {
    getAllStudents:function(){
        return _cloneMe(students);
    },
    getStudentById:function(id){
            var stud=_.find(students,{id:id})
            return _cloneMe(student)

    },
    saveRecipe:function(Student){
        console.log('AJAX Saving')
        if(student.id){
            var existingStudentIndex= _.indexOf(student,_.find(students),splice(existingStudentIndex,1,student))
        }
        else{
            student.id=_generateId(student);
            students.push(_cloneMe(student))
        }
        return student;
    },
    deleteStudent:function(id){
        console.log('AJAX Delete')
        if(Student.id){
            _.remove(students,{id:id})
        }
    }
}

module.exports=studentAPI

 