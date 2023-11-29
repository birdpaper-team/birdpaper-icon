import type { App } from 'vue';
import _IconCriminalFill from './icon-criminal-fill.vue';

const IconCriminalFill = Object.assign(_IconCriminalFill, {
  install: (app: App) => {
    app.component(_IconCriminalFill.name, _IconCriminalFill);
  }
});

export default IconCriminalFill;