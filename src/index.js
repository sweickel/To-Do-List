import { Project, Task } from "./construct";

let projects = [];
let showAll = false;

//refreshes DOM
function render() {  
  //clears DOM
  const content = document.querySelector('.content');
  const nav = document.querySelector("nav");
  const projectsLength = content.children.length;
  const navLength = nav.children.length;
  for (let i = projectsLength - 1; i >= 0; i--) {
      content.removeChild(content.children[i]);
  }

  for (let j = navLength - 1; j > 2; j--) {
    nav.removeChild(nav.children[j]);
  }
    

  //create new element for each project element
  projects.forEach((el, index) => {
    const projPanel = document.createElement("div");
    projPanel.classList.add("proj_panel");
    projPanel.innerHTML = el.title;
    projPanel.setAttribute("ind", index);
    document.getElementById("nav").appendChild(projPanel);
    projPanel.addEventListener("click", (event) => {
        render();
        showAll = false;
        showProject(el);
    })
  })
}

//universal functions
function taskForm(el) {
  const newtask = document.getElementById("new_task");
  newtask.style.display = "flex";
  const content = document.getElementById('new_task');
  const projectsLength = content.children.length;
  for (let i = projectsLength - 1; i > 0; i--) {
      content.removeChild(content.children[i]);
  }
    //creates form
      //creates task div and title
      const modal = document.createElement("div");
      modal.classList.add("mod");
      const taskInput = document.createElement("form");
      const newTitle = document.createElement("input");
      newTitle.required = true;
      newTitle.id = "title";
      newTitle.placeholder = "Untitled Task";
      const titleLabel = document.createElement("label");
      titleLabel.setAttribute("for", "title");
      titleLabel.innerHTML = "Title";
      newTitle.type = "text";
      
        //adds  description attribute
      const newDesc = document.createElement("input");
      newDesc.id = "desc";
      newDesc.required = true;
      newDesc.placeholder = "Enter Description";
      const descLabel = document.createElement("label");
      descLabel.setAttribute("for", "desc");
      descLabel.innerHTML = "Description";
      newDesc.type = "text";
      
        //adds  dueDate attribute
      const newDate = document.createElement("input");
      newDate.type = "date";
      newDate.id = "date";
      newDate.required = true;
      const dateLabel = document.createElement("label");
      dateLabel.setAttribute("for", "date");
      dateLabel.innerHTML = "Date";
      
        //adds priority attribute
      const newPrio = document.createElement("select");
      newPrio.id = "prio";
      newPrio.required = true;
      newPrio.selectedIndex = "0";
      const prioLabel = document.createElement("label");
      prioLabel.setAttribute("for", "prio");
      prioLabel.innerHTML = "Priority";
      newPrio.name = "prio";
      const opt1 = document.createElement("option");
      const opt2 = document.createElement("option");
      const opt3 = document.createElement("option");
      opt1.value = "Low";
      opt1.text = "Low";
      opt2.value = "Medium";
      opt2.text = "Medium";
      opt3.value = "High";
      opt3.text = "High";
      
      //adds add task button
      const addTask = document.createElement("button");
          addTask.type = "button";
          addTask.classList.add("task_add");
          addTask.innerHTML = "Add Task";
          addTask.addEventListener("click", (event) => {
            let a = document.getElementById("title");
            let b = document.getElementById("desc");
            let c = document.getElementById("date");
            let d = document.getElementById("prio");
            
      if (a.checkValidity() === false || b.checkValidity() === false || c.checkValidity() === false || d.checkValidity() === false) {
        alert("Please complete all fields.", "Ok");
      } 
      
        else {
          el.tasks.push(new Task(a.value,b.value,c.value,d.value));
          let taskdiv = document.getElementById("new_task");
          taskdiv.style.display = "none";
          render();
          setLocalStorage();
          if (showAll === true) {
            allProj();
          } 
            else {
              showProject(el);
            }
          }
      });

      const disp = document.getElementById('form_top_bar');
      const dispLength = disp.children.length;
      if (dispLength > 0) {
        for (let i = dispLength - 1; i > 0; i--) {
          disp.removeChild(disp.children[i]);
        }
      }
      let lab = document.createElement("label");
      lab.id = "mod_lab";
      lab.innerHTML = "New Task";

      disp.appendChild(lab);
  
      newtask.appendChild(modal);
      modal.appendChild(titleLabel);
      modal.appendChild(newTitle);
      modal.appendChild(descLabel);
      modal.appendChild(newDesc);
      modal.appendChild(dateLabel);
      modal.appendChild(newDate);
      modal.appendChild(prioLabel);
      modal.appendChild(newPrio); 
      newPrio.add(opt1);
      newPrio.add(opt2);
      newPrio.add(opt3);
      modal.appendChild(addTask);
 }

