import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ipcRenderer } from 'electron'

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

    constructor( private translate: TranslateService ) {
        // test communictaion between frontend and backend
        ipcRenderer.on("pong", ( event, n ) => {
            console.log("pong", n);
            setTimeout(() => {
                ipcRenderer.send("ping", n + 1);
            }, 1000);
        });
        ipcRenderer.send("ping", 0);
        
    }

    ngOnInit(): void {
    }

    change_locale() {
        this.translate.use( this.translate.currentLang == "en" ? "ru" : "en" );
    }
}
