import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FileItem} from '../layout/entity/fileItem';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  testUrl: string = "/assets/data";

  constructor(private http: HttpClient) { }

  /**
   * 得到文件列表
   */
  getFileItem(): Observable<FileItem[]> {
    return this.http.get<FileItem[]>(`${this.testUrl}/fileList.json`);
  }
}
