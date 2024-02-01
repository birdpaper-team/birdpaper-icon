import type { App } from 'vue';
import _IconExchange2Line from './icon-exchange-2-line.vue';

const IconExchange2Line = Object.assign(_IconExchange2Line, {
  install: (app: App) => {
    app.component(_IconExchange2Line.name, _IconExchange2Line);
  }
});

export default IconExchange2Line;