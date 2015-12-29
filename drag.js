function Drag(){
	this.obj=null;
	this.disX=null;
	this.disY=null;
}
Drag.prototype.init=function(id){
	var _this=this;
	this.obj=document.getElementById(id);
	this.obj.onmousedown=function(ev){
		ev=ev||event;
		_this.disX=ev.clientX-_this.obj.offsetLeft;
		_this.disX=ev.clientY-_this.obj.offsetTop;
		
		document.onmousemove=function(ev){
			ev=ev||event;
		}
	}
} 