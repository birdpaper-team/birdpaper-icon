import type { App } from 'vue';
import _IconSendPlane2Fill from './icon-send-plane-2-fill.vue';

const IconSendPlane2Fill = Object.assign(_IconSendPlane2Fill, {
  install: (app: App) => {
    app.component(_IconSendPlane2Fill.name, _IconSendPlane2Fill);
  }
});

export default IconSendPlane2Fill;