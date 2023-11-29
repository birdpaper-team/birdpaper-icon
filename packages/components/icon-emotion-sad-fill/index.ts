import type { App } from 'vue';
import _IconEmotionSadFill from './icon-emotion-sad-fill.vue';

const IconEmotionSadFill = Object.assign(_IconEmotionSadFill, {
  install: (app: App) => {
    app.component(_IconEmotionSadFill.name, _IconEmotionSadFill);
  }
});

export default IconEmotionSadFill;