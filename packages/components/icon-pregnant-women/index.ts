import type { App } from 'vue';
import _IconPregnantWomen from './icon-pregnant-women.vue';

const IconPregnantWomen = Object.assign(_IconPregnantWomen, {
  install: (app: App) => {
    app.component(_IconPregnantWomen.name, _IconPregnantWomen);
  }
});

export default IconPregnantWomen;