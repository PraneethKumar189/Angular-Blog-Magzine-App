import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
interface Category {
  name: string,
  code: string
}
@Component({
  selector: 'app-writeblog',
  standalone: true,
  imports: [NavBarComponent,MultiSelectModule,InputTextareaModule,InputTextModule],
  templateUrl: './writeblog.component.html',
  styleUrl: './writeblog.component.css'
})

export class WriteblogComponent implements OnInit {
  categories!:Category[];
  ngOnInit(): void {
    this.categories=[
      {
        name:'Science',
        code:'SC'
      },
      {
        name:'Travel',
        code:'TL'
      },
      {
        name:'Sports',
        code:'SP'
      },
      {
        name:'Literature',
        code:'LT'
      }


    ]
  }


}
