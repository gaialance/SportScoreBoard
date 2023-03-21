// import dependencies
import { render,screen , cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import '@testing-library/jest-dom/extend-expect'
import NavBarComponent from '.'
import { DateTime } from 'luxon'

afterEach(cleanup);

describe("rendering the NavBarComponent",()=>{
      it('making Snapsnot the landing page to compare',() => {
         const { container } = render(<NavBarComponent />)

         expect(container).toMatchSnapshot()
      });

     it('testing the dateformat in the screen correct or not at the start',() => {
         render( <NavBarComponent/> )

        expect(  screen.getByTestId("dateFormat")  ).toHaveTextContent("Today")
     });

     it('getting the date filter that is before that day when click on the previous button it will minus one day', async () => {
         render( <NavBarComponent/> )

        expect( screen.getByTestId("dateFormat")  ).toHaveTextContent("Today")
    
        await userEvent.click(screen.getByTestId('prevButton'))

        expect( screen.getByTestId("dateFormat") ).toHaveTextContent(DateTime.now().minus({day:1}).toLocaleString().toString())

     });

     it('getting the date filter that is before that day when click on the previous button it will add one day', async () => {
         render( <NavBarComponent/> )  

        expect( screen.getByTestId("dateFormat")  ).toHaveTextContent("Today")
    
        await userEvent.click(screen.getByTestId('nextButton'))

        expect( screen.getByTestId("dateFormat") ).toHaveTextContent(DateTime.now().plus({day:1}).toLocaleString().toString())

     });

})