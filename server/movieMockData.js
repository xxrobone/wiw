const movieMockData = [
    {
        "adult": false,
        "backdrop_path": "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
        "genre_ids": [
            18,
            80
        ],
        "id": 238,
        "original_language": "en",
        "original_title": "The Godfather",
        "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
        "popularity": 113.74,
        "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        "release_date": "1972-03-14",
        "title": "The Godfather",
        "video": false,
        "vote_average": 8.7,
        "vote_count": 17970
    },
    {
        "adult": false,
        "backdrop_path": "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
        "genre_ids": [
            18,
            80
        ],
        "id": 278,
        "original_language": "en",
        "original_title": "The Shawshank Redemption",
        "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
        "popularity": 79.702,
        "poster_path": "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        "release_date": "1994-09-23",
        "title": "The Shawshank Redemption",
        "video": false,
        "vote_average": 8.7,
        "vote_count": 23812
    },
    {
        "adult": false,
        "backdrop_path": "/oo4PVK6AyLZN49BokxDFGyclN86.jpg",
        "genre_ids": [
            18,
            80
        ],
        "id": 240,
        "original_language": "en",
        "original_title": "The Godfather Part II",
        "overview": "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
        "popularity": 49.622,
        "poster_path": "/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
        "release_date": "1974-12-20",
        "title": "The Godfather Part II",
        "video": false,
        "vote_average": 8.6,
        "vote_count": 10846
    },
    {
        "adult": false,
        "backdrop_path": "/zb6fM1CX41D9rF9hdgclu0peUmy.jpg",
        "genre_ids": [
            18,
            36,
            10752
        ],
        "id": 424,
        "original_language": "en",
        "original_title": "Schindler's List",
        "overview": "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
        "popularity": 46.33,
        "poster_path": "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
        "release_date": "1993-12-15",
        "title": "Schindler's List",
        "video": false,
        "vote_average": 8.6,
        "vote_count": 14082
    },
    {
        "adult": false,
        "backdrop_path": "/ApiBzeaa95TNYliSbQ8pJv4Fje7.jpg",
        "genre_ids": [
            35,
            53,
            18
        ],
        "id": 496243,
        "original_language": "ko",
        "original_title": "기생충",
        "overview": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
        "popularity": 61.296,
        "poster_path": "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        "release_date": "2019-05-30",
        "title": "Parasite",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 15754
    },
    {
        "adult": false,
        "backdrop_path": "/l6hQWH9eDksNJNiXWYRkWqikOdu.jpg",
        "genre_ids": [
            14,
            18,
            80
        ],
        "id": 497,
        "original_language": "en",
        "original_title": "The Green Mile",
        "overview": "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
        "popularity": 79.422,
        "poster_path": "/o0lO84GI7qrG6XFvtsPOSV7CTNa.jpg",
        "release_date": "1999-12-10",
        "title": "The Green Mile",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 15419
    },
    {
        "adult": false,
        "backdrop_path": "/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
        "genre_ids": [
            53,
            80
        ],
        "id": 680,
        "original_language": "en",
        "original_title": "Pulp Fiction",
        "overview": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
        "popularity": 56.079,
        "poster_path": "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        "release_date": "1994-09-10",
        "title": "Pulp Fiction",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 25193
    },
    {
        "adult": false,
        "backdrop_path": "/eoCSp75lxatmIa6aGqfnzwtbttd.jpg",
        "genre_ids": [
            37
        ],
        "id": 429,
        "original_language": "it",
        "original_title": "Il buono, il brutto, il cattivo",
        "overview": "While the Civil War rages on between the Union and the Confederacy, three men – a quiet loner, a ruthless hitman, and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
        "popularity": 48.322,
        "poster_path": "/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
        "release_date": "1966-12-23",
        "title": "The Good, the Bad and the Ugly",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 7406
    },
    {
        "adult": false,
        "backdrop_path": "/sw7mordbZxgITU877yTpZCud90M.jpg",
        "genre_ids": [
            18,
            80
        ],
        "id": 769,
        "original_language": "en",
        "original_title": "GoodFellas",
        "overview": "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.",
        "popularity": 41.471,
        "poster_path": "/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
        "release_date": "1990-09-12",
        "title": "GoodFellas",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 11265
    },
    {
        "adult": false,
        "backdrop_path": "/uif5fUshJrXyyDzfpzp1DLw3N0S.jpg",
        "genre_ids": [
            27,
            18,
            53
        ],
        "id": 539,
        "original_language": "en",
        "original_title": "Psycho",
        "overview": "When larcenous real estate clerk Marion Crane goes on the lam with a wad of cash and hopes of starting a new life, she ends up at the notorious Bates Motel, where manager Norman Bates cares for his housebound mother.",
        "popularity": 41.301,
        "poster_path": "/yz4QVqPx3h1hD1DfqqQkCq3rmxW.jpg",
        "release_date": "1960-06-22",
        "title": "Psycho",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 8969
    },
    {
        "adult": false,
        "backdrop_path": "/wxoxxA9oINGVI4vJWYnDId6oRMv.jpg",
        "genre_ids": [
            18,
            80
        ],
        "id": 311,
        "original_language": "en",
        "original_title": "Once Upon a Time in America",
        "overview": "A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.",
        "popularity": 33.511,
        "poster_path": "/i0enkzsL5dPeneWnjl1fCWm6L7k.jpg",
        "release_date": "1984-05-23",
        "title": "Once Upon a Time in America",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 4670
    },
    {
        "adult": false,
        "backdrop_path": "/jtAI6OJIWLWiRItNSZoWjrsUtmi.jpg",
        "genre_ids": [
            10749
        ],
        "id": 724089,
        "original_language": "en",
        "original_title": "Gabriel's Inferno: Part II",
        "overview": "Professor Gabriel Emerson finally learns the truth about Julia Mitchell's identity, but his realization comes a moment too late. Julia is done waiting for the well-respected Dante specialist to remember her and wants nothing more to do with him. Can Gabriel win back her heart before she finds love in another's arms?",
        "popularity": 30.595,
        "poster_path": "/x5o8cLZfEXMoZczTYWLrUo1P7UJ.jpg",
        "release_date": "2020-07-31",
        "title": "Gabriel's Inferno: Part II",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 1472
    },
    {
        "adult": false,
        "backdrop_path": "/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
        "genre_ids": [
            18,
            53,
            35
        ],
        "id": 550,
        "original_language": "en",
        "original_title": "Fight Club",
        "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
        "popularity": 63.325,
        "poster_path": "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
        "release_date": "1999-10-15",
        "title": "Fight Club",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 26450
    },
    {
        "adult": false,
        "backdrop_path": "/qUq3QTr2KLvGIcN0GaaaYx9bbyH.jpg",
        "genre_ids": [
            18
        ],
        "id": 510,
        "original_language": "en",
        "original_title": "One Flew Over the Cuckoo's Nest",
        "overview": "A petty criminal fakes insanity to serve his sentence in a mental ward rather than prison. He soon finds himself as a leader to the other patients—and an enemy to the cruel, domineering nurse who runs the ward.",
        "popularity": 35.028,
        "poster_path": "/3jcbDmRFiQ83drXNOvRDeKHxS0C.jpg",
        "release_date": "1975-11-19",
        "title": "One Flew Over the Cuckoo's Nest",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 9375
    },
    {
        "adult": false,
        "backdrop_path": "/5p3aTxtUtZHCHwYsuycutmxIhND.jpg",
        "genre_ids": [
            18,
            80
        ],
        "id": 598,
        "original_language": "pt",
        "original_title": "Cidade de Deus",
        "overview": "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
        "popularity": 27.144,
        "poster_path": "/k7eYdWvhYQyRQoU2TB2A2Xu2TfD.jpg",
        "release_date": "2002-08-30",
        "title": "City of God",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 6468
    },
    {
        "adult": false,
        "backdrop_path": "/dVr11o9or7AS8AMPfwjSpEU83iU.jpg",
        "genre_ids": [
            18,
            10752
        ],
        "id": 423,
        "original_language": "en",
        "original_title": "The Pianist",
        "overview": "The true story of pianist Władysław Szpilman's experiences in Warsaw during the Nazi occupation. When the Jews of the city find themselves forced into a ghetto, Szpilman finds work playing in a café; and when his family is deported in 1942, he stays behind, works for a while as a laborer, and eventually goes into hiding in the ruins of the war-torn city.",
        "popularity": 42.761,
        "poster_path": "/2hFvxCCWrTmCYwfy7yum0GKRi3Y.jpg",
        "release_date": "2002-09-17",
        "title": "The Pianist",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 8074
    },
    {
        "adult": false,
        "backdrop_path": "/5h8VtV4oh2qkO8Iqz7gypIYJPAr.jpg",
        "genre_ids": [
            18,
            10402
        ],
        "id": 244786,
        "original_language": "en",
        "original_title": "Whiplash",
        "overview": "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.",
        "popularity": 62.412,
        "poster_path": "/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
        "release_date": "2014-10-10",
        "title": "Whiplash",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 13467
    },
    {
        "adult": false,
        "backdrop_path": "/hh28CTWLdxTXA5yJgefZ6gUnFDo.jpg",
        "genre_ids": [
            80,
            9648,
            53
        ],
        "id": 807,
        "original_language": "en",
        "original_title": "Se7en",
        "overview": "Two homicide detectives are on a desperate hunt for a serial killer whose crimes are based on the \"seven deadly sins\" in this dark and haunting film that takes viewers from the tortured remains of one victim to the next. The seasoned Det. Sommerset researches each sin in an effort to get inside the killer's mind, while his novice partner, Mills, scoffs at his efforts to unravel the case.",
        "popularity": 44.872,
        "poster_path": "/6yoghtyTpznpBik8EngEmJskVUO.jpg",
        "release_date": "1995-09-22",
        "title": "Se7en",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 18784
    },
    {
        "adult": false,
        "backdrop_path": "/AfyuI3glMCBDFmNPj9PY6DwbgGp.jpg",
        "genre_ids": [
            16,
            878,
            28
        ],
        "id": 18491,
        "original_language": "ja",
        "original_title": "新世紀エヴァンゲリオン劇場版 Air／まごころを、君に",
        "overview": "The second of two theatrically released follow-ups to the Neon Genesis Evangelion series. Comprising of two alternate episodes which were first intended to take the place of episodes 25 and 26, this finale answers many of the questions surrounding the series, while also opening up some new possibilities.",
        "popularity": 28.378,
        "poster_path": "/j6G24dqI4WgUtChhWjfnI4lnmiK.jpg",
        "release_date": "1997-07-19",
        "title": "Neon Genesis Evangelion: The End of Evangelion",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 1284
    },
    {
        "adult": false,
        "backdrop_path": "/9LSsSPbP715XT9B7acIZzantPyX.jpg",
        "genre_ids": [
            18
        ],
        "id": 73,
        "original_language": "en",
        "original_title": "American History X",
        "overview": "Derek Vineyard is paroled after serving 3 years in prison for killing two African-American men. Through his brother, Danny Vineyard's narration, we learn that before going to prison, Derek was a skinhead and the leader of a violent white supremacist gang that committed acts of racial crime throughout L.A. and his actions greatly influenced Danny. Reformed and fresh out of prison, Derek severs contact with the gang and becomes determined to keep Danny from going down the same violent path as he did.",
        "popularity": 29.023,
        "poster_path": "/c2gsmSQ2Cqv8zosqKOCwRS0GFBS.jpg",
        "release_date": "1998-07-01",
        "title": "American History X",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 10396
    }
]

    module.exports= movieMockData