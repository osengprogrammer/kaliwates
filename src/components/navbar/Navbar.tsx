import Link from 'next/link'
import MaxWidthWrapper from '../MaxWidthWrapper'
import NavItems from './NavItems'
import NavbarLogo from './NavbarLogo'
import ActionButton from './ActionButton'
import NavigationBar from './NavigationBar'

const Navbar = async () => {
 
    return (
        <div className='bg-white sticky z-50 top-0 inset-x-0 h-16'>
        <header className='relative bg-white'>
          <MaxWidthWrapper>
            <div className='border-b border-gray-200'>
              <div className='flex h-16 items-center justify-between'>
                <div className='ml-4 flex lg:ml-0'>
                  <Link href='/'>
                    <NavbarLogo />
                  </Link>
                </div>
                <div className="hidden md:block">
                <NavigationBar/>
                </div>
                {/* <div className='hidden z-50 lg:ml-8 lg:block lg:self-stretch'>
                  <NavItems />
                </div> */}
                <div className='z-50 lg:ml-8 lg:block'>
                  <ActionButton />
                </div>
  
               
              </div>
            </div>
          </MaxWidthWrapper>
        </header>
        </div>
    )}

   export default Navbar 