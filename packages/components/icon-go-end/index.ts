import type { App } from 'vue';
import _IconGoEnd from './icon-go-end.vue';

const IconGoEnd = Object.assign(_IconGoEnd, {
  install: (app: App) => {
    app.component(_IconGoEnd.name, _IconGoEnd);
  }
});

export default IconGoEnd;