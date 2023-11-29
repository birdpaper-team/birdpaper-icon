import type { App } from 'vue';
import _IconLeftExpand from './icon-left-expand.vue';

const IconLeftExpand = Object.assign(_IconLeftExpand, {
  install: (app: App) => {
    app.component(_IconLeftExpand.name, _IconLeftExpand);
  }
});

export default IconLeftExpand;