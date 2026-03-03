export default defineAppConfig({
  ui: {
    colors: {
      primary: 'purple',
      secondary: 'fuchsia',
      neutral: 'zinc'
    }
  },
    prose: {
      accordion: {
        slots: {
          root: 'my-5',
          trigger: 'text-base'
        }
      },
      accordionItem: {
        base: 'pb-4 text-muted *:first:mt-0 *:last:mb-0 *:my-1.5'
      }
    }
})

