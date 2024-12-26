import Head from 'next/head'
import ContactForm from '@components/ContactForm/ContactForm'
import { findValueById, findFilenameById } from '@lib/helper'
import socialLinks from '@lib/social.json'
import Link from 'next/link'
import Banner from '@components/PageBanner'
import {Tabs, Tab} from '@components/Tabs/Tabs'

export default function Contato() {

    const fields = [
        {id:'name', name:'Nome', type:'text', value:''},
        {id:'email', name:'E-mail', type:'email', value:''},
        {id:'message', name:'Mensagem', type:'text', value:''},
        {id:'cv', name:'Currículo', type:'file', value:''}
    ]

    const talkToUsFields = [
        {id:'name', name:'Nome', type:'text', value:''},
        {id:'email', name:'E-mail', type:'email', value:''},
        {id:'message', name:'Mensagem', type:'text', value:''}
    ]

    const socials = [
        
        {title:'Whatsapp', text:'Comercial', icon:'icon2', url:socialLinks.whatsappComercial.url},
        {title:'Instagram', text:'@multilentespoa', icon:'icon3', url:socialLinks.instagram.url},
    ]

    return (
        <>
            <Head>
                <title>Contato - Multilentes</title>
                <meta name="description" content="Fale conosco" />
            </Head>

            <main>

                <Banner title="Contato" subtitle="Fale conosco"/>

                <div id="contato" className="container py-5">
                    <div className="row">

                        <div className="col-lg-5 col-sm-12 d-flex flex-column justify-content-center">
                            <div 
                            className="w-100 d-flex flex-column justify-content-center text-center gap-4 p-5 text-light" 
                            style={{backgroundColor:'#00A3E0', boxShadow:'0.35rem 0.35rem 10px 0px rgb(0 0 0 / 60%)'}}>
                                <div>
                                    <h4 className="mb-0 text-light">Atendimento</h4>
                                    <div>
                                        De segunda à sexta<br/>
                                        Das 08h às 18h<br/>
                                        Sábados<br/>
                                        Das 09:30h às 12:30h
                                    </div>
                                </div>
                                <div>
                                    <h4 className="mb-0 text-light">Telefone</h4>
                                    <div>
                                        (51) 3012-0226
                                    </div>
                                </div>
                                <div>
                                    <h4 className="mb-0 text-light">Endereço</h4>
                                    <div>
                                        Av. São Pedro, 714<br/>
                                        Bairro São Geraldo<br/>
                                        Porto Alegre/RS<br/>
                                        CEP 90230-123
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 col-sm-12 d-flex flex-column justify-content-center align-items-center">
                            
                            <div style={{maxWidth:'362px'}}>

                                <Tabs>
                                    <Tab title="Atualizações" color="#001E60">
                                        <div className="text-center mb-3 mt-0 px-2 py-4" style={{backgroundColor:'#001E60', color:'white'}}>
                                            Fique por dentro das nossas atualizações.<br/>Envie sugestões, elogios e/ou críticas.
                                        </div>
                                        
                                        <ContactForm
                                            fields={talkToUsFields}
                                            hasFile={false}
                                            apiBody={(state)=>{
                                                    return {  
                                                        recipient: 'multilentes@multilentes.com.br',
                                                        name: findValueById(state, 'name'), 
                                                        email: findValueById(state, 'email'), 
                                                        message: findValueById(state, 'message')
                                                    }
                                                }
                                            }
                                            errorMessage="Houve um erro na tentativa de enviar seu email. Recarregue a página e tente novamente."
                                            successMessage="Email enviado com sucesso!"
                                            onSuccess={(response)=>{
                                                
                                            }}

                                            footerLeftEl={null}
                                            buttonText="Enviar"
                                        />
                                    
                                    </Tab>

                                    <Tab title="Vagas" color="#00A3E0">
                                        <div className="text-center mb-3 mt-0 px-2 py-4" style={{backgroundColor:'#00A3E0', color:'white'}}>
                                            Queremos conhecer o seu talento, venha fazer parte da nossa equipe.
                                        </div>
                                        
                                        <ContactForm
                                            fields={fields}
                                            apiBody={(state)=>{
                                                    return {  
                                                        recipient: 'martins@chavemestra.net',
                                                        name: findValueById(state, 'name'), 
                                                        email: findValueById(state, 'email'), 
                                                        message: findValueById(state, 'message'),
                                                        cv: findFilenameById(state, 'cv')
                                                    }
                                                }
                                            }
                                            errorMessage="Houve um erro na tentativa de enviar seu email. Recarregue a página e tente novamente."
                                            successMessage="Email enviado com sucesso!"
                                            onSuccess={(response)=>{
                                                
                                            }}

                                            footerLeftEl={null}
                                            buttonText="Enviar"
                                        />
                                    
                                    </Tab>
                                    
                                </Tabs>

                            </div>
                            
                            
                        </div>

                    </div>
                </div>

                <div id="redes" className="container-fluid py-5 text-light text-center" style={{backgroundColor:'#001E60'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="border">Nossas redes sociais</h3>
                                <div>Acompanhe nossas redes sociais: siga, curta e compartilhe.</div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                socials.map(item=>{
                                    return (
                                        <div key={item.title} className="col">
                                            <div className="d-flex justify-content-center mt-5 mb-3" style={{maxHeight:'6rem', position: 'relative'}}>
                                                <Link href={item.url}><a target="_blank"><img className="img-fluid" src={`/contato/${item.icon}.png`}/></a></Link>
                                            </div>
                                            <Link href={item.url}><a target="_blank">
                                                <h4 className="mb-0 text-light">{item.title}</h4>
                                                <div>{item.text}</div>
                                            </a></Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div id="emails" className="container py-5">
                    <div className="row">
                        <div className="col-lg-7 col-sm-12">
                            <div className="d-flex flex-column justify-content-center align-items-start w-100 h-100" style={{
                                overflow: 'hidden',
                                fontSize: '0.9rem'
                            }}>
                                <h3 className="mb-5 fw-black">E-mail</h3>

                                <h5 className="mb-0 fw-black">Setor administrativo</h5>
                                <div className="mb-3">multilentes@multilentes.com.br</div>
                            </div>
                        </div>
                    
                        <div className="col-lg-5 p-5 p-lg-2">
                            <img className="img-fluid" src="/contato/emails.png"/>
                        </div>
                    </div>
                </div>

            </main>            
            
        </>
    )
}
