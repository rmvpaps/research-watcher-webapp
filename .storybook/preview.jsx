import { initialize, mswLoader } from 'msw-storybook-addon';
/** @type { import('@storybook/react-webpack5').Preview } */

initialize();

const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;