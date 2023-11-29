import type { App } from 'vue';
import _IconLayoutBottomFill from './icon-layout-bottom-fill.vue';

const IconLayoutBottomFill = Object.assign(_IconLayoutBottomFill, {
  install: (app: App) => {
    app.component(_IconLayoutBottomFill.name, _IconLayoutBottomFill);
  }
});

export default IconLayoutBottomFill;