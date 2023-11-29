import type { App } from 'vue';
import _IconSleepOne from './icon-sleep-one.vue';

const IconSleepOne = Object.assign(_IconSleepOne, {
  install: (app: App) => {
    app.component(_IconSleepOne.name, _IconSleepOne);
  }
});

export default IconSleepOne;