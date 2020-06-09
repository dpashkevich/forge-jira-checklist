import ForgeUI, {
  Text,
  Table,
  Head,
  Cell
} from '@forge/ui';

import {Task} from './task';

export const TaskList = ({tasks, onUpdate, onDelete}) => {
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
      {tasks.map((task) => (
         <Task
           text={task.text}
           isChecked={task.isChecked}
           onUpdate={(isChecked) => onUpdate(task.id, isChecked)}
           onDelete={() => onDelete(task.id)}
          />
       ))}
    </Table>
  )
}