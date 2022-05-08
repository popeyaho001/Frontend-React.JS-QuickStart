import React, { Component } from 'react';
import { connect } from 'react-redux';
import './OutStandingDoctor.scss';
import {FormattedMessage} from 'react-intl';

import Slider from "react-slick";


class OutStandingDoctor extends Component {
    render() {
       

        return (
            <div className="section-share section-outstanding-doctor">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section">Bác sĩ nổi bật tuần qua</span>
                        <button className="btn-section">Xem thêm</button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className='outer-bg'>
                                        <div className="bg-image section-outstanding-doctor"></div>
                                    </div>
                                </div>
                                <div className="position text-center">
                                    <div>Doctor X</div>
                                    <div>Spycho</div>
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className='outer-bg'>
                                        <div className="bg-image section-outstanding-doctor"></div>
                                    </div>
                                </div>
                                <div className="position text-center">
                                    <div>Doctor X1</div>
                                    <div>Spycho 1</div>
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className='outer-bg'>
                                        <div className="bg-image section-outstanding-doctor"></div>
                                    </div>
                                </div>
                                <div className="position text-center">
                                    <div>Doctor X2</div>
                                    <div>Spycho 2</div>
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className='outer-bg'>
                                        <div className="bg-image section-outstanding-doctor"></div>
                                    </div>
                                </div>
                                <div className="position text-center">
                                    <div>Doctor X3</div>
                                    <div>Spycho 3</div>
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className='outer-bg'>
                                        <div className="bg-image section-outstanding-doctor"></div>
                                    </div>
                                </div>
                                <div className="position text-center">
                                    <div>Doctor X4</div>
                                    <div>Spycho 4</div>
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className='outer-bg'>
                                        <div className="bg-image section-outstanding-doctor"></div>
                                    </div>
                                </div>
                                <div className="position text-center">
                                    <div>Doctor X5</div>
                                    <div>Spycho 5</div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
}

const mapDispatchToProps =  dispatch =>{
    return{

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);