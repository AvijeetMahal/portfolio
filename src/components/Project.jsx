import React from 'react'
import project from './data/projects.json'
const Project = () => {
  return (
    <>
      <div className="container projects my-3" id='projects'>
        <h1>PROJECTS</h1>
        <div className="row d-flex justify-content-center align-items-center">
          {project.map((data) => (<>
            <div key={data.id}  className="col-md-4 d-flex justify-content-center align-items-center my-3">
              <div className="card bg-dark text-light" style={{ width: "18rem", border: "1px solid #fff", borderRadius: "10px",boxShadow:"5px 5px 10px 5px rgba(101, 175, 10, 0.5)" }}
                    data-aos="zoom-in" data-aos-duration="1000"
              >
                <div className="img d-flex justify-content-center align-items-center p-3">
                  <img src={data.imageSrc} className="card-img-top" alt="..."
                    style={{
                      width: "100%",
                      height: "200px",
                      border: "1px solid #fff",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text"
                  style={{overflow:"hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", width: "100%", height: "50px"}}>
                    {data.description}
                  </p>
                  <a href={data.demo} className="btn btn-primary">Demo</a>
                </div>
              </div>
            </div>
          </>))}
        </div>
      </div>
    </>
  )
}

export default Project