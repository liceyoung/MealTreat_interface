import styles from './styles.module.css'
const Homepage = () => {
    return (
        <div className={styles.bigFrame}>
            <div className={styles.symBol}>
                <img src="/assets/images/Symbol_frame.svg" alt="" />
            </div>
        
             <div className={styles.bigframepictureLable}>
                    <div className={styles.smallframepictureLable}>
                        <img className={styles.pizza} src="/assets/images/piclabel_1.png" alt="" />
            </div>
        </div> 
        </div>
    )
}
export default Homepage