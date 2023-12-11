import React, {useContext} from 'react';
import {createContext, useState} from 'react';

import {Toast, ToastService} from '../toastTypes';

export const ToastContext = createContext<ToastService>({} as ToastService);

export function ToastProvider({children}: React.PropsWithChildren<{}>) {
  const [toast, setToast] = useState<ToastService['toast']>(null);
  function showToast(_toast: Toast) {
    setToast(_toast);
  }
  function hideToast() {
    setToast(null);
  }
  return (
    <ToastContext.Provider value={{toast, showToast, hideToast}}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast(): ToastService {
  const {toast, hideToast, showToast} = useContext(ToastContext);
  return {
    toast,
    showToast,
    hideToast,
  };
}
