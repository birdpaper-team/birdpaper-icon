import type { App } from 'vue';
import _IconGoStart from './icon-go-start.vue';

const IconGoStart = Object.assign(_IconGoStart, {
  install: (app: App) => {
    app.component(_IconGoStart.name, _IconGoStart);
  }
});

export default IconGoStart;