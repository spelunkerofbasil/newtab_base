// Script manages page behavior for chrome app, referencing images hosted on
// gadxoox.com for rendering.


// Image URLs go here
var images =[
"http://gadxoox.com/images/Afterglow.jpg",
"http://gadxoox.com/images/Apprentice.jpg",
"http://gadxoox.com/images/August_Afternoon.jpg",
"http://gadxoox.com/images/August_Morning.jpg",
"http://gadxoox.com/images/Autumn_Council.jpg",
"http://gadxoox.com/images/Autumn_Dream.jpg",
"http://gadxoox.com/images/Back_Road.jpg",
"http://gadxoox.com/images/Bell_Peak_Afternoon6000.jpg",
"http://gadxoox.com/images/Black_Feather_Shaman.jpg",
"http://gadxoox.com/images/Bow_Creek_Brave.jpg",
"http://gadxoox.com/images/Campo_Dorado.jpg",
"http://gadxoox.com/images/Cold_Front.jpg",
"http://gadxoox.com/images/Crow_Shaman.jpg",
"http://gadxoox.com/images/Crow_Shaman_cropped.jpg",
"http://gadxoox.com/images/Crow_Talker.jpg",
"http://gadxoox.com/images/Desert_Flood.jpg",
"http://gadxoox.com/images/Desert_Rain_I_6000.jpg",
"http://gadxoox.com/images/Dream_Caller.jpg",
"http://gadxoox.com/images/Dream_Watcher.jpg",
"http://gadxoox.com/images/Early_Summer_Sundown.jpg",
"http://gadxoox.com/images/Feathered_Shaman.jpg",
"http://gadxoox.com/images/Fireheart.jpg",
"http://gadxoox.com/images/Guardian_of_the_Spiral_Path.jpg",
"http://gadxoox.com/images/Harbinger_Shaman.jpg",
"http://gadxoox.com/images/Hunter_Spirit.jpg",
"http://gadxoox.com/images/Inside.jpg",
"http://gadxoox.com/images/Jd_dad_Shaman.jpg",
"http://gadxoox.com/images/Kokopelli_Shaman.jpg",
"http://gadxoox.com/images/Light_in_the_Valley.jpg",
"http://gadxoox.com/images/Mariposa_Blanca.jpg",
"http://gadxoox.com/images/Mesas_Azules.jpg",
"http://gadxoox.com/images/Miller_Pond.jpg",
"http://gadxoox.com/images/November_Dusk.jpg",
"http://gadxoox.com/images/Raven_Shield.jpg",
"http://gadxoox.com/images/Retro_Brave.jpg",
"http://gadxoox.com/images/Southern_Brave.jpg",
"http://gadxoox.com/images/Speaker_for_the_Second_World.jpg",
"http://gadxoox.com/images/Stormglow.jpg",
"http://gadxoox.com/images/Summer_Shaman.jpg",
"http://gadxoox.com/images/Summer_Wind_Brave.jpg",
"http://gadxoox.com/images/Sun_Crow.jpg",
"http://gadxoox.com/images/Ten_Feathers_Shaman.jpg",
"http://gadxoox.com/images/The_Scout.jpg",
"http://gadxoox.com/images/Trailhead.jpg",
"http://gadxoox.com/images/Warriors_Gaze.jpg",
"http://gadxoox.com/images/Wise_One.jpg",
];

