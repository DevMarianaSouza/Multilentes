import Head from 'next/head'
import Image from 'next/image'
import Section from '../components/Section/Section'
import sectionStyles from '../components/Section/styles/Section.module.css'
import Bubble from '../components/Bubble/Bubble'
import svgValores from '../public/sobre-nos/icon1.svg'
import svgMissao from '../public/sobre-nos/icon2.svg'
import svgVisao from '../public/sobre-nos/icon3.svg'
import Banner from '../components/PageBanner'

export default function Sobre() {

    const bubbleContent = [
        {"icon":svgValores, "title":"Valores", "text":<ul>
            <li>Ética e honestidade</li>
            <li>Excelência profissional</li>
            <li>Comprometimento </li>
            <li>Respeito e confiança</li>
            <li>Compromisso socioambiental</li>
        </ul>},
        {"icon":svgMissao, "title":"Missão", "text":"Garantir a perfeita operação dos sistemas de ar condicionado, superando as expectativas de economia, segurança e conforto de nossos clientes."},
        {"icon":svgVisao, "title":"Visão", "text":" Consolidar-se como uma das mais importantes empresas da região sul do país no segmento, sendo reconhecida pela excelência dos serviços prestados e pela responsabilidade socioambiental."},
    ]

    return (
        <>
            <Head>
                <title>Sobre Nós - Clean Air</title>
                <meta name="description" content="A Clean Air surgiu de um sonho de infância da família
                                Maraschin, o qual se concretizou no ano de 2010. Apesar
                                de todos os desafios, os irmãos Clarice, João, Cristina e 
                                Clarita não apenas criaram uma empresa do ramo da 
                                refrigeração, como também a estabeleceram no mercado, 
                                transformando-a em um sólido nome do segmento. 
                                Através de muito empenho, dedicação, formação e 
                                qualificação profissional de toda a equipe, a Clean Air, cada 
                                vez mais, tem adquirido reconhecimento pelos serviços 
                                prestados, conquistando uma vasta carteira de clientes." />
            </Head>

            <main>

                <Banner title="Sobre nós" subtitle="Conheça a empresa"/>

                <div id="historia" className="container py-5 mt-lg-5">
                    <div className="row">
                        <div className="col-sm-12 col-lg-8">
                            <h2 className="fw-black">Nossa história</h2>
                            <p>
                                A Clean Air surgiu de um sonho de infância da família
                                Maraschin, o qual se concretizou no ano de 2010. Apesar
                                de todos os desafios, os irmãos Clarice, João, Cristina e 
                                Clarita não apenas criaram uma empresa do ramo da 
                                refrigeração, como também a estabeleceram no mercado, 
                                transformando-a em um sólido nome do segmento. 
                                Através de muito empenho, dedicação, formação e 
                                qualificação profissional de toda a equipe, a Clean Air, cada 
                                vez mais, tem adquirido reconhecimento pelos serviços 
                                prestados, conquistando uma vasta carteira de clientes.
                            </p>
                            <p>
                                A Clean Air trabalha com equipamentos, mas com enfoque 
                                no bem estar das pessoas, e foi esse aspecto o responsável
                                pelo fato de uma empresa originada por meio do sonho de 
                                uma família, hoje colaborar com a realização dos sonhos de 
                                outras tantas. 
                            </p>
                        </div>

                        <div className="col-sm-12 col-lg-4">
                            <img className="img-fluid" src="/sobre-nos/historia.png"/>
                        </div>
                    </div>
                </div>

                <div id="bubbles" className="text-light px-4 px-lg-0 py-5 my-5" style={{backgroundColor:'#001E60'}}>
                    <Section id="bubbles_inverted" className={`${sectionStyles.grid} ${sectionStyles.col3} ${sectionStyles.gap4}`}>
                        {bubbleContent.map(item=>{
                            const img = <Image src={item.icon} layout="fill" objectFit="contain" alt={item.title} />
                            return <Bubble key={item.title} textClass="text-start" title={item.title} icon={img}>{item.text}</Bubble>
                        })}
                    </Section>
                </div>

                <Section id="carrier" className="py-5 d-flex flex-column justify-content-center align-items-center">

                    <h3 className="border dark mb-4">Credenciada Carrier</h3>
                    <p className="fs-5 text-center">
                        Um dos indicativos da qualidade dos serviços prestados pela Clean Air Ar Condicionado, 
                        trata-se do fato da empresa pertencer à rede de instaladores credenciados da <b>Carrier</b>, o 
                        que a torna apta a comercializar, instalar e prestar serviços de manutenção em diversos 
                        equipamentos de refrigeração e climatização.
                    </p>

                </Section>

                <div id="onde-estiver"
                    className="container-fluid d-flex flex-column justify-content-center align-items-center"
                    style={{
                        overflow:           'hidden', 
                        padding:            '10rem 0', 
                        minHeight:          '20vw', 
                        maxHeight:          '600px', 
                        position:           'relative', 
                        backgroundImage:    'url(/sobre-nos/onde-estiver.png)', 
                        backgroundPosition: 'center center',
                        backgroundSize:     'cover'
                    }}
                    >

                    <div className="container">

                        <div className="d-flex">
                            <div 
                                className="text-light fw-bold fs-2"
                                style={{
                                    marginTop: '1rem',
                                }}>
                                <div>
                                    <div className="mb-2" style={{
                                        marginRight: '10vw',
                                        marginLeft: '-50vw',
                                        padding: '.5rem 3rem .5rem 50vw',
                                        boxShadow:'10px 10px 5px -6px rgba(0,0,0,0.75)', 
                                        backgroundColor:'rgba(0,30,96,0.85)'
                                    }}>
                                        Onde você estiver
                                    </div>
                                    
                                    <div className="fw-normal fs-5 p-3" style={{
                                        boxShadow:'10px 10px 5px -6px rgba(0,0,0,0.75)', 
                                        width:'clamp(320px, 30vw, 960px)', 
                                        backgroundColor:'rgba(0,163,224,0.75)'
                                    }}>
                                        Atuando desde 2010 na área de 
                                        refrigeração, a Clean Air tem levado
                                        seus serviços a todo o país, atendendo 
                                        clientes dos mais variados segmentos
                                        e localidades.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
                
                <Section id="timeline" className="py-5 d-flex flex-column justify-content-center align-items-center">

                    <h3 className="fw-black align-self-start">A Clean Air</h3>
                    <div className="mb-5 align-self-start" style={{textAlign: 'left'}}>Alguns destaques da empresa ao longo dos anos.</div>
                    
                    <img className="d-block d-md-none mx-5 img-fluid" src="/sobre-nos/timeline-mobile.svg"/>
                    <img className="d-none d-md-block img-fluid" src="/sobre-nos/timeline.svg"/>

                </Section>

            </main>            
            
        </>
    )
}
