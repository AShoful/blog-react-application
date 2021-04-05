/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Container,
  IconButton,
  Grid,
  Divider,
  Typography
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: 60
  },
  icons: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  link: {
    textDecoration: 'none'
  }
}));

export default function PostsList({ item, remove }) {
  const { id, title } = item;
  const handleClickDelete = () => {
    remove(id);
  };
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="md" className={classes.root}>
      <Grid container spacing={2} justify="space-between">
        <Grid item xs={12} sm={10}>
          <Typography
            className={classes.link}
            component={Link}
            to={`/post/${id}`}
            variant="subtitle1"
          >
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={2} className={classes.icons}>
          <IconButton component={Link} to={`/post/edit/${id}`}>
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton onClick={handleClickDelete}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Grid>
      </Grid>
      <Divider />
    </Container>
  );
}

PostsList.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string
  }),
  remove: PropTypes.func
};

PostsList.defaultProps = {
  item: {
    id: 0,
    title: 'title'
  },
  remove: () => {}
};
