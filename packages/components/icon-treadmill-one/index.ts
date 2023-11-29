import type { App } from 'vue';
import _IconTreadmillOne from './icon-treadmill-one.vue';

const IconTreadmillOne = Object.assign(_IconTreadmillOne, {
  install: (app: App) => {
    app.component(_IconTreadmillOne.name, _IconTreadmillOne);
  }
});

export default IconTreadmillOne;