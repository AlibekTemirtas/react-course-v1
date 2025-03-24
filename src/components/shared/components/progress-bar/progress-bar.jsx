import styles from './progress-bar.module.scss';
import {useProgress} from "./use-progress.js";

export const ProgressBar = (props) => {
    const percent = useProgress();

    return (
        <div className={styles.ProgressBar}>
            <div className={styles.ProgressBarItem} style={{'width': percent}}></div>
        </div>
    )
}
