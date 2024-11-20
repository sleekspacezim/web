import React from 'react'

type Props = {
  children:React.ReactNode
}

const Page:React.FC<Props> = ({children}) => {
  return (
    <div className='flex w-full'>
      {children}
    </div>
  )
}

export default Page