import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
    todos: Todo[];
    fetchTodos(): any;
}

// function App(props: AppProps): JSX.Element {
//     return <h1>{props.color}</h1>;
// }

class _App extends React.Component<AppProps> {
    render() {
        return <div>Hi</div>;
    }
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
    return { todos: state.todos };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
