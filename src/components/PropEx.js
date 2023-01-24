 import PropFun from './PropFun';

 function PropEx(props) {
    return (
        <div>
          <div>{props.name}</div>
          <PropFun date={props.date}/>
        </div>
    );
}
export default PropEx;