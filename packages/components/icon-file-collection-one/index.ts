import type { App } from 'vue';
import _IconFileCollectionOne from './icon-file-collection-one.vue';

const IconFileCollectionOne = Object.assign(_IconFileCollectionOne, {
  install: (app: App) => {
    app.component(_IconFileCollectionOne.name, _IconFileCollectionOne);
  }
});

export default IconFileCollectionOne;