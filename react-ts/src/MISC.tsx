/* Ignore this file, just seeing how react works with other things */
import React, { useState, useRef, useReducer } from 'react';

interface AppProps {
    name?: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Test({ handleChange }: AppProps): JSX.Element {
    const [count, setCount] = useState<number | string>(0);
    // const [count, setCount] = useState<{text: string} | string>(text: 'Hello');
    setCount(0);

    // Refs in ReactTS
    const inputRed = useRef<HTMLInputElement>(null);

    return (
        <div>
            <input ref={inputRed} onChange={handleChange}>
                Hi
            </input>
            <h3>{count}</h3>
        </div>
    );
}

/* ============================================================================== */

// Meh, do the other way
type Action = { type: 'add'; text: string } | { type: 'remove'; idx: number };

interface Todo {
    text: string;
    complete: boolean;
}

type State = Todo[];

const TodoReducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'add':
            return [...state, { text: action.text, complete: false }];
        case 'remove':
            return state.filter((_, i) => action.idx !== i);
        default:
            return state;
    }
};

export function RedTest(): JSX.Element {
    const [todos, dispatch] = useReducer(TodoReducer, []);

    return (
        <div>
            <button
                onClick={() => {
                    dispatch({ type: 'add', text: 'added' });
                }}
            >
                Click
            </button>
        </div>
    );
}
