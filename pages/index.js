import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Section from '../components/Section/Section'
import sectionStyles from '../components/Section/styles/Section.module.css'
import BannerSection from '../components/Section/BannerSection'
import Bubble from '../components/Bubble/Bubble'
import BubbleContent from '../lib/bubbles.json'
import MARCAS from 'public/MARCAS.png'
import Link from 'next/link'
import svgOculosdeSol from '../public/bubbles/svgOculosdeSol.svg'
import svgLentesdecontato from '../public/bubbles/svgLentesdecontato.svg'
import svgOculosdegrau from '../public/bubbles/svgOculosdegrau.svg'


import PortfolioSection from '../components/Cta/portfolio'
import Form from '../components/NewsForm'
import {findValueById} from '../lib/helper'

export default function Home() {

    const bubbleIcons = {
        'oculosdegrau': svgOculosdegrau,
        'lentes': svgLentesdecontato,
        'oculosdesol': svgOculosdeSol,
        
    }

    const fields = [
        {id:'email', name:'E-mail', type:'email', value:''},
    ]

    const defaultBgPos = 'center -3rem'
    const [backgroundPosition, setBackgroundPosition] = useState(defaultBgPos)
    const adjustBgPos = ()=>{

        const proportion = window.innerWidth/window.innerHeight
        let isMobile = window.innerHeight > window.innerWidth
        let newBgPos = defaultBgPos

        if( isMobile || proportion < 1.48 ){
            newBgPos = 'center top'
        }

        setBackgroundPosition(newBgPos)
    }

    useEffect(() => {

        if( window != undefined ){
            adjustBgPos()
            window.addEventListener('resize',adjustBgPos)
        }

        return () => window.removeEventListener("resize", adjustBgPos);

    },[])

    return (<>
        <Head>
            <title>Óptica Multilentes</title>
            <meta name="description" content="Qualificação e comprometimento" />
        </Head>
        <main>

            <div id="banner"
                className="container-fluid d-flex flex-column justify-content-center align-items-center mb-5"
                style={{
                    marginTop:          '-85px',
                    overflow:           'hidden', 
                    padding:            '10vw 0', 
                    minHeight:          '20vw', 
                    maxHeight:          '500px', 
                    position:           'relative', 
                    backgroundImage:    'url(/interior.png)', 
                    backgroundPosition: backgroundPosition,
                    backgroundSize:     'cover'
                }}
                >

                <div className="container">

                    <div className="d-flex">
                        <div 
                            className="text-light fw-bold fs-2"
                            style={{
                                marginTop: '3rem',
                            }}>
                            <div>
                                <div className="mb-2" style={{
                                    marginRight: '3rem',
                                    marginLeft: '-50vw',
                                    padding: '.5rem 3rem .5rem 50vw',
                                    boxShadow:'10px 10px 5px -6px rgba(0,0,0,0.75)', 
                                    backgroundColor:'rgba(0,30,96,0.85)',
                                    fontWeight: '900',
                                    lineHeight: '2.5rem'
                                }}>
                                    Um atendimento <br/>
                                    de excelência
                                </div>
                                
                                <div className="fs-5 py-3 px-4" style={{
                                    boxShadow:'10px 10px 5px -6px rgba(0,0,0,0.75)', 
                                    width:'clamp(320px, 25vw, 960px)', 
                                    backgroundColor:'rgba(0,163,224,0.75)',
                                    fontWeight: '200',
                                    lineHeight: '1.7rem',
                                }}>
                                    A <b style={{fontWeight: 'bold'}}>Multilentes</b> oferece um atendimento
                                    qualificado, personalizado e comprometido com a sua necessidade.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
            <div style={{ 
                    height: '100%',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '50px',
            }}
            >
                    <Link href="/"><Image
                        priority
                        src={MARCAS}
                        layout="intrinsic"
                        objectFit="contain"
                        alt="Marcas logo" /></Link>
                </div>               
            <Section id="bubbles" className={`${sectionStyles.grid} ${sectionStyles.col3} ${sectionStyles.gap4}`}>
                {BubbleContent.map(item=>{
                    const img = <Image src={bubbleIcons[item.icon]} layout="fill" objectFit="contain" alt={item.title} />
                    return <Bubble key={item.icon} title={item.title} icon={img}>{item.text}</Bubble>
                })}
             </Section>
             
{/* 
            <PortfolioSection/> */}

            {/* <div id="newsletter" className="container py-5 my-4">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <div className="w-100 h-100">
                            <img className="img-fluid mb-5 mb-lg-0" src="/newsletter.png" alt="ar condicionado central midea"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 text-center">
                        <h3 className="fw-black">Não perca nossas atualizações</h3>
                        <div className="mb-3">Preencha o campo abaixo e receba novidades por e-mail.</div>
                        <Form
                            fields={fields}
                            apiBody={(state)=>{
                                    return {  
                                        email: findValueById(state, 'email')
                                    }
                                }
                            }
                            errorMessage="Houve um erro na tentativa de enviar seu email. Recarregue a página e tente novamente."
                            successMessage="Email enviado com sucesso!"
                            onSuccess={(response)=>{
                                console.log("sucesso", response)
                            }}

                            footerLeftEl={null}
                            buttonText="Enviar"
                        />
                    </div>
                </div>
            </div> */}

        </main>
    </>);
}
