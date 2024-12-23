'use client'
import useDeviceDetect from '~/hooks/useDeviceDetect'

const Page = () => {

  const { isMobile } = useDeviceDetect()

  return (
    <div>
     {isMobile ? 'mobile' : 'desktop'} 
    </div>
  )
}

export default Page
