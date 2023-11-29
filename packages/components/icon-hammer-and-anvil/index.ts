import type { App } from 'vue';
import _IconHammerAndAnvil from './icon-hammer-and-anvil.vue';

const IconHammerAndAnvil = Object.assign(_IconHammerAndAnvil, {
  install: (app: App) => {
    app.component(_IconHammerAndAnvil.name, _IconHammerAndAnvil);
  }
});

export default IconHammerAndAnvil;