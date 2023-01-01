import React from "react";
import { useWatch } from "react-hook-form";

export default function WatchNestedComponent({ control }: any) {
  const firstName = useWatch({ control, name: "firstname" });

  return <p>Watch firstName value: {firstName}</p>;
}
