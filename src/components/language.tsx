import { useState, useRef, useEffect } from 'react'
import { useAppStore } from '~/store'
import { GrLanguage } from 'react-icons/gr'
export default function Language() {
  const { language, setLanguage } = useAppStore()
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (lang: 'en' | 'vi') => {
    setLanguage(lang)
    setOpen(false)
  }

  return (
    <div className='relative flex align-middle text-left' ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className='flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700'
      >
        <GrLanguage className='h-5 w-5' />
        <span className='capitalize'>{language}</span>
      </button>

      {open && (
        <div className='absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded shadow-lg ring-1 ring-black/5 z-50'>
          <button
            onClick={() => handleSelect('en')}
            className={`block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${
              language === 'en' ? 'font-bold' : ''
            }`}
          >
            🇺🇸 English
          </button>
          <button
            onClick={() => handleSelect('vi')}
            className={`block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${
              language === 'vi' ? 'font-bold' : ''
            }`}
          >
            🇻🇳 Tiếng Việt
          </button>
        </div>
      )}
    </div>
  )
}
