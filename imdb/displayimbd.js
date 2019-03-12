 function display_show_form() {

        document.getElementById("add-tv-show").classList.remove("hide")
        document.getElementById("tv-showsul").classList.add("hide")

    }

    function display_tv_series () {

        document.getElementById("add-tv-show").classList.add("hide")
        document.getElementById("tv-showsul").classList.remove("hide")
        list_series()
    }

    function add_new_serie() {
        let show = {
            "title": document.getElementById("title-inp").value,
            "rating": document.getElementById("rating-inp").value,
            "photo":document.getElementById("photo-inp").value,
            "seen_counter": 0,
            "comments": []
        }

        tv_shows.push(show)
    }