import type { App } from 'vue';
import _IconDropFill from './icon-drop-fill.vue';

const IconDropFill = Object.assign(_IconDropFill, {
  install: (app: App) => {
    app.component(_IconDropFill.name, _IconDropFill);
  }
});

export default IconDropFill;