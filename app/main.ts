import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

// //for AoT.. smaller applcations
// import { platformBrowser } from '@angular/platform-browser';
// import { AppModuleNgFactory } from './app.module.ngfactory';
//
// platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
