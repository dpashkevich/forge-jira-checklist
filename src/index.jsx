import ForgeUI, {
    render,
    Fragment,
    Text,
    IssuePanel,
    Form,
    Button,
    ButtonSet,
    CheckboxGroup,
    Checkbox,
    useState,
    Table,
    Head,
    Row,
    Cell,
    TextField
} from '@forge/ui';

const Task = ({text, isChecked, onCheck, onDelete}) => {
  const formatText = (text) => {
    return isChecked ? `~~${text}~~` : text;
  }

  return (
    <Row>
      <Cell>
        <Button text={isChecked ? '✅' : '🔲'} onClick={() => onCheck(!isChecked)} />
      </Cell>
      <Cell>
        <Text>{formatText(text)}</Text>
      </Cell>
      <Cell>
        <Button text="✖" onClick={onDelete} />
      </Cell>
    </Row>
  )
}

const App = () => {
  const initialState = [{
      text: 'Get milk',
      isChecked: true
    }, {
      text: 'Write an app'
    }, {
      text: 'Win CodeGeist 2020'
    }, {
      text: 'Buy a private jet and retire in the Bahamas'
  }];

  const [tasks, updateTasks] = useState(initialState);

  const checkTask = (index, isChecked) => {
    updateTasks(tasks.map((task, i) => {
      if (i === index) {
        return {
          ...task,
          isChecked: isChecked
        };
      } else {
        return task;
      }
    }));
  };

  const deleteTask = (index) => {
    updateTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Fragment>
      <Form>
        <TextField name="newTask" placeholder="Enter new task" />
      </Form>
      <Table>
        <Head>
          <Cell><Text>**Tasks**</Text></Cell>
          <Cell></Cell>
          <Cell></Cell>
        </Head>
        {tasks.map((task, index) => (
           <Task
             text={task.text}
             isChecked={task.isChecked}
             onCheck={(isChecked) => checkTask(index, isChecked)}
             onDelete={() => deleteTask(index)}
            />
         ))}

      </Table>
    </Fragment>
  );
};

export const run = render(
  <IssuePanel>
    <App />
  </IssuePanel>
);
