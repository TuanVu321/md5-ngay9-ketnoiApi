import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BlogComponent} from './blog/blog.component';
import {BlogEditComponent} from './blog-edit/blog-edit.component';
import {BlogDetailComponent} from './blog-detail/blog-detail.component';
import {ReactiveFormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogEditComponent,
    BlogDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
