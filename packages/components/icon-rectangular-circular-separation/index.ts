import type { App } from 'vue';
import _IconRectangularCircularSeparation from './icon-rectangular-circular-separation.vue';

const IconRectangularCircularSeparation = Object.assign(_IconRectangularCircularSeparation, {
  install: (app: App) => {
    app.component(_IconRectangularCircularSeparation.name, _IconRectangularCircularSeparation);
  }
});

export default IconRectangularCircularSeparation;