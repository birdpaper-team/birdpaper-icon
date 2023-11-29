import type { App } from 'vue';
import _IconPieTwo from './icon-pie-two.vue';

const IconPieTwo = Object.assign(_IconPieTwo, {
  install: (app: App) => {
    app.component(_IconPieTwo.name, _IconPieTwo);
  }
});

export default IconPieTwo;