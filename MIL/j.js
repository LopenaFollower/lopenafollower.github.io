const{$}=(function(){
	const p=["#cvs","#hm","#bs","#b1","#b2","#b3"];
	const t=["MIL Blog","MIL Blog","Blog Posts","Portfolio Building","History of Media","Third Blog"];
	const c=cvs.getContext("2d"),{abs,sin,cos,PI}=Math;cvs.width=cvs.height=200;c.translate(100,100);
	let currentActive;
	function q(z){
		return document.querySelector(z);
	}
	function $(v){
		for(let k of p)q(k).style.display=k==v?"block":"none";
		document.title=t[p.indexOf(v)];
		currentActive=v;
	}
	function tp(i1,i2){ // transition from page to page
	
	}
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
			this.l[0]=-this.l[0]/this.l[3]*11.9;
			this.l[1]=-this.l[1]/this.l[3]*11.9;
			this.l[2]=-this.l[2]/this.l[3]*11.9;
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
	function scrollTest(){
		const cs=["#592f29","#59302a","#59312a","#59312b","#59322c","#5a332d","#5a342d","#5a342e","#5a352f","#5a362f","#5a3730","#5a3831","#5a3832","#5b3932","#5b3a33","#5b3b34","#5b3b34","#5b3c35","#5b3d36","#5b3e37","#5b3f37","#5c3f38","#5c4039","#5c4139","#5c423a","#5c423b","#5c433c","#5c443c","#5c453d","#5d453e","#5d463e","#5d473f","#5d4840","#5d4941","#5d4941","#5d4a42","#5d4b43","#5e4c43","#5e4c44","#5e4d45","#5e4e46","#5e4f46","#5e5047","#5e5048","#5e5148","#5f5249","#5f534a","#5f534b","#5f544b","#5f554c","#5f554c","#5f564c","#5f574d","#5f574d","#5f584e","#5e594e","#5e5a4f","#5e5a4f","#5e5b4f","#5e5c50","#5e5d50","#5e5e51","#5e5e51","#5d5f52","#5d6052","#5d6152","#5d6153","#5d6253","#5d6354","#5d6454","#5d6555","#5c6555","#5c6655","#5c6756","#5c6856","#5c6857","#5c6957","#5c6a58","#5c6b58","#5b6b58","#5b6c59","#5b6d59","#5b6e5a","#5b6f5a","#5b6f5b","#5b705b","#5b715b","#5a725c","#5a725c","#5a735d","#5a745d","#5a755e","#5a765e","#5a765e","#5a775f","#59785f","#597960","#597960","#597a61","#597b61"];
		let[top,bottom]=["#b2-top","#b2-bottom"].map(e=>document.querySelector(e).getBoundingClientRect().y);
		let mid=(top+bottom)/2;
		document.querySelector("#b2>div").style.background=cs[mid/bottom/.8*cs.length|0];
	}
	function L(){
		requestAnimationFrame(L);
		c.clearRect(-150,-150,300,300);
		c.lineWidth=6.8;c.lineCap="round";c.strokeStyle="#fff";
		ry=(ry+0.00720471229)%(PI*2);rw=(rw-0.01193376)%(PI*2);
		let w=77,v="-,-,,,-,,,,,-,,,---,,--,,-,,--,,-,--,,--,,,--,,-----,---,-,---,-".match(/.{4}/g).map(e=>new V(...[...e].map(j=>({"-":-1,",":1}[j]*w/21.6))));
		for(let i of v){
			if(rx*rx+ry*ry+rz*rz+rw*rw)i.r(rx,ry,rz,rw);
			i.p();
		}
		let f="012347650451267389abcfed8cd9aefb019823ba47fc65de".match(/.{4}/g).map(e=>new F(...[...e].map(n=>v[parseInt(n,16)])));
		for(let i of f)i.d();
		document.head.querySelector("link[rel=icon]").href=cvs.toDataURL();
		//scrollTest();
	}
	L();
	$(p[1]);
	[...document.querySelectorAll(".post-date")].forEach(e=>e.innerText=new Date(+e.innerText).toLocaleString());
	return{$};
})();