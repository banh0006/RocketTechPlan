import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as photoActions from './redux/actions/photoActions'

function App(props) {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    // get the photos and load it to the redux store
    props.actions.loadPhotos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return ( 
    <div className="App">
     
    </div>
  )
}

function mapStateToProps(state) {
  return {
      photos: state.photos
  }
}

function mapDispatchToProps(dispatch) {
  return {
      actions: {
        loadPhotos: bindActionCreators(photoActions.loadPhotos, dispatch)
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
