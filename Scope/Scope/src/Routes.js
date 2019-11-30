import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  ProjectList as ProjectListView,
  UserList as UserListView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView,
  ProjectCreation as ProjectCreationView,
  ProjectDetail as ProjectDetailView,
  Milestone as MilestoneView,
  Testing as TestingView,
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/sign-in"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/users"
      />
      <RouteWithLayout
        component={ProjectListView}
        exact
        layout={MainLayout}
        path="/projects"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={ProjectCreationView}
        exact
        layout={MainLayout}
        path="/create-project"
      />
      <RouteWithLayout
        component={MilestoneView}
        exact
        layout={MainLayout}
        path="/milestone"
      />
      <RouteWithLayout
        component={ProjectDetailView}
        exact
        layout={MainLayout}
        path="/project-detail"
      />
      <RouteWithLayout
        component={TestingView}
        exact
        layout={MainLayout}
        path="/testing"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
