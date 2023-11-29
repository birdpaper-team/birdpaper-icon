import type { App } from 'vue';
import _IconTheater from './icon-theater.vue';

const IconTheater = Object.assign(_IconTheater, {
  install: (app: App) => {
    app.component(_IconTheater.name, _IconTheater);
  }
});

export default IconTheater;