import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root/root.component';

const routes: Routes = [
  { path: '', redirectTo: 'boas-vindas', pathMatch: 'full' },
  { path: 'boas-vindas', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  {
    path: '',
    component: RootComponent,
    children: [
      { path: 'alunos', loadChildren: () => import('./pages/students/students.module').then(m => m.StudentsModule) }
    ]
  },
  { path: '**', redirectTo: 'alunos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
