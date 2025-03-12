import { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface AppState {
  isMenuOpen: boolean;
  notifications: string[];
  theme: Theme;
}

type AppAction = 
  | { type: 'TOGGLE_MENU' }
  | { type: 'ADD_NOTIFICATION'; payload: string }
  | { type: 'REMOVE_NOTIFICATION'; payload: number }
  | { type: 'SET_THEME'; payload: Theme };

// ดึงค่าธีมที่บันทึกไว้ใน localStorage ถ้ามี
const getSavedTheme = (): Theme => {
  if (typeof window === 'undefined') return 'system';
  
  const savedTheme = localStorage.getItem('theme') as Theme;
  if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
    return savedTheme;
  }
  
  return 'system';
};

const initialState: AppState = {
  isMenuOpen: false,
  notifications: [],
  theme: getSavedTheme()
};

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen
      };
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [...state.notifications, action.payload]
      };
    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter((_, index) => index !== action.payload)
      };
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload
      };
    default:
      return state;
  }
};

interface AppContextType {
  state: AppState;
  toggleMenu: () => void;
  addNotification: (message: string) => void;
  removeNotification: (index: number) => void;
  setTheme: (theme: Theme) => void;
  isDarkMode: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const toggleMenu = () => dispatch({ type: 'TOGGLE_MENU' });
  const addNotification = (message: string) => dispatch({ type: 'ADD_NOTIFICATION', payload: message });
  const removeNotification = (index: number) => dispatch({ type: 'REMOVE_NOTIFICATION', payload: index });
  const setTheme = (theme: Theme) => {
    localStorage.setItem('theme', theme);
    dispatch({ type: 'SET_THEME', payload: theme });
  };

  // คำนวณว่าควรใช้ธีม dark หรือไม่
  const isDarkMode = (() => {
    if (state.theme === 'dark') return true;
    if (state.theme === 'light') return false;
    // ถ้าเป็น 'system' ให้ใช้ค่าจากระบบ
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  })();

  // อัพเดท HTML element เมื่อธีมเปลี่ยน
  useEffect(() => {
    if (typeof document === 'undefined') return;
    
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDarkMode]);

  // ติดตามการเปลี่ยนแปลงธีมของระบบ
  useEffect(() => {
    if (state.theme !== 'system' || typeof window === 'undefined') return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      // force rerender
      dispatch({ type: 'SET_THEME', payload: 'system' });
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [state.theme]);

  return (
    <AppContext.Provider value={{ 
      state, 
      toggleMenu, 
      addNotification, 
      removeNotification,
      setTheme,
      isDarkMode
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
