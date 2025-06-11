/* Navigation */
class Navigation {
  static init() {
    this.toggleButton = document.querySelector(".nav-toggle")
    this.navMenu = document.querySelector(".nav-menu")
    this.navItems = document.querySelectorAll(".nav-item")

    this.toggleButton.addEventListener("click", () => {
      this.navMenu.classList.toggle("show")
    })

    this.navItems.forEach((item) => {
      item.addEventListener("click", () => {
        this.navMenu.classList.remove("show")
      })
    })
  }
}

/* Skills Accordion */
class SkillsAccordion {
  static init() {
    const skillsHeaders = document.querySelectorAll(".skills-header")

    skillsHeaders.forEach((header) => {
      header.addEventListener("click", () => {
        const skillsContent = header.parentElement

        if (skillsContent.className.indexOf("skills-open") === -1) {
          skillsContent.classList.add("skills-open")
        } else {
          skillsContent.classList.remove("skills-open")
        }
      })
    })
  }
}

/* Qualification Tabs */
class QualificationTabs {
  static init() {
    const tabs = document.querySelectorAll("[data-target]")
    const tabContents = document.querySelectorAll("[data-content]")

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach((tabContent) => {
          tabContent.classList.remove("qualification-active")
        })
        target.classList.add("qualification-active")

        tabs.forEach((tab) => {
          tab.classList.remove("qualification-active")
        })
        tab.classList.add("qualification-active")
      })
    })
  }
}

/* Services Modal */
class ServicesModal {
  static init() {
    const modalViews = document.querySelectorAll(".services-modal")
    const modalButtons = document.querySelectorAll(".services-button")
    const modalCloses = document.querySelectorAll(".services-modal-close")

    const modal = (modalClick) => {
      modalViews[modalClick].classList.add("active-modal")
    }

    modalButtons.forEach((modalButton, i) => {
      modalButton.addEventListener("click", () => {
        modal(i)
      })
    })

    modalCloses.forEach((modalClose) => {
      modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
          modalView.classList.remove("active-modal")
        })
      })
    })
  }
}

/* Scroll Sections Active Link */
class ScrollHandlers {
  static init() {
    const sections = document.querySelectorAll("section[id]")

    window.addEventListener("scroll", () => {
      const scrollY = window.pageYOffset

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        const sectionId = current.getAttribute("id")

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active-link")
        } else {
          document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active-link")
        }
      })
    })
  }
}

/* Dark Light Theme */
class ThemeManager {
  static init() {
    const themeButton = document.getElementById("theme-button")
    const darkTheme = "dark-theme"
    const iconTheme = "uil-sun"

    const selectedTheme = localStorage.getItem("selected-theme")
    const selectedIcon = localStorage.getItem("selected-icon")

    const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? "dark" : "light")
    const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun")

    if (selectedTheme) {
      document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme)
      themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](iconTheme)
    }

    themeButton.addEventListener("click", () => {
      document.body.classList.toggle(darkTheme)
      themeButton.classList.toggle(iconTheme)

      localStorage.setItem("selected-theme", getCurrentTheme())
      localStorage.setItem("selected-icon", getCurrentIcon())
    })
  }
}

/* Initialize Swiper */
function initSwipers() {
  var swiper = new Swiper(".testimonial-container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      568: {
        slidesPerView: 2,
      },
    },
  })
}

/* Portfolio Gallery */
class PortfolioGallery {
  static init() {
    lightGallery(document.getElementById("portfolio-items"), {
      selector: ".portfolio-item",
      plugins: [lgZoom, lgThumbnail],
      zoom: true,
      thumbnail: true,
      animateThumb: true,
      zoomFromOrigin: true,
      allowMediaOverlap: true,
      toggleThumb: true,
    })
  }
}

/* Portfolio Filter */
class PortfolioFilter {
  static init() {
    const filterButtons = document.querySelectorAll(".portfolio-filter")
    const portfolioItems = document.querySelectorAll(".portfolio-item")

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter

        // Update active button
        filterButtons.forEach((btn) => btn.classList.remove("active"))
        button.classList.add("active")

        // Filter items
        portfolioItems.forEach((item) => {
          const category = item.dataset.category

          if (filter === "all" || category === filter) {
            item.style.display = "block"
            item.style.animation = "fadeInUp 0.6s ease forwards"
          } else {
            item.style.display = "none"
          }
        })
      })
    })
  }
}

