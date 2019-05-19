import { BrowserModule } from '@angular/platform-browser'
import { NgModule, Component } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'
import { ApiService } from './api.service'
import { AuthService } from './auth.service'
import { AuthInterceptorService } from './authInterceptor.service'

const routes = [
  { path: 'demo', loadChildren: './demo/demo.module#DemoModule' },
  { path: '**', redirectTo: 'demo' }
]

@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  ],
  providers: [ApiService, AuthService, { 
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
   }],
  bootstrap: [AppComponent]
})
export class AppModule { }
