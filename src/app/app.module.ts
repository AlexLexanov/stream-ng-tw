import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MenuComponent } from './components/nav/menu/menu.component';

// Services
import { LoaderInterceptor } from '../app/services/interceptor.service';
import { SectionComponent } from './components/categories/section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    NavComponent,
    MenuComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [Title, {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {}
