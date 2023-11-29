import type { App } from 'vue';
import _IconThunderstormsFill from './icon-thunderstorms-fill.vue';

const IconThunderstormsFill = Object.assign(_IconThunderstormsFill, {
  install: (app: App) => {
    app.component(_IconThunderstormsFill.name, _IconThunderstormsFill);
  }
});

export default IconThunderstormsFill;