import type { App } from 'vue';
import _IconP2pLine from './icon-p2p-line.vue';

const IconP2pLine = Object.assign(_IconP2pLine, {
  install: (app: App) => {
    app.component(_IconP2pLine.name, _IconP2pLine);
  }
});

export default IconP2pLine;