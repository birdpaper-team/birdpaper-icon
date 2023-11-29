import type { App } from 'vue';
import _IconVideocameraOne from './icon-videocamera-one.vue';

const IconVideocameraOne = Object.assign(_IconVideocameraOne, {
  install: (app: App) => {
    app.component(_IconVideocameraOne.name, _IconVideocameraOne);
  }
});

export default IconVideocameraOne;