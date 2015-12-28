function Drag(){
	this.id=null;
}
Drag.prototype.init=function(id){
	this.obj=document.getElementById(id);
	this.obj.onmousedown=function(ev){
		ev=ev||event;
	}
}