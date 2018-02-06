import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { ContentComponent } from './content/content.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SlideshowComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class MenuModule { }
export class SlideshowModule { }
export class ContenthowModule { }