import type { App } from 'vue';
import _IconPingPongFill from './icon-ping-pong-fill.vue';

const IconPingPongFill = Object.assign(_IconPingPongFill, {
  install: (app: App) => {
    app.component(_IconPingPongFill.name, _IconPingPongFill);
  }
});

export default IconPingPongFill;