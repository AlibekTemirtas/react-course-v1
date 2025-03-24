import classNames from "classnames";
import styles from './button.module.scss';

export const Button = ({
                           children,
                           className,
                           colorVariant = 'default',
                           disabled = false,
                           ...props
}) => {
    return (
        <button className={classNames(
            styles.button,
            colorVariant === 'default' && styles.button__default,
            disabled && styles.button__disabled,
            className
        )}
                {...props}>
            {children}
        </button>
    )
}
