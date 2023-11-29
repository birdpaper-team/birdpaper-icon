import type { App } from 'vue';
import _IconEmotionHappyFill from './icon-emotion-happy-fill.vue';

const IconEmotionHappyFill = Object.assign(_IconEmotionHappyFill, {
  install: (app: App) => {
    app.component(_IconEmotionHappyFill.name, _IconEmotionHappyFill);
  }
});

export default IconEmotionHappyFill;