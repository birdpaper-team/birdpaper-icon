import type { App } from 'vue';
import _IconLayoutMasonryLine from './icon-layout-masonry-line.vue';

const IconLayoutMasonryLine = Object.assign(_IconLayoutMasonryLine, {
  install: (app: App) => {
    app.component(_IconLayoutMasonryLine.name, _IconLayoutMasonryLine);
  }
});

export default IconLayoutMasonryLine;