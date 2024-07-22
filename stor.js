
/* <article class="store-art">
            <div id="store">
                <img class="imgstore" src= />
                <img class="imgstore" src= />
                <img class="imgstore" src= />
                <img class="imgstore" src= />
                <img class="imgstore" src= />
                <img class="imgstore" src= />
                <img class="imgstore" src=" />
                <img class="imgstore" src=/>
                <img class="imgstore" src= />
                <img class="imgstore" src= />
                <img class="imgstore" src=/>
                <img class="imgstore" src= />
                <img class="imgstore" src= />
                <img class="imgstore" src= />
                <img class="imgstore" src= />
                <img class="imgstore" src= />
            </div>
        </article> */
const Stors =
    [
        {
            name: "סברובסקי",
            englishName: "swarovski",
            category: "תכשיטים",
            img: "images store/1 (37).jpg",
            step: 1,
            timeOpen: 700,
            timeClose: 1800,

        },
        {
            name: "אורבן",
            englishName: "urban",
            category: "אקססוריז",
            img: "images store/1 (16).jpg",
            step: 3,
            timeOpen: 900,
            timeClose: 2000,

        }, {
            name: "פנדור",
            englishName: "pandor",
            category: "רהיטים",
            img: "images store/1 (86).jpg",
            step: 1,
            timeOpen: 800,
            timeClose: 2000,

        }, {
            name: "ביתילי",
            category: "אחר",
            img: "images store/1 (51).jpg",
            step: 0,
            timeOpen: 730,
            timeClose: 2000,

        }, {
            name: "מודי",
            englishName: "modi",
            category: "אקססוריז",
            img: "images store/1 (84).jpg",
            step: 3,
            timeOpen: 900,
            timeClose: 2000,

        }, {
            name: "אומן האמבט והפרקט",
            category: "חדרי שירות",
            img: "images store/1 (85).jpg",
            step: 3,
            timeOpen: 730,
            timeClose: 2000,

        }, {
            name: "אגם",
            englishName: "agam",
            category: "ארונות",
            img: "images store/1 (15).jpg",
            step: 2,
            timeOpen: 900,
            timeClose: 2000,

        }, {
            name: "פיטרו הכט",
            englishName: "PitroHacht",
            category: "מוצרי חשמל",
            img: "images store/1 (87).jpg",
            step: 2,
            timeOpen: 830,
            timeClose: 2000,

        }, {
            englishName: "kloss",
            category: "ארונות",
            img: "images store/1 (75).jpg",
            step: 3,
            timeOpen: 800,
            timeClose: 2000,

        }, {
            name: "גפן",
            englishName: "gefen",
            category: "מטבחים",
            img: "images store/1 (62).jpg",
            step: 2,
            timeOpen: 730,
            timeClose: 2000,

        }, {
            englishName: "onedoor",
            category: "רהיטים",
            img: "images store/1 (9).jpg",
            step: 2,
            timeOpen: 930,
            timeClose: 1900,

        }, {
            name: "אסקו",
            englishName: "asko",
            category: "מוצרי חשמל",
            img: "images store/1 (18).jpg",
            step: 1,
            timeOpen: 730,
            timeClose: 2000,

        }, {
            name: "לייזרוביץ",
            englishName: "leizeroviz",
            category: "רהיטים",
            img: "images store/1 (30).jpg",
            step: 1,
            timeOpen: 830,
            timeClose: 2000,

        }, {
            englishName: "s-pools",
            category: "חדרי שירות",
            img: "images store/1 (23).jpg",
            step: 1,
            timeOpen: 730,
            timeClose: 2000,
        }, {
            name: "שוקולאב",
            englishName: "chocolove",
            category: "אחר",
            img: "images store/1 (54).jpg",
            step: 0,
            timeOpen: 800,
            timeClose: 1800,

        }, {
            name: "משתלת עתיד",
            category: "אחר",
            img: "images store/1 (10).jpg",
            step: 0,
            timeOpen: 900,
            timeClose: 1500,

        }
    ];
const divAll = document.createElement("article");
divAll.classList.add("store-art");
const div = document.createElement("div");
div.classList.add("store");
divAll.append(div);
//פונקציה שמדפיסה את החנויות
function print_stor() {
    div.innerHTML = "";
    for (stor of MyStors) {
        print(stor);
    }
};
const print = stor => {
    div.innerHTML += `<img src="${stor.img}" class="imgstore"/></div>`
}


