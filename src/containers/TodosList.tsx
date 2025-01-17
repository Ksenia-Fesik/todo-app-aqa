import { useMemo } from "react"
import { Droppable } from "react-beautiful-dnd"

import { TodoItem } from "../components/TodoItem"
import { ITodo } from "../types"

const TodosList = ({
  items,
  children,
  onRemove,
  onComplete,
  onClearCompleted,
}: IProps) => {
  const itemsLeft = useMemo(
    () => items.filter((item) => !item.completed).length,
    [items]
  )
  const handleClearCompleted = () => {
    onClearCompleted()
  }

  return (
    <div className="todos-list">
      <Droppable droppableId="todos">
        {({ droppableProps, innerRef, placeholder }) => (
          <div className="todos-list__items" ref={innerRef} {...droppableProps}>
            {items?.map((item, index) => (
              <TodoItem
                key={item.id}
                item={item}
                index={index}
                onRemove={onRemove}
                onComplete={onComplete}
              />
            ))}
            {placeholder}
          </div>
        )}
      </Droppable>
      <div className="todos-list-footer todo-item">
        <span className="items-left" data-testid="items-left">{`${itemsLeft} items left`}</span>
        {children}
        <span
          className="clear-button"
          role="button"
          onClick={handleClearCompleted}
          data-testid="clear-completed"
        >
          Clear completed
        </span>
      </div>
    </div>
  )
}

type IProps = {
  items: ITodo[]
  children?: JSX.Element
  onRemove: (id: string) => void
  onComplete: (id: string) => void
  onClearCompleted: () => void
}
export { TodosList }
