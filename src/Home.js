import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    // let name = "mario";

    // const handleClick = () => {
    //     console.log("Hello, IITians");
    //     setName("sandu");
    //     setAge(45);
    // }
    // const handleClickAgain = (name) => {
    //     console.log("Hello, " + name);
    //     setName("vanshaj");
    //     setAge(18);
    // }
    const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs")
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newBlogs);
    // }
    return (
        <div className="home">
            {/* <h1>This is BLOG SITE</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <button onClick={handleClick}>CLICK ME</button>
            <button onClick={handleClickAgain}>CLICK ME AGAIN</button>
            <p>{name} is {age}</p>
            <br /> */}
            {/* {error && <div>{error}</div>} */}
            {/* {isPending && <div>Loading...</div>} */}
            {blogs && <BlogList blogs={blogs} title="ALL BLOGS!" />}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author == "Sandy")} title="SANDY"S BLOGS!" /> */}
        </div >
    );
}

export default Home;

// import { useEffect, useState } from "react";
// import BlogList from "./BlogList";
// import useFetch from "./useFetch";

// const Home = () => {
//     const { error, isPending, data: blogs } = useFetch("http://localhost:8000/blogs")

//     return (
//         <div className="home">
//             {error && <div>{error}</div>}
//             {isPending && <div>Loading...</div>}
//             {blogs && <BlogList blogs={blogs} />}
//         </div>
//     );
// }

// export default Home;