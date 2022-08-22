import { useForm } from '../hooks/useForm';

export const AddTodoForm = ({ onNewTodo }) => {
  const { description, handleInputChange, onResetForm } = useForm({
    description: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (description.length <= 1) return;
    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description,
    };

    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Add todo'
        className='form-control'
        value={description}
        name='description'
        onChange={handleInputChange}
      />

      <button type='submit' className='btn btn-outline-primary mt-1'>
        Add todo
      </button>
    </form>
  );
};
