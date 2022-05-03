import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiServiceService } from './api-service.service';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceModule } from './service/service.module';
import { AuthGuard } from './auth/auth.guard';
import { MultistepFormComponent } from './multistep-form/multistep-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PagenotfoundComponent,
    MultistepFormComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    ServiceModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    AccordionModule.forRoot(),
    HttpClientModule,
  ],
  providers: [ApiServiceService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }