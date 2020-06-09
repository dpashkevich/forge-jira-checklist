import ForgeUI, {
  render,
  Fragment,
  IssuePanel
} from '@forge/ui';

import { useIssueProperty } from '@forge/ui-jira';

import {TaskList, NewTaskForm} from './components';

const ISSUE_PROPERTY_PREFIX = 'jira-checklist-';

const App = () => {
  const [tasks, updateTasks] = useIssueProperty(ISSUE_PROPERTY_PREFIX + 'tasks', []);

  const checkTask = async (index, isChecked) => {
    await updateTasks(tasks.map((task, i) => {
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

  const deleteTask = async (index) => {
    await updateTasks(tasks.filter((_, i) => i !== index));
  };

  const createTask = async (text) => {
    text = text.trim();

    if (!text) {
      return;
    }

    await updateTasks([
      ...tasks,
      {text}
    ]);
  }

  return (
    <Fragment>
      <NewTaskForm onCreate={async (value) => await createTask(value)} />

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
