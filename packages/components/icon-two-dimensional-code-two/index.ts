import type { App } from 'vue';
import _IconTwoDimensionalCodeTwo from './icon-two-dimensional-code-two.vue';

const IconTwoDimensionalCodeTwo = Object.assign(_IconTwoDimensionalCodeTwo, {
  install: (app: App) => {
    app.component(_IconTwoDimensionalCodeTwo.name, _IconTwoDimensionalCodeTwo);
  }
});

export default IconTwoDimensionalCodeTwo;