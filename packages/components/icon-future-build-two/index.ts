import type { App } from 'vue';
import _IconFutureBuildTwo from './icon-future-build-two.vue';

const IconFutureBuildTwo = Object.assign(_IconFutureBuildTwo, {
  install: (app: App) => {
    app.component(_IconFutureBuildTwo.name, _IconFutureBuildTwo);
  }
});

export default IconFutureBuildTwo;