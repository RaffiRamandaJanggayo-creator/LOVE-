// =============================
// FOR MY MOON ❤️
// =============================

const startDate = new Date("2026-04-04T00:00:00");

let music = new Audio("ssstik.io_1782987039673.mp3");
music.loop = true;
music.volume = 0.7;

// Membuat bintang
const starContainer = document.getElementById("stars");

for(let i=0;i<120;i++){

    const star = document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"%";

    star.style.top=Math.random()*100+"%";

    star.style.animationDelay=(Math.random()*3)+"s";

    starContainer.appendChild(star);

}

// Membuat hati beterbangan
function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML=["💖","💕","💗","🤍","🌸"][Math.floor(Math.random()*5)];

    heart.style.left=Math.random()*100+"%";

    heart.style.fontSize=(20+Math.random()*20)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(createHeart,500);

// Tombol mulai
function startLove(){

    music.play().catch(()=>{});

    document.querySelector("button").style.display="none";

    window.scrollTo({

        top:window.innerHeight,

        behavior:"smooth"

    });

}
// =============================
// TIMER HUBUNGAN
// =============================

function updateTimer(){

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000*60*60*24));

    const hours = Math.floor((diff/(1000*60*60))%24);

    const minutes = Math.floor((diff/(1000*60))%60);

    const seconds = Math.floor((diff/1000)%60);

    const timer = document.getElementById("timerValue");

    if(timer){

        timer.innerHTML =
        `${days} Hari<br>
        ${hours} Jam ${minutes} Menit ${seconds} Detik`;

    }

}

setInterval(updateTimer,1000);

updateTimer();


// =============================
// EFEK MENGETIK SURAT
// =============================

const letterText = `
Haii Moon...

Kalau kamu lagi baca ini, berarti hadiah kecil dari aku udah berhasil sampai ke kamu.

Aku cuma pengen bilang makasih.

Makasih karena udah hadir di hidup aku.

Makasih karena selalu bikin aku ngerasa punya seseorang yang bisa aku sayang.

Semoga kita bisa terus jalan bareng, pelan-pelan, tanpa harus saling ninggalin.

Aku mungkin belum sempurna.

Tapi aku akan selalu berusaha jadi yang terbaik buat kamu.

I love you, Moon.

- AFFI ❤️
`;

function typeLetter(){

    const target = document.getElementById("typingLetter");

    if(!target) return;

    let i = 0;

    target.innerHTML = "";

    const typing = setInterval(()=>{

        target.innerHTML += letterText.charAt(i);

        i++;

        if(i >= letterText.length){

            clearInterval(typing);

        }

    },35);

}

window.addEventListener("load",()=>{

    setTimeout(typeLetter,1200);

});


// =============================
// ANIMASI SCROLL
// =============================

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

});

document.querySelectorAll("section,#letter,.gallery,#timer").forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(40px)";
    el.style.transition=".8s";

    observer.observe(el);

});
