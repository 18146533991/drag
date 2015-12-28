function Drag(){
	this.obj=null;
	this.disX=null;
	this.disY=null;
}
Drag.prototype.init=function(id){
	this.obj=document.getElementById(id);
	this.obj.onmousedown=function(ev){
		ev=ev||event;
		this.disX=ev.clientX-this.obj.offsetLeft;
		this.disX=ev.clientY-this.obj.offsetTop;
	}
}