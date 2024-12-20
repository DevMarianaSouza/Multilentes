import React, {useState} from 'react'
import styles from './Tabs.module.css'

export function Tabs({children, ...props}) {

    const childrenArray = React.Children.toArray(children)
    const [ currentChild, setCurrentChild ] = useState(0)

    return (<div className={styles.tabs}>
        <div className={styles.tabLabels}>
        {
            Object.values(children).map((value,key) => {
                return (  
                    <div key={key} className={`${styles.label}`} style={{backgroundColor:value.props.color}} onClick={()=>setCurrentChild(key)}>{value.props.title}</div>
                )
            })
        }
        </div>
        {childrenArray[currentChild]}
    </div>)
}

export function Tab(props) {
    return (<div className={styles.tab}>
        {props.children}
    </div>)
}