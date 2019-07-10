import React, { Component } from 'react';
import Wrapper from '../components/Wrapper/Wrapper';
import Search from '../components/Search/Search';
import ImgWrapper from '../components/ImgWrapper/ImgWrapper';

class Home extends Component {
    render() {
        return (
            <Wrapper>
                <Search/>
                <ImgWrapper/>
            </Wrapper>
        );
    }
}

export default Home;