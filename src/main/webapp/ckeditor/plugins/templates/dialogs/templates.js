/*
 * Licensed to Jasig under one or more contributor license
 * agreements. See the NOTICE file distributed with this work
 * for additional information regarding copyright ownership.
 * Jasig licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file
 * except in compliance with the License. You may obtain a
 * copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
﻿/*
Copyright (c) 2003-2010, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

(function(){var a=CKEDITOR.document;CKEDITOR.dialog.add('templates',function(b){function c(h,i){h.setHtml('');for(var j=0;j<i.length;j++){var k=CKEDITOR.getTemplates(i[j]),l=k.imagesPath,m=k.templates,n=m.length;for(var o=0;o<n;o++){var p=m[o],q=d(p,l);q.setAttribute('aria-posinset',o+1);q.setAttribute('aria-setsize',n);h.append(q);}}};function d(h,i){var j=CKEDITOR.dom.element.createFromHtml('<a href="javascript:void(0)" tabIndex="-1" role="option" ><div class="cke_tpl_item"></div></a>'),k='<table style="width:350px;" class="cke_tpl_preview" role="presentation"><tr>';if(h.image&&i)k+='<td class="cke_tpl_preview_img"><img src="'+CKEDITOR.getUrl(i+h.image)+'"'+(CKEDITOR.env.ie6Compat?' onload="this.width=this.width"':'')+' alt="" title=""></td>';k+='<td style="white-space:normal;"><span class="cke_tpl_title">'+h.title+'</span><br/>';if(h.description)k+='<span>'+h.description+'</span>';k+='</td></tr></table>';j.getFirst().setHtml(k);j.on('click',function(){e(h.html);});return j;};function e(h){var i=CKEDITOR.dialog.getCurrent(),j=i.getValueOf('selectTpl','chkInsertOpt');if(j){b.on('contentDom',function(k){k.removeListener();i.hide();var l=new CKEDITOR.dom.range(b.document);l.moveToElementEditStart(b.document.getBody());l.select(true);setTimeout(function(){b.fire('saveSnapshot');},0);});b.fire('saveSnapshot');b.setData(h);}else{b.insertHtml(h);i.hide();}};function f(h){var i=h.data.getTarget(),j=g.equals(i);if(j||g.contains(i)){var k=h.data.getKeystroke(),l=g.getElementsByTag('a'),m;if(l){if(j)m=l.getItem(0);else switch(k){case 40:m=i.getNext();break;case 38:m=i.getPrevious();break;case 13:case 32:i.fire('click');}if(m){m.focus();h.data.preventDefault();}}}};CKEDITOR.skins.load(b,'templates');var g;return{title:b.lang.templates.title,minWidth:CKEDITOR.env.ie?440:400,minHeight:340,contents:[{id:'selectTpl',label:b.lang.templates.title,elements:[{type:'vbox',padding:5,children:[{type:'html',html:'<span>'+b.lang.templates.selectPromptMsg+'</span>'},{id:'templatesList',type:'html',focus:true,html:'<div class="cke_tpl_list" tabIndex="-1" role="listbox" aria-labelledby="cke_tpl_list_label"><div class="cke_tpl_loading"><span></span></div></div><span class="cke_voice_label" id="cke_tpl_list_label">'+b.lang.templates.options+'</span>'},{id:'chkInsertOpt',type:'checkbox',label:b.lang.templates.insertOption,'default':b.config.templates_replaceContent}]}]}],buttons:[CKEDITOR.dialog.cancelButton],onShow:function(){var h=this.getContentElement('selectTpl','templatesList');g=h.getElement();
CKEDITOR.loadTemplates(b.config.templates_files,function(){var i=b.config.templates.split(',');if(i.length){c(g,i);h.focus();}else g.setHtml('<div class="cke_tpl_empty"><span>'+b.lang.templates.emptyListMsg+'</span>'+'</div>');});this._.element.on('keydown',f);},onHide:function(){this._.element.removeListener('keydown',f);}};});})();