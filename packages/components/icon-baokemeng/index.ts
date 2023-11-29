import type { App } from 'vue';
import _IconBaokemeng from './icon-baokemeng.vue';

const IconBaokemeng = Object.assign(_IconBaokemeng, {
  install: (app: App) => {
    app.component(_IconBaokemeng.name, _IconBaokemeng);
  }
});

export default IconBaokemeng;