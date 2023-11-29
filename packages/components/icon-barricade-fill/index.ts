import type { App } from 'vue';
import _IconBarricadeFill from './icon-barricade-fill.vue';

const IconBarricadeFill = Object.assign(_IconBarricadeFill, {
  install: (app: App) => {
    app.component(_IconBarricadeFill.name, _IconBarricadeFill);
  }
});

export default IconBarricadeFill;