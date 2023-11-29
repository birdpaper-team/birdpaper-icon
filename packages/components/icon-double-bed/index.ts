import type { App } from 'vue';
import _IconDoubleBed from './icon-double-bed.vue';

const IconDoubleBed = Object.assign(_IconDoubleBed, {
  install: (app: App) => {
    app.component(_IconDoubleBed.name, _IconDoubleBed);
  }
});

export default IconDoubleBed;