export class FileItem {
  //文件是否选中
  isChoice: boolean = false;
  //文件名称
  name: string;
  //文件类型,每种不同的类型显示的文件图标不同
  type: string;
  //文件大小
  fileSize: string;
  //更新时间
  updateDate: string;
}
