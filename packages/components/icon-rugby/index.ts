import type { App } from 'vue';
import _IconRugby from './icon-rugby.vue';

const IconRugby = Object.assign(_IconRugby, {
  install: (app: App) => {
    app.component(_IconRugby.name, _IconRugby);
  }
});

export default IconRugby;