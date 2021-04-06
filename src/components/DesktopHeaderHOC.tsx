import React from 'react';
import Grid from '@material-ui/core/Grid';
import BottomNavigationBar from './BottomNavigationBar';
import { theme } from '../theme';
import { isDesktop } from '../utils';
import DesktopHeader from '../features/event/DesktopHeader';

export default function DesktopHeaderHOC<T>(Component: React.ComponentType<T>) {
  return (props: T) => (
    <>
      {!isDesktop() ? (
        <Component {...props} />
      ) : (
        <div style={{ position: 'relative', paddingTop: '87px' }}>
          <DesktopHeader />
          <Component {...props} />
        </div>
      )}
    </>
  );
}
