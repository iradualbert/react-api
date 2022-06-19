const UserProfile = ({ user }) => {
    const { name, username, email} = user;
    return (
        <div className="user-profile">
            <h1 style={{ marginBottom: 10 }}>{name}</h1>
            <h4>Username: {username}</h4>
            <h5>Email: {email}</h5>
        </div>
    )
};

export default UserProfile;