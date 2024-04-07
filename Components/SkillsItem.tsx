import React from 'react'

interface Props {
  title: string;
  year: string;
}

const SkillsItem = ({title, year}: Props) => {
  return (
    <div className='mb-[4rem] md:mb-[8rem]'>
      <h1 className='px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[18px] border-[2px]
      border-[#55e6a5]'>
        {year}
      </h1>
      <h1 className='mt-[2rem] uppercase font-semibold mb-[1rem] text-[2rem] sm:text-[25px] md:text-[34px] text-white'>
        {title}
      </h1>
      <p className='text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80 ' >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus saepe rem minima accusamus est. Quas ipsam ducimus possimus sed illo voluptatem unde animi reiciendis harum.
      </p>
    </div>
  )
}

export default SkillsItem
