var Gallery = React.createClass({
  getInitialState: function() {
    return {
      photos: [
        {img: "/img/gal1.jpg", thumb: "/img/gal1_thumb.jpg"},
        {img: "/img/gal2.jpg", thumb: "/img/gal2_thumb.jpg"},
        {img: "/img/gal3.jpg", thumb: "/img/gal3_thumb.jpg"}
      ],
      activePhoto: -1,
      add: false
    };
  },
  selectPhoto: function(photoIndex) {
    this.setState({
      activePhoto: photoIndex
    });
  },
  add: function() {
    this.setState({
      add: true
    });
  },
  addImage: function() {
    this.setState({
      photos: this.url.value.trim() !== "" ? this.state.photos.concat({img: this.url.value, thumb: this.thumb.value}) : this.state.photos,
      add: false
    });
  },
  render: function() {
    var render;
    if (this.state.activePhoto > -1) {
      render = <div className="gallery">
        <div>
          <img className="gal-display" src={this.state.photos[this.state.activePhoto].img} onClick={this.selectPhoto.bind(this, -1)} />
          <p>Click the image to return to the Gallery.</p>
        </div>
      </div>;
    } else {
      render = <div className="gallery">
        <div className="gal-span">
          <p>Click an image to view.</p>
        </div>
        {this.state.photos.map((photo, index) => <div key={index}>
          <img className="gal-thumb" src={photo.thumb} onClick={this.selectPhoto.bind(this, index)} />
        </div>)}
        {this.state.add
        ? <div className="gal-span">
          <input type="text" placeholder="Image URL" ref={(input) => { this.url = input;}} />
          <input type="text" placeholder="Image thumbnail URL" ref={(input) => { this.thumb = input;}} />
          <button onClick={this.addImage}>Add Image</button>
        </div>
        : <div className="gal-span" onClick={this.add}>
          <h1>+</h1>
          <p>Add Image</p>
        </div>}
      </div>;
    }
    return render;
  }
});

ReactDOM.render(<Gallery />, document.getElementById('gallery'));
