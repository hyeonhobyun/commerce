import { atom } from 'recoil';
import { PURCHASE_STATES } from '@store/product/purchaseInfo/purchase.states';

const purchaseInfoState = atom<number>({
  key: PURCHASE_STATES.quantity,
  default: 1,
});

export { purchaseInfoState };
