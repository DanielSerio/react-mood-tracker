import { makeStyles, Theme } from "@material-ui/core";

const makeFormClasses = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[8],
    maxWidth: `${(300 / 18)}rem`,
    margin: '1rem auto'
  },
  header: {

  },
  title: {

  },
  footer: {
    marginTop: theme.spacing(2)
  }
}));

export default makeFormClasses;