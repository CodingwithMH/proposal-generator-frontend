import Generator from '@/components/Generator'
import React from 'react'

const Generate = () => {
  return (
    <>
    <div className="absolute inset-0 bg-cover bg-center blur-lg scale-105 z-1 h-screen w-screen"></div>
        <div className="relative z-10 h-full overflow-y-auto">
        <Generator />
      </div>
    </>
  )
}

export default Generate
