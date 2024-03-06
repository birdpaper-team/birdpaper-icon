import type { App } from 'vue';
import _IconFlipVertical2Fill from './icon-flip-vertical-2-fill.vue';

const IconFlipVertical2Fill = Object.assign(_IconFlipVertical2Fill, {
  install: (app: App) => {
    app.component(_IconFlipVertical2Fill.name, _IconFlipVertical2Fill);
  }
});

export default IconFlipVertical2Fill;