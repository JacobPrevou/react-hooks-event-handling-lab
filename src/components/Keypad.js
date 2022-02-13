// Code Keypad Component Here

function Keypad() {
    function handleChange(event) {
        console.log("Entering password...");
        console.log(event)
    }
    return (
        <input type="password" onChange={handleChange}/>
    )
}


export default Keypad;
