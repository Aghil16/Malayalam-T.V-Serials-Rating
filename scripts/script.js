document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "Light Mode";
    toggleButton.style.position = "fixed";
    toggleButton.style.bottom = "20px";
    toggleButton.style.right = "20px";
    toggleButton.style.padding = "10px 20px";
    toggleButton.style.backgroundColor = "rgb(51,51,51)";
    toggleButton.style.color = "white";
    toggleButton.style.border = "none";
    toggleButton.style.borderRadius = "5px";
    toggleButton.style.cursor = "pointer";
    
    document.body.appendChild(toggleButton);
    
    toggleButton.addEventListener("click", function () {
        const headerElements = document.querySelectorAll(".header");
        const headingElements = document.querySelectorAll(".header .heading");
        const videoElements = document.querySelectorAll(".video");
        const titleElements = document.querySelectorAll(".video .details .title");
        const trpElements = document.querySelectorAll(".video .details .status .trp");
        
        if (document.body.classList.contains("light-mode")) {
            document.body.classList.remove("light-mode");
            document.body.style.backgroundColor = "rgb(22, 22, 22)";
            toggleButton.innerText = "Light Mode";
            
            headerElements.forEach(header => {
                header.style.backgroundColor = "black";
            });
            headingElements.forEach(heading => {
                heading.style.color = "white";
            });

            videoElements.forEach(video => {
                video.style.backgroundColor = "black";
            });

            titleElements.forEach(title => {
                title.style.color = "white";
            });
            trpElements.forEach(trp => {
                trp.style.color = "white";
            });
        } else {
            document.body.classList.add("light-mode");
            document.body.style.backgroundColor = "rgb(240,240,240)";
            toggleButton.innerText = "Dark Mode";
            
            headerElements.forEach(header => {
                header.style.backgroundColor = "white";
            });
            headingElements.forEach(heading => {
                heading.style.color = "black";
            });

            videoElements.forEach(video => {
                video.style.backgroundColor = "white";
            });
            
            titleElements.forEach(title => {
                title.style.color = "black";
            });
            trpElements.forEach(trp => {
                trp.style.color = "black";
            });
        }
    });
});



