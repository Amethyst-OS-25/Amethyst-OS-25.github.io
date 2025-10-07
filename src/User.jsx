import Link from "./Link"

export default function User({ name, username = name, pfp = `${username}.png` }) {
    return (
        <>
            <Link link={`https://scratch.mit.edu/users/${username}`}>
                <div className="user-d">
                    <img className="user-avatar-d" src={`assets/pfps/${pfp}`} />
                    {name}
                </div>
            </Link>
            <br></br>
        </>
    )
}