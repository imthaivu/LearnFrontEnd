function NavigationMenu() {
    const handleClick = (e) => {

        console.log("click", e.target)
    }
    const handleChange = (e) => {
        console.log(e.target.value)
    }
    const handleFocus = (e) => {
        e.target.classList.add("inputActive")
        console.log("focus", e.target)
    }
    const handleBlur = (e) => {
        e.target.classList.remove("inputActive")
        console.log("remove", e.target)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", e.target)
        console.log("submit", e.target[0].value)
    }

    return (
        <>
            <div className="box">
                <div>navigation menu</div>
                {/* react khong load lai trang */}
                <form onSubmit={handleSubmit}>
                    {/* luon goi ham */}
                    {/* <button onClick={handleClick()}>click me</button> */}
                    {/* khi co click thi moi goi ham */}
                    <input type="text" onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
                    {/* mac dinh la type submit */}
                    <button onClick={handleClick}>search</button>
                </form>

            </div>
        </>
    )
}
export default NavigationMenu