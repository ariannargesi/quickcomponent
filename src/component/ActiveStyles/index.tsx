import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cssToCamelCase, findNodeInTree } from '../../helper'
import { removeStyle, ComponentMember } from '../../redux/slice'
import { RootState } from '../../redux'
import { X } from 'react-feather'
import styles from './styles.module.sass'
interface ItemProps {
    title: string,
}

const Item = (props: ItemProps) => {
    const dispatch = useDispatch()

    const handleRemove = () => {
        const key = props.title.split(':')[0]
        dispatch(removeStyle(key))
    }

    return (
        <div className={styles.item}>
            <div>
                <span>{props.title}</span>
                <X size={12} onClick={handleRemove} />
            </div>
        </div>
    )
}

function getStyles(key: string, html: ComponentMember[]): ComponentMember {
    let res
    findNodeInTree(html, key, (value) => {
        res = value
    })

    if (res.props?.style)
        return res.props.style
    else
        return null

}

const ActiveStyles: React.FC = () => {
    const {map, selectedKey} = useSelector((state: RootState) => state.app)
    const stylesList = getStyles(selectedKey, map)

    let keys = []
    if (stylesList) {
        keys = Object.keys(stylesList)
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Active styles</h2>
            <div className={styles.content}>
                {keys.length === 0 ? (
                    <span>You dont have any style at the moment</span>
                )
                    :
                    keys.map(key => {
                        const name: string = cssToCamelCase(key)
                        const value: string = stylesList[key]
                        return <Item title={`${name}:${value}`} />
                    })
                }
                
            </div>
        </div>
    )

}

export default ActiveStyles