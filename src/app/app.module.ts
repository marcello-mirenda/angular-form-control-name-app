import { BrowserModule } from '@angular/platform-browser';
import { NgModule, WrappedValue } from '@angular/core';
import { ReactiveFormsModule, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { BootstrapFormControlNameDirective } from './bootstrap-form-control-name.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProfileEditorComponent,
    BootstrapFormControlNameDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
