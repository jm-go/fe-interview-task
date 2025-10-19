import { Button } from "./button/Button";
import mubiLogo from "/logo.svg";

const App = () => (
  <div
    style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "1.5rem",
    }}
  >
    <img
      src={mubiLogo}
      alt="MUBI"
      style={{ width: "30vw", minWidth: "200px" }}
    />
  <Button label="START" to="/review-list" />
  </div>
);

export default App;