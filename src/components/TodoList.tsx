import React from "react";
import { Todo } from "../store/actions/types";
import TodoItem from "./TodoItem";
import styled from "styled-components";

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
  onEdit: (id: number, text: string) => void;
};

function TodoList({ todos, onToggle, onRemove, onEdit }: TodoListProps) {
  if (todos.length === 0) return <Notice>등록된 항목이 없습니다.</Notice>;

  return (
    <>
      <Notice>남은 할 일이 {todos.length}개 남았습니다.</Notice>
      <ListContainer>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            onToggle={onToggle}
            onRemove={onRemove}
            onEdit={onEdit}
            key={todo.id}
          />
        ))}
      </ListContainer>
    </>
  );
}

const Notice = styled.p`
  color: #666;
`;

const ListContainer = styled.div`
  list-style: none;
`;

export default TodoList;
