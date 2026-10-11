const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Service links preselect the service in the enquiry form.
document.querySelectorAll("[data-service]").forEach((link) => {
  link.addEventListener("click", () => {
    const serviceSelect = document.getElementById("service");
    const serviceName = link.dataset.service;
    const matchingOption = [...serviceSelect.options].find((option) => option.value === serviceName || option.textContent === serviceName);
    if (matchingOption) serviceSelect.value = matchingOption.value || matchingOption.textContent;
  });
});

// WhatsApp number in international format, digits only (Sri Lanka: +94).
const WHATSAPP_NUMBER = "94764159493";

document.getElementById("enquiry-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const name = document.getElementById("name").value.trim();
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value || "Flexible";
  const message = document.getElementById("message").value.trim() || "I'd like to know more about your services and prices.";
  const text = [
    "Hello JeniK Beauty Choice,",
    "",
    `My name is ${name}.`,
    `I'm interested in: ${service}.`,
    `Preferred date: ${date}.`,
    `Message: ${message}`,
    "",
    "Could you please share availability and pricing? Thank you."
  ].join("\\n");

  if (!/^[0-9]{10,15}$/.test(WHATSAPP_NUMBER) || WHATSAPP_NUMBER === "947XXXXXXXX") {
    document.getElementById("form-status").textContent = "Demo only: please verify the salon's official WhatsApp number and update script.js before using this form.";
    return;
  }
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});

