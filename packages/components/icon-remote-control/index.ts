import type { App } from 'vue';
import _IconRemoteControl from './icon-remote-control.vue';

const IconRemoteControl = Object.assign(_IconRemoteControl, {
  install: (app: App) => {
    app.component(_IconRemoteControl.name, _IconRemoteControl);
  }
});

export default IconRemoteControl;