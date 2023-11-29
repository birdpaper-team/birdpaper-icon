import type { App } from 'vue';
import _IconDossierLine from './icon-dossier-line.vue';

const IconDossierLine = Object.assign(_IconDossierLine, {
  install: (app: App) => {
    app.component(_IconDossierLine.name, _IconDossierLine);
  }
});

export default IconDossierLine;