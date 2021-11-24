query getUser($username:String!) {
  user(username:$username) {
    _id
    username
    email
    habits {
    	_id
      name
      tracktionDays
      createdAt
    }
    sharedHabits {
      _id
      name
      tracktionDays
      createdAt
    }
    goals {
      _id
      name
      goalSteps {
        _id
        name
        completed
      }
      goalEndDate
      createdAt
    }
  }
}

Query Variables:
{
  "username": "mhermes"
}

HTTP Headers:
{
  "Authorization":"{token}"
}

mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}

Query Variables:
{
  "username": "mhermes",
  "email": "michael@test.com",
  "password": "password13"
}

mutation addHabit($name: String!) {
  addHabit(name: $name) {
    _id
    name
    tracktionDays
    createdAt
	}
}

Query Variables:
{
  "name": "Habit #1"
}

HTTP Headers:
{
  "Authorization":"{token}"
}

mutation updateHabit($id: ID!, $input: UpdateHabitInput) {
  updateHabit(habitId: $id, newHabitData: $input) {
    _id
    name
    tracktionDays
    createdAt
	}
}

Query Variables:
{
  "id": "619d1cd04223406e441ee508",
  "input": {
    "index": 7,
    "value": true
  }
}

HTTP Headers:
{
  "Authorization":"{token}"
}

mutation addGoal($name: String!, $steps: [String]!, $endDate: Date) {
  addGoal(name:$name, goalSteps:$steps, goalEndDate:$endDate) {
    _id
    name
    goalSteps {
      _id
      name
      completed
    }
    goalEndDate
    createdAt
  }
}

Query Variables:
{
  "name": "Goal #1",
  "steps": ["Step #1", "Step #2"],
  "endDate": "12/31/2021"
}

HTTP Headers:
{
  "Authorization":"{token}"
}

mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
      email
    }
  }
}

Query Variables:
{
  "email": "michael@test.com",
  "password": "password13"
}