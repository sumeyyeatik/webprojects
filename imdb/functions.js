function list_series() {
       
    let tv_shows_ul = document.getElementById("tv-showsul")
    tv_shows_ul.innerHTML = " "

    for (let i = 0; i < tv_shows.length; i++) {
        let series = tv_shows[i]
        
        let comment_ul = document.createElement( "ul")
        comment_ul.classList.add("comments")
        let genre_ul = document.createElement( "ul")
        genre_ul.classList.add("genres")

        for (var k = 0; k < series.comments.length; k++) {
          let comment = series.comments[k]
          let comment_li = document.createElement("li")
          comment_li.innerHTML =comment 
          comment_ul.appendChild(comment_li)
        }

        for (let j =0; j < series.genres.length; j++) {
          let genre = series.genres[j]
          let genre_li = document.createElement("li")
          genre_li.innerHTML = genre
          genre_ul.appendChild(genre_li)
        }
    
        let newlili = document.createElement("li")
        newlili.classList.add("tv-serie")
        newlili.innerHTML = "<h5><span>" + series.rating + "</span>" + series.title + "seen by" + series.seen_counter + "</h5><img src='" +series.photo + "'>" 

        document.getElementById("tv-showsul").appendChild(newlili)
        newlili.appendChild(comment_ul)
        newlili.appendChild(genre_ul)
        
        
        let comment_input = document.createElement("input")
        comment_input.classList.add("comment-inp")
        comment_input.placeholder ="type your comment"
        newlili.appendChild(comment_input)
          
        
        comment_input.onkeypress = comment_function
          
        }
    }