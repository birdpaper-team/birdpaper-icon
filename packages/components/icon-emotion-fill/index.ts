import type { App } from 'vue';
import _IconEmotionFill from './icon-emotion-fill.vue';

const IconEmotionFill = Object.assign(_IconEmotionFill, {
  install: (app: App) => {
    app.component(_IconEmotionFill.name, _IconEmotionFill);
  }
});

export default IconEmotionFill;