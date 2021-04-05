/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/prop-types */
// eslint-disable-next-line consistent-return
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Button, Grid, Container, TextField } from '@material-ui/core';

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

export default function TextFields({
  handleSubmitFetch,
  postId,
  loading,
  post
}) {
  const classes = useStyles();
  const [title, setTitle] = React.useState(post ? post.title : '');
  const [body, setBody] = React.useState(post ? post.body : '');
  const data = { title, body };

  React.useEffect(() => {
    if (post && post.title) {
      setTitle(post.title);
      setBody(post.body);
    }
  }, [post]);

  const handleSubmit = (data, postId) => {
    handleSubmitFetch(data, postId);
  };

  return (
    <Container component="main" maxWidth="md" className={classes.root}>
      <form
        className={loading ? classes.loading : null}
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
                className={classes.submit}
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
