import { ReactNode } from 'react';

type ButtonProps = {
    className?: string,
    children: ReactNode,
    onClick?: any
};

export const AdvanceButton = (props: ButtonProps) => (
    <button
        onClick={props.onClick}
        type="button"
        className={`focus:outline-none transition rounded-full py-1.5 text-base shadow-md-dark-contrast font-circular-medium ${props.className}`}
    >
        {props.children}
    </button>
);