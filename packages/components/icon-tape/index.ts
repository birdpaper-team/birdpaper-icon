import type { App } from 'vue';
import _IconTape from './icon-tape.vue';

const IconTape = Object.assign(_IconTape, {
  install: (app: App) => {
    app.component(_IconTape.name, _IconTape);
  }
});

export default IconTape;