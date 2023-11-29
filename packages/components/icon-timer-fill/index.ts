import type { App } from 'vue';
import _IconTimerFill from './icon-timer-fill.vue';

const IconTimerFill = Object.assign(_IconTimerFill, {
  install: (app: App) => {
    app.component(_IconTimerFill.name, _IconTimerFill);
  }
});

export default IconTimerFill;