import AppRoutes from "./routes";
import Layout from "./components/Layout";
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
