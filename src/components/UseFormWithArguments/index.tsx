import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

type FormDefaultValues = {
  email: string;
  description: string;
  age: number;
};

const fetchData = new Promise((resolve, reject) => {
  let obj: FormDefaultValues | undefined;
  setTimeout(() => {
    obj = {
      email: "async@gmail.com",
      description: "async description",
      age: 18,
    };
    resolve(obj);
  }, 6000);
});

let counter = 0;
export default function UseFormWithArguments() {
  let [values, setValues] = useState();
  counter += 1;
  useEffect(() => {
    fetchData.then((data: any) => setValues(data));
  }, []);

  const { handleSubmit, register } = useForm<FormDefaultValues>({
    defaultValues: {
      email: "default@email.com",
      description: "default description",
    },
    values,
  });

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
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control {...register("description")} as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="age.ControlInput1">
        <Form.Label>Age</Form.Label>
        <Form.Control
          {...register("age", { valueAsNumber: true })}
          type="number"
        />
      </Form.Group>
      <Button type="submit">submit</Button>
      &nbsp; render count: {counter}
    </Form>
  );
}
