import type { App } from 'vue';
import _IconEditor from './icon-editor.vue';

const IconEditor = Object.assign(_IconEditor, {
  install: (app: App) => {
    app.component(_IconEditor.name, _IconEditor);
  }
});

export default IconEditor;