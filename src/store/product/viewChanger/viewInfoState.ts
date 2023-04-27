import { atom } from 'recoil';
import { VIEW_CHANGER_STATES } from '@store/product/viewChanger/viewChanger.states';

type ViewInfoType = 'grid' | 'list';

const viewInfoState = atom<ViewInfoType>({
  key: VIEW_CHANGER_STATES.viewChanger,
  default: 'grid',
});

export type { ViewInfoType };
export { viewInfoState };
