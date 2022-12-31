import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function UnregisterApiExample() {
  const { register, handleSubmit, watch, unregister } = useForm({
    defaultValues: {
      firstName: "",
      termsAndConditions: true,
    },
  });

  const isTermsAndConditionsActive = watch("termsAndConditions");

  const onSubmitHandler = (values: any) => {
    console.log(values);
  };

  useEffect(() => {
    if (!isTermsAndConditionsActive) {
      unregister("firstName");
    }
  }, [isTermsAndConditionsActive]);

  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)}>
      {isTermsAndConditionsActive && (
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>First name</Form.Label>
          <Form.Control {...register("firstName")} type="text" />
        </Form.Group>
      )}

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Check
          {...register("termsAndConditions")}
          label="terms and conditions"
        />
      </Form.Group>

      <Button type="submit">Submit</Button>
    </Form>
  );
}
