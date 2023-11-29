import type { App } from 'vue';
import _IconEmotionHappyLine from './icon-emotion-happy-line.vue';

const IconEmotionHappyLine = Object.assign(_IconEmotionHappyLine, {
  install: (app: App) => {
    app.component(_IconEmotionHappyLine.name, _IconEmotionHappyLine);
  }
});

export default IconEmotionHappyLine;