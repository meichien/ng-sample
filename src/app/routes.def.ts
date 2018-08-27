import { DashbordComponent } from './page/dashbord/dashbord.component';
import { Routes } from '@angular/router';
// import { InstructionComponent } from './instruction/instruction.component';
// import { UiComponent } from './ui/ui.component';
// import { UseJqueryComponent } from './jquery/use-jquery.component';
// import { HttpComponent } from './http/http.component';
// import { BlankComponent } from './page/blank/blank.component';

// 定議要路由的頁面，會在一開始全部載入。實務上使用loadChildren延遲載入。也可以路由裡面再有自己的路由。
const routesDef: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: DashbordComponent },
    // { path: 'ui', component: UiComponent },
    // { path: 'jquery', component: UseJqueryComponent },
    // { path: 'http', component: HttpComponent },
    // { path: 'blank', component: BlankComponent },
    // { path: 'home', component: HomeComponent },
    { path: '**', component: DashbordComponent }, // PageNotFoundComponent

];

export { routesDef };
