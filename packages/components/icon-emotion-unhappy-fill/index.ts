import type { App } from 'vue';
import _IconEmotionUnhappyFill from './icon-emotion-unhappy-fill.vue';

const IconEmotionUnhappyFill = Object.assign(_IconEmotionUnhappyFill, {
  install: (app: App) => {
    app.component(_IconEmotionUnhappyFill.name, _IconEmotionUnhappyFill);
  }
});

export default IconEmotionUnhappyFill;