import React from 'react';

const GroupsList = ({groupsList=[]}) => {
    return (
        <>
        {
            groupsList.map((data,index) => {
                if(data) {
                    return (
                        <div key={data.name}>
                            <h1>{data.name}</h1>
                        </div>
                    )
                }
                return null
            })
            }
        </>
    );
}

export default GroupsList;