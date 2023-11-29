import type { App } from 'vue';
import _IconTimer from './icon-timer.vue';

const IconTimer = Object.assign(_IconTimer, {
  install: (app: App) => {
    app.component(_IconTimer.name, _IconTimer);
  }
});

export default IconTimer;