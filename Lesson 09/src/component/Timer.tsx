import * as React from 'react';

interface TimerProps {
    count: number;
}

export default class Timer extends React.Component<{}, TimerProps> {
 intervalId: ReturnType<typeof setInterval> | null = null;
  constructor(props: {}) {
    super(props);
    this.state = {
        count: 0,
    };
  }

componentDidMount() { 
  this.intervalId = setInterval( () =>  this.setState(prevState => ({
    count: prevState.count + 1
  })),  1000)
  }

  componentWillUnmount() {
    if( this.intervalId) {
    clearTimeout(this.intervalId)
    }
  }

  render() {
    return (
        <div>
          {this.state.count}
        </div>
    );
  }
}