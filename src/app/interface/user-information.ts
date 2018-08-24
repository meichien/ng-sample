import { Component } from '@angular/core';

export interface UserInformation {
    EmployeeNo: string;
    Name: string;
    DepartmentCode: string;
    DepartmentName: string;
    LanguageCode: string;
    LanguageName: string;
    Systems: Array<{
      Code: string;
      Name: string;
      Url: string;
    }>;
}
