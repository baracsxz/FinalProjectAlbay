const destinations = [
    {
        name: "Sogod Beach",
        location: "Bacacay",
        category: "Beach",
        image: "images/sogod1.webp",
        description: "A famous coastline featuring volcanic black sand and calm waves, perfect for swimming and picnics.",
        fee: "Free Entrance",
        hours: "Open 24 Hours",
        activities: "Swimming, beach volleyball, picnicking, boat rental trips.",
        bestTime: "March to May (Summer Season)",
        tips: "Bring water shoes as the black sand can get quite hot under direct midday sunlight."
    },
    {
        name: "Muladbucad Beach",
        location: "Guinobatan",
        category: "Beach",
        image: "images/muladbucad4.jpg",
        description: "A serene coastal escape known for its crystal-clear waters and peaceful, relaxing atmosphere.",
        fee: "₱20.00",
        hours: "6:00 AM - 6:00 PM",
        activities: "Coastal hiking, seaside relaxation, swimming.",
        bestTime: "Early morning or late afternoon",
        tips: "Perfect spot for peaceful meditation and quiet family outings."
    },
    {
        name: "Quitinday Green Hills",
        location: "Camalig",
        category: "Mountain",
        image: "images/quitinday1.jpg",
        description: "Often called Albay's 'Chocolate Hills,' these mounds offer a 360-degree view of the Bicol landscape.",
        fee: "₱20.00",
        hours: "5:00 AM - 6:30 PM",
        activities: "Trekking, ridge photography, viewpoint sightseeing.",
        bestTime: "5:30 AM (for the breathtaking sunrise view)",
        tips: "Wear sturdy rubber shoes because the grass paths get slippery after morning rain."
    },
    {
        name: "Lignon Hill Nature Park",
        location: "Legazpi City",
        category: "Mountain",
        image: "images/lignon2.jpg",
        description: "A steep hill providing the most popular vantage point for viewing the Mayon Volcano and the city.",
        fee: "₱25.00",
        hours: "5:00 AM - 10:00 PM",
        activities: "Zip-lining, viewing deck sightseeing, morning jogging.",
        bestTime: "4:00 PM - 6:00 PM (for city lights view)",
        tips: "Bring a light jacket if you stay up there after sunset because it gets windy."
    },
    {
        name: "Vera Falls",
        location: "Malinao",
        category: "Waterfall",
        image: "images/vera1.jpg",
        description: "A stunning cascade hidden at the foot of Mt. Malinao, featuring a cold, turquoise natural swimming pool.",
        fee: "₱50.00",
        hours: "7:00 AM - 5:00 PM",
        activities: "Freshwater swimming, nature photography, cold pool dipping.",
        bestTime: "10:00 AM - 2:00 PM (when sun hits the water)",
        tips: "Hold onto the concrete railings along the stairs down since the steps stay damp."
    },
    {
        name: "Busay Falls",
        location: "Malilipot",
        category: "Waterfall",
        image: "images/busay1.jpg",
        description: "One of the highest waterfalls in the Philippines, cascading down seven distinct natural tiers.",
        fee: "₱15.00",
        hours: "8:00 AM - 5:00 PM",
        activities: "Tier trekking, swimming, cottage picnicking.",
        bestTime: "June to December (rainy season brings stronger flow)",
        tips: "Ask locals for assistance if you plan to climb up to the higher tiers."
    },
    {
        name: "Cagsawa Ruins",
        location: "Daraga",
        category: "Historical Site",
        image: "images/cagsawa1.jpg",
        description: "The iconic belfry remains of a Franciscan church destroyed during the 1814 eruption of Mayon.",
        fee: "₱20.00",
        hours: "6:00 AM - 6:00 PM",
        activities: "Historical sightseeing, perspective photography, local souvenir shopping.",
        bestTime: "6:00 AM - 9:00 AM (clearest volcano viewing window)",
        tips: "Let local guides assist with taking funny perspective 'holding the belfry' photos."
    },
    {
        name: "Daraga Church",
        location: "Daraga",
        category: "Historical Site",
        image: "images/daraga1.jpg",
        description: "An 18th-century Baroque church built with volcanic rocks, sitting on a hill overlooking the volcano.",
        fee: "Free / Donation",
        hours: "6:00 AM - 8:00 PM",
        activities: "Heritage appreciation, religious visits, architectural viewing.",
        bestTime: "Late afternoon during sunset light",
        tips: "Maintain silence inside the premises since it remains an active house of worship."
    },
    {
        name: "Pinamuntugan Island",
        location: "Bacacay",
        category: "Island",
        image: "images/pinamuntugan1.jpg",
        description: "A secluded paradise known for its pristine white sand and impressive limestone rock formations.",
        fee: "₱500.00 (Boat Rental)",
        hours: "Day Trip Only",
        activities: "Island hopping, beach camping, snorkeling.",
        bestTime: "Summer months (April to May)",
        tips: "Bring your own food and trash bags as there are no large commercial stalls here."
    },
    {
        name: "Vanishing Island",
        location: "Malilipot",
        category: "Island",
        image: "images/vanishing1.jpg",
        description: "A unique sandbar that completely disappears during high tide, offering a magical experience in the sea.",
        fee: "₱500.00 (Boat Rental)",
        hours: "Low Tide Schedule",
        activities: "Sandbar walking, shallow water swimming, boat riding.",
        bestTime: "Check local tide tables before booking your morning boat",
        tips: "Apply plenty of sunscreen since there is zero tree canopy shade on the open sandbar."
    },
    {
        name: "1st Colonial Grill",
        location: "Legazpi City",
        category: "Food Destination",
        image: "images/grill3.jpg",
        description: "The premier home of Bicolano fusion cuisine, famous for the original Sili (Chili) Ice Cream.",
        fee: "No Entrance Fee",
        hours: "10:00 AM - 9:00 PM",
        activities: "Local food tasting, culinary tours, dessert sampling.",
        bestTime: "Lunch or dinner hours",
        tips: "Start with level 1 sili ice cream before daring to order the level 3 volcano hot track."
    },
    {
        name: "Camalig Pinangat Center",
        location: "Camalig",
        category: "Food Destination",
        image: "images/pinangat2.webp",
        description: "A dedicated hub where you can watch and taste the authentic preparation of Pinangat, Albay's signature dish.",
        fee: "No Entrance Fee",
        hours: "8:00 AM - 7:00 PM",
        activities: "Pinangat tasting, food souvenir buying, watching local preparation.",
        bestTime: "Morning hours when batches are cooked fresh",
        tips: "Buy frozen vacuum packs if you plan to transport them back home as gifts."
    },
    {
        name: "Mayon SkyDrive ATV",
        location: "Legazpi City",
        category: "Adventure",
        image: "images/atv6.jpg",
        description: "An adrenaline-pumping experience riding ATVs through rocky riverbeds and volcanic lava trails.",
        fee: "₱500.00 - ₱1,500.00",
        hours: "6:00 AM - 5:30 PM",
        activities: "Off-road ATV driving, lava trail trekking, outdoor adventure sports.",
        bestTime: "Early morning to avoid scorching midday heat",
        tips: "Follow the safety track guide carefully and wear the provided protective helmets."
    },
    {
        name: "Sumlang Lake",
        location: "Camalig",
        category: "Adventure",
        image: "images/sumlang1.jpg",
        description: "Offers a calm adventure with bamboo rafting and kayaking against the backdrop of Mayon's silhouette.",
        fee: "₱100.00",
        hours: "8:00 AM - 6:00 PM",
        activities: "Bamboo rafting, bicol craft shopping, kayaking.",
        bestTime: "4:30 PM (for the sunset shadow view over the water)",
        tips: "Rent a traditional native hat at the entrance for great themed souvenir snapshots."
    }
];

