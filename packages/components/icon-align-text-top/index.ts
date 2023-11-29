import type { App } from 'vue';
import _IconAlignTextTop from './icon-align-text-top.vue';

const IconAlignTextTop = Object.assign(_IconAlignTextTop, {
  install: (app: App) => {
    app.component(_IconAlignTextTop.name, _IconAlignTextTop);
  }
});

export default IconAlignTextTop;