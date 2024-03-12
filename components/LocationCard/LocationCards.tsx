import s from './LocationCard.module.scss'

type LocationCardType={
    name: string
    type: string
    dimension: string
    created: string
}
export const LocationCard = ({ name, type, dimension, created}: LocationCardType) => {
    return (
        <div className={s.wrapper}>
            <div>{name}</div>
            <div>{type}</div>
            <div>{dimension}</div>
            <div>{created}</div>

        </div>
    );
};

