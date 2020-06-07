import ForgeUI, {
  Form,
  TextField,
  useState
} from '@forge/ui';

export const NewTaskForm = ({onCreate}) => {
  const [defaultValue, setDefaultValue] = useState('');

  const clearInput = () => {
    // Hack to clear the text field by changing its defaultValue.
    // Always setting it to '' won't work more than once because it won't trigger a state change,
    // So we're flipping between '' and '\r' (carriage return, non-printable character)
    setDefaultValue(defaultValue === '' ? '\r' : '');
  }

  const onSubmit = async (formData) => {
    await onCreate(formData.newTask);
    clearInput();
  }


  return (
    <Form onSubmit={onSubmit}>
      <TextField isRequired name="newTask" placeholder="Enter new task" defaultValue={defaultValue} />
    </Form>
  )
}