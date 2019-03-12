 function comment_function(event) {
        if (event.keyCode == 13) {
            let user_input = this.value;
            this.value =""
            let comment_ul = this.parentNode.getElementsByClassName("comments")[0];
            console.log(comment_ul)
            let new_li = document.createElement("li");
            new_li.innerHTML = user_input
            comment_ul.appendChild(new_li)
        }
    }