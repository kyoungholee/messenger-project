import Page from "./(site)/page";
import AuthContext from "./context/AuthContext";
import ToasterContext from "./context/ToasterContext";

export default function Home() {
  return (
    <div>
      <AuthContext>
        <ToasterContext />
        <Page />
      </AuthContext>
    </div>
  );
}
