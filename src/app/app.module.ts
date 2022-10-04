import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SidebarBoxComponent } from './components/sidebar-box/sidebar-box.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule],
  declarations: [AppComponent, SidebarBoxComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
