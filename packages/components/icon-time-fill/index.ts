import type { App } from 'vue';
import _IconTimeFill from './icon-time-fill.vue';

const IconTimeFill = Object.assign(_IconTimeFill, {
  install: (app: App) => {
    app.component(_IconTimeFill.name, _IconTimeFill);
  }
});

export default IconTimeFill;