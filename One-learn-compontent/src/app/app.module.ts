import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgModelComponent } from './ng-model/ng-model.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { PipeComponent } from './pipe/pipe.component';
import { SafeNavComponent } from './safe-nav/safe-nav.component';
import { TwoWayBindComponent } from './two-way-bind/two-way-bind.component';
import { ValueBindComponent } from './value-bind/value-bind.component';
import { FontResizerComponent } from './two-way-bind/font-resizer/font-resizer.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    EventBindComponent,
    NgClassComponent,
    NgForComponent,
    NgIfComponent,
    NgModelComponent,
    NgStyleComponent,
    NgSwitchComponent,
    PipeComponent,
    SafeNavComponent,
    TwoWayBindComponent,
    ValueBindComponent,
    FontResizerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
