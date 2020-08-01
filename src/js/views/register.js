import { Link } from "react-router-dom";
import React from "react";
import { useForm } from "react-hook-form";
import "../../styles/register.scss";

export const Register = () => {
	const { register, handleSubmit, watch, errors } = useForm();
	const onSubmit = data => console.log(data);

	// console.log(watch("example"));

	return (
		<div className="text-center mt-5">
			{/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
			<form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
				<h1 className="h1">
					Wall
					<span className="h4 text-monospace">app</span>
				</h1>
				<h5 className="h5 mb-3 font-weight-normal">Please register in</h5>
				<label htmlFor="inputFname" className="sr-only">
					First name
				</label>
				<input
					type="text"
					required
					id="inputFname"
					className="form-control"
					placeholder="First name"
					name="firstName"
					autoFocus
					ref={register({ required: true, maxLength: 20, pattern: /^[a-z'-]+$/i })}
				/>
				{errors.firstName && "Invalid First Name"}
				<label htmlFor="inputLname" className="sr-only">
					Last name
				</label>
				<input
					type="text"
					required
					id="inputLname"
					className="form-control"
					placeholder="Last name"
					name="lastName"
					ref={register({ required: true, maxLength: 20, pattern: /^[a-z'-]+$/i })}
				/>
				{errors.lastName && "Invalid Last Name"}
				<label htmlFor="inputEmail" className="sr-only">
					Email address
				</label>
				<input
					type="email"
					required
					id="inputEmail"
					className="form-control"
					placeholder="Email address"
					name="email"
					ref={register({ required: true })}
				/>
				{errors.email && "Invalid email"}
				<label htmlFor="inputPassword" className="sr-only">
					Password
				</label>
				<input
					type="password"
					required
					id="inputPassword"
					className="form-control"
					placeholder="Password"
					name="password"
					ref={register({
						required: true,
						max: 12,
						min: 6,
						maxLength: 20,
						pattern: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/
					})}
				/>
				{errors.password && "Invalid password"}
				<p>
					<small>
						Your password has to minimum of 6 characters, at least 1 uppercase letter, 1 lowercase letter,
						and 1 number with no spaces.
					</small>
				</p>
				<input className="btn btn-lg btn-primary btn-block" type="submit" />
			</form>
		</div>
	);
};
