import StateUpdater from "./StateUpdater";


export default  function DataPropFile(){
    const dataTransfer = [{
        key : 1,
        value : 'A'
    },{
        key: 2,
        value:'B'
    },{
        key:3,
        value : 'C'
    }];

    return (
        <>
        <h2>STATE UPDATES ON CLICK!!!</h2>
        
        <div> 
           
        <StateUpdater  key = {dataTransfer[0].key} 
                       value ={dataTransfer[0].value} />

        <StateUpdater  key = {dataTransfer[1].key} 
                       value ={dataTransfer[1].value} />                




        </div>
        
        
        
        </>
    );
}
