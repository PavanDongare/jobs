function jobNumbers(props) {
    return (
        <div className="font-bold text-gray-700 uppercase">
            {props.title && <div>{props.title}</div>}
          
            {props.data && props.data.map((entry)=>{ return(<div>{entry.key+''+entry.doc_count}</div>)})}
        </div>
    )
}

export default jobNumbers
