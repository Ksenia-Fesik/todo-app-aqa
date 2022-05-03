import { useEffect, useState } from "react"

import {
  getTodos,
  addTodo as addTodoService,
  saveTodos as saveTodosService,
} from "../services/storage"
import { ITodo } from "../types"

const useTodos = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  const saveTodos = (todos: ITodo[]) => {
    saveTodosService(todos)
    setTodos(todos)
  }

  const addTodo = (todo: ITodo) => {
    const addedTodos = addTodoService(todo)
    setTodos(addedTodos)
  }

  useEffect(() => {
    setTodos(getTodos())
  }, [])

  return { todos, addTodo, saveTodos }
}

export { useTodos }
