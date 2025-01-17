import { Draggable } from "react-beautiful-dnd"

import { ITodo } from "./../types"
import { RadioButton } from "./RadioButton"

// @ts-ignore
import iconCross from "./../assets/images/icon-cross.svg"

const TodoItem = ({
  item: { text, id, completed },
  index,
  onRemove,
  onComplete,
}: IProps) => {
  const handleRemove = () => {
    onRemove(id)
  }

  const handleComplete = () => {
    onComplete(id)
  }

  return (
    <Draggable key={id} draggableId={id} index={index}>
      {({ draggableProps, dragHandleProps, innerRef }) => (
        <div
          className="todo-item"
          data-testid="todo-item"
          ref={innerRef}
          role="button"
          onClick={handleComplete}
          {...draggableProps}
          {...dragHandleProps}
        >
          <div className="todo-radio">
            <RadioButton checked={completed} />
          </div>

          <span className={`todo-text ${completed ? "is-completed" : ""}`} data-testid={`todo-text${completed ? "-completed" : ""}`}>
            {text}
          </span>
          <span className="remove-icon" data-testid="todo-item-remove" role="button" onClick={handleRemove}>
            <img src={iconCross} />
          </span>
        </div>
      )}
    </Draggable>
  )
}

type IProps = {
  item: ITodo
  index: number
  onRemove: (id: string) => void
  onComplete: (id: string) => void
}

export { TodoItem }
