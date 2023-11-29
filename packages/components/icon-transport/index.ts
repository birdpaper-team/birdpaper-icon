import type { App } from 'vue';
import _IconTransport from './icon-transport.vue';

const IconTransport = Object.assign(_IconTransport, {
  install: (app: App) => {
    app.component(_IconTransport.name, _IconTransport);
  }
});

export default IconTransport;