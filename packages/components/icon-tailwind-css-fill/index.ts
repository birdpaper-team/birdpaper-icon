import type { App } from 'vue';
import _IconTailwindCssFill from './icon-tailwind-css-fill.vue';

const IconTailwindCssFill = Object.assign(_IconTailwindCssFill, {
  install: (app: App) => {
    app.component(_IconTailwindCssFill.name, _IconTailwindCssFill);
  }
});

export default IconTailwindCssFill;