import type { App } from 'vue';
import _IconViciaFaba from './icon-vicia-faba.vue';

const IconViciaFaba = Object.assign(_IconViciaFaba, {
  install: (app: App) => {
    app.component(_IconViciaFaba.name, _IconViciaFaba);
  }
});

export default IconViciaFaba;