const isMobile=(function(){
	let e,o=/(android|bb\d+|meego).+mobile|avantgo|bada\/|bla(ckberry|zer)|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i;
	return(e=navigator.userAgent)&&e.headers&&"string"==typeof e.headers["user-agent"]&&(e=e.headers["user-agent"]),"string"==typeof e&&(!!(navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform))||o.test(e));
})();
let displayed="cube";
const{$}=(function(){
	const p=["#hiden","#hm","#bs","#b1","#b2","#b3","#b4","#b5","#b6"];
	const t=["MIL Blog","MIL Blog","Blog Posts","Portfolio Building","History of Media","Promotional Video","Magazine","Podcast","Print Ad"];
	function q(z){
		return document.querySelector(z);
	}
	function $(v){
		for(let k of p)q(k).style.display=k==v?"block":"none";
		document.title=t[p.indexOf(v)];
	}
	$(p[1]);
	[...document.querySelectorAll(".post-date")].forEach(e=>e.innerText=new Date(+e.innerText).toLocaleString());
	document.addEventListener("DOMContentLoaded",()=>{
		let{href}=location,query=href.indexOf("?")<0?0:href.split("?q=")[1];
		if(query){
			let redir={home:"#hm",blogs:"#bs",b1:"#b1",b2:"#b2",b3:"#b3",b4:"#b4",b5:"#b5",b6:"#b6"};
			if(redir[query])$(redir[query]);
		}
	});
	return{$};
})();
const L1=(function Tesseract(){
	const c=tesseract.getContext("2d"),{abs,sin,cos,PI}=Math;tesseract.width=tesseract.height=200;c.translate(100,100);
	let rx=0,ry=0,rz=0,rw=0;
	class V{
		constructor(x,y,z,w){
			this.l=[x,y,z,w];
			this.pl=[];
		}
		r(xr,yr,zr,wr){
			let[,yy]=this.l;
			this.l[1]=yy*cos(wr)-this.l[3]*sin(wr);
			this.l[3]=yy*sin(wr)+this.l[3]*cos(wr);
			let[x,y,z]=this.l,r=-PI/8;
			let sx=sin(xr+=r),sy=sin(yr+=r),sz=sin(zr+=r),cx=cos(xr),cy=cos(yr),cz=cos(zr);
			this.l[0]=cy*(sz*y+cz*x)-sy*z;
			this.l[1]=sx*(cy*z+sy*(sz*y+cz*x))+cx*(cz*y-sz*x);
			this.l[2]=cx*(cy*z+sy*(sz*y+cz*x))-sx*(cz*y-sz*x);
		}
		p(){
			this.l[3]+=16.8067;
			let c=-this.l[3]/11.9;
			this.l[0]/=c;this.l[1]/=c;this.l[2]/=c;
			let x=this.l[0]-2.614815,y=this.l[1]-1.50463,z=this.l[2]+27.5787,sx=sin(.1),sy=sin(-0.03686),sz=sin(-0.5456),cx=cos(.1),cy=cos(-0.03686),cz=cos(-0.5456),dz=cx*(cy*z+sy*(sz*y+cz*x))-sx*(cz*y-sz*x);
			this.pl=[21.6**2/dz*(cy*(sz*y+cz*x)-sy*z),21.6**2/dz*(sx*(cy*z+sy*(sz*y+cz*x))+cx*(cz*y-sz*x))];
		}
	}
	class F{
		constructor(a,b,c,d){
			this.v=[a,b,c,d];
		}
		d(){
			c.beginPath();
			c.moveTo(...this.v[0].pl);
			this.v.shift();
			for(let i of this.v)c.lineTo(...i.pl);
			c.closePath();
			c.stroke();
		}
	}
	function L(){
		c.clearRect(-150,-150,300,300);
		c.lineWidth=6.8;c.lineCap="round";c.strokeStyle="#fff";
		ry=(ry+0.00720471229)%(PI*2);rw=(rw-0.01193376)%(PI*2);
		let w=77,v="0101110111110111000110011011001101001100111001100000100010100010".match(/.{4}/g).map(e=>new V(...[...e].map(j=>(-1)**j*w/21.6)));
		for(let i of v){
			if(rx*rx+ry*ry+rz*rz+rw*rw)i.r(rx,ry,rz,rw);
			i.p();
		}
		let f="012347650451267389abcfed8cd9aefb019823ba47fc65de".match(/.{4}/g).map(e=>new F(...[...e].map(n=>v[parseInt(n,16)])));
		for(let i of f)i.d();
		if(displayed=="tesseract")document.head.querySelector("link[rel=icon]").href=tesseract.toDataURL();
	}
	return L;
})();
const L2=(function D3Display(){
	const c=a3d_disp.getContext("2d"),p=.95,{sin,cos}=Math;a3d_disp.width=a3d_disp.height=200;
	let pT=Date.now(),dT,a={x:0,y:0,z:0};
	class m4x4{
		constructor(){
			this.m=Array.from({length:4},e=>Array(4).fill(0));
		}
	}
	function matMul(i,m){
		let out={};
		out.x=i.x*m.m[0][0]+i.y*m.m[1][0]+i.z*m.m[2][0]+m.m[3][0];
		out.y=i.x*m.m[0][1]+i.y*m.m[1][1]+i.z*m.m[2][1]+m.m[3][1];
		out.z=i.x*m.m[0][2]+i.y*m.m[1][2]+i.z*m.m[2][2]+m.m[3][2];
		let w=i.x*m.m[0][3]+i.y*m.m[1][3]+i.z*m.m[2][3]+m.m[3][3];
		if(w){
			out.x/=w;out.y/=w;out.z/=w;
		}
		return out;
	}
	function getNormal(g){
		let l1={x:g.p[1].x-g.p[0].x,y:g.p[1].y-g.p[0].y,z:g.p[1].z-g.p[0].z},l2={x:g.p[2].x-g.p[1].x,y:g.p[2].y-g.p[1].y,z:g.p[2].z-g.p[1].z};
		let norm={x:l1.y*l2.z-l1.z*l2.y,y:l1.z*l2.x-l1.x*l2.z,z:l1.x*l2.y-l1.y*l2.x};
		let len=Math.sqrt(norm.x**2+norm.y**2+norm.z**2);
		norm.x/=len;norm.y/=len;norm.z/=len;
		return norm;
	}
	function u(time){
		c.clearRect(0,0,300,300);
		dT=time-pT;pT=time;
		let tF=dT/1e4;
		a.x+=tF*3;
		a.y+=tF*-2;
		a.z+=tF*4;
		let rX={m:[[1,0,0,0],[0,cos(a.x),sin(a.x),0],[0,-sin(a.x),cos(a.x),0],[0,0,0,1]]},rY={m:[[cos(a.y),0,-sin(a.y),0],[0,1,0,0],[sin(a.y),0,cos(a.y),0],[0,0,0,1]]};
		let w2=100,h2=100;
		for(let v of[
			{p:[{x:-p,y:-p,z:-p},{x:-p,y:p,z:-p},{x:p,y:p,z:-p}],col:"#00f"},
			{p:[{x:-p,y:-p,z:-p},{x:p,y:p,z:-p},{x:p,y:-p,z:-p}],col:"#00f"},
			{p:[{x:p,y:-p,z:-p},{x:p,y:p,z:-p},{x:p,y:p,z:p}],col:"red"},
			{p:[{x:p,y:-p,z:-p},{x:p,y:p,z:p},{x:p,y:-p,z:p}],col:"red"},
			{p:[{x:p,y:-p,z:p},{x:p,y:p,z:p},{x:-p,y:p,z:p}],col:"#fff"},
			{p:[{x:p,y:-p,z:p},{x:-p,y:p,z:p},{x:-p,y:-p,z:p}],col:"#fff"},
			{p:[{x:-p,y:-p,z:p},{x:-p,y:p,z:p},{x:-p,y:p,z:-p}],col:"orange"},
			{p:[{x:-p,y:-p,z:p},{x:-p,y:p,z:-p},{x:-p,y:-p,z:-p}],col:"orange"},
			{p:[{x:-p,y:p,z:-p},{x:-p,y:p,z:p},{x:p,y:p,z:p}],col:"#070"},
			{p:[{x:-p,y:p,z:-p},{x:p,y:p,z:p},{x:p,y:p,z:-p}],col:"#070"},
			{p:[{x:p,y:-p,z:p},{x:-p,y:-p,z:p},{x:-p,y:-p,z:-p}],col:"#ff0"},
			{p:[{x:p,y:-p,z:p},{x:-p,y:-p,z:-p},{x:p,y:-p,z:-p}],col:"#ff0"}
		]){
			let tri={p:[...v.p],col:v.col,fill:1};
			for(let i=0;i<3;i++)tri.p[i]=matMul(matMul(matMul(v.p[i],rX),rY),{m:[[cos(a.z),sin(a.z),0,0],[-sin(a.z),cos(a.z),0,0],[0,0,1,0],[0,0,0,1]]});
			for(let i=0;i<3;i++)tri.p[i].z=tri.p[i].z+4;
			for(let i=0;i<3;i++)tri.p[i]=matMul(tri.p[i],{m:[[1.7320508075688774,0,0,0],[0,1.7320508075688774,0,0],[0,0,1.000100010001,1],[0,0,-0.10001000100010002,0]]});
			let norm=getNormal(tri);
			if(norm.z>0)continue;
			for(let i=0;i<3;i++){
				tri.p[i].x+=1;tri.p[i].y+=1;
				tri.p[i].x*=w2;tri.p[i].y*=h2;
			}
			let[p1,p2,p3]=tri.p;
			c.beginPath();
			c.moveTo(p1.x,p1.y);
			c.lineTo(p2.x,p2.y);
			c.lineTo(p3.x,p3.y);
			c.lineTo(p1.x,p1.y);
			c.fillStyle=tri.col;
			c.fill();
		}
		if(displayed=="cube")document.head.querySelector("link[rel=icon]").href=a3d_disp.toDataURL();
	}
	return u;
})();
const L3=(function(){
	let b=document.querySelector(".book"),focused;
	b.style.setProperty("--p",0);
	b.querySelectorAll(".page").forEach((p,i)=>{
		p.style.setProperty("--i",i);
		p.addEventListener("click",c=>!focused&&b.style.setProperty("--p",c.target.closest(".back")?i:i+1));
		b.style.setProperty("--pc",i+1);
	});
	const cvs=crossword,ctx=cvs.getContext("2d");
	let targetPage=cvs.parentNode;
	function lp(e,c){
		let t;
		function cancel(){
			clearTimeout(t);
		}
		e.addEventListener("touchstart",_=>{ 
			t=setTimeout(()=>{
				timer=null;
				c(_);
			},300);
		});
		e.addEventListener("touchend",cancel);
		e.addEventListener("touchmove",cancel);
	}
	let selection={
		pos:[-1,-1],
		dir:""
	};
	let data=[
		["", "", "", "", "", "", "", "", "", "s","", "", "", "", "", "", "", "", "", ""],
		["", "", "", "", "", "", "", "", "", "e","", "", "", "t","", "", "", "", "", ""],
		["", "", "", "", "", "", "", "c","", "c","", "", "", "w","", "", "", "", "", ""],
		["", "", "", "", "", "", "", "y","", "u","", "", "", "o","", "", "", "", "", ""],
		["", "", "", "", "", "", "", "b","", "r","", "", "", "f","", "", "", "", "", ""],
		["", "", "", "", "f","a","k","e","n","e","w","s","", "a","", "", "", "", "", ""],
		["", "", "", "", "", "", "", "r","", "", "", "", "","c","o","n","s","e","n","t"],
		["", "", "", "", "", "", "", "b","", "", "", "", "", "t","", "", "", "", "", ""],
		["", "", "", "", "", "", "", "u","", "c","", "", "", "o","", "", "", "", "", ""],
		["", "d","i","g","i","t","a","l","f","o","o","t","p","r","i","n","t","", "", ""],
		["", "", "", "", "", "", "", "l","", "p","", "", "l","", "", "", "", "", "", ""],
		["", "p","r","i","v","a","c","y","", "y","", "p","a","s","s","w","o","r","d",""],
		["", "", "", "", "", "", "", "i","", "r","", "", "g","", "", "", "", "", "", ""],
		["", "", "", "", "", "", "", "n","", "i","", "f","i","r","e","w","a","l","l",""],
		["p","h","i","s","h","i","n","g","", "g","", "", "a","", "", "", "", "", "", ""],
		["", "", "", "", "", "", "", "", "", "h","", "", "r","e","s","p","e","c","t",""],
		["", "", "", "", "r","e","p","o","r","t","", "", "i","", "", "", "", "", "", ""],
		["", "", "", "", "", "", "", "", "", "", "", "", "s","", "", "", "", "", "", ""],
		["", "", "", "", "", "", "", "", "", "", "", "", "m","", "", "", "", "", "", ""]
	];
	const dirs=[];
	function newSelection(x,y){
		console.log(data[y][x])
		if(data[y][x]){
			selection.pos=[x,y];
			selection.dir=dirs[y][x];
		}
	}
	function gp([x1,y1],x2,y2){
		return x1==x2&&y1==y2;
	}
	function render(){
		let w=cvs.width,mx=data[0].length,my=data.length,p=w/mx,s=false;
		cvs.height=p*my;
		ctx.strokeStyle="#000";
		for(let y=0;y<my;y++)for(let x=0;x<mx;x++)if(data[y][x]){
			let cur=gp(selection.pos,x,y);
			if(s&!cur){
				ctx.strokeStyle="#000";
				s=false;
			}
			if(cur){
				ctx.strokeStyle="gold";
				s=true;
			}
			ctx.strokeRect(x*p,y*p,p,p);
		}
	}
	function toggleFocus(e,p){
		e.preventDefault();
		if(b.style.getPropertyValue("--p")==p)cvs.parentNode.classList.toggle("focus");
	}
	//if(isMobile)lp(targetPage,toggleFocus);else cvs.addEventListener("contextmenu",toggleFocus);
	cvs.addEventListener("click",e=>{
		let w=cvs.width,h=cvs.height;
		let p=w/19;
		newSelection(w/p|0,h/p|0);
	});
	function loop(){
		focused=Array.from(targetPage.classList).includes("focus");
		let wrapper=b4.querySelector(".wrapper");
		wrapper.style.marginTop=focused?"220px":0;
		wrapper.style.perspective=focused?"2000px":"700px";
		b.style.rotate=focused?"1 1 1 0deg":"1 0 0 27deg";
		[...document.querySelectorAll(".front"),...document.querySelectorAll(".back")].forEach(e=>{
			if(!Array.from(e.classList).includes("focus")){
				e.style.opacity=+!focused;
				e.parentNode.style.borderColor=focused?"#0000":"#0008";
			}
		});
		targetPage.style.scale=focused?2.5:1;
		//if front page:
		targetPage.style.translate=focused?"-50% 0%":"0% 0%";
		
		//if back page:
		//targetPage.style.translate=focused?"-150% 0%":"-100% 0%";
		try{
			let vm=b4vm.value;
			vm1.style.display=vm2.style.display="none";
			eval("vm"+vm).style.display="block";
		}catch(e){
			vm1.style.display="block";
		}
		try{
			b6img.src=window.b64img["9.3.8.35"];
		}catch(e){};
		render();
	}
	return loop;
})();
requestAnimationFrame(function _(t){
	requestAnimationFrame(_);
	L1();
	L2(t);
	L3();
});