function displayDestinations(filterData) {
    const grid = document.getElementById('destinationGrid');
    if(!grid) return;
    grid.innerHTML = "";

    filterData.forEach((item, index) => {
        grid.innerHTML += `
            <div class="col-md-4 d-flex align-items-stretch mb-4">
                <div class="card shadow-sm">
                    <img src="${item.image}" class="card-img-top" alt="${item.name}">
                    <div class="card-body">
                        <div>
                            <span class="badge bg-success mb-2">${item.category}</span>
                            <h5 class="card-title fw-bold">${item.name}</h5>
                            <p class="text-muted mb-2 small"><i class="bi bi-geo-alt-fill"></i> ${item.location}</p>
                            <p class="card-text small">${item.description}</p>
                        </div>
                        <div class="border-top pt-2 mt-3">
                            <p class="mb-0 small"><strong>Fee:</strong> ${item.fee}</p>
                            <p class="mb-2 small"><strong>Hours:</strong> ${item.hours}</p>
                        </div>
                        <button class="btn btn-danger btn-sm w-100" onclick="viewDetails(${index})">View Details</button>
                    </div>
                </div>
            </div>
        `;
    });
}

document.getElementById('searchInput')?.addEventListener('input', filterContent);
document.getElementById('categoryFilter')?.addEventListener('change', filterContent);

