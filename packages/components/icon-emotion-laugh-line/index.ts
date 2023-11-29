import type { App } from 'vue';
import _IconEmotionLaughLine from './icon-emotion-laugh-line.vue';

const IconEmotionLaughLine = Object.assign(_IconEmotionLaughLine, {
  install: (app: App) => {
    app.component(_IconEmotionLaughLine.name, _IconEmotionLaughLine);
  }
});

export default IconEmotionLaughLine;