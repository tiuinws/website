const style = {
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent:"center",
    marginRight:"auto",
    marginLeft:"auto",
    textAlign:"center"
  },
  item: {
    padding:"45px 15px",
    margin:"15px",
    width:"550px",
    overflow:"auto",
    border:"1.5px solid white",
    borderRadius:"15px"
  }
}

const Goals = props => {
  const {styles} = props;
  const goals = [
      "🤗 Empower Walisongo Colleagues 🥳",
      "👽 Learn the Latest Technology 🕴",
      "🧠 Build Portfolio and Learn Creatively  🤹🏼‍♂️",
      "🏋 Prepare Industry or <your-own> Standard 👌"
  ]
  return (
    <div>
      <h3 style={styles.component.title}>Our Goals 🎉</h3>
      <div style={style.container}>
        {
          goals.map(goal =>
          (
            <div style={style.item}>
              {goal}
            </div>
          )
          )}
      </div>
    </div>
  )
}

export default Goals;