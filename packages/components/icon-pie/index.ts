import type { App } from 'vue';
import _IconPie from './icon-pie.vue';

const IconPie = Object.assign(_IconPie, {
  install: (app: App) => {
    app.component(_IconPie.name, _IconPie);
  }
});

export default IconPie;