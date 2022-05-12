import React from 'react';

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select
            value={value} //для того что бы следить за изменениями внутри селекта
            onChange={event => onChange(event.target.value)}> {/*В event передаем значение которое выбрал пользоваль */}
            <option disabled value="">{defaultValue}</option>
            {options.map(option => 
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;