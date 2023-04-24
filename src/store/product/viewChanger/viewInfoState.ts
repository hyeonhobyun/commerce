import { atom } from 'recoil';
import { VIEW_CHANGER_STATES } from '@store/product/viewChanger/viewChanger.states';

const viewInfoState = atom<string>({
  key: VIEW_CHANGER_STATES.viewChanger,
  default: 'grid',
});

export { viewInfoState };
