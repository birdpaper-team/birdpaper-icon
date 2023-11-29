import type { App } from 'vue';
import _IconBenz from './icon-benz.vue';

const IconBenz = Object.assign(_IconBenz, {
  install: (app: App) => {
    app.component(_IconBenz.name, _IconBenz);
  }
});

export default IconBenz;