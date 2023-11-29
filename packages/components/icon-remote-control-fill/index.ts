import type { App } from 'vue';
import _IconRemoteControlFill from './icon-remote-control-fill.vue';

const IconRemoteControlFill = Object.assign(_IconRemoteControlFill, {
  install: (app: App) => {
    app.component(_IconRemoteControlFill.name, _IconRemoteControlFill);
  }
});

export default IconRemoteControlFill;