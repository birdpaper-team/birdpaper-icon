import type { App } from 'vue';
import _IconRedPacketLine from './icon-red-packet-line.vue';

const IconRedPacketLine = Object.assign(_IconRedPacketLine, {
  install: (app: App) => {
    app.component(_IconRedPacketLine.name, _IconRedPacketLine);
  }
});

export default IconRedPacketLine;