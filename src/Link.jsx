export default function Link({ children, link = "#" }) {
    return (
        <a className="link-d" href={link}>{children}</a>
    )
}