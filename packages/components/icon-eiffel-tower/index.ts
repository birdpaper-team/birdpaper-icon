import type { App } from 'vue';
import _IconEiffelTower from './icon-eiffel-tower.vue';

const IconEiffelTower = Object.assign(_IconEiffelTower, {
  install: (app: App) => {
    app.component(_IconEiffelTower.name, _IconEiffelTower);
  }
});

export default IconEiffelTower;