import type { App } from 'vue';
import _IconFirstAidKit from './icon-first-aid-kit.vue';

const IconFirstAidKit = Object.assign(_IconFirstAidKit, {
  install: (app: App) => {
    app.component(_IconFirstAidKit.name, _IconFirstAidKit);
  }
});

export default IconFirstAidKit;