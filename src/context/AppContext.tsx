import { createContext, useContext, useReducer, ReactNode } from 'react';

interface AppState {
  isMenuOpen: boolean;
  notifications: string[];
}

type AppAction = 
  | { type: 'TOGGLE_MENU' }
  | { type: 'ADD_NOTIFICATION'; payload: string }
  | { type: 'REMOVE_NOTIFICATION'; payload: number };

const initialState: AppState = {
  isMenuOpen: false,
  notifications: []
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
    default:
      return state;
  }
};

interface AppContextType {
  state: AppState;
  toggleMenu: () => void;
  addNotification: (message: string) => void;
  removeNotification: (index: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const toggleMenu = () => dispatch({ type: 'TOGGLE_MENU' });
  const addNotification = (message: string) => dispatch({ type: 'ADD_NOTIFICATION', payload: message });
  const removeNotification = (index: number) => dispatch({ type: 'REMOVE_NOTIFICATION', payload: index });

  return (
    <AppContext.Provider value={{ 
      state, 
      toggleMenu, 
      addNotification, 
      removeNotification 
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
