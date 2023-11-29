import type { App } from 'vue';
import _IconExpandUpDownFill from './icon-expand-up-down-fill.vue';

const IconExpandUpDownFill = Object.assign(_IconExpandUpDownFill, {
  install: (app: App) => {
    app.component(_IconExpandUpDownFill.name, _IconExpandUpDownFill);
  }
});

export default IconExpandUpDownFill;