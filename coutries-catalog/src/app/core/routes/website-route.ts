import { Routes } from "@angular/router";

export const WebsiteRoute: Routes = [
    { path: "en", loadChildren:() => import("../../pages/webpages/webpages.module").then(m=>m.WebpagesModule) },
];
