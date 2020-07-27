import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);
  const msg = currentUser ? "You are signed in" : "You are not signin";
  return <h1>{msg}</h1>;
};

export default LandingPage;

export const getServerSideProps = async (context) => {
  const { data } = await buildClient(context).get("api/users/currentuser");
  const result = { props: { ...data } };
  console.log(result);
  return result;
};
