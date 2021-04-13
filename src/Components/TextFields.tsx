/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/prop-types */
// eslint-disable-next-line consistent-return
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Button, Grid, Container, TextField } from '@material-ui/core';
import { IPosts } from '../types';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      paddingTop: 40
    },
    loading: {
      filter: 'blur(2px)'
    },
    CardMedia: {
      marginBottom: theme.spacing(1),
      objectFit: 'cover'
    }
  };
});

interface ITextFields {
  handleSubmitFetch: (data: IPosts, postId: number) => {};
  postId?: number;
  loading: boolean;
  post?: IPosts;
}

export default function TextFields({
  handleSubmitFetch,
  postId = 0,
  loading,
  post
}: ITextFields): JSX.Element {
  const classes = useStyles();
  const [title, setTitle] = React.useState(post ? post.title : '');
  const [body, setBody] = React.useState(post ? post.body : '');
  const data: IPosts = { title, body };

  React.useEffect(() => {
    if (post && post.title) {
      setTitle(post.title);
      setBody(post.body);
    }
  }, [post]);

  const handleSubmit = (data: IPosts, postId: number) => {
    handleSubmitFetch(data, postId);
  };

  return (
    <Container component="main" maxWidth="md" className={classes.root}>
      <form
        className={loading ? classes.loading : undefined}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Body"
              multiline
              rows="5"
              onChange={(e) => setBody(e.target.value)}
              value={body}
            />
          </Grid>
          <Container maxWidth="xs">
            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                color="primary"
                disabled={!title || !body}
                onClick={() => handleSubmit(data, postId)}
              >
                Send
              </Button>
            </Grid>
          </Container>
        </Grid>
      </form>
    </Container>
  );
}
