import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import DoneIcon from '@material-ui/icons/Done';
import clsx from 'clsx';
import { StepIconProps } from '@material-ui/core/StepIcon';
import Typography from '../../Typography';
import { IOrderStatus, IUpdate } from '../../types';

const useColorlibStepIconStyles = makeStyles({
  root: {
    background: '#F7F8FB',
    zIndex: 1,
    color: '#fff',
    width: 30,
    height: 30,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    background: '#6D5CFF',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    background: '#E5E2FF',
  },
  upcoming: {
    background: '#E5E2FF',
  },
});
const getIcon = (props: StepIconProps) => {
  const { active, completed } = props;
  if (active && !completed) {
    return <DoneIcon />;
  }
  if (!active && completed) {
    return <DoneIcon style={{ color: '#6D5CFF' }} />;
  }
  return <FiberManualRecordIcon style={{ color: '#6D5CFF' }} />;
};

function ColorlibStepIcon(props: StepIconProps) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;
  const upcoming = !active && !completed;
  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
        [classes.upcoming]: upcoming,
      })}
    >
      {getIcon(props)}
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    stepperLable: {
      fontWeight: 700,
    },
  })
);

interface IOrderRenderStatus {
  major: string;
  minor: string;
}

function renderOrderStatus(status: IOrderStatus): IOrderRenderStatus | null {
  if (status === 'RECEIVED') {
    return {
      major: 'Order Received',
      minor: 'Your order has been received',
    };
  }
  if (status === 'PREPARING') {
    return {
      major: 'Order Preparation',
      minor: 'Your order is being prepared',
    };
  }
  if (status === 'READY') {
    return {
      major: 'Ready to pickup',
      minor: 'Your order is ready for pickup',
    };
  }
  if (status === 'SCHEDULED') {
    return {
      major: 'Order Scheduled',
      minor: 'Your order is scheduled',
    };
  }
  if (status === 'CANCELLED') {
    return {
      major: 'Order Cancelled',
      minor: 'Your order was cancelled',
    };
  }
  if (status === 'COMPLETED_PR') {
    return {
      major: 'Order Completed With Changes',
      minor: 'Your order was completed with a partial refund',
    };
  }
  if (status === 'COMPLETED') {
    return {
      major: 'Order Completed',
      minor: 'Your order was completed',
    };
  }
  console.error(`Unknown status type ${status}`);
  return null;
}

interface IProps {
  updates: Array<IUpdate>;
  activeStatus: IOrderStatus;
}

export default function StatusStepper(props: IProps) {
  const classes = useStyles();
  const activeStep = props.updates.findIndex(
    (update) => update.newStatus === props.activeStatus
  );
  const steps = props.updates
    .filter(
      (update, index) => update.type === 'STATUS_CHANGE' && index <= activeStep
    )
    .map((update, index) => renderOrderStatus(update.newStatus));

  return (
    <div className={classes.root}>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        style={{
          backgroundColor: '#F7F8FB',
          padding: '20px 0px 0px 0px',
        }}
      >
        {steps.map(
          (label, index) =>
            label && (
              <Step key={label.major}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  <Typography
                    roboto
                    variant="body1"
                    className={classes.stepperLable}
                  >
                    {label.major}
                  </Typography>
                </StepLabel>
                <Typography
                  roboto
                  variant="caption"
                  style={{ marginLeft: '40px', display: 'flex' }}
                >
                  {label.minor}
                </Typography>
              </Step>
            )
        )}
      </Stepper>
    </div>
  );
}
