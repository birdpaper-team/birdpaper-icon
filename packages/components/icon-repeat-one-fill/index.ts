import type { App } from 'vue';
import _IconRepeatOneFill from './icon-repeat-one-fill.vue';

const IconRepeatOneFill = Object.assign(_IconRepeatOneFill, {
  install: (app: App) => {
    app.component(_IconRepeatOneFill.name, _IconRepeatOneFill);
  }
});

export default IconRepeatOneFill;