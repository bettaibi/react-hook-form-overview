import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function UnregisterApiExample() {
  const {
    register,
    handleSubmit,
    watch,
    unregister,
    reset,
    setFocus,
    setValue,
    getValues,
    trigger,
  } = useForm({
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
    setFocus("firstName");
  }, [isTermsAndConditionsActive, setFocus]);

  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)}>
      {isTermsAndConditionsActive && (
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>First name</Form.Label>
          <Form.Control
            {...register("firstName", {
              minLength: {
                value: 10,
                message: "Should be greater to 10",
              },
              required: true,
            })}
            type="text"
          />
        </Form.Group>
      )}

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Check
          {...register("termsAndConditions")}
          label="terms and conditions"
        />
      </Form.Group>

      <Button type="submit">Submit</Button>
      <Button type="button" className="mx-3" onClick={() => reset()}>
        Reset
      </Button>
      <Button
        type="button"
        onClick={() => setValue("firstName", "new", { shouldValidate: true })}
      >
        setValue
      </Button>
      <Button
        type="button"
        className="mx-3"
        onClick={async () => {
          console.log("trigger validation: ", await trigger());
        }}
      >
        Trigger Validation
      </Button>
    </Form>
  );
}
