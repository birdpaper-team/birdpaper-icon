import type { App } from 'vue';
import _IconGoAhead from './icon-go-ahead.vue';

const IconGoAhead = Object.assign(_IconGoAhead, {
  install: (app: App) => {
    app.component(_IconGoAhead.name, _IconGoAhead);
  }
});

export default IconGoAhead;