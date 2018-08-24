import { SystemSetting } from './../interface/system-setting';
import { UserInformation } from './../interface/user-information';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
// import * as $ from 'jquery';
import { environment } from '../../environments/environment';

/**
 *
 * 提供給所有業務功能共通的函式
 * @author Emma Laio
 * @date 2018/07/25
 */
@Injectable({
  providedIn: 'root' //a single, shared instance
})
export class AppService {

  constructor(private http: HttpClient) {
  }

  /**
   * 取得功能清單，包含使用者可用的功能
   */
  getMenu(): Array<any> {
    const menu = [
      {
        GroupName : '功能清單1',
        GroupIcon : 'fa fa-caret-square-o-right',
        Order : 1,
        Children : [
          {
            Name : '首頁',
            Icon : 'fa fa-desktop',
            Path : './home',
            Order : 1,
            Children : []
          },
          {
            Name : 'Pages',
            Icon : 'fa fa-files-o',
            Path : '#',
            Order : 2,
            Children : [
              {
                Name : 'Profile',
                Icon : 'fa fa-user',
                Path : './Pages/pages-profile',
                Order : 2,
                Children : []
              },
              {
                Name : 'Timeline',
                Icon : 'fa fa-clock-o',
                Path : '#',
                Order : 1,
                Children : [
                  {
                    Name : 'Default',
                    Icon : 'fa fa-align-center',
                    Path : './Pages/Timeline/pages-timeline',
                    Order : 1,
                    Children : []
                  },
                  {
                    Name : 'Full Width',
                    Icon : 'fa fa-align-justify',
                    Path : './Pages/Timeline/pages-timeline-simple',
                    Order : 2,
                    Children : []
                  }
                ]
              }
            ]
          },
          {
            Name : '空白頁',
            Icon : 'fa fa-file-o',
            Path : './blank',
            Order : 3,
            Children : []
          }
        ]
      },
      {
        GroupName : '功能清單2',
        GroupIcon : 'fa fa-caret-square-o-right',
        Order : 2,
        Children : []
      }
    ];

    return menu;
  }

  /**
   * 取得使用者資訊(名字、部門、語系、可用系統 等)
   */
  getUserInformation(): UserInformation {
    return {
      EmployeeNo: '98765',
      Name: '王大大',
      DepartmentCode: 'C105',
      DepartmentName: '資訊處',
      LanguageCode: 'zh-tw',
      LanguageName: '繁體中文',
      Systems: [
        {
          Code: 'HRSurrounding',
          Name: 'HR週邊系統範例',
          Url: 'https://HRSurrounding'
        },
        {
          Code: 'Appointment',
          Name: '任用管理系統',
          Url: 'https://Appointment'
        },
        {
          Code: 'Presence',
          Name: '出勤管理系統',
          Url: 'https://Presence'
        }
      ]
    };
  }

  /**
   * 取得當前系統設定值
   */
  getSystemSetting(): SystemSetting {
    return {
      HasMuitLanguage: true
    };
  }

  echo(msg: string): void {
      console.log('echo:' + msg);
  }

  doPost(action: string, httpParams: HttpParams, headerApend: object, body: Object): Observable<any> {
    return this.http.post(this._getAPIurl(action), JSON.stringify(body), this._getHttpOptions(httpParams, headerApend));
  }

  doGet(action: string, httpParams: HttpParams, headerApend: object): Observable<any> {
    return this.http.get(this._getAPIurl(action), this._getHttpOptions(httpParams, headerApend));
  }

  doDelete(action: string, httpParams: HttpParams, headerApend: object): Observable<any> {
    return this.http.delete(this._getAPIurl(action), this._getHttpOptions(httpParams, headerApend));
  }

  doPut(action: string, httpParams: HttpParams, headerApend: object, body: Object): Observable<any> {
    return this.http.put(this._getAPIurl(action), JSON.stringify(body), this._getHttpOptions(httpParams, headerApend));
  }

  private _getAPIurl(action: string) {
    return environment.HRSurroundingWebTemplateAPIUrl + action;
  }

  private _getHttpOptions(httpParams: HttpParams, headerApend: object) {
    let httpHeaders = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    if (headerApend) {
      Object.keys(headerApend).forEach(function (key) {
        httpHeaders = httpHeaders.append(key, headerApend[key]);
    });
    }

    const options = {
      headers: httpHeaders,
      params: httpParams ? httpParams : { }
    };
    return options;
  }
}
