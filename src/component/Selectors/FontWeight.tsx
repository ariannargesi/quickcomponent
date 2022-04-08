import Select from "../Select"
import useApplyStyle from "../../hooks/useApplyStyle"
import useStyleValue from "../../hooks/useStyleValue"
import styles from "./styles.module.sass"

const options = [
    { label: "400", value: 400 },
    { label: "700", value: 700 },
]

const FontWeight = () => {
    const applyStyle = useApplyStyle()
    const fontWeight = useStyleValue("fontWeight") || 400

    return (
        <div className={styles.container}>
            <Select
                label="Font weight"
                value={fontWeight}
                options={options}
                onChange={(e) => {
                    applyStyle("fontWeight", e)
                }}
            />
        </div>
    )
}

export default FontWeight
