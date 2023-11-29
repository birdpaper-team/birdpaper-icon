import type { App } from 'vue';
import _IconEmotion2Fill from './icon-emotion-2-fill.vue';

const IconEmotion2Fill = Object.assign(_IconEmotion2Fill, {
  install: (app: App) => {
    app.component(_IconEmotion2Fill.name, _IconEmotion2Fill);
  }
});

export default IconEmotion2Fill;