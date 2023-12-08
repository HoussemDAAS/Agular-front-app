import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlatsComponent } from './plats/plats.component';
import { AddPlatComponent } from './add-plat/add-plat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { UpdatePlatComponent } from './update-plat/update-plat.component';
import { RechercheParMenuComponent } from './recherche-par-menu/recherche-par-menu.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ListeMenuComponent } from './liste-menu/liste-menu.component';
import { UpdateMenuComponent } from './update-menu/update-menu.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { TokenInterceptor } from './services/token.interceptor';
import { RegisterComponent } from './register/register.component';
import { VerifEmailComponent } from './verif-email/verif-email.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PlatsComponent,
    AddPlatComponent,
    UpdatePlatComponent,
    RechercheParMenuComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeMenuComponent,
    UpdateMenuComponent,
    LoginComponent,
    ForbiddenComponent,
    RegisterComponent,
    VerifEmailComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
ToastrModule.forRoot(),
  ],
  providers: [{ provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptor,
    multi : true}
     ],
  bootstrap: [AppComponent]
})
export class AppModule { }
