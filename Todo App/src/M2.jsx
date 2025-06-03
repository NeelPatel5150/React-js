import React from "react";

const M2 = () => {
  let students = [
    { id: "001", name: "A1", Branch: "CSE" },
    { id: "002", name: "A2", Branch: "CE" },
    { id: "003", name: "A3", Branch: "CSE" },
    { id: "004", name: "A4", Branch: "CSE" },
    { id: "005", name: "A5", Branch: "IT" },
  ];
  return (
    <div>
      {students.filter((student) =>
        (student.Branch === "CSE").map((student) => {
          return <h3>{student.name}</h3>;
        })
      )}
    </div>
  );
};

export default M2;
