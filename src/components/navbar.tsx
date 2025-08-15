import { useState, useRef, useEffect } from 'react'
import { LuSearch } from 'react-icons/lu'
import { menuItems } from '~/data/menuItems'
export default function Navbar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null) // dropdown hiện tại đang mở khi hover
  const [activeIndex, setActiveIndex] = useState<number>(0) // menu item đầu tiên active
  const [activeChildIndex, setActiveChildIndex] = useState<number>(0) // item con đầu tiên active
  const [isHoveringNav, setIsHoveringNav] = useState(false)
  const dropdownRefs = useRef<Array<HTMLUListElement | null>>([])

  // đo chiều cao dropdown để animation khi hover
  const [dropdownHeights, setDropdownHeights] = useState<number[]>([])
  useEffect(() => {
    const heights = dropdownRefs.current.map((ref) => (ref ? ref.scrollHeight : 0))
    setDropdownHeights(heights)
  }, [])

  return (
    <div
      onMouseEnter={() => setIsHoveringNav(true)}
      onMouseLeave={() => {
        setIsHoveringNav(false)
        setOpenIndex(null)
      }}
      className='flex items-center h-[133px]'
    >
      <nav className='bg-white text-black px-4 py-2 relative z-20 text-[22px] h-full w-full flex items-center'>
        <ul className='flex space-x-6 h-full'>
          {menuItems.map((item, index) => {
            const isActive = activeIndex === index
            const isOpen = openIndex === index

            return (
              <li
                key={index}
                className='relative me-[43px] h-full flex items-center'
                onMouseEnter={() => setOpenIndex(index)}
                onClick={() => setActiveIndex(index)}
              >
                <button
                  className={`relative transition-colors duration-500 cursor-pointer ${
                    isActive ? 'text-[var(--nav-selected-color)]' : ''
                  }`}
                >
                  {item.title}
                </button>

                {/* Underline */}
                <span
                  className='absolute left-1/2 -translate-x-1/2 h-px bg-[var(--nav-selected-color)] transition-all duration-500'
                  style={{
                    bottom: '20px',
                    width: isActive || isOpen ? '100%' : '0'
                  }}
                />

                {/* Dropdown */}
                {item.children.length > 0 && (
                  <ul
                    ref={(el) => {
                      dropdownRefs.current[index] = el
                    }}
                    className='absolute left-0 top-full w-max min-w-[200px] whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out'
                    style={{
                      height: isOpen ? `${dropdownHeights[index]}px` : '0px',
                      opacity: isOpen ? 1 : 0,
                      transform: isOpen ? 'translateY(0)' : 'translateY(-10px)'
                    }}
                  >
                    {item.children.map((child, childIndex) => (
                      <li
                        key={childIndex}
                        className={`py-2 cursor-pointer transition-all   ${
                          activeIndex === index && activeChildIndex === childIndex
                            ? 'text-[var(--nav-selected-color)] font-bold ' // item con đang chọn
                            : 'text-black hover:text-[var(--nav-selected-color)] hover:font-bold ' // item con chưa chọn khi hover thay đổi màu và cỡ chữ
                        }`}
                        onClick={() => setActiveChildIndex(childIndex)}
                      >
                        {child}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
        <LuSearch />
      </nav>

      {/* Div giả lập full width background cho dropdown khi hover */}
      <div
        className='absolute top-full left-0 w-screen bg-white z-10 overflow-hidden transition-all duration-300 ease-in-out'
        style={{
          height: isHoveringNav && openIndex !== null ? `${dropdownHeights[openIndex]}px` : '0px',
          opacity: isHoveringNav ? 1 : 0,
          transform: isHoveringNav ? 'translateY(0)' : 'translateY(-10px)'
        }}
      />
    </div>
  )
}
