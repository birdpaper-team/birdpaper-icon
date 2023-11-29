import type { App } from 'vue';
import _IconFutureBuildThree from './icon-future-build-three.vue';

const IconFutureBuildThree = Object.assign(_IconFutureBuildThree, {
  install: (app: App) => {
    app.component(_IconFutureBuildThree.name, _IconFutureBuildThree);
  }
});

export default IconFutureBuildThree;