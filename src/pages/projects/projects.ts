import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpData } from '../../providers/http-data';
import { ProjectDetailPage } from './project-detail/project-detail';

@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {

  projectsList: any[];

  constructor(
    public navCtrl: NavController,
    public httpData: HttpData,
  ) {
    this.httpData.getProjects().subscribe((projectsList: any[]) => {
      this.projectsList = projectsList;
    });
  }

  ionViewDidLoad() {
    console.log("this is project page")
  }

  openProject(project: any) {
    this.navCtrl.push(ProjectDetailPage, { projectTitle: project.title });
  }


}
