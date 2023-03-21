import { render,screen , cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import '@testing-library/jest-dom/extend-expect'

import Score from './'
import { ScoreBoardType } from 'src/pages/api/fetchLeague'


describe("rending the scoreComponent",()=>{
    it("Create a snapshot of the render data",()=>{
        const testData:ScoreBoardType = 
            {
                homeTeam:"Nottom Forest",
                awayTeam:"Newcastle",
                homeTeamScore:2,
                awayTeamScore:4,
                date:new Date('2023-03-18 04:00:00 +08:00'),
            }

        const { container } = render( <Score {...testData}/>)

        expect(container).toMatchSnapshot()

    })

    it("start the rending the first data",()=>{
        const testData:ScoreBoardType = 
            {
                homeTeam:"Nottom Forest",
                awayTeam:"Newcastle",
                homeTeamScore:2,
                awayTeamScore:4,
                date:new Date('2023-03-18 04:00:00 +08:00'),
            }

        render( <Score {...testData}/>)


        expect( screen.getByTestId("homeTeam") ).toHaveTextContent(testData.homeTeam)
        expect( screen.getByTestId("awayTeam") ).toHaveTextContent(testData.awayTeam)
        expect( screen.getByTestId("homeTeamScore") ).toHaveTextContent(String(testData.homeTeamScore))
        expect( screen.getByTestId("awayTeamScore") ).toHaveTextContent(String(testData.awayTeamScore))
    })
})

