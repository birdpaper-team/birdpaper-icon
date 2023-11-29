import type { App } from 'vue';
import _IconEmotionUnhappy from './icon-emotion-unhappy.vue';

const IconEmotionUnhappy = Object.assign(_IconEmotionUnhappy, {
  install: (app: App) => {
    app.component(_IconEmotionUnhappy.name, _IconEmotionUnhappy);
  }
});

export default IconEmotionUnhappy;