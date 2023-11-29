import type { App } from 'vue';
import _IconDolphin from './icon-dolphin.vue';

const IconDolphin = Object.assign(_IconDolphin, {
  install: (app: App) => {
    app.component(_IconDolphin.name, _IconDolphin);
  }
});

export default IconDolphin;