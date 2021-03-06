/**
 * @file     {{__filepath__}}
 * @summary  {{__moduleprefix__}}
 * @author   {{author}}
 * @email    {{email}}
 * @date     {{__date__}}
 */
define(function(require) {
	var Class = require('bird.class');
	var Action = require('bird.action');

	function Index() {
		//这里配置后台数据请求的URL
		this.requestUrl = {

		};

		//这里配置进入Action时初始化数据请求的URL
		this.requestUrlWhenEnter = {

		};

		Index.superClass.apply(this, arguments);
	}

	Class.inherit(Index, Action);


	(function() {
		//配置模块名称
		this.name = '{{__moduleprefix__}}';
		
		//配置模板的路径
		this.tplUrl = './biz/{{__moduleprefix__}}/tpl/index.html';

		//配置进入此Action后浏览器的document.title
		this.title = '{{__moduleprefix__}}';

		/**
		 * 初始化数据模型, 数据的初始化工作在此方法内部完成
		 * 这里只应出现静态数据, 这些数据在渲染模板时会同步渲染
		 * STEP 1
		 */
		this.initModel = function($model, $watcher, $requester, $arg, $cache) {

		};

		/**
		 * 此时模板已渲染完成, 实际是从后台请求的数据返回后的操作
		 * 这里可以修改数据的结构以满足模板需要
		 * STEP 2
		 */
		this.beforeRender = function($model, $watcher, $requester, $arg, $cache) {

		};

		/**
		 * 后台返回的数据后重新渲染模板的部分内容
		 * 更新视图必须调用$model.set方法
		 * STEP 3
		 */
		this.render = function($model, $watcher, $requester, $arg, $cache) {

		};

		/**
		 * 后台返回的数据更新视图之后进入的流程
		 * 此处可做针对DOM的额外操作, 但若要手动更新视图必须调用$model.set方法
		 * STEP 4
		 */
		this.afterRender = function($model, $watcher, $requester, $arg, $cache) {

		};

		/**
		 * 绑定事件, 通常情况下, 事件绑定应在模板里使用双向绑定完成
		 * 此处可针对相应的业务需要添加合理的事件绑定, 如: 为了性能优化而使用事件委托
		 * STEP 5
		 */
		this.bindEvent = function($model, $watcher, $requester, $arg, $cache) {

		};

		/**
		 * 离开此Action前的行为
		 * 解绑在`STEP 4`中添加的事件绑定
		 * 销毁变量, 释放内存
		 * STEP 6
		 */
		this.beforeLeave = function($model, $watcher, $requester, $arg, $cache) {

		};

	}).call(Index.prototype);

	return new Index();
});