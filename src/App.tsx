import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Box, makeStyles, ThemeProvider } from "@material-ui/core";
import { SnackbarProvider } from "notistack";

import { DAOExplorerRouter } from "modules/explorer/router";
import { Navbar } from "modules/common/Toolbar";
import { DAOCreate } from "modules/creator";
import { CreatorProvider } from "modules/creator/state";
import ScrollToTop from "modules/common/ScrollToTop";
import { theme } from "theme";
import Login from "modules/auth"
import Temporal from "modules/temporal"
import Home from "modules/home"

import "App.css";
import { ModalsProvider } from "modules/explorer/ModalsContext";

const queryClient = new QueryClient();

const styles = makeStyles({
  success: {
    backgroundColor: "#4BCF93 !important",
    padding: "6px 28px",
    height: 54,
    fontSize: 13,
    lineHeight: "0px",
    opacity: 1,
  },
  error: {
    backgroundColor: "#ED254E !important",
    padding: "6px 28px",
    height: 54,
    fontSize: 13,
    lineHeight: "0px",
    opacity: 1,
  },
  info: {
    backgroundColor: "#3866F9 !important",
    padding: "6px 28px",
    height: 54,
    fontSize: 13,
    lineHeight: "0px",
    opacity: 1,
  },
});

const App: React.FC = () => {
  const classes = styles();
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        classes={{
          variantSuccess: classes.success,
          variantError: classes.error,
          variantInfo: classes.info,
        }}
      >
        <QueryClientProvider client={queryClient}>
          <Box bgcolor={theme.palette.primary.main }position="absolute" width="100%">
            <Router>
              <ScrollToTop />
              <Switch>
                <Route exact path="/login">
                  <Login />
                </Route>
                <Route exact path="/temporal">
                  <Temporal />
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/creator">
                  <CreatorProvider>
                    <DAOCreate />
                  </CreatorProvider>
                </Route>
                <Route path="/explorer">
                  <ModalsProvider>
                    <Navbar mode="explorer" />
                    <DAOExplorerRouter />
                  </ModalsProvider>
                </Route>
              </Switch>
              <Redirect to="/login"/>
            </Router>
          </Box>
        </QueryClientProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
