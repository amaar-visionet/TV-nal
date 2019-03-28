import { CommonModule } from '@angular/common';
import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { fwcAPIInterceptor  } from './interceptors/httpconfig.interceptor';


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule
    ],
    declarations: [AppComponent],
    providers: [
        AuthGuard,
            {
                provide: HTTP_INTERCEPTORS,
                useClass: fwcAPIInterceptor,
                multi: true
            }
      ],
    bootstrap: [AppComponent]
})
export class AppModule {}
