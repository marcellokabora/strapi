import { render, screen} from "@testing-library/react"
import List from "../List"

test("should render a list of items", () => {
    const data = [
        {
            id: '1',
            name: 'Item',
            planet: 'Planet',
            description: 'description'
        }
    ]
    render(<List data={data}/>)
    
    const renderItems = screen.getAllByRole('listitem')
    expect(renderItems.length).toEqual(items.length)

})