
    let got = {
        "title": "Game Of Thrones",
        "rating": 4,
        "seen_counter": 5,
        "photo": "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fblogbuzzter.de%2Fmedia%2F2017%2F08%2Fgame-of-thrones.jpg&f=1",
        "comments": ["This thrones wars are awesome!", "let's get together to pray for civilization"],
        "genres":["fantasy","fiction"]
    };
    let saul = {
        "title": "Better call saul",
        "rating": 3.6,
        "seen_counter": 12,
        "photo": "http://i.hurimg.com/i/hurriyet/75/750x422/56f3ed34c03c0e62108a2823.jpg",
        "comments": ["Saul is a hopeless man.", "I think he is an average lawer"],
        "genres" : ["crime", "comedy"]
    };
    let bad = {
        "title": "Breaking Bad",
        "rating": 4.2,
        "seen_counter": 4,
        "photo": "https://im.haberturk.com/2018/11/07/2210719_554fbb8cad995aeb51b665a44dd13bad_640x640.jpg",
        "comments": ["Walter is a crazy, and bad", "He should have stayed in teaching business"],
        "genres" : ["crime", "narcotics"]
    };
    let futuruma = {
        "title": "Futuruma",
        "rating": 3.9,
        "seen_counter": 421,
        "photo": "http://www.thenatterbox.com/wp-content/uploads/2016/11/futurama-couverture-1080x658.png",
        "comments": ["Futuruma is my favorite.", "Bender is a funny dude."],
        "genres" : ["animation", "fiction"]
    };
    let rick = {
        "title": "Rick and Morty",
        "rating": 3.8,
        "seen_counter": 98,
        "photo": "https://foto.haberler.com/haber/2019/01/16/rick-morty-hayranlarina-mujde-4-sezonun-cekim-11647809_o.jpg",
        "comments": ["Mort is a loser.", "Rick is a, hmm, rick!"],
        "genres" : ["animation", "comedy"]
    };
    let sumeyye = {
        "username": "sumbok",
        "favorite_shows": [bad, rick]
    };
    let muatik = {
        "username": "muatik",
        "favorite_shows": [got, futuruma, bad]
    };

    let tv_shows = [got, saul, bad, futuruma, rick];
    
    
    document.getElementById("show-add-tv-show-form").onclick = display_show_form
    document.getElementById("show-tv-shows").onclick = display_tv_series
    document.getElementById("add-tv-show").onclick = add_new_serie
    list_series()

   