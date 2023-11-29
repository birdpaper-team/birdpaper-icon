import type { App } from 'vue';
import _IconPingPongLine from './icon-ping-pong-line.vue';

const IconPingPongLine = Object.assign(_IconPingPongLine, {
  install: (app: App) => {
    app.component(_IconPingPongLine.name, _IconPingPongLine);
  }
});

export default IconPingPongLine;