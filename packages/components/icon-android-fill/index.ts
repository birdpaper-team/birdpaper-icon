import type { App } from 'vue';
import _IconAndroidFill from './icon-android-fill.vue';

const IconAndroidFill = Object.assign(_IconAndroidFill, {
  install: (app: App) => {
    app.component(_IconAndroidFill.name, _IconAndroidFill);
  }
});

export default IconAndroidFill;