import type { App } from 'vue';
import _IconMemoryCardOne from './icon-memory-card-one.vue';

const IconMemoryCardOne = Object.assign(_IconMemoryCardOne, {
  install: (app: App) => {
    app.component(_IconMemoryCardOne.name, _IconMemoryCardOne);
  }
});

export default IconMemoryCardOne;