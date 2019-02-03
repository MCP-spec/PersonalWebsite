import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutMeComponent} from '../about-me/about-me.component';
import {ProjectsComponent} from '../projects/projects.component';
import {ResumeComponent} from '../resume/resume.component';
const routes: Routes = [
    {
        path: '',
        component: AboutMeComponent,
    },
    {
        path: 'projects',
        component: ProjectsComponent,
    },
    {
        path: 'resume',
        component: ResumeComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
