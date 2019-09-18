import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { SplitComponent } from './split/split.component';
import { UploadComponent } from './upload/upload.component';

const mainroutes: Routes = [
	{
		path: '', redirectTo: 'home', pathMatch: 'full'
	},
	{
		path: 'home',
		component : HomeComponent
	},
	{
		path: 'split',
		component : SplitComponent
	},
	{
		path: 'form',
		component : FormComponent
	},
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    SplitComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(mainroutes,{
    	useHash: true,
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
