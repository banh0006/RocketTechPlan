import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as photoActions from './redux/actions/photoActions'
import Photo from './components/Photo'
import './css/App.css'


function App(props) {
  const [photos, setPhotos] = useState(<div></div>)

  useEffect(() => {
    // get the photos and load it to the redux store
    props.actions.loadPhotos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (props.photos.length > 0) {
      const photoList = props.photos.map(photo => (
        <Photo key={photo.id} title={photo.title} thumbnailUrl={photo.thumbnailUrl} />
      ))

      setPhotos(photoList)
    } else {
      const noPhoto = <div>There is no photo to display</div>
      setPhotos(noPhoto)
    }
    
  }, [props.photos])

  return ( 
    <div className="App">
      <div className="container">
        { photos }
      </div>
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
