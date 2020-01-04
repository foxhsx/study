/**
 * @method echartFunc echarts封装
 * @param {string} [options.el] 要渲染的元素
 * @returns {object} echartDom
 */

 function echartFunc (options) {
   let echartDom = echarts.init(document.getElementById(options.el));
   let option = options.option;
   echartDom.setOption(option);
 }