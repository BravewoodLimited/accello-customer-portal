import React, { useState, useEffect} from 'react'
import { ArrowSmallRightIcon, ArrowSmallLeftIcon } from '@heroicons/react/24/outline'
import { useSwipeable } from 'react-swipeable';


export const CarouselItem = ({ children, width }) => {
    return (
        <div className='inline-flex text-white' style={{ width:width }}>
            {children}
        </div>
        
        );
    }


function Carousel( {children}) {

    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const updateIndex = (newIndex) => {
        if (newIndex < 0){
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }

        setActiveIndex(newIndex)
    }

    useEffect(() => {
      const interval = setInterval(() => {
        if(!paused){
            updateIndex(activeIndex + 1);
        }
    
    }, 3000)
    
      return () => {
        if(interval){
            clearInterval(interval)
        }
      };
    })

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1),
    });
    


  return (
    <div 
        className='whitespace-nowrap overflow-hidden relative'
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        {...handlers}
    
    >
        <div className='flex gap-4 justify-end absolute right-0 z-50'>
            <div className='w-8 h-8 hover:border-2 rounded-full cursor-pointer'>
                <ArrowSmallLeftIcon onClick={() => updateIndex(activeIndex - 1)}/>
            </div>

            <div className='w-8 h-8 hover:border-2 rounded-full cursor-pointer'>
                <ArrowSmallRightIcon onClick={() => updateIndex(activeIndex + 1)}/>

            </div>

        </div>
        <div className='transition' style={{ transform: `translateX(-${activeIndex * 100}%)`}}>
            {React.Children.map(children, (child, index) => {
                return React.cloneElement(child, {width: "100%"})
            })}

        </div>
        
    </div>
  )
}

export default Carousel