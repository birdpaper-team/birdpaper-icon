import type { App } from 'vue';
import _IconEmotionLaughFill from './icon-emotion-laugh-fill.vue';

const IconEmotionLaughFill = Object.assign(_IconEmotionLaughFill, {
  install: (app: App) => {
    app.component(_IconEmotionLaughFill.name, _IconEmotionLaughFill);
  }
});

export default IconEmotionLaughFill;