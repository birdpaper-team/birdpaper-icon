import type { App } from 'vue';
import _IconAviation from './icon-aviation.vue';

const IconAviation = Object.assign(_IconAviation, {
  install: (app: App) => {
    app.component(_IconAviation.name, _IconAviation);
  }
});

export default IconAviation;