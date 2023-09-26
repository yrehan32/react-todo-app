function App() {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body items-center text-center">
            <h1 className="text-5xl font-bold">
              TODO App!
            </h1>
            <p className="mt-7">
              &copy; { new Date().getFullYear() }
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
