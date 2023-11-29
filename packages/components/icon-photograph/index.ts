import type { App } from 'vue';
import _IconPhotograph from './icon-photograph.vue';

const IconPhotograph = Object.assign(_IconPhotograph, {
  install: (app: App) => {
    app.component(_IconPhotograph.name, _IconPhotograph);
  }
});

export default IconPhotograph;