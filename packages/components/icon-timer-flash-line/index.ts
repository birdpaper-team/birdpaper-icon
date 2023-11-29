import type { App } from 'vue';
import _IconTimerFlashLine from './icon-timer-flash-line.vue';

const IconTimerFlashLine = Object.assign(_IconTimerFlashLine, {
  install: (app: App) => {
    app.component(_IconTimerFlashLine.name, _IconTimerFlashLine);
  }
});

export default IconTimerFlashLine;