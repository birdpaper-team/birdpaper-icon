import type { App } from 'vue';
import _IconSyringeFill from './icon-syringe-fill.vue';

const IconSyringeFill = Object.assign(_IconSyringeFill, {
  install: (app: App) => {
    app.component(_IconSyringeFill.name, _IconSyringeFill);
  }
});

export default IconSyringeFill;