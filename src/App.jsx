import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from 'react-icons/md'
import { useState } from 'react'

const App = () => {
  const [active, setActive] = useState(-1)

  function handleActive(nextIndex) {
    setActive((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return -1
      } else {
        return nextIndex
      }
    })
  }

  const items = [
    {
      key: 1,
      header: 'How many team members can I invite?',
      inside:
        'No more than 2gb. all files in your account must fit your allotted storage space',
    },
    {
      key: 2,
      header: 'What is the maximum file upload',
      inside:
        'No more than 2gb. all files in your account must fit your allotted storage space',
    },
    {
      key: 3,
      header: 'How do I reset my password',
      inside:
        'No more than 2gb. all files in your account must fit your allotted storage space',
    },
    {
      key: 4,
      header: 'Can I cancel my subscription',
      inside:
        'No more than 2gb. all files in your account must fit your allotted storage space',
    },
    {
      key: 5,
      header: 'Do you provide additional support ',
      inside:
        'No more than 2gb. all files in your account must fit your allotted storage space',
    },
  ]

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === active

    return (
      <div key={item.key}>
        <div
          onClick={() => handleActive(index)}
          className={`flex justify-between items-center gap-5 ${
            isExpanded && 'font-bold'
          } cursor-pointer`}
        >
          <p className='text-left pr-3'>{item.header}</p>
          {isExpanded ? (
            <MdOutlineKeyboardArrowUp size={21} className='text-text-red-0' />
          ) : (
            <MdOutlineKeyboardArrowDown size={21} className='text-text-red-0' />
          )}
        </div>
        {isExpanded && <p className='text-left my-3'>{item.inside}</p>}

        <hr className='mt-2 pb-6' />
      </div>
    )
  })

  return (
    <main className='bg-gradient-to-b from-gradient-violet-0 to-gradient-blue-0 min-h-screen w-full flex justify-center items-center p-5 text-base'>
      <div className='bg-white max-w-[390px] md:max-w-[1000px] flex flex-col md:flex-row  justify-center items-center relative rounded-3xl mt-20'>
        <div className='relative bottom-28 md:w-1/2'>
          <img
            src='/public/images/illustration-woman-online-desktop.svg'
            width={240}
          />
          <img
            src='/public/images/bg-pattern-mobile.svg'
            className='absolute top-28'
          />
        </div>
        <div className='px-6 -mt-14 md:my-12 mb-12 md:mx-12 md:w-1/2'>
          <h1 className='text-center md:text-left font-bold text-4xl mb-6'>
            FAQ
          </h1>
          {renderedItems}
        </div>
      </div>
    </main>
  )
}

export default App
