import type { App } from 'vue';
import _IconHeadset from './icon-headset.vue';

const IconHeadset = Object.assign(_IconHeadset, {
  install: (app: App) => {
    app.component(_IconHeadset.name, _IconHeadset);
  }
});

export default IconHeadset;