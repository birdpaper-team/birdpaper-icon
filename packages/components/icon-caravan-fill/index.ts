import type { App } from 'vue';
import _IconCaravanFill from './icon-caravan-fill.vue';

const IconCaravanFill = Object.assign(_IconCaravanFill, {
  install: (app: App) => {
    app.component(_IconCaravanFill.name, _IconCaravanFill);
  }
});

export default IconCaravanFill;