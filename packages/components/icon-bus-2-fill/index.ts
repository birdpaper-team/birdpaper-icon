import type { App } from 'vue';
import _IconBus2Fill from './icon-bus-2-fill.vue';

const IconBus2Fill = Object.assign(_IconBus2Fill, {
  install: (app: App) => {
    app.component(_IconBus2Fill.name, _IconBus2Fill);
  }
});

export default IconBus2Fill;