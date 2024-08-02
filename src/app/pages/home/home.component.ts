import { Component } from '@angular/core';
import { LoaderComponent } from "../../components/loader/loader.component";
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, CommonModule, LoaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  loaderOn = false;
  constructor(private http: HttpClient) { } 
}
