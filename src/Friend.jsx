export default function Friend ({friend}) {
    const {id, name, email, phone, username} = friend;
    return (
        <div className="box">
            <p>Id : {id}</p>
            <h4>Name : {name}</h4>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
            <p>Username : {username}</p>
        </div>
    )
}