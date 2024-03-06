import type { App } from 'vue';
import _IconFlipHorizontalFill from './icon-flip-horizontal-fill.vue';

const IconFlipHorizontalFill = Object.assign(_IconFlipHorizontalFill, {
  install: (app: App) => {
    app.component(_IconFlipHorizontalFill.name, _IconFlipHorizontalFill);
  }
});

export default IconFlipHorizontalFill;