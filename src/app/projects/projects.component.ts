import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  li:any;
  lis=[];
  environmentName: string;
  
  constructor(private projectsData: ProjectsService) {
    this.environmentName = environment.environmentName;

   }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.projectsData.getProjects().
    subscribe(
      Response => {
       
      console.log(Response)
      this.li=Response;
      this.lis=this.li.list;
      },
      err => console.log(err),
      () => console.log('complete')
    )
  }  

}
