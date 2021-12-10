import { AboutComponent } from './views/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { BlogsComponent } from './views/blogs/blogs.component';
import { ContactComponent } from './views/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'nosotros',
    component: AboutComponent,
  },
  {
    path: 'proyectos',
    component: ProjectsComponent,
  },
  {
    path: 'blogs',
    component: BlogsComponent,
  },
  {
    path: 'contacto',
    component: ContactComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
