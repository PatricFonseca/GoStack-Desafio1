const express = require("express");

const server = express();

const projects = [];

server.use(express.json());

server.post("/projects", (req, res) => {
  const { id, title, tasks } = req.body;

  const project = { id, title, tasks };

  projects.push(project);

  return res.send();
});

server.get("/projects", (req, res) => {
  return res.json(projects);
});

// falta fazer...
server.put("/projects/:id", (req, res) => {
  const { id } = req.params;
});

server.delete("/projects/:id", (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex(p => p.id === id);

  projects.splice(projectIndex, 1);

  return res.send();
});

// POST /projects/:id/tasks
server.post("/projects/:id/tasks", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id === id);

  project.tasks.push(title);

  return res.json(project);
});

server.listen(3000);
