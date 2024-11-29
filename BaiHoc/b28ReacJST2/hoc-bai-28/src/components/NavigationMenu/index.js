function NavigationMenu() {
    const handleClick = (e) => {
        console.log(e.target)
    }
    return (
        <>
            <div className="box">
                <div>navigation menu</div>
                {/* luon goi ham */}
                {/* <button onClick={handleClick()}>click me</button> */}
                {/* khi co click thi moi goi ham */}
                <button onClick={handleClick}>click me</button>

            </div>
        </>
    )
}
export default NavigationMenu