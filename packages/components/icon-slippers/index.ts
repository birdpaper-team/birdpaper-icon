import type { App } from 'vue';
import _IconSlippers from './icon-slippers.vue';

const IconSlippers = Object.assign(_IconSlippers, {
  install: (app: App) => {
    app.component(_IconSlippers.name, _IconSlippers);
  }
});

export default IconSlippers;