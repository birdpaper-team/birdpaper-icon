import type { App } from 'vue';
import _IconRemoteControlLine from './icon-remote-control-line.vue';

const IconRemoteControlLine = Object.assign(_IconRemoteControlLine, {
  install: (app: App) => {
    app.component(_IconRemoteControlLine.name, _IconRemoteControlLine);
  }
});

export default IconRemoteControlLine;