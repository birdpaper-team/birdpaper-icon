import type { App } from 'vue';
import _IconTopbuzz from './icon-topbuzz.vue';

const IconTopbuzz = Object.assign(_IconTopbuzz, {
  install: (app: App) => {
    app.component(_IconTopbuzz.name, _IconTopbuzz);
  }
});

export default IconTopbuzz;