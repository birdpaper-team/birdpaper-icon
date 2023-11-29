import type { App } from 'vue';
import _IconAlignTextRight from './icon-align-text-right.vue';

const IconAlignTextRight = Object.assign(_IconAlignTextRight, {
  install: (app: App) => {
    app.component(_IconAlignTextRight.name, _IconAlignTextRight);
  }
});

export default IconAlignTextRight;