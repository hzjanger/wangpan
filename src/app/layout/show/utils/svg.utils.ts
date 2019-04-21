import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

export const loadSvgResource = (iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) => {
  const svgUrl = 'assets/svg';

  //向下图标
  iconRegistry.addSvgIcon('down', sanitizer.bypassSecurityTrustResourceUrl(`${svgUrl}/down.svg`));
  //通知图标
  iconRegistry.addSvgIcon('notice', sanitizer.bypassSecurityTrustResourceUrl(`${svgUrl}/notice.svg`));
  //所有文件图标
  iconRegistry.addSvgIcon('allfile', sanitizer.bypassSecurityTrustResourceUrl(`${svgUrl}/allfile.svg`));
  //分享图标
  iconRegistry.addSvgIcon('shared', sanitizer.bypassSecurityTrustResourceUrl(`${svgUrl}/shared.svg`));
  //回收站图标
  iconRegistry.addSvgIcon('Recycle', sanitizer.bypassSecurityTrustResourceUrl(`${svgUrl}/Recycle.svg`));
  //新建文件夹
  iconRegistry.addSvgIcon('newfile', sanitizer.bypassSecurityTrustResourceUrl(`${svgUrl}/newfile.svg`));
  //下载图标
  iconRegistry.addSvgIcon('download', sanitizer.bypassSecurityTrustResourceUrl(`${svgUrl}/download.svg`));
  //搜索图标
  iconRegistry.addSvgIcon('search', sanitizer.bypassSecurityTrustResourceUrl(`${svgUrl}/search.svg`));
  //文件夹图标
  iconRegistry.addSvgIcon('mkdir', sanitizer.bypassSecurityTrustResourceUrl(`${svgUrl}/mkdir.svg`));
  //文件上传
  iconRegistry.addSvgIcon('uploadfile', sanitizer.bypassSecurityTrustResourceUrl(`${svgUrl}/uploadfile.svg`));
  //更多
  iconRegistry.addSvgIcon('more', sanitizer.bypassSecurityTrustResourceUrl(`${svgUrl}/more.svg`));



};
