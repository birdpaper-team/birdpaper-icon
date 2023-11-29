import type { App } from 'vue';
import _IconDoughnut from './icon-doughnut.vue';

const IconDoughnut = Object.assign(_IconDoughnut, {
  install: (app: App) => {
    app.component(_IconDoughnut.name, _IconDoughnut);
  }
});

export default IconDoughnut;