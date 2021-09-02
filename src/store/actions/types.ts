export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const EDIT_TODO = "EDIT_TODO";

interface Add_Todo {
  type: typeof ADD_TODO;
  payload: {
    id: number;
    text: string;
    done: boolean;
  };
}
interface Toggle_Todo {
  type: typeof TOGGLE_TODO;
  payload: number;
}

interface Remove_Todo {
  type: typeof REMOVE_TODO;
  payload: number;
}

interface Edit_Todo {
  type: typeof EDIT_TODO;
  payload: {
    id: number;
    text: string;
  };
}

export type TodosAction = Add_Todo | Toggle_Todo | Remove_Todo | Edit_Todo;

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type TodosState = Todo[];
