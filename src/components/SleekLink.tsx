import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  children: JSX.Element | JSX.Element[];
  to: string;
}

/**
 * Wrapper component on top of React Router Link removing all the styling.
 * @param props
 * @constructor
 */
export default function SleekLink(props: IProps) {
  return (
    <Link to={props.to} style={{ textDecoration: 'none', color: 'inherit' }}>
      {props.children}
    </Link>
  );
}
