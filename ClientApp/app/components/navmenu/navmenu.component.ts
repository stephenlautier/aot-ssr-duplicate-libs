import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from "@angular/common";
import { AppInfoService } from '@odin/ngx.core';


@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {

    appName: string = "";
    isSSR: string;

    constructor(
        private appInfo: AppInfoService,
        @Inject(PLATFORM_ID) platformId: Object
    ) {
        this.appName = this.appInfo.name;
        this.isSSR = `${this.appInfo.isSSR}-x`;
        // this.isSSR = isPlatformServer(platformId);
    }

}