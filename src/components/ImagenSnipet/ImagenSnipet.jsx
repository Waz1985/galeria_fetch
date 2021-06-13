const ImagenSnipet = ({ data }) => {
  return (
    <div className="col-xs-12 col-md-3 ">
      <div className="card">
        <img
          className="card-img-top"
          src={data.thumbnailUrl}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{data.tittle}</h5>
          <a href={data.url} className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};
export default ImagenSnipet;
