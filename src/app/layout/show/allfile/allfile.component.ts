import { Component, OnInit } from '@angular/core';
import {UploadFile} from '../../entity/uploadFile';
import {FileUploader} from 'ng2-file-upload';
import {FileService} from '../../../service/file.service';
import {FileItem} from '../../entity/fileItem';

@Component({
  selector: 'app-allfile',
  templateUrl: './allfile.component.html',
  styleUrls: ['./allfile.component.scss']
})
export class AllfileComponent implements OnInit {

  // uploader: UploadFile(new )
  // uploader: UploadFile = new UploadFile(new FileUploader({
  //   url: "http://www.download.com:80/uploadFile",
  //   method: "POST",
  //   itemAlias: "uploadedfile"
  // }));

  //文件列表
  fileItem: FileItem[] = [];
  //全部选择
  allChoice: boolean = false;
  //文件路径
  fileUrl: string[] = ['全部文件'];

  constructor(private fileService: FileService) { }

  ngOnInit() {
    this.getFileItem();
  }

  uploader:FileUploader = new FileUploader({
    url: "http://www.download.com:80/uploadFile",
    method: "POST",
    itemAlias: "uploadedfile"
  });

  /**
   * 文件选择完成后的操作
   * @param event
   */
  selectedFileOnChanged(event: any):void {
    //调用文件上传的方法
    this.uploadFile(event);
    console.log(event);
  }

  /**
   * 得到文件列表
   */
  getFileItem(): void {
    this.fileService.getFileItem()
      .subscribe((data: FileItem[]) => {
        this.fileItem = data;
      })
  }



  uploadFile(event: any): void {
    //有回调函数
    let _this = this;

  }

  /**
   * 选择文件列表
   * @param event
   * @param fileItem
   */
  choiceFileItem(event: Event, fileItem: FileItem) {
    //选择撞他总量
    let choiceNumber : number = 0;
    this.fileItem = this.fileItem.map((file: FileItem) => {
      //不是自己
      if (file.name != fileItem.name) {
        //如果处于选中状态
        if (file.isChoice) {
          choiceNumber++;
        }
        file.isChoice = false;
      }
      return file;
    });
    //如果被选择的小于等于1个,那么不是多选
    if (choiceNumber <= 1) {
      fileItem.isChoice = !fileItem.isChoice;
    } else {
      if (!fileItem.isChoice) {
        fileItem.isChoice = true;
      }
    }
    event.stopPropagation();
  }

  /**
   * 点击全部选择
   */
  allClick() {
    this.allChoice = !this.allChoice;
    this.fileItem = this.fileItem.map((file: FileItem) => {
      file.isChoice = this.allChoice;
      return file;
    })
  }

  /**
   * 点击多选框,进入多选
   * @param event
   * @param file
   */
  inputOnClick(event: Event, file: FileItem) {
    file.isChoice = !file.isChoice;
    event.stopPropagation();
  }

  /**
   * 点击文件名称
   * @param event
   */
  fileNameOnClick(event: Event, file: FileItem) {
    this.fileUrl.push(file.name);
    event.stopPropagation();
  }


}
