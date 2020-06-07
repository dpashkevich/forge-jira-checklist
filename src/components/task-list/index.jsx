import ForgeUI, {
  Text,
  Table,
  Head,
  Cell
} from '@forge/ui';

import {Task} from './task';

export const TaskList = ({tasks, onCheck, onDelete}) => {
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