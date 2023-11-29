import type { App } from 'vue';
import _IconAlignTextLeft from './icon-align-text-left.vue';

const IconAlignTextLeft = Object.assign(_IconAlignTextLeft, {
  install: (app: App) => {
    app.component(_IconAlignTextLeft.name, _IconAlignTextLeft);
  }
});

export default IconAlignTextLeft;