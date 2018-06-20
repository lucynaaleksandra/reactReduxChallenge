import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = theme => ({
  progress: {
    color: "rgb(180, 180, 180)",
    margin: theme.spacing.unit * 2,
  },
})

function Spinner(props) {
  const { classes, isSpinning } = props
  return (
    <span className={isSpinning ? "spinner spinning" : "spinner"}>
      <CircularProgress className={classes.progress} size={50} />
    </span>
  )
}
export default withStyles(styles)(Spinner)







// import React from 'react';
// import reducer from '../reducer'
// import { FadeLoader } from 'react-spinners';
// class Spinner extends React.Component {
//   render() {
//     let {
//       loading
//     } = this.props

//     return (
//       <div>
//         <FadeLoader style={styles}
//           color={"rgba(225, 225, 225)"}
//           loading={loading}
//         />
//       </div>
//     )
//   }
// }
// export default Spinner
