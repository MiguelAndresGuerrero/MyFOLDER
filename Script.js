const texts = {
    es: {
        contact: "Contáctame",
        work: "Ver mis proyectos",
        aboutMe: "Sobre mí",
        aboutText: "¡Hola! Soy Andrés Guerrero, un apasionado programador full stack junior. Me encanta asumir nuevos retos y aprender algo nuevo cada día. Actualmente, estoy fortaleciendo mis habilidades en Java y tengo experiencia trabajando con MySQL en el desarrollo de aplicaciones eficientes y escalables",
        email: "Correo",
        location: "Ubicación",
        availability: "Disponible para trabajar",
        downloadCV: "Descargar CV",
        myProjects: "Mis Proyectos",
        Proyect1Descripcion: "Proyecto Java que gestiona la base de datos de una banda llamada “Notas Vibrantes”, permitiendo almacenar, modificar y eliminar registros de forma eficiente.",
        Proyect2Descripcion: "Aplicación web desarrollada con HTML, CSS y JavaScript que consume la API de Rick y Morty para mostrar información detallada sobre personajes, episodios e imágenes de la serie.",
        Proyect3Descripcion: "Aplicación web desarrollada con HTML, CSS y JavaScript que consume una API de películas, permitiendo búsquedas en tiempo real y la visualización de información detallada sobre cada título.",
        Proyect4Descripcion: "Sistema de base de datos para MOVISTAR, diseñado para optimizar los procesos internos y fortalecer la relación con los clientes, permitiendo una gestión más eficiente, organizada y personalizada de la información.",
        Proyect5Descripcion: "Este programa permite calcular el tipo de cambio exacto en dólares de forma rápida y precisa, optimizando el proceso de transacción y evitando errores en el cálculo del cambio.",
        Proyect6Descripcion: "Este programa simula una tienda online donde los usuarios pueden cambiar entre los roles de cliente, empleado y propietario a través de un menú, accediendo a diferentes funciones dependiendo del rol seleccionado.",
        Proyect7Descripcion: "Este programa facilita la gestión y consulta de varias APIs a través de un menú interactivo, optimizando el acceso a la información en tiempo real",
        Proyect8Descripcion: "En este proyecto he replicado lo mejor posible una pasarela de pago con 3 productos que se añaden al carrito y se resta el saldo de la tarjeta, también se muestra una lista de la compra",
        Proyect9Descripcion: "El proyecto Jardinería es una base de datos diseñada para gestionar información. Incluye tablas para oficinas, empleados, clientes, pedidos y productos, lo que permite organizar y gestionar eficazmente todos los datos clave",
        mySkills: "Mis Habilidades",
        Skill1Text: "Creación de interfaces de usuario interactivas y con capacidad de respuesta mediante bibliotecas y marcos de trabajo modernos",
        Skill2Text: "Creación de aplicaciones y API sólidas del lado del servidor para potenciar las aplicaciones web",
        Skill3Text: "Gestión y optimización de soluciones de almacenamiento de datos para aplicaciones web",
        Skill4Text: "Racionalización de los flujos de trabajo de desarrollo e implantación de aplicaciones en producción",
        Skill5Text: "Creación de interfaces y experiencias visualmente atractivas y fáciles de usar",
        Skill6Text: "Competencias técnicas y sociales adicionales que mejoran mis capacidades de desarrollo",
        skillPink1: "Adaptabilidad",
        skillPink2: "Comunicación",
        skillPink3: "Receptividad a la crítica",
        skillPink4: "Trabajo en equipo",
        skillPink5: "Gestión del tiempo",
        getInTouch: "Contáctame",
        sendMsg: "Envíame un mensaje",
        connect: "¡Conectemos y creemos algo asombroso!",
        yourName: "Tu nombre",
        yourEmail: "Tu correo",
        topic: "Asunto del mensaje",
        message: "Tu mensaje",
        messageText: "Si tienes alguna pregunta, una idea interesante o simplemente quieres charlar, no dudes en ponerte en contacto conmigo. Siempre estoy abierto a nuevas oportunidades, colaboraciones y retos que nos ayuden a crecer juntos.",
        sendBtn: "Enviar Mensaje"
    },
    
    en: {
        contact: "Contact me",
        work: "View my work",
        aboutMe: "About Me",
        aboutText: "Hello! I'm Andres Guerrero, a passionate programmer full stack junior. I love taking on new challenges and learning something new every day. Currently, I'm strengthening my skills in Java and have experience working with MySQL in developing efficient and scalable applications",
        email: "Email",
        location: "Location",
        availability: "Available",
        downloadCV: "Download CV",
        myProjects: "My Projects",
        Proyect1Descripcion: "Java project that manages the database of a band called “Vibrating Notes”, allowing to store, modify and delete records efficiently.",
        Proyect2Descripcion: "Web application developed with HTML, CSS and JavaScript that consumes the Rick and Morty API to display detailed information about characters, episodes and images of the series",
        Proyect3Descripcion: "Web application developed with HTML, CSS and JavaScript that consumes a movie API, allowing real-time searches and the display of detailed information about each title",
        Proyect4Descripcion: "Database system for MOVISTAR, designed to optimize internal processes and strengthen the relationship with customers, allowing a more efficient, organized and personalized management of information",
        Proyect5Descripcion: "This program allows you to calculate the exact exchange rate in dollars quickly and accurately, optimizing the transaction process and avoiding errors in the change calculation",
        Proyect6Descripcion: "This program simulates an online store where users can switch between the roles of customer, employee and owner through a menu, accessing different functions depending on the selected role",
        Proyect7Descripcion: "This program facilitates the management and consultation of various APIs through an interactive menu, optimizing access to information in real time",
        Proyect8Descripcion: "In this project I replicated as best as possible a payment gateway with 3 products that are added to the cart and the card balance is subtracted, a shopping list is also displayed",
        Proyect9Descripcion: "The Gardening project is a database designed to manage information. It includes tables for offices, employees, customers, orders and products, allowing to efficiently organize and manage all key data",
        mySkills: "My Skills",
        Skill1Text: "Creating responsive and interactive user interfaces with modern frameworks and libraries",
        Skill2Text: "Web application development using HTML, CSS and JavaScript",
        Skill3Text: "Handling SQL databases to store and manage information efficiently",
        Skill4Text: "Implementing RESTful APIs for communication between client and server",
        Skill5Text: "Knowledge in version control using Git and GitHub for collaboration on projects",
        Skill6Text: "Additional technical and soft skills that enhance my development capabilities",
        skillPink1: "Adaptability",
        skillPink2: "Communication",
        skillPink3: "Receptiveness to criticism",
        skillPink4: "Teamwork",
        skillPink5: "Time management",
        getInTouch: "Get In Touch",
        sendMsg: "Send Me a Message",
        connect: "Let's connect and create something amazing!",
        yourName: "Your Name",
        yourEmail: "Your Email",
        topic: "Message Topic",
        message: "Your Message",
        messageText: "Your messageIf you have any questions, an exciting idea, or just want to chat, feel free to contact me. I'm always open to new opportunities, collaborations, and challenges that help us grow together.",
        sendBtn: "Send Message"
    }
};

