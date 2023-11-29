import type { App } from 'vue';
import _IconFileCabinet from './icon-file-cabinet.vue';

const IconFileCabinet = Object.assign(_IconFileCabinet, {
  install: (app: App) => {
    app.component(_IconFileCabinet.name, _IconFileCabinet);
  }
});

export default IconFileCabinet;