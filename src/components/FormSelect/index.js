import React, { Component } from 'react';
import classNames from 'classnames';
import PropsType from 'prop-types';

import styles from './index.css';

console.log(styles);

class FormSelect extends Component {
    render() {
        const {
            name,
            id,
            options,
            onChange,
            label,
            disabled
        } = this.props;

        return (
          <div className={styles['form-select']}>
            <label htmlFor={id} className={styles['form-select__label']}>
                {label}
            </label>
            <div className={styles['form-select__border']}>
                <select
                    disabled={disabled}
                    name={name}
                    id={id}
                    className={styles['form-select__control']}
                    onChange={onChange}
                    >
                    {options.map((option, index) => (
                        <option
                            value={option.value}
                            className={styles['form-select__option']}
                            key={index}>
                            {option.text}
                        </option>
                    ))}
                </select>
            </div>

          </div>
        );
    }
}

FormSelect.defaultProps = {
    options: [],
    label: 'Select'
};

FormSelect.propTypes = {
    name: PropsType.string,
    id: PropsType.string,
    label: PropsType.string,
    disabled: PropsType.bool,
    options: PropsType.array
};

export default FormSelect;