// Add CSS animation keyframes
const style = document.createElement("style")
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`
document.head.appendChild(style)

/* Skills Section - Network Design */
class SkillsSection {
  static init() {
    this.initCategoryFilters()
    this.initNetworkConnections()
    this.initScrollAnimations()
    this.initHoverEffects()
  }

  static initCategoryFilters() {
    const categoryButtons = document.querySelectorAll(".skills-category")
    const skillNodes = document.querySelectorAll(".skill-node")

    categoryButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const category = button.dataset.category

        // Update active button
        categoryButtons.forEach((btn) => btn.classList.remove("active"))
        button.classList.add("active")

        // Filter skill nodes
        skillNodes.forEach((node, index) => {
          const nodeCategory = node.dataset.category

          if (category === "all" || nodeCategory === category) {
            node.style.display = "flex"
            node.style.opacity = "1"
            node.style.transform = "translateY(0)"
            node.style.animation = `skillNodeEnter 0.6s ease forwards ${index * 0.1}s`
          } else {
            node.style.display = "none"
          }
        })

        // Redraw connections after filtering
        setTimeout(() => this.drawConnections(), 300)
      })
    })
  }

  static initNetworkConnections() {
    const canvas = document.getElementById("skillsCanvas")
    if (!canvas) return

    this.canvas = canvas
    this.ctx = canvas.getContext("2d")
    this.connections = []

    // Set canvas size
    this.resizeCanvas()
    window.addEventListener("resize", () => this.resizeCanvas())

    // Draw initial connections
    setTimeout(() => this.drawConnections(), 1000)
  }

  static resizeCanvas() {
    const container = this.canvas.parentElement
    this.canvas.width = container.offsetWidth
    this.canvas.height = container.offsetHeight
  }

  static drawConnections() {
    if (!this.ctx) return

    const skillNodes = document.querySelectorAll(".skill-node:not([style*='display: none'])")
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    const nodePositions = Array.from(skillNodes).map((node) => {
      const rect = node.getBoundingClientRect()
      const containerRect = this.canvas.getBoundingClientRect()
      return {
        x: rect.left - containerRect.left + rect.width / 2,
        y: rect.top - containerRect.top + rect.height / 2,
        category: node.dataset.category,
        skill: node.dataset.skill,
      }
    })

    // Define skill relationships
    const relationships = {
      react: ["javascript", "html", "css"],
      javascript: ["nodejs", "typescript"],
      nodejs: ["mongodb", "docker"],
      figma: ["ux", "photoshop"],
      git: ["docker", "aws"],
      typescript: ["react", "nodejs"],
    }

    // Draw connections
    nodePositions.forEach((node1) => {
      const relatedSkills = relationships[node1.skill] || []

      relatedSkills.forEach((relatedSkill) => {
        const node2 = nodePositions.find((n) => n.skill === relatedSkill)
        if (node2) {
          this.drawConnection(node1, node2)
        }
      })
    })
  }

  static drawConnection(node1, node2) {
    this.ctx.beginPath()
    this.ctx.moveTo(node1.x, node1.y)
    this.ctx.lineTo(node2.x, node2.y)
    this.ctx.strokeStyle = "rgba(186, 26, 141, 0.2)"
    this.ctx.lineWidth = 1
    this.ctx.stroke()
  }

  static initScrollAnimations() {
    const skillNodes = document.querySelectorAll(".skill-node")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = "1"
              entry.target.style.transform = "translateY(0)"
            }, index * 100)
          }
        })
      },
      { threshold: 0.1 },
    )

    skillNodes.forEach((node) => {
      node.style.opacity = "0"
      node.style.transform = "translateY(30px)"
      node.style.transition = "opacity 0.6s ease, transform 0.6s ease"
      observer.observe(node)
    })
  }

  static initHoverEffects() {
    const skillNodes = document.querySelectorAll(".skill-node")

    skillNodes.forEach((node) => {
      node.addEventListener("mouseenter", () => {
        this.highlightConnections(node.dataset.skill)
      })

      node.addEventListener("mouseleave", () => {
        this.resetConnections()
      })
    })
  }

  static highlightConnections(skill) {
    const relationships = {
      react: ["javascript", "html", "css"],
      javascript: ["nodejs", "typescript"],
      nodejs: ["mongodb", "docker"],
      figma: ["ux", "photoshop"],
      git: ["docker", "aws"],
      typescript: ["react", "nodejs"],
    }

    const relatedSkills = relationships[skill] || []
    const allSkillNodes = document.querySelectorAll(".skill-node")

    allSkillNodes.forEach((node) => {
      const nodeSkill = node.dataset.skill
      if (nodeSkill === skill || relatedSkills.includes(nodeSkill)) {
        node.style.transform = "translateY(-8px) scale(1.05)"
        node.style.boxShadow = "0 12px 40px rgba(186, 26, 141, 0.3)"
      } else {
        node.style.opacity = "0.5"
      }
    })
  }

  static resetConnections() {
    const allSkillNodes = document.querySelectorAll(".skill-node")
    allSkillNodes.forEach((node) => {
      node.style.transform = ""
      node.style.boxShadow = ""
      node.style.opacity = ""
    })
  }
}

/* Initialize All Components */
document.addEventListener("DOMContentLoaded", () => {
  Navigation.init()
  SkillsAccordion.init()
  QualificationTabs.init()
  ServicesModal.init()
  ScrollHandlers.init()
  ThemeManager.init()
  initSwipers()
  PortfolioGallery.init()
  PortfolioFilter.init()
  SkillsSection.init() // Add this line

  // About section animation
  const aboutImage = document.querySelector(".about-img")
  const aboutBoxes = document.querySelectorAll(".about-box")

  if (aboutImage) {
    aboutImage.style.animation = "fadeIn 1s ease-in-out"
  }

  if (aboutBoxes.length) {
    aboutBoxes.forEach((box, index) => {
      box.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.2}s`
      box.style.opacity = "0"
    })
  }

  if (!document.querySelector("style#about-animations")) {
    const styleEl = document.createElement("style")
    styleEl.id = "about-animations"
    styleEl.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `
    document.head.appendChild(styleEl)
  }
})

import Swiper from "swiper/bundle"
import lightGallery from "lightgallery"
import lgZoom from "lightgallery/plugins/zoom"
import lgThumbnail from "lightgallery/plugins/thumbnail"
