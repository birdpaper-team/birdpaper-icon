import type { App } from 'vue';
import _IconSubscript from './icon-subscript.vue';

const IconSubscript = Object.assign(_IconSubscript, {
  install: (app: App) => {
    app.component(_IconSubscript.name, _IconSubscript);
  }
});

export default IconSubscript;