import {ModuleWithProviders} from '@angular/core'
import {Routes,RouterModule} from '@angular/router'

//Import the components that will be routed
import {AppComponent} from '../app.component';
import {HomeComponent} from '../home/home.component';
import {TempComponent} from '../temperatura/temperatura.component';
import {NivelComponent} from '../nivel/nivel.component';
import {InfoComponent} from '../informacoes/informacoes.component';


export const router: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path:'home', component: HomeComponent},
    {path: 'temperatura', component: TempComponent},
    {path: 'nivel', component: NivelComponent},
    {path: 'informacoes', component: InfoComponent}
];


export const routes: ModuleWithProviders = RouterModule.forRoot(router);