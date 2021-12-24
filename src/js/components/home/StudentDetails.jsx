"use strict"
var React=require('react')
var reactclass=require('create-react-class')
var studentapi=require('../../../API/StudentDetailsAPI')

var students= reactclass(
    
    {
    render:function() {

    var createStudentRow= function(student) {
        return(
            <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
            </tr>
        )
    };

    return(
        <div>
            <h2>STUDENTS</h2>
          <table className="table table-hover">
            <thead>
            <tr>    
            <th>ID</th>
            <th>STUDENT Name</th>
            </tr>
            </thead>
            <tbody>
            {this.state.StudentDetails.map(createStudentRow,this)}
            </tbody>
          </table>
        </div>
        
    )
    }
}) 

module.exports=students    