import type { App } from 'vue';
import _IconShuffleOne from './icon-shuffle-one.vue';

const IconShuffleOne = Object.assign(_IconShuffleOne, {
  install: (app: App) => {
    app.component(_IconShuffleOne.name, _IconShuffleOne);
  }
});

export default IconShuffleOne;