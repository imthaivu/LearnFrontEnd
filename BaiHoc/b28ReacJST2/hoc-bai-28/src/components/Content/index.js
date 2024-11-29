function Content(props) {
    let propText = props.text;
    let propNumber = props.number;
    console.log(props)

    const { text, number, active } = props;

    // if(props.active){
    //     classActive = "box--active";
    // }
    return (
        <>
            <div className={"box " + (active ? "box--active" : "")}    >{text} - {number}</div>
        </>
    )
}
export default Content