import type { App } from 'vue';
import _IconPagoda from './icon-pagoda.vue';

const IconPagoda = Object.assign(_IconPagoda, {
  install: (app: App) => {
    app.component(_IconPagoda.name, _IconPagoda);
  }
});

export default IconPagoda;