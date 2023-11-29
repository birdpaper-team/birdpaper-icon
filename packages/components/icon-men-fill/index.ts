import type { App } from 'vue';
import _IconMenFill from './icon-men-fill.vue';

const IconMenFill = Object.assign(_IconMenFill, {
  install: (app: App) => {
    app.component(_IconMenFill.name, _IconMenFill);
  }
});

export default IconMenFill;