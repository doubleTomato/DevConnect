import React from "react";

function Home(){
    const filterList = ['abc','def','fes','fewf'];
    return (
    <section className="mx-auto max-w-7xl">
        <article className="flex h-64 bg-blue-500 mx-auto">
            <div>인기</div>
            <div>
                <button>내블로그</button>
                <button>글쓰기</button>
            </div>
        </article>
        {/* filter자리 */}
        <nav >
            <ul className="flex ">
                {filterList.map((x,i) => <li className="rounded-xl px-4 py-1 bg-red-500 mr-2 my-4" key={i}>#{x}</li>)}
            </ul>
        </nav>
        <h2>Blog</h2>
        <article>
            
        </article>
        <h2>Projects</h2>
        <article>
            
        </article>
    </section>);
}

export default Home;