function Home() {
    return (
        <div className="container">
            <div className="text-center mt-5 p-5">
                <div>
                    <img src="src/assets/hero.png" alt="home" className="card-img-top" style={{ width: "300px" }} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">Welcome to home page.</h5>
                    <p className="card-text">This is a simple home page component.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;