import link from "next/link";

export default function GuestView() {
  return (
    <div className="App">
      <h1>Replit Assistant</h1>
      <div className="buttons">
        <a href="/login" className="btn btn-primary">
          Login
        </a>
        <a className="btn btn-primary">Privacy Policy</a>
        <a className="btn btn-primary">Credits</a>
      </div>
    </div>
  );
}
