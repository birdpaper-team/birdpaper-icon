import type { App } from 'vue';
import _IconRewindStartFill from './icon-rewind-start-fill.vue';

const IconRewindStartFill = Object.assign(_IconRewindStartFill, {
  install: (app: App) => {
    app.component(_IconRewindStartFill.name, _IconRewindStartFill);
  }
});

export default IconRewindStartFill;