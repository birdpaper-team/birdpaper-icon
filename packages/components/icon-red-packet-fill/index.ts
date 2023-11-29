import type { App } from 'vue';
import _IconRedPacketFill from './icon-red-packet-fill.vue';

const IconRedPacketFill = Object.assign(_IconRedPacketFill, {
  install: (app: App) => {
    app.component(_IconRedPacketFill.name, _IconRedPacketFill);
  }
});

export default IconRedPacketFill;