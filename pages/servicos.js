import Head from 'next/head'
import Image from 'next/image'
import Section from '../components/Section/Section'
import sectionStyles from '../components/Section/styles/Section.module.css'
import Bubble from '../components/Bubble/Bubble'
import svgInstalacao from '../public/bubbles/instalacao.svg'
import svgManutencao from '../public/bubbles/manutencao.svg'
import svgProjetos from '../public/bubbles/projetos.svg'
import svgVendas from '../public/bubbles/vendas.svg'
import Banner from '../components/PageBanner'

export default function Servicos() {

    const bubbleContent = [
        {"icon":svgManutencao, "title":"Manutenção"},
        {"icon":svgInstalacao, "title":"Instalação"},
        {"icon":svgVendas, "title":"Vendas"},
        {"icon":svgProjetos, "title":"Projetos"},
    ]

    const manutencaoContent = [
        {img:'/servicos/manutencao.png', content: <>
        <h3 className="fw-black text-light">Manutenção</h3>
        <p>
            Especialidade da empresa, o serviço possui foco
            na manutenção de equipamentos de alta 
            capacidade, tais como: Chillers, ar condicionado 
            central e VRF, atuando em todos os pontos do 
            sistema (torres, bombas, fan coils, tubulações,
            chillers, e periféricos). A manutenção é dividida 
            em preditiva, preventiva e corretiva:
        </p></>},

        {img:'/servicos/preventiva.png', content: <>
            <p>
                <b>Preditiva e Preventiva:</b> análise e monitoramento
                de parâmetros operacionais buscando garantir 
                a melhor performance dos equipamentos; além 
                de atuar na prevenção de possíveis danos.
            </p>
            <p>
                <b>Corretiva:</b> correção de falhas e danos, analisando 
                a causa raiz e recuperando o correto funcionamento 
                dos aparelhos.
            </p>
            <p>
                <b>PMOC e ART:</b> emissão de ART e execução de PMOC 
                (Plano de Manutenção, Operação e Controle). 
            </p>
        </>},
    ]

    return (
        <>
            <Head>
                <title>Serviços - Clean Air</title>
                <meta name="description" content="A partir da qualificação, da eficiência e da agilidade de nossa equipe, fornecemos as melhores soluções para o seu sistema de ar condicionado. Confira as possibilidades e escolha a que melhor se adequa às suas necessidades." />
            </Head>

            <main>

                <Banner title="Serviços" subtitle="Encontre o que precisa"/>
                
                <div id="bubbles" className="container py-5">
                    <h2 className="fw-black text-start mb-3">Nossos serviços</h2>
                    <div className="mb-4 text-start">A partir da qualificação, da eficiência e da agilidade de nossa equipe, fornecemos as melhores soluções para o seu sistema de ar condicionado. Confira as possibilidades e escolha a que melhor se adequa às suas necessidades.</div>
                    <Section id="bubbles" className={`${sectionStyles.grid} ${sectionStyles.col4} ${sectionStyles.gap4}`}>
                        {bubbleContent.map(item=>{
                            const img = <Image src={item.icon} layout="fill" objectFit="contain" alt={item.title} />
                            return <Bubble key={item.icon} title={item.title} icon={img}/>
                        })}
                    </Section>
                </div>

                <div id="manutencao" className="container-fluid">

                    {manutencaoContent.map((item,i)=>{

                        return (
                            <div key={item.img} className={`row ${i>0?'mt-2':''}`}>
                                <div className="col-lg-6 col-sm-12 m-0 p-0">
                                    <div className="w-100 h-100" style={{
                                        minHeight:'14rem',
                                        backgroundImage:`url(${item.img})`,
                                        backgroundPosition:'center center',
                                        backgroundSize:'cover'
                                    }}
                                    ></div>
                                </div>

                                <div 
                                    className="col-lg-6 m-0 p-0 col-sm-12 text-light d-flex flex-column justify-content-center text-center text-lg-start"
                                    style={{
                                    overflow: 'hidden', 
                                    backgroundImage:'url(/servicos/imgBg.png)', 
                                    backgroundPosition:'center center', 
                                    backgroundSize:'cover'
                                }}>
                                    <div style={{
                                        padding:'3rem 4rem', 
                                        maxWidth: '512px'
                                    }}>
                                        {item.content}
                                    </div>
                                    
                                </div>
                            </div>
                        )

                    })}

                    {/* <div className="row">
                        <div className="col-lg-6 col-sm-12 m-0 p-0">
                            <div className="w-100 h-100" style={{
                                backgroundImage:'url(/servicos/manutencao.png)',
                                backgroundPosition:'center center',
                                backgroundSize:'cover'
                            }}
                            ></div>
                        </div>

                        <div 
                            className="col-lg-6 m-0 p-0 col-sm-12 text-light d-flex flex-column justify-content-center text-center text-lg-start"
                            style={{
                            overflow: 'hidden', 
                            backgroundImage:'url(/servicos/imgBg.png)', 
                            backgroundPosition:'center center', 
                            backgroundSize:'cover'
                        }}>
                            <div className="border" style={{
                                padding:'3rem 4rem', 
                                maxWidth: '512px'
                            }}>
                                <h3 className="fw-bold text-light">Manutenção</h3>
                                <p>
                                    Especialidade da empresa, o serviço possui foco
                                    na manutenção de equipamentos de alta 
                                    capacidade, tais como: Chillers, ar condicionado 
                                    central e VRF, atuando em todos os pontos do 
                                    sistema (torres, bombas, fan coils, tubulações,
                                    chillers, e periféricos). A manutenção é dividida 
                                    em preditiva, preventiva e corretiva:
                                </p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="row mt-1">

                        <div className="col-lg-6 col-sm-12 m-0 p-0">
                            <div className="d-flex justify-content-center align-items-center" style={{position: 'relative', width:'100%', height:'100%', overflow:'hidden'}}>
                                <img style={{height:'100%', width:'100%'}} src="/servicos/preventiva.png"/>
                            </div>
                        </div>

                        <div 
                        className="col-lg-6 col-sm-12 text-light d-flex flex-column justify-content-center text-center text-lg-start"
                        style={{
                            overflow: 'hidden', 
                            padding:'1rem 4rem', 
                            backgroundImage:'url(/servicos/imgBg.png)', 
                            backgroundPosition:'center center', 
                            backgroundSize:'cover'
                        }}>
                            <p>
                                <b>Preditiva e Preventiva:</b> análise e monitoramento
                                de parâmetros operacionais buscando garantir 
                                a melhor performance dos equipamentos; além 
                                de atuar na prevenção de possíveis danos.
                            </p>
                            <p>
                                <b>Corretiva:</b> correção de falhas e danos, analisando 
                                a causa raiz e recuperando o correto funcionamento 
                                dos aparelhos.
                            </p>
                            <p>
                                <b>PMOC e ART:</b> emissão de ART e execução de PMOC 
                                (Plano de Manutenção, Operação e Controle). 
                            </p>

                        </div>

                    </div> */}
                </div>

                <div id="instalacao" className="container px-4 px-lg-0 py-5">
                    <div className="row">
                        <div className="col-lg-7 col-sm-12 pe-lg-5">
                            <div className="d-flex flex-column justify-content-center w-100 h-100">
                                <h3 className="mb-3 fw-black">Instalação</h3>
                                <p>
                                    A empresa efetua a instalação de centrais de água 
                                    gelada, VRF e sistemas de ar condicionado central, 
                                    além de realizar replacement desses equipamentos.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-sm-12">
                            <img className="img-fluid" src="servicos/instalacao.png"/>
                        </div>
                    </div>
                </div>

                <div id="vendas" 
                    className="container-fluid d-flex flex-column justify-content-center align-items-center"
                    style={{
                        overflow: 'hidden', 
                        padding:'5rem 0', 
                        minHeight:'20vw', 
                        maxHeight:'600px', 
                        position: 'relative', 
                        backgroundImage:'url(/servicos/vendasBg.png)', 
                        backgroundPosition:'center center', 
                        backgroundSize:'cover'
                    }}
                    >
                        
                    <div 
                    className="text-light fw-bold fs-2 d-flex flex-column justify-content-center align-items-center"
                    style={{
                        padding: '4rem',
                        boxShadow:'-10px 10px 5px -6px rgba(0,0,0,0.75)', 
                        backgroundColor:'rgba(0,30,96,0.85)',
                        width: '110%'
                    }}>
                        <h3 className="border mb-3">Vendas</h3>
                        <div className="fs-5 fw-normal w-75 text-center" style={{maxWidth:'600px'}}>
                            Outro serviço oferecido pela Clean Air Ar Condicionado 
                            é a venda de <b>peças</b> e <b>equipamentos</b> de alta capacidade.
                        </div>
                    </div>
                    
                </div>

                <div id="projetos" className="container px-4 px-lg-0 py-5 my-4">
                    <div className="row">
                        <div className="col-lg-5 col-sm-12 mb-2 mb-lg-0 px-lg-5">
                            <img className="img-fluid mb-3" src="servicos/PROJETO.png"/>
                        </div>
                        <div className="col-lg-7 col-sm-12 d-flex flex-column justify-content-center">
                            <h3 className="mb-3 fw-black">Projetos</h3>
                            <p>
                                Direcionados para climatização e/ou refrigeração, a Clean Air 
                                também disponibiliza a elaboração de projetos personalizados 
                                de: ar condicionado central, VRF, centrais térmicas e acústicos, 
                                buscando sempre satisfazer as necessidades de cada cliente.
                            </p>
                        </div>
                    </div>
                </div>

            </main>            
            
        </>
    )
}
