import React, {useState} from "react";

function addContactForm({onAdd}){
    const[name, setName] = useState('');
    const[phone, setPhone] = useState('');
    const[email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({name, phone, email});
        setName('');
        setPhone('');
        setEmail('');
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} 
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome"
            required
            />
            <input type="text" v
            alue={phone} 
            onChange={(e) =>
                 setPhone(e.target.value)}
Phone       required
            />
            <input type="text" value={email} 
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            />

        </form>
    )

}

export default addContactForm