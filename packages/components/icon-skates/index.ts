import type { App } from 'vue';
import _IconSkates from './icon-skates.vue';

const IconSkates = Object.assign(_IconSkates, {
  install: (app: App) => {
    app.component(_IconSkates.name, _IconSkates);
  }
});

export default IconSkates;