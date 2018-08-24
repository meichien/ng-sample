import { SystemSetting } from './../../../interface/system-setting';
import { UserInformation } from './../../../interface/user-information';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../base/app.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  userInfo: UserInformation;
  languageList = Array<any>();
  systemSetting: SystemSetting;

    constructor(private appService: AppService, private modalService: NgbModal) {
      this.appService.echo('NavbarComponent');
      this.userInfo = appService.getUserInformation();
      this.systemSetting = appService.getSystemSetting();
      this.languageList = [
        {
          Code: 'zh-tw',
          Name: '繁體中文'
        },
        {
          Code: 'en-us',
          Name: 'English'
        },
        {
          Code: 'ja-jp',
          Name: '日本語'
        }
      ];
    }

    ngOnInit() {

    }

    changeLanguage(language: {Code, Name}) {
      // TODO:變更語系存檔
      alert('變更語言: ' + language.Name);
    }

    open(content) {
      this.modalService.open(content, {windowClass: 'message-box', centered: true});
    }

}
