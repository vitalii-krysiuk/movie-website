function showTab(event, tabName) {
                    var i, tabcontent, tabs;
                    tabcontent = document.getElementsByClassName("tab-content");
                    for (i = 0; i < tabcontent.length; i++) {
                        tabcontent[i].style.display = "none";
                        tabcontent[i].classList.remove("active");
                    }
                    tabs = document.getElementsByClassName("tabs")[0].getElementsByTagName("a");
                    for (i = 0; i < tabs.length; i++) {
                        tabs[i].style.backgroundColor = "rgb(146, 146, 146)";
                    }
                    document.getElementById(tabName).style.display = "block";
                    document.getElementById(tabName).classList.add("active");
                    event.currentTarget.style.backgroundColor = "rgb(37, 37, 46)";
                }

                function recomendMovie() {
                    const movies = [
                        "Action movie - Deadpool & Wolverine",
                        "Action movie - Fall Guy",
                        "Drama movie - 1+1",
                        "Drama movie - Green Book",
                        "Comedy movie - The Lost City",
                        "Comedy movie - Bad Boys",
                    ];

                    const randomIndex = Math.floor(Math.random() * movies.length);
                    alert("We recomended: " + movies[randomIndex]);
                }