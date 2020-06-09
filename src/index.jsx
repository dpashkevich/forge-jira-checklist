import ForgeUI, {
  render,
  Fragment,
  IssuePanel
} from '@forge/ui';

import { useIssueProperty } from '@forge/ui-jira';
import shortid from 'shortid'

import {TaskList, NewTaskForm} from './components';



const ISSUE_PROPERTY_PREFIX = 'jira-checklist-';

const App = () => {
  const [tasks, updateTasks] = useIssueProperty(ISSUE_PROPERTY_PREFIX + 'tasks', []);

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
    text = text.trim();

    if (!text) {
      return;
    }

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
