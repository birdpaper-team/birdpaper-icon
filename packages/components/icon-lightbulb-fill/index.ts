import type { App } from 'vue';
import _IconLightbulbFill from './icon-lightbulb-fill.vue';

const IconLightbulbFill = Object.assign(_IconLightbulbFill, {
  install: (app: App) => {
    app.component(_IconLightbulbFill.name, _IconLightbulbFill);
  }
});

export default IconLightbulbFill;