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
                            src="/logo.png"
                            alt="logo"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <div className={styles.socials}>
                        <div className={styles.line}></div>
                        <div className={styles.instagram}>
                            <a href={socials.instagram.url}><i className="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </div>

                <div className={styles.info}>
                    <div className={styles.col}>
                        <div className={styles.title}>Endereço</div>
                        <div className={styles.content}>
                            Av. São Pedro, 714 <br/>
                            Bairro São Geraldo<br/>
                            Porto Alegre/RS<br/>
                            CEP 90230-123
                        </div>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.title}>Contato</div>
                        <div className={styles.content}>
                            Horário: Seg à Sex - 08h às 18h<br/>
                            Sábado - 09:30h às 12:30h<br/>
                            Telefone: (51) 99348-3947<br/>
                            <span className={styles.hideOnMobile}>multilentes@multilentes.com.br</span><br/>
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