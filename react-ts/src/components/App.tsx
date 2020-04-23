import React from 'react';

interface AppProps {
    color?: string;
}

// function App(props: AppProps): JSX.Element {
//     return <h1>{props.color}</h1>;
// }

export default class App extends React.Component<AppProps> {
    render() {
        return <div>Hi</div>;
    }
}
