var LNWFILE_JSONP = 'lnwfile_jsonp';
function file_upload_url () {return "http://b-up.lnwfile.com/lnwshop/upload/";}
function file_upload_flash_url () {return "http://b-up.lnwfile.com/lnwshop/upload_flash/";}
function file_upload_icon_url () {return "http://b-up.lnwfile.com/lnwshop/upload_icon/";}
function file_upload_document_url () {return "http://b-up.lnwfile.com/lnwshop/upload_document/";}
function file_upload_manage_url () {return "http://b-up.lnwfile.com/lnwshop/upload_manage/";}
function file_flash_url () {return "http://b-up.lnwfile.com/swf/swfupload.swf";}
function file_uploadify_url () {return "http://b-up.lnwfile.com/swf/uploadify.swf";}
function file_jsonp_url (uri) {return "http://b-up.lnwfile.com/lnwshop/jsonp/"+(uri===undefined?"":uri)+"?"+LNWFILE_JSONP+"=?";}
function base_url (uri) {return "http://www.sodaming.com/"+(uri===undefined?"":uri);}
function site_url (uri) {return "http://www.sodaming.com/"+(uri===undefined?"":uri);}
var css_files = ['http://www.sodaming.com/system/application/templates/lnwshop/default/_css/basic.css','http://www.sodaming.com/system/application/templates/lnwshop/default/_fonts/css.css','http://www.sodaming.com/system/application/templates/lnwshop/pink_modify/_css/style.css','http://www.sodaming.com/cache/lnwshop/34/291/css/20141126201826/style.css'];
function css_url () {return css_files.join(',');}
var WEBID = 34291;
var lnw_project = 'lnwshop';
var lowerIE8 = false;
$(document).ready(function(){
	if(window.top != window){
		$('body').html("<h1 style='margin: 200px;'><a href='" + window.location.href + "' target='_top'>Click here to enter</a></h1>");
	}
	$.ajaxSetup({
		dataType: "html",
		cache: false
	});
	$(this).ajaxSend(function(e, xhr, settings) {
		if(typeof settings.data=='undefined' || settings.data == null){
			settings.data = 'ajaxxxx=true';
		}else if(typeof settings.data=='string'){
			settings.data += '&ajaxxxx=true';
		}else if($.isArray(settings.data)){
			settings.data.push({name:'ajaxxxx',value:true});
		}else if(typeof FormData !== 'undefined'){
			settings.data.append('ajaxxxx',true);
		}
	});
});