import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import RecipeListContainer from "./RecipeListContainer";


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1a1a59',
    },
    secondary: {
      main: '#ffdbaa'
    }
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Grid container justify-xs-center>
          <Grid item sm={12}>
            <AppBar>
              <ToolBar>
                <Typography variant='title'
                            color='secondary'>Cookable</Typography>
              </ToolBar>
            </AppBar>
          </Grid>

          <Grid item sm={12}>
            <RecipeListContainer/>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
