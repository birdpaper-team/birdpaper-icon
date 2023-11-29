import type { App } from 'vue';
import _IconOctagonFill from './icon-octagon-fill.vue';

const IconOctagonFill = Object.assign(_IconOctagonFill, {
  install: (app: App) => {
    app.component(_IconOctagonFill.name, _IconOctagonFill);
  }
});

export default IconOctagonFill;