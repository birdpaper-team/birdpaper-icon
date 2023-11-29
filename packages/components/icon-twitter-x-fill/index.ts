import type { App } from 'vue';
import _IconTwitterXFill from './icon-twitter-x-fill.vue';

const IconTwitterXFill = Object.assign(_IconTwitterXFill, {
  install: (app: App) => {
    app.component(_IconTwitterXFill.name, _IconTwitterXFill);
  }
});

export default IconTwitterXFill;