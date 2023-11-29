import type { App } from 'vue';
import _IconBoxingFill from './icon-boxing-fill.vue';

const IconBoxingFill = Object.assign(_IconBoxingFill, {
  install: (app: App) => {
    app.component(_IconBoxingFill.name, _IconBoxingFill);
  }
});

export default IconBoxingFill;