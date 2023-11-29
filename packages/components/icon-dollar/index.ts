import type { App } from 'vue';
import _IconDollar from './icon-dollar.vue';

const IconDollar = Object.assign(_IconDollar, {
  install: (app: App) => {
    app.component(_IconDollar.name, _IconDollar);
  }
});

export default IconDollar;