import React from "react";
import { Button, Form } from "react-bootstrap";
import { useFormContext } from "react-hook-form";

export default function NestedFormComponent() {
  const { handleSubmit, register } = useFormContext();

  const onSubmitHandler = (values: any) => {
    console.log(values);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          {...register("email")}
          type="email"
          placeholder="name@example.com"
        />
      </Form.Group>
      <Button type="submit">submit</Button>
    </Form>
  );
}
