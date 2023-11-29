import type { App } from 'vue';
import _IconRemoteControlOne from './icon-remote-control-one.vue';

const IconRemoteControlOne = Object.assign(_IconRemoteControlOne, {
  install: (app: App) => {
    app.component(_IconRemoteControlOne.name, _IconRemoteControlOne);
  }
});

export default IconRemoteControlOne;