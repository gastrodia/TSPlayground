import * as React from 'react'
import * as ReactDOM from 'react-dom'

class HelloMessage extends React.Component<any,any>{
    render() {
        return <div>Hello {this.props.name}</div>;
    }
}


ReactDOM.render(<HelloMessage name="John" />, document.getElementById('app'));
