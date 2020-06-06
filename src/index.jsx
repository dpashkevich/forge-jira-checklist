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

const Task = ({text, isDone}) => (
  <Row>
    <Cell>
      <Button text="☐" />
    </Cell>
    <Cell>
      <Text>{text}</Text>
    </Cell>
    <Cell>
      <Button text="✖" />
    </Cell>
  </Row>
)


const App = () => {
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
        {[
          'Get milk',
          'Write an app',
          'Win CodeGeist 2020',
          'Buy a private jet and retire on the Bahamas'
         ].map((text) => (
           <Task text={text} />
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
