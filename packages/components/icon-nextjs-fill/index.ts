import type { App } from 'vue';
import _IconNextjsFill from './icon-nextjs-fill.vue';

const IconNextjsFill = Object.assign(_IconNextjsFill, {
  install: (app: App) => {
    app.component(_IconNextjsFill.name, _IconNextjsFill);
  }
});

export default IconNextjsFill;