import AppRoutes from "./routes";
import Layout from "./components/layout";
import { AppProvider } from "./context/AppContext";

// App component จะถูกครอบด้วย AppProvider เพื่อใช้งาน context
// ไม่ต้องกำหนด class dark ที่นี่ เพราะมีการจัดการใน AppContext แล้ว
const App = () => {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
};

const AppWithContext = () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
};

export default AppWithContext;
