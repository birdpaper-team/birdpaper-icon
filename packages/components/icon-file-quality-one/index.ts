import type { App } from 'vue';
import _IconFileQualityOne from './icon-file-quality-one.vue';

const IconFileQualityOne = Object.assign(_IconFileQualityOne, {
  install: (app: App) => {
    app.component(_IconFileQualityOne.name, _IconFileQualityOne);
  }
});

export default IconFileQualityOne;