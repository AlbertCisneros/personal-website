// import { UIParagraph } from './shared/components/ui-paragraph/ui-paragraph.component';
import { SharedModule } from './shared/shared.module';
import { ViewHomeComponent } from './views/view-home/view-home.component';
import { UIFooterComponent } from './components/ui-footer/ui-footer.component';
import { UIAboutMeComponent } from './components/ui-about-me/ui-about-me.component';
import { UIAboutJobComponent } from './components/ui-about-job/ui-about-job.component';
import { UIAboutHomeComponent } from './components/ui-about-home/ui-about-home.component';
import { UIAboutExperienceComponent } from './components/ui-about-experience/ui-about-experience.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { UIParagraph } from "lamc-components/dist/components/ui-paragraph";

@NgModule({
  declarations: [
    AppComponent,
    UIAboutExperienceComponent,
    UIAboutHomeComponent,
    UIAboutJobComponent,
    UIAboutMeComponent,
    UIFooterComponent,
    ViewHomeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
