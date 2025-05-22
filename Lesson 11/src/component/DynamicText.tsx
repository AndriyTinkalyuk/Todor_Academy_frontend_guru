import * as React from 'react';

interface DynamicTextState {
    greeting: string
}

export default class DynamicText extends React.Component<{}, DynamicTextState> {
    private timer?: ReturnType<typeof setTimeout>;

    constructor(props: {}) {
        super(props);
        this.state = {
            greeting: "Hello, world!",

        }
    }

    componentDidMount(): void {
        this.timer = setTimeout(() => {
            this.setState({ greeting: "Goodbye, world!" })
        }, 5000)
    }

    componentWillUnmount(): void {
        if (this.timer) {
            clearTimeout(this.timer)
        }
    }

    render() {
        return (
            <div>
                {this.state.greeting}
            </div>
        );
    }
}