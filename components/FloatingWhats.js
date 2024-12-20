import React from 'react'
import social from '../lib/social.json'
import ReactTooltip from 'react-tooltip'

export default function FloatingWhats() {

    return(<>
        <div 
        data-tip="Fale conosco"
        className="position-fixed d-none d-sm-block p-2" style={{
            height: '5rem',
            zIndex: '100',
            bottom: '1rem',
            right: '0',
        }}>
            <a 
            href={social.whatsappComercial.url} 
            target="_blank" 
            rel="noreferrer" 
            className="h-100 w-100" 
            style={{padding:'0.75rem 0'}}
            >
                <img className="h-100" src="/contato/icon2.png"/>
            </a>
        </div>
        <ReactTooltip 
        place="left" 
        effect="solid"
        backgroundColor="rgba(0,0,0,0.8)"
        />
    </>)
}