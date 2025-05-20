import * as React from 'react';

interface LoggerProps {
  someValue: string;
  list: any[]; 
}

interface LoggerState {
  someValue: string;
}

export default class Logger extends React.Component<LoggerProps, LoggerState> {
  private listEnd = React.createRef<HTMLDivElement>();

  constructor(props: LoggerProps) {
    super(props);
    console.log("it's constructor");
    this.state = {
      someValue: props.someValue
    };
  }

  static getDerivedStateFromProps(nextProps: LoggerProps, prevState: LoggerState): LoggerState | null {
    if (nextProps.someValue !== prevState.someValue) {
      console.log("it's getDerivedStateFromProps");
      return {
        someValue: nextProps.someValue
      };
    }
    return null;
  }

  componentDidMount(): void {
    console.log("it's componentDidMount");
  }

  shouldComponentUpdate(nextProps: LoggerProps, nextState: LoggerState): boolean {
    console.log("it's shouldComponentUpdate");
    return nextProps.someValue !== this.props.someValue;
  }

  getSnapshotBeforeUpdate(prevProps: LoggerProps, prevState: LoggerState): number | null {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.list.length < this.props.list.length && this.listEnd.current) {
      return this.listEnd.current.scrollHeight;
    }
    return null;
  }

  componentDidUpdate(prevProps: LoggerProps, prevState: LoggerState, snapshot?: number): void {
    if (snapshot !== null && this.listEnd.current) {
      console.log('componentDidUpdate with snapshot');
    }

    if (prevProps.someValue !== this.props.someValue) {
      console.log("it's componentDidUpdate");
    }
  }

  componentWillUnmount(): void {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <div ref={this.listEnd}>
        <p>Текущее значение: {this.state.someValue}</p>
      </div>
    );
  }
}
