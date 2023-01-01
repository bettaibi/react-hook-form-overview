import React from "react";
import { Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import WatchNestedComponent from "../../components/WatchNestedComponent";

let counter = 0;
export default function UseWatchPage() {
  const { register, control } = useForm();

  counter += 1;
  console.log("render counter: ", counter);

  return (
    <Container className="d-flex align-items-center justify-content-center">
      <div className="border p-3 w-100 h-100 m-3 rounded">
        <h1>useWatchForm Hook</h1>
        <p>
          Behaves similarly to the watch API, however, this will isolate
          re-rendering at the custom hook level and potentially result in better
          performance for your application.
        </p>
        <h4>1. Example</h4>

        <Form>
          <Form.Group>
            <Form.Label>First name</Form.Label>
            <Form.Control {...register("firstname")} />
          </Form.Group>
          <br />
          <WatchNestedComponent control={control} />
        </Form>
      </div>
    </Container>
  );
}
