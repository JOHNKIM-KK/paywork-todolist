import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import {
  toggleTodo,
  removeTodo,
  addTodo,
  editTodo,
} from "../store/actions/todoAction";
import TodoInsert from "../components/TodoInsert";
import TodoList from "../components/TodoList";
import styled from "styled-components";

function TodoApp() {
  const todos = useSelector((state: RootState) => state.todoReducer);
  const dispatch = useDispatch();

  const onInsert = (text: string) => {
    dispatch(addTodo(text));
  };

  const onToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const onRemove = (id: number) => {
    dispatch(removeTodo(id));
  };

  const onEdit = (id: number, text: string) => {
    dispatch(editTodo(id, text));
  };

  return (
    <AppContainer>
      <TodoBox>
        <img src="https://paywork.io/images/logo-dark.png" alt="로고"></img>
        <TodoInsert onInsert={onInsert} />
        <TodoList
          todos={todos}
          onToggle={onToggle}
          onRemove={onRemove}
          onEdit={onEdit}
        />
      </TodoBox>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #dbdbdb;
`;

const TodoBox = styled.div`
  height: 70%;
  padding: 30px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 5px 10px 0 rgb(0 0 0 / 10%);
  text-align: center;
  overflow-y: auto;

  img {
    width: 100px;
  }
`;

export default TodoApp;
