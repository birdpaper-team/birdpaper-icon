import type { App } from 'vue';
import _IconAlignTop from './icon-align-top.vue';

const IconAlignTop = Object.assign(_IconAlignTop, {
  install: (app: App) => {
    app.component(_IconAlignTop.name, _IconAlignTop);
  }
});

export default IconAlignTop;