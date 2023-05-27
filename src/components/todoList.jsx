import {useSelector} from 'react-redux';
import TodoItems from './todoItems';

const TodoList = () => {
const todos = useSelector(state => state.todos.todos);

  return (
    <ul>
      {todos.map((todo) => (
      <TodoItems
        key={todo.id}
        {...todo}
        />
      ))}
    </ul>
  )
}

export default TodoList
