/**
 * =====================================================================
 * KELLY REZENDE | DIVINA DERMA — INTERAÇÕES & COMPORTAMENTO
 * =====================================================================
 * Frontend refinado com Vanilla JavaScript:
 * - Tratamento Robusto de Imagens (Multi-caminho Relativo + Fallback Editorial)
 * - Header responsivo com efeito blur dinâmico
 * - Menu mobile acessível e fluido
 * - Filtro de categorias do catálogo de tratamentos
 * - Lightbox modal de alta resolução para as 4 imagens
 * - Modal de agendamento personalizado para WhatsApp
 * - Accordion de Perguntas Frequentes (FAQ)
 */

document.addEventListener("DOMContentLoaded", () => {
  initImageResolution();
  initHeaderScroll();
  initMobileNav();
  initSmoothScroll();
  initTreatmentFilters();
  initGalleryLightbox();
  initAppointmentModal();
  initFaqAccordion();
  bindConfigLinks();
});

/**
 * 1. RESOLUÇÃO DE IMAGENS & TRATAMENTO DE ERRO VISUAL DISCRETO
 * Testa múltiplos caminhos relativos válidos (/images, public/images, images).
 * Se o arquivo ainda não foi sincronizado pelo usuário, exibe um cartão editorial
 * sofisticado no lugar da imagem quebrada, preservando proporções, respiro e o selo de 9 Anos.
 */
function initImageResolution() {
  const allImages = document.querySelectorAll("img[data-filename]");

  allImages.forEach(img => {
    resolveImageSources(img);
  });
}

function resolveImageSources(img) {
  const filename = img.getAttribute("data-filename");
  if (!filename) return;

  const userUploadMap = {
    "kelly-rezende-profissional.png": "media_1792192323572_e7639cb2.png",
    "procedimento-limpeza-massagem.png": "media_1792192308681_dae71ad1.png",
    "protocolo-mascara-facial.png": "media_1792192308694_dc190a34.png",
    "tecnologia-cosmobeauty-led.png": "media_1792192308731_14fd13ee.png"
  };

  const uploadFile = userUploadMap[filename];

  // Lista ordenada de caminhos relativos e locais aceitos
  const candidates = [
    `images/${filename}`,
    `public/images/${filename}`,
    `./images/${filename}`,
    `./public/images/${filename}`,
    `/images/${filename}`
  ];

  if (uploadFile) {
    candidates.push(`../../.gemini/antigravity/brain/95fcb9fa-63ac-435e-97d5-d30994bd4e99/.user_uploaded/${uploadFile}`);
    candidates.push(`file:///C:/Users/Win11/.gemini/antigravity/brain/95fcb9fa-63ac-435e-97d5-d30994bd4e99/.user_uploaded/${uploadFile}`);
  }

  let currentAttempt = 0;

  function tryNext() {
    if (currentAttempt < candidates.length) {
      const nextPath = candidates[currentAttempt];
      currentAttempt++;
      img.src = nextPath;
    } else {
      // Se todos os caminhos falharem por ausência física do arquivo na pasta, orienta o usuário
      handleVisualFallback(img);
    }
  }

  img.addEventListener("error", function onImgError() {
    tryNext();
  });

  img.addEventListener("load", function onImgLoad() {
    // Imagem carregada com sucesso! Garante exibição perfeita
    img.classList.remove("image-failed");
    img.style.display = "block";
    const existingFallback = img.parentElement?.querySelector(".editorial-fallback-card");
    if (existingFallback) {
      existingFallback.remove();
    }
  });

  // Dispara a primeira tentativa
  tryNext();
}

function handleVisualFallback(img) {
  img.classList.add("image-failed");
  img.style.display = "none";

  const parent = img.parentElement;
  if (!parent || parent.querySelector(".editorial-fallback-card")) return;

  const title = img.getAttribute("data-fallback-title") || "Foto Oficial";
  const badge = img.getAttribute("data-fallback-badge") || "Kelly Rezende • Divina Derma";

  const fallbackCard = document.createElement("div");
  fallbackCard.className = "editorial-fallback-card";
  fallbackCard.innerHTML = `
    <div class="fallback-monogram" style="font-size: 1.1rem; width: 50px; height: 50px;">📸</div>
    <div class="fallback-title font-serif" style="font-size: 1.25rem;">${title}</div>
    <div class="fallback-subtitle" style="color: #B79A65; font-size: 0.75rem; margin-bottom: 12px;">FOTO OFICIAL DO PROJETO</div>
    <p style="font-size: 0.8rem; color: #5A4C47; max-width: 280px; line-height: 1.4; margin-bottom: 14px;">
      Dê 2 cliques no arquivo <strong>COPIAR-FOTOS-DA-KELLY.bat</strong> na sua <strong>Área de Trabalho</strong> (ou na pasta do projeto) e aperte F5 aqui!
    </p>
    <div class="fallback-badge" style="font-size: 0.72rem;">${badge}</div>
  `;

  parent.appendChild(fallbackCard);

  console.info(`[Divina Derma] Imagem "${img.getAttribute('data-filename')}" aguardando arquivo local.`);
}

// Global handler chamado no inline onerror caso necessário
window.handleImgFallback = function (el) {
  if (el) resolveImageSources(el);
};

/**
 * 2. HEADER DINÂMICO DURANTE A ROLAGEM
 */
function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/**
 * 3. MENU MOBILE DESLIZANTE
 */
