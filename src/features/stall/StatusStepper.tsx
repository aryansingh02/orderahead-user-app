import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import DoneIcon from '@material-ui/icons/Done';
import clsx from 'clsx';
import { StepIconProps } from '@material-ui/core/StepIcon';
import Typography from '../../Typography';

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
function getSteps() {
  return [
    'Order Scheduled',
    'Order Received',
    'Preparing Order',
    'Order Completed',
    'Order Cancelled',
  ];
}
function getStepContent(step: number) {
  switch (step) {
    case 0:
      return 'Your order is scheduled';
    case 1:
      return 'Your order has been received';
    case 2:
      return 'Your order is prepared';
    case 3:
      return 'Your order was completed with a partial refund';
    case 4:
      return 'Your order was cancelled';
    default:
      return 'Unknown step';
  }
}

const statusToIndexObject = {
  SCHEDULED: 0,
  RECEIVED: 1,
  PREPARING: 2,
  COMPLETED_PR: 3,
  CANCELLED: 4,
};

export default function StatusStepper() {
  const classes = useStyles();
  // TODO: ActiveStep will be set from API response.
  const [activeStep, setActiveStep] = React.useState(
    statusToIndexObject.PREPARING
  );
  const steps = getSteps();

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
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>
              <Typography
                roboto
                variant="body1"
                className={classes.stepperLable}
              >
                {label}
              </Typography>
            </StepLabel>
            <Typography
              roboto
              variant="caption"
              style={{ marginLeft: '40px', display: 'flex' }}
            >
              {getStepContent(index)}
            </Typography>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
