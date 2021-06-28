function jobNumbers(props) {
    return (
        <div className="">
            {props.title && <div className="font-bold uppercase">{props.title}</div>}
            <div>
                {props.data && props.data.map((entry) => {
                    return (
                        <div className='flex flex-row space-x-4'>
                            <div>{entry.key}</div>
                            <div className="text-gray-400">{entry.doc_count}</div>
                        </div>)
                }
                )}
            </div>
        </div>
    )


}

export default jobNumbers
