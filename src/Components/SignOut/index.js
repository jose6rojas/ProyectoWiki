import React from 'react';
import '../Style.css';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignOutButton = ({ firebase }) => (
  <button type="button" className="btn btn-outline-info" onClick={firebase.doSignOut}> Log Out</button >
);

export default withFirebase(SignOutButton);