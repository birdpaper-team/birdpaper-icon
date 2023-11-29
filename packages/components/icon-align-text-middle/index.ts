import type { App } from 'vue';
import _IconAlignTextMiddle from './icon-align-text-middle.vue';

const IconAlignTextMiddle = Object.assign(_IconAlignTextMiddle, {
  install: (app: App) => {
    app.component(_IconAlignTextMiddle.name, _IconAlignTextMiddle);
  }
});

export default IconAlignTextMiddle;