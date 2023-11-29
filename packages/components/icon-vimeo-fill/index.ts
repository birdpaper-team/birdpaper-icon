import type { App } from 'vue';
import _IconVimeoFill from './icon-vimeo-fill.vue';

const IconVimeoFill = Object.assign(_IconVimeoFill, {
  install: (app: App) => {
    app.component(_IconVimeoFill.name, _IconVimeoFill);
  }
});

export default IconVimeoFill;