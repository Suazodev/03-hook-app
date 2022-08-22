import { useTodos } from '../hooks';
import { AddTodoForm } from './AddTodoForm';
import { TodoList } from './TodoList';

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    todosPending,
    onNewTodo,
    onDeleteTodo,
    onToggleTodo,
  } = useTodos();

  return (
    <>
      <h1>
        Todos: {todosCount}, <small>Pendings: {todosPending}</small>
      </h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <TodoList
            todos={todos}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        </div>
        <div className='col-5'>
          <h4>Add todo</h4>
          <hr />
          <AddTodoForm onNewTodo={onNewTodo} />
        </div>
      </div>
    </>
  );
};
