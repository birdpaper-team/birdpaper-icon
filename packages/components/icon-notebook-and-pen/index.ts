import type { App } from 'vue';
import _IconNotebookAndPen from './icon-notebook-and-pen.vue';

const IconNotebookAndPen = Object.assign(_IconNotebookAndPen, {
  install: (app: App) => {
    app.component(_IconNotebookAndPen.name, _IconNotebookAndPen);
  }
});

export default IconNotebookAndPen;