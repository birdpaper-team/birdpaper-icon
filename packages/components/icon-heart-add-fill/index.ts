import type { App } from 'vue';
import _IconHeartAddFill from './icon-heart-add-fill.vue';

const IconHeartAddFill = Object.assign(_IconHeartAddFill, {
  install: (app: App) => {
    app.component(_IconHeartAddFill.name, _IconHeartAddFill);
  }
});

export default IconHeartAddFill;