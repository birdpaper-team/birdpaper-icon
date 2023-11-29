import type { App } from 'vue';
import _IconPerfumerBottle from './icon-perfumer-bottle.vue';

const IconPerfumerBottle = Object.assign(_IconPerfumerBottle, {
  install: (app: App) => {
    app.component(_IconPerfumerBottle.name, _IconPerfumerBottle);
  }
});

export default IconPerfumerBottle;