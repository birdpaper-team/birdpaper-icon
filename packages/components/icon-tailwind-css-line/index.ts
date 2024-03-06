import type { App } from 'vue';
import _IconTailwindCssLine from './icon-tailwind-css-line.vue';

const IconTailwindCssLine = Object.assign(_IconTailwindCssLine, {
  install: (app: App) => {
    app.component(_IconTailwindCssLine.name, _IconTailwindCssLine);
  }
});

export default IconTailwindCssLine;