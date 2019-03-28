import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OfficePortofolioComponent } from './office-portofolio/office-portofolio.component';
import { OfficePortofolioService } from './office-portofolio/office-portofolio.service';

@NgModule({
  declarations: [
    AppComponent,
    OfficePortofolioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  exports: [],
  providers: [OfficePortofolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
