import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../../hooks/use-auth";
import "./Login.css";

const Login = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const history = useHistory();
  const auth = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    auth
      .login(formData.email, formData.password)
      .then(() => {
        setIsLoading(false);
        history.push("/admin/dashboard");
      })
      .catch((err) => {
        setIsLoading(false);
        setError(true);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setError(false);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="is-flex is-flex-direction-column is-align-items-center">
      <div className="box">
        <h2 className="title">Log in to your account</h2>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label" htmlFor="email">
              Email
            </label>
            <div className="control">
              <input
                className="input"
                type="email"
                name="email"
                id="email"
                placeholder="admin@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="password">
              Password
            </label>
            <div className="control has-icons-right">
              <input
                className="input"
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <span
                className="icon is-small is-right is-clickable"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                <i className={"fas fa-eye" + (!showPassword ? "-slash" : "")}></i>
              </span>
            </div>
          </div>
          <div className="field">
            <button className={"button is-primary" + (isLoading ? " is-loading" : "")} type="submit">
              Log In
            </button>
          </div>
        </form>
      </div>
      {error && (
        <div className="notification is-danger">
          <button className="delete" onClick={() => setError(false)}></button>
          There was an error logging in, check your email and/or password and try again.
        </div>
      )}
    </div>
  );
};

export default Login;
