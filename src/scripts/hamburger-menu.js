/**
 * Menú Hamburguesa - Funcionalidad básica
 * Controla la apertura y cierre del menú en dispositivos móviles
 */

document.addEventListener("DOMContentLoaded", function () {
  // Obtener elementos del DOM
  const hamburgerButton = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".nav");
  const body = document.body;

  // Verificar que los elementos existen
  if (!hamburgerButton || !mobileMenu) {
    console.warn("Elementos del menú hamburguesa no encontrados");
    return;
  }

  // Función para alternar el menú
  function toggleMenu() {
    const isOpen = mobileMenu.classList.contains("nav-open");

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // Función para abrir el menú
  function openMenu() {
    mobileMenu.classList.add("nav-open");
    hamburgerButton.classList.add("hamburger-active");
    hamburgerButton.setAttribute("aria-expanded", "true");
    body.style.overflow = "hidden"; // Prevenir scroll del body
  }

  // Función para cerrar el menú
  function closeMenu() {
    mobileMenu.classList.remove("nav-open");
    hamburgerButton.classList.remove("hamburger-active");
    hamburgerButton.setAttribute("aria-expanded", "false");
    body.style.overflow = ""; // Restaurar scroll del body
  }

  // Event listener para el botón hamburguesa
  hamburgerButton.addEventListener("click", toggleMenu);

  // Cerrar menú cuando se hace clic en un enlace
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Cerrar menú al presionar Escape
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && mobileMenu.classList.contains("nav-open")) {
      closeMenu();
    }
  });

  // Cerrar menú al cambiar el tamaño de pantalla (si se pasa a desktop)
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768 && mobileMenu.classList.contains("nav-open")) {
      closeMenu();
    }
  });
});
