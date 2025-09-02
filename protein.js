// ---------- Flavors Data ----------
const flavors = [
    {
        name: 'Lemon Spark',
        desc: 'Zesty lemon with a spark',
        img: 'https://t3.ftcdn.net/jpg/07/51/13/82/240_F_751138205_zOBLTETXjodTxb7ZNPLeHq92dPbCFv64.jpg',
        details: "Lemon Spark is crafted with natural lemon extracts, lightly carbonated for a refreshing zing."
    },
    {
        name: 'Berry Fizz',
        desc: 'Mixed berries, fizzy and bright',
        img: 'https://t4.ftcdn.net/jpg/13/49/28/55/240_F_1349285599_qYXwTozVDqwp8WZq0HQHwZRW701W6LuA.jpg',
        details: "Berry Fizz combines strawberries, raspberries, and blueberries for a fruity crisp finish."
    },
    {
        name: 'Tropical Rush',
        desc: 'Pineapple & mango notes',
        img: 'https://t3.ftcdn.net/jpg/16/70/20/68/240_F_1670206891_lCg8WYrAlG6gTCLvNPyYmHcCp8TUwkbX.jpg',
        details: "Tropical Rush blends juicy pineapple with ripe mango for a tropical flavor burst."
    },
    {
        name: 'Citrus Wave',
        desc: 'Orange and lime',
        img: 'https://t3.ftcdn.net/jpg/14/41/12/44/240_F_1441124455_9rOcOPFpMO4WAHnL9WsKtKcHAlPKfGq9.jpg',
        details: "Citrus Wave brings orange and lime zest in a tangy, refreshing splash."
    },
    {
        name: 'Ginger Lime',
        desc: 'Subtle ginger heat',
        img: 'https://t4.ftcdn.net/jpg/16/70/18/75/240_F_1670187562_Kkyw413W0KhnKG82H3PVVsWbe5Omyh1p.jpg',
        details: "Ginger Lime mixes fresh lime with a kick of ginger for a spicy twist."
    },
    {
        name: 'Peach Bloom',
        desc: 'Delicate peach aroma',
        img: 'https://t4.ftcdn.net/jpg/13/27/03/85/240_F_1327038532_YOrel9iXuvBdiEx2fhYwcjMja0JuC54F.jpg',
        details: "Peach Bloom offers soft peach sweetness with a floral note."
    },
    {
        name: 'Minty Melon',
        desc: 'Cooling cucumber & melon',
        img: 'https://t4.ftcdn.net/jpg/15/59/43/95/240_F_1559439557_Hsd7U8nFBxAwNCT2oDirn8aLlLDXW7fr.jpg',
        details: "Minty Melon combines cucumber and melon with a cool minty finish."
    },
    {
        name: 'Blackcurrant',
        desc: 'Deep, tart blackcurrant',
        img: 'https://t4.ftcdn.net/jpg/14/95/78/89/240_F_1495788992_mBlRaYxbu1GwTwQjto8VsaLdt9FPMTtm.jpg',
        details: "Blackcurrant is bold, tart, and packed with fruity depth."
    },
    {
        name: 'Apple Splash',
        desc: 'Crisp green apple',
        img: 'https://t3.ftcdn.net/jpg/11/17/63/78/240_F_1117637892_oSvpkBzLzuUyLUx6HJNg4qEoCFia2U8X.jpg',
        details: "Apple Splash delivers a crisp, tangy green apple burst."
    },
    {
        name: 'Cherry Pop',
        desc: 'Sweet cherry punch',
        img: 'https://images.pexels.com/photos/8679162/pexels-photo-8679162.jpeg',
        details: "Cherry Pop gives you that nostalgic sweet cherry soda taste."
    },
];


const btn = document.getElementById("toggleBtn");
const extra = document.getElementById("extraContent");

btn.addEventListener("click", () => {
    if (extra.style.display === "block") {
        extra.style.display = "none";
        btn.textContent = "Read more";
    } else {
        extra.style.display = "block";
        btn.textContent = "Read less";
    }
});


const grid = document.getElementById('flavors-grid');
const showMoreBtn = document.createElement("button");
showMoreBtn.className = "btn show-more";
showMoreBtn.textContent = "Show More";
grid.insertAdjacentElement("afterend", showMoreBtn);

let visibleCount = 8; // Initially show 8 flavors

