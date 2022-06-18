import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';



@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent
  ],
  exports: [
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class ComponentsModule { }
