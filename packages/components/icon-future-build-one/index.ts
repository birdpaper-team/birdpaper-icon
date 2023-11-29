import type { App } from 'vue';
import _IconFutureBuildOne from './icon-future-build-one.vue';

const IconFutureBuildOne = Object.assign(_IconFutureBuildOne, {
  install: (app: App) => {
    app.component(_IconFutureBuildOne.name, _IconFutureBuildOne);
  }
});

export default IconFutureBuildOne;