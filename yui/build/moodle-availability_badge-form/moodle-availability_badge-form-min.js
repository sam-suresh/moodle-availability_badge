YUI.add("moodle-availability_badge-form",function(e,t){M.availability_badge=M.availability_badge||{},M.availability_badge.form=e.Object(M.core_availability.plugin),M.availability_badge.form.badges=null,M.availability_badge.form.initInner=function(e){this.badges=e},M.availability_badge.form.getNode=function(t){var n="<label>"+M.util.get_string("title","availability_badge")+' <span class="availability-badge">'+'<select name="id">'+'<option value="choose">'+M.util.get_string("choosedots","moodle")+"</option>";for(var r=0;r<this.badges.length;r++){var i=this.badges[r];n+='<option value="'+i.id+'">'+i.name+"</option>"}n+="</select></span></label>";var s=e.Node.create("<span>"+n+"</span>");t.creating===undefined&&t.id!==undefined&&s.one("select[name=id] > option[value="+t.id+"]")&&s.one("select[name=id]").set("value",""+t.id);if(!M.availability_badge.form.addedEvents){M.availability_badge.form.addedEvents=!0;var o=e.one("#fitem_id_availabilityconditionsjson");o.delegate("change",function(){M.core_availability.form.update()},".availability_badge select")}return s},M.availability_badge.form.fillValue=function(e,t){var n=t.one("select[name=id]").get("value");n==="choose"?e.id="choose":n!=="any"&&(e.id=parseInt(n,10))},M.availability_badge.form.fillErrors=function(e,t){var n={};this.fillValue(n,t),n.id&&n.id==="choose"&&e.push("availability_badge:error_selectbadge")}},"@VERSION@",{requires:["base","node","event","moodle-core_availability-form"]});
