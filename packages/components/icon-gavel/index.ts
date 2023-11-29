import type { App } from 'vue';
import _IconGavel from './icon-gavel.vue';

const IconGavel = Object.assign(_IconGavel, {
  install: (app: App) => {
    app.component(_IconGavel.name, _IconGavel);
  }
});

export default IconGavel;