function closeBoxes() {
  let editMod = document.querySelector(".edit_modal");
  let taskdiv = document.getElementById("new_task");
  taskdiv.style.display = "none";
  editMod.style.display = "none";
}

//sets event listeners globally
function setListeners() {
  let editMod = document.querySelector(".edit_modal");
  let taskdiv = document.getElementById("new_task");
  let closeEditBtn = document.querySelector("#close_modal");
  let closeNewTask = document.getElementById("close_new_task");
  let newp = document.getElementById("new_proj");
  let proj = document.getElementById("all_proj");

  //event listeners for close button on edit and new task popups
  closeNewTask.addEventListener("click", (event) => {
    taskdiv.style.display = "none";
  })

  closeEditBtn.addEventListener("click", (event) => {
    editMod.style.display = "none";
  }); 
  
  //set event listener for new project  
  newp.addEventListener("click", (event) => {
    projects.push(new Project("Untitled"))
    render();
    setLocalStorage();
    allProj();
  });

    proj.addEventListener("click", (event) => {
    render()
    allProj();
  });
}


function showProject(el) {

  const content = document.querySelector(".content");
  const project = document.createElement("div");    
    content.appendChild(project);
    project.classList.add("project");
    const head = document.createElement("div");
    head.id = "head";
    const title = document.createElement("div");
    title.classList.add("title");
    title.innerHTML = el.title;
    title.addEventListener("click", (event) => {
      editTask("Project Title", title.innerHTML, el);
    });
    project.appendChild(head);
    head.appendChild(title);
    const btn = document.createElement("button");
    btn.classList.add("remove_project");
    btn.type = "button";
    btn.innerHTML = "Delete";   

    //appends button to header in project
    head.appendChild(btn);
     //removes project on button click
     btn.addEventListener("click", (event) => {
      let parent = btn.parentNode.parentNode;
      let ind = parent.getAttribute("ind");
      projects.splice(ind, 1);
      render();
      setLocalStorage();
      allProj();
    });

    const items = document.createElement("div");
    project.appendChild(items);
    items.classList.add("items");

    //new task input
    const newTask = document.createElement("button");
    newTask.type = "button";
    newTask.innerHTML = "+Add Task";
    newTask.classList.add("newTaskbtn");
    newTask.addEventListener("click", (event) => {
        closeBoxes();
        taskForm(el);    
    });        
    
   //appends tasks to projects
    for (let i = 0; i < el.tasks.length; i++) {
        let cur = el.tasks[i];
        //wrappers for tasks
        const task = document.createElement("div");
        task.classList.add("task");
        task.setAttribute("ind", i);
        const box1 = document.createElement("div");
        box1.id = "box_1";
        const box2 = document.createElement("div");
        box2.id = "box_2";
        box2.style.display = "none";
        const box3 = document.createElement("div");
        box3.id = "box_3";
        box3.style.display = "flex";
        box1.addEventListener("click", (event) => {
          let displayStatus = box1.parentNode.lastChild;
          if (displayStatus.style.display === "none") {
            displayStatus.style.display = "grid";
          } 
            else {
              displayStatus.style.display = "none";
            }
          });

        //append title
        const title = document.createElement("p");
        title.innerHTML = cur.title;
        title.id = "task_title";
        title.classList.add("attribute");
        title.addEventListener("click", (event) => {
          editTask("Task Title", title.innerHTML, cur);
        });       

        //append description
        const description = document.createElement("p");
        description.innerHTML = cur.description;
        description.classList.add("attribute");
        description.addEventListener("click", (event) => {
          editTask("Description", description.innerHTML, cur);
        });

        //append dueDate
        const dueDate = document.createElement("p");
        dueDate.innerHTML = cur.dueDate;
        dueDate.id = "due_date";
        dueDate.classList.add("attribute");
        dueDate.addEventListener("click", (event) => {
          editTask("Due Date", dueDate.innerHTML, cur);
        });

        //append priority
        const priority = document.createElement("p");
        priority.innerHTML = "Priority:<br>" + cur.priority;
        priority.id = "priority";
        priority.classList.add("attribute");
        priority.addEventListener("click", (event) => {
          editTask("Priority", priority.innerHTML, cur);
        });

        //remove task button
        const delTask = document.createElement("button");
        delTask.type = "button";
        delTask.classList.add("task_remove");
        delTask.innerHTML = "Remove";
        delTask.addEventListener("click", (event) => {
          let parent = delTask.parentNode;
          let ind = parent.getAttribute("ind");
          el.tasks.splice(ind, 1);
          render();
          setLocalStorage();
          allProj();
        });         
        items.appendChild(task);
        task.appendChild(box1);
        task.appendChild(box2);
        task.appendChild(box3);
        box1.appendChild(title);
        box1.appendChild(dueDate);
        box2.appendChild(description);
        box2.appendChild(box3);                
        box3.appendChild(priority);
        box2.appendChild(delTask);        
    }; 
    items.appendChild(newTask);    
  }

