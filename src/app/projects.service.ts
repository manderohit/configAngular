import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  environmentName = '';
  environmentUrl = 'Debug api';
 
  constructor(private httpc:HttpClient) { 
    this.environmentName = environment.environmentName;
    this.environmentUrl = environment.apiUrl;
  }

 getProjects(): Observable<any>{
    return this.httpc.get(this.environmentUrl);
  }

}