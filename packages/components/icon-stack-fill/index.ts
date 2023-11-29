import type { App } from 'vue';
import _IconStackFill from './icon-stack-fill.vue';

const IconStackFill = Object.assign(_IconStackFill, {
  install: (app: App) => {
    app.component(_IconStackFill.name, _IconStackFill);
  }
});

export default IconStackFill;