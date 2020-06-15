import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const mapDispatchToProps = (dispatch) => ({
	startLogin: () => dispatch(startLogin()),
});

export const LoginPage = ({ startLogin }) => (
	<div>
		<button onClick={startLogin}>Login</button>
	</div>
);

export default connect(undefined, mapDispatchToProps)(LoginPage);
