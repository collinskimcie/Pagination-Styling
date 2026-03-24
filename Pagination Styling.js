const servicesContainer = document.getElementById("services");
const pagesContainer = document.getElementById("pages");

const prev = document.getElementById("prev");
const next = document.getElementById("next");

const services = [
    {
        title:"Web Development",
        desc:"Custom web solutions with modern technologies",
        icon:"fa-globe"
    },
    {
        title:"Mobile Apps",
        desc:"Native and cross-platform app development",
        icon:"fa-mobile-screen"
    },
    {
        title:"Database Design",
        desc:"Scalable database solutions and optimization",
        icon:"fa-database"
    },
    {
        title:"API Development",
        desc:"RESTful and GraphQL API architecture",
        icon:"fa-plug"
    },
    {
        title:"Cloud Services",
        desc:"AWS, Azure and GCP deployment and management",
        icon:"fa-cloud"
    },
    {
        title:"Security",
        desc:"Enterprise-grade security and compliance",
        icon:"fa-shield-halved"
    },
    {
        title:"Performance",
        desc:"Optimization and speed enhancement",
        icon:"fa-gauge-high"
    },
    {
        title:"Team Support",
        desc:"Dedicated developer teams for your project",
        icon:"fa-users"
    }
];

let currentPage = 1;
const perPage = 3;

// Show services
function displayServices(){
    servicesContainer.innerHTML = "";

    let start = (currentPage - 1) * perPage;
    let end = start + perPage;

    services.slice(start, end).forEach(service => {
        let div = document.createElement("div");
        div.className = "service";

        div.innerHTML = `
            <i class="fas ${service.icon}"></i>
            <div>
                <div class="service-title">${service.title}</div>
                <div>${service.desc}</div>
            </div>
        `;

        servicesContainer.appendChild(div);
    });
}

// Pagination
function setupPages(){
    pagesContainer.innerHTML = "";
    let totalPages = Math.ceil(services.length / perPage);

    for(let i=1;i<=totalPages;i++){
        let span = document.createElement("span");
        span.innerText = i;

        if(i === currentPage){
            span.classList.add("active");
        }

        span.onclick = ()=>{
            currentPage = i;
            update();
        }

        pagesContainer.appendChild(span);
    }
}

// Update
function update(){
    displayServices();
    setupPages();
}

// Buttons
prev.onclick = ()=>{
    if(currentPage > 1){
        currentPage--;
        update();
    }
}

next.onclick = ()=>{
    if(currentPage < Math.ceil(services.length / perPage)){
        currentPage++;
        update();
    }
}

// Init
update();