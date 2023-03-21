import { render,screen , cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import '@testing-library/jest-dom/extend-expect'

import ScoreLeague, { sortScore } from './'


describe("rending the component",()=>{
    it("start the rending the first data",()=>{
        const { container } = render( <ScoreLeague leagueId={0}/>)

        expect(container).toMatchSnapshot();
    })
    

    it("testing the sort function for the score board",()=>{
        const testData = [
            {
                homeTeam:"Nottom Forest",
                awayTeam:"Newcastle",
                homeTeamScore:2,
                awayTeamScore:4,
                date:new Date('2023-03-18 04:00:00 +08:00'),
              },
              {
                homeTeam:"Aston Villa",
                awayTeam:"Bournemouth",
                homeTeamScore:5,
                awayTeamScore:4,
                date:new Date('2023-03-18 05:00:00 +08:00'),
              },
              {
                homeTeam:"BrentFord",
                awayTeam:"Leicester",
                homeTeamScore:5,
                awayTeamScore:4,
                date:new Date('2023-03-18 10:00:00 +08:00'),
              }
        ]

        const expectedData = [
            {
                homeTeam:"BrentFord",
                awayTeam:"Leicester",
                homeTeamScore:5,
                awayTeamScore:4,
                date:new Date('2023-03-18 10:00:00 +08:00'),
            },
            {
                homeTeam:"Aston Villa",
                awayTeam:"Bournemouth",
                homeTeamScore:5,
                awayTeamScore:4,
                date:new Date('2023-03-18 05:00:00 +08:00'),
            },
            {
                homeTeam:"Nottom Forest",
                awayTeam:"Newcastle",
                homeTeamScore:2,
                awayTeamScore:4,
                date:new Date('2023-03-18 04:00:00 +08:00'),
            }, 
        ]
        render( <ScoreLeague leagueId={0}/>)

        expect( screen.getByTestId("title") ).toHaveTextContent("Premier League")
        
        //Act
        const testOutput = sortScore( testData )


        //Assert output
        expect ( testOutput ).toEqual(expectedData)
    })
})

