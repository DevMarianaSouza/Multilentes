import React from 'react'
import styles from './styles/footer.module.css'
import Image from 'next/image'
import socials from '../../lib/social.json'
import menuItems from '../../lib/menuItems.json'

export default function footer() {
    return(
        <footer className={styles.footer}>
            
            <div className={styles.container}>

                <div className={styles.logo}>
                    <div className={styles.logo}>
                        <Image
                            src="/logo-branco.png"
                            alt="logo Clean Air, ar condicionado"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <div className={styles.socials}>
                        <div className={styles.line}></div>
                        <div className={styles.instagram}>
                            <a href={socials.instagram.url}><i className="fa-brands fa-instagram"></i></a>
                        </div>
                        <div className={styles.linkedin}>
                            <a href={socials.linkedin.url}><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>

                <div className={styles.info}>
                    <div className={styles.col}>
                        <div className={styles.title}>Endereço</div>
                        <div className={styles.content}>
                            Rua Ida Schuch, 46<br/>
                            Bairro Vicentina<br/>
                            São Leopoldo/RS<br/>
                            CEP 93025-420
                        </div>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.title}>Contato</div>
                        <div className={styles.content}>
                            Horário: 08h às 17h50<br/>
                            Telefone: (51) 3554.0017<br/>
                            <span className={styles.hideOnMobile}>administracao@cleanairarcondicionado.com.br</span><br/>
                            <span className={styles.hideOnMobile}>comercial@cleanairarcondicionado.com.br</span>
                        </div>
                    </div>
                </div>

                <div className={styles.menu}>
                    {menuItems.map(item=>{
                        return <div key={item.id} className={styles.menuItem}><a href={item.url}>{item.text}</a></div>
                    })}
                </div>
            </div>
            
        </footer>
    )
}