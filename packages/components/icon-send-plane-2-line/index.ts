import type { App } from 'vue';
import _IconSendPlane2Line from './icon-send-plane-2-line.vue';

const IconSendPlane2Line = Object.assign(_IconSendPlane2Line, {
  install: (app: App) => {
    app.component(_IconSendPlane2Line.name, _IconSendPlane2Line);
  }
});

export default IconSendPlane2Line;