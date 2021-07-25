import React, { Component } from 'react';
import Home from '../components/Home'
// import { connect } from 'react-redux'

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <Home />
        {/* <HorseInput addHorse={this.props.addHorse}/>
        <Horses
          horses={this.props.horses}
          deletehorse={this.props.deleteHorse}
        /> */}
      </div>
    );
  }
}

// const mapStateToProps = state => ({ horses: state.horses })

// const mapDispatchToProps = dispatch => ({
//   addHorse: text => dispatch({type: 'ADD_HORSE', text}),
//   deleteHorse: id => dispatch({type: 'DELETE_HORSE', id})
// })

export default HomeContainer
// export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)