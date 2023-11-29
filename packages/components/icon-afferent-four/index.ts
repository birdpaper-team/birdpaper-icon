import type { App } from 'vue';
import _IconAfferentFour from './icon-afferent-four.vue';

const IconAfferentFour = Object.assign(_IconAfferentFour, {
  install: (app: App) => {
    app.component(_IconAfferentFour.name, _IconAfferentFour);
  }
});

export default IconAfferentFour;