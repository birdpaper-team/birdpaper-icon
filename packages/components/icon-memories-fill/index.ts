import type { App } from 'vue';
import _IconMemoriesFill from './icon-memories-fill.vue';

const IconMemoriesFill = Object.assign(_IconMemoriesFill, {
  install: (app: App) => {
    app.component(_IconMemoriesFill.name, _IconMemoriesFill);
  }
});

export default IconMemoriesFill;