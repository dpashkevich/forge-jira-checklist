import ForgeUI, {
  render,
  Fragment,
  IssuePanel
} from '@forge/ui';

import shortid from 'shortid'

import {TaskList, NewTaskForm} from './components';
import {useTasks} from './hooks/use-tasks'

const App = () => {
  const [tasks, updateTasks] = useTasks();

  const updateTask = async (id, isChecked) => {
    await updateTasks(tasks => tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isChecked: isChecked
        };
      } else {
        return task;
      }
    }));
  };

  const deleteTask = async (id) => {
    await updateTasks(tasks => tasks.filter((task) => task.id !== id));
  };

  const createTask = async (text) => {
    await updateTasks(tasks => [
      ...tasks,
      {
        id: shortid.generate(),
        text
      }
    ]);
  }

  return (
    <Fragment>
      <NewTaskForm onCreate={createTask} />

      <TaskList
        tasks={tasks}
        onUpdate={updateTask}
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
