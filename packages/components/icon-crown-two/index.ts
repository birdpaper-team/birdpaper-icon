import type { App } from 'vue';
import _IconCrownTwo from './icon-crown-two.vue';

const IconCrownTwo = Object.assign(_IconCrownTwo, {
  install: (app: App) => {
    app.component(_IconCrownTwo.name, _IconCrownTwo);
  }
});

export default IconCrownTwo;