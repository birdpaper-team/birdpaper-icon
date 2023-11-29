import type { App } from 'vue';
import _IconAndroid from './icon-android.vue';

const IconAndroid = Object.assign(_IconAndroid, {
  install: (app: App) => {
    app.component(_IconAndroid.name, _IconAndroid);
  }
});

export default IconAndroid;