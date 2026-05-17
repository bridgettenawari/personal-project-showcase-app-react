This project is a Single Page Application Project showcasing various accessories found in our shop!

SCREENSHOTS OF THE APP: Are in the public file

                                          **PROJECT NEEDS**
It contains: 
            > A landing page describing what the site is about. (HomePage)

             > A form page that allows for a new product to be added.(AddProduct)
             
             > A product page that will show the product.(DisplayProduct)
              
             > Allow the administrator to change different values of the product such as price.(PATCH backend and input)
              
             > A search functionality that allows users to dynamically search for a product.(filter)

It was made using: React, JavaScript, HTML and TailwindCSS
                                          **POSSIBLE BUGS(idk)**
Possible bugs: 
              > I'm not really sure about the PATCH thing for updating and if it works properly all the time

              > Misspelling props

              > Forgetting to return things e.g. return.json() and when i use curly brackets after an arrow function

                                          **TESTS**
❀ Steps to writing a test for a normal component that has props passed to it:

    1: Make fake Data (you can make it in a diff file and import it or in the same file) e.g. :

        const mockAccessory = {
                                id: "1",
                                description: "A red double knotted bow.",
                                image: "https://bowtastic.co.uk/cdn/shop/files/IMG_6698_600x600_crop_center.jpg?v=1720016300",
                                name: "Bowtastic Bow",
                                origin: "Italy",
                                price: "$3.50",
                              };

    2: Write what you want the test to do like an outline or sth e.g. Product renders properly checks whether a product renders

    3: Render the component your testing with all its props and pass in the fake data as the prop in place of where you passed in real data in the app e.g.:
    <Product accessory={mockAccessory} />

    4: Write what you expect to be on the screen e.g. if you expect Bowtastic Bow to be on the page, write:
    expect(screen.getByText(/BowTastic Bow/i)).toBeInTheDocument();

❀ Writing a test when you have a component that doesn't receive props but has a custom hook passing data to it:

    ❤︎ Because we use a custom hook to fetch data for homepage apparently you cant just test it like that 
      you have to mock the custom hook using vi.mock(and in here you put what you want it to mock).

    ❤︎ Then you create fake data then in the actual test you have to write whatyourmocking.mockReturnValue([your fake data here])
      then you can test normally.

Author: Bridgette Nawari