import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./views/main/main.component";
import { LoginComponent } from "./views/login/login.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/main",
    pathMatch: "full",
  },
  {
    path: "main",
    component: MainComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