// Function to render flavors
function renderFlavors() {
    grid.innerHTML = ""; // Clear existing
    flavors.slice(0, visibleCount).forEach(f => {
        const el = document.createElement('article');
        el.className = 'flavor';
        el.style.backgroundImage = `url(${f.img})`;
        el.style.backgroundSize = "cover";
        el.style.backgroundPosition = "center";
        el.style.borderRadius = "12px";
        el.style.padding = "20px";
        el.style.color = "white";
        el.style.position = "relative";

        el.innerHTML = `
            <div class="overlay"></div>
            <strong>${f.name}</strong>
            <div class="muted">${f.desc}</div>
            <button class="btn read-more">Read More</button>
        `;
        el.querySelector(".read-more").addEventListener("click", () => openDetails(f));
        grid.appendChild(el);
    });

    // Toggle button text
    if (visibleCount >= flavors.length) {
        showMoreBtn.textContent = "Show Less";
    } else {
        showMoreBtn.textContent = "Show More";
    }
}

// Handle Show More / Show Less
showMoreBtn.addEventListener("click", () => {
    if (visibleCount >= flavors.length) {
        visibleCount = 8; // Reset back to 8
    } else {
        visibleCount += 8; // Show 8 more
    }
    renderFlavors();
});

// Initial render
renderFlavors();

// Newsletter form
document.getElementById('newsletter').addEventListener('submit', function (e) {
    e.preventDefault();
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();

    if (!/.+@.+\..+/.test(email)) {
        alert('❌ Please enter a valid email address');
        return;
    }

    // Disable input while sending
    emailInput.disabled = true;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "adnanalam461@gmail.com",
        Password: "6EF7A10157F1566628ED6E9A0B768BBC7DEC",
        To: email,
        From: "adnanalam461@gmail.com",
        Subject: "Welcome to PureFuel Protein 🍹",
        Body: `
            <h2>Thanks for subscribing!</h2>
            <p>We’ll keep you updated with our latest flavors and offers 🎉</p>
        `
    }).then(message => {
        if (message === "OK") {
            alert("✅ Mail sent successfully to " + email);
            emailInput.value = ""; // Clear input field
        } else {
            alert("⚠️ Failed to send: " + message);
            emailInput.value = "";
        }
        emailInput.disabled = false; // Re-enable input
    });
});


// Smooth anchor scrolling
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ---------- Detail Modal ----------
const detailModal = document.createElement("div");
detailModal.className = "detail-modal";
detailModal.innerHTML = `
    <div class="modal-content">
        <h3 id="detail-title"></h3>
        <p id="detail-desc"></p>
        <button class="btn" id="close-detail">Close</button>
    </div>
`;
document.body.appendChild(detailModal);

// Modal styles
const style = document.createElement("style");
style.innerHTML = `
.detail-modal {
    display: none;
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.6);
    justify-content: center;
    align-items: center;
    z-index: 1000;
}
.modal-content {
    max-width: 500px;
    padding: 1.5rem;
    background: #fff;
    border-radius: 12px;
}
body.dark {
  background-color: #121212;
  color: #e0e0e0;
}
body.dark .card {
  background: #1e1e1e;
  color: #fff;
}
body.dark .modal-content {
  background: #1e1e1e;
  color: #fff;
}

.show-more{
    width: 19%;
    padding: 1.2em 0px;
    margin-top: 19px;
    text-align: center;
    }
.show-more:hover {
  background: #333;
  cursor: pointer;
  color:var(--primary);
}    
`;
document.head.appendChild(style);

// Function to open details
function openDetails(flavor) {
    document.getElementById("detail-title").innerText = flavor.name;
    document.getElementById("detail-desc").innerText = flavor.details || flavor.desc;
    detailModal.style.display = "flex";
}

// Close button
document.getElementById("close-detail").addEventListener("click", () => {
    detailModal.style.display = "none";
});

// Close when clicking outside modal
detailModal.addEventListener("click", e => {
    if (e.target === detailModal) {
        detailModal.style.display = "none";
    }
});

// -------- Dark/Light Mode Toggle --------
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
    document.querySelector(".nav").classList.toggle("dark")
});



const container = document.getElementById("testimonial-track");

let scrollAmount = 0;
let scrollStep = 310; // card width (300px) + gap (10px)
let delay = 3000; // 3 seconds delay

function autoScroll() {
    if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0; // reset to start
    } else {
        scrollAmount += scrollStep;
    }
    container.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
    });
}

setInterval(autoScroll, delay);