/*
<form id="list">
                <div class="search">
                    <input id="search" type="text" placeholder="מצא את החנות האהובה עליך...." required>
                    <img id="glass" src="image/glass.png">
                </div>
                <p>קטגוריות</p>
                <input type="checkbox" name="search" id="ex">
                <label for="ex">אקססוריז</label><br>
                <input type="checkbox" name="search" id="el">
                <label for="el">מוצרי חשמל</label><br>
                <input type="checkbox" name="search" id="bo">
                <label for="bo">ארונות</label><br>
                <input type="checkbox" name="search" id="ki">
                <label for="ki">מטבחים</label><br>
                <input type="checkbox" name="search" id="egg">
                <label for="egg">חדרי שירות</label><br>
                <input type="checkbox" name="search" id="egg">
                <label for="egg">מוצרי תינוקות</label><br>
                <input type="checkbox" name="search" id="egg">
                <label for="egg">כסאות</label><br>
                <input type="checkbox" name="search" id="egg">
                <label for="egg">רהיטים</label><br>
                <input type="checkbox" name="search" id="egg">
                <label for="egg">אחר</label><br>
                </from>
*/
const aside = document.querySelector("aside");
const form = document.createElement("form");
form.classList.add("list");
aside.append(form);
form.innerHTML = `<div class="search">
<input id="search" type="text" placeholder="מצא את החנות האהובה עליך...." required>
<img id="glass" src="image/glass.png">
</div>`;
const Categories = ["אקססוריז", "מוצרי חשמל", "ארונות", "מטבחים", "חדרי שירות", "מוצרי תינוקות", "כסאות", "רהיטים", "אחר"];
//פונקציה שמדפיסה ת הקטגוריות
function print_categories(category) {
    for (category of Categories) {
        form.innerHTML += `<input type="checkbox" name="search"  class="sear" >
    ${category}<br>`
    }
};
//הפונקציות מופעלות בטעינת הדף
window.onload = function () {
    document.querySelector("#mainstore").append(divAll);
    MyStors = [...Stors];
    print_stor();
    print_categories();
    filter();
    click();
}
//חלונית הצטרפות 
const imgs=["images store/1 (21).jpg","images store/1 (22).jpg","images store/1 (1).png"
,"images store/1 (20).jpg",
"images store/1 (14).png"
,"images store/1 (2).png"
,"images store/1 (11).png"
,"images store/1 (31).jpg"
,"images store/1 (89).jpg"
,"images store/1 (26).jpg"
,"images store/1 (27).jpg","images store/1 (11).jpg"];
//הדפסת התמונות לתוך חלונית קופצת
function print_img(){
    for(i of imgs){
        document.querySelector("#img").innerHTML+=`<img class="imgh" src="${i}">`;
    }
}
let body=document.querySelector("#hellow1");
let mytimmer;
 mytimmer= setTimeout(function (){
    body.innerHTML=`<div id="hellow">
    <div><div id="img">
    </div>
    <h1>חיכינו לך!</h1><p>מוזמן להצטרף למועדון הלקוחות שלנו
    ולקבל מתנות שוות במגוון חנויות!</p></div></div>`;
    print_img();
    
},5000);  
//בלחיצה על הדף החלון יעלם
function click(){
    document.querySelector("#mainstore").addEventListener('click',stop);
}
//עצירת הטיימר
function stop(){
    clearInterval(mytimmer);
    document.querySelector("#hellow").style.display="none";
}


//סינון
function filter() {
    document.querySelector(".list").onchange = () => {
        let filter = document.querySelectorAll('.sear');
        const input = document.querySelector("#search").value;
        filter.forEach(function (cat, val) {
            //אם החיפוש חופשי
            if (input != "") {
                MyStors = Stors.filter(function (stor) {
                    return (stor.name == input || stor.englishName == input)
                });
                print_stor();
            }
            //אם החיפוש ריק או ביטלו את הסימון בצקבוקס
            if (input == "") {
                flag=false;
                for(c of filter)
                if(c.checked==true)
                {
                    flag=true;
                }
                if(flag!=true)
                {
                    MyStors = [...Stors];
                    print_stor();
                }
            }
            //אם החיפוש גם לפי קטגוריה וגם חופשי
            if (cat.checked == true && input != "") {
                for (stor of Stors) {
                    MyStors = Stors.filter(function (s) {
                        return (s.category == Categories[val] && s.name == input);
                    });
                }
                print_stor();
            }
            //אם החיפוש רק לפי קטגוריה
            if (cat.checked == true && input == "") {
                for (stor of Stors) {
                    MyStors = Stors.filter(function (s) {
                        return (s.category == Categories[val]);
                    });
                }
                print_stor();
            }
        });

    };
};





