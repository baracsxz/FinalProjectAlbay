const destinations = [
    {
        name: "Sogod Beach",
        location: "Bacacay",
        category: "Beach",
        image: "images/sogod1.webp",
        description: "A famous coastline featuring volcanic black sand and calm waves, perfect for swimming and picnics.",
        fee: "Free Entrance",
        hours: "Open 24 Hours"
    },
    {
        name: "Muladbucad Beach",
        location: "Guinobatan",
        category: "Beach",
        image: "images/muladbucad4.jpg",
        description: "A serene coastal escape known for its crystal-clear waters and peaceful, relaxing atmosphere.",
        fee: "₱20.00",
        hours: "6:00 AM - 6:00 PM"
    },
    {
        name: "Quitinday Green Hills",
        location: "Camalig",
        category: "Mountain",
        image: "images/quitinday1.jpg",
        description: "Often called Albay's 'Chocolate Hills,' these mounds offer a 360-degree view of the Bicol landscape.",
        fee: "₱20.00",
        hours: "5:00 AM - 6:30 PM"
    },
    {
        name: "Lignon Hill Nature Park",
        location: "Legazpi City",
        category: "Mountain",
        image: "images/lignon2.jpg",
        description: "A steep hill providing the most popular vantage point for viewing the Mayon Volcano and the city.",
        fee: "₱25.00",
        hours: "5:00 AM - 10:00 PM"
    },
    {
        name: "Vera Falls",
        location: "Malinao",
        category: "Waterfall",
        image: "images/vera1.jpg",
        description: "A stunning cascade hidden at the foot of Mt. Malinao, featuring a cold, turquoise natural swimming pool.",
        fee: "₱50.00",
        hours: "7:00 AM - 5:00 PM"
    },
    {
        name: "Busay Falls",
        location: "Malilipot",
        category: "Waterfall",
        image: "images/busay1.jpg",
        description: "One of the highest waterfalls in the Philippines, cascading down seven distinct natural tiers.",
        fee: "₱15.00",
        hours: "8:00 AM - 5:00 PM"
    },
    {
        name: "Cagsawa Ruins",
        location: "Daraga",
        category: "Historical Site",
        image: "images/cagsawa1.jpg",
        description: "The iconic belfry remains of a Franciscan church destroyed during the 1814 eruption of Mayon.",
        fee: "₱20.00",
        hours: "6:00 AM - 6:00 PM"
    },
    {
        name: "Daraga Church",
        location: "Daraga",
        category: "Historical Site",
        image: "images/daraga1.jpg",
        description: "An 18th-century Baroque church built with volcanic rocks, sitting on a hill overlooking the volcano.",
        fee: "Free / Donation",
        hours: "6:00 AM - 8:00 PM"
    },
    {
        name: "Pinamuntugan Island",
        location: "Bacacay",
        category: "Island",
        image: "images/pinamuntugan1.jpg",
        description: "A secluded paradise known for its pristine white sand and impressive limestone rock formations.",
        fee: "₱500.00 (Boat Rental)",
        hours: "Day Trip Only"
    },
    {
        name: "Vanishing Island",
        location: "Malilipot",
        category: "Island",
        image: "images/vanishing1.jpg",
        description: "A unique sandbar that completely disappears during high tide, offering a magical experience in the sea.",
        fee: "₱500.00 (Boat Rental)",
        hours: "Low Tide Schedule"
    },
    {
        name: "1st Colonial Grill",
        location: "Legazpi City",
        category: "Food Destination",
        image: "images/grill3.jpg",
        description: "The premier home of Bicolano fusion cuisine, famous for the original Sili (Chili) Ice Cream.",
        fee: "No Entrance Fee",
        hours: "10:00 AM - 9:00 PM"
    },
    {
        name: "Camalig Pinangat Center",
        location: "Camalig",
        category: "Food Destination",
        image: "images/pinangat2.webp",
        description: "A dedicated hub where you can watch and taste the authentic preparation of Pinangat, Albay's signature dish.",
        fee: "No Entrance Fee",
        hours: "8:00 AM - 7:00 PM"
    },
    {
        name: "Mayon SkyDrive ATV",
        location: "Legazpi City",
        category: "Adventure",
        image: "images/atv6.jpg",
        description: "An adrenaline-pumping experience riding ATVs through rocky riverbeds and volcanic lava trails.",
        fee: "₱500.00 - ₱1,500.00",
        hours: "6:00 AM - 5:30 PM"
    },
    {
        name: "Sumlang Lake",
        location: "Camalig",
        category: "Adventure",
        image: "images/sumlang1.jpg",
        description: "Offers a calm adventure with bamboo rafting and kayaking against the backdrop of Mayon's silhouette.",
        fee: "₱100.00",
        hours: "8:00 AM - 6:00 PM"
    }
];

function displayDestinations(filterData) {
    const grid = document.getElementById('destinationGrid');
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
            <h5 class="modal-title">${dest.name}</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body text-center">
            <img src="${dest.image}" class="img-fluid rounded mb-3" style="max-height: 300px; width: 100%; object-fit: cover;">
            <p><strong>Location:</strong> ${dest.location}</p>
            <p class="text-start">${dest.description}</p>
            <p class="text-danger fw-bold">Plan your visit: ${dest.hours}</p>
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
        alert("name and message are required!");
        event.preventDefault();
    } else if (!email.match(emailPattern)) {
        alert("please enter a valid email address!");
        event.preventDefault();
    } else if (!phone.match(phonePattern)) {
        alert("contact number must contain numbers only!");
        event.preventDefault();
    } else {
        alert("thank you for your inquiry!");
    }
});