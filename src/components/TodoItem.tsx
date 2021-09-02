import React, {
  ChangeEvent,
  CSSProperties,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { Todo } from "../store/actions/types";
import styled from "styled-components";

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
  onEdit: (id: number, text: string) => void;
};

function TodoItem({ todo, onToggle, onRemove, onEdit }: TodoItemProps) {
  const [isClick, setIsClick] = useState(false);
  const [newText, setNewText] = useState("");
  const newInput = useRef<HTMLInputElement>(null);

  const checkStyle: CSSProperties = {
    color: todo.done ? "green" : "#666",
  };

  const textStyle: CSSProperties = {
    textDecoration: todo.done ? "line-through" : "none",
    color: todo.done ? "#dbdbdb" : "#666",
  };
  const removeStyle: CSSProperties = {
    marginLeft: 8,
    color: "red",
  };

  const handleNewText = (e: ChangeEvent<HTMLInputElement>) => {
    setNewText(e.target.value);
  };

  const handleToggle = () => {
    onToggle(todo.id);
  };

  const handleRemove = () => {
    onRemove(todo.id);
  };

  const handleEdit = () => {
    setIsClick(true);
  };

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (newInput.current === null) return;

      if (
        isClick &&
        (!newInput.current || !newInput.current.contains(e.target as Node))
      ) {
        setIsClick(false);
        if (newText) {
          onEdit(todo.id, newText);
        }
      }
    },
    [isClick, newText, onEdit, todo.id]
  );

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <TodoWrapper>
      <SmallBox>
        <i
          className="far fa-check-square"
          style={checkStyle}
          onClick={handleToggle}
        ></i>
        <div onClick={handleEdit}>
          {isClick ? (
            <input onChange={handleNewText} ref={newInput} />
          ) : (
            <span style={textStyle}>{todo.text}</span>
          )}
        </div>
      </SmallBox>
      <span onClick={handleRemove} style={removeStyle}>
        <i className="fas fa-trash-alt"></i>
      </span>
    </TodoWrapper>
  );
}

const TodoWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
`;

const SmallBox = styled.div`
  display: flex;
  justify-content: space-between;

  i {
    margin-right: 10px;
  }
`;

export default TodoItem;
