import { createMuiTheme } from "@material-ui/core";
import { deepOrange, deepPurple } from "@material-ui/core/colors";

export default createMuiTheme({
  palette: {
    primary: { main: deepPurple[500] },
    secondary: {main: deepOrange[500] }
  },
  typography: {
    fontSize: 18
  }
});