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
                class="w-full h-full object-cover object-center hero-cover-animation"
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
              Full-stack developer with 2 years building SaaS solutions at
              <a
                href="https://lera.mn"
                target="_blank"
                class="text-primary-600 dark:text-primary-400 hover:underline"
                >lera.mn</a
              >. I work across web and mobile—Nuxt.js, Vue.js, Flutter, Express,
              MongoDB. Currently finishing my software engineering degree and
              available for freelance work. Based in Mongolia.
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
                I'm
                <span
                  class="font-semibold text-primary-600 dark:text-primary-400"
                  >Yesuukhei</span
                >, a full-stack developer with
                <strong class="font-medium text-gray-900 dark:text-white"
                  >2 years of hands-on experience</strong
                >
                building modular SaaS solutions at
                <a
                  href="https://lera.mn"
                  target="_blank"
                  class="text-primary-600 dark:text-primary-400 hover:underline"
                  >lera.mn</a
                >. I work across the entire stack—from frontend
                <strong class="font-medium text-gray-900 dark:text-white"
                  >(Nuxt.js, Vue.js, Flutter)</strong
                >
                to backend
                <strong class="font-medium text-gray-900 dark:text-white"
                  >(Express, MongoDB)</strong
                >—shipping features that go from concept to production in both
                web and mobile.
              </p>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                I've built employee engagement modules like
                <strong class="font-medium text-gray-900 dark:text-white"
                  >mood tracking</strong
                >
                (used by 60+ company users),
                <strong class="font-medium text-gray-900 dark:text-white"
                  >5S audits</strong
                >, and
                <strong class="font-medium text-gray-900 dark:text-white"
                  >kaizen idea management systems</strong
                >, while continuously improving UX across the platform.
              </p>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                Currently finishing my software engineering degree and now
                available for
                <strong class="font-medium text-gray-900 dark:text-white"
                  >freelance work</strong
                >. I deliver complete solutions, not just code.
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
              <span class="text-gradient">What I've Built</span>
            </h2>
            <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Real production work—building modules for a SaaS platform used
              daily by companies and their employees.
            </p>
          </div>

          <!-- Project Overview -->
          <div class="mb-12 scroll-reveal">
            <div class="group card-gradient-border">
              <div
                class="p-6 md:p-8 bg-white dark:bg-[#121829] rounded-[0.7rem] relative z-10"
              >
                <!-- Header Section -->
                <div class="flex flex-col md:flex-row items-start gap-6 mb-6">
                  <div
                    class="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0"
                  >
                    <img
                      :src="project.image"
                      alt="Project"
                      class="w-14 h-14 object-cover rounded-xl"
                    />
                  </div>
                  <div class="flex-1 w-full">
                    <div class="flex items-start justify-between gap-4 mb-3">
                      <h3
                        class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white"
                      >
                        {{ project.title }}
                      </h3>
                      <div class="flex gap-3 shrink-0">
                        <!-- Web Link -->
                        <a
                          v-if="project.links?.web"
                          :href="project.links.web"
                          target="_blank"
                          class="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                          title="Web"
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
                        <!-- Android Link -->
                        <a
                          v-if="project.links?.android"
                          :href="project.links.android"
                          target="_blank"
                          class="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                          title="Android App"
                        >
                          <img
                            src="/images/android.svg"
                            alt="Android"
                            class="w-10 h-10 object-cover rounded-xl"
                          />
                        </a>
                        <!-- Apple Link -->
                        <a
                          v-if="project.links?.ios"
                          :href="project.links.ios"
                          target="_blank"
                          class="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                          title="iOS App"
                        >
                          <img
                            src="/images/apple.png"
                            alt="Apple"
                            class="w-10 h-10 object-cover rounded-xl"
                          />
                        </a>
                      </div>
                    </div>
                    <p
                      class="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-4 whitespace-pre-line"
                    >
                      {{ project.overview }}
                    </p>
                    <div class="flex flex-wrap gap-2">
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

                <!-- Image Gallery -->
                <div class="space-y-6">
                  <!-- Web Images -->
                  <div v-if="project.photos.web.length > 0">
                    <h4
                      class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2"
                    >
                      <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Web Platform
                    </h4>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div
                        v-for="(photo, idx) in project.photos.web"
                        :key="`web-${idx}`"
                        class="group relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 aspect-video cursor-pointer"
                        @click="
                          openLightbox(
                            photo,
                            getAllProjectImages(),
                            getAllProjectImages().indexOf(photo)
                          )
                        "
                      >
                        <img
                          :src="photo"
                          :alt="`Web screenshot ${idx + 1}`"
                          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div
                          class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center"
                        >
                          <svg
                            class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Mobile Images -->
                  <div v-if="project.photos.mobile.length > 0">
                    <h4
                      class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2"
                    >
                      <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                      Mobile App
                    </h4>
                    <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
                      <div
                        v-for="(photo, idx) in project.photos.mobile"
                        :key="`mobile-${idx}`"
                        class="group relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 aspect-[9/16] max-w-[200px] mx-auto cursor-pointer"
                        @click="
                          openLightbox(
                            photo,
                            getAllProjectImages(),
                            getAllProjectImages().indexOf(photo)
                          )
                        "
                      >
                        <img
                          :src="photo"
                          :alt="`Mobile screenshot ${idx + 1}`"
                          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div
                          class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center"
                        >
                          <svg
                            class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="(module, index) in project.modules"
              :key="module.title"
              class="group card-gradient-border h-full scroll-reveal hover-lift"
            >
              <div
                class="p-6 h-full flex flex-col relative z-10 bg-white dark:bg-[#121829] rounded-[0.7rem]"
              >
                <!-- Module Header -->
                <div class="flex justify-between items-start mb-4">
                  <div
                    class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  >
                    <img
                      :src="module.image"
                      alt="Module"
                      class="w-12 h-12 object-cover rounded-xl"
                    />
                  </div>
                </div>

                <h3
                  class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors"
                >
                  {{ module.title }}
                </h3>
                <p
                  class="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed"
                >
                  {{ module.description }}
                </p>

                <!-- Module Images -->
                <div class="mt-auto space-y-3">
                  <!-- Web Images -->
                  <div v-if="module.photos.web.length > 0">
                    <div class="flex items-center gap-2 mb-2">
                      <svg
                        class="w-3 h-3 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span class="text-xs text-gray-500 dark:text-gray-400"
                        >Web</span
                      >
                    </div>
                    <div class="grid grid-cols-2 gap-2">
                      <div
                        v-for="(photo, idx) in module.photos.web.slice(0, 2)"
                        :key="`web-${idx}`"
                        class="relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 aspect-video cursor-pointer"
                        @click="
                          openLightbox(
                            photo,
                            getModuleImages(module),
                            getModuleImages(module).indexOf(photo)
                          )
                        "
                      >
                        <img
                          :src="photo"
                          :alt="`${module.title} web ${idx + 1}`"
                          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div
                          class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center"
                        >
                          <svg
                            class="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Mobile Images -->
                  <div v-if="module.photos.mobile.length > 0">
                    <div class="flex items-center gap-2 mb-2">
                      <svg
                        class="w-3 h-3 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                      <span class="text-xs text-gray-500 dark:text-gray-400"
                        >Mobile</span
                      >
                    </div>
                    <div class="grid grid-cols-3 gap-2">
                      <div
                        v-for="(photo, idx) in module.photos.mobile.slice(0, 3)"
                        :key="`mobile-${idx}`"
                        class="relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 aspect-[9/16] cursor-pointer"
                        @click="
                          openLightbox(
                            photo,
                            getModuleImages(module),
                            getModuleImages(module).indexOf(photo)
                          )
                        "
                      >
                        <img
                          :src="photo"
                          :alt="`${module.title} mobile ${idx + 1}`"
                          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div
                          class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center"
                        >
                          <svg
                            class="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
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
            <!-- Decorative gradient background -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-purple-500/5 pointer-events-none"
            ></div>

            <h2 class="text-3xl md:text-5xl font-bold mb-6 relative z-10">
              <span class="text-gradient">Let's Build Something</span>
            </h2>
            <p
              class="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed relative z-10"
            >
              Available for freelance projects. Need a web or mobile app built?
              Let's talk about your project.
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
                Get in Touch
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

      <!-- Image Lightbox Modal -->
      <transition name="lightbox-fade">
        <div
          v-if="lightboxImage"
          class="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          @click.self="closeLightbox"
        >
          <!-- Close Button -->
          <button
            @click="closeLightbox"
            class="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
            aria-label="Close"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <!-- Previous Button -->
          <button
            v-if="lightboxImages.length > 1"
            @click="previousImage"
            class="absolute left-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
            aria-label="Previous image"
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <!-- Next Button -->
          <button
            v-if="lightboxImages.length > 1"
            @click="nextImage"
            class="absolute right-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
            aria-label="Next image"
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <!-- Image Container -->
          <div class="relative max-w-7xl max-h-[90vh] mx-4">
            <img
              :src="lightboxImage"
              :alt="`Image ${lightboxCurrentIndex + 1}`"
              class="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <!-- Image Counter -->
            <div
              v-if="lightboxImages.length > 1"
              class="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/50 rounded-full text-white text-sm"
            >
              {{ lightboxCurrentIndex + 1 }} / {{ lightboxImages.length }}
            </div>
          </div>
        </div>
      </transition>

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
import { ref, onMounted, onUnmounted } from "vue";
import { useDarkMode } from "../composables/useDarkMode";

