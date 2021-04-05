import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import DoneIcon from '@material-ui/icons/Done';
import clsx from 'clsx';
import { StepIconProps } from '@material-ui/core/StepIcon';

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#E5E2FF',
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
});

function ColorlibStepIcon(props: StepIconProps) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <DoneIcon style={{ color: '#6D5CFF' }} />,
    2: <DoneIcon />,
    3: <FiberManualRecordIcon style={{ color: '#6D5CFF' }} />,
    4: <FiberManualRecordIcon style={{ color: '#6D5CFF' }} />,
    5: <FiberManualRecordIcon style={{ color: '#6D5CFF' }} />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
  })
);

function getSteps() {
  return [
    'Order Scheduled',
    'Order Received',
    'Preparing Order',
    'Order Completed',
    'Order Collected',
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
      return 'Your order has been collected';
    default:
      return 'Unknown step';
  }
}

export default function OrderStatus() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
            <Typography variant="caption" style={{ marginLeft: '40px' }}>
              {getStepContent(index)}
            </Typography>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
