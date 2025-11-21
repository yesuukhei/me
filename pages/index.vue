<template>
  <div
    class="bg-gray-50 dark:bg-[#0a0e27] min-h-screen transition-colors duration-300 dot-pattern"
  >
    <!-- Navigation -->
    <nav
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      :class="[
        isScrolled
          ? 'bg-white/80 dark:bg-[#0a0e27]/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent',
      ]"
    >
      <div class="container-custom py-4 flex justify-between items-center">
        <a href="#home" class="text-2xl font-bold font-mono group">
          <span class="text-gray-900 dark:text-white">&lt;</span>
          <span class="text-gradient">Yesuukhei</span>
          <span class="text-gray-900 dark:text-white">/&gt;</span>
        </a>

        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors relative group"
          >
            {{ item.label }}
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
        </div>

        <button
          @click="toggleDarkMode"
          class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle dark mode"
        >
          <span v-if="isDark" class="text-yellow-400">☀️</span>
          <span v-else class="text-gray-600">🌙</span>
        </button>
      </div>
    </nav>

    <main>
      <!-- Hero Section -->
      <section
        id="home"
        class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        <!-- Background Cover Image with Overlay -->
        <div class="absolute inset-0 z-0">
          <!-- auto slide cover images -->
          <transition name="hero-fade" mode="out-in">
            <div :key="coverImages[currentImageIndex]" class="w-full h-full">
              <img
                :src="coverImages[currentImageIndex]"
                alt="Cover"
                class="w-full h-full object-cover object-center"
              />
            </div>
          </transition>
          <div
            class="absolute inset-0 bg-gradient-to-b from-gray-50/40 via-gray-50/80 to-gray-50 dark:from-[#050814]/30 dark:via-[#050814]/80 dark:to-[#050814] backdrop-blur-[2px] hero-overlay-animation"
          ></div>
        </div>

        <!-- Content -->
        <div class="container-custom relative z-10 py-20">
          <div class="max-w-4xl mx-auto text-center">
            <!-- Profile Image -->
            <div
              class="w-40 h-40 md:w-40 md:h-40 mx-auto mb-8 animate-scale-in"
            >
              <div
                class="w-full h-full rounded-full p-1 image-ring animate-float"
              >
                <img
                  :src="profileImage"
                  alt="Yesuukhei"
                  class="w-full h-full rounded-full object-cover border-4 border-white dark:border-[#0a0e27] shadow-2xl"
                />
              </div>
            </div>

            <!-- Title -->
            <h1
              class="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-slide-up"
              style="animation-delay: 0.2s; opacity: 0"
            >
              <span class="text-gray-900 dark:text-white">I am </span>
              <span class="text-gradient">Yesuukhei</span>
            </h1>

            <!-- Animated role text -->
            <div
              class="animate-slide-up h-8 mb-8"
              style="animation-delay: 0.4s; opacity: 0"
            >
              <p
                class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium"
              >
                <span class="mr-2">Building</span>
                <span class="text-primary-600 dark:text-primary-400 relative">
                  {{ displayedRole }}
                  <span
                    class="absolute -right-1 top-0 bottom-0 w-0.5 bg-primary-600 dark:bg-primary-400 animate-pulse"
                  ></span>
                </span>
              </p>
            </div>

            <p
              class="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up"
              style="animation-delay: 0.6s; opacity: 0"
            >
              Hey, I’m a 4th-year software engineering student and full-stack
              dev at
              <a
                href="https://lera.mn"
                target="_blank"
                class="text-primary-600 dark:text-primary-400 hover:underline"
                >lera.mn</a
              >
              for the past two years. I understand how businesses operate and
              get paid for delivering results. I’m new to freelancing, but I’m
              confident I can help with your project. I’m based in Mongolia—if
              you’ve seen ‘Physical: 100 Asia,’ you’ve seen the grit we bring.
              😌
            </p>

            <!-- Action Buttons -->
            <div
              class="flex flex-wrap gap-4 justify-center animate-slide-up"
              style="animation-delay: 0.8s; opacity: 0"
            >
              <a
                href="#projects"
                class="btn-modern group flex items-center gap-2"
              >
                View Projects
                <svg
                  class="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                class="px-8 py-3 bg-white dark:bg-[#1e2b3d] text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary-500 dark:hover:border-primary-500"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>

        <!-- Scroll Down Indicator -->
        <div
          class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow cursor-pointer"
          @click="scrollTo('#about')"
        >
          <svg
            class="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="container-custom py-24 scroll-mt-20">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16 scroll-reveal">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">
              <span class="text-gradient">About Me</span>
            </h2>
            <div class="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
          </div>

          <div
            class="glass rounded-2xl p-8 md:p-10 shadow-xl border border-white/20 dark:border-white/10 scroll-reveal relative overflow-hidden"
          >
            <div
              class="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl"
            ></div>
            <div
              class="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"
            ></div>

            <div class="relative z-10 space-y-6 text-lg">
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                Hello! I'm
                <span
                  class="font-semibold text-primary-600 dark:text-primary-400"
                  >Yesuukhei</span
                >, and I love bringing ideas to life through code.
              </p>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                I am a Software Engineer with a strong focus on building
                high-performance
                <strong class="font-medium text-gray-900 dark:text-white"
                  >web and mobile applications</strong
                >. Currently, I work as a Full Stack Developer at
                <a
                  href="https://lera.mn"
                  target="_blank"
                  class="text-primary-600 dark:text-primary-400 hover:underline"
                  >lera.mn</a
                >, where I architect and build modular enterprise solutions.
              </p>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                I am now opening my schedule for
                <strong class="font-medium text-gray-900 dark:text-white"
                  >freelance projects</strong
                >. I bring the same level of professional quality, reliability,
                and technical expertise from my full-time work to your personal
                or business projects. If you are looking for a partner to help
                you launch or scale your digital product, I'm ready to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="container-custom py-24 scroll-mt-20">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16 scroll-reveal">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">
              <span class="text-gradient">Featured Projects</span>
            </h2>
            <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A selection of projects I've worked on, demonstrating my expertise
              in web and mobile development.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="(project, index) in projects"
              :key="project.title"
              class="group card-gradient-border h-full scroll-reveal hover-lift"
            >
              <div
                class="p-6 h-full flex flex-col relative z-10 bg-white dark:bg-[#121829] rounded-[0.7rem]"
              >
                <!-- Project Header -->
                <div class="flex justify-between items-start mb-4">
                  <div
                    class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  >
                    <img
                      :src="project.image"
                      alt="Project "
                      class="w-12 h-12 object-cover rounded-xl"
                    />
                  </div>
                  <div class="flex gap-3">
                    <a
                      v-if="project.demo && project.key === '1'"
                      :href="project.demo"
                      target="_blank"
                      class="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                      title="Live Demo"
                    >
                      <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                    <!-- android  -->
                    <a
                      v-if="project.demo && project.key === '2'"
                      :href="project.demo"
                      target="_blank"
                      class="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                      title="Live Demo"
                    >
                      <img
                        src="/images/android.svg"
                        alt="Android"
                        class="w-10 h-10 object-cover rounded-xl"
                      />
                    </a>
                    <!-- apple -->
                    <a
                      v-if="project.demo2 && project.key === '2'"
                      :href="project.demo2"
                      target="_blank"
                      class="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                      title="Live Demo"
                    >
                      <img
                        src="/images/apple.png"
                        alt="Apple"
                        class="w-10 h-10 object-cover rounded-xl"
                      />
                    </a>
                  </div>
                </div>

                <h3
                  class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors"
                >
                  {{ project.title }}
                </h3>
                <p
                  class="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed flex-grow"
                >
                  {{ project.description }}
                </p>

                <div class="flex flex-wrap gap-2 mt-auto">
                  <span
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section id="skills" class="container-custom py-24 scroll-mt-20 relative">
        <div class="max-w-6xl mx-auto relative z-10">
          <div class="text-center mb-16 scroll-reveal">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">
              <span class="text-gradient">Technical Skills</span>
            </h2>
            <p class="text-gray-600 dark:text-gray-400">
              A comprehensive list of technologies and tools I work with.
            </p>
          </div>

          <div
            v-for="category in skillCategories"
            :key="category.name"
            class="mb-16 scroll-reveal"
          >
            <div class="flex items-center gap-4 mb-8">
              <div
                class="h-px flex-grow bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"
              ></div>
              <h3
                class="text-2xl font-bold text-gray-900 dark:text-white px-4 py-1 rounded-lg bg-gray-100 dark:bg-[#1e2b3d]"
              >
                {{ category.name }}
              </h3>
              <div
                class="h-px flex-grow bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"
              ></div>
            </div>

            <div
              class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            >
              <div
                v-for="skill in category.skills"
                :key="skill.name"
                class="group bg-white dark:bg-[#1e2b3d] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-primary-500/30 dark:hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div class="flex flex-col items-center text-center">
                  <div
                    class="h-12 w-12 mb-3 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 filter drop-shadow-sm flex items-center justify-center"
                  >
                    <img
                      v-if="skill.icon.startsWith('/')"
                      :src="skill.icon"
                      :alt="skill.name"
                      class="w-full h-full object-contain"
                    />
                    <span v-else class="text-4xl">{{ skill.icon }}</span>
                  </div>
                  <h4
                    class="font-semibold text-gray-900 dark:text-white text-sm"
                  >
                    {{ skill.name }}
                  </h4>
                  <div
                    class="mt-2 h-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                  >
                    <div
                      class="h-full bg-primary-500 transition-all duration-500 group-hover:bg-primary-400"
                      :style="{
                        width:
                          skill.level === 'Advanced'
                            ? '90%'
                            : skill.level === 'Intermediate'
                            ? '65%'
                            : '40%',
                      }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="container-custom py-24 scroll-mt-20">
        <div class="max-w-4xl mx-auto">
          <div
            class="glass rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 dark:border-white/10 text-center relative overflow-hidden"
          >
            <!-- Decorativ gradient background -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-purple-500/5 pointer-events-none"
            ></div>

            <h2 class="text-3xl md:text-5xl font-bold mb-6 relative z-10">
              <span class="text-gradient">Let's Work Together</span>
            </h2>
            <p
              class="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed relative z-10"
            >
              I'm currently available for freelance work and open to new
              opportunities. If you have a project that needs some creative
              touch, or just want to say hi, my inbox is always open!
            </p>

            <div class="flex flex-col items-center gap-6 relative z-10">
              <a
                href="mailto:yesuukhei1028@gmail.com"
                class="btn-modern flex items-center gap-3 text-lg px-10 py-4"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Say Hello
              </a>

              <div class="flex gap-6 mt-8">
                <a
                  v-for="social in socialLinks"
                  :key="social.name"
                  :href="social.url"
                  target="_blank"
                  class="p-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full hover:bg-white dark:hover:bg-[#121829] hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  :aria-label="social.name"
                >
                  <img :src="social.image" class="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAB - Scroll to Top -->
      <button
        v-show="showFab"
        @click="scrollToTop"
        class="fixed bottom-6 right-6 w-12 h-12 bg-primary-600 text-white rounded-full shadow-lg shadow-primary-600/30 hover:bg-primary-700 transition-all duration-300 flex items-center justify-center active:scale-95 z-50 hover:-translate-y-1"
        aria-label="Scroll to top"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>

      <!-- Footer -->
      <footer
        class="container-custom py-8 border-t border-gray-200 dark:border-[#1e2b3d]/50 mt-12"
      >
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p class="text-gray-600 dark:text-gray-400 text-sm">
            © {{ new Date().getFullYear() }} Yesuukhei. All rights reserved.
          </p>
          <div
            class="flex gap-6 text-sm font-medium text-gray-500 dark:text-gray-400"
          >
            <a href="#" class="hover:text-primary-500 transition-colors"
              >Privacy Policy</a
            >
            <a href="#" class="hover:text-primary-500 transition-colors"
              >Terms of Service</a
            >
          </div>
        </div>
      </footer>
    </main>
  </div>
