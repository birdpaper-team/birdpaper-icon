import type { App } from 'vue';
import _IconMvFill from './icon-mv-fill.vue';

const IconMvFill = Object.assign(_IconMvFill, {
  install: (app: App) => {
    app.component(_IconMvFill.name, _IconMvFill);
  }
});

export default IconMvFill;