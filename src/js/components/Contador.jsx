
//create your first component
const Contador = (props) => {
    return (
        <div >
            <span>{props.Cmillar}</span>
            <span>{props.Dmillar}</span>
            <span>{props.Umillar}</span>
            <span>{props.centenas}</span>
            <span>{props.decenas}</span>
            <span>{props.unidades}</span>

        </div>
    );
};

export default Contador;