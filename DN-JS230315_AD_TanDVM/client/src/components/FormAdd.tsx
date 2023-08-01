import React from "react";
import { Form, Button } from "react-bootstrap";

const FormAdd = () => {
  return (
    <div>
      <Form.Label htmlFor="StudentName">Studen Name</Form.Label>
      <Form.Control type="text" id="StudentName" />
      <Form.Label htmlFor="StudentAge">Studen Age</Form.Label>
      <Form.Control type="text" id="StudentAge" />
      <Form.Label htmlFor="StudentImage">Studen Image</Form.Label>
      <Form.Control type="file" id="StudentAge" />
      <Form.Label htmlFor="StudentClass">Studen Class</Form.Label>
      <Form.Control type="text" id="StudentClass" />
      <br/>
      <Button variant="outline-success">Add</Button>{" "}
    </div>
  );
};

export default FormAdd;
