import React, { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";

type TodoInsertProps = {
  onInsert: (text: string) => void;
};

function TodoInsert({ onInsert }: TodoInsertProps) {
  const [value, setValue] = useState("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value.length) {
      onInsert(value);
      setValue("");
    }
  };

  return (
    <TodoForm onSubmit={onSubmit}>
      <TodoInput
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
      />
      <CreateButton type="submit">추가하기</CreateButton>
    </TodoForm>
  );
}

const TodoForm = styled.form`
  padding: 20px;
`;

const TodoInput = styled.input`
  border: none;
  margin-right: 5px;
  padding: 5px;
  border-bottom: 1px solid #dbdbdb;
  outline: none;

  &::placeholder {
    font-size: 14px;
  }
`;

const CreateButton = styled.button`
  padding: 5px;
  border-color: #3488e9;
  border-radius: 4px;
  background-color: #3488e9;
  color: #fff;
  font-size: 14px;
`;

export default TodoInsert;
