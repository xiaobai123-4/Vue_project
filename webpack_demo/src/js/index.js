// 声明JS依赖--导入另一个JS模块文件
import getCompanyName from './util.js'

function createDiv() {
  var div = document.createElement('div');
  div.classList.add('hello');
  div.innerHTML = '版权所有：' + getCompanyName();
  return div;
}
document.body.appendChild(createDiv());