function filterContent() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;

    const filtered = destinations.filter(dest => {
        const matchesSearch = dest.name.toLowerCase().includes(searchText) || dest.location.toLowerCase().includes(searchText);
        const matchesCategory = category === "All" || dest.category === category;
        return matchesSearch && matchesCategory;
    });

    displayDestinations(filtered);
}

if(document.getElementById('destinationGrid')) {
    displayDestinations(destinations);
}

function viewDetails(index) {
    const dest = destinations[index];
    const modalContent = document.getElementById('modalContent');
    if(!modalContent) return;
    
    modalContent.innerHTML = `
        <div class="modal-header bg-success text-white">
            <h5 class="modal-title fw-bold">${dest.name}</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body text-start">
            <img src="${dest.image}" class="img-fluid rounded mb-3" style="max-height: 300px; width: 100%; object-fit: cover;">
            <p class="text-dark"><strong>📍 Location:</strong> ${dest.location}, Albay</p>
            <p class="text-dark"><strong>📝 Description:</strong> ${dest.description}</p>
            <p class="text-dark"><strong>🎯 Activities:</strong> ${dest.activities}</p>
            <p class="text-dark"><strong>📅 Best Time to Visit:</strong> ${dest.bestTime}</p>
            <p class="text-dark"><strong>💰 Entrance Fee:</strong> ${dest.fee}</p>
            <p class="text-dark"><strong>⏰ Opening Hours:</strong> ${dest.hours}</p>
            <p class="text-dark"><strong>💡 Travel Tips:</strong> ${dest.tips}</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary fw-bold" data-bs-dismiss="modal">Close</button>
        </div>
    `;
    const myModal = new bootstrap.Modal(document.getElementById('detailsModal'));
    myModal.show();
}

document.querySelector('form')?.addEventListener('submit', function(event) {
    const name = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('contactNumber').value.trim();
    const message = document.getElementById('message').value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const phonePattern = /^[0-9]+$/;

    if (!name || !message) {
        alert("Name and message are required!");
        event.preventDefault();
    } else if (!email.match(emailPattern)) {
        alert("Please enter a valid email address!");
        event.preventDefault();
    } else if (!phone.match(phonePattern)) {
        alert("Contact number must contain numbers only!");
        event.preventDefault();
    } else {
        alert("Thank you for your inquiry!");
    }
});

/* lightbox dynamic gallery engine module */
let currentImgIndex = 0;
const imagesList = document.querySelectorAll('.gallery-container img');
const lightboxModalElement = document.getElementById('lightboxModal');
let lightboxModalInstance = null;

if (lightboxModalElement) {
    lightboxModalInstance = new bootstrap.Modal(lightboxModalElement);
}

function openLightbox(index) {
    currentImgIndex = index;
    updateLightboxContent();
    if (lightboxModalInstance) {
        lightboxModalInstance.show();
    }
}

function updateLightboxContent() {
    if (!imagesList.length) return;
    const targetImg = imagesList[currentImgIndex];
    const lbImage = document.getElementById('lightboxImage');
    const lbCaption = document.getElementById('lightboxCaption');
    
    if (lbImage) lbImage.src = targetImg.src;
    if (lbCaption) lbCaption.innerText = targetImg.alt;
}

function changeImage(direction) {
    if (!imagesList.length) return;
    currentImgIndex += direction;
    
    if (currentImgIndex >= imagesList.length) {
        currentImgIndex = 0;
    } else if (currentImgIndex < 0) {
        currentImgIndex = imagesList.length - 1;
    }
    
    updateLightboxContent();
}

document.addEventListener('keydown', function(event) {
    const modalElement = document.getElementById('lightboxModal');
    if (modalElement && modalElement.classList.contains('show')) {
        if (event.key === 'ArrowRight') {
            changeImage(1);
        } else if (event.key === 'ArrowLeft') {
            changeImage(-1);
        }
    }
});