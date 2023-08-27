import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pageone',
  templateUrl: './pageone.component.html',
  styleUrls: ['./pageone.component.css']
})
export class PageoneComponent implements OnInit {
  textValue = '';
  env: string = "dev";
  currentTime: string = new Date().toISOString();
  service: string = 'service1'

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  handleClick(): void {
    this.currentTime = new Date().toISOString(); // Set the current UTC time
    this.http.post('http://localhost:3000/data', JSON.parse(this.textValue)).subscribe(data => {
      console.log(data);
    });

  }

  handleEnvClick() {
    this.currentTime = new Date().toISOString(); // Set the current UTC time    
  }
}