//
function allProj() {
    render();  
    showAll = true;  
    projects.forEach((el) => {
    showProject(el);
    })
}

function setLocalStorage() {
  window.localStorage.setItem('user', JSON.stringify(projects))
}



//edit task
function editTask(att, val, el) {
  closeBoxes();
  //clears previous input from display  
  const content = document.querySelector('.edit_modal');
  const projectsLength = content.children.length;
  if (projectsLength > 0) {
    for (let i = projectsLength - 1; i > 0; i--) {
      content.removeChild(content.children[i]);
    }
  }
  const disp = document.querySelector('.modal_display');
  const dispLength = disp.children.length;
  if (dispLength > 0) {
    for (let i = dispLength - 1; i > 0; i--) {
      disp.removeChild(disp.children[i]);
    }
  }
  //populate edit display for selected task attribute
  let editMod = document.querySelector(".edit_modal");
  editMod.style.display = "flex";

  //submit button
  let butt = document.createElement("button");
  butt.type = "button";  
  butt.id = "edit_submit";
  butt.innerHTML = "Submit"; 
  butt.addEventListener("click", (event) => {
    sub(att, el);
   }); 

  let lab = document.createElement("label");
  lab.id = "mod_lab";
  lab.innerHTML = att;

  disp.appendChild(lab);
  if (att === "Priority") {    
    let drop = document.createElement("select");
    drop.id = "edit_drop";
    const opt1 = document.createElement("option");
    const opt2 = document.createElement("option");
    const opt3 = document.createElement("option");
    opt1.value = "Low";
    opt1.text = "Low";
    opt2.value = "Medium";
    opt2.text = "Medium";
    opt3.value = "High";
    opt3.text = "High";
    editMod.appendChild(drop);
    drop.add(opt1);
    drop.add(opt2);
    drop.add(opt3);
    drop.addEventListener('keydown', event => {
      let editMod = document.querySelector(".edit_modal");
        if (editMod.style.display === "flex") {
          if (event.isComposing || event.keyCode === 13) {
            sub(att, el);
          }
        }    
      });

  }
    else if (att === "Due Date") {
      let date = document.createElement("input");
      date.type = "date";
      date.id = "edit_date";
      editMod.appendChild(date);
      date.addEventListener('keydown', event => {
        let editMod = document.querySelector(".edit_modal");
          if (editMod.style.display === "flex") {
            if (event.isComposing || event.keyCode === 13) {
              sub(att, el);
            }
          }    
        });      
    }
    else {
      let inp = document.createElement("input");
      inp.id = "editInput";
      inp.value = val;  
      inp.addEventListener('keydown', event => {
        let editMod = document.querySelector(".edit_modal");
          if (editMod.style.display === "flex") {
            if (event.isComposing || event.keyCode === 13) {
              sub(att, el);
            }
          }    
        });
           
    lab.setAttribute("for", "editInput");
    editMod.appendChild(inp);
    inp.focus()
    }  
  editMod.appendChild(butt);
  
  //event listeners for submitting edited attribute
  
  //submits new changes from edit popup
  function sub(att, el) {
    if (att === "Priority") {
      
      let dropVal = document.querySelector("#edit_drop");
      el.priority = dropVal.value;      
    } 
      else if (att === "Due Date") {
        let d = document.querySelector("#edit_date");
        el.dueDate = d.value;        
      }    
        else {
          let edit = document.querySelector("#editInput").value;          
          switch (att) {
            case 'Task Title':
              el.title = edit;
              break;
            case 'Description':
              el.description = edit;              
              break;
            case 'Project Title':
              el.title = edit;              
              break;
      }    
    }
    editMod.style.display = "none";
    render();
    setLocalStorage();
    allProj();
  }  
}


//call render on page load
window.addEventListener('load', (event) => {
  setListeners();
  if(localStorage.getItem('user') == null){
    projects.push(new Project("Default"));
  }
  else {
    projects = JSON.parse(window.localStorage.getItem('user'));
  }
  render();
  showProject(projects[0]);
});


//************ TEST TEST TEST TEST TEST TEST TEST ***********
window.addEventListener('keydown', event => {
  if (event.isComposing || event.keyCode === 107) {
    projects.push(new Project("Untitled"))
    const cur = projects.length - 1;
    projects[cur].tasks.push(new Task("task 1", "description", "sometime", "high"));
    render();
  }
});