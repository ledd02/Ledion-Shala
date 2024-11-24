document.getElementById("searchForm").addEventListener("submit", function (event) {
    event.preventDefault(); 


    const searchInput = document.getElementById("searchInput").value.trim().toLowerCase();

    
    if (searchInput === "") {
        alert("Please enter a destination!");
        return;
    }

  
    let url = '';


    switch (searchInput) {
        case "paris":
            url = "https://www.tripadvisor.com/Tourism-g187147-Paris_Ile_de_France-Vacations.html";
            break;
        case "london":
            url = "https://www.tripadvisor.co.uk/Tourism-g186338-London_England-Vacations.html";
            break;
        case "tokyo":
            url = "https://www.tripadvisor.com/Tourism-g298184-Tokyo_Tokyo_Prefecture_Kanto-Vacations.html";
            break;
        case "new york":
            url = "https://www.tripadvisor.com/Tourism-g60763-New_York_City_New_York-Vacations.html";
            break;
        case "rome":
            url = "https://www.tripadvisor.com/Tourism-g187791-Rome_Lazio-Vacations.html";
            break;
        case "sydney":
            url = "https://www.tripadvisor.com/Tourism-g255060-Sydney_New_South_Wales-Vacations.html";
            break;
        case "berlin":
            url = "https://www.tripadvisor.com/Tourism-g187323-Berlin-Vacations.html";
            break;
        case "barcelona":
            url = "https://www.tripadvisor.com/Tourism-g187497-Barcelona_Catalonia-Vacations.html";
            break;
        case "amsterdam":
            url = "https://www.tripadvisor.com/Tourism-g188590-Amsterdam_North_Holland_Province-Vacations.html";
            break;
        case "bangkok":
            url = "https://www.tripadvisor.com/Tourism-g293916-Bangkok-Vacations.html";
            break;
        case "dubai":
            url = "https://www.tripadvisor.com/Tourism-g295424-Dubai_Emirate_of_Dubai-Vacations.html";
            break;
        case "madrid":
            url = "https://www.tripadvisor.com/Tourism-g187514-Madrid-Vacations.html";
            break;
        case "los angeles":
            url = "https://www.tripadvisor.com/Tourism-g32655-Los_Angeles_California-Vacations.html";
            break;
        case "seoul":
            url = "https://www.tripadvisor.com/Tourism-g294197-Seoul-Vacations.html";
            break;
        case "cairo":
            url = "https://www.tripadvisor.com/Tourism-g294200-Cairo_Vacations.html";
            break;
        case "moscow":
            url = "https://www.tripadvisor.com/Tourism-g298484-Moscow-Vacations.html";
            break;
        case "rio de janeiro":
            url = "https://www.tripadvisor.com/Tourism-g303506-Rio_de_Janeiro_State_of_Rio_de_Janeiro-Vacations.html";
            break;
        case "singapore":
            url = "https://www.tripadvisor.com/Tourism-g294265-Singapore-Vacations.html";
            break;
        case "beijing":
            url = "https://www.tripadvisor.com/Tourism-g294212-Beijing-Vacations.html";
            break;
        case "mumbai":
            url = "https://www.tripadvisor.com/Tourism-g304554-Mumbai_Maharashtra-Vacations.html";
            break;
        case "cape town":
            url = "https://www.tripadvisor.com/Tourism-g312659-Cape_Town_Central_Western_Cape-Vacations.html";
            break;
        case "istanbul":
            url = "https://www.tripadvisor.com/Tourism-g293974-Istanbul-Vacations.html";
            break;
        case "florence":
            url = "https://www.tripadvisor.com/Tourism-g187895-Florence_Tuscany-Vacations.html";
            break;
        case "venice":
            url = "https://www.tripadvisor.com/Tourism-g187870-Venice_Veneto-Vacations.html";
            break;
        case "milan":
            url = "https://www.tripadvisor.com/Tourism-g187849-Milan_Lombardy-Vacations.html";
            break;
        case "naples":
            url = "https://www.tripadvisor.com/Tourism-g187785-Naples_Province_of_Naples_Campania-Vacations.html";
            break;
        case "rome":
            url = "https://www.tripadvisor.com/Tourism-g187791-Rome_Lazio-Vacations.html";
            break;
        case "bologna":
            url = "https://www.tripadvisor.com/Tourism-g187801-Bologna_Emilia_Romagna-Vacations.html";
            break;
        default:
        
            url = `https://www.google.com/search?q=${encodeURIComponent(searchInput)}`;
    }


    window.location.href = url;
});
