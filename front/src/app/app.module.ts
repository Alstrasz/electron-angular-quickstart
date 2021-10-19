import { NgModule } from '@angular/core';
import { BrowserModule, TransferState } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { AppRoutingModule } from './app-routing.module';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateUniversalLoaderService } from "./translate-universal-loader.service";
import { isPlatformServer } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
        defaultLanguage: "en",
        loader: {
            provide: TranslateLoader,
            useClass: TranslateUniversalLoaderService
          }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
