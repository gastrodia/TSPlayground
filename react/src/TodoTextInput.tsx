import * as React from 'react';

interface TodoTextInputProps {
  onSave: Function;
  text?: string;
  placeholder?: string,
  editing?: boolean;
  newTodo?: boolean;
}

// This component's props have to match TodoTextInputProps inferface.
// We can do the same for the component's state. In this example, it is set to any.
class TodoTextInput extends React.Component<TodoTextInputProps, any> {
  render() {
     return <div>Hello</div>;
  }
}