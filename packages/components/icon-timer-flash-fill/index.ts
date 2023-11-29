import type { App } from 'vue';
import _IconTimerFlashFill from './icon-timer-flash-fill.vue';

const IconTimerFlashFill = Object.assign(_IconTimerFlashFill, {
  install: (app: App) => {
    app.component(_IconTimerFlashFill.name, _IconTimerFlashFill);
  }
});

export default IconTimerFlashFill;