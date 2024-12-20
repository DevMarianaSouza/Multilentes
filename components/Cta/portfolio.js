import React from 'react'
import styles from './styles/portfolio.module.css'
import Section from '../Section/Section'
import Link from 'next/link'

export default function portfolio() {
    return(
        <Section className={styles.portfolio}>
            <div className={styles.textBar}>
                <div className={styles.container}>
                    <div>
                        <h3 className="border mt-3 mb-3">Nosso portfólio</h3>
                    </div>
                    <div>
                        <p className="mb-0 mx-auto px-5">
                            A partir do conhecimento técnico e da eficiência de nossa equipe, conquistamos a confiança de diversos clientes importantes e construímos um vasto portfólio especializado em centrais térmicas de ar condicionado e sistemas de refrigeração.
                        </p>
                    </div>
                    <div className={styles.link}>
                        <Link href="/portfolio" legacyBehavior><a className="link underline fw-bold">Acesse o catálogo completo <i className="fa-solid fa-caret-right"></i></a></Link>
                    </div>
                </div>
            </div>
        </Section>
    )
}