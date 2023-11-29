import type { App } from 'vue';
import _IconRepeatFill from './icon-repeat-fill.vue';

const IconRepeatFill = Object.assign(_IconRepeatFill, {
  install: (app: App) => {
    app.component(_IconRepeatFill.name, _IconRepeatFill);
  }
});

export default IconRepeatFill;