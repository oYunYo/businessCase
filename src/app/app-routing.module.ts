import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VoitureComponent } from './components/voiture/voiture.component';
import { AddVoitureComponent } from './components/add-voiture/add-voiture.component';
import { VoitureDetailComponent } from './components/voiture-detail/voiture-detail.component';
import { EditVoitureComponent } from './components/edit-voiture/edit-voiture.component';
import { MentionsLegalesComponent } from './components/mentions-legales/mentions-legales.component';
import { GarantiesComponent } from './components/garanties/garanties.component';
import { CguComponent } from './components/cgu/cgu.component';
import { PolitiquesDeConfidentialiteComponent } from './components/politiques-de-confidentialite/politiques-de-confidentialite.component';
import { AideComponent } from './components/aide/aide.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'voitures', component: VoitureComponent},
  {path: 'voitures/add', component: AddVoitureComponent},
  {path: 'voitures/:id', component: VoitureDetailComponent},
  {path: 'voitures/edit/:id', component: EditVoitureComponent},
  {path: 'mentions-legales', component: MentionsLegalesComponent},
  {path: 'garanties', component: GarantiesComponent},
  {path: 'cgu', component: CguComponent},
  {path: 'politiques-de-confidentialite', component: PolitiquesDeConfidentialiteComponent},
  {path: 'besoin-d-aide', component: AideComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
