import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [newTask, setNewTask] = useState("");

  return (
    <>
      <form>
        <div className="h-screen flex justify-center items-center">
          <div className="card w-screen ml-5 mr-5 md:w-3/4 md:ml-0 md:mr-0 lg:w-3/6 bg-primary text-primary-content">
            <div className="card-body items-center text-center">
              <h1 className="text-4xl font-bold">TODO App!</h1>

              <div className="form-control w-full mt-7">
                <label className="label">
                  <span className="label-text">What is your next task?</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here..."
                  className="input input-bordered w-full"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-2 mt-3">
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() =>
                    (
                      document.getElementById("todoList") as HTMLDialogElement
                    )?.showModal()
                  }
                >
                  List
                </button>
                <button type="submit" className="btn btn-outline">
                  Add
                </button>
              </div>

              <p className="text-secondary mt-7">
                &copy; {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </form>

      <Modal id="todoList" title="TODO List">
        Hello World!
      </Modal>
    </>
  );
}

export default App;