// Quote strings go here
var quotes= [
"My paintings are best when my brain is able to disengage from the process. I sit back and watch my hand do the thing it knows how to do. My brain is kind of back there like a conductor.<br>The first thing I work on is the eyes, and typically the last thing I work on is the eyes. I'm not trying to figure out what I have to do, but what it wants, what it needs to be finished.",
"I'm still trying to paint that face. It's worrisome on two levels. One, because I've been trying so long and haven't done it yet. The other concern is, what happens if I do? What's next? This hand doesn't know how to do anything else.",
"Art is the antithesis of accident.",
"You can find yourself in a work of art, but only if you look--and if you are willing to see.",
"When I was a teacher, I knew that I would be changing lives. But I had no clue that my paintings might do the same. Now that people can so easily get in touch with me via the Internet, I'm hearing more and more often how my works have become so important to my collectors. The stories they tell me are all different, of course, but in many ways they are all the same.",
"As the years have gone by, my figures have taken on lives of their own. They have developed structurally into anatomically impossible figures which I refer to as being almost human.",
"Yes, I'm red/green colorblind. You want to make an issue of that?",
"One thing that a lot of artists don't understand is that people usually want to purchase art that is going to live in their homes with them.",
"If you look closely into the eyes of the faces I paint, you may see that they have also faced the abyss. Some have found the magic forms for their questions and may have even given shape to the answers.",
"You get out of art what you bring to it.",
"If you're going to be a successful artist, you've got to be smart, attentive, productive, consistent, reliable, and thoroughly professional.",
"As a professional artist, I haven't been able to afford to wait for inspiration.",
"In the most prosaic sense, my inspiration has been that I have bills to pay.",
"I have found the best solution is simply to go into the studio and start to work whether I feel inspired or not. Typically, the very act of drawing or dipping a brush into paint is sufficient to get me started and inspiration almost inevitably follows.",
"It's important to keep up with the times and make them work in your favor. For many years, I've known what the color of the year is going to be. Designers decide two years early and tell cloth makers and paint makers.",
"I have lived most of my life in Tucson, Arizona. I moved here when I was 10 and went to college at Northern Arizona University.",
"When I was a grad student, my roommate was a Hopi who had been born on Second Mesa and had a wife and child still living there. Occasionally he and I would get in his old pickup truck and drive along the flat plains of Northern Arizona heading towards the four corners area in the misty early morning hours in the most magical of places.",
"When I was a child, I would look out through my bedroom window, nose close to the old metal screen, smelling the dust of the day overlaid by redolent darkness.  I would stare into the night and think about being inside and outside, about being large and small, about when and, mostly, about why.",
"I tried to place cold brass handles on the edges of infinity.  I tried to unwind the noose of time and spread it out before me so that nails could be placed just so--here, and another here--that I might measure a life along its length and find the place where time began.<br>My young mind would fashion arrows of light and fire them into the darkness one by one, night after night, always to see them wink out just beyond in the void.",
"If you look closely into the eyes of the faces I paint, you may see that they have also faced the abyss.",
"I've seen fire and I've seen rain. I have known love and loss in near equal measure. I am interested in almost everything, but have a special a fondness for language and subatomic physics.",
"I could smell the essence of<br>autumn curled up in your hair<br>as the nights began to lengthen<br>and early evenings led us to quiet words about the days to come.<br>We warmed our hands before the smoldering mesquite<br>and murmured about what you would do while I was gone.<br>You'll have fun, you said, and I'll miss you.<br>But I knew you wouldn't.",
"Stooped now, with age and the burden of too many memories for my soul to bear,<br>Eyes clouded by the insults of years in the sunAnd the sight of too many dreams left wanting, too many battles lost,<br>And some too few wars finally won,<br>I step haltingly through the rain<br>and weave an unsteady ramble on the remaining high ground<br>I have been here often.<br>I have stood this watch on countless nights,<br>sniffing the wind For the merest scent of stardust<br>that must skim along<br>just above the faintly glimmering sand and sea.",
"A bit of folded paper,<br>Creased and marred by blood and grit,<br>Holding words that none had read<br>Though drowned, always, it seems, by redolent odors from below:<br>By things I cannot see.<br>Before it came into his grip,<br>Singular and mysterious,<br>Stained with river mud,<br>His name upon its face In her jagged script.",
"The squares upon which we move our lives<br>begin to fade in darkness as I castle and you move your alabaster queen to check.<br>My dark night is sacrificed without pause but you check again and again and then the game is over.<br>You were so clever and I so ill-prepared;<br>I loved you, after all, and it was all just for fun for me but never for you.<br>You always thirsted for blood.<br>Even mine.<br>Especially mine.",
"I could smell the essence of autumn curled up in your hair<br>as the nights began to lengthen and early evenings led us<br>to quiet words about the days to come.<br>We warmed our hands before the smoldering mesquite<br>and murmured about what you would do while I was gone.<br>You would write your poems and songs,<br>and I would disappear from your life completely,<br>while I grasped to hold your heart within mine.<br>Silence speared through us,<br>Excalibur returned to The Lady,<br>and I realized that I was already gone from your autumn;<br>I had already become an abstract puzzle of oddly shaped pieces in your mind--<br>unworthy of the effort to solve.",
"Shadows lean away from the spinning earth pushed up and up as they stretch toward the magnet of midnight, and as they flee the setting sun they reach far into gathering night, there to find their father.",
"I was falling all the while, all of me, while I waited for you to catch my breath and hold it so that I might yet breathe again within you.",
"Curtains billow aimless white into a single room,<br>coolness blooming through jalousies in rippled echoing waves,<br>below a Caribbean morning.",
"Fear lies beside me In mute anger.<br>It cuddles me close-by.<br>The songs of day Move through lower keys.<br>Harlots sneer And whisper in the dark, And I wish I were far, far away.",
"I wondered at what sort of man I had become to deal with these short days of sunless cold.<br>It's just winter, you said.<br>You are who you always were.<br>I'm no wolf, then?<br>I'm no centaur?I'd miss your touch, you said.<br>Well, that's what I dreamed you'd say.",
"My body is only a falling stone,<br>And sure to end naught<br>But mold and bone,<br>Within this final future passing,<br>Longing And alone.",
"This is the desert's winter clime--a slap of cold across the cheek.<br>Though sun slants tawny through the vale, it might as well be umbral lace<br>from hell's own ice-black pivot point,<br>there to lift your soul past God's clear<br>plangent voice and clouded, azure face.<br>Your eyes are blue behind that sky;<br>your mindscape curls baroque.<br>Why, you ask, does the solstice moon lie<br>sleeping now upon morn's lambent brow?<br>Why are we here?<br>What is our place?<br>And what have we done ere now?",
]

/*
* Function selects a random image and quote, rendering the image to the background of the HTML document, and the quote to an h1 element on the page with ID of quote.
*
*/
function getRandomImage(){
	// Get random image
	var imageIndex= Math.floor(Math.random()*images.length);
	var image= images[imageIndex];
	console.log(image)
	var body = document.getElementById("body");
	body.style.backgroundImage = "url('" + image + "')";

	// Get random quote
	var quoteIndex= Math.floor(Math.random()*quotes.length);
	var quote = quotes[quoteIndex];
	var quoteHeader = document.getElementById("quote");
	quoteHeader.innerHTML = quote;

}
