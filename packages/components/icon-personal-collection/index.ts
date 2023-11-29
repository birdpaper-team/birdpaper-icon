import type { App } from 'vue';
import _IconPersonalCollection from './icon-personal-collection.vue';

const IconPersonalCollection = Object.assign(_IconPersonalCollection, {
  install: (app: App) => {
    app.component(_IconPersonalCollection.name, _IconPersonalCollection);
  }
});

export default IconPersonalCollection;