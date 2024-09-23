// Wedding data
const weddingData = {
    brideName: "Ananya",
    groomName: "Vikram",
    brideInfo: "Ananya is a software engineer with a passion for classical dance. She loves to experiment with fusion cuisine and dreams of opening her own restaurant someday.",
    groomInfo: "Vikram is an architect who loves to travel and explore new cultures. He's an avid photographer and has a keen interest in sustainable design.",
    weddingDate: "November 15, 2024",
    weddingTime: "11:00 AM",
    venue: "Bandimane Kalyana Mantapa",
    venueAddress: "Bheemasandra, Tumakuru, Karnataka 572107",
    latitude: 17.3326,
    longitude: 78.4673,
    footerText: "We look forward to celebrating our special day with you!",
    greetingMessage: "Join us in celebrating the union of two hearts, two families, and two souls. We are honored to invite you to share in our joy as we begin our journey of love and togetherness.",
    mainImage: "https://images.premagic.com/FT71hWGpHEPEEnZW4Ecp8_UEP-U%3D%2Ffit-in%2F1280x0%2Ffilters%3Aquality%2870%29%3Asharpen%28-0.2%29%3Astrip_icc%28%29%3Astrip_exif%28%29%2FJmXoExMCxD4-0azgKxxsOGs-b%27U1pTXzk2NTcuanBn%27.jpg",
    events: [
        {
            name: "Mehendi Ceremony",
            date: "November 13, 2024",
            time: "4:00 PM",
            description: "Join us for an afternoon of beautiful henna designs and music.",
            image: "/placeholder.svg?height=300&width=300"
        },
        {
            name: "Sangeet Night",
            date: "November 14, 2024",
            time: "7:00 PM",
            description: "An evening filled with music, dance, and celebration of our love story.",
            image: "/placeholder.svg?height=300&width=300"
        },
        {
            name: "Haldi Ceremony",
            date: "November 15, 2024",
            time: "8:00 AM",
            description: "A traditional ceremony to bless the couple before the wedding.",
            image: "/placeholder.svg?height=300&width=300"
        },
        {
            name: "Wedding Ceremony",
            date: "November 15, 2024",
            time: "11:00 AM",
            description: "Join us as we tie the knot in a traditional Indian ceremony.",
            image: "/placeholder.svg?height=300&width=300"
        },
        {
            name: "Reception",
            date: "November 15, 2024",
            time: "7:00 PM",
            description: "Celebrate our new beginning with dinner, drinks, and dancing.",
            image: "/placeholder.svg?height=300&width=300"
        }
    ],
    gallery: [
        "https://asts.premagic.com/JmXoExMCxD4-0azgKxxsOGs-b'U1pTXzk2NzUuanBn'.jpg",
        "https://asts.premagic.com/JmXoExMCxD4-0azgKxxsOGs-b'U1pTXzgzMzQuanBn'.jpg",
        "https://asts.premagic.com/JmXoExMCxD4-0azgKxxsOGs-b'U1pTXzg0MDkuanBn'.jpg",
        "https://asts.premagic.com/JmXoExMCxD4-0azgKxxsOGs-b'U1pTXzg1OTkuanBn'.jpg"
    ]
};

// Update HTML elements with wedding data
document.getElementById("coupleNames").textContent = `${weddingData.brideName} & ${weddingData.groomName}`;
document.getElementById("weddingDate").textContent = `${weddingData.weddingDate} at ${weddingData.weddingTime}`;
document.getElementById("brideName").textContent = weddingData.brideName;
document.getElementById("groomName").textContent = weddingData.groomName;
document.getElementById("brideInfo").textContent = weddingData.brideInfo;
document.getElementById("groomInfo").textContent = weddingData.groomInfo;
document.getElementById("venueName").textContent = weddingData.venue;
document.getElementById("venueAddress").textContent = weddingData.venueAddress;
document.getElementById("footerText").textContent = weddingData.footerText;
document.getElementById("greetingMessage").textContent = weddingData.greetingMessage;

// Set main image
document.querySelector('.hero').style.backgroundImage = `url('${weddingData.mainImage}')`;

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Populate events
const eventsList = document.getElementById("eventsList");
weddingData.events.forEach((event, index) => {
    const eventElement = document.createElement("div");
    eventElement.classList.add("event-item");
    eventElement.innerHTML = `
        <img src="${event.image}" alt="${event.name}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 10px; margin-bottom: 1rem;">
        <h3>${event.name}</h3>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Time:</strong> ${event.time}</p>
        <p>${event.description}</p>
    `;
    eventElement.style.animationDelay = `${index * 0.2}s`;
    eventsList.appendChild(eventElement);
});

// Populate gallery
const imageGrid = document.getElementById("imageGrid");
weddingData.gallery.forEach(imageSrc => {
    const imgElement = document.createElement("img");
    imgElement.src = imageSrc;
    imgElement.alt = "Wedding Gallery Image";
    imageGrid.appendChild(imgElement);
});

// Countdown timer
const weddingDate = new Date(`${weddingData.weddingDate} ${weddingData.weddingTime}`).getTime();

const countdownTimer = setInterval(function () {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `
        <div><span>${days}</span>Days</div>
        <div><span>${hours}</span>Hours</div>
        <div><span>${minutes}</span>Minutes</div>
        <div><span>${seconds}</span>Seconds</div>
    `;

    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById("countdown").innerHTML = "The wedding day has arrived!";
    }
}, 1000);

// Initialize and add the map
function initMap() {
    const weddingLocation = { lat: weddingData.latitude, lng: weddingData.longitude };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: weddingLocation,
    });
    const marker = new google.maps.Marker({
        position: weddingLocation,
        map: map,
    });
}

// Call initMap when the page loads
window.addEventListener('load', initMap);

// Add to Google Calendar
document.getElementById('addToCalendar').addEventListener('click', function () {
    const startDate = encodeURIComponent(weddingData.weddingDate + ' ' + weddingData.weddingTime);
    const endDate = encodeURIComponent(weddingData.weddingDate + ' ' + '23:59');
    const details = encodeURIComponent(`We're getting married! Join us for our wedding celebration.`);
    const location = encodeURIComponent(weddingData.venue + ', ' + weddingData.venueAddress);

    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${weddingData.brideName}+and+${weddingData.groomName}'s+Wedding&dates=${startDate}/${endDate}&details=${details}&location=${location}&sf=true&output=xml`;

    window.open(url, '_blank');
});

// RSVP form submission
const rsvpForm = document.getElementById("rsvpForm");
rsvpForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("guestName").value;
    const email = document.getElementById("guestEmail").value;
    const attendance = document.getElementById("attendance").value;
    const mealPreference = document.getElementById("mealPreference").value;
    const accommodation = document.getElementById("accommodation").value;
    const specialRequests = document.getElementById("specialRequests").value;

    // Here you would typically send this data to a server
    console.log("RSVP Submission:", {
        name,
        email,
        attendance,
        mealPreference,
        accommodation,
        specialRequests
    });

    let confirmationMessage = attendance === 'yes'
        ? "Thank you for your RSVP! We look forward to celebrating with you."
        : "Thank you for letting us know. You'll be missed, but we appreciate your kind wishes.";

    alert(confirmationMessage);
    rsvpForm.reset();
});