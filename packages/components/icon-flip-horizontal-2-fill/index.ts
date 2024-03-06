import type { App } from 'vue';
import _IconFlipHorizontal2Fill from './icon-flip-horizontal-2-fill.vue';

const IconFlipHorizontal2Fill = Object.assign(_IconFlipHorizontal2Fill, {
  install: (app: App) => {
    app.component(_IconFlipHorizontal2Fill.name, _IconFlipHorizontal2Fill);
  }
});

export default IconFlipHorizontal2Fill;