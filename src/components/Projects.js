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
    }
  }
}

const Projects = props => {
  const {styles} = props;
  const projects = [
    {
      name: "React TIUINWS",
      url: "https://react-tiuinws.netlify.app/",
      description: "React app overview for fetching static api repository TIUINWS."
    },
    {
      name: "Static APIs",
      url: "https://github.com/tiuinws/static-api",
      description: "A collection of static data about something."
    },
    {
      name: "Scratch Blogger Theme",
      url: "https://github.com/tiuinws/scratchbloggertheme",
      description: "A clean Blogger.com theme."
    }
  ]
  return (
    <div>
      <h3 style={styles.component.title}>Our Projects 🚧</h3>
      <div style={style.container}>
        {
          projects.map(project =>
          (
            <div style={style.item.container}>
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