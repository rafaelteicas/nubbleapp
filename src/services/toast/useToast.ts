import {ToastService} from './toastTypes';
// import {useToastContext} from './useToastContext';
import {useToastServiceZustand, useToastZustand} from './useToastZustand';

export function useToast(): ToastService['toast'] {
  // return useToastContext();
  return useToastZustand();
}

export function useToastService(): Pick<
  ToastService,
  'showToast' | 'hideToast'
> {
  // const {showToast, hideToast} = useToastContext();
  // return {showToast, hideToast};
  return useToastServiceZustand();
}
