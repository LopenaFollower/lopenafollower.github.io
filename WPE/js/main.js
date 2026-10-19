let active=null;
function moveTo(e,o=0){
	active=[e,o];
	const s=document.getElementById("highlight").style;
	s.top=e.offsetTop+"px";
	s.left=e.offsetLeft-o+"px";
	s.width=e.offsetWidth+o+"px";
	s.height=e.offsetHeight+"px";
}
const aside=document.querySelector("aside");
if(aside){
	const btn=aside.querySelector(".ov_btn")
	moveTo(btn);
	btn.addEventListener("click",()=>moveTo(btn));
	aside.querySelectorAll("li").forEach(e=>{
		e.addEventListener("click",()=>moveTo(e,20));
	});
}
function j_display(id){
	document.querySelectorAll(".main").forEach(e=>e.style.display="none");
	const el=document.getElementById(id);
	if(!el)return;
	el.removeAttribute("style");
	el.scrollTo(0,0);
}
const entries={
	classroom:[
		{h:"All-University Academic Convocation",t:"July 15, 2026",d:"An official convocation that marks the opening of the academic year, attended by faculty, staff, and students."},
		{h:"CCS Freshmen, Shiftees, & Transferees Orientation",t:"July 22, 2026",d:"A orientation for freshmen, shiftees, and transferees into the College of Computer Studies."},
		{h:"University-Wide Orientation",t:"July 29, 2026",d:"Officially welcomed incoming freshmen and new students, introducing them to university life, policies, and campus culture."},
		{h:"DOST ISKOmpass Orientation",t:"August 8, 2026",d:""},
		{h:"One Big Tuyok Campus Tour",t:"August 19, 2026",d:""},
		{h:"Miller Solutions Development Inc. Industry Lecture and Workshop",t:"August 25, 2026",d:""},
		{h:"Mental Health Caravan: Building Your Mental Health Toolkit",t:"September 16, 2026",d:""},
	],
	church:[
		{h:"CHS Chapel Worship Service",t:"July 12, 2026",d:""},
		{h:"CCS Opening Devotion",t:"August 24, 2026",d:""},
		{h:"UCLEM 2026: Remembering with Gratitude",t:"September 22, 2026",d:""},
		{h:"CHS Closing Worship Service & Class Fellowship",t:"October 8, 2026",d:""},
		{h:"DCC Youth Friday Night Bible Study",t:"October 9, 2026",d:""}
	],
	court:[
		{h:"CCS Sportsfest Pickleball",t:"September 30, 2026",d:""},
		{h:"CCS Sportsfest Badminton",t:"September 30, 2026",d:""},
		{h:"CCS Sportsfest Chess",t:"September 30, 2026",d:""},
		{h:"CCS Sportsfest Basketball",t:"October 3, 2026",d:""},
		{h:"CCS Sportsfest Volleyball",t:"October 3, 2026",d:""}
	],
	culture:[
		{h:"Resonance: 100 Years of Music with the Manila Symphony Orchestra",t:"June 26, 2026",d:""},
		{h:"Accumulation: Co. Esgara Dance",t:"August 20, 2026",d:""},
		{h:"Parada Sillimaniana",t:"August 27, 2026",d:""},
		{h:"ROTC Inter-Company Speech Contest",t:"September 5, 2026",d:""},
		{h:"Pilipino: Ang Pgka Mulat",t:"September 18, 2026",d:""},
		{h:"Souvenirs: The Art of Song and Piano",t:"September 25, 2026",d:""},
		{h:"Legacy in Sound: 120 Years of Silliman University Symphonic Band",t:"October 2, 2026",d:""}
	],
	community:[
		{h:"ROTC Nutri-Fit Walk 2026",t:"July 26, 2026",d:""},
		{h:"Virtual Fun Run/Ride for a Cause",t:"September 26, 2026",d:""},
		{h:"Sto. Niño Orphanage White Gift",t:"October 7, 2026",d:""}
	]
}
function j_category(c){
	let html="";
	const category=entries[c];
	category.forEach((e,i)=>html+=`<div class="post"><h3><a onclick="j_display('${c}_e${+i+1}')"class="post-title">${e.h}</a></h3><p class="post-date">${e.t}</p><p class="post-content">${e.d}</p></div>`);
	document.getElementById("entry_list").innerHTML=html;
	j_display('entries');
}
addEventListener("resize",()=>active&&moveTo(...active));
document.fonts.ready.then(()=>active&&moveTo(...active));