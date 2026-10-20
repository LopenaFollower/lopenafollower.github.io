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
			title:"All-University Academic Convocation",pts:"+1 for participating.",
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
			title:"CCS Freshmen, Shiftees, & Transferees Orientation",pts:"+1 for participating.",
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
			title:"University-Wide Orientation",pts:"+1 for participating.",
			org:orgs[0],date:"July 29, 2026",time:"9:00AM – 11:00AM",
			desc:"Officially welcoming incoming freshmen and new students, introducing them to university life, policies, student services, and campus culture.",
			about:[
				`Many colleges were called on July 29, 2026 to assemble in the Luce Auditorium to have an orientation on how university life may be, the policies that the university abides by, and the nature and culture of being a Sillimanian.`,
				`The different building, their location, and their purposes were discussed during the orientation, they also introduced the different dormitories that college students can move in to in case they're not from the city. General rules were also laid out.`,
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
			title:"DOST ISKOmpass Orientation",pts:"+1 for participating.",
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
			title:"One Big Tuyok Campus Tour",pts:"+1 for participating.",
			org:orgs[1],date:"August 19, 2026",time:"9:00AM – 11:00AM",
			desc:"A campus tour that not only showcases the different buildings but also their backstory.",
			about:[
				`On August 19, 2026, a number of students who were not able to attend the initial campus tour were gathered, accompanied by a campus ambassador to serve as our tour guide. To go around the campus and showcase the different buildings and discuss their history.`,
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
			title:"Miller Solutions Development Inc. Industry Lecture and Workshop",pts:"+2 for participating and project making.",
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
				`As someone who usually abstains from using these types of automations, I was able to broaden my view on it by partaking in this lecture and workshop. Here I learned these agents can increase efficiency when working, but most importantly that human skill and input is still very important and essential to achieving something with quality.`
			],
			photos:[
				["IMG_20260825_1.jpg",400],
				["IMG_20260825_2.jpg",225,"Utiziling an agent to create code."]
			]
		},
		{
			title:"Mental Health Caravan: Building Your Mental Health Toolkit",pts:"+1 for participating.",
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
			title:"CHS Chapel Worship Service",pts:"+2 for performing in the choir.",
			org:"Alma Ruiz",date:"July 12, 2026",time:"8:30AM – 10:00AM",
			desc:"A Sunday worship service as a choir with the CHS class at the Chapel of the Evangel.",
			about:[
				`This event was done under our CHS professor, Alma Ruiz, on July 12, 2026, from 8:30AM to 10:00AM at the Chapel of the Evangel as a fulfillment of our task in the CHS Subject. At the call time of 8:30, we were given 30 minutes that serves at time to practice our selected song as a choir. The song that we performed was named "Siyahamba" which is an African worship song sung in Zulu. The time alloted for practice was used to arrange us based on our vocal ranges and to properly deliver the melody and lyrics of the song.`,
				`After the practice at around 9:00AM, we were given a program flow to soon start the worship service. When it came to our part to perform the song, we were instructed to make a formation at the front to begin the performance. Lastly, the service is concluded with everyone shaking hands with one another.`
			],
			reflection:[
				`This served as a new experience for me because of it being a Protestant church service which is not the usual kind of service that I attend. By being involved in this service, I was able to learn about Protestant practices and how their Sunday services usually go. I also did some reading about the worship song we performed, and found interesting information about its origins and such.`,
				`Overall, it was a valuable experience which gave me another angle at how faith is expressed, and how it is able to connect the people participating in it.`
			],
			photos:[
				["IMG_20260712_1.png",288.83],
				["IMG_20260712_2.jpg",400]
			]
		},
		{
			title:"CCS Opening Devotion",pts:"+1 for participating.",
			org:orgs[1],date:"August 24, 2026",time:"7:30AM – 8:30AM",
			desc:"An opening devotion for the College of Computer Studies to formally start the Hibalag season with a solemn prayer.",
			about:[
				`It is August 24, 2026 and it is finally Hibalag week and so to formally start the week, our college held an opening devotion in the ATA Hall starting 7:30AM. After the greetings, there were singing of songs and a psalm reading, an invocation, scripture reading, and an offertory.`,
				`The highlight of this event is during the reflection, where we reflect on the year's theme:"Remembering with Gratitude, Moving Forward with Hope." which captures our reason for this celebration and for this entire founders week.`
			],
			reflection:[
				`Celebrating this year's Hibalag season, it is very appropriate to start the week with an opening devotion because it ensures that activities done during the week will be achieved with excellence, safe, and fruitful. It sets the first step to the right direction.`,
				`I was able to enjoy the rest of the week knowing that we are all guided in the activities that we will participate in.`
			],
			photos:[
				["IMG_20260824_1.jpg",400],
				["IMG_20260824_2.jpg",400]
			]
		},
		{
			title:"UCLEM 2026: Remembering with Gratitude",pts:"+1 for participating.",
			org:orgs[4],date:"September 22, 2026",time:"5:30PM – 7:00PM",
			desc:"September is celebrated as University Christian Life Emphasis Month and so the Divinity School has organized a fellowship to celebrate.",
			about:[
				`This fellowship took on September 22, 2026 at the Luz Ausejo Hall from 5:30PM to 7:00PM. Where students will be assigned depends on the per-section grouping in their respective CHS classes. I was assigned to room 106.`,
				`Our instructor introduced himself as a student from the Divinity School. Our first activity was an icebreaker to properly set the mood, it was a sequential game where we sing a song and perform actions relating to it. Each round a move maybe added, altered, or we sing at a faster pace. After the icebreaker, we go back to our seats, the instructors asks us on what our expectations for this event are and everyone got a turn to answer. Then we had a break where they provided bread and juice.`,
				`We were then split in to groups of 5-6 people and given a jumbled word, for this minigame our goal was to spell as many words from the given letters. The most important word to be spelt was 'gratitude,' he then introduced to us and explained the theme for this month which is to remember with gratitude.`,
				`At this point, we were told to get our bibles out to read two passages: 2 Kings 5:1-15 and Luke 17:11-19. These two passages share a common theme which is to be grateful and to praise the Lord. We were given various questions relating to each passage and had a discussion on them.`
			],
			reflection:[
				`I have not been in a fellowship activity for a while, so this served as refreshing experience a reminder to worship.`,
				`By participating in this fellowship, I can truly celebrate the Peace Month and UCLEM by connecting with others. I also get to discuss and converse with others about the passages given during the fellowship.`
			],
			photos:[
				["IMG_20260922_1.jpg",400],
				["IMG_20260922_2.jpg",400]
			]
		},
		{
			title:"CHS Closing Worship Service & Class Fellowship",pts:"+2 for performing in a choir.",
			org:"Alma Ruiz",date:"October 8, 2026",time:"2:30PM – 4:00PM",
			desc:"To culminate our class in CHS, a closing worship service and fellowship has been arranged by our professor.",
			about:[
				`The event was done on our last CHS session which happened on October 8, 2026. This event is divided into two parts: The worship service and the fellowship.`,
				`The first and solemn part is the closing worship service, each row was given a chance to select a specific psalm which is to be performed after each part. The first part is the opening prayer which was done by one of my classmates, then after so the selected group performs their psalm. The next part is the scripture reading followed by another group, the next part was a message to be presented by another classmate to formally acknowledge the celebration which then was followed by the next group to present. I was able to give spare coins that I had during the offertory. And the last part which is the most solemn, the closing prayer which we reflected upon before finally the last group performed. The group I was assigned to was the first to perform, we sang psalm 100 which was a song about praising the Lord. After the service concluded, we move on to the fellowship.`,
				`The fellowship involved gather all the food we brough on to the table set at the center off the room. Then we settled down for the prayer before meal. Which we then proceeded to eat and converse with one another.`
			],
			reflection:[
				`It is a fitting celebration especially after all the thing we have achieved as a class. This fellowship brings us closer together by bonding with each other while eating.`,
				`I am able to appreciate the event and also reflected solemnly during times of prayer.`
			],
			photos:[
				["IMG_20261008_1.jpg",225],
				["IMG_20261008_2.jpg",225]
			]
		},
		{
			title:"DCC Youth Friday Night Bible Study",pts:"+2 for participating and engaging in the bible study.",
			org:"Davin Erickson",date:"October 9, 2026",time:"7:30PM – 9:00PM",
			desc:"A praise and worship service, and a bible study and discussion session at the Dumaguete Christian Church.",
			about:[
				`This event took place at the Dumaguete Christian Church (DCC) held by a fellow classmate, Davin Erickson, on the 9th of October, 2026. We were invited as guests to participate in the Friday night praise and workship then after, the youth bible study.`,
				`For the first half of the night, the host let us introduce ourselves, then we had singing of worship songs. After about 3 songs, we moved on to scripture reading. We were told to group ourselves in to 2-3 people to read John 19:28-30 which talks about the final moments of Jesus on the cross. We reflected on the passage and had some discussion about it.`,
				`For the second part, after we had finished our small group reflection, they flashed a few guide questions on a projector screen to be answered soon during the bible study. We were divided into groups of around 5 people to answer and discuss about the passage and maybe answer the guide questions as well. We had a long discussion reaching up until 9:30 I believe.`,
				`Afterwards, they had offered us some ice cream which we accepted with gratitude.`
			],
			reflection:[
				`This was a new experience to me, mainly because the people there are specifically Born Again Christians which had a different way of worshipping.`,
				`I also learned many insights from all the discussions we had during the bible study with my fellow groupmates. Seeing their perspective in the subject, made me realize a diversity of faith.`
			],
			photos:[
				["IMG_20261009_1.jpg",168.75],
				["IMG_20261009_2.jpg",168.75]
			]
		}
	],
	court:[
		{
			title:"CCS Sportsfest Pickleball",pts:"+1 for spectating.",
			org:orgs[1],date:"September 30, 2026",time:"8:30AM – 12:00NN",
			desc:"The first set of games of the first day of the CCS Sportsfest.",
			about:[],
			reflection:[],
			photos:[
				["IMG_20260930_1.jpg",225]
			]
		},
		{
			title:"CCS Sportsfest Badminton",pts:"+1 for spectating.",
			org:orgs[1],date:"September 30, 2026",time:"8:30AM – 12:00NN",
			desc:"The first set of games of the first day of the CCS Sportsfest.",
			about:[],
			reflection:[],
			photos:[
				["IMG_20260930_2.jpg",225]
			]
		},
		{
			title:"CCS Sportsfest Chess",pts:"+4 for being a player.",
			org:orgs[1],date:"September 30, 2026",time:"3:00PM – 5:00PM",
			desc:"Participating in a chess game as part of the CCS Sportsfest.",
			about:[
				`The chess games were held at one of the ATA Hall Rooms on August 30, 2026, call time at 2:30PM and officially started at 3:00PM.`,
				`Initially I was not planning to be a part of the players that were going to be matched, but due to a lack of players in my house pair, I ended up registering last minute. In the venue, there were two chess boards and so two matches were played at a time. Waiting for my match, I decided to inspect the on going matches since I neither play chess often nor know the more advances strategies. On my first match, I was up against someone who seemed to be an expert at the game, judging by the murmurs and commentary from the other matches. Although I lost, both parties were still able to show sportsmaship, and he did teach me a few techniques and explained why I lost.`
			],
			reflection:[
				`I learned that it is important that you enjoy the game you are playing rather than just trying to win. I'm not saying this because I lost my game, that is not my point, my point is if you only put your enjoyment towards winning a game, then you are not really enjoying the game in itself. By accepting a loss, you can convert it to a learning experience rather than being sour about it.`,
				`I was also able to observe good sportsmaship towards all the matches being played. It helps keep things respectful and orderly.`
			],
			photos:[
				["IMG_20260930_3a.jpg",225,"Final board of first game, some pieces were moved though."],
				["IMG_20260930_3b.jpg",400,"Attendance and matching."]
			]
		},
		{
			title:"CCS Sportsfest Basketball",pts:"+1 for spectating.",
			org:orgs[1],date:"October 3, 2026",time:"2:30PM – 4:00PM",
			desc:"The final games of the CCS Sportsfest.",
			about:[],
			reflection:[],
			photos:[
				["IMG_20261003_1.jpg",225]
			]
		},
		{
			title:"CCS Sportsfest Volleyball",pts:"+1 for spectating.",
			org:orgs[1],date:"October 3, 2026",time:"2:30PM – 4:00PM",
			desc:"The final games of the CCS Sportsfest.",
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
			title:"Resonance: 100 Years of Music with the Manila Symphony Orchestra",pts:"+1 for spectating.",
			org:orgs[2],date:"June 26, 2026",time:"7:00PM – 9:00PM",
			desc:"This cultural show features the Manila Symphony Orchestra in celebration of their 100th anniversary by presenting many pieces from multiple generations.",
			about:[
				`The Manila Symphony Orchestra celebrates it's 100th anniversary by presenting at the Luce Auditiorium on June 26, 2026, featuring a variety of musical pieces, including Filipino music (known as OPM), classical compositions, and popular movie soundtracks.`,
				`They first performed Cello Concerto in C-Major followed by Oboe Concerto in D-Major, then an intermission break. After the intermission, they performed pieces by Filipino composers and moved on to popular OPM songs. Then near the end, they performed composition from popular movies such as the Pirates of the Carribean and then a finale by playing pieces in tribute of specific people.`
			],
			reflection:[
				`I am able to recognize the value of music as form of art and as a cultural heritage through the variety of pieces performed.`,
				`Progressing through the show, you can see the different styles of music from each generation. And I find the importance in preserving them through these kinds of shows.`
			],
			photos:[
				["IMG_20260626_1.jpg",225],
				["IMG_20260626_2.jpg",400],
				["IMG_20260626_3.jpg",400]
			]
		},
		{
			title:"Accumulation: Co. Erasga Dance",pts:"+1 for spectating.",
			org:orgs[2],date:"August 20, 2026",time:"7:00PM – 9:00PM",
			desc:"A cultural show featuring members from the Co.ERASGA Dance which shows environmental destruction, pollution, and the consequences of human consumption through expressive body movements.",
			about:[
				`This show was held in the Luce Auditorium on August 20, 2026 at 7:00PM. A small background and discussion was given before the start of the show to spread awareness and clarify their theme that they will be presenting. At start of the show, the stage had different kinds of discarded material hanged at the back. While the dancer was moving around the stage, another artist slowly attached those materials to his body. The dancer expressed discomfort and struggle through movements because of the increasing amount of trash on him. With even more materials accumulating on him, his movement became slower and less lively and restricted until finally he collapses where only the trash is visible but not him.`,
				`Other than the main dancer, there was also a composer who created live sound. Using his voice, percussion and other materials, he was able to replicate nature-like sounds which sets the atmosphere and creates a tension that accompanies the current state of the dancer.`
			],
			reflection:[
				`This show displays a strong theme of environmental problems, pollution and climate change, spreading awareness to it and showing its affects to ecosystems by enacting being covered in waste which captures the struggles of animals. They were able communicate such strong messages through the combination of visuals, the expression in each movement, and the sounds being composed.`,
				`I am reminded by this show to be mindful of my consumptions, reducing waste, and responsible with my actions.`
			],
			photos:[
				["IMG_20260820_1.jpg",400]
			]
		},
		{
			title:"Parada Sillimaniana",pts:"+2 for being a banner bearer.",
			org:"Silliman University",date:"August 27, 2026",time:"1:00PM – 6:00PM",
			desc:"As a part of celebrating Silliman University's 125th Founders Day Anniversary, the whole campus came together bringing vibrant colors and lively dances through a parade.",
			about:[
				`The Parada Sillimaniana was held on August 27, 2026, started from 1:00PM and finished with a program until around 6:00PM in celebration Silliman University's founders week. Our float had a minecraft theme that featured the founders in their minecraft equivalent appearances.`,
				`The route taken for our college started at the front of the CBA building, following the road until we turn right towards the Locsin Street then another right following the nation road. After a long walk along the national road, we take another right that leads to the Cimafranca Ballfield where all the colleges gather for a program and dance competition.`,
				`Throughout the entire parade, I was in charged with carrying the college banner, waving and moving it up and down, and so I was ahead the rest being behind our float. We greeted people as we passed by them.`
			],
			reflection:[
				`I celebrated my first founder's day with Silliman remembering its legacy through various events and especially this parade. Highlighting the milestone of 125 years serving as a school and university.`,
				`As the bearer of the college banner, I endured having to keep high throughout the entire parade especially because of the strong winds at the time. But it is a worthy task as I am able to express gratitude towards the event.`
			],
			photos:[
				["IMG_20260827_1.jpg",400]
			]
		},
		{
			title:"ROTC Inter-Company Speech Contest",pts:"+1 for spectating.",
			org:orgs[3],date:"September 5, 2026",time:"7:30AM – 10:30AM",
			desc:"An annual event in the ROTC Unit where representatives from each company presents a speech regarding a certain given topic.",
			about:[
				`This speech contest was held in the Luce Auditorium on September 5, 2026. This year's theme for the speech contest is "Rizalism at 75: Sustaining the Legacy, Inspiring the World" which showcases the modern Filipino identity and unity, and to combat historical disinformation.`,
				`Each contestant was able to express and convey strong emotions through their delivery on why acknowleging the legacy of filipinos is vital to grow as a nation, relating our service and patriotism as an ROTC cadet to the nation.`
			],
			reflection:[
				`Although I am only an audience of this contest, I was able to grasp the ideas that each contestant expressed. Through their strong and moving delivery which captures their dedication and respect towards the country and to fellow filipinos.`,
				`I am also able to acknowledge the 75th year of knightship towards Rizal where his teachings, ideals, and humanitarian values are preserved through study and teachings.`
			],
			photos:[
				["IMG_20260905_1.jpg",225],
				["IMG_20260905_2.jpg",225]
			]
		},
		{
			title:"Pilipino: Ang Pgka Mulat",pts:"+1 for spectating.",
			org:"the SU Religion and Peace Studies Department",date:"September 18, 2026",time:"7:00PM – 9:00PM",
			desc:"A cultural show presented by the Bagong ASIN band which reflects and appreciates Filipino culture and as an independent nation.",
			about:[
				`The show was held in the Luce Auditorium on September 18, 2026 following their usual schedule. This features the Bagong ASIN band which is comprised with a new generation of members and one from the original band. As the program pretext states, they present their songs in a chronological order which creates a storytelling narative of how the Philippine was as a society through the years, from precolonialism up until the modern times. They shared a strong message that says that we should not let foreigners bury and rewrite our history and legacy.`,
				`Apart from the electronic guitars, the band members showcased their talents by playing many native and indigenous instruments. Although I can't name them, one instrument stood out to me as it is a long piece of bamboo filled with water and is tilted to create the sound of flowing water.`
			],
			reflection:[
				`Through the lyrics of the band's songs, I am able to understand the history of the Philippines. The way they emulate what it was like at the time through their instruments makes you connect further to the culture during that time period.`,
				`Knowing the historical context of the Philippines, I see the importance of preserving our heritage and celebrating them as a Filipino citizen.`
			],
			photos:[
				["IMG_20260918_1.jpg",400],
				["IMG_20260918_2.jpg",400]
			]
		},
		{
			title:"Souvenirs: The Art of Song and Piano",pts:"+1 for spectating.",
			org:orgs[2],date:"September 25, 2026",time:"7:00PM – 9:00PM",
			desc:"A musical performance presented at the Luce Auditorium that feature vocalists and pianists who showcased Filipino music throughout the ages.",
			about:[
				`This show was held in the Luce Auditorium on September 25, 2026. In total, there were 10 perfomers, 5 of which are vocalists and the rest are pianist.`,
				`For the first part, it was the vocalists who sang a classic Filipino song. Each vocalist took a turn going on to the stage and sang while a pianist accompanied them. Then the next wave came in duets. An intermission number played out while the vocalists changed in to a different attire.`,
				`The second part showcases piano covers of Filipino compositions. The first piece involved 2 pianos being played, the next involved two people playing on a single piano, and in the next piece, another person went to same piano, this continued until there were five of them, but they didnt stop at just playing the piano, they also performed a comedic skit in where they would quarel around the piano as if theyre trying to take turns.`
			],
			reflection:[
				`I was able to enjoy the show as it was entertaining, at the same time, I was also able to appreciate Filipino music.`,
				`I also observed the skill it takes that the performers are executing, from the control of the voice of the vocalists to the mastery of the pianist who are playing and the same time doing humorous acts.`
			],
			photos:[
				["IMG_20260925_1.jpg",225]
			]
		},
		{
			title:"Legacy in Sound: 120 Years of Silliman University Symphonic Band",pts:"+1 for spectating.",
			org:orgs[2],date:"October 2, 2026",time:"7:00PM – 9:00PM",
			desc:"The Silliman University Marching Band celebrates it's 120th founding anniversary featuring returning band alumnis.",
			about:[
				`The Silliman University Marching Band celebrates it's 100th anniversary. The presented at the Luce Auditiorium on October 2, 2026, featuring Silliman Marching Band and twirlers as well as returning band alumnis. They played variety of musical pieces, mostly popular movie soundtracks, Filipino medley music, and other classics like Mama Mia by ABBA.`,
				`The band played a series of songs. The first song that I recognized is 'In the Stone' by Earth, Wind & Fire. After that, they played various famous soundtracks from different movies such as The Lion King, How to Train Your Dragon, and Pirates of the Caribbean.`,
				`The next set of songs are popular Filipino music that are usually older, Rock N' Roll music. An intermission number was presented by the Silliman University Band Twirlers, and continued with a few more songs. In the finale, they played Thank You for the Music by ABBA and called on all the alumni to get on stage to perform the Silliman Song.`
			],
			reflection:[
				`Seeing the Silliman Band celebrate it's 120th anniversary and still perserving its legacy after that many years helps me appreciate the musicians who continue to represent Silliman and sustain its musical heritage for many more generations.`,
				`I am glad to have witness this milestone and the overall performance, not only from the current band but also with the alumni who took their time to perform infront.`
			],
			photos:[
				["IMG_20261002_1.jpg",225]
			]
		}
	],
	community:[
		{
			title:"ROTC Nutri-Fit Walk 2026",pts:"+2 for participating in the Nurti-Walk.",
			org:orgs[3],date:"July 26, 2026",time:"4:30AM – 11:00AM",
			desc:"In celebration of the Nutrition Month, the ROTC cadets are to join a Nutri-Walk to spread the message of better nutrition and healthier living.",
			about:[
				`This is event organized by the SU ROTC Unit to celebrate the Nutrition Month. The event was held on July 26, 2026 with a call time of 4:30AM near the Looc Bypass Road. The route goes from the crossing near Harold's Mansion, passing by Silliman University Medical Center towards the intersection, turning left and going forward until we reached the Philippine National Bank. From the bank, we turned left until we reached the boulevard, then turned right until we reached our destination at the Rizal Boulevard Extension.`,
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
			title:"Virtual Fun Run/Ride for a Cause",pts:"+3 for doing a fun run.",
			org:orgs[3],date:"September 26, 2026",time:"9:00AM – 11:00AM",
			desc:"Participating in a fun run/ride for a cause that is organized by the ROTC Unit along with the Redshield Fraternity.",
			about:[
				`The event was announced on September 26, 2026 and would be valid until October 3, 2026. This fun run/ride can be achieved any time around the specified date with the goal of running 10 kms total (which could be accumulated from up to 5 sessions) or by biking for 20 km. The run was to be submitted online and verified by an officer.`,
				`When this announced to use during our ROTC meeting, me and a couple friends decided to do it after our training since we will be dismissing early that day. After planning on where we should do it, we went to the RTY to submit our registration form which had a fee that costed P250.`,
				`We went to our planned location which was near the Macias building due to the main field being closed. We had to take a few stops during the run causing our pacing to slow down, but we persevered until we reach our goal of 10 km.`
			],
			reflection:[
				`This was a fun activity to participate because not only is it an opportunity to run together with friends while also contributing to a charity that advocates for physical fitness.`,
				`When it comes contributing for a cause like this, hopefully the feeling doesn't just end at the registration where you have given your amount, but also keep it all throughout the activity.`
			],
			photos:[
				["IMG_20260926_1.jpg",225],
				["IMG_20260926_2.jpg",666.66,"Strava result of the run."],
				["IMG_20260926_3.jpg",225]
			]
		},
		{
			title:"Sto. Niño Orphanage White Gift",pts:"+3 for white gift making.",
			org:"Alfie Arcelo",date:"October 7, 2026",time:"9:30AM – 12:00NN",
			desc:"White gift making and wrapping for the children of the Sto. Niño Orphanage.",
			about:[
				`As a final output given to us by our GE10 professor, Ma'am Alfie Arcelo, on October 7, 2026 during our class period, we are task to purchase items as a group in order to provide for an orphanage in need. The instructions were given to us through an announcement.`,
				`For my contribution to the white gift, I was able to purchase around 8+ bottles of Zonrox, and about 20+ sachets of Bear Brand powdered milk which we placed along with the materials from other groupmates into a box. We had to make sure everything fits properly as to not overflow or break the box. After that was done, we wrapped it with a gift wrapper and place a note from all of us on it.`
			],
			reflection:[
				`I am thankful that I can contribute to a cause like this that is able to help and provide for the orphanage that really needs it.`,
				`I take my time to realize that not everyone is always fortunate, and that they don't also have stay that way. Through this white gift making, I hope that more can be done in the future.`
			],
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
	slot(f,"meta").innerText=`• Organized by ${e.org} • ${e.date} • ${e.time}\n${e.pts}`;
	slot(f,"about").after(...paragraphs(e.about));
	slot(f,"reflection").after(...paragraphs(e.reflection));
	slot(f,"photos").append(...e.photos.flatMap((p,n)=>[photo(c,p,`${e.title}, photo ${n+1}`)]));
	pager(slot(f,"left"),c,i-1,t=>"← "+t);
	pager(slot(f,"right"),c,i+1,t=>t+" →");
	$("journal_entry").replaceChildren(f);
	j_display("journal_entry");
	preload(c,i);
}
const idle=window.requestIdleCallback||(fn=>setTimeout(fn,250));
function preload(c,i){
	idle(()=>[i-1,i+1].forEach(k=>entries[c][k]?.photos.forEach(([fn])=>new Image().src=`images/${c}/${fn}`)));
}