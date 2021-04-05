import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    height: 300,
    fontWeight: 600,
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.primary.error,
    borderBottom: '2px solid rgba(0,0,0, 0.2)'
  }
}));

const Error = ({ error }) => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.card}>{error}</div>
    </Container>
  );
};

Error.propTypes = {
  error: PropTypes.string
};

Error.defaultProps = {
  error: ''
};

export default Error;