function initMobileNav() {
  const toggleBtn = document.querySelector(".mobile-toggle");
  const drawer = document.querySelector(".mobile-drawer");
  const backdrop = document.querySelector(".mobile-drawer-backdrop");
  const navLinks = document.querySelectorAll(".mobile-nav-link, .mobile-drawer .btn");

  if (!toggleBtn || !drawer || !backdrop) return;

  function toggleMenu(open) {
    const isOpen = open !== undefined ? open : !drawer.classList.contains("open");
    drawer.classList.toggle("open", isOpen);
    backdrop.classList.toggle("active", isOpen);
    toggleBtn.classList.toggle("active", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
    toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  }

  toggleBtn.addEventListener("click", () => toggleMenu());
  backdrop.addEventListener("click", () => toggleMenu(false));

  navLinks.forEach(link => {
    link.addEventListener("click", () => toggleMenu(false));
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("open")) {
      toggleMenu(false);
    }
  });
}

/**
 * 4. ROLAGEM SUAVE COM HIGHLIGHT DE LINKS ATIVOS
 */
function initSmoothScroll() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function highlightNav() {
    const scrollY = window.scrollY + 140;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", highlightNav, { passive: true });
}

/**
 * 5. FILTRAGEM DO CATÁLOGO DE TRATAMENTOS
 */
function initTreatmentFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const treatmentCards = document.querySelectorAll(".treatment-card");

  if (!filterButtons.length || !treatmentCards.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-category");

      treatmentCards.forEach(card => {
        const cardCategory = card.getAttribute("data-category");
        if (category === "all" || cardCategory === category) {
          card.style.display = "flex";
          card.style.opacity = "0";
          setTimeout(() => {
            card.style.transition = "opacity 0.3s ease";
            card.style.opacity = "1";
          }, 20);
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

/**
 * 6. LIGHTBOX MODAL PARA AS 4 IMAGENS DA CLÍNICA
 */
function initGalleryLightbox() {
  const lightboxModal = document.getElementById("lightboxModal");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxDesc = document.getElementById("lightboxDesc");
  const closeBtn = document.getElementById("lightboxClose");
  const cards = document.querySelectorAll(".gallery-card");

  if (!lightboxModal || !cards.length) return;

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const img = card.querySelector("img");
      const title = card.querySelector(".gallery-card-title")?.innerText || "";
      const desc = card.querySelector(".gallery-card-caption")?.innerText || "";

      if (img && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
      }
      if (lightboxTitle) lightboxTitle.innerText = title;
      if (lightboxDesc) lightboxDesc.innerText = desc;

      lightboxModal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  const closeModal = () => {
    lightboxModal.classList.remove("active");
    document.body.style.overflow = "";
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  lightboxModal.addEventListener("click", (e) => {
    if (e.target === lightboxModal) closeModal();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightboxModal.classList.contains("active")) {
      closeModal();
    }
  });
}

/**
 * 7. MODAL DE AGENDAMENTO RÁPIDO & DIRECIONAMENTO AO WHATSAPP
 */
function initAppointmentModal() {
  const modal = document.getElementById("appointmentModal");
  const openTriggers = document.querySelectorAll(".trigger-appointment-modal");
  const closeBtn = document.getElementById("appointmentClose");
  const form = document.getElementById("appointmentForm");

  if (!modal) return;

  const openModal = (preselectedTreatment = "") => {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";

    if (preselectedTreatment && form) {
      const select = form.querySelector("#modalTreatmentSelect");
      if (select) select.value = preselectedTreatment;
    }
  };

  const closeModal = () => {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  };

  openTriggers.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const treatment = btn.getAttribute("data-treatment") || "";
      openModal(treatment);
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.querySelector("#modalName")?.value || "";
      const treatment = form.querySelector("#modalTreatmentSelect")?.value || "Avaliação Personalizada";
      const notes = form.querySelector("#modalNotes")?.value || "";

      let msg = `Olá Kelly! Me chamo ${name}. Gostaria de agendar uma avaliação na Divina Derma para: ${treatment}.`;
      if (notes) {
        msg += ` Observação: ${notes}`;
      }

      window.open(getWhatsAppUrl(msg), "_blank");
      closeModal();
    });
  }
}

/**
 * 8. FAQ ACCORDION INTERATIVO
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const trigger = item.querySelector(".faq-trigger");
    const content = item.querySelector(".faq-content");

    if (!trigger || !content) return;

    trigger.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          const otherContent = otherItem.querySelector(".faq-content");
          if (otherContent) otherContent.style.maxHeight = null;
        }
      });

      if (!isActive) {
        item.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
        trigger.setAttribute("aria-expanded", "true");
      } else {
        item.classList.remove("active");
        content.style.maxHeight = null;
        trigger.setAttribute("aria-expanded", "false");
      }
    });
  });
}

/**
 * 9. VINCULAR LINKS DINÂMICOS DA CONFIGURAÇÃO
 */
function bindConfigLinks() {
  const directWaButtons = document.querySelectorAll(".btn-direct-whatsapp");
  directWaButtons.forEach(btn => {
    const customText = btn.getAttribute("data-message");
    btn.href = getWhatsAppUrl(customText);
  });

  const instaLinks = document.querySelectorAll(".link-instagram");
  instaLinks.forEach(link => {
    if (CLINIC_CONFIG?.contact?.instagramUrl) {
      link.href = CLINIC_CONFIG.contact.instagramUrl;
    }
  });
}
