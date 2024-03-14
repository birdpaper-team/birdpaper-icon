import type { App } from 'vue';
import _IconHeading2 from './icon-heading-2.vue';

const IconHeading2 = Object.assign(_IconHeading2, {
  install: (app: App) => {
    app.component(_IconHeading2.name, _IconHeading2);
  }
});

export default IconHeading2;