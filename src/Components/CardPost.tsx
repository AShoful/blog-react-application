/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import {
  Container,
  Grid,
  Divider,
  Typography,
  TextField,
  IconButton
} from '@material-ui/core';

import SendIcon from '@material-ui/icons/Send';
import { IComment, IPost } from '../types';

const useStyles = makeStyles((theme) => ({
  name: {
    color: theme.palette.primary.main,
    fontSize: 36,
    marginBottom: 0
  },
  text: {
    fontSize: 16,
    padding: 10
  },
  form: {
    paddingBottom: 20
  },
  input: {
    width: '80%'
  }
}));

interface ICardPost {
  post: IPost;
  addComment: (data: IComment) => {};
}

export default function CardPost({ post, addComment }: ICardPost): JSX.Element {
  const [comment, setComment] = useState('');
  const classes = useStyles();
  const { title, body, comments, id } = post;

  const data = {
    body: comment,
    postId: id
  };

  return (
    <Container component="main" maxWidth="md">
      <Grid container>
        <Grid item xs={12} sm={12}>
          <Typography
            className={classes.name}
            gutterBottom
            variant="subtitle1"
            component="h4"
          >
            {title}
          </Typography>
          <Typography
            className={classes.text}
            variant="subtitle2"
            color="textSecondary"
            component="p"
          >
            {body}
          </Typography>
          <Grid container className={classes.form} justify="space-between">
            <TextField
              className={classes.input}
              label="add comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <IconButton
              color="primary"
              disabled={!comment}
              onClick={() => addComment(data)}
            >
              <SendIcon />
            </IconButton>
          </Grid>
          {comments.map((item, i) => (
            <Fragment key={i}>
              <Typography
                className={classes.text}
                variant="subtitle2"
                color="textSecondary"
                component="p"
              >
                {item.body}
              </Typography>
              <Divider />
            </Fragment>
          ))}
        </Grid>
      </Grid>
      <Divider />
    </Container>
  );
}

CardPost.propTypes = {
  addComment: PropTypes.func,
  post: PropTypes.shape({
    title: PropTypes.string,
    comments: PropTypes.array,
    body: PropTypes.string,
    id: PropTypes.number
  })
};

CardPost.defaultProps = {
  addComment: () => {},
  post: {
    title: '',
    body: '',
    comments: [],
    id: 0
  }
};
