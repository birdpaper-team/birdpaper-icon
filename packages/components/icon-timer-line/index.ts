import type { App } from 'vue';
import _IconTimerLine from './icon-timer-line.vue';

const IconTimerLine = Object.assign(_IconTimerLine, {
  install: (app: App) => {
    app.component(_IconTimerLine.name, _IconTimerLine);
  }
});

export default IconTimerLine;