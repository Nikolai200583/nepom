import { useDispatch } from "react-redux";
import {removeTodo} from "./store/todoSlice";

const TodoItems = ({id, text, complited, toggleTodoComplite}) => {
  const dispatch = useDispatch();
  return (
    <li>
      <input
       type="checkbox"
        checked={complited}
        onChange={() => toggleTodoComplite(id)}/>
      <span>{text}</span>
      <span className='delete' onClick ={() => dispatch(removeTodo({id}))}>
        &times;
        </span>
    </li>
  )
}

export default TodoItems
