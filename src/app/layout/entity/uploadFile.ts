import { FileUploader } from 'ng2-file-upload';

export class UploadFile {
  file: FileUploader;


  constructor(uploadFile: FileUploader) {
    this.file = uploadFile;
  }

  /**
   * 文件选择完成后的操作
   * @param event
   */
  selectedFileOnChanged(event: any):void {
    //调用文件上传的方法
    // this.uploadFile(event);
  }

  /**
   * 文件上传
   * @param event
   */
  uploadFile(event: any): void {
    //有回调函数
    let _this = this;

  }

}
