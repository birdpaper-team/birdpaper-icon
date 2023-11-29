import type { App } from 'vue';
import _IconFormat from './icon-format.vue';

const IconFormat = Object.assign(_IconFormat, {
  install: (app: App) => {
    app.component(_IconFormat.name, _IconFormat);
  }
});

export default IconFormat;