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
		_this.disY=ev.clientY-_this.obj.offsetTop;
		
		document.onmousemove=function(ev){
			ev=ev||event;
			_this.obj.style.left=ev.clientX-_this.disX+'px';
			_this.obj.style.top=ev.clientY-_this.disY+'px';
		}
		
		document.onmouseup=function(){
			document.onmousemove=null;
			document.onmouseup=null;
			_this.obj.releaseCapture && _this.obj.releaseCapture();
		}
		_this.obj.setCapture && _this.obj.setCapture();
		return false;
	}
} 