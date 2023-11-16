import image from './organization-chart.jpg';
function about() {
    return (
        <div className="App">
            <img src= {image} alt="img" style={{width: 200 + 'px'}}/>
        </div>
    )
}

export default about;