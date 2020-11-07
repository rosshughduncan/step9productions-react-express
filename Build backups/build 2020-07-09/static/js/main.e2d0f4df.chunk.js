(this["webpackJsonpstep9productions-react-express"]=this["webpackJsonpstep9productions-react-express"]||[]).push([[0],{23:function(e,t,n){e.exports=n(51)},28:function(e,t,n){},4:function(e,t,n){e.exports={App:"App_App__1HPxC",Label:"App_Label__323k5",MenuBar:"App_MenuBar__j-15D",SectionBar:"App_SectionBar__3RGCy",QuoteSection:"App_QuoteSection__3eKxl"}},51:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(19),o=n.n(r),i=(n(28),n(6)),c=n(7),u=n(9),s=n(8),d=n(4),m=n.n(d),h=function(e){return"/images/"+e},E=n(2),p=n(1),g={col:"white",hoverCol:"#C5FF0F"},f={col:"#90D60D",hoverCol:"#A3F20F"};function b(){var e=Object(E.a)(["\n            display: inline-block;\n            color: ",";\n            text-align: center;\n            padding-top: 0.4rem;\n            padding-bottom: 0.4rem;\n            width: ","%;\n            font-weight: bold;\n            transition: 0.25s;\n            &:hover {\n                color: ",";\n                cursor: pointer;\n            }\n        "]);return b=function(){return e},e}var v=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).menuItemsReturn=function(){var e=p.c.div(b(),(function(e){return e.theme.col}),100/a.menuOptions.length,(function(e){return e.theme.hoverCol}));return a.menuOptions.map((function(t){return l.a.createElement(p.a,{theme:function(){return t===a.props.selectedItem?g:f},key:t},l.a.createElement(e,{onClick:function(){return a.props.buttonClicked(t)},key:t},t))}))},a.menuOptions=["Home","Portfolio","Contact"],a}return Object(c.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"".concat(m.a.App," ").concat(m.a.MenuBar)},this.menuItemsReturn())}}]),n}(a.Component);function y(){var e=Object(E.a)([""]);return y=function(){return e},e}function S(){var e=Object(E.a)(["\n            background-color: #28380b;\n            animation-name: ",";\n            animation-duration: ",";\n        "]);return S=function(){return e},e}function w(){var e=Object(E.a)(["\n            0% { opacity: 0; }\n            100% { opacity: 1; }\n        "]);return w=function(){return e},e}function B(){var e=Object(E.a)(["\n            0% {\n                height: 0rem;\n                visible: false;\n            }\n            100% { height: 2.5rem; }\n        "]);return B=function(){return e},e}function k(){var e=Object(E.a)(["\n                    ","\n                    animation-direction: reverse;\n                "]);return k=function(){return e},e}function T(){var e=Object(E.a)(["\n                    ","\n                    animation-fill-mode: forwards;\n                "]);return T=function(){return e},e}function O(){var e=Object(E.a)(["\n                display: inline-block;\n                color: ",";\n                text-align: center;\n                padding-top: 0.4rem;\n                padding-bottom: 0.4rem;\n                width: ","%;\n                font-weight: bold;\n                transition: ",";\n                &:hover {\n                    color: ",";\n                    cursor: pointer;\n                }\n                ","\n            "]);return O=function(){return e},e}function A(){var e=Object(E.a)(["\n                animation-name: ",";\n                animation-duration: ",";\n                animation-fill-mode: forwards;\n            "]);return A=function(){return e},e}var C=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).ANIMATION_DURATION="0.25s",a.shouldTextFade=function(e){return e.selectedHeader!==a.props.selectedHeader?Object(p.b)(A(),a.sectionTextFade,a.ANIMATION_DURATION):""},a.displaySectionBar=function(e){if(Object.keys(a.menuOptions).includes(e.selectedHeader)){a.itemsToDisplay=[];var t,n=p.c.div(O(),(function(e){return e.theme.col}),100/a.menuOptions[e.selectedHeader].length,a.ANIMATION_DURATION,(function(e){return e.theme.hoverCol}),a.shouldTextFade(e));!1===a.isVisible&&(a.SectionBarDiv=p.c.div(T(),a.sectionBarDivAniProps),a.isVisible=!0),a.menuOptions[e.selectedHeader].forEach((function(e){t=l.a.createElement(n,{onClick:function(){return a.props.buttonClicked(e)},key:e},e),a.itemsToDisplay.push(l.a.createElement(p.a,{theme:function(){return e===a.props.selectedSection?g:f},key:e},t))}))}else a.itemsToDisplay=[],a.isVisible&&(a.SectionBarDiv=p.c.div(k(),a.sectionBarDivAniProps),a.isVisible=!1)},a.shouldComponentUpdate=function(e){return a.displaySectionBar(e),!0},a.menuOptions={Home:["Welcome","About"],Portfolio:["Audio Production","Live Events"]},a.slideAnimation=Object(p.d)(B()),a.sectionTextFade=Object(p.d)(w()),a.sectionBarDivAniProps=Object(p.b)(S(),a.slideAnimation,a.ANIMATION_DURATION),a.SectionBarDiv=p.c.div(y()),a.isVisible=!1,a.displaySectionBar(a.props),a}return Object(c.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(this.SectionBarDiv,null,this.itemsToDisplay))}}]),n}(a.Component),D=function(e){return l.a.createElement("div",null,l.a.createElement("p",null,"Step 9 Productions is an audio engineering service that has provided mixing and mastering, as well as live sound, lighting programming and crew skills to the industry since 2018, based in Cambridge, UK."),l.a.createElement("p",null,"Step 9 Productions strives to provide an objective, comprehensive and friendly service for all kinds of audio projects. Previous happy clients have included musicians, arts organisations, amateur drama groups, music venues, sound hire companies and theatres."),l.a.createElement("div",{className:m.a.QuoteSection},l.a.createElement("p",null,"\"Ross did a great job on the sound ... it's the best sound job that I've experienced whilst I've been at Henbury [School].\""),l.a.createElement("cite",null,'Liz Mowat and Samanta Harper: Joint Heads of Performing Arts, Blaise High School, Bristol (school stage production of "The Wiz" with live band)')))},x=n(10),j=n.n(x),P=n(13),H=n.n(P),M=function(e){return l.a.createElement("div",null,l.a.createElement("p",null,"With a musician and mobile DJ background and knowledge of multiple music genres and scenes, as well as having used many types of digital and analogue gear (both in the studio and live), founder Ross Duncan brings a focused attitude and attention to detail, putting emphasis on communication at each step of the technical process to iron out issues, along with practical degree experience in music technology and a critically-trained ear, to help produce the best results."),l.a.createElement("h3",null,"Music Mixing and Mastering"),l.a.createElement("p",null,"Rude Edit \u2013 Orchard Ave EP: original drum ","&"," bass and UK garage music composed, mixed and mastered by Ross of Step 9 Prouductions under the Rude Edit alias:"),l.a.createElement(j.a,{url:"https://soundcloud.com/rudeedit/sets/orchard-ave-ep-free-download",width:"100%"}),l.a.createElement("p",null,"Changing States - Silver Linings (part of a self-released EP): mastered by Step 9 Productions."),l.a.createElement(j.a,{url:"https://soundcloud.com/step9productions/changing-states-silver-linings",width:"100%"}),l.a.createElement("p",null,"Kings Kin - 'Trixie': mastered by Step 9 Productions."),l.a.createElement(j.a,{url:"https://soundcloud.com/kings-kin-band/trixie",width:"100%"}),l.a.createElement("p",null,"'You Don't Wanna Say' - part of a 10-track demo from Bristol-based band The Orange Skies: fully recorded, mixed and mastered by Step 9 Productions."),l.a.createElement(j.a,{url:"https://soundcloud.com/step9productions/you-dont-wanna-say",width:"100%"}),l.a.createElement("p",null,"Arwel Brown - cover of Biffy Clyro's 'Fingerhut': record, mixed and mastered as part of a group university assignment. It achieved a first."),l.a.createElement(j.a,{url:"https://soundcloud.com/step9productions/arwel-brown-fingerhut-biffy-clyro-cover",width:"100%"}),l.a.createElement("h3",null,"Audio for Video"),l.a.createElement("p",null,"Reconstruction of the movie 'Raiders of the Lost Ark' (1981). The effects and atmos were all re-sourced and re-edited to produce this interpretation of the famous fight scene. ",l.a.createElement("i",null,"Disclaimer: this video was created for an academic assignment and is intended to be transformative under fair use. If the copyright holder of the original material has any issues, please get in touch via the Contact section.")),l.a.createElement(H.a,{src:h("RaidersLostArkDemo.mp4"),width:"800px"}),l.a.createElement("h3",null,"Audio for Spoken Word"),l.a.createElement("p",null,"'Don't Do Drugs Kids' - a 5 minute radio drama recorded and mixed as part of a group university assignment. This achieved the highest marks in the year group."),l.a.createElement(j.a,{url:"https://soundcloud.com/step9productions/dont-do-drugs-kids-joshs-wild-ride-radio-drama",width:"100%"}),l.a.createElement("p",null,"\u2018Mushnik and Son\u2019 \u2013 part of a cast recording of \u2018Little Shop of Horrors\u2019 performed by UWE Bristol\u2019s Centre for Music students, March 2017. Edited, mixed and mastered by Step 9 Productions. Solos by Frazer Meakin ","&"," Jack Blackmore."),l.a.createElement(j.a,{url:"https://soundcloud.com/step9productions/mushnik-and-son",width:"100%"}),l.a.createElement("h3",null,"Audio for Games"),l.a.createElement("p",null,"Interactive Music for Shooter Games Presentation \u2013 produced for a university assignment, this FMOD project is a music state machine for a multiplayer shooter game idea. This video demonstrates the different states and how they apply to a gameplay scenario."),l.a.createElement(H.a,{src:h("ShooterGameMusic.mp4"),width:"800px"}))},F=function(e){return l.a.createElement("div",{className:m.a.App},l.a.createElement("p",null,"Ross of Step 9 Productions has gained ample experience in the live events technical sector in live sound, lighting and stage duties, with crewing and tech experience at some famous venues including Bristol's The Fleece and Thekla, as well as Cardiff's Principality Stadium, the NEC in Birmingham and the prestigious Salisbury Playhouse theatre, not mentioning outdoor festivals and corporate functions."),l.a.createElement("p",null,l.a.createElement("i",null,"Note from Ross: Due to other work commitments and the situation surrounding COVID-19, I am not currently working as a live technician. However, skills from positions in this side of the industry are transferrable to other sectors of professional audio, including studio engineering and music production, which is why I have left this part of my website here as a record of my previous activities for the reader's interest.")),l.a.createElement("h3",null,"Events Crew Credits"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Event"),l.a.createElement("th",null,"Venue"),l.a.createElement("th",null,"Role"),l.a.createElement("th",null,"Date(s)"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"Mixed live music nights")),l.a.createElement("td",null,"The Canteen and Old Market Assembly, Bristol"),l.a.createElement("td",null,"Part of sound engineer team"),l.a.createElement("td",null,"Sep 2019 - Mar 2020")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"TEDx Salisbury")),l.a.createElement("td",null,"Salisbury Arts Centre"),l.a.createElement("td",null,"Sound and AV technician"),l.a.createElement("td",null,"Feb 2020")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,'"Lorca\'s Blood Wedding: Retold by Barney Norris"')),l.a.createElement("td",null,"Salisbury Playhouse"),l.a.createElement("td",null,"Lighting ","&"," sound operator, set builder and rigger"),l.a.createElement("td",null,"Feb 2020")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,'"Jack ',"&",' The Beanstalk" by Polka Dot Pantomimes')),l.a.createElement("td",null,"The Broadway Theatre, Barking, London"),l.a.createElement("td",null,"Follow-spot operator, stage crew and flyman"),l.a.createElement("td",null,"Dec 2019 - Jan 2020")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"Picture This Tour")),l.a.createElement("td",null,"SWX, Bristol"),l.a.createElement("td",null,"Sound crew"),l.a.createElement("td",null,"Nov 2019")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"Fever 333 Tour")),l.a.createElement("td",null,"SWX, Bristol"),l.a.createElement("td",null,"Sound crew"),l.a.createElement("td",null,"Nov 2019")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"Chicken Picnic ","&"," Melotone Tour")),l.a.createElement("td",null,"Mr Wolf's, Bristol"),l.a.createElement("td",null,"Sound engineer"),l.a.createElement("td",null,"Nov 2019")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"Gender Roles sold-out tour")),l.a.createElement("td",null,"Rough Trade Bristol"),l.a.createElement("td",null,"Sound engineer"),l.a.createElement("td",null,"Oct 2019")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"Dixons Carphone PEAK Conference")),l.a.createElement("td",null,"NEC Birmingham"),l.a.createElement("td",null,"Follow-spot operator and lighting crew"),l.a.createElement("td",null,"Oct 2019")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"South Gloucestershire Business Show")),l.a.createElement("td",null,"Bristol Science Park"),l.a.createElement("td",null,"AV crew"),l.a.createElement("td",null,"Oct 2019")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"P!nk Beautiful Trauma World Tour")),l.a.createElement("td",null,"Cardiff Principality Stadium"),l.a.createElement("td",null,"Lighting crew"),l.a.createElement("td",null,"Sep 2019")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"HowTheLightGetsIn Festival")),l.a.createElement("td",null,"Kenwood House, London"),l.a.createElement("td",null,"Sound engineer and site crew"),l.a.createElement("td",null,"Sep 2019")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"Machine Gun Kelly tour")),l.a.createElement("td",null,"SWX, Bristol"),l.a.createElement("td",null,"Sound crew"),l.a.createElement("td",null,"Aug 2019")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"Sam Fender tour")),l.a.createElement("td",null,"SWX, Bristol"),l.a.createElement("td",null,"Sound crew"),l.a.createElement("td",null,"Aug 2019")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"Jack Calloway Dance Band")),l.a.createElement("td",null,"The Bristol Stable"),l.a.createElement("td",null,"Sound engineer"),l.a.createElement("td",null,"Aug 2019")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"Bristol Pride Festival")),l.a.createElement("td",null,"Durdham Downs, Bristol"),l.a.createElement("td",null,"Sound crew"),l.a.createElement("td",null,"Jul 2019")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"Bristol Sounds featuring Bloc Party")),l.a.createElement("td",null,"Lloyds Amphitheatre, Bristol"),l.a.createElement("td",null,"Sound crew"),l.a.createElement("td",null,"Jul 2019")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"Sophie Ellis-Bextor tour")),l.a.createElement("td",null,"St. George's, Bristol"),l.a.createElement("td",null,"Sound crew"),l.a.createElement("td",null,"Jun 2019")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"BBC Food and Farming Awards")),l.a.createElement("td",null,"Bristol City Hall"),l.a.createElement("td",null,"Lighting crew"),l.a.createElement("td",null,"Jun 2019")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"The Hu tour")),l.a.createElement("td",null,"SWX, Bristol"),l.a.createElement("td",null,"Sound crew"),l.a.createElement("td",null,"Jun 2019")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"From The Jam tour")),l.a.createElement("td",null,"St. George's, Bristol"),l.a.createElement("td",null,"Sound crew"),l.a.createElement("td",null,"Jun 2019")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"Dot To Dot Festival")),l.a.createElement("td",null,"The Fleece, Bristol"),l.a.createElement("td",null,"Sound crew"),l.a.createElement("td",null,"May 2019")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"Gong Tour")),l.a.createElement("td",null,"Thekla, Bristol"),l.a.createElement("td",null,"Sound crew"),l.a.createElement("td",null,"May 2019")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"The Heavy tour")),l.a.createElement("td",null,"Trinity Centre, Bristol"),l.a.createElement("td",null,"Sound crew"),l.a.createElement("td",null,"May 2019")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,'"Annie"')),l.a.createElement("td",null,"Blaise High School, Bristol"),l.a.createElement("td",null,"SFX operator"),l.a.createElement("td",null,"Feb 2019")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,'"UPS: Used Panty Services" (short film)')),l.a.createElement("td",null,"Cardiff"),l.a.createElement("td",null,"Sound recordist"),l.a.createElement("td",null,"Sep 2018")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"Sequences Festival Afterparty")),l.a.createElement("td",null,"Lakota, Bristol"),l.a.createElement("td",null,"Lighting operator"),l.a.createElement("td",null,"Aug 2018")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"Calibre ","&"," DRS: Alchemy")),l.a.createElement("td",null,"Lakota, Bristol"),l.a.createElement("td",null,"Lighting operator"),l.a.createElement("td",null,"Aug 2018")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"Psyched featuring Digital Mystikz")),l.a.createElement("td",null,"Lakota, Bristol"),l.a.createElement("td",null,"Lighting operator"),l.a.createElement("td",null,"May 2018")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"SouthWest Open Youth Orchestra (now National Open Youth Orchestra)")),l.a.createElement("td",null,"WeTheCurious, Bristol"),l.a.createElement("td",null,"Sound recordist"),l.a.createElement("td",null,"Apr 2018")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,'"Zorro The Musical" by UWE Bristol Centre for Music')),l.a.createElement("td",null,"Redgrave Theatre, Bristol"),l.a.createElement("td",null,"Sound mixer, set builder and audio post-production editor"),l.a.createElement("td",null,"Mar 2018")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,'"Beauty And The Beast"')),l.a.createElement("td",null,"Blaise High School, Bristol"),l.a.createElement("td",null,"Sound mixer"),l.a.createElement("td",null,"Feb 2018")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,'"Musical Mixtape" by Bristol Musical Comedy Club')),l.a.createElement("td",null,"St Monica Trust, Bristol"),l.a.createElement("td",null,"Sound mixer"),l.a.createElement("td",null,"Oct 2017")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"City of Bristol Brass Band Spring Concert")),l.a.createElement("td",null,"St Michael's Church Centre, Stoke Gifford, nr. Bristol"),l.a.createElement("td",null,"Sound recordist"),l.a.createElement("td",null,"Apr 2017")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,'"Little Shop of Horrors" by UWE Bristol Centre for Music')),l.a.createElement("td",null,"Redgrave Theatre, Bristol"),l.a.createElement("td",null,"SFX operator, set building and audio post-production editor"),l.a.createElement("td",null,"Mar 2017")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,'"The Wiz" (adaptation of The Wizard of Oz)')),l.a.createElement("td",null,"Blaise High School, Bristol"),l.a.createElement("td",null,"Sound mixer"),l.a.createElement("td",null,"Feb 2017")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"Henley Festival, Bedouin Tent")),l.a.createElement("td",null,"Henley-on-Thames"),l.a.createElement("td",null,"Sound crew"),l.a.createElement("td",null,"Jul 2016")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"The Little Welly Festival music stage")),l.a.createElement("td",null,"Henley-on-Thames"),l.a.createElement("td",null,"Sound engineer"),l.a.createElement("td",null,"Jun 2016")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"Music On The Meadows Festival")),l.a.createElement("td",null,"Mill Meadows, Henley-on-Thames"),l.a.createElement("td",null,"Stage crew, lighting operator and DJ"),l.a.createElement("td",null,"Jun 2013, 2014 ","&"," 2016")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"Henley Youth Festival Gig Night")),l.a.createElement("td",null,"Lovibonds Brewery, Henley-on-Thames"),l.a.createElement("td",null,"Sound crew and DJ"),l.a.createElement("td",null,"Mar 2014, 2015 ","&"," 2016")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,'"Our House"')),l.a.createElement("td",null,"The Henley College, Henley-on-Thames"),l.a.createElement("td",null,"Sound engineer"),l.a.createElement("td",null,"Dec 2015")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,'"There And Back Again" (adaptation of The Hobbit)')),l.a.createElement("td",null,"South Hill Park Arts Centre, Bracknell"),l.a.createElement("td",null,"Sound mixer ","&"," SFX operator"),l.a.createElement("td",null,"Aug 2013")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"Henley Youth Festival Dance and Variety Shows")),l.a.createElement("td",null,"Kenton Theatre, Henley-on-Thames"),l.a.createElement("td",null,"Sound, lighting and AV crew"),l.a.createElement("td",null,"Mar 2010 ","&"," 2013")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"Henley Frige Festival")),l.a.createElement("td",null,"The Chocolate Cafe, Henley-on-Thames"),l.a.createElement("td",null,"Lighting crew"),l.a.createElement("td",null,"Jul 2012")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,'"The Boyfriend" by Henley Amateur Operatic ',"&"," Dramatic Society")),l.a.createElement("td",null,"Kenton Theatre, Henley-on-Thames"),l.a.createElement("td",null,"Stage crew"),l.a.createElement("td",null,"Apr 2010")))))},I=function(e){return l.a.createElement("div",null,l.a.createElement("p",null,"Step 9 Productions is the solo project of myself, Ross Duncan. I got started in music as a drummer and percussionist, playing in wind orchestras and jazz ensembles, whilst getting stuck into learning electronic music production. Between 2013 and 2017, I ran a mobile DJ service for birthday parties, school events and other private functions. From this point, I knew that a career in professional audio would be my future. audio "),l.a.createElement("p",null,"I moved to Bristol in 2016 to study audio and music technology at the University of the West of England. Whilst studying, I circulated amongst the music producer, DJ, live music, hospitality and promoter communities. I have played DJ sets, helped run events and set up equipment at various Bristol events and venues, most notably the famous Lakota nightclub, where I set up the decks and lighting, and operated lights during clubs nights, for artists such as Digital Mystikz, Calibre and many more. I've also mixed and mastered music of fellow electronic musicians and bands."),l.a.createElement("p",null,"Whilst studying and upon graduation, I freelanced with various events hire companies and theatres as part of their stage, sound and lighting crews. A full list of events I've worked on is on the Portfolio / Live Events section of this site."),l.a.createElement("p",null,"In January 2020, I worked for arts organisation Wiltshire Creative, who run the Salisbury Playhouse theatre and Salisbury Arts Centre. We catered for many visiting plays, musicals, corporate events and comedy nights."),l.a.createElement("p",null,"In July 2020, I started working for Catholic radio organsation Radio Maria England as an audio technician, editing programmes, maintaining equipment and supervising volunteers."),l.a.createElement("p",null,"I set up this site to get in contact with other musicians, music producers and media groups who are looking for help with the audio side of their projects. I would love to provide my skills to help out. If your requirements are unusual, please don't hesistate to specify! Many thanks to Design Supply UK for making this site's logo."),l.a.createElement("h1",null,"What needs doing?"),l.a.createElement("p",null,"Here is a comprehensive list of what Step 9 Productions can provide help with for your project:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Studio or location recording for music, spoken word, theatre productions or video"),l.a.createElement("li",null,"Dialogue and music editing"),l.a.createElement("li",null,"Mixing"),l.a.createElement("li",null,"Mastering")))},W=function(e){return e.children},L=function(e){return l.a.createElement(W,null,l.a.createElement("p",null,"Send us an email at: ",l.a.createElement("a",{href:"maito@step9productions@gmail.com"},"step9productions@gmail.com")),l.a.createElement("p",null,"Like us on Facebook by ",l.a.createElement("a",{href:"https://www.facebook.com/step9productions"},"clicking here")))},N=function(e){var t=l.a.createElement("div",null);return""!==e.imgObj.source&&(t=l.a.createElement("img",{src:h(e.imgObj.source),alt:e.alt,width:"100%"})),l.a.createElement(W,null,t)},J=function(e){return l.a.createElement(W,null,e.text)};function R(){var e=Object(E.a)(["\n    animation-name: ",";\n    animation-fill-mode: forwards;\n"]);return R=function(){return e},e}function _(){var e=Object(E.a)(["\n            animation-duration: 0.5s;\n        "]);return _=function(){return e},e}function G(){var e=Object(E.a)(["\n            animation-duration: 0.3s;\n            animation-direction: reverse;\n        "]);return G=function(){return e},e}function U(){var e=Object(E.a)(["\n    0% {\n        opacity: 0;\n        height: 0;\n    }\n    100% {\n        opacity: 1;\n        height: 100px;\n    }\n"]);return U=function(){return e},e}var K=Object(p.d)(U()),V=Object(p.b)(R(),K);function z(){var e=Object(E.a)(["\n             ","\n             ","\n             animation-fill-mode: forwards;\n        "]);return z=function(){return e},e}function X(){var e=Object(E.a)([""]);return X=function(){return e},e}var Y=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).FadeDiv=p.c.div(X()),e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return this.FadeDiv=p.c.div(z(),V,(function(){return e.props.leaving?Object(p.b)(G()):Object(p.b)(_())})),l.a.createElement(this.FadeDiv,null,l.a.createElement("h1",{className:m.a.App},this.props.data.headingText),l.a.createElement(N,{imgObj:this.props.data.image}),l.a.createElement(J,{text:this.props.data.textBodyContent}))}}]),n}(a.Component),q=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).currentPageData={headingText:"",image:{source:"",alt:""},textBodyContent:null},e.previousPageData={headingText:"",image:{source:"",alt:""},textBodyContent:null},e}return Object(c.a)(n,[{key:"render",value:function(){return this.previousPageData=this.currentPageData,"Home"===this.props.selectedHeader?"Welcome"===this.props.selectedSection?this.currentPageData={headingText:"Hi there.",image:{source:"Welcome.jpg",alt:"Welcome"},textBodyContent:l.a.createElement(D,null)}:this.currentPageData={headingText:"About Step 9 Productions",image:{source:"About.jpg",alt:"Step 9 Productions home studio"},textBodyContent:l.a.createElement(I,null)}:"Portfolio"===this.props.selectedHeader?"Audio Production"===this.props.selectedSection?this.currentPageData={headingText:"Audio Production Examples",image:{source:"",alt:""},textBodyContent:l.a.createElement(M,null)}:this.currentPageData={headingText:"Live Technical Expertise",image:{source:"TEDxSalisbury.jpg",alt:"TEDx Salisbury at Salisbury Arts Centre, 2020"},textBodyContent:l.a.createElement(F,null)}:this.currentPageData={headingText:"Get In Touch",image:{source:"Logic shot edit.jpg",alt:"Audio production at the home studio"},textBodyContent:l.a.createElement(L,null)},l.a.createElement("div",{className:m.a.App},l.a.createElement(Y,{leaving:!0,data:this.previousPageData}),l.a.createElement(Y,{leaving:!1,data:this.currentPageData}))}}]),n}(a.Component),Q=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={headerBarSelection:"Home",sectionBarSelection:"Welcome"},e.headerBarClickHandler=function(t){e.setState({headerBarSelection:t}),"Home"===t?e.setState({sectionBarSelection:"Welcome"}):e.setState({sectionBarSelection:"Audio Production"})},e.sectionBarClickHandler=function(t){e.setState({sectionBarSelection:t})},e}return Object(c.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:m.a.App},l.a.createElement("img",{src:h("Logo.png"),alt:"Logo",width:"240px",height:"36px"}),l.a.createElement(v,{buttonClicked:this.headerBarClickHandler,selectedItem:this.state.headerBarSelection}),l.a.createElement(C,{buttonClicked:this.sectionBarClickHandler,selectedHeader:this.state.headerBarSelection,selectedSection:this.state.sectionBarSelection}),l.a.createElement(q,{selectedHeader:this.state.headerBarSelection,selectedSection:this.state.sectionBarSelection}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.e2d0f4df.chunk.js.map