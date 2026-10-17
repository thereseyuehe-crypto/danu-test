/* 访问密码配置 —— 由 admin.html 后台导出，请勿手改
   本文件只存哈希值，明文不在此处 */
const PWD_MAX = 3;
const PWD_HASH = [
  295475584,
  3558313280,
  398694400,
  2730599104
];
/* 同时挂到 window，方便网页内统一读取（两种加载方式都兼容） */
if (typeof window !== 'undefined'){
  window.PWD_MAX = PWD_MAX;
  window.PWD_HASH = PWD_HASH;
}
