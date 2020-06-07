import ForgeUI, {
  Text,
  Button,
  Row,
  Cell
} from '@forge/ui';

export const Task = ({text, isChecked, onCheck, onDelete}) => {
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