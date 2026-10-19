const root=document.documentElement;
let icon_path="",stored=null;
function setInfo(key,val){
	stored=val;
	root.setAttribute(key,val);
	try{localStorage.setItem(key,val)}catch{}
	icon_path=val=="dark"?`<path d="M14 8.527A6 6 0 1 1 7.473 2 4.667 4.667 0 0 0 14 8.527"></path>`:`<circle cx="8"cy="8"r="3.333"></circle><path d="M8 .667V2M8 14v1.333M2.813 2.813l.947.947M12.24 12.24l.947.947M.667 8H2M14 8h1.333M2.813 13.187l.947-.947M12.24 3.76l.947-.947"></path>`;
	const icon=document.getElementById("theme_icon");
	if(icon)document.getElementById("theme_icon").innerHTML=icon_path;
}
function toggle(){
	setInfo("data-jtheme",stored=="dark"?"light":"dark");
}
try{stored=localStorage.getItem("data-jtheme")}catch{}
setInfo("data-jtheme",["light","dark"].includes(stored)?stored:matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");
document.addEventListener("DOMContentLoaded",()=>{
	document.getElementById("theme_icon").innerHTML=icon_path;
});