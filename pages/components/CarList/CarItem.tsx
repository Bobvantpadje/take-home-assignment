export const CarItem: React.FC<{car: Car}> = ({car}) => {
    return <li>
        <div>{car.make}</div>
        <div>{car.model}</div>
    </li>
}