export default function PropEx(props) {
    const day = props.date.toLocaleString("en-US", { day: "2-digit" });
       return(
           <div>{day}</div>
       );
}