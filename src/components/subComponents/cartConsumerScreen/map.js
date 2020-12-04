
import { MapContainer, Marker,TileLayer,Popup } from 'react-leaflet'
import { Button } from 'react-bootstrap'
import classes from "./map.module.css"

function MyMap() {

  //const [zoom, setZoom] = useState(11)
  return (
      <div className = {classes.mapDiv}>
    <MapContainer style = {{zIndex:0}} center={[45.4, -75.7]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
    <Button variant="warning" style = {{width:'100%'}}>My Location</Button>
</div>
  )
}
export default MyMap;