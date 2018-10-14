import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  }
});

const Login = ({
  login,
  submitLogin,
  handleUsernameChange,
  handlePasswordChange
})=>{
  return(
    <div>
          <form>
        <TextField
          id="username"
          placeholder="username"
          defaultValue={login.userCredential.username}
          margin="normal"
          onChange={handleUsernameChange}
        />
        <TextField
          id="password"
          placeholder="password"
          defaultValue={login.userCredential.password}
          margin="normal"
          onChange={handlePasswordChange}
        />
        <Button onClick={submitLogin}>
          Login
        </Button>
    </form>
    <div>
      <span>{login.message}</span>
    </div>
    </div>

  );
}

Login.propTypes = {
  login: PropTypes.object.isRequired,
  submitLogin: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired
}

export default withStyles(styles)(Login)