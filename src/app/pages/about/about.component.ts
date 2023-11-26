import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  src = 'https://source.unsplash.com/ramdom';
  url = 'https://api.kanye.rest/';
  mensaje='';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    //primera linea
    console.log("INICIO")
    fetch(this.url)
  .then(response => response.json())
  .then(data => {
    this.mensaje=data.quote;
  })
  .catch(err => console.error(err));
  console.log("FINAL");
  //fin de oninit

  this.http.get(this.url).subscribe((Response)=>{
      console.log(Response)

    })
  }

}