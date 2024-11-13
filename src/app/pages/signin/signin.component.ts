import { NgClass } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import {FormsModule} from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FloatLabelModule,FormsModule,InputTextModule,CalendarModule,ButtonModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
showIcon:boolean=true;
date:Date | undefined;
center:string='center';
}
