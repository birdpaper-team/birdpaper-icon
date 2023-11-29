import type { App } from 'vue';
import _IconBroadcastLine from './icon-broadcast-line.vue';

const IconBroadcastLine = Object.assign(_IconBroadcastLine, {
  install: (app: App) => {
    app.component(_IconBroadcastLine.name, _IconBroadcastLine);
  }
});

export default IconBroadcastLine;