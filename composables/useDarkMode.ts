export const useDarkMode = () => {
  const isDark = useState<boolean>('darkMode', () => false)

  const toggleDarkMode = () => {
    isDark.value = !isDark.value
    updateDarkModeClass()
    saveDarkModePreference()
  }

  const updateDarkModeClass = () => {
    if (process.client) {
      if (isDark.value) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }

  const saveDarkModePreference = () => {
    if (process.client) {
      localStorage.setItem('darkMode', String(isDark.value))
    }
  }

  const loadDarkModePreference = () => {
    if (process.client) {
      const saved = localStorage.getItem('darkMode')
      if (saved !== null) {
        isDark.value = saved === 'true'
      } else {
        // Check system preference
        isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
      }
      updateDarkModeClass()
    }
  }

  // Initialize on mount
  onMounted(() => {
    loadDarkModePreference()
  })

  return {
    isDark: computed(() => isDark.value),
    toggleDarkMode,
  }
}

