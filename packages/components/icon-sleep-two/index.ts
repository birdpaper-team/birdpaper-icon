import type { App } from 'vue';
import _IconSleepTwo from './icon-sleep-two.vue';

const IconSleepTwo = Object.assign(_IconSleepTwo, {
  install: (app: App) => {
    app.component(_IconSleepTwo.name, _IconSleepTwo);
  }
});

export default IconSleepTwo;