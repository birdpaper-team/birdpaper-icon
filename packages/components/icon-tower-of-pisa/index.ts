import type { App } from 'vue';
import _IconTowerOfPisa from './icon-tower-of-pisa.vue';

const IconTowerOfPisa = Object.assign(_IconTowerOfPisa, {
  install: (app: App) => {
    app.component(_IconTowerOfPisa.name, _IconTowerOfPisa);
  }
});

export default IconTowerOfPisa;