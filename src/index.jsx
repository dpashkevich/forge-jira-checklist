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

const TaskList = ({tasks, onCheck, onDelete}) => {
  if (!tasks.length) {
    return null;
  }

  return (
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
           onCheck={(isChecked) => onCheck(index, isChecked)}
           onDelete={() => onDelete(index)}
          />
       ))}
    </Table>
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

  const createTask = (text) => {
    text = text.trim();

    if (!text) {
      return;
    }

    updateTasks([
      ...tasks,
      {text}
    ]);
  }


  return (
    <Fragment>
      <Form onSubmit={(formData) => createTask(formData.newTask)}>
        <TextField isRequired name="newTask" placeholder="Enter new task" />
      </Form>

      <TaskList
        tasks={tasks}
        onCheck={checkTask}
        onDelete={deleteTask}
      />
    </Fragment>
  );
};

export const run = render(
  <IssuePanel>
    <App />
  </IssuePanel>
);
