import React, { ChangeEvent, useState } from "react";

const useForm = <t extends object>(initialState: t) => {
  const [form, setForm] = useState(initialState);
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return {
    form,
    ...form,
    handleChange,
  };
};

export default useForm;
