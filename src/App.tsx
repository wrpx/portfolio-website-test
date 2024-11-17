import AppRoutes from './routes';
import Layout from './components/Layout';
import { ThemeProvider } from './context/ThemeContext';
import { AppProvider } from './context/AppContext';

const App = () => {
  return (
    <ThemeProvider>
      <AppProvider>
        <Layout>
          <AppRoutes />
        </Layout>
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
