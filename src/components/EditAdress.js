import React from 'react';

const EditAdress = () => {
    return (
        <div>
            <h3>Edit</h3>
            <label htmlFor="add">Name</label>
            <input type="text" id='name'/>
            <label htmlFor="add">Adress</label>
            <input type="text" id='add'/>
        </div>
    );
}

export default EditAdress;
