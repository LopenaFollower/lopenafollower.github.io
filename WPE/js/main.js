const $=id=>document.getElementById(id),slot=(root,name)=>root.querySelector(`[data-nm="${name}"]`);
let active=null;
function moveTo(e,o=0){
	active=[e,o];
	const s=$("highlight").style;
	s.top=e.offsetTop+"px";
	s.left=e.offsetLeft-o+"px";
	s.width=e.offsetWidth+o+"px";
	s.height=e.offsetHeight+"px";
}
addEventListener("resize",()=>active&&moveTo(...active));
document.fonts.ready.then(()=>active&&moveTo(...active));
const aside=document.querySelector("aside"),btn=aside.querySelector(".ov_btn");
moveTo(btn);
btn.addEventListener("click",()=>moveTo(btn));
aside.querySelectorAll("li").forEach(e=>e.addEventListener("click",()=>moveTo(e,20)));
const orgs=["the Office of Student Services","the Confederates Student Council","the SU Culture and Arts Council","the SU ROTC Unit","the SU Divinity School"];
const entries={
	classroom:[
		{
			title:"All-University Academic Convocation",
			org:orgs[0],date:"July 15, 2026",time:"9:00AM – 11:00AM",
			desc:"An official convocation that marks the opening of the academic year, attended by faculty, staff, and students.",
			about:[
				`On the 15th of July, many colleges were called to assemble in the Luce Auditorium to have a convocation to welcome the students and to formally start the academic year of 2026-2027.`,
				`Unfortunately by the time I arrive, the usher at the door stated that the auditorium was already full leaving many to watch the program through a screen display placed outside.`,
				`During the event, members of the Administration, the Deans' Conference, and unit heads are introduced and welcomed, the Management Transition team discussed operational updates, and the general direction of what will happen during this academic year.`
			],
			reflection:[
				`This event served to me as a welcome into Silliman University as a whole, aside from the per-college orientations of course, and this is where I would learn about the different members of the administration and staff.`,
				`Overall, I am able to be oriented with the different happenings in the university, especially since its my first year ever in Silliman University.`
			],
			photos:[
				["IMG_20260715_1.jpg",400],
				["IMG_20260715_2.jpg",400,"The outdoor screen display of the ongoing convocation."]
			]
		},
		{
			title:"CCS Freshmen, Shiftees, & Transferees Orientation",
			org:orgs[1],date:"July 22, 2026",time:"9:00AM – 12:00NN",
			desc:"A orientation for freshmen, shiftees, and transferees into the College of Computer Studies.",
			about:[
				`All the first year students, shiftees, and transferees were gathered at the ATA Hall on the third floor of the UCS building to be oriented on the different staff, guildlines, and other miscellaneous information regarding the College.`,
				`In this orientation, the staff and faculty heirarchy is introduced, including the role of each personel. The policies and procedures, and other info are also discussed: Map and features of buildings relevant to the college, subject grading systems and other grade related discussion, handbook and clearance overview.`,
				`The Confederates Student Council was also introduced which featured the different members of the government, their roles, and events that will be hosted by them. Regarding the events, council fees are also discussed with extra fees from not attending them.`
			],
			reflection:[
				`By attending this orientation, I was able to understand how things operate within the College of Computer Studies. I get to see and know new professor that are either teaching a different course or a higher level, as well as the non-teaching personel who keep and maintain the building. Another thing is getting to know the rules and policies which will guide me in things like class behavior, grading systems, instructions during events.`,
				`To conclude, the orientation served as a way for me to feel more comfortable with the CCS environment, and to familiarize the faculty and staff, and other related details.`
			],
			photos:[
				["IMG_20260722_1.jpg",225],
				["IMG_20260722_2.jpg",400]
			]
		},
		{
			title:"University-Wide Orientation",
			org:orgs[0],date:"July 29, 2026",time:"9:00AM – 11:00AM",
			desc:"Officially welcoming incoming freshmen and new students, introducing them to university life, policies, student services, and campus culture.",
			about:[
				`Many colleges were called on July 29, 2026 to assemble in the Luce Auditorium to have an orientation on how university life may be, the policies that the university abides by, and the nature and culture of being a sillimanian.`,
				`The different building, their location, and their purposes were discussed during the orientation, they also introduced the different dormitories that college students can move in to incase they're not from the city. General rules were also laid out.`,
				`Then the different services and commities were introduced to explain their roles and what they can do for the students.`
			],
			reflection:[
				`Because of this orientation, I was able to grasp and familiarize the different buildings around the campus, especially because I only know a few and relied on an old online map of the campus to navigate to my classes.`,
				`Many different useful information were shared and discussed, and the orientation also featured an intermission number in between topics to keep everyone engaged.`
			],
			photos:[
				["IMG_20260729_1.jpg",400],
				["IMG_20260729_2.jpg",400]
			]
		},
		{
			title:"DOST ISKOmpass Orientation",
			org:"DOST SA SU Government",date:"August 8, 2026",time:"3:00PM – 4:30PM",
			desc:"A brief but informative online orientation for DOST Scholars attending Silliman University.",
			about:[
				`An online meeting was held on August 8, 2026, at 3:00PM via Google Meet with the purpose of orienting DOST Scholars that are in Silliman University.`,
				`During the meeting, the different members of the DOST sa SU government introduced themselves and stated what their roles are as a government member and as a college student too.`,
				`They outlined the different activities that they are organizing for future dates, they also reiterated what was mentioned in the general DOST Scholarship orientation and gave clarifications for those who were asking during the call.`
			],
			reflection:[
				`Since it is my first time getting a scholarship, I still had a lot of confusions, especially with how much was being discussed during the initial orientation, thankfully though, I was able to clarify them through this meeting and was also able to inquire on other details that I may have missed.`,
				`I was also able to familiarize the different members incase I have any further concerns.`
			],
			photos:[
				["IMG_20260808_1.jpg",400],
				["IMG_20260808_2.png",212.25,"Certificate of Participation provided online after the meeting."]
			]
		},
		{
			title:"One Big Tuyok Campus Tour",
			org:orgs[1],date:"August 19, 2026",time:"9:00AM – 11:00AM",
			desc:"A campus tour that not only showcases the different buildings but also their backstory.",
			about:[
				`On August 19, 2026, a number of students who were not able to attend the initial campus tour were gathered, accompanied by a campus ambassador to serve as our tour guide. To go around the campus and showcase the different buildings and discuss about their history.`,
				`The students were gathered in front of the UCS building, and started with the Dr. James W. Chapman Science Complex which was noted to be the only lecture building with a tiered seating layout which gives it its unique 'butterfly like' appearance on the outside. Moving through the halls of the AH building where most of the GE subjects are held, the next stop is the Scheide Chapel which date back to around 1937 where it served as a Chapel for the nearby medical center (Now known as the Katipunan Hall). Then we slowly made our way to the Claire Isabel McGill Luce Auditorium, SU Gymnasium, the tree of life and death, Oriental Hall, and Villareal Hall where each building had their purpose and backstory told to us.`,
				`We took a short break at the Silliman Cafeteria, and continued with the buildings proceeding to the Guy Hall and Silliman Hall.`,
				`We concluded at the Horace B. Silliman Bust where we were told about a molding mistake causing an incorrect order of the folds of his suit.`
			],
			reflection:[
				`Through this campus tour, I was able to go to the different buildings in the campus rather that just hearing about them and seeing them on a map.`,
				`I also learned many details and trivias about the historic buildings around the campus and how some of them played roles during the 2nd world war.`
			],
			photos:[
				["IMG_20260819_1.jpg",225]
			]
		},
		{
			title:"Miller Solutions Development Inc. Industry Lecture and Workshop",
			org:orgs[1],date:"August 25, 2026",time:"9:00AM – 12:00NN, 2:00PM – 5:00PM",
			desc:"A lecture and workshop with the purpose of educating students on the use of agents during programming.",
			about:[
				`This event was held at the ATA Hall on August 25, 2026 from 9:00AM to 12:00NN and 2:00PM to 5:00PM. It is a lecture and workshop featuring a guest speaker from the Miller Solutions Development Inc. named Sean Erick Ramones who will discuss to us on what agentic coding is, what its purposes and applications are, the process of using these agents, and will later on guide us in applying what is discussed.`,
				`This event is divided into two portions: An introduction and lecture of the topic in the morning, and an immersive hands-on workshop in the afternoon.`,
				`In the morning, the first thing that happened was an introduction of the speaker, his background as a student from Silliman, what the company he is working at does, and what he does for the company. Then he introduced the concept of an AI that doesnt just predict the next word, but is able to construct projects from a series of specs (specific instructions) being prompted to it. He discussed in detail the cycle of production, where the engineer first plans out and write a spec, provide it to an agent, then verify what the agent wants to perform, and revise if needed. An open forum took placed after his lecture to clarify and answer different questions regarding agentic programming, then concluded the lecture by thanking the attendees.`,
				`In the afternoon, we were told to bring our laptops to partake in the hands-on workshop, here we were told what our goal was, to be achieve utilizing our agent: To create an event manager.`,
				`The first step was to plan out the specs, by doing this you are able to specify exactly what features you would want and how they are approached and function. The next step is prompt the specs to the agent, but have it return its plan before creating the project. Once revised and confirmed, I gave the agent the green flag to start the process of creating the project. He reviewed each of our results to see how accurate they are to the specs.`,
				`We performed this more times having a variation on how the specs are introduced to the agent to see how it would affect its results.`
			],
			reflection:[
				`I was able to learn in depth the process of agentic programming and how it can be used to increase my productivity while working on different kinds of projects.`,
				`As someone who usually abstains from using these types of automations, I was able to broaden my view on it by partaking in this lecture and workshop. Here I learned that human skill and input is still very important and essential to achieving something with quality.`
			],
			photos:[
				["IMG_20260825_1.jpg",400],
				["IMG_20260825_2.jpg",225,"Utiziling an agent to create code."]
			]
		},
		{
			title:"Mental Health Caravan: Building Your Mental Health Toolkit",
			org:orgs[0],date:"September 16, 2026",time:"2:00PM – 4:00PM",
			desc:"This lecture features a psychiatrist who discusses about mental health and ways to cope with it.",
			about:[
				`The event takes place in the Luce Auditorium held on September 16, 2026 from 2:00PM to 4:00PM. During the event, the main speaker Dr. Stephanie Miaco delivered a lecture focused on personal well-being, peer support, and the intrapersonal and interpersonal challenges that college student experience. She also discussed about physical breathing techniques and daily habits help cope with stress. There was also an intermission featuring students acting out a humorous skit of what a stressed college student may be.`,
				`The event ended with an open forum where people ask advice from scenarios they or a person they know are experiencing.`
			],
			reflection:[
				`Through this lecture, I am refreshed with the information on how to properly handle the stress that may come, given the proper techniques. I also learned other tips such as having better connection with others to be able to release stress through and with them.`,
				`I was also able to learn about habits that should be avoided, mainly because they just serve as a temporary solution that may worsen things in the future.`
			],
			photos:[
				["IMG_20260916_1.jpg",225]
			]
		}
	],
	church:[
		{
			title:"CHS Chapel Worship Service",
			org:"Alma Ruiz",date:"July 12, 2026",time:"8:30AM – 10:00AM",
			desc:"A choir sunday worship service with the CHS class at the Chapel of the Evangel.",
			about:[
				`This event was done under our CHS professor, Alma Ruiz, on July 12, 2026, from 8:30AM to 10:00AM at the Chapel of the Evangel as a fulfillment of our task in the CHS Subject. At the call time of 8:30, we were given 30 minutes that serves at time to practice our selected song as a choir. The song that we performed was named "Siyahamba" which is an African worship song sung in Zulu. The time alloted for practice was used to arrange us based on our vocal ranges and to properly deliver the melody and lyrics of the song.`,
				`After the practice at around 10:00AM, we were given a program flow to soon start the worship service. When it came to our part to perform the song, we were instructed to make a formation at the front to begin the performance. Lastly, the service is concluded with everyone shaking hands with one another.`
			],
			reflection:[
				`This served as a new experience for me because of it being a protestant church service which is not the usual kind of service that I attend. By being involved in this service, I was able learn about protestant practices and how their sunday services usually go. I also did some reading about the worship song we performed, and found interesting information about its origins and such.`,
				`Overall, it was a valuable experience which gave me another angle at how faith is expressed, and how it is able to connect the people participating in it.`
			],
			photos:[
				["IMG_20260712_1.png",288.83],
				["IMG_20260712_2.jpg",400]
			]
		},
		{
			title:"CCS Opening Devotion",
			org:orgs[1],date:"August 24, 2026",time:"7:30AM – 8:30AM",
			desc:"An opening devotion for the College of Computer Studies to formally start the Hibalag season with solemn prayer.",
			about:[
				`It is August 24, 2026 and it is finally Hibalag week and so to formally start the week, our college held an opening devotion in the ATA Hall starting 7:30AM. After the greetings, there were singing of songs and a psalm reading, an invocation, scripture reading, and an offertory.`,
				`The highlight of this event is during the reflection, where we reflect on the year's theme:"Remembering with Gratitude, Moving Forward with Hope." which captures our reason for this celebration and for this entire founders week.`
			],
			reflection:[
				`Celebrating this year's Hibalag season,`
			],
			photos:[
				["IMG_20260824_1.jpg",400],
				["IMG_20260824_2.jpg",400]
			]
		},
		{
			title:"UCLEM 2026: Remembering with Gratitude",
			org:orgs[4],date:"September 22, 2026",time:"5:30PM – 7:00PM",
			desc:"",
			about:[],
			reflection:[],
			photos:[
				["IMG_20260922_1.jpg",400],
				["IMG_20260922_2.jpg",400]
			]
		},
		{
			title:"CHS Closing Worship Service & Class Fellowship",
			org:"Alma Ruiz",date:"October 8, 2026",time:"2:30PM – 4:00PM",
			desc:"",
			about:[],
			reflection:[],
			photos:[
				["IMG_20261008_1.jpg",225],
				["IMG_20261008_2.jpg",225]
			]
		},
		{
			title:"DCC Youth Friday Night Bible Study",
			org:"Davin Erickson",date:"October 9, 2026",time:"7:30PM – 9:00PM",
			desc:"A praise and worship service, and a bible study and discussion session at the Dumaguete Christian Church.",
			about:[],
			reflection:[],
			photos:[
				["IMG_20261009_1.jpg",168.75],
				["IMG_20261009_2.jpg",168.75]
			]
		}
	],
	court:[
		{
			title:"CCS Sportsfest Pickleball",
			org:orgs[1],date:"September 30, 2026",time:"8:30AM – 12:00NN",
			desc:"",
			about:[],
			reflection:[],
			photos:[
				["IMG_20260930_1.jpg",225]
			]
		},
		{
			title:"CCS Sportsfest Badminton",
			org:orgs[1],date:"September 30, 2026",time:"8:30AM – 12:00NN",
			desc:"",
			about:[],
			reflection:[],
			photos:[
				["IMG_20260930_2.jpg",225]
			]
		},
		{
			title:"CCS Sportsfest Chess",
			org:orgs[1],date:"September 30, 2026",time:"3:00PM – 5:00PM",
			desc:"",
			about:[],
			reflection:[],
			photos:[
				["IMG_20260930_3a.jpg",225,"Final board of first game, some pieces were moved though."],
				["IMG_20260930_3b.jpg",400,"Attendance and matching."]
			]
		},
		{
			title:"CCS Sportsfest Basketball",
			org:orgs[1],date:"October 3, 2026",time:"2:30PM – 4:00PM",
			desc:"",
			about:[],
			reflection:[],
			photos:[
				["IMG_20261003_1.jpg",225]
			]
		},
		{
			title:"CCS Sportsfest Volleyball",
			org:orgs[1],date:"October 3, 2026",time:"2:30PM – 4:00PM",
			desc:"",
			about:[],
			reflection:[],
			photos:[
				["IMG_20261003_2a.jpg",225],
				["IMG_20261003_2b.jpg",225]
			]
		}
	],
	culture:[
		{
			title:"Resonance: 100 Years of Music with the Manila Symphony Orchestra",
			org:orgs[2],date:"June 26, 2026",time:"7:00PM – 9:00PM",
			desc:"",
			about:[],
			reflection:[],
			photos:[
				["IMG_20260626_1.jpg",225],
				["IMG_20260626_2.jpg",400],
				["IMG_20260626_3.jpg",400]
			]
		},
		{
			title:"Accumulation: Co. Esgara Dance",
			org:orgs[2],date:"August 20, 2026",time:"7:00PM – 9:00PM",
			desc:"",
			about:[],
			reflection:[],
			photos:[
				["IMG_20260820_1.jpg",400]
			]
		},
		{
			title:"Parada Sillimaniana",
			org:"Silliman University",date:"August 27, 2026",time:"1:00PM – 6:00PM",
			desc:"",
			about:[],
			reflection:[],
			photos:[
				["IMG_20260827_1.jpg",400]
			]
		},
		{
			title:"ROTC Inter-Company Speech Contest",
			org:orgs[3],date:"September 5, 2026",time:"7:30AM – 10:30AM",
			desc:"",
			about:[],
			reflection:[],
			photos:[
				["IMG_20260905_1.jpg",225],
				["IMG_20260905_2.jpg",225]
			]
		},
		{
			title:"Pilipino: Ang Pgka Mulat",
			org:"the SU Religion and Peace Studies Department",date:"September 18, 2026",time:"7:00PM – 9:00PM",
			desc:"",
			about:[],
			reflection:[],
			photos:[
				["IMG_20260918_1.jpg",400],
				["IMG_20260918_2.jpg",400]
			]
		},
		{
			title:"Souvenirs: The Art of Song and Piano",
			org:orgs[2],date:"September 25, 2026",time:"7:00PM – 9:00PM",
			desc:"",
			about:[],
			reflection:[],
			photos:[
				["IMG_20260925_1.jpg",225]
			]
		},
		{
			title:"Legacy in Sound: 120 Years of Silliman University Symphonic Band",
			org:orgs[2],date:"October 2, 2026",time:"7:00PM – 9:00PM",
			desc:"",
			about:[],
			reflection:[],
			photos:[
				["IMG_20261002_1.jpg",225]
			]
		}
	],
	community:[
		{
			title:"ROTC Nutri-Fit Walk 2026",
			org:orgs[3],date:"July 26, 2026",time:"4:30AM – 11:00AM",
			desc:"In celebration of the Nutrition Month, the ROTC cadets are to join a Nutri-Walk to spread the message of better nutrition and healthier living.",
			about:[
				`This is event organized by the SU ROTC Unit to celebrate the nutrition month. The event was held on July 26, 2026 with a call time of 4:30AM near the Looc Bypass Road. The route goes from the crossing near Harold's Mansion, passing by Silliman University Medical Center towards the intersection, turning left and going forward until we reached the Philippine National Bank. From the bank, we turned left until we reached the boulevard, then turned right until we reached our destination at the Rizal Boulevard Extension.`,
				`During the walk we were instructed to follow formation corresponding our company, platoon, and squad which was to be maintained until reaching our destination. Once at the destination, we gathered near the stage there along with the other groups outside of Silliman that joined. On the venue, a program was held at the stage with themes relating to the Nutrition Month, as well as a zumba exercise where anyone near the venue can participate in. The venue also featured decorated booths where you could purchase healthy products from charity related organizations.`
			],
			reflection:[
				`This is may be the earliest I have woken up in the whole semester so far, but by attending this Nutri-Walk, I am able to celebrate and spread awareness for Nutrition Month, and also promote fitness and be involve with the community through the walk.`,
				`Furthermore, I also hardened my discipline by enduring having to maintain proper form the entire trip. At the Boulevard Extension, I purchased a few refreshments from the booths which also served as donation to cause that the booth was handling.`,
				`Overall, this experience helped me appreciate promoting health through eating nutritious food, staying physically active, developing self-discipline, and participating in activities that benefit the community.`
			],
			photos:[
				["IMG_20260726_1.jpg",400],
				["IMG_20260726_2.jpg",400],
				["IMG_20260726_3.jpg",435.45,"Attendees of the event are given extra merits."]
			]
		},
		{
			title:"Virtual Fun Run/Ride for a Cause",
			org:orgs[3],date:"September 26, 2026",time:"9:00AM – 11:00AM",
			desc:"",
			about:[],
			reflection:[],
			photos:[
				["IMG_20260926_1.jpg",225],
				["IMG_20260926_2.jpg",666.66,"Strava result of the run."],
				["IMG_20260926_3.jpg",225]
			]
		},
		{
			title:"Sto. Niño Orphanage White Gift",
			org:"Alfie Arcelo",date:"October 7, 2026",time:"9:30AM – 12:00NN",
			desc:"",
			about:[],
			reflection:[],
			photos:[
				["IMG_20261007_1.jpg",225],
				["IMG_20261007_2.jpg",225],
				["IMG_20261007_3.jpg",225]
			]
		}
	]
};
function j_display(id){
	const el=$(id);
	if(!el)return;
	document.querySelectorAll(".main").forEach(e=>e.style.display="none");
	el.style.display="";
	el.scrollTo(0,0);
}
function j_category(c){
	$("entry_cat").textContent=c[0].toUpperCase()+c.slice(1);
	$("entry_list").replaceChildren(...entries[c].map((e,i)=>{
		const f=$("post_tpl").content.cloneNode(true);
		slot(f,"title").textContent=e.title;
		slot(f,"title").addEventListener("click",()=>j_entry(c,i));
		slot(f,"date").textContent=e.date;
		slot(f,"preview").textContent=e.desc;
		return f;
	}));
	j_display("entries");
}
function photo(c,[file,h,cap],alt=" "){
	const img=new Image();
	img.loading="lazy";
	img.setAttribute("width",300);
	img.setAttribute("height",h);
	img.alt=cap||alt;
	img.src=`images/${c}/${file}`;
	if(!cap){
		img.className="image-holder";
		return img;
	}
	const holder=document.createElement("div"),txt=document.createElement("div");
	holder.className="image-holder";
	txt.className="caption";
	txt.textContent=cap;
	holder.append(img,txt);
	return holder;
}
function paragraphs(ps){
	return ps.map(t=>{
		const p=document.createElement("p");
		p.textContent=t;
		return p;
	});
}
function pager(a,c,i,t){
	const e=entries[c][i];
	if(!e)return;
	a.textContent=t(e.title);
	a.addEventListener("click",()=>j_entry(c,i));
}
function j_entry(c,i){
	const e=entries[c][i],f=$("entry_tpl").content.cloneNode(true);
	slot(f,"title").textContent=`Journal Entry #${i+1}: ${e.title}`;
	slot(f,"meta").textContent=`• Organized by ${e.org} • ${e.date} • ${e.time}`;
	slot(f,"about").after(...paragraphs(e.about));
	slot(f,"reflection").after(...paragraphs(e.reflection));
	slot(f,"photos").append(...e.photos.flatMap((p,n)=>[photo(c,p,`${e.title}, photo ${n+1}`)]));
	pager(slot(f,"left"),c,i-1,t=>"← "+t);
	pager(slot(f,"right"),c,i+1,t=>t+" →");
	$("journal_entry").replaceChildren(f);
	j_display("journal_entry");
	preload(c,i);
}
const idle=requestIdleCallback||(fn=>setTimeout(fn,250));
function preload(c,i){
	idle(()=>[i-1,i+1].forEach(k=>entries[c][k]?.photos.forEach(([fn])=>new Image().src=`images/${c}/${fn}`)));
}