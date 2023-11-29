import type { App } from 'vue';
import _IconHeartBallon from './icon-heart-ballon.vue';

const IconHeartBallon = Object.assign(_IconHeartBallon, {
  install: (app: App) => {
    app.component(_IconHeartBallon.name, _IconHeartBallon);
  }
});

export default IconHeartBallon;