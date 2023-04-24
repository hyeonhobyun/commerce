import { StoriesProviderWrapper } from '@stories/ProviderWrapper';
import { GlobalResetStyle } from '@style/globalReset';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <style dangerouslySetInnerHTML={{ __html: GlobalResetStyle }} />
      <StoriesProviderWrapper>
        <Story />
      </StoriesProviderWrapper>
    </>
  ),
];
