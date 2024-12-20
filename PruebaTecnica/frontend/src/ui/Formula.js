function Formula({inputValue}){

    return(
        <div className="col-md-12 d-flex justify-content-center">
            <div className="d-flex">
                <div className="mx-2">
                    <span className="fontStyle">Serie(n) = </span>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <span className="fontStyle">4 primo(<span className="fontStyle nValue">{inputValue || 'n'}</span>)
                    - triangular(<span className="fontStyle nValue">{inputValue || 'n'}</span> - 1)</span>
                    <div className="divisor my-1"></div>
                    <span className="fontStyle">fibonacci(<span className="fontStyle nValue">{inputValue || 'n'}
                     </span> + 2)</span>
                </div>
            </div>
        </div>
    );

}

export default Formula;