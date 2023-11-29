import type { App } from 'vue';
import _IconBookletFill from './icon-booklet-fill.vue';

const IconBookletFill = Object.assign(_IconBookletFill, {
  install: (app: App) => {
    app.component(_IconBookletFill.name, _IconBookletFill);
  }
});

export default IconBookletFill;