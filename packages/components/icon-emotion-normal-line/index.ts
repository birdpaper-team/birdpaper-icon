import type { App } from 'vue';
import _IconEmotionNormalLine from './icon-emotion-normal-line.vue';

const IconEmotionNormalLine = Object.assign(_IconEmotionNormalLine, {
  install: (app: App) => {
    app.component(_IconEmotionNormalLine.name, _IconEmotionNormalLine);
  }
});

export default IconEmotionNormalLine;