const profileImage = "/images/me.jpg";

// useHead is auto-imported by Nuxt
// @ts-expect-error - Nuxt auto-import (works at runtime)
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
const lightboxImage = ref<string | null>(null);
const lightboxImages = ref<string[]>([]);
const lightboxCurrentIndex = ref(0);
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
  window.addEventListener("keydown", handleKeydown);
  startCoverSlideshow();

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      if (href && href !== "#" && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });
});

onUnmounted(() => {
  if (typingTimeout) clearTimeout(typingTimeout);
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("keydown", handleKeydown);
  if (coverInterval) clearInterval(coverInterval);
  document.body.style.overflow = "";
});

type ProjectModule = {
  title: string;
  image: string;
  description: string;
  photos: {
    web: string[];
    mobile: string[];
  };
};

type Project = {
  title: string;
  image: string;
  overview: string;
  technologies: string[];
  links: {
    web?: string;
    android?: string;
    ios?: string;
  };
  modules: ProjectModule[];
  photos: {
    web: string[];
    mobile: string[];
  };
};

// Project data (single project with modules)
const project: Project = {
  title: "Lera.mn - Modular SaaS Platform",
  image: "/images/skills/lera_icon.png",
  overview: `Full Stack Developer (2 years, 2023 - Present).
Developed end-to-end features for an enterprise SaaS platform, handling everything from database design to mobile deployment.
Built cross-platform modules used by multiple companies for employee engagement and operational efficiency.`,
  technologies: [
    "Nuxt.js",
    "Vue.js",
    "Vuetify",
    "Flutter",
    "Express.js",
    "MongoDB",
  ],
  photos: {
    web: [
      "/images/web images/home.png",
      "/images/web images/dx.png",
      "/images/web images/echvod.png",
      "/images/web images/positive.png",
    ],
    mobile: [
      "/images/mobile/login.png",
      "/images/mobile/company_selection.png",
      "/images/mobile/echvod.png",
      "/images/mobile/menu.png",
      "/images/mobile/menu2.png",
    ],
  },
  links: {
    web: "https://lera.mn",
    android:
      "https://play.google.com/store/apps/details?id=com.digitalx.officepro",
    ios: "https://apps.apple.com/us/app/lera-mn/id6743441216",
  },
  modules: [
    {
      title: "Mood Tracker",
      image: "/images/skills/lera_icon.png",
      description:
        "Employee mood tracking with insights and trends. 300+ active users across companies.",
      photos: {
        web: ["/images/web images/mood1.png", "/images/web images/mood2.png"],
        mobile: [
          "/images/mobile/mood.png",
          "/images/mobile/mood1.png",
          "/images/mobile/mood2.png",
        ],
      },
    },
    {
      title: "5S Audit",
      image: "/images/skills/lera_icon.png",
      description:
        "Lean 5S auditing with scoring, photos, and follow-ups to drive operational excellence.",
      photos: {
        web: ["/images/web images/5s.png"],
        mobile: ["/images/mobile/5s.png"],
      },
    },
    {
      title: "Kaizen System",
      image: "/images/skills/lera_icon.png",
      description:
        "Continuous improvement ideas submission, review, and tracking workflow to foster innovation.",
      photos: {
        web: ["/images/web images/kaizen.png"],
        mobile: ["/images/mobile/kaizen.png"],
      },
    },
    {
      title: "Time Tracking",
      image: "/images/skills/lera_icon.png",
      description:
        "Time tracking for employees to monitor their work hours and productivity.",
      photos: {
        web: ["/images/web images/time.png"],
        mobile: ["/images/mobile/time.png"],
      },
    },
  ],
};

