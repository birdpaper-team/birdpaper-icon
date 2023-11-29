import type { App } from 'vue';
import _IconStickers from './icon-stickers.vue';

const IconStickers = Object.assign(_IconStickers, {
  install: (app: App) => {
    app.component(_IconStickers.name, _IconStickers);
  }
});

export default IconStickers;