import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})



export class ProjectsComponent implements OnInit {
  projects: { Title: string, Description: string }[];
  projectIndex: number;
  constructor() {
    const jsonString = "[{ \"Title\": \"Study Android Application\", \"Description\": \"This project was completed during my final semester at Farmingdale State College, and was my first foray into android development. While I wasn't satisfied with the end result, I am glad that the team I worked with decided to take on a challenging project. The project Not only forced me to research unfamiliar technologies, but introduced me to software development in a team setting. Those two pointsalone helped prepare me for my employment at Geico.\" }, { \"Title\": \"LIRR Application\", \"Description\": \"My first experience with C# and the .NET framework was through this project worked on during my studies. Utilizing a WPF GUI with multiple tabs and containing several list views, the application allowed a user to deserialize a JSON object containing information relating to long island rail road stations. Once the object was read and stored in an ADO.NET local database, the list views would be populated with data from that database. When a user clicked on a specific station, information such as the location, name, description, and a picture of the station would be shown.\" }]";
    this.projects = JSON.parse(jsonString);

  }
  ngOnInit() {
    this.projectIndex = 0;
  }
  onClickToNextProject() {
    this.projectIndex = (this.projectIndex + 1) % this.projects.length;
  }
}
