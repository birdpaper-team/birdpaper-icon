import type { App } from 'vue';
import _IconLightbulbFlashLine from './icon-lightbulb-flash-line.vue';

const IconLightbulbFlashLine = Object.assign(_IconLightbulbFlashLine, {
  install: (app: App) => {
    app.component(_IconLightbulbFlashLine.name, _IconLightbulbFlashLine);
  }
});

export default IconLightbulbFlashLine;