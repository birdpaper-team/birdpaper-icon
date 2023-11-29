import type { App } from 'vue';
import _IconAlignBottom from './icon-align-bottom.vue';

const IconAlignBottom = Object.assign(_IconAlignBottom, {
  install: (app: App) => {
    app.component(_IconAlignBottom.name, _IconAlignBottom);
  }
});

export default IconAlignBottom;