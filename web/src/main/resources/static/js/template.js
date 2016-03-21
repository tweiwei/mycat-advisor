/*TMODJS:{"version":"1.0.0"}*/
!function(){function a(a,b){return(/string|function/.test(typeof b)?h:g)(a,b)}function b(a,c){return"string"!=typeof a&&(c=typeof a,"number"===c?a+="":a="function"===c?b(a.call(a)):""),a}function c(a){return l[a]}function d(a){return b(a).replace(/&(?![\w#]+;)|[<>"']/g,c)}function e(a,b){if(m(a))for(var c=0,d=a.length;d>c;c++)b.call(a,a[c],c,a);else for(c in a)b.call(a,a[c],c)}function f(a,b){var c=/(\/)[^/]+\1\.\.\1/,d=("./"+a).replace(/[^/]+$/,""),e=d+b;for(e=e.replace(/\/\.\//g,"/");e.match(c);)e=e.replace(c,"/");return e}function g(b,c){var d=a.get(b)||i({filename:b,name:"Render Error",message:"Template not found"});return c?d(c):d}function h(a,b){if("string"==typeof b){var c=b;b=function(){return new k(c)}}var d=j[a]=function(c){try{return new b(c,a)+""}catch(d){return i(d)()}};return d.prototype=b.prototype=n,d.toString=function(){return b+""},d}function i(a){var b="{Template Error}",c=a.stack||"";if(c)c=c.split("\n").slice(0,2).join("\n");else for(var d in a)c+="<"+d+">\n"+a[d]+"\n\n";return function(){return"object"==typeof console&&console.error(b+"\n\n"+c),b}}var j=a.cache={},k=this.String,l={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},m=Array.isArray||function(a){return"[object Array]"==={}.toString.call(a)},n=a.utils={$helpers:{},$include:function(a,b,c){return a=f(c,a),g(a,b)},$string:b,$escape:d,$each:e},o=a.helpers=n.$helpers;a.get=function(a){return j[a.replace(/^\.\//,"")]},a.helper=function(a,b){o[a]=b},"function"==typeof define?define(function(){return a}):"undefined"!=typeof exports?module.exports=a:this.template=a,a.helper("dateFormat",function(a,b){return b=b||"YYYY-MM-DD hh:mm:ss",moment(parseInt(a)).format(b)}),/*v:1*/
a("bgd/post/index",function(a,b){"use strict";var c=this,d=c.$helpers,e=function(d,e){e=e||a;var f=c.$include(d,e,b);return n+=f},f=c.$escape,g=a.query,h=a.lang,i=c.$each,j=a.list,l=(a.$value,a.$index,c.$string),m=a.pagination,n="";return n+='<div class="container"> ',e("../../public/breadcrumbs"),n+=' <div class="card"> <div class="card-header"> <h2>\u7528\u6237\u804c\u4f4d\u7ba1\u7406</h2> <ul class="actions"> <li> <a href="#user/post/init?tpl=bgd/post/save" class="btn-modal"> <i class="zmdi zmdi-plus"></i> </a> </li> </ul> </div> <div class="bootgrid-header container-fluid"> <form id="frmSearch" action="#user/post/list?tpl=bgb/post/save" role="form"> <div class="row"> <div class="col-sm-3"> <div class="input-group"> <span class="input-group-addon"><i class="zmdi zmdi-search"></i></span> <div class="fg-line"> <input type="text" class="form-control auto-complete" name="code" data-url="_data/typeahead/all.json" value="',n+=f(g.code),n+='" hidden="true" placeholder="\u540d\u79f0\u548c\u7f16\u7801\u8fdb\u884c\u641c\u7d22"> </div> </div> </div> <div class="col-sm-2"> <button type="button" class="btn btn-primary btn-sm m-t-5 waves-effect btn-search"> ',n+=f(h.btn.search),n+=' </button> </div> </div> </form> </div> <div class="table-responsive"> <table class="table table-striped table-hover table-ellipsis"> <thead> <tr> <th width="5%">#</th> <th width="10%">\u804c\u4f4d\u540d\u79f0</th> <th width="10%">\u7f16\u53f7</th> <th width="13%">\u5907\u6ce8</th> <th width="15%">\u63d2\u5165\u65f6\u95f4</th> <th width="15%">\u66f4\u65b0\u65f6\u95f4</th> <th width="*">\u64cd\u4f5c</th> </tr> </thead> <tbody> ',i(j,function(a,b){n+=" <tr> <td>",n+=f(b+1),n+='</td> <td title="',n+=f(a.name),n+='">',n+=f(a.name),n+='</td> <td title="',n+=f(a.code),n+='"> ',n+=f(a.code),n+=' </td> <td title="',n+=f(a.note),n+='">',n+=f(a.note),n+='</td> <td title="">',n+=f(d.dateFormat(a.insert_time)),n+='</td> <td title="">',n+=f(d.dateFormat(a.update_time)),n+='</td> <td> <button type="button" class="btn btn-xs btn-default btn-icon btn-modal waves-effect waves-circle waves-float waves-effect waves-circle waves-float" data-href="user/post/get/',n+=f(a.id),n+='?tpl=bgd/post/save"> <span class="zmdi zmdi-edit"></span> </button> <!--<button type="button" class="btn btn-xs btn-default btn-icon btn-modal waves-effect waves-circle waves-float waves-effect waves-circle waves-float" data-href="sm/role/menu/',n+=f(a.id),n+='?tpl=sm/role/tree"> <span class="zmdi zmdi-account"></span> </button>--> <button type="button" class="btn btn-xs btn-danger btn-icon btn-del" data-url="user/post/del/',n+=f(a.id),n+='"> <span class="zmdi zmdi-delete"></span> </button> </td> </tr> '}),n+=" </tbody> </table> </div> ",n+=l(m),n+=" </div> </div>",new k(n)}),/*v:1*/
a("bgd/post/save",function(a){"use strict";var b=this,c=(b.$helpers,a.id),d=b.$escape,e=a.insert_time,f=a.status,g=a.del_flag,h=a.name,i=a.code,j=a.note,l=a.lang,m="";return m+='<div class="modal-header"> <h4 class="modal-title">',m+=null==c?"\u65b0\u589e":"\u4fee\u6539",m+='</h4> </div> <form class="form-horizontal form-validate" id="doorSaveForm" method="post" action="user/post/save"> <input name="id" type="hidden" value="',m+=d(c),m+='"> <input name="insert_time" type="hidden" value="',m+=d(e),m+='"> <input name="status" type="hidden" value="',m+=d(f),m+='"> <input name="del_flag" type="hidden" value="',m+=d(g),m+='"> <div class="modal-body"> <div class="form-group"> <label for="name" class="col-sm-4 control-label">\u804c\u4f4d\u540d\u79f0</label> <div class="col-sm-5"> <div class="fg-line"> <input type="text" class="form-control input-sm validate[required,maxSize[16]]" id="name" name="name" placeholder="\u804c\u4f4d\u540d\u79f0" value="',m+=d(h),m+='"> </div> <small class="help-block">&nbsp;</small> </div> </div> <div class="form-group"> <label for="code" class="col-sm-4 control-label">\u7f16\u7801</label> <div class="col-sm-5"> <div class="fg-line"> <input type="text" class="form-control input-sm validate[required,maxSize[16]]" id="code" name="code" placeholder="\u7f16\u7801" value="',m+=d(i),m+='"> </div> <small class="help-block">&nbsp;</small> </div> </div> <div class="form-group"> <label for="note" class="col-sm-4 control-label">\u5907\u6ce8</label> <div class="col-sm-5"> <div class="fg-line"> <input type="text" class="form-control input-sm validate[required,maxSize[16]]" id="note" name="note" placeholder="\u5907\u6ce8" value="',m+=d(j),m+='"> </div> <small class="help-block">&nbsp;</small> </div> </div> </div> <div class="modal-footer"> <button type="button" class="btn btn-primary btn-save">',m+=d(l.btn.save),m+='</button> <button type="button" class="btn btn-default" data-dismiss="modal">',m+=d(l.btn.close),m+="</button> </div> </form> ",new k(m)}),/*v:1*/
a("home/index",function(a,b){"use strict";var c=this,d=(c.$helpers,function(d,e){e=e||a;var f=c.$include(d,e,b);return g+=f}),e=c.$string,f=a.chart,g="";return g+='<div class="container"> ',d("../public/breadcrumbs"),g+=' <div class="card"> <div class="card-header"> <h2>Sales Statistics <small>Vestibulum purus quam scelerisque, mollis nonummy metus</small></h2> <ul class="actions"> <li> <a href=""> <i class="zmdi zmdi-refresh-alt"></i> </a> </li> <li> <a href=""> <i class="zmdi zmdi-download"></i> </a> </li> <li class="dropdown"> <a href="" data-toggle="dropdown"> <i class="zmdi zmdi-more-vert"></i> </a> <ul class="dropdown-menu dropdown-menu-right"> <li> <a href="">Change Date Range</a> </li> <li> <a href="">Change Graph Type</a> </li> <li> <a href="">Other Settings</a> </li> </ul> </li> </ul> </div> <div class="card-body"> <div class="chart-edge"> <div id="curved-line-chart" class="flot-chart"></div> </div> </div> </div> <div class="mini-charts"> <div class="row"> <div class="col-sm-6 col-md-3"> <div class="mini-charts-item bgm-cyan"> <div class="clearfix"> <div id="statsBar" class="chart"></div> <div class="count"> <small>Website Traffics</small> <h2>987,459</h2> </div> </div> </div> </div> <div class="col-sm-6 col-md-3"> <div class="mini-charts-item bgm-lightgreen"> <div class="clearfix"> <div id="statsBar2" class="chart"></div> <div class="count"> <small>Website Impressions</small> <h2>356,785K</h2> </div> </div> </div> </div> <div class="col-sm-6 col-md-3"> <div class="mini-charts-item bgm-orange"> <div class="clearfix"> <div id="statsLine" class="chart"></div> <div class="count"> <small>Total Sales</small> <h2>$ 458,778</h2> </div> </div> </div> </div> <div class="col-sm-6 col-md-3"> <div class="mini-charts-item bgm-bluegray"> <div class="clearfix"> <div id="statsLine2" class="chart"></div> <div class="count"> <small>Support Tickets</small> <h2>23,856</h2> </div> </div> </div> </div> </div> </div> <div class="dash-widgets"> <div class="row"> <div class="col-md-3 col-sm-6"> <div id="site-visits" class="dash-widget-item bgm-teal"> <div class="dash-widget-header"> <div class="p-20"> <div id="dashWidgetVisits"></div> </div> <div class="dash-widget-title">For the past 30 days</div> <ul class="actions actions-alt"> <li class="dropdown"> <a href="" data-toggle="dropdown"> <i class="zmdi zmdi-more-vert"></i> </a> <ul class="dropdown-menu dropdown-menu-right"> <li> <a href="">Refresh</a> </li> <li> <a href="">Manage Widgets</a> </li> <li> <a href="">Widgets Settings</a> </li> </ul> </li> </ul> </div> <div class="p-20"> <small>Page Views</small> <h3 class="m-0 f-400">47,896,536</h3> <br/> <small>Site Visitors</small> <h3 class="m-0 f-400">24,456,799</h3> <br/> <small>Total Clicks</small> <h3 class="m-0 f-400">13,965</h3> </div> </div> </div> <div class="col-md-3 col-sm-6"> <div id="pie-charts" class="dash-widget-item"> <div class="bgm-pink"> <div class="dash-widget-header"> <div class="dash-widget-title">Email Statistics</div> </div> <div class="clearfix"></div> <div class="text-center p-20 m-t-25"> <div class="easy-pie main-pie" data-percent="75"> <div class="percent">45</div> <div class="pie-title">Total Emails Sent</div> </div> </div> </div> <div class="p-t-20 p-b-20 text-center"> <div class="easy-pie sub-pie-1" data-percent="56"> <div class="percent">56</div> <div class="pie-title">Bounce Rate</div> </div> <div class="easy-pie sub-pie-2" data-percent="84"> <div class="percent">84</div> <div class="pie-title">Total Opened</div> </div> </div> </div> </div> <div class="col-md-3 col-sm-6"> <div class="dash-widget-item bgm-lime"> <div id="weather-widget"></div> </div> </div> <div class="col-md-3 col-sm-6"> <div id="best-selling" class="dash-widget-item"> <div class="dash-widget-header"> <div class="dash-widget-title">Best Sellings</div> <img src="img/widgets/alpha.jpg" alt=""> <div class="main-item"> <small>Samsung Galaxy Alpha</small> <h2>$799.99</h2> </div> </div> <div class="listview p-t-5"> <a class="lv-item" href=""> <div class="media"> <div class="pull-left"> <img class="lv-img-sm" src="img/widgets/note4.jpg" alt=""> </div> <div class="media-body"> <div class="lv-title">Samsung Galaxy Note 4</div> <small class="lv-small">$850.00 - $1199.99</small> </div> </div> </a> <a class="lv-item" href=""> <div class="media"> <div class="pull-left"> <img class="lv-img-sm" src="img/widgets/mate7.jpg" alt=""> </div> <div class="media-body"> <div class="lv-title">Huawei Ascend Mate</div> <small class="lv-small">$649.59 - $749.99</small> </div> </div> </a> <a class="lv-item" href=""> <div class="media"> <div class="pull-left"> <img class="lv-img-sm" src="img/widgets/535.jpg" alt=""> </div> <div class="media-body"> <div class="lv-title">Nokia Lumia 535</div> <small class="lv-small">$189.99 - $250.00</small> </div> </div> </a> <a class="lv-footer" href=""> View All </a> </div> </div> </div> </div> </div> </div> <script src="lib/chart/flot/jquery.flot.js"></script> <script src="lib/chart/flot/jquery.flot.resize.js"></script> <script src="lib/chart/flot.curvedlines/curvedLines.js"></script> <script src="lib/chart/sparklines/jquery.sparkline.js"></script> <script src="lib/chart/jquery.easy-pie-chart/jquery.easypiechart.js"></script> <script src="lib/chart/simpleWeather/jquery.simpleWeather.min.js"></script> <script src="lib/chart/flot-charts/curved-line-chart.js"></script> <script> mycatui.chart.sparklineBar(\'statsBar\', ',g+=e(f.statsBar),g+=", '45px', 3, '#fff', 2); mycatui.chart.sparklineBar('statsBar2',",g+=e(f.statsBar),g+=" , '45px', 3, '#fff', 2); mycatui.chart.sparklineLine('statsLine',",g+=e(f.statsLine),g+=" , 85, 45, '#fff', 'rgba(0,0,0,0)', 1.25, 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.4)', 3, '#fff', 'rgba(255,255,255,0.4)'); mycatui.chart.sparklineLine('statsLine2',",g+=e(f.statsLine2),g+=" , 85, 45, '#fff', 'rgba(0,0,0,0)', 1.25, 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.4)', 3, '#fff', 'rgba(255,255,255,0.4)'); mycatui.chart.sparklineLine('dashWidgetVisits',",g+=e(f.statsLine2),g+=" , '100%', '95px', 'rgba(255,255,255,0.7)', 'rgba(0,0,0,0)', 2, 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.4)', 5, 'rgba(255,255,255,0.4)', '#fff'); mycatui.chart.easyPieChart($('.main-pie'), 'rgba(255,255,255,0.2)', 'rgba(255,255,255,0.5)', 'rgba(255,255,255,0.7)', 7, 'butt', 148); mycatui.chart.easyPieChart($('.sub-pie-1'), '#eee', '#ccc', '#2196F3', 4, 'butt', 95); mycatui.chart.easyPieChart($('.sub-pie-2'), '#eee', '#ccc', '#FFC107', 4, 'butt', 95); $.simpleWeather({ location: 'Austin, TX', woeid: '', unit: 'f', success: function (weather) { html = '<div class=\"weather-status\">' + weather.temp + '&deg;' + weather.units.temp + '</div>'; html += '<ul class=\"weather-info\"><li>' + weather.city + ', ' + weather.region + '</li>'; html += '<li class=\"currently\">' + weather.currently + '</li></ul>'; html += '<div class=\"weather-icon wi-' + weather.code + '\"></div>'; html += '<div class=\"dash-widget-footer\"><div class=\"weather-list tomorrow\">'; html += '<span class=\"weather-list-icon wi-' + weather.forecast[2].code + '\"></span><span>' + weather.forecast[1].high + '/' + weather.forecast[1].low + '</span><span>' + weather.forecast[1].text + '</span>'; html += '</div>'; html += '<div class=\"weather-list after-tomorrow\">'; html += '<span class=\"weather-list-icon wi-' + weather.forecast[2].code + '\"></span><span>' + weather.forecast[2].high + '/' + weather.forecast[2].low + '</span><span>' + weather.forecast[2].text + '</span>'; html += '</div></div>'; $(\"#weather-widget\").html(html); }, error: function (error) { $(\"#weather-widget\").html('<p>' + error + '</p>'); } }); </script>",new k(g)}),/*v:2*/
a("layout/sidebar/index",function(a){"use strict";var b=this,c=(b.$helpers,b.$escape),d=a.profileInfo,e="";return e+='<div class="sidebar-inner c-overflow"> <div class="profile-menu"> <a href="#"> <div class="profile-pic"> <img src="',e+=c(d.photo),e+='" alt=""> </div> <div class="profile-info"> ',e+=c(d.hello),e+=' <i class="zmdi zmdi-arrow-drop-down"></i> </div> </a> <ul class="main-menu"> <li> <a data-target="profile/password" href="#_data/profile/password.json?tpl=profile/password"><i class="zmdi zmdi-settings"></i> \u4fee\u6539\u5bc6\u7801</a> </li> <li> <a data-action="logout" href="#"><i class="zmdi zmdi-time-restore"></i> \u9000\u51fa</a> </li> </ul> </div> <ul class="main-menu"> <li><a href="#"><i class="zmdi zmdi-home"></i> \u4e3b\u9875</a></li> <li class="sub-menu"> <a href="#"><i class="zmdi zmdi-widgets"></i> \u7528\u6237\u7ba1\u7406</a> <ul> <li><a data-target="bgd/post/index" href="#user/post/list?tpl=bgd/post/index">\u7528\u6237\u804c\u4f4d</a></li> <li><a data-target="widget/demo" href="#_data/success.json?tpl=widget/demo">\u516c\u53f8\u4fe1\u606f</a></li> <li><a data-target="widget/demo" href="#_data/success.json?tpl=widget/demo">\u7528\u6237\u7c7b\u578b</a></li> <li><a data-target="widget/demo" href="#_data/success.json?tpl=widget/demo">\u7528\u6237\u767b\u5f55\u8bb0\u5f55</a></li> <li><a data-target="widget/demo" href="#_data/success.json?tpl=widget/demo">\u7528\u6237\u5173\u6ce8\u987e\u95ee</a></li> <li><a data-target="widget/demo" href="#_data/success.json?tpl=widget/demo">\u7528\u6237\u5173\u6ce8\u7c7b\u578b</a></li> <li><a data-target="widget/demo" href="#_data/success.json?tpl=widget/demo">\u7528\u6237\u6536\u85cf</a></li> </ul> </li> <li class="sub-menu"> <a href="#"><i class="zmdi zmdi-widgets"></i> \u4f1a\u5458</a> <ul> <li><a data-target="bgd/post/index" href="#user/post/list?tpl=bgd/post/index">\u4f1a\u5458\u4fe1\u606f</a></li> <li><a data-target="widget/demo" href="#_data/success.json?tpl=widget/demo">\u4f1a\u5458\u8d2d\u4e70\u8bb0\u5f55</a></li> </ul> </li> <li class="sub-menu"> <a href="#"><i class="zmdi zmdi-widgets"></i> \u6d41\u7a0b\u7ba1\u7406</a> <ul> <li><a data-target="bgd/post/index" href="#user/post/list?tpl=bgd/post/index">\u51fa\u5dee\u6d41\u7a0b</a></li> <li><a data-target="widget/demo" href="#_data/success.json?tpl=widget/demo">\u8ba2\u5355\u6d41\u7a0b</a></li> </ul> </li> <li class="sub-menu"> <a href="#"><i class="zmdi zmdi-widgets"></i> \u7cfb\u7edf\u5ba1\u6279</a> <ul> <li><a data-target="widget/demo" href="#_data/success.json?tpl=widget/demo">\u5ba1\u6838\u4eba</a></li> <li><a data-target="bgd/post/index" href="#user/post/list?tpl=bgd/post/index">\u5ba1\u6838\u8bb0\u5f55</a></li> <li><a data-target="widget/demo" href="#_data/success.json?tpl=widget/demo">\u5ba1\u6838\u6a21\u677f</a></li> </ul> </li> <li class="sub-menu"> <a href="#"><i class="zmdi zmdi-widgets"></i> \u95ee\u9898\u7ba1\u7406</a> <ul> <li><a data-target="bgd/post/index" href="#user/post/list?tpl=bgd/post/index">\u95ee\u9898\u7c7b\u578b</a></li> <li><a data-target="widget/demo" href="#_data/success.json?tpl=widget/demo">\u6280\u672f\u7c7b\u578b</a></li> <li><a data-target="widget/demo" href="#_data/success.json?tpl=widget/demo">\u95ee\u9898\u96c6</a></li> </ul> </li> <li class="sub-menu"> <a href="#"><i class="zmdi zmdi-widgets"></i> \u8ba2\u5355\u7ba1\u7406</a> <ul> <li><a data-target="bgd/post/index" href="#user/post/list?tpl=bgd/post/index">\u8ba2\u5355\u7c7b\u578b</a></li> <li><a data-target="widget/demo" href="#_data/success.json?tpl=widget/demo">\u8ba2\u5355\u4fe1\u606f</a></li> </ul> </li> <li class="sub-menu"> <a href="#"><i class="zmdi zmdi-widgets"></i> \u652f\u4ed8\u7ba1\u7406</a> <ul> <li><a data-target="bgd/post/index" href="#user/post/list?tpl=bgd/post/index">\u652f\u4ed8\u6d41\u6c34</a></li> <li><a data-target="widget/demo" href="#_data/success.json?tpl=widget/demo">\u652f\u4ed8\u6e20\u9053</a></li> </ul> </li> <li class="sub-menu"> <a href="#"><i class="zmdi zmdi-widgets"></i> \u6743\u9650\u7ba1\u7406</a> <ul> <li><a data-target="bgd/post/index" href="#user/post/list?tpl=bgd/post/index">\u7cfb\u7edf\u8d44\u6e90</a></li> <li><a data-target="widget/demo" href="#_data/success.json?tpl=widget/demo">\u7cfb\u7edf\u6743\u9650</a></li> <li><a data-target="widget/demo" href="#_data/success.json?tpl=widget/demo">\u7cfb\u7edf\u6a21\u5757</a></li> <li><a data-target="widget/demo" href="#_data/success.json?tpl=widget/demo">\u89d2\u8272\u7ba1\u7406</a></li> </ul> </li> <li class="sub-menu"> <a href="#"><i class="zmdi zmdi-widgets"></i> \u7cfb\u7edf\u7ba1\u7406</a> <ul> <li><a data-target="bgd/post/index" href="#user/post/list?tpl=bgd/post/index">\u654f\u611f\u8bcd\u7ba1\u7406</a></li> <li><a data-target="widget/demo" href="#_data/success.json?tpl=widget/demo">\u53c2\u6570\u914d\u7f6e</a></li> </ul> </li> </ul> </div> ',new k(e)}),/*v:2*/
a("layout/top/email",'<a data-toggle="dropdown" class="tm-message" href=""><i class="tmn-counts">6</i></a> <div class="dropdown-menu dropdown-menu-lg pull-right"> <div class="listview"> <div class="lv-header"> Messages </div> <div class="lv-body"> <a class="lv-item" href=""> <div class="media"> <div class="pull-left"> <img class="lv-img-sm" src="static/img/profile-pics/1.jpg" alt=""> </div> <div class="media-body"> <div class="lv-title">David Belle</div> <small class="lv-small">Cum sociis natoque penatibus et magnis dis parturient montes</small> </div> </div> </a> <a class="lv-item" href=""> <div class="media"> <div class="pull-left"> <img class="lv-img-sm" src="static/img/profile-pics/2.jpg" alt=""> </div> <div class="media-body"> <div class="lv-title">Jonathan Morris</div> <small class="lv-small">Nunc quis diam diamurabitur at dolor elementum, dictum turpis vel</small> </div> </div> </a> <a class="lv-item" href=""> <div class="media"> <div class="pull-left"> <img class="lv-img-sm" src="static/img/profile-pics/3.jpg" alt=""> </div> <div class="media-body"> <div class="lv-title">Fredric Mitchell Jr.</div> <small class="lv-small">Phasellus a ante et est ornare accumsan at vel magnauis blandit turpis at augue ultricies</small> </div> </div> </a> <a class="lv-item" href=""> <div class="media"> <div class="pull-left"> <img class="lv-img-sm" src="static/img/profile-pics/4.jpg" alt=""> </div> <div class="media-body"> <div class="lv-title">Glenn Jecobs</div> <small class="lv-small">Ut vitae lacus sem ellentesque maximus, nunc sit amet varius dignissim, dui est consectetur neque</small> </div> </div> </a> <a class="lv-item" href=""> <div class="media"> <div class="pull-left"> <img class="lv-img-sm" src="static/img/profile-pics/4.jpg" alt=""> </div> <div class="media-body"> <div class="lv-title">Bill Phillips</div> <small class="lv-small">Proin laoreet commodo eros id faucibus. Donec ligula quam, imperdiet vel ante placerat</small> </div> </div> </a> </div> <a class="lv-footer" href="">View All</a> </div> </div>'),/*v:1*/
a("layout/top/index",function(a,b){"use strict";var c=this,d=(c.$helpers,function(d,e){e=e||a;var f=c.$include(d,e,b);return g+=f}),e=c.$escape,f=a.lang,g="";return g+='<ul class="header-inner">  <li id="menu-trigger" data-trigger="#sidebar"> <div class="line-wrap"> <div class="line top"></div> <div class="line center"></div> <div class="line bottom"></div> </div> </li>  <li class="logo hidden-xs"> <a href="index.html">LOGO</a> </li> <li class="pull-right"> <ul class="top-menu">  <li id="toggle-width"> <div class="toggle-switch"> <input id="tw-switch" type="checkbox" hidden="hidden"/> <label for="tw-switch" class="ts-helper"></label> </div> </li>  <li id="top-search"> <a class="tm-search" href=""></a> </li>  <li id="top-email" class="dropdown"> ',d("./email"),g+=' </li>  <li id="top-notification" class="dropdown"> ',d("./notification"),g+=' </li>  <li id="top-task" class="dropdown hidden-xs"> ',d("./task"),g+=' </li>  <li class="dropdown"> <a data-toggle="dropdown" class="tm-settings" href="#"></a> <ul class="dropdown-menu dm-icon pull-right"> <li class="hidden-xs"> <a data-action="fullscreen" href="#"> <i class="zmdi zmdi-fullscreen"></i> ',g+=e(f.menu.fullscreen),g+=' </a> </li> <li> <a data-action="clear-localstorage" href="#"> <i class="zmdi zmdi-delete"></i> ',g+=e(f.menu.clearLocalstorage),g+=' </a> </li> </ul> </li> <li id="chat-trigger" data-trigger="#chat"> <a class="tm-chat" href="#"></a> </li> </ul> </li> </ul> <div id="top-search-wrap"> <input type="text"> <i id="top-search-close">&times;</i> </div>',new k(g)}),/*v:1*/
a("layout/top/notification",function(a){"use strict";var b=this,c=(b.$helpers,b.$escape),d=a.notification,e=a.lang,f=b.$each,g=(a.$value,a.$index,"");return g+='<a data-toggle="dropdown" class="tm-notification" href=""><i class="tmn-counts">',g+=c(d.num),g+='</i></a> <div class="dropdown-menu dropdown-menu-lg pull-right"> <div class="listview" id="notifications"> <div class="lv-header"> ',g+=c(e.menu.notification),g+=' </div> <div class="lv-body"> ',f(d.list,function(a){g+=' <a class="lv-item" href="#"> <div class="media"> <div class="pull-left"> <i class="zmdi zmdi-caret-right"></i> </div> <div class="media-body"> <div class="lv-title">',g+=c(a.title),g+='</div> <small class="lv-small">',g+=c(a.text),g+="</small> </div> </div> </a> "}),g+=' </div> <a class="lv-footer" href="#">',g+=c(e.btn.viewAll),g+="</a> </div> </div>",new k(g)}),/*v:1*/
a("layout/top/task",'<a data-toggle="dropdown" class="tm-task" href=""><i class="tmn-counts">2</i></a> <div class="dropdown-menu pull-right dropdown-menu-lg"> <div class="listview"> <div class="lv-header"> Tasks </div> <div class="lv-body"> <div class="lv-item"> <div class="lv-title m-b-5">HTML5 Validation Report</div> <div class="progress"> <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style="width: 95%"> <span class="sr-only">95% Complete (success)</span> </div> </div> </div> <div class="lv-item"> <div class="lv-title m-b-5">Google Chrome Extension</div> <div class="progress"> <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%"> <span class="sr-only">80% Complete (success)</span> </div> </div> </div> <div class="lv-item"> <div class="lv-title m-b-5">Social Intranet Projects</div> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%"> <span class="sr-only">20% Complete</span> </div> </div> </div> <div class="lv-item"> <div class="lv-title m-b-5">Bootstrap Admin Template</div> <div class="progress"> <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%"> <span class="sr-only">60% Complete (warning)</span> </div> </div> </div> <div class="lv-item"> <div class="lv-title m-b-5">Youtube Client App</div> <div class="progress"> <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%"> <span class="sr-only">80% Complete (danger)</span> </div> </div> </div> </div> <a class="lv-footer" href="">View All</a> </div> </div>'),/*v:1*/
a("public/breadcrumbs",function(a){"use strict";var b=this,c=(b.$helpers,b.$each),d=a.breadcrumbs,e=(a.$value,a.$index,b.$escape),f="";return f+='<div class="block-header"> <h2> <ol class="breadcrumb"> ',c(d,function(a){f+=" ",a.href?(f+=' <li><a href="',f+=e(a.href),f+='">',f+=e(a.title),f+="</a></li> "):(f+=' <li class="active">',f+=e(a.title),f+="</li> "),f+=" "}),f+=' </ol> </h2> <ul class="actions"> <li> <a href="javascript:mycatui.page.reload()"> <i class="zmdi zmdi-refresh-alt"></i> </a> </li> </ul> </div>',new k(f)}),/*v:1*/
a("public/error",function(a){"use strict";var b=this,c=(b.$helpers,b.$escape),d=a.status,e=a.msg,f="";return f+='<div class="container" style="position: relative"> <div class="four-zero"> <h2>',f+=c(d),f+="</h2> <small>",f+=c(e),f+='</small> <footer> <a href="javascript:window.history.back();"><i class="zmdi zmdi-arrow-back"></i></a> <a href="#"><i class="zmdi zmdi-home"></i></a> </footer> </div> </div>',new k(f)})}();