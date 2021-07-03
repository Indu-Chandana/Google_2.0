function Avatar({ url }) {
    return (
        <img className=" rounded-full h-10 w-10 cursor-pointer transition duration-150 transform hover:scale-110" loading="lazy" src={url} alt="profile pic"/>
    )
}

export default Avatar
