import React from 'react';
import { createStyles, WithStyles } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';
// @ts-ignore
// eslint-disable-next-line import/extensions
import { theme as Theme } from '../MaterialTheme';

const styles = (theme: typeof Theme) =>
  createStyles({
    root: {},
  });

interface IProps extends WithStyles<typeof styles>, RouteComponentProps {}

interface IState {}

class StallView extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    return <div> This is TS demo</div>;
  }
}

export default StallView;
