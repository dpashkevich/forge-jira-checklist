import ForgeUI, {
  render,
  Fragment,
  IssuePanel,
  useState
} from '@forge/ui';

import {TaskList, NewTaskForm} from './components';

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
      <NewTaskForm onCreate={(value) => createTask(value)} />

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