</template>

<script setup lang="ts">
import profileImage from "~/assets/images/me.jpg";
import coverImage from "~/assets/images/cover.png";
import { ref, onMounted, onUnmounted } from "vue";

useHead({
  title: "Yesuukhei | Portfolio",
  meta: [
    {
      name: "description",
      content: "Full Stack Developer specializing in modern web technologies.",
    },
  ],
});

// Initialize dark mode (Midnight theme)
const { isDark, toggleDarkMode } = useDarkMode();

const coverImages = [
  "/images/mgl/1.jpg",
  "/images/mgl/2.jpg",
  "/images/mgl/3.jpg",
  "/images/mgl/4.jpg",
  "/images/mgl/5.jpg",
  "/images/mgl/6.jpg",
  "/images/mgl/7.jpg",
  "/images/mgl/8.jpg",
  "/images/mgl/9.jpg",
  "/images/mgl/10.jpg",
];

// Navigation Items
const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

// State
const showFab = ref(false);
const isScrolled = ref(false);
const displayedRole = ref("");
const currentImageIndex = ref(0);
let typingTimeout: ReturnType<typeof setTimeout> | null = null;
let coverInterval: ReturnType<typeof setInterval> | null = null;

// Typing animation configuration
const roles = ["Full Stack Developer", "UI/UX Enthusiast", "Problem Solver"];
let currentRoleIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

