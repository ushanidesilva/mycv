import React, { Component } from "react";
import personalInfo from "../img/work.png";

class Experience extends Component {
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="card animated fadeInLeft" style={{backgroundColor:'#c7e6eb'}}>
        <div className="card-body">
          <img src={personalInfo} width="70" height="70" />
          <h3 className="card-title" ><b>Step 2 : Work Experience Information</b></h3>
          <hr />
        </div>
        <form onSubmit={this.continue}>
          <div className="row col-lg-10 mx-auto">
          <div className="col-lg-12 text-left">
              <h4>
                <b>
                  <i className="fas fa-check-circle mr-1"></i>1 Work Experience
                </b>
              </h4>
              <hr />
            </div>

            <div className="col-lg-4 text-left">
              <label style={{color:'black'}}><b>Company Name*</b></label>
              <input
                type="text"
                name="exp1_org"
                className="form-control"
                defaultValue={values.status === 1 ? "" : values.exp1_org}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-lg-4 text-left">
              <label><b>Position *</b></label>
              <input
                type="text"
                name="exp1_pos"
                className="form-control"
                defaultValue={values.status === 1 ? "" : values.exp1_pos}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-lg-4 text-left">
              <label><b> Duration * </b></label>
              <input
                type="text"
                name="exp1_dur"
                className="form-control"
                defaultValue={values.status === 1 ? "" : values.exp1_dur}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <br/>
          <div className="row col-lg-10 mx-auto">
            <div className="col-lg-12 text-left">
              <label><b>Description *</b>(Please Describe your experience here) </label>
              <input
                type="text"
                name="exp1_desc"
                className="form-control"
                defaultValue={values.status === 1 ? "" : values.exp1_desc}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <br />

          <div className="row col-lg-10 mx-auto">
            <div className="col-lg-12 text-left">
              <label>
              Currently Working Here :
                <input name="isGoing" type="checkbox" />
              </label>
            </div>
          </div>
          <br/>

          <div className="row col-lg-10 mx-auto">
            <div className="col-lg-12 text-left">
              <h4>
                <b>
                  <i className="fas fa-check-circle mr-1"></i>2 Work Experience
                </b>
              </h4>
              <hr />
            </div>
            <div className="col-lg-4 text-left">
              <label><b>Company Name </b></label>
              <input
                type="text"
                name="exp2_org"
                className="form-control"
                defaultValue={values.status === 1 ? "" : values.exp2_org}
                onChange={handleChange}
                
              />
            </div>
            <div className="col-lg-4 text-left">
              <label><b>Position</b></label>
              <input
                type="text"
                name="exp2_pos"
                className="form-control"
                defaultValue={values.status === 1 ? "" : values.exp2_pos}
                onChange={handleChange}
                
              />
            </div>
            <div className="col-lg-4 text-left">
              <label><b>Duration</b> </label>
              <input
                type="text"
                name="exp2_dur"
                className="form-control"
                defaultValue={values.status === 1 ? "" : values.exp2_dur}
                onChange={handleChange}
            
              />
            </div>
          </div>
          <div className="row col-lg-10 mx-auto">
            <div className="col-lg-12 text-left">
              <label><b>Description </b>(Please Describe your experience here)</label>
              <input
                type="text"
                name="exp2_desc"
                className="form-control"
                defaultValue={values.status === 1 ? "" : values.exp2_desc}
                onChange={handleChange}
                
              />
            </div>
          </div>
          <br />
          <div className="row col-lg-10 mx-auto">
            <div className="col-lg-12 text-left">
              <label>
                Currently Working Here:
                <input name="isGoing" type="checkbox" />
              </label>
            </div>
          </div>

          <br />
          <div className="container text-center">
            <button type="button" className="btn btn-black" onClick={this.back}>
              <i className="fas fa-angle-left mr-1"></i>Back
            </button>
            <button type="submit" className="btn btn-red">
              Next<i className="fas fa-angle-right ml-1"></i>
            </button>
          </div>
          <br />
        </form>
      </div>
    );
  }
}

export default Experience;
