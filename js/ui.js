const list = document.getElementById("taskList");

export const render = (tasks) => {
            list.innerHTML = "";
            
            task.forEach(task=>{
                const li = document.createElement("li");
                li.className = `task-item ${task.completed ? "completed" :  ''}`;
                li.dataset.id = task.id;

                list.appendChild(li);

            })
        }
