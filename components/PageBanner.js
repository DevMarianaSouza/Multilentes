import React, {useState, useEffect} from 'react'

export default function PageBanner({title, subtitle, heightProps={p:'7rem 0', minH:'20vw', maxH:'600px'}}) {

    const defaultBgPos ='center -7rem'
    const [backgroundPosition, setBackgroundPosition] = useState(defaultBgPos)
    const [overlaySize, setOverlaySize] = useState('50vw')
    const handleResize = ()=>{

        const proportion = window.innerWidth/window.innerHeight
        //console.log(proportion)
        let isMobile = window.innerHeight > window.innerWidth
        let newBgPos = defaultBgPos
        let newOverlaySize = '50vw'

        if( isMobile || proportion < 1.42 ){
            newBgPos = 'center top'
        }

        if( isMobile ){
            newOverlaySize = '0'
        }

        //console.log(newBgPos)
        //console.log(newOverlaySize)

        setBackgroundPosition(newBgPos)
        setOverlaySize(newOverlaySize)
    }

    useEffect(() => {

        console.log('window', window)

        if( window != undefined ){
            handleResize()
            window.addEventListener('resize',handleResize)
        }

        return () => window.removeEventListener('resize', handleResize)

    },[])

    return(
        
        <div
            className="container-fluid d-flex flex-column justify-content-center align-items-center"
            style={{
                overflow:           'hidden', 
                marginTop:          '-85px',
                padding:            heightProps.p, 
                minHeight:          heightProps.minH, 
                maxHeight:          heightProps.maxH, 
                position:           'relative', 
                backgroundImage:    'url(/fachada.jpg)', 
                backgroundPosition: backgroundPosition,
                backgroundSize:     'cover'
            }}
            >

                <div className="container" style={{zIndex:2}}>

                    <div className="d-flex">
                        <div 
                            className="text-light fw-bold fs-2"
                            style={{
                                marginTop: '1rem',
                                marginLeft: '-50vw',
                                padding: '.5rem 3rem .5rem 50vw',
                                boxShadow:'10px 10px 5px -6px rgba(0,0,0,0.75)', 
                                backgroundColor:'rgba(0,30,96,0.85)'
                        }}>
                            <div>
                                <div className="fw-black pt-2" style={{lineHeight:'1.8rem'}}>{title}</div>
                                <div className="fw-light fs-4">
                                    {subtitle}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <img src="/banner-linhas.png" style={{
                    position: 'absolute',
                    height: '100%',
                    width: overlaySize,
                    zIndex: 1,
                    left: 0,
                    top: 0,
                }}/>
            
        </div>

    )
}