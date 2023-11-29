import type { App } from 'vue';
import _IconLightbulbFlashFill from './icon-lightbulb-flash-fill.vue';

const IconLightbulbFlashFill = Object.assign(_IconLightbulbFlashFill, {
  install: (app: App) => {
    app.component(_IconLightbulbFlashFill.name, _IconLightbulbFlashFill);
  }
});

export default IconLightbulbFlashFill;