import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { SubmitComplaintComponent } from './submit-complaint/submit-complaint.component';


const routes: Routes = [

    { path: '', component: SplashComponent },
    { path: 'new', component: SubmitComplaintComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
