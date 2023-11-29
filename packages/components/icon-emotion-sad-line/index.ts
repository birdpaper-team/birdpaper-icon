import type { App } from 'vue';
import _IconEmotionSadLine from './icon-emotion-sad-line.vue';

const IconEmotionSadLine = Object.assign(_IconEmotionSadLine, {
  install: (app: App) => {
    app.component(_IconEmotionSadLine.name, _IconEmotionSadLine);
  }
});

export default IconEmotionSadLine;