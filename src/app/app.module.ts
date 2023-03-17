import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SidebarBoxComponent } from './components/sidebar-box/sidebar-box.component';
import { IsOldEnoughSimplePipe } from './pipes/is-old-enough-simple/is-old-enough-simple.pipe';
import { IsOldEnoughPipe } from './pipes/is-old-enough/is-old-enough.pipe';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule],
  declarations: [
    AppComponent,
    SidebarBoxComponent,
    IsOldEnoughPipe,
    IsOldEnoughSimplePipe,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
