import { Link } from "react-router-dom";
import React from "react";
import "../../styles/auth.scss";

export const Auth = () => (
	<div className="text-center mt-5">
		<form className="form-signin">
			<h1 className="h1">
				Wall
				<span className="h4 text-monospace">app</span>
			</h1>
			<h5 className="h5 mb-3 font-weight-normal">Please sign in</h5>
			<label htmlFor="inputEmail" className="sr-only">
				Email address
			</label>
			<input
				type="email"
				id="inputEmail"
				className="form-control"
				placeholder="Email address"
				required
				autoFocus
			/>
			<label htmlFor="inputPassword" className="sr-only">
				Password
			</label>
			<input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
			<div className="checkbox mb-3 d-flex justify-content-between px-2">
				<label>
					<input type="checkbox" defaultValue="remember-me" /> Remember me
				</label>
				<Link to="/register">
					<a className="text-decoration-none">Register here</a>
				</Link>
			</div>
			<button className="btn btn-lg btn-primary btn-block" type="submit">
				Sign in
			</button>
		</form>
	</div>
);
