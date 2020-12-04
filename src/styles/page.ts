import { makeStyles, Theme } from "@material-ui/core";

const makePageClasses = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(2)
  },
  container: {
    maxWidth: `${(1000 / 18)}rem`,
    width: '90%',
    margin: '0 auto'
  }
}));

export default makePageClasses;