// Lightbox functions
const getAllProjectImages = (): string[] => {
  return [...(project.photos.web || []), ...(project.photos.mobile || [])];
};

const getModuleImages = (module: ProjectModule): string[] => {
  return [...(module.photos.web || []), ...(module.photos.mobile || [])];
};

const openLightbox = (image: string, images: string[], index: number) => {
  lightboxImages.value = images;
  lightboxImage.value = image;
  lightboxCurrentIndex.value = index;
  document.body.style.overflow = "hidden";
};

const closeLightbox = () => {
  lightboxImage.value = null;
  lightboxImages.value = [];
  lightboxCurrentIndex.value = 0;
  document.body.style.overflow = "";
};

const nextImage = () => {
  if (lightboxCurrentIndex.value < lightboxImages.value.length - 1) {
    lightboxCurrentIndex.value++;
    lightboxImage.value = lightboxImages.value[lightboxCurrentIndex.value];
  } else {
    lightboxCurrentIndex.value = 0;
    lightboxImage.value = lightboxImages.value[0];
  }
};

const previousImage = () => {
  if (lightboxCurrentIndex.value > 0) {
    lightboxCurrentIndex.value--;
    lightboxImage.value = lightboxImages.value[lightboxCurrentIndex.value];
  } else {
    lightboxCurrentIndex.value = lightboxImages.value.length - 1;
    lightboxImage.value = lightboxImages.value[lightboxCurrentIndex.value];
  }
};

const handleKeydown = (e: KeyboardEvent) => {
  if (!lightboxImage.value) return;

  if (e.key === "Escape") {
    closeLightbox();
  } else if (e.key === "ArrowRight") {
    nextImage();
  } else if (e.key === "ArrowLeft") {
    previousImage();
  }
};

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

/* Lightbox transitions */
.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}
</style>
