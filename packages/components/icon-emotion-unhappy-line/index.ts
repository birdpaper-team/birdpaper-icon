import type { App } from 'vue';
import _IconEmotionUnhappyLine from './icon-emotion-unhappy-line.vue';

const IconEmotionUnhappyLine = Object.assign(_IconEmotionUnhappyLine, {
  install: (app: App) => {
    app.component(_IconEmotionUnhappyLine.name, _IconEmotionUnhappyLine);
  }
});

export default IconEmotionUnhappyLine;