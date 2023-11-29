import type { App } from 'vue';
import _IconPureNatural from './icon-pure-natural.vue';

const IconPureNatural = Object.assign(_IconPureNatural, {
  install: (app: App) => {
    app.component(_IconPureNatural.name, _IconPureNatural);
  }
});

export default IconPureNatural;