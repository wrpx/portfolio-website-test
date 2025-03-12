import AppRoutes from "./routes";
import Layout from "./components/layout";
import { AppProvider } from "./context/AppContext";

const App = () => {
  return (
    <AppProvider>
      <Layout>
        <AppRoutes />
      </Layout>
    </AppProvider>
  );
};

export default App;
