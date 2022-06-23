export default function Login() {
  return (
    <div className="App">
      <form className="login-form">
        <h1>Login</h1>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Replit Username"
            className="form-control"
            id="username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Replit Pasword"
            className="form-control"
            id="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <span
          style={{ marginTop: "0.95em", width: "40em", textAlign: "center" }}
        >
          We do not store any of your information. We need this information to
          use Replit Assistant to connect to your replit account. We are not at
          all affiliated with replit.
        </span>
      </form>
    </div>
  );
}
