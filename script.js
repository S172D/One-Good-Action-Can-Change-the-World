// Learn More Popup

const popup = document.getElementById("popup");
const learnButton = document.getElementById("learnButton");
const closeButton = document.getElementById("close");

learnButton.addEventListener("click", () => {
    popup.style.display = "flex";
});

closeButton.addEventListener("click", () => {
    popup.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});

// Fade-in Animation

const sections = document.querySelectorAll(".section, .card, .impact, .learn, .step");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = "all 1s ease";
    observer.observe(section);
});

// Floating Background Particles

const background = document.querySelector(".background");

for (let i = 0; i < 35; i++) {

    const particle = document.createElement("div");

    particle.style.position = "absolute";
    particle.style.width = Math.random() * 8 + 4 + "px";
    particle.style.height = particle.style.width;
    particle.style.background = "rgba(70,255,154,.4)";
    particle.style.borderRadius = "50%";

    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";

    particle.style.animation =
        `float ${Math.random() * 15 + 10}s linear infinite`;

    particle.style.animationDelay =
        Math.random() * 10 + "s";

    background.appendChild(particle);

}

// Floating Animation

const style = document.createElement("style");

style.innerHTML = `
@keyframes float{

0%{
transform:translateY(0px);
opacity:.2;
}

50%{
transform:translateY(-120px);
opacity:1;
}

100%{
transform:translateY(-240px);
opacity:0;
}

}
`;

document.head.appendChild(style);

// Glowing Mouse Effect

document.addEventListener("mousemove", (e) => {

    const glow = document.createElement("div");

    glow.style.position = "fixed";
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

    glow.style.width = "12px";
    glow.style.height = "12px";

    glow.style.borderRadius = "50%";

    glow.style.background = "rgba(70,255,154,.6)";

    glow.style.pointerEvents = "none";

    glow.style.filter = "blur(3px)";

    glow.style.transition = "all .8s linear";

    document.body.appendChild(glow);

    setTimeout(() => {

        glow.style.opacity = "0";
        glow.style.transform = "scale(5)";

    }, 10);

    setTimeout(() => {

        glow.remove();

    }, 800);

});

// Button Ripple Effect

document.querySelectorAll("button, .primary, .secondary").forEach(button => {

    button.addEventListener("click", function(e){

        const ripple = document.createElement("span");

        ripple.style.position = "absolute";
        ripple.style.width = "10px";
        ripple.style.height = "10px";
        ripple.style.background = "white";
        ripple.style.borderRadius = "50%";
        ripple.style.left = e.offsetX + "px";
        ripple.style.top = e.offsetY + "px";
        ripple.style.transform = "translate(-50%,-50%)";
        ripple.style.animation = "ripple .6s linear";
        ripple.style.pointerEvents = "none";

        this.style.position = "relative";
        this.style.overflow = "hidden";

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);

    });

});

const rippleStyle = document.createElement("style");

rippleStyle.innerHTML = `
@keyframes ripple{

0%{
transform:translate(-50%,-50%) scale(0);
opacity:1;
}

100%{
transform:translate(-50%,-50%) scale(20);
opacity:0;
}

}
`;

document.head.appendChild(rippleStyle);

console.log("🌍 One Good Action Website Loaded Successfully!");
