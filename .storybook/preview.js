import CssReset from '../src/lib/theme/CSSReset'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  Story => (
    <>
      <CssReset />
      <Story />
    </>
  ),
]
