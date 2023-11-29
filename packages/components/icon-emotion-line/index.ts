import type { App } from 'vue';
import _IconEmotionLine from './icon-emotion-line.vue';

const IconEmotionLine = Object.assign(_IconEmotionLine, {
  install: (app: App) => {
    app.component(_IconEmotionLine.name, _IconEmotionLine);
  }
});

export default IconEmotionLine;