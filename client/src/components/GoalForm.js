import { Form, Input } from 'formsy-react-components';

const GoalForm = (props) => {
  return (
    <Form onSubmit={(data) => { console.log(data) }}>
      <Input
        name="firstname"
        label="What is your first name?"
      />
    </Form>
  )
}

export default GoalForm