// Methods
const typeRole = () => {
  const currentRole = roles[currentRoleIndex];

  if (isDeleting) {
    displayedRole.value = currentRole.substring(0, currentCharIndex - 1);
    currentCharIndex--;

    if (currentCharIndex === 0) {
      isDeleting = false;
      currentRoleIndex = (currentRoleIndex + 1) % roles.length;
      typingTimeout = setTimeout(typeRole, 500);
      return;
    }
  } else {
    displayedRole.value = currentRole.substring(0, currentCharIndex + 1);
    currentCharIndex++;

    if (currentCharIndex === currentRole.length) {
      isDeleting = true;
      typingTimeout = setTimeout(typeRole, 2000);
      return;
    }
  }

  typingTimeout = setTimeout(typeRole, isDeleting ? 50 : 100);
};

const setupScrollReveal = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".scroll-reveal").forEach((el) => {
    observer.observe(el);
  });
};

const handleScroll = () => {
  const scrollY = window.scrollY;
  showFab.value = scrollY > 300;
  isScrolled.value = scrollY > 50;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const scrollTo = (selector: string) => {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const startCoverSlideshow = () => {
  if (coverInterval) {
    clearInterval(coverInterval);
  }
  coverInterval = setInterval(() => {
    currentImageIndex.value =
      (currentImageIndex.value + 1) % coverImages.length;
  }, 5000);
};

// Lifecycle hooks
onMounted(() => {
  const saved = localStorage.getItem("darkMode");
  if (saved === null && !isDark.value) {
    toggleDarkMode();
  }

  typeRole();
  setupScrollReveal();
  window.addEventListener("scroll", handleScroll);
  startCoverSlideshow();

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href")!);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});

onUnmounted(() => {
  if (typingTimeout) clearTimeout(typingTimeout);
  window.removeEventListener("scroll", handleScroll);
  if (coverInterval) clearInterval(coverInterval);
});

// Projects data
const projects = [
  {
    title: "Lera.mn (Web)",
    key: "1",
    image: "/images/skills/lera_icon.png",
    description:
      "A modular SaaS platform built for Mongolian businesses. Companies can subscribe to individual modules like communication, training, and knowledge management. I worked on the web app using modern tools to make it fast, clean, and easy to scale.",
    technologies: ["Nuxt.js", "TypeScript", "Vuetify", "Node.js", "MongoDB"],
    github: "https://github.com/leramn",
    demo: "https://lera.mn",
  },
  {
    title: "Lera.mn (Mobile)",
    key: "2",
    image: "/images/skills/lera_icon.png",
    description:
      "A cross-platform mobile app that extends the Lera.mn experience to smartphones. Users can access modules, receive real-time updates, manage tasks, and stay connected with their team through a simple, fast, and responsive interface.",
    technologies: ["Flutter", "Dart", "Firebase", "Express.js"],
    github: "https://github.com/leramn/leramn-mobile",
    demo: "https://play.google.com/store/apps/details?id=com.digitalx.officepro",
    demo2: "https://apps.apple.com/us/app/lera-mn/id6743441216",
  },
];

// Skills data
const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "Vue.js", icon: "/images/skills/vue.svg", level: "Advanced" },
      {
        name: "React",
        icon: "/images/skills/react.svg",
        level: "Intermediate",
      },
      { name: "Nuxt.js", icon: "/images/skills/nuxt.svg", level: "Advanced" },
      {
        name: "TypeScript",
        icon: "/images/skills/typescript.svg",
        level: "Intermediate",
      },
      {
        name: "Tailwind",
        icon: "/images/skills/tailwind.svg",
        level: "Advanced",
      },
      {
        name: "Flutter",
        icon: "/images/skills/flutter.svg",
        level: "Advanced",
      },
    ],
  },
  {
    name: "Backend",
    skills: [
      {
        name: "Express",
        icon: "/images/skills/express.png",
        level: "Advanced",
      },
      {
        name: "MongoDB",
        icon: "/images/skills/mongodb.svg",
        level: "Advanced",
      },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", icon: "/images/skills/git.svg", level: "Advanced" },
      { name: "Cursor", icon: "/images/skills/cursor.png", level: "Advanced" },
      {
        name: "Figma",
        icon: "/images/skills/figma.svg",
        level: "Intermediate",
      },
    ],
  },
];

