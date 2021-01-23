import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { UsersComponent } from './components/users/users.component';
import { UsersCardComponent } from './components/shared/users-card/users-card.component';
import { UsersDetailComponent } from './components/users-detail/users-detail.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    UsersComponent,
    UsersCardComponent,
    UsersDetailComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
