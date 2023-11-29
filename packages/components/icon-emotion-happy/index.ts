import type { App } from 'vue';
import _IconEmotionHappy from './icon-emotion-happy.vue';

const IconEmotionHappy = Object.assign(_IconEmotionHappy, {
  install: (app: App) => {
    app.component(_IconEmotionHappy.name, _IconEmotionHappy);
  }
});

export default IconEmotionHappy;