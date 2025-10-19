import { Button } from "./button/Button";
import mubiLogo from "/logo.svg";
import { Layout } from "./Layout";

const App = () => (
  <Layout showHeader={false}>
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={mubiLogo}
        alt="MUBI"
        style={{ width: "65%", minWidth: 180, maxWidth: 280, marginBottom: "1.75rem" }}
      />
      <Button label="START" to="/review-list" />
    </div>
  </Layout>
);

export default App;
