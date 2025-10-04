//This about page uses the event toggle from the component togglemesssage
import ToggleMessage from "../components/ToggleMessage";

export default function About() {
  return (
    <div>
      <h1 style={{ color: "pink", fontSize: 39, textAlign: "center"}}>About</h1>
        <div className="mt-6">
            <ToggleMessage />
        </div>
    </div>
  );
}
