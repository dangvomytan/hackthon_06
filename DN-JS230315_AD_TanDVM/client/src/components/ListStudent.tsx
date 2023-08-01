import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";

interface Student {
  id: number;
  name: string;
  age: number;
  avatar: string;
  class: string;
}

const ListStudent = () => {
  const [dataStudent, setDataStudent] = useState<Student[]>([]);
  const handleGetData = () => {
    axios.get(`http://localhost:4000/apis/v1/students`).then((res) => {
      // console.log(res.data.data);
      setDataStudent(res.data.data);
    });
  };

  useEffect(() => {
    handleGetData();
  }, []);

  //   console.log(dataStudent,3333);

  const handleDeleteStudent = (id: number): void => {
    console.log(id);
    axios.delete(`http://localhost:4000/apis/v1/students/delete/${id}`).then(() => {
        handleGetData(); 
    });

  };

  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Class</th>
            <th>Avatar</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dataStudent.length > 0 &&
            dataStudent?.map((student, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.class}</td>
                    <td>
                      <img src={student.avatar} />
                    </td>
                    <td>
                      <Button
                        variant="dark"
                        onClick={() => handleDeleteStudent(student.id)}
                      >
                        X
                      </Button>
                    </td>
                    <td>
                      <Button variant="warning">Update</Button>
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default ListStudent;
