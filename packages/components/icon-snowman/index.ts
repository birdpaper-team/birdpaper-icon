import type { App } from 'vue';
import _IconSnowman from './icon-snowman.vue';

const IconSnowman = Object.assign(_IconSnowman, {
  install: (app: App) => {
    app.component(_IconSnowman.name, _IconSnowman);
  }
});

export default IconSnowman;