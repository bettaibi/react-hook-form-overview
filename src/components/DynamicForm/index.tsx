import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { useFormContext, useFieldArray } from "react-hook-form";

export default function DynamicForm() {
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
    rules: {
      required: "Please provide at least one item",
    },
  });

  const onAppendHandler = () => {
    append({ name: "item1", quantity: 2, price: 2250 });
  };

  return (
    <div>
      <div className="d-felx align-items-center justify-content-between py-2 mt-3">
        <h2>Items</h2>
      </div>
      {!fields.length && (
        <div className="d-flex flex-column align-items-center justify-content-between p-3">
          <p className="text-secondary"> {"No items found,"}</p>
          <Button variant="primary" onClick={onAppendHandler}>
            Add item
          </Button>
        </div>
      )}
      {fields.map((field, index) => (
        <Row key={field.id}>
          <Col>
            <Form.Group>
              <Form.Label>name</Form.Label>
              <Form.Control
                type="text"
                placeholder="please enter a product name"
                {...register(`items.${index}.name`)}
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="please enter the price"
                {...register(`items.${index}.price`, {
                  valueAsNumber: true,
                })}
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group>
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="please enter the desired Quantity"
                {...register(`items.${index}.quantity`, {
                  valueAsNumber: true,
                })}
              />
            </Form.Group>
          </Col>
          <Col sm={3} xs={3} style={{ alignSelf: "end" }}>
            <Button
              variant="secondary"
              onClick={onAppendHandler}
              className="mx-2"
            >
              Append
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                remove(index);
              }}
            >
              Remove
            </Button>
          </Col>
        </Row>
      ))}
    </div>
  );
}
