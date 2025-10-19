import { Button } from "./button/Button";
import mubiLogo from "/logo.svg";
import { Layout } from "./Layout";

const App = () => (
  <Layout showHeader={false}>
    <img
      src={mubiLogo}
      alt="MUBI"
      style={{ width: "65%", minWidth: 180, maxWidth: 280, marginBottom: "1.75rem" }}
    />
    <Button label="START" to="/review-list" />
  </Layout>
);

export default App;
