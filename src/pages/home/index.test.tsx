import { render , screen , cleanup  } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'
import Home from '.';
import ScoreLeague from '../components/scoreLeague';
import { fetchAllLeague } from '../api/fetchLeague';
import NavBarComponent from '../components/navBarComponent';

afterEach(cleanup);

describe("rending the home",()=>{
    it("start rending the home page",() => {

        const { container } = render( <Home /> )

        expect( container ).toMatchSnapshot()
    })
})