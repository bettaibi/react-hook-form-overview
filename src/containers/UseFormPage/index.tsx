import React from "react";
import { Container } from "react-bootstrap";
import UnregisterApiExample from "../../components/UnregisterApiExample";
import UseFormWithArguments from "../../components/UseFormWithArguments";

export default function UseFormPage() {
  return (
    <Container className="d-flex align-items-center justify-content-center">
      <div className="border p-3 w-100 h-100 m-3 rounded">
        <h1>UseForm Hook</h1>
        <p>
          useForm is a custom hook for managing forms with ease. It takes one
          object as optional argument, and and returns an object that exposes
          helper functions.
        </p>
        <h4>1. UseForm optional Arguments</h4>
        <UseFormWithArguments /> <br />
        <h4>2. Unregister Api</h4>
        <UnregisterApiExample />
      </div>
    </Container>
  );
}