function changeLanguage(lang) {
    document.querySelector('.contac').textContent = texts[lang].contact;
    document.querySelector('.work').textContent = texts[lang].work;
    document.querySelector('.name-about-me').textContent = texts[lang].aboutMe;
    document.querySelector('.text-about-me').textContent = texts[lang].aboutText;
    document.querySelector('.email-text').previousElementSibling.textContent = texts[lang].email;
    document.querySelector('.email-text').parentElement.nextElementSibling.querySelector('strong').textContent = texts[lang].location;
    document.querySelector('.email-text').parentElement.nextElementSibling.nextElementSibling.querySelector('strong').textContent = texts[lang].availability;
    document.querySelector('.download-btn').textContent = texts[lang].downloadCV;
    document.querySelector('.section-title').textContent = texts[lang].myProjects;
    document.querySelector('#skills h2').textContent = texts[lang].mySkills;
    document.querySelector('.contacts').textContent = texts[lang].getInTouch;
    document.querySelector('.contact-info h3').textContent = texts[lang].sendMsg;
    document.querySelector('.text-messge').textContent = texts[lang].connect;
    document.querySelector('.contact-form h3').textContent = texts[lang].sendMsg;
    document.querySelector('label[for="name"]').textContent = texts[lang].yourName;
    document.querySelector('label[for="email"]').textContent = texts[lang].yourEmail;
    document.querySelector('label[for="subject"]').textContent = texts[lang].topic;
    document.querySelector('label[for="message"]').textContent = texts[lang].message;
    document.querySelector('.send-btn').innerHTML = `<i class="fas fa-paper-plane"></i> ${texts[lang].sendBtn}`;
    document.getElementById('Proyect1Descripcion').textContent = texts[lang].Proyect1Descripcion;
    document.getElementById('Proyect2Descripcion').textContent = texts[lang].Proyect2Descripcion;
    document.getElementById('Proyect3Descripcion').textContent = texts[lang].Proyect3Descripcion;
    document.getElementById('Proyect4Descripcion').textContent = texts[lang].Proyect4Descripcion;
    document.getElementById('Proyect5Descripcion').textContent = texts[lang].Proyect5Descripcion;
    document.getElementById('Proyect6Descripcion').textContent = texts[lang].Proyect6Descripcion;
    document.getElementById('Proyect7Descripcion').textContent = texts[lang].Proyect7Descripcion;
    document.getElementById('Proyect8Descripcion').textContent = texts[lang].Proyect8Descripcion;
    document.getElementById('Proyect9Descripcion').textContent = texts[lang].Proyect9Descripcion;
    document.getElementById('Skill1Text').textContent = texts[lang].Skill1Text;
    document.getElementById('Skill2Text').textContent = texts[lang].Skill2Text;
    document.getElementById('Skill3Text').textContent = texts[lang].Skill3Text;
    document.getElementById('Skill4Text').textContent = texts[lang].Skill4Text;
    document.getElementById('Skill5Text').textContent = texts[lang].Skill5Text;
    document.getElementById('Skill6Text').textContent = texts[lang].Skill6Text;
    document.getElementById('skillPink1').textContent = texts[lang].skillPink1;
    document.getElementById('skillPink2').textContent = texts[lang].skillPink2;
    document.getElementById('skillPink3').textContent = texts[lang].skillPink3;
    document.getElementById('skillPink4').textContent = texts[lang].skillPink4;
    document.getElementById('skillPink5').textContent = texts[lang].skillPink5;
    document.getElementById('messageText').textContent = texts[lang].messageText;
}

document.getElementById('btn-es').addEventListener('click', () => changeLanguage('es'));
document.getElementById('btn-en').addEventListener('click', () => changeLanguage('en'));  