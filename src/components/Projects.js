import React,{ useEffect, useState } from "react";
import {LINK} from "../utils/remotes";

const style = {
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "1200px",
    marginRight: "auto",
    marginLeft: "auto"
  },
  item: {
    container: {
      padding: "0px 15px",
      margin:"15px",
      height: "300px",
      width: "300px",
      overflow: "auto",
      border: "2px solid white",
      textAlign: "center",
      borderRadius:"15px"
    },
    title: {
      borderBottom: "2px solid white",
      height:"60px",
      maxHeight:"60px",
      marginRight:"auto",
      marginLeft:"auto",
      whiteSpace:"nowrap"
    },
    desc: {
      fontSize: "calc(8px + 1vmin)",
      height:"100px",
      maxHeight:"110px",
      overflow:"auto",
      borderBottom:"2px solid white"
    },
    url: {
      fontSize:"calc(8px + 1vmin)",
      textDecoration: "none",
      color:"#dbbbff"
    }
  }
}

const Projects = props => {
  const {styles} = props;
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(LINK.projects)
    .then(res => res.ok ? res.json() : null)
    .then(resJson => {
      setProjects(resJson)
    })
  },[])

  return (
    <div>
      <h3 style={styles.component.title}>Our Projects 🚧</h3>
      <div style={style.container}>
        {
          projects.map(project =>
          (
            <div style={style.item.container} key={project.name}>
              <h4 style={style.item.title}>{project.name}</h4>
              <p style={style.item.desc}>{project.description}</p>
              <a href={project.url} target="_blank" rel="noreferrer" style={style.item.url}>View Project</a> 👆
            </div>
          )
          )}
      </div>
    </div>
  )
}

export default Projects;