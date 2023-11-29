import type { App } from 'vue';
import _IconRemoteControl2Line from './icon-remote-control-2-line.vue';

const IconRemoteControl2Line = Object.assign(_IconRemoteControl2Line, {
  install: (app: App) => {
    app.component(_IconRemoteControl2Line.name, _IconRemoteControl2Line);
  }
});

export default IconRemoteControl2Line;