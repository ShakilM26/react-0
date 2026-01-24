import React from 'react';

function Card(props){
    return (
        <div style={{border:'2px solid black', padding:'10px',
            borderRadius: '8px'}}>
                {props.children}
            </div>
    );
}

function Apply(){
    return (
        <div>
            <Card>
                <h2>Name</h2>
                <p>Example of a Composition</p>
            </Card>

            <Card>
                <button>Click</button>
            </Card>
        </div>
    )
}

export default Apply;