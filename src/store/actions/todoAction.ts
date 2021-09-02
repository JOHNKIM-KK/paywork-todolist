import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, EDIT_TODO } from "./types";

let nextId = 1; // 새로운 항목을 추가 할 때 사용 할 고유 ID 값

// 액션 생성 함수
export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: {
    id: nextId++,
    text,
  },
});
export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id,
});
export const editTodo = (id: number, text: string) => ({
  type: EDIT_TODO,
  payload: {
    id,
    text,
  },
});
