var config = {
    style: 'mapbox://styles/shug010/ckvqqgpmz0lt514pjd7r1p311',
    accessToken: 'pk.eyJ1Ijoic2h1ZzAxMCIsImEiOiJjbHAwb3JqYzYwYmlkMmlxdXdtb2F1azY0In0.dvm8Vw2ZUnOqXfxbz8XGrA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'Holes in the Story',
    subtitle: 'Plazas, Collapses, and History in la Habana Vieja',
    byline: 'by Miranda Shugars',
    image: '',
    footer: 'Sources: OpenStreetMap, UNESCO, Office of the Historian of the City of Havana <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: '1',
            alignment: 'center',
            hidden: false,
            title: 'Intro',
            image: '',
            description: 'The story of la Habana Vieja can be read in its absences: the holes of traditional colonial-era plazas, now restored for tourist consumption, and the holes between buildings where collapses have occurred. On the one hand, historic restoration and preservation efforts in plazas Vieja, de Armas, and San Francisco have revitalized la Habana Vieja’s port-side area, where cruise ships disgorge hundreds of thousands of tourists each year to admire the colonial charm. Only a few blocks away, the residential areas of la Habana Vieja ache like a rotten mouth losing more teeth each year. Outside of the primary tourist zones and corridors, buildings lean precariously behind ubiquitous wooden scaffolding until they crumble, often with residents still inside. This tragedy, driven by decades of neglect and state poverty, gives the lie to a third gap: the city’s life during the twentieth century, after Independence from Spain. More of la Habana Vieja’s current buildings rose after Independence than during its colonial era, but restoration efforts focus on presenting a neutralized colonial heritage. Tourists marvel at the restored stone forts and Spanish churches near the port while modernist and art deco gems languish throughout the city. Habana Vieja represents the failure of the Cuban Revolution, evident in the intense contrast between the quality of UNESCO-praised conservation practices, sponsored by a desperate, late economic turn toward tourism, and the poverty underlying that desperation which has abandoned Cubans to their crumbling homes for far too long to stop the process of inexorable collapse.',
            location: {
                center: [-82.35659, 23.13951],
                zoom: 17,
                pitch: 82,
                bearing: 141
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: '1.2',
            alignment: 'full',
            hidden: false,
            title: '',
            image: 'images/1.JPG',
            description: '',
            location: {
                center: [-82.35659, 23.13951],
                zoom: 17,
                pitch: 82,
                bearing: 141
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: '2',
            alignment: 'left',
            hidden: false,
            title: 'Ch1: background',
            image: '',
            description: 'In 1978, Cuba declared Habana Vieja a National Heritage site. In 1982, UNESCO approved Habana Vieja and its fortifications as a World Heritage Site based on criteria iv and v: as architectural and cultural Universal Outstanding Value. However, the formula of international heritage status privileges certain eras and urban forms. In Latin America, European colonial cities comprise 50% of UNESCO-designated cultural sites, and most of the cultural sites in urban areas.',
            location: {
            center: [-82.35178, 23.13749],
            zoom: 13,
            pitch: 0,
            bearing: 0,
            speed: 0.5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                   layer: 'unesco',
                   opacity: .3,
                   duration: 1000
               }
           ],
           onChapterExit: [
            {
                layer: 'unesco',
                opacity: 0,
            }
           ],
        },
        {
            id: '3',
            alignment: 'right',
            hidden: false,
            title: '',
            image: "",
            description: 'Rodney Harrison defines heritage as a “fundamentally economic activity” linked to the “global ‘business’ of heritage through the role of the World Heritage List in promoting places of national importance as tourist destinations”. In Havana, heritage construction activities began in earnest in the 1990s, following the collapse of the Soviet Union and Cuba’s subsequent economic crisis and turn toward tourism. The country began to craft a new national image, created for tourists, based in its colonial patrimony of forts, churches, cobblestone streets, red-tiled roofs, tree-lined boulevards, and, as a capstone to the colonial era, the Malecon sea wall which borders la Habana Vieja. </p> These layers show the UNESCO boundary (in gold) and buildings which have been renovated in la Habana Vieja, color-coded by renovation date.',
            location: {
                center: [-82.34386, 23.13725],
                zoom: 14,
                pitch: 0,
                bearing: 0,
                speed: 0.4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'havana-buildings',
                    opacity: 1,
                    duration: 0
                },
                {
                    layer: 'unesco',
                    opacity: .3,
                    duration: 1500
                },
                {
                    layer: 'oldhavana-buildings-datereno',
                    opacity: 1,
                    duration: 1500
                },
            ],
            onChapterExit: [
                {
                    layer: 'unesco', 
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'oldhavana-buildings-datereno',
                    opacity: 0,
                    duration: 0
                }
            ],
        },
        {
            id: '5',
            alignment: 'center',
            hidden: false,
            title: '',
            image: "",
            description: 'Before the 1990s, Cuba’s national image was linked strongly with the countryside and small urbanization. In fact, Fidel Castro explicitly denounced Havana as the unwanted holdout maintaining Cuba’s “bourgeois façade” (Castro 1960, 27). This disinvestment and even disdain led to official neglect of Havana for the first decades of the Revolution, and especially the 1960s. Housing shortages grew worse during this time, as did the condition of buildings.',
            location: {
                center: [-82.34386, 23.13725],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: [
                {
                    layer: 'havana-buildings',
                    opacity: 0,
                },
            ],
        },
        {
            id: '11',
            alignment: 'left',
            hidden: false,
            title: 'Ch2: plazas',
            image: "",
            description: 'In 1995, Accord 2951 declared la Habana Vieja a zone of “Great Significance for Tourism”, fully cinching the relationship between preservation and tourism in this part of the city. La Habana Vieja represents the vast majority of preservation activity in Havana. The 1995 Accord linked the historic identity of Havana directly to its economic endeavors, undermining the aspirations of Cuban preservationists to practice sustainable and socially responsible preservation.',
            location: {
                center: [-82.35000, 23.13582],
                zoom: 17,
                pitch: 0,
                bearing: 72,
                speed: 0.2,
                curve: 2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'oldhavana-buildings-datereno',
                    opacity: 1,
                    duration: 500
                },
            ],
            onChapterExit: [
            ],
        },
        {
            id: '12',
            alignment: 'center',
            hidden: false,
            title: '',
            image: "",
            description: 'Among the many renovations which attract tourists to the colonial city, its Spanish plazas are among the most photographed and picturesque. They also exemplify the City Historian’s preservation strategy from its early years until today: the creation of historical fabrications which appeal to a tourist’s vision of Caribbean grandeur. One of the most famous and earliest examples of Havana´s preservation success is the Plaza Vieja. </p><img src="images/PV3.jpg"></img>',
            location: {
                center: [-82.35000, 23.13582],
                zoom: 17,
                pitch: 0,
                bearing: 72
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: '13.2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: "",
            description: 'During the mid to late 1990s, the OHC refurbished and repainted most of the buildings around the square. New businesses moved in. Between 1996-98 the OHC rebuilt the Plaza itself, removing a semi-underground parking structure from the 1950s to create a new colonial aesthetic, complete with cobblestones, pedestrian safety bollards, and an Italian marble fountain surrounded by a black fence to prevent people bathing in it.',
            location: {
                center: [-82.35013, 23.13657],
                zoom: 19.78,
                pitch: 85.00,
                bearing: -7.64,
                speed: 0.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: '13',
            alignment: 'full',
            hidden: false,
            title: '',
            image: "",
            description: '<img src="images/PV4.jpg" width="50%"></img>Plaza Vieja in 1995, before demolition of the plaza began. Source: Segre, Two Faces of the Antillean Metropolis, p321</p><img src="images/PV5.png" width="50px"></img></p>Plaza Vieja in 2004, following renovations. Source: Fuentes, 2016',
            location: {
                center: [-82.35013, 23.13657],
                zoom: 19.78,
                pitch: 85.00,
                bearing: -7.64,
                speed: 0.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: [
                {
                    layer: 'oldhavana-buildings-datereno',
                    opacity: 0,
                    duration: 5000,
                },
            ],
        },
        {
            id: '14',
            alignment: 'center',
            hidden: false,
            title: '',
            image: "",
            description: 'While the renovations have helped many residents of Old Havana, they have also relocated thousands from dangerous living conditions into temporary shelters with no immediate prospect of rehousing. Though the initial, limited renovations of Plaza Vieja in the 1980s managed to improve living conditions for fifty existing families and move in three “prestigious cultural institutions”, subsequent renovations have displaced roughly half of the Plaza’s original residents.</p>The tension between aspiration and reality is clearly visible in the renovated spaces themselves. Behind the colorful buildings, the shell of a six-story building hovers over the south-east corner of Plaza Vieja: a stalled joint venture with a Spanish company to renovate the 1906 building into a hotel. The hollow concrete structure, empty of doors and windows but still adorned with ornate filigree, represents the still-superficial nature of la Habana Vieja’s historical makeover.',
            location: {
                center: [-82.34935, 23.13546],
                zoom: 19.78,
                pitch: 85.00,
                bearing: 132.46,
                speed: 0.1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: '15',
            alignment: 'full',
            hidden: false,
            title: '',
            image: 'images/PV1.JPG',
            description: '',
            location: {
                center: [-82.34935, 23.13546],
                zoom: 19.78,
                pitch: 85.00,
                bearing: 132.46,
                speed: 0.5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: '6',
            alignment: 'center',
            hidden: false,
            title: 'Ch3: collapse',
            image: "images/ruin1.JPG",
            description: 'Preservation efforts in Havana fight two intractable enemies: time and money. Time infiltrates Havana with cyclical rains and creeping humidity, with social and demographic shifts, with changing norms and needs, demanding more of its buildings while slowly eating them away. The once-austere constructions of three centuries, neglected for the first three decades after the Cuban revolution, now cannot be repaired quickly enough. Time has also sapped the city of many of its artisans, builders, architects, and other experts needed for the scale of renovations required.',
            location: {
                center: [-82.34843, 23.13278],
                zoom: 19.70,
                pitch: 85.00,
                bearing: -107.93,
                speed: 0.7,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: '7',
            alignment: 'left',
            hidden: false,
            title: '',
            image: "",
            description: 'The problem is visible in the narrow streets of la Habana Vieja, where wooden scaffolding frequently props up leaning, once-ornate facades of eighteenth, nineteenth, or twentieth century buildings. Alongside the many rubble-covered holes where buildings once stood, the scaffolding represents not rejuvenation but a fragile tourniquet – a precarious assembly of sticks propping up heavy stone and concrete buildings, often for years or decades as anxious residents and neighbors await government action to address the needed repairs. </p> <img src="images/scaffolding.JPG" width="30%" height="30%"></img>',
            location: {
                center: [-82.34843, 23.13278],
                zoom: 19.70,
                pitch: 85.00,
                bearing: -107.93
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: '8',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'These black spaces show collapses marked on maps from the city of Havana, and red indicates buildings in dangerous condition in the boundary of the historic city center.',
            location: {
                center: [-82.34386, 23.13725],
                zoom: 14,
                pitch: 0,
                bearing: 0.00,
                speed: 0.6
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'havana-buildings',
                    opacity: 1,
                    duration: 500,
                },
                {
                     layer: 'buildings-collapsed',
                     opacity: 1,
                     duration: 2000
                 },
                 {
                    layer: 'oldhavana-buildings-condition',
                    opacity: 1,
                    duration: 2000
                },
            ],
            onChapterExit: [],
        },
        {
            id: '9',
            alignment: 'center',
            hidden: false,
            title: '',
            image: 'images/Art1.png',
            description: 'Many articles, like this, have reported on fatal building collapses in Havana for which no official data is reported. As the article says, </p><img src="images/Art2.png"></img>',
            location: {
                center: [-82.34386, 23.13725],
                zoom: 14,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: '10',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'According to a 2017 report from the Office of the City Historian of Havana (OHC), despite completing over 300 building renovations since the mid 1990s, the physical deterioration of Old Havana had only worsened: the percentage of buildings in bad or very bad condition had increased from 22.6% in 2002 to 37.2% in 2017. The report says that, “the alarming statistic of the occurrence of collapses of varying magnitude every three days makes this problem the most pressing in the territory [of Old Havana]. The pace of rehabilitation remains slower than the accelerated process of deterioration.” (2017: 34 [translation by author]) </p><img src="images/ruin3.JPG"></img>',
            location: {
                center: [-82.34386, 23.13725],
                zoom: 14,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [
                {
                    layer: 'buildings-collapsed',
                    opacity: 0
                },
                {
                   layer: 'oldhavana-buildings-condition',
                   opacity: 0
               },
               {
                layer: 'havana-buildings',
                opacity: 0
                },
            ],
        },
        {
            id: '16',
            alignment: 'center',
            hidden: false,
            title: 'Ch4: historical gaps',
            image: "",
            description: 'The danger, as many inside and outside Cuba see it, is that Havana will become, like other Latin American historic city centers, a living museum. Recreating only Havana’s colonial heritage exacerbates the perceptual gap between Cubans and tourists: they experience two very different countries. Beyond this, the colonial heritage ignores decades of twentieth century heritage, both before and after the Revolution, which characterizes la Habana Vieja. </p> <img src="images/contrast.jpg"></img> Left: tourist’s view from Old Havana balcony of renovated street; Right: resident’s view of nearby street in Old Havana.',
            location: {
                center: [-82.35000, 23.13582],
                zoom: 15,
                pitch: 0,
                bearing: 72,
                speed: 0.4
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                {
                    layer: 'oldhavana-buildings-condition',
                    opacity: 1,
                    duration: 1000
                },
                {
                    layer: 'oldhavana-buildings-datereno',
                    opacity: 0.5,
                    duration: 1000
                },
            ],
            onChapterExit: [
                {
                    layer: 'oldhavana-buildings-condition',
                    opacity: 0
                },
            ],
        },
        {
            id: '17',
            alignment: 'right',
            hidden: false,
            title: '',
            image: "",
            description: 'Beyond the temporal bias, Havana’s UNESCO characterization also draws a misleading boundary to define the “historic” area of the city. Before the 1800s, a massive wall surrounded the neighborhood now called Habana Vieja, separating it from the poorer but contemporary areas like Centro, and the outlying estate area of Vedado. The heritage site la Habana Vieja contains only the area of the city formerly behind the walls, the adjacent Paseo de Prado boulevard built just beyond the walls, and a few of the Prado-facing buildings of Centro, as well as ten colonial-era fortifications scattered around the city. This boundary ignores the colonial heritage in neighborhoods like Centro and Vedado, which consequently don’t benefit from UNESCO recognition, tourism, and renovation. </p><img src="images/centro1.JPG"></img>For example, while a national heritage designation recognizes this 1927 building’s architectural significance, it does not fall within UNESCO’s colonial designation (physically or temporally). This building sits near the entrance to Havana’s culturally rich Chinatown district in Centro Habana.',
            location: {
                center: [-82.36169, 23.13385],
                zoom: 19,
                pitch: 67.08,
                bearing: 22.49,
                speed: 0.4
            },
            mapAnimation: 'flyTo',
            speed: 2,
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'havana-buildings',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'oldhavana-buildings-datereno',
                    opacity: 1,
                },
                {
                    layer: 'unesco',
                    opacity: .3,
                    duration: 1000,
                },
            ],
            onChapterExit: [
                {
                    layer: 'havana-buildings',
                    opacity: 0
                },
            ],
        },
        {
            id: '18',
            alignment: 'center',
            hidden: false,
            title: 'Conclusions',
            image: "",
            description: 'Cuba has been described as a country frozen in time by its isolation from the west following the Revolution. Of course, this is not true. While the last sixty years have preserved Havana from foreign speculation and development, time has also also reduced many of its buildings to ruins. Now, in a new age of foreign engagement and development, with a growing tourism industry that begins to look more and more like the pre-Revolutionary era’s, Havana may be selling out its identity and transforming its vibrant, dense heritage neighborhoods into “living museums”. </p><img src="images/vieja1.JPG"></img>For now, many thousands of Cubans still live in la Habana Vieja. Though Cuban conservationists advocate for the importance of maintaining this urban life as context and living heritage, referencing principles established in the 1977 Quito Colloquium and 1994 Nara Document, the impact of preservation projects in la Habana Vieja contradicts these ideals. In Havana, a process of displacement through preservation has already begun; as international investment and development take over the city’s real estate, the result may well be the emptying and subsequent economic decline which has afflicted other Latin American colonial centers.',
            location: {
                center: [-82.37178, 23.13749],
                zoom: 13,
                pitch: 0,
                bearing: 0,
                speed: 0.5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: [
                {
                    layer: 'oldhavana-buildings-datereno',
                    opacity: 0,
                },
                {
                    layer: 'unesco',
                    opacity: 0,
                },
            ],
        },
    ]
};

                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
