import type { App } from 'vue';
import _IconSpikedshoes from './icon-spikedshoes.vue';

const IconSpikedshoes = Object.assign(_IconSpikedshoes, {
  install: (app: App) => {
    app.component(_IconSpikedshoes.name, _IconSpikedshoes);
  }
});

export default IconSpikedshoes;