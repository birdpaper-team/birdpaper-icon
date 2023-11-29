import type { App } from 'vue';
import _IconAfferentThree from './icon-afferent-three.vue';

const IconAfferentThree = Object.assign(_IconAfferentThree, {
  install: (app: App) => {
    app.component(_IconAfferentThree.name, _IconAfferentThree);
  }
});

export default IconAfferentThree;