import React from 'react'
// import MainContentFooter from './MainContentFooter';


function MainContent({BreadCrumbs, children}) {
  return (
    <main className="relative h-full w-full overflow-y-auto bg-gray-50 sm:ml-[296px] ml-[15px] sm:mr-[40px] mr-[15px] mt-[118px]">
        {children}
        {/* {isFooter && (
          <div className="mx-4 mt-4">
            <MainContentFooter />
          </div>
        )} */}
      </main>
  )
}

export default MainContent