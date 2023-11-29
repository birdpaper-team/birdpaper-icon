import type { App } from 'vue';
import _IconLatticePattern from './icon-lattice-pattern.vue';

const IconLatticePattern = Object.assign(_IconLatticePattern, {
  install: (app: App) => {
    app.component(_IconLatticePattern.name, _IconLatticePattern);
  }
});

export default IconLatticePattern;