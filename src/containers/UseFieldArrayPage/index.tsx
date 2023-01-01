import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm, FormProvider } from "react-hook-form";
import DynamicForm from "../../components/DynamicForm";

type LoadFormPayload = {
  loadName: string;
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
};

let counter = 0;
export default function UseFieldArrayPage() {
  const methods = useForm<LoadFormPayload>({
    defaultValues: {
      loadName: "",
      items: [],
    },
  });

  const onSubmitHandler = (values: any) => {
    console.log(values);
  };

  counter += 1;
  console.log("render count: " + counter);

  return (
    <Container className="d-flex align-items-center justify-content-center">
      <div className="border p-3 w-100 h-100 m-3 rounded">
        <h1>UseFieldArray Hook</h1>
        <p>
          Custom hook for working with Field Arrays (dynamic form). The
          motivation is to provide better user experience and performance
        </p>
        <h4>1. Example:</h4>
        <FormProvider {...methods}>
          <Form onSubmit={methods.handleSubmit(onSubmitHandler)}>
            <Form.Group>
              <Form.Label>Load Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Load Name"
                {...methods.register("loadName", { required: true })}
              />
            </Form.Group>

            <DynamicForm />

            <br />
            <Button type="submit">Submit</Button>
          </Form>
        </FormProvider>
      </div>
    </Container>
  );
}
