import { useState } from "react";

interface NewFormProps {
  onSubmit: (title: string) => void;
}

function NewForm({ onSubmit }: NewFormProps) {
  const [newTask, setNewTask] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    onSubmit(newTask);

    setNewTask("");
  }

  return (
    <>
      <form id="newTaskForm" onSubmit={handleSubmit}>
        <div className="h-screen flex justify-center items-center">
          <div className="card w-screen ml-5 mr-5 md:w-3/4 md:ml-0 md:mr-0 lg:w-3/6 bg-primary text-primary-content">
            <div className="card-body items-center text-center">
              <h1 className="text-4xl font-bold">TODO App!</h1>

              <div className="form-control w-full mt-7">
                <label className="label" htmlFor="task">
                  <span className="label-text">What is your next task?</span>
                </label>
                <input
                  type="text"
                  id="task"
                  name="task"
                  placeholder="Type here..."
                  className="input input-bordered w-full"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  required
                  autoComplete="off"
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
    </>
  );
}

export default NewForm;
