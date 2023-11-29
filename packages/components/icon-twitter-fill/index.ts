import type { App } from 'vue';
import _IconTwitterFill from './icon-twitter-fill.vue';

const IconTwitterFill = Object.assign(_IconTwitterFill, {
  install: (app: App) => {
    app.component(_IconTwitterFill.name, _IconTwitterFill);
  }
});

export default IconTwitterFill;