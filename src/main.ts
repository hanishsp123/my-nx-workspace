import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './recipe-whiz/app/app.config';
import { AppComponent } from './recipe-whiz/app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
