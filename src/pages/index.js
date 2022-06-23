import GuestView from "./components/GuestView";
import Cookies from "cookies";

export default function App({ user }) {
  return user ? <div>Loading...</div> : <GuestView />;
}

export async function getServerSideProps({ req, res }) {
  const cookies = new Cookies(req, res);
  const user = cookies.get("user") || false;
  return { props: { user } };
}
