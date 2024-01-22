import logo from '../assets/img/logo.svg';

const Header = () => {
    return (
      <div className="flex items-center justify-between py-10 px-8 md:px-20">
          <a href="/">
            <div className="flex items-center justify-between">
              <div className="mr-3">
                <img src={logo} alt="logo" className='w-12' />
              </div>
              <div className="hidden h-6 text-2xl font-semibold sm:block text-primary">
                React Task Management
              </div>
            </div>
          </a>
      </div>
    )
  }
  
  export default Header