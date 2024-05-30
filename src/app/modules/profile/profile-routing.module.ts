import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProfileComponent } from './profile.component';
import { ConnectionsComponent } from './connections/connections.component';
import { MisCursosComponent } from './mis-cursos/mis-cursos.component';
import { MisNotasComponent } from './mis-notas/mis-notas.component';
import { MisCertificadosComponent } from './mis-certificados/mis-certificados.component';
const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: 'mis-cursos',
        component: MisCursosComponent,
      },
      {
        path: 'mis-notas',
        component: MisNotasComponent,
      },
      {
        path: 'mis-certificados',
        component: MisCertificadosComponent,
      },
      {
        path: 'overview',
        component: OverviewComponent,
      },
      {
        path: 'projects',
        component: ProjectsComponent,
      },
      {
        path: 'campaigns',
        component: CampaignsComponent,
      },
      {
        path: 'documents',
        component: DocumentsComponent,
      },
      {
        path: 'connections',
        component: ConnectionsComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule { }
