import type { App } from 'vue';
import _IconDribbbleFill from './icon-dribbble-fill.vue';

const IconDribbbleFill = Object.assign(_IconDribbbleFill, {
  install: (app: App) => {
    app.component(_IconDribbbleFill.name, _IconDribbbleFill);
  }
});

export default IconDribbbleFill;