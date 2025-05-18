import * as React from 'react';

interface ButtonProps { 
    children: React.ReactNode;
}

interface ButtonState { 
    count: number;
    clicked: boolean;
}

export default class Button extends React.Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props);
    this.state = {count: 0, clicked: false}
  }

  handleClick = () => { 
    this.setState({count: this.state.count + 1, clicked: true});
  }

  render() {
    return (
        <button onClick={this.handleClick}>
         {this.state.clicked ? `Clicks: ${this.state.count}` : this.props.children}
        </button>
    );
  }
}