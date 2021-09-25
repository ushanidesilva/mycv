import React, { Component } from 'react'
import education from '../img/education.png'

export default class Education extends Component {

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (

            <div className="card animated fadeInLeft" style={{backgroundColor:'#c7e6eb'}}>
                <div className="card-body">
                <img src={education} width="70" height="70" />
                    <h3 className="card-title">Step 4 : Education Information</h3>
                    <hr />
                </div>
                <form onSubmit={this.continue}>

                    



                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3><b><i className="fas fa-check-circle mr-1"></i>University / College Information</b></h3>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label><b>College/University Name *</b></label>
                            <input type="text" name="edu1_school" className="form-control" defaultValue={values.status === 1 ? '' : values.edu1_school} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label><b>Graduated Year *</b></label>
                            <input type="text" name="edu1_year" className="form-control" defaultValue={values.status === 1 ? '' : values.edu1_year} onChange={handleChange} required/>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label><b>Qualification *</b></label>
                            <input type="text" name="edu1_qualification" className="form-control" defaultValue={values.status === 1 ? '' : values.edu1_qualification} onChange={handleChange} required/>
                        </div>

                    </div>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <label><b>Description *</b></label>
                            <input type="text" name="edu1_desc" className="form-control" defaultValue={values.status === 1 ? '' : values.edu1_desc} onChange={handleChange} required />
                        </div>
                    </div>


                    <br />

                    


                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3><b><i className="fas fa-check-circle mr-1"></i>School Information</b></h3>
                            <hr/>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label><b>School Name *</b></label>
                            <input type="text" name="edu2_school" className="form-control" defaultValue={values.status === 1 ? '' : values.edu2_school} onChange={handleChange} required/>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label><b>Year *</b></label>
                            <input type="text" name="edu2_year" className="form-control" defaultValue={values.status === 1 ? '' : values.edu2_year} onChange={handleChange} required/>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label><b>Qualification *</b></label>
                            <input type="text" name="edu2_qualification" className="form-control" defaultValue={values.status === 1 ? '' : values.edu2_qualification} onChange={handleChange} required/>
                        </div>

                    </div>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <label><b>Description *</b></label>
                            <input type="text" name="edu2_desc" className="form-control" defaultValue={values.status === 1 ? '' : values.edu2_desc} onChange={handleChange} required/>
                        </div>
                    </div>
                    <br />
                    <div className="container text-center">
                        <button type="button" className="btn btn-black" onClick={this.back}><i className="fas fa-angle-left mr-1"></i>Back</button>
                        <button type="submit" className="btn btn-red">Next<i className="fas fa-angle-right ml-1"></i></button>
                    </div>
                    <br />

                </form>

            </div>
        )
    }
}
