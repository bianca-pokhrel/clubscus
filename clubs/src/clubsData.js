const clubsData = [
    {
		//General Group Info
        groupName: "Math",
        description: "A club for math enthusiasts",
        banner: "https://undark.org/wp-content/uploads/2020/01/GettyImages-154932300.jpg",
		founder: "SpongeBoy RoundPants",
		started: "2020/08/27",
		url: "/math", 
		
		members: [
			{
				id: 3, 
				name: "Matt Jones",
				instagram: "@matt_jones",
				facebook: "Matt Jones",
				profilePicture: "https://i.pinimg.com/736x/fb/7a/4c/fb7a4ca3a317f26ee596566b59bf96ea.jpg"
			}, 
			{
				id: 4, 
				name: "Math Freleng",
				instagram: "@math_freleng",
				facebook: "Math Freleng",
				profilePicture: "https://www.meme-arsenal.com/memes/fc1839bd475ad82eb4f0f9f9dc10cb40.jpg"
			}
		],
		links: [{name: "FaceBook", url: "https://www.facebook.com/math/"}, {name: "About Us", urL: "/math/about"}],
		posts: [
			{id: 0, title: "Group Study Session On Thursday", text: "Just like to remind everyone we have an online zoom study session open to everyone.", date: '2020-11-01', image: "https://eccles.utah.edu/wp-content/uploads/2015/04/Study-Group-web.jpeg", comments: [{id: 0, msg: "Wow! Great Post!", date: "2020-01-12"}], likes: ["Tom","Dick", "Larry"]},
			{id: 1, title: "Congrats to Matt!", text: "Matt just landed a TA position for MAT135, Congrats!", date: '2020-11-01', image: "", comments: [], likes: []},
		],
		club: false
    },
    {
        groupName: "English",
        description: "A club for lit nerds",
        banner: "https://idc.edu/wp-content/uploads/2018/12/15-Techniques-for-Learning-English-Vocabulary-850x390.jpg",
		founder: "Keanu Reeves",
		started: "2020/09/23",
		url: "/english", 

		members: [
			{
				id: 5, 
				name: "Pompadour Jones",
				instagram: "@pompadourj",
				facebook: "Pompadour Jones",
				profilePicture: "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg"
			}, 
			{
				id: 6, 
				name: "Benedict Freleng",
				instagram: "@bfrel",
				facebook: "Benedict Fre.",
				profilePicture: "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg"
			}
		],
		links: [{name: "FaceBook", url: "https://www.facebook.com/english/"}, {name: "About Us", urL: "/english/about"}],
		posts: [],
		club: false
    },
    {
        groupName: "French",
        description: "A club for those who want to dip their toes in the French language",
        banner: "https://cdn.ila-france.com/wp-content/uploads/2019/04/survive-beginning-french-immersion-courses.jpg",
		founder: "Bruce Wayne",
		started: "2020/09/24",
		url: "/french",

		members: [
			{
				id: 7, 
				name: "Pierre Jones",
				instagram: "@yopierre",
				facebook: "Pierre J",
				profilePicture: "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg"
			}, 
			{
				id: 8, 
				name: "Hans Freleng",
				instagram: "@MANSFrel",
				facebook: "Maaaaans",
				profilePicture: "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg"
			}
		],
		links: [{name: "FaceBook", url: "https://www.facebook.com/french/"}, {name: "About Us", urL: "/french/about"}],
		posts: [],
		club: false
    },
	{	//USER GROUPS START HERE
		groupName: "CSC309 Project Group", 
		description: "This is a group for the project",
		banner: "https://coursework.vschool.io/content/images/2017/09/JavaScriptBanner.png", 
		founder: "Suguru Seo",
		started: "2021/01/25",
		url: "/csc309projectgroup", 

		members: [
			{
				id: 9, 
				name: "Suguru Seo",
				instagram: "@Sug_Seo",
				facebook: "Suguru Seo",
				profilePicture: "https://avatars.githubusercontent.com/u/26561677?s=460&u=0e76846367b28095f4225089da95fe734561eded&v=4"
			}, 
			{
				id: 1, 
				name: "JJ Kanu",
				instagram: "@jj_kanu",
				facebook: "JJ Kanu",
				profilePicture: "https://avatars.githubusercontent.com/u/62584273?s=460&u=8279555aeefd86b8fba6398f02f1dfa8fa51c5cf&v=4"
			},
			{
				id: 11, 
				name: "Bianca Pokhrel",
				instagram: "@biancapokhrel",
				facebook: "Bianca Pokhrel",
				profilePicture: "https://avatars.githubusercontent.com/u/45080709?s=460&u=33064b15b5b579af2b9029b72779a4a5321b0e19&v=4"
			},
			{
				id: 12, 
				name: "Nicolas Ruiz",
				instagram: "@nic_ruiz",
				facebook: "Nicolas Ruiz",
				profilePicture: "https://avatars.githubusercontent.com/u/24924293?s=460&v=4"
			}
		],
		links: [{name: "FaceBook", url: "https://www.facebook.com/csc309group/"}, {name: "About Us", urL: "/csc309projectgroup/about"}],
		posts: [
			{id: 0, title: "Progress Update", text: "Hey Guys! Just letting you know I just added some arbitrary post to the temp database. I still need to put it in another file though.", image:"", date: '2021-03-06', comments: [{id: 0, msg: "Wow! Great Post!", date: "2020-01-12"}], likes: ["Tom","Dick", "Larry"]},
			{id: 1, title: "Progress Update 2", text: "Also changed up a few things to User Info component so make sure to pull!", image:"", date: '2021-03-07', comments: [], likes: ["Tom"]},
		],
		club: false
	},
    {
		groupName: "UofT Puppies Club", 
		description: "The puppies of UofT!",
		banner: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/various-dogs-horizontal-web-banner-susan-schmitz.jpg", 
		founder: "Air Bud",
		started: "2020/09/26",
		url: "/uoftpuppiesclub", 

		members: [
			{
				id: 13, 
				name: "Milo Jones",
				instagram: "@milo_jones",
				facebook: "Milo J",
				profilePicture: "https://i.pinimg.com/originals/0d/8a/22/0d8a22def593c688f7d32dff3e65b74f.jpg"
			}, 
			{
				id: 14, 
				name: "Rocky Freleng",
				instagram: "@rocky_frel",
				facebook: "Rocky Freleng",
				profilePicture: "https://images.theconversation.com/files/319375/original/file-20200309-118956-1cqvm6j.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop"
			},
			{
				id: 1, 
				name: "JJ Kanu",
				instagram: "@jj_kanu",
				facebook: "JJ Kanu",
				profilePicture: "https://avatars.githubusercontent.com/u/62584273?s=460&u=8279555aeefd86b8fba6398f02f1dfa8fa51c5cf&v=4"
			},
		],
		links: [{name: "FaceBook", url: "https://www.facebook.com/uoftpuppiesclub/"}, {name: "About Us", urL: "/uoftpuppiesclub/about"}],
		posts: [
			{id: 0, title: "Puppy Post Friday", text: "Puppy Appreciation Post", image:"https://static.stacker.com/s3fs-public/styles/properly_sized_image/s3/2020-03/English%20Lab%20Puppy%20%281%29_0.png", date: '2021-03-06', comments: [{id: 0, msg: "Wow! Great Post!", date: "2020-01-12"}], likes: ["Tom","Dick", "Larry"]},
			{id: 1, title: "Puppy Post Saturday", text: "Everyday is puppy appreciation lol.", image:"https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg", date: '2021-03-07', comments: [], likes: ["Tom"]},
		],
		club: true
	},
    {
		groupName: "Attack On Titan Fanclub", 
		description: "Talk about some weeb stuff",
		banner: "https://i.pinimg.com/originals/87/71/7a/87717a0d118ae40f75467b8fbb452e04.jpg", 
		founder: "Isayama",
		started: "2020/09/28",
		url: "/attackontitanfanclub", 

		members: [
			{
				id: 16, 
				name: "Eren Yeager",
				instagram: "@eren_titan",
				facebook: "Eren Yeager",
				profilePicture: "https://64.media.tumblr.com/77a21e91593418fbbba5897efd60d410/a7737d816595f58d-d8/s250x400/0072d174042906a318b36c24a7d246d24268e447.jpg"
			}, 
			{
				id: 17, 
				name: "Mikasa Ackermann",
				instagram: "@mikasaaa",
				facebook: "Mikasa Ackermann",
				profilePicture: "https://pm1.narvii.com/6728/2cfefac17df8aa295e4a3088f41863d781122a82v2_hq.jpg"
			},
			{
				id: 1, 
				name: "JJ Kanu",
				instagram: "@jj_kanu",
				facebook: "JJ Kanu",
				profilePicture: "https://avatars.githubusercontent.com/u/62584273?s=460&u=8279555aeefd86b8fba6398f02f1dfa8fa51c5cf&v=4"
			},
		],
		links: [{name: "FaceBook", url: "https://www.facebook.com//"}, {name: "About Us", urL: "/attackontitanfanclub/about"}],
		posts: [
			{id: 0, title: "This Weeks Episode", text: "I'm not even gonna put actual spoilers here, GO WATCH THE SHOW, IT'S AMAZING!", image:"", date: '2021-03-07', comments: [{id: 0, msg: "Wow! Great Post!", date: "2020-01-12"}], likes: ["Tom","Dick", "Larry"]},
			{id: 1, title: "This Weeks Episode", text: "Crazy! Really great VA from Gabi and Kaya. What are your thoughts for next week's ep?", image:"https://otakukart.com/wp-content/uploads/2021/02/Attack-on-Titan-Season-4-Episode-12-Cover-1.jpg", date: '2021-02-28', comments: [], likes: ["Tom"]},
		],
		club: false
	},
	{
		groupName: "UofT Full Grown Dogs Club", 
		description: "For when your puppy stuff grows up",
		banner: "https://www.gannett-cdn.com/media/2018/06/12/USATODAY/usatsports/great-dane-giant-dog-breeds.jpg?width=2560", 
		founder: "Peter Parker",
		started: "2020/10/27",
		url: "/uoftfullgrowndogsclubs", 

		members: [
			{
				id: 18, 
				name: "Eren Jones",
				instagram: "@eren_titan",
				facebook: "Eren Jones",
				profilePicture: "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg"
			}, 
			{
				id: 19, 
				name: "Mikasa Freleng",
				instagram: "@mikasaaa",
				facebook: "Mikasa Freleng",
				profilePicture: "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg"
			}
		],
		links: [{name: "FaceBook", url: "https://www.facebook.com/uoftfullgrowndogsclubs/"}, {name: "About Us", urL: "/uoftfullgrowndogsclubs/about"}],
		posts: [],
		club: true
	},
    {
		groupName: "CSC309 Project Group 10", 
		description: "This is a cooler group for the project",
		banner: "https://media.wagtail.io/images/wagtail-2.0-graphic-01.original.png", 
		founder: "Bob Parr",
		started: "2020/07/27",
		url: "/csc309projectgroup10", 

		members: [
			{
				id: 20, 
				name: "Eren Jones",
				instagram: "@eren_titan",
				facebook: "Eren Jones",
				profilePicture: "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg"
			}, 
			{
				id: 21, 
				name: "Mikasa Freleng",
				instagram: "@mikasaaa",
				facebook: "Mikasa Freleng",
				profilePicture: "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg"
			}
		],
		links: [{name: "FaceBook", url: "https://www.facebook.com/csc309projectgroup10/"}, {name: "About Us", urL: "/csc309projectgroup10/about"}],
		posts: [],
		club: false
	},
    {
		groupName: "Anime Club", 
		description: "The official anime club of UofT",
		banner: "https://lh3.googleusercontent.com/proxy/1eKSBCqy0r1L-i8U-iaOgctgPfK2tRHG7rYYSyyndivCbAD41vI0C74VBbZsggoixb6SDVGdni-1a-Ltxtf6I_yY5iap99RSXyVx3uJhfaqQ-z3QqJyYObYU7eDenWjKuMLEux-eqg", 
		founder: "Scott Pilgrim",
		started: "2020/06/27",
		url: "/animeclub", 

		members: [
			{
				id: 30, 
				name: "Eren Jones",
				instagram: "@eren_titan",
				facebook: "Eren Jones",
				profilePicture: "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg"
			}, 
			{
				id: 31, 
				name: "Mikasa Freleng",
				instagram: "@mikasaaa",
				facebook: "Mikasa Freleng",
				profilePicture: "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg"
			}
		],
		links: [{name: "FaceBook", url: "https://www.facebook.com/animeclub/"}, {name: "About Us", urL: "/animeclub/about"}], 
		posts: [],
		club: true
	},
    {
		groupName: "FML300 Winter 2021 Study Group", 
		description: "Study group for LEC001",
		banner: "https://images.squarespace-cdn.com/content/v1/59a4a351197aea9d17f6bc13/1516416483451-04SNTCS0MQURB39WVDLY/ke17ZwdGBToddI8pDm48kFTEgwhRQcX9r3XtU0e50sUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc2PPwcWkLXq-DNe4zpT7he0M_zRUr6912vvtObYWjAW-pUdJURR5nHbHpk7AZw8X9/FML-cover.gif", 
		founder: "John Shephard",
		started: "2021/01/27",
		url: "/fml300winter2021studygroup", 

		members: [
			{
				id: 40, 
				name: "Eren Jones",
				instagram: "@eren_titan",
				facebook: "Eren Jones",
				profilePicture: "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg"
			}, 
			{
				id: 41, 
				name: "Mikasa Freleng",
				instagram: "@mikasaaa",
				facebook: "Mikasa Freleng",
				profilePicture: "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg"
			}
		],
		links: [{name: "FaceBook", url: "https://www.facebook.com/fml300winter2021studygroup/"}, {name: "About Us", urL: "/fml300winter2021studygroup/about"}], 
		posts: [],
		club: false
	},
	//Where Nic's starts
	{
		groupName: "Testing Club",
		description: "This is the about page",
		banner: "data:image/png;base64,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",
		founder: "Johny Silverhand",
		started: "2020/09/21",
		url: "/testclub", 
		
		members: [
			{
				id: 50, 
				name: "Chuck Jones",
				instagram: "@Chuck-jones",
				facebook: "Chuck Jones",
				profilePicture: "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg"
			}, 
			{
				id: 52, 
				name: "Friz Freleng",
				instagram: "@whatsfriz",
				facebook: "Friz Freleng",
				profilePicture: "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg"
			}
		],
		links: [{name: "FaceBook", url: "https://www.facebook.com/testclub/"}, {name: "About Us", urL: "/testclub/about"}],
		posts: [{id: 0, title: "A Post", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", date: '2003-11-01', image: "/post.jpg", comments: [{id: 0, msg: "Wow! Great Post!", date: "2020-1-12"}], likes: ["Tom","Dick", "Larry"]},{id: 1, title: "Test Post", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", date: '2020-11-01', image: "", comments: [], likes: []},{id: 2, title: "Test Post", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", date: '2012-11-01', image: "/post.jpg", comments: [], likes: []}],
	},
]

module.exports = clubsData;