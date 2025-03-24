document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".circle-container");
    const circles = [];
    const numCircles = 10;

    for (let i = 0; i < numCircles; i++) {
        let size = Math.random() * 100 + 20; // Tamaño entre 20px y 120px
        let circle = document.createElement("div");
        circle.classList.add("circle");
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        container.appendChild(circle);

        // Propiedades de movimiento
        circles.push({
            element: circle,
            x: Math.random() * (window.innerWidth - size),
            y: Math.random() * (window.innerHeight - size),
            dx: (Math.random() - 0.5) * 4, // Velocidad en X (dirección aleatoria)
            dy: (Math.random() - 0.5) * 4, // Velocidad en Y (dirección aleatoria)
            size: size,
        });
    }

    function animate() {
        circles.forEach((circle) => {
            let { element, x, y, dx, dy, size } = circle;

            // Mover círculo
            x += dx;
            y += dy;

            // Rebotar en bordes
            if (x <= 0 || x + size >= window.innerWidth) circle.dx *= -1;
            if (y <= 0 || y + size >= window.innerHeight) circle.dy *= -1;

            // Actualizar posición
            element.style.transform = `translate(${x}px, ${y}px)`;
            circle.x = x;
            circle.y = y;
        });

        requestAnimationFrame(animate);
    }

    animate();
});