import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, Http } from '@angular/http';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { SessionService } from './services/session';

import { CapitalizePipe } from './pipes/capitalize';
import { TrimPipe } from './pipes/trim';

// https://angular.io/styleguide#!#04-10
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2BootstrapModule,
  ],
  providers: [
    SessionService
  ],
  declarations: [
    TrimPipe,
    CapitalizePipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    Ng2BootstrapModule,

    TrimPipe,
    CapitalizePipe
  ]
})
export class SharedModule {}