// Social links
const socialLinks = [
  {
    name: "Gitlab",
    image: "/images/skills/gitlab.png",
    url: "https://gitlab.com/yesuukhei",
  },
  {
    name: "Facebook",
    image: "/images/skills/facebook.avif",
    url: "https://www.facebook.com/es.hej.g.158441/",
  },
  {
    name: "Discord",
    image: "/images/skills/discord.png",
    url: "https://discord.com/users/1031549653621153813",
  },
];
</script>

<style scoped>
/* Scoped overrides if needed, most styling moved to utility classes in main.css and tailwind config */

.hero-cover-animation {
  animation: heroPan 5s ease-in-out infinite alternate;
  transform-origin: center;
}

@keyframes heroPan {
  0% {
    transform: scale(1) translate3d(0, 0, 0);
  }
  100% {
    transform: scale(1.12) translate3d(20px, -15px, 0);
  }
}

.hero-overlay-animation {
  animation: overlayPulse 5s ease-in-out infinite alternate;
}

@keyframes overlayPulse {
  0% {
    opacity: 0.95;
  }
  100% {
    opacity: 0.95;
  }
}

.hero-fade-enter-active,
.hero-fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease-in-out;
}

.hero-fade-enter-from,
.hero-fade-leave-to {
  opacity: 0;
  transform: scale(1.04);
}
</style>
