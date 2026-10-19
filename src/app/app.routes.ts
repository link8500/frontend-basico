import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { BibliografiaComponent } from './bibliografia/bibliografia.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactosComponent } from './contactos/contactos.component';

export const routes: Routes = [
    {path:"index",component:IndexComponent,children:[
        {path:"Bibliografia",component:BibliografiaComponent},
        {path:"Habilidades",component:HabilidadesComponent},
        {path:"Proyectos",component:ProyectosComponent},
        {path:"Contactos",component:ContactosComponent}
    ]},
    {path:"",redirectTo:"/index/Bibliografia",pathMatch:'full'},
    {path:"**",redirectTo:"/index/Bibliografia",pathMatch:'full'}
];
