import type { App } from 'vue';
import _IconLightbulbLine from './icon-lightbulb-line.vue';

const IconLightbulbLine = Object.assign(_IconLightbulbLine, {
  install: (app: App) => {
    app.component(_IconLightbulbLine.name, _IconLightbulbLine);
  }
});

export default IconLightbulbLine;