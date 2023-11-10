import React from 'react'

function FilterSkills({FilterBtn, filterItems}) {
  return (
    <div className='flex flex-row justify-center items-center '>
        {
            FilterBtn.map((val) => (
                <button className='text-xl rounded-lg text-black mx-16 bg-white text-center g-2 p-2 font-normal hover:bg-chocolate'
                onClick={() => filterItems(val)}>
                    {val}
                </button>
            ))
        }
    </div>
  )
}

export default FilterSkills