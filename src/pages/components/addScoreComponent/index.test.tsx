// import dependencies
import { render,screen , cleanup, fireEvent } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'
import AddScoreComponent from '.'

afterEach(cleanup);

describe("rendering the NavBarComponent",()=>{
    it('making Snapsnot the landing page to compare',() => {
        const { container } = render(<AddScoreComponent leagueId={0} />)
        
        expect(container).toMatchSnapshot()
    })

    it("clicking on the create button and generating snapshot and cancel test",() => {
        const { container } = render(<AddScoreComponent leagueId={0} />)

        const btnCreate = screen.getByTestId("buttonTest")  

        expect(container).toMatchSnapshot()

        fireEvent.click(btnCreate);

        expect(container).toMatchSnapshot()

        const btnCancel = screen.getByTestId("cancelBtn")

        fireEvent.click(btnCancel);

        expect(container).toMatchSnapshot()
    })

    test("clicking on the create button and submit snapshot",() => {

        const { container } = render(<AddScoreComponent leagueId={0} />)

        expect(container).toMatchSnapshot()

        const btnCreate = screen.getByTestId("buttonTest")  

        fireEvent.click(btnCreate);

        expect(container).toMatchSnapshot()

        const btnSubmit = screen.getByTestId("submitBtn")

        fireEvent.click(btnSubmit);

        expect(container).toMatchSnapshot()
    })
})