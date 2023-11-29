import type { App } from 'vue';
import _IconStamp from './icon-stamp.vue';

const IconStamp = Object.assign(_IconStamp, {
  install: (app: App) => {
    app.component(_IconStamp.name, _IconStamp);
  }
});

export default IconStamp;