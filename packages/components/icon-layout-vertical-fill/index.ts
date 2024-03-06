import type { App } from 'vue';
import _IconLayoutVerticalFill from './icon-layout-vertical-fill.vue';

const IconLayoutVerticalFill = Object.assign(_IconLayoutVerticalFill, {
  install: (app: App) => {
    app.component(_IconLayoutVerticalFill.name, _IconLayoutVerticalFill);
  }
});

export default IconLayoutVerticalFill;