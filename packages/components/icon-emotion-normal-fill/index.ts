import type { App } from 'vue';
import _IconEmotionNormalFill from './icon-emotion-normal-fill.vue';

const IconEmotionNormalFill = Object.assign(_IconEmotionNormalFill, {
  install: (app: App) => {
    app.component(_IconEmotionNormalFill.name, _IconEmotionNormalFill);
  }
});

export default IconEmotionNormalFill;