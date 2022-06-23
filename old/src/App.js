import "./App.css";
import GuestView from "./components/GuestView";

export default function App({ user }) {
  return user ? <div>Loading...</div> : <GuestView />;
}

export async function getServerSideProps() {
  const user = false;
  return { props: { user } };
}
