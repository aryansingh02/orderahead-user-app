import React from 'react';
import Grid from '@material-ui/core/Grid';
import BottomNavigationBar from './BottomNavigationBar';
import { theme } from '../theme';
import { isDesktop } from '../utils';

export default function WithNavigation<T>(Component: React.ComponentType<T>) {
  return (props: T) => (
    <>
      {isDesktop() ? (
        <Component {...props} />
      ) : (
        <div style={{ position: 'relative', marginBottom: '60px' }}>
          <Component {...props} />
          <Grid
            container
            xs={12}
            style={{
              bottom: 0,
              position: 'fixed',
              left: '50%',
              transform: 'translate(-50%, 0)',
            }}
          >
            {/* @ts-ignore */}
            <BottomNavigationBar history={props.history} />
          </Grid>
        </div>
      )}
    </>
  );
}
