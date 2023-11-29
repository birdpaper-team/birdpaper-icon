import type { App } from 'vue';
import _IconLayoutLeftFill from './icon-layout-left-fill.vue';

const IconLayoutLeftFill = Object.assign(_IconLayoutLeftFill, {
  install: (app: App) => {
    app.component(_IconLayoutLeftFill.name, _IconLayoutLeftFill);
  }
});

export default IconLayoutLeftFill;