import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    height: 300,
    fontWeight: 600,
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.error.dark,
    borderBottom: '2px solid rgba(0,0,0, 0.2)'
  }
}));

type IError = {
  error: string;
};

const Error = ({ error }: IError): JSX.Element => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.card}>{error}</div>
    </Container>
  );
};

export default Error;
