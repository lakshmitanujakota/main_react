#First commit related to React

//JSX => Not a React & html code
//JSX => html like syntex


/*
Header
  - logo
  - nav-items
Body
  - res-container
  - res-card
    - restaurents
Footer
  - copy right
  - Address
  - Contact
  - Email
*/


Two type of Export/Import

Default Export/Import:

  - export default Component_name;
  - import Component_name from " file path";

Named Export/Import:

  - export const component_name
  - import { component_name} from "file path";


  React hooks(state variables) 

  - super powerful variables
  
#  hooks are at the end of day normal js utility functions

   - useState()
   - useEffect()

# useEffect()

      - if dependency arugument is not given then useEffect will render everytime component renders
      - if dependency argument is passed [], then useEffect will render at the start of component calls
      - if dependency argument is passed , then useEffect will render at the page or that component render and and each time that argument called.

# useState()

Dos'
 - useState() - should be declared in the main component.

 Don'ts' 
  - useStste() - should not be declared in if or loops or in small functions.
  - should not be declared in outside of the main function

Adv
 - whenever state variable updated, react triggers a reconsiliation cycle(re-render the component)


 # 2 types of Routing
 - client side routing
 - server side routing

