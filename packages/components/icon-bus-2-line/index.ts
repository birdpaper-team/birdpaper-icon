import type { App } from 'vue';
import _IconBus2Line from './icon-bus-2-line.vue';

const IconBus2Line = Object.assign(_IconBus2Line, {
  install: (app: App) => {
    app.component(_IconBus2Line.name, _IconBus2Line);
  }
});

export default IconBus2Line;