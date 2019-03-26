import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormQLModule } from '@formql/core';
import { FormQLEditorModule } from '@formql/editor';
import { FormQLMaterialModule } from '@formql/material'
import { HttpClientModule } from '@angular/common/http';
import { TextMaskModule } from 'angular2-text-mask';

import { DummyService } from './app-service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppFormQLComponent } from './app-formql.component';
import { AppFormQLEditorComponent } from './app-formql-editor.component';


@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, FormQLModule, HttpClientModule,
                FormQLEditorModule, TextMaskModule, FormQLMaterialModule ],
  declarations: [ AppComponent, AppFormQLComponent, AppFormQLEditorComponent ],
  providers:    [ DummyService, {provide: "FormQLService", useClass: DummyService }],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
