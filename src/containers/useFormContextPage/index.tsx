import React from "react";
import { Container } from "react-bootstrap";
import { useForm, FormProvider } from "react-hook-form";
import NestedFormComponent from "../../components/NestedFormComponent";

export default function UseFormContextPage() {
  const methods = useForm();

  return (
    <Container className="d-flex align-items-center justify-content-center">
      <div className="border p-3 w-100 h-100 m-3 rounded">
        <h1>UseFormContext Hook</h1>
        <p>
          This custom hook allows you to access the form context. useFormContext
          is intended to be used in deeply nested structures, where it would
          become inconvenient to pass the context as a prop.
        </p>
        <h4>1. Nested Form</h4>
        <FormProvider {...methods}>
          <NestedFormComponent />
        </FormProvider>
      </div>
    </Container>
  );
}
