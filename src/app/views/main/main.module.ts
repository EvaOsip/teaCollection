import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import {MainComponent} from "./main.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {NgbAccordionModule, NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    NgbAccordionModule,
    NgbCarouselModule,
    CommonModule,
    MainRoutingModule,
    SharedModule,
    RouterModule,
  ],
  exports: [
    MainRoutingModule
  ]
})
export class MainModule { }
