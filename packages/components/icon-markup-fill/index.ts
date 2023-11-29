import type { App } from 'vue';
import _IconMarkupFill from './icon-markup-fill.vue';

const IconMarkupFill = Object.assign(_IconMarkupFill, {
  install: (app: App) => {
    app.component(_IconMarkupFill.name, _IconMarkupFill);
  }
});

export default IconMarkupFill;