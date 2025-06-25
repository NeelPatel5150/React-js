// Create React app to pass student name, roll number, t1 marks and t2 marks of
// 2 students to component and read the information and display in table format.
// Use Props.

import React from 'react'

function PB_358(props) {
    return (
        <div>
            {
                props.students.map((student) => {
                    return (
                        <>
                            <table border={1} rules='all' height={50} width={100}>
                                <tr>
                                    <td>{student.name}</td>
                                    <td>{student.rollnumber}</td>
                                    <td>{student.t1}</td>
                                    <td>{student.t2}</td>
                                </tr>
                            </table>
                        </>
                    )
                })
            }
        </div>
    )
}

export default PB_358
