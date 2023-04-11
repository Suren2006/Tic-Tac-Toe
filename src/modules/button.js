export function ClickButton({ value, OnBoard }) {
    return (
        <button onClick={OnBoard}>{value}